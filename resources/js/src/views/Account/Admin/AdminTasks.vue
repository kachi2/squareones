<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4"> Tasks</h5>
        <div class="row g-4">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link to="/admin/tasks-assign" class="btn btn-primary w-100">Assign Tasks</router-link>
            </div>
            <div class="col-12">
                <div class="card shadow-sm  min-vh-100">
                    <div class="card-body">

                        <EasyDataTable :loading="itemsLoading" class="easy-data-table" :headers="itemsHeader"
                            :items="items" buttons-pagination v-model:server-options="serverOptionsInvoices"
                            :server-items-length="itemsTotal">

                            <template #item-user_task.name="item">
                                <span> <span class="badge bg-info-subtle text-dark">{{getName(item.user_task.name).toUpperCase()}} </span> {{ item.user_task.name }}</span>
                            </template>
                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                         

                            <template #item-status="item">
                                <span :class="['badge', 'bg-' + templateStore.taskStatusColor(item.status) + '-subtle']"
                                      class="bgText py-2 text-dark">{{ item.status }}
                                    <span class="status-indicator-inside text-dark me-2"> </span>
                            </span>

                            </template>

                            <template #item-priority="item">
                                <span class=" fst-italic"
                                    :style="{ color: templateStore.taskPriorityColor(item.priority) }">
                                    <i class="bi bi-flag-fill"> </i> {{ item.priority }}
                                </span>

                            </template>

                            <template #item-due_date="item">
                                {{ useFxn.dateDisplay(item.due_date) }}
                            </template>

                            <template #item-created_at="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                            <!-- <template #item-action="item">
                                <button @click="openUpdateTaskModal(item)" class="btn btn-sm btn-primary p-1">
                                    Update Task
                                </button>
                            </template> -->

                            <template #item-comment="item">
                                <button @click="templateStore.openTaskCommentModal(item, 'admin')"
                                    class="btn btn-warning">
                                    View Task
                                </button>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>


        </div>
    </div>




    <button ref="modalOpen" class="d-none" type="button" data-bs-toggle="modal" data-bs-target="#updateTaskModal">
    </button>
    <div class="modal fade" id="updateTaskModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered " role="document">
            <div class="modal-content">
                <div class="modal-header text-capitalize border-0">
                    <h5 class="modal-title" id="modalTitleId">
                        Update Task
                    </h5>
                    <modalCloseBtn />
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label">Task Title</label>
                            <input v-model="taskForm.title" type="text" class="form-control">
                        </div>
                        <div class="col-12">
                            <label class="form-label">Task Content</label>
                            <textarea v-model="taskForm.content" style="height: 100px;" class="form-control"></textarea>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Priority</label>
                            <select v-model="taskForm.priority" class="form-select">
                                <option v-for="priority in priorityDropdown" :value="priority.value"
                                    :key="priority.value">
                                    {{ priority.name }}
                                </option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Due Date</label>
                            <VueDatePicker class="small" :format="useFxn.dateDisplay" :clearable="false"
                                :enable-time-picker="false" auto-apply v-model="taskForm.due_date">
                            </VueDatePicker>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button ref="modalCloser" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button v-if="taskForm.isSaving" class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading
                    </button>

                    <button @click="updateTask" v-else type="button" class="btn btn-primary text-capitalize">
                        Update task
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- taskCommentsModal -->
    <adminTasksCommentsModal @done="getAllTasks"/>

</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch, computed} from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';
import { useToast } from 'vue-toast-notification';
import { onBeforeRouteLeave } from 'vue-router';
import type { tasksPriorityTypes, taskFormInterface } from '@/stores/interfaces'
import { useTemplateStore } from '@/stores/templateStore';
import adminTasksCommentsModal from '@/components/adminTasksCommentsModal.vue';

const toast = useToast()

const templateStore = useTemplateStore()

const companies = reactive<any>({
    list: [],
})
onMounted(() => {
    getAllTasks()
})


function getName(name:any) { 
 const initials = name.split(" ")
  const names = initials.map((initial: any)=> initial.charAt(0)).join("")
//  console.log(names)
  return names
}

async function getAllTasks() {
    try {
        itemsLoading.value = true
        const queryString = new URLSearchParams(serverOptions.value).toString();
        const resp = await api.adminGetAllTasks()
        // return;
        const data = resp.data
        itemsTotal.value = data.total
        items.value = data.data
        companies.list = data.data
        console.log(companies.list, 'companies.list')
        itemsLoading.value = false
    } catch (error) {
        console.log(error);

    }
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


const items = ref([])
const itemsTotal = ref(0)
const itemsLoading = ref<boolean>(true)
const itemsHeader = [
    { text: "User", value: "user_task.name" },
    { text: "Task Name", value: "title" },
    { text: "Priority", value: "priority" },
    { text: "Created", value: "created_at" },
    { text: "Due Date", value: "due_date" },
    { text: "Status", value: "status" },
    { text: "", value: "comment" },
];

watch(serverOptions, (value) => { getAllTasks(); }, { deep: true });

// watch(templateStore, () =>  {getAllTasks(); }, { deep: true });

// editing ######################

const modalOpen = ref<any>(null)
const modalCloser = ref<any>(null)


function openUpdateTaskModal(item: any) {
    taskForm.task_id = item.id
    taskForm.title = item.title
    taskForm.content = item.content
    taskForm.due_date = item.due_date ? new Date(item.due_date) : new Date()
    taskForm.priority = item.priority
    taskForm.user_id = item.user_id
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


const priorityDropdown: { name: string, value: tasksPriorityTypes }[] = [
    { name: 'High', value: 'high' },
    { name: 'Medium', value: 'medium' },
    { name: 'low', value: 'low' },
]

async function updateTask() {
    try {
        if (!taskForm.title || !taskForm.content || !taskForm.priority) {
            toast.warning('Please complete fields', { position: 'top-right' })
            return;
        }
        taskForm.isSaving = true
        const form = new FormData();
        // @ts-ignore
        form.append('user_id', taskForm.user_id);
        // @ts-ignore
        form.append('task_id', taskForm.task_id);
        form.append('title', taskForm.title);
        form.append('content', taskForm.content);
        form.append('priority', taskForm.priority);
        form.append('due_date', taskForm.due_date.toDateString());
        const resp = await api.adminUpdateTask(form)

        taskForm.isSaving = false
        modalCloser.value.click()
        toast.success('Task Updated', { position: 'top-right' })
        getAllTasks()

    } catch (error) {
        toast.error('Something went wrong', { position: 'top-right' })
        console.log(error);
        taskForm.isSaving = false
        modalCloser.value.click()

    }
}


onBeforeRouteLeave(() => {
    modalCloser.value.click()
})


</script>
<style lang="css" scoped>
.border-grey {
    border: 1px #8080802f solid !important;
}

.btn {
    font-size: 12px;
}
.modal-xl {
  max-width: 80%; 
}
.bgText{
    width:100px;
}
.rounded-card{
    width:100%;
    border-radius:100%;
    background:#076ab6;
    color:#fff;
    padding:5px;
    position:relative;
}



</style>
