<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4"> Tasks</h5>
        <div class="row g-4">

            <div class="col-12">
                <div class="card shadow-sm  min-vh-100">
                    <div class="card-body">

                        <EasyDataTable :loading="itemsLoading" class="easy-data-table" :headers="itemsHeader"
                            :items="items" buttons-pagination v-model:server-options="serverOptionsInvoices"
                            :server-items-length="itemsTotal">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <!-- <template #item-status="item">
                                <span :style="{color: templateStore.taskStatusColor(item.status)}" class="badge bg-secondary-subtle">
                                    {{ item.status }}
                                </span>

                            </template> -->

                            <template #item-status="item">
                                <div class="status-dropdown">
                                    <div class="dropdown">
                                        <button
                                            :class="['btn', 'dropdown-toggle', 'btn-sm', 'btn-' + templateStore.taskStatusColor(item.status)]"
                                            type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <span class="status-indicator-inside bg-white me-2"></span> {{ item.status
                                            }}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a class="dropdown-item status-todo"
                                                    :style="{ color: templateStore.taskStatusColor('TODO') }" href="#"
                                                    @click.prevent="updateTask(item, 'TO-DO')"><span
                                                        class="status-indicator"></span> TO DO</a></li>
                                            <li><a class="dropdown-item status-doing" href="#"
                                                    @click.prevent="updateTask(item, 'DOING')"><span
                                                        class="status-indicator"></span> DOING</a></li>
                                            <li><a class="dropdown-item status-complete" href="#"
                                                    @click.prevent="updateTask(item, 'COMPLETE')"><span
                                                        class="status-indicator"></span> COMPLETE</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </template>

                            <template #item-priority="item">
                                <span class=" " :style="{ color: templateStore.taskPriorityColor(item.priority) }">
                                    <i class="bi bi-flag-fill"> </i> {{ item.priority }}
                                </span>

                            </template>

                            <template #item-due_date="item">
                                <span v-if="checkDueDate(item.due_date)" :class="textColor"> {{
                                    useFxn.dateDisplay(item.due_date) }} </span>
                                <span v-else=""> {{ useFxn.dateDisplay(item.due_date) }} </span>
                            </template>

                            <template #item-created_at="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                            <template #item-comment="item">
                                <button @click="templateStore.openTaskCommentModal(item, 'user')"
                                    class="btn btn-warning">
                                    Comments
                                </button>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <!-- <button ref="modalOpen" class="d-none" type="button" data-bs-toggle="modal" data-bs-target="#updateTaskModal">

    </button> -->

    <!-- taskCommentsModal -->
    <TasksCommentsModal />


</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';
import { useToast } from 'vue-toast-notification';
import { onBeforeRouteLeave } from 'vue-router';
import type { tasksPriorityTypes, taskFormInterface } from '@/stores/interfaces'
import { useTemplateStore } from '@/stores/templateStore';
import TasksCommentsModal from '@/components/tasksCommentsModal.vue';

const toast = useToast()

const templateStore = useTemplateStore()

const companies = reactive<any>({
    list: [],
})
onMounted(() => {
    getAllTasks()
    updateUserTasks()
})


async function updateUserTasks() {
    await api.updateAllUserTask()
}

async function getAllTasks() {
    try {
        itemsLoading.value = true
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.userGetTasks()

        const data = resp.data.data
        itemsTotal.value = data.total
        items.value = data.data
        companies.list = data.data
        itemsLoading.value = false
    } catch (error) {
        console.log(error);

    }
}

function checkDueDate(dates: any) {
    const date = new Date(dates)
    const today = new Date()

    if (today > date) return true;
    return false;
}

const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const serverOptionsInvoices = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});
const textColor = ref('red')

const items = ref([])
const itemsTotal = ref(0)
const itemsLoading = ref(true)
const itemsHeader = [
    { text: "Task Title", value: "title" },
    { text: "Tasks", value: "content" },
    { text: "Priority", value: "priority" },
    { text: "Status", value: "status" },
    { text: 'Date Created', value: 'created_at' },
    { text: "Due Date", value: "due_date" },
    { text: "", value: "comment" },

    // { text: "", value: "action" },
];

watch(serverOptions, (value) => { getAllTasks(); }, { deep: true });



// updating ######################

const modalOpen = ref<any>(null)
const modalClose = ref<any>(null)

const taskStatus = ref<string>('pending')

const statusDropdown: any = [
    { name: 'Pending', value: 'pending' },
    { name: 'Completed', value: 'completed' },
]


function openUpdateTaskModal(item: any) {
    taskForm.task_id = item.id
    taskForm.user_id = item.user_id
    taskForm.title = item.title
    taskForm.content = item.content
    taskForm.due_date = item.due_date ? new Date(item.due_date) : new Date()
    taskForm.priority = item.priority
    taskStatus.value = item.status
    modalOpen.value.click()
}

const taskForm = reactive<taskFormInterface>({
    task_id: '',
    user_id: '',
    title: '',
    priority: 'high',
    content: '',
    due_date: new Date(),
    isSaving: false
})




async function updateTask(task: any, status: any) {
    try {

        // taskForm.isSaving = true
        const form = new FormData();
        form.append('user_id', task.user_id);
        form.append('task_id', task.id);
        form.append('status', status);
        console.log(task)
        // return
        const resp = await api.userUpdateTask(form)

        // taskForm.isSaving = false
        toast.success('Task Updated', { position: 'top-right' })
        getAllTasks()

    } catch (error) {
        toast.error('Something went wrong', { position: 'top-right' })
        console.log(error);
        // taskForm.isSaving = false
    }
}


// onBeforeRouteLeave(() => {
//     modalClose.value.click()
// })


</script>
<style lang="css" scoped>
.border-grey {
    border: 1px #8080802f solid !important;
}

.status-dropdown {
    max-width: 200px;
}

.status-dropdown .dropdown-toggle {
    border: none;
    padding: 8px 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.status-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #212529;
}

.status-dropdown .dropdown-item button {
    display: flex;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    padding: 8px;
    text-align: left;
}

.status-dropdown .dropdown-item .status-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 10px;
}

.status-indicator-inside {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 10px;
}

.status-todo .status-indicator {
    background-color: #6c757d;
}

.status-doing .status-indicator {
    background-color: #e83e8c;
}

.status-complete .status-indicator {
    background-color: #198754;
}

.btn {
    font-size: 10px;
    max-width: 80%
}
</style>
