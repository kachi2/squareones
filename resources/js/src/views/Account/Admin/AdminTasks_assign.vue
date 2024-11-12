<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4">Assign Tasks</h5>
        <div class="row g-4">

            <div class="col-12">
                <div class="card shadow-sm  min-vh-100">
                    <div class="card-body">
                        <div class="row g-3 justify-content-center">
                            <div class="col-12">
                                <div class="float-end">
                                    <label class="form-label">Search Users</label>
                                    <input v-model="searchField" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <div v-if="!filteredUsersBySearch.length" class="text-muted">
                                            No search results.
                                        </div>
                                        <ul v-else class="list-group list-group-flush">
                                            <li class="list-group-item py-3 " :class="{ 'bg-selected': x.isSelected }"
                                                v-for="x in filteredUsersBySearch">
                                                <div class="row justify-content-between align-items-center">
                                                    <div @click="selectUser(x)"
                                                        class="col-lg-12 text-info-emphasis fw-bold small cursor-pointer">
                                                        <i v-if="x.isSelected" class="me-3 bi bi-check-circle-fill"></i>
                                                        <i v-else class="me-3 bi bi-circle"></i>
                                                        {{ x.name }} ({{ x.email }})
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 mt-5">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <div class="text-center mb-3 fs-3">
                                            <i class="bi bi-card-checklist text-primary me-3"></i>
                                            <i class="bi bi-person-check text-danger"></i>
                                        </div>
                                        <h5 class="text-center fw-bold">A Simpler way to Assign Tasks</h5>
                                        <div class="text-center">
                                            Experience an effortless solution for assigning and tracking tasks,
                                            designed to keep everything organized and on track.
                                        </div>

                                        <div class="d-flex justify-content-center mt-3">
                                            <button @click="openTaskModal" :disabled="!selectedUser"
                                                class="btn btn-primary">
                                                Assign Task
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>


    <button ref="modalOpen" class="d-none" type="button" data-bs-toggle="modal" data-bs-target="#postTaskModal">

    </button>

    <div class="modal fade" id="postTaskModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header text-capitalize border-0">
                    <h5 class="modal-title" id="modalTitleId">
                        Assign Task
                    </h5>
                    <button ref="modalClose" type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button v-if="taskForm.isSaving" class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading
                    </button>

                    <button @click="submitTask" v-else type="button" class="btn btn-primary text-capitalize">
                        Assign
                    </button>
                </div>
            </div>
        </div>
    </div>



</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import api from '@/stores/Helpers/axios'
import useFxn from '@/stores/Helpers/useFunctions';
import { useToast } from 'vue-toast-notification';
import { onBeforeRouteLeave } from 'vue-router';
import type { tasksPriorityTypes,taskFormInterface } from '@/stores/interfaces'

const toast = useToast()

const users = ref<any[]>([])
const isSaving = ref<boolean>(false)

onMounted(() => {
    getUsers()
})



async function getUsers() {
    try {
        const resp = await api.getUsers(`?page=1`)
        users.value = resp.data?.data?.users?.data ?? []
    } catch (error) {
        console.log(error);

    }
}

const selectedUser = ref<any>(null)
const selectUser = (x: any) => {
    selectedUser.value = x
    users.value.forEach((x: any) => {
        x.isSelected = false
    })
    x.isSelected = true
}

const searchField = ref('')
const filteredUsersBySearch = computed(() => {
    let filtered: any[] = []
    if (searchField.value) {
        filtered = users.value.filter((x: any) => x.email.includes(searchField.value) || x.name.includes(searchField.value))
        if (filtered.length) {
            filtered.forEach(x => {
                x.isSelected = false
            })
        }

        // console.log(users.value);

    }
    else {
        selectedUser.value = null
    }
    return filtered
})

const modalOpen = ref<any>(null)
const modalClose = ref<any>(null)


function openTaskModal() {
    modalOpen.value.click()
}

const taskForm = reactive<taskFormInterface>({
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



async function submitTask() {
    try {
        if (!taskForm.title || !taskForm.content || !taskForm.priority) {
            toast.warning('Please conplete fields', { position: 'top-right' })
            return;
        }
        taskForm.isSaving = true
        const form = new FormData();
        form.append('user_id', selectedUser.value.id);
        form.append('title', taskForm.title);
        form.append('content', taskForm.content);
        form.append('priority', taskForm.priority);
        form.append('due_date', taskForm.due_date.toDateString());
        const resp = await api.adminPostTask(form)

        taskForm.isSaving = false
        modalClose.value.click()
        searchField.value = ''
        toast.success('Task Created', { position: 'top-right' })

    } catch (error) {
        toast.error('Something went wrong', { position: 'top-right' })
        console.log(error);
        taskForm.isSaving = false
        modalClose.value.click()

    }
}



onBeforeRouteLeave(() => {
    modalClose.value.click()
})


</script>
<style lang="css" scoped>
.border-grey {
    border: 1px #8080802f solid !important;
}

.bg-selected {
    background-color: rgba(236, 240, 209, 0.822) !important;
    border-radius: 5px;
}
</style>
