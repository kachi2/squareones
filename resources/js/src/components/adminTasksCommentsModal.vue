<template>
    <button ref="taskModalOpener" type="button" class=" d-none" data-bs-toggle="modal" data-bs-target="#tsk-cm-mdl">
    </button>

    <div class="modal fade" id="tsk-cm-mdl" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleIdT" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header d-inline">
                    <modalCloseBtn class="float-end ms-5" @click="emit('done')" />
                    <h5 class="modal-title fw-light text-muted small float-end" id="modalTitleIdT">
                        Created {{ `${useFxn.dateDisplay(task.created_at)}` }}
                    </h5>
                </div>
                <div class="modal-body py-0">
                    <div class="row">
                        <div class="col-lg-7 py-3">
                           
                            <h5 class="modal-title text-capitalize" id="modalTitleIdT">
                                <div class="form-floating-custom ">
                                  <input type="text" v-model="task.title" class="form-control modal-form" @blur="updateTask(task)">
                               <label class=" " for="confirm"> Task title <span class="text-danger"> * </span></label>
                            </div>
                            </h5>
                     
                            <div class="alert alert-info mt-3 border-0" role="alert">
                                <div class="form-floating-custom ">
                                <textarea class="form-control modal-text" v-model="task.content" @blur="updateTask(task)"> </textarea>
                                <label class=" " for="confirm"> Task Description <span class="text-danger"> * </span></label>
                            </div>
                            </div>
                            <div class="table-responsive" style="height:300px" >
                                <table class="table table-primary table-borderless bg-transparent">
                                    <tbody>
                                        <tr>
                                            <td> <i class="bi bi-stars"></i> Status: </td>
                                            <td>
                                    <div class="status-dropdown">
                                    <div class="dropdown">
                                        <span
                                            :class="['badge py-2', 'bg-' + templateStore.taskStatusColor(task.status)]"
                                            
                                            aria-expanded="false">
                                            <span class="status-indicator-inside bg-white me-2"></span> {{ task.status
                                            }}
                                        </span>
                                        <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a class="dropdown-item status-todo"
                                                    :style="{ color: templateStore.taskStatusColor('TO-DO') }" href="#"
                                                    @click.prevent="updateTaskStatus(task, 'TO-DO')"><span
                                                        class="status-indicator"></span> TO DO</a></li>
                                            <li><a class="dropdown-item status-doing" href="#"
                                                    @click.prevent="updateTaskStatus(task, 'DOING')"><span
                                                        class="status-indicator"></span> DOING</a></li>
                                            <li><a class="dropdown-item status-complete" href="#"
                                                    @click.prevent="updateTaskStatus(task, 'COMPLETE')"><span
                                                        class="status-indicator"></span> COMPLETE</a></li>
                                                </ul> -->
                                            </div>
                                        </div>
                                                        <!-- <span :class="`text-${templateStore.taskStatusColor(task.status)}`">
                                                    {{ task.status }}
                                                </span> -->
                                            </td>
                                            <td v-for="i in 10"></td>
                                        </tr>
                                        <tr>
                                            <td> <i class="bi bi-calendar"></i> Due Date: </td>
                                            <td>
                                                <VueDatePicker class="small" :format="useFxn.dateDisplay" :clearable="false"
                                                :enable-time-picker="false" auto-apply v-model="task.due_date"  @blur="updateTask(task)">
                                            </VueDatePicker>
                                            </td>
                                        </tr>

                                        <tr v-if="task?.user_task?.name">
                                            <td> <i class="bi bi-person"></i> Assignee: </td>
                                            <td>
                                               <span class="badge bg-info-subtle text-dark">{{getName(task.user_task.name).toUpperCase()}} </span> 
                                                <span class="">
                                                    {{ task?.user_task?.name ?? '' }}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <i class="bi bi-flag-fill"></i>
                                                Priority:
                                            </td>
                                            <td>
                                                <select v-model="task.priority" class="form-select"  @blur="updateTask(task)">
                                                <option v-for="priority in priorityDropdown" :value="priority.value"
                                                    :key="priority.value">
                                                    {{ priority.name }}
                                                </option>
                                            </select>
                                                <!-- <span
                                                    :style="{ color: templateStore.taskPriorityColor(task.priority) }">
                                                    {{ task.priority }}
                                                </span> -->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <!-- comments -->
                        <div class="col-lg-5 activity-tab px-0">
                            <div class="p-3 fw-bold header shadow-sm">
                                <select v-model="ActivitiesAndComments.contentShowing"
                                    class="form-select bg-dynamic fw-bold">
                                    <option value="activities">Activities</option>
                                    <option value="comments">Comments</option>
                                </select>

                                <!-- Activities -->
                            </div>
                            <div v-if="ActivitiesAndComments.isLoading" class="body">
                                <isLoadingComponent />
                            </div>
                            <div v-else class="p-3  body">
                                <ul v-if="ActivitiesAndComments.contentShowing != 'comments'"
                                    class="list-group list-group-flush">
                                    <li v-for="act in ActivitiesAndComments.activities" :key="act.id"
                                        class="list-group-item border-0 px-0">
                                        <i class="bi bi-dot"></i> {{ act.activity }} <br>
                                        <span class=" fst-italic">{{ useFxn.dateDisplay(act.created_at, 'm,y,t')
                                            }}</span>
                                    </li>

                                </ul>

                                <ul v-else class="list-group list-group-flush">
                                    <li v-for="comm in ActivitiesAndComments.comments" :key="comm.id"
                                        class="list-group-item px-0">
                                        <div class="text-muted">{{ comm?.users?.name }}</div>
                                        <div>{{ comm.comment }}</div>
                                        <div class=" fst-italic text-muted xsmall">
                                            {{ useFxn.dateDisplay(comm.created_at, 'm,y,t') }}</div>
                                    </li>
                                </ul>

                            </div>
                            <div class="p-3  footer">
                                <form @submit.prevent="submitComment" class="row g - 3">
                                    <div class="col-9">
                                        <input :disabled="ActivitiesAndComments.contentShowing != 'comments'"
                                            v-model="commentForm.text" type="text" class="form-control"
                                            placeholder="enter comment here..">
                                    </div>
                                    <div class="col-3">
                                        <button
                                            :disabled="commentForm.isSending || ActivitiesAndComments.contentShowing != 'comments'"
                                            type="submit" class="btn btn-primary w-100">
                                            <i class="bi bi-send"></i> Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="modal-footer border-0"> -->
                <button ref="taskModalCloser" type="button" class="btn btn-secondary d-none" data-bs-dismiss="modal">
                    Close
                </button>
                <!-- </div> -->
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { useTemplateStore } from '@/stores/templateStore';
import { storeToRefs } from 'pinia';
import { reactive, ref, watch } from 'vue';
import type { tasksPriorityTypes, taskFormInterface } from '@/stores/interfaces'
import { onBeforeRouteLeave } from 'vue-router';
import useFxn from '@/stores/Helpers/useFunctions';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';

const toast = useToast()
const emit = defineEmits(['done'])
const templateStore = useTemplateStore()
const { commentsModalIsClicked: modal,
    currentTaskComments: comments,
    currentTaskObj: task,
    currentUserType: userType,
} = storeToRefs(templateStore)

const taskModalOpener = ref<any>(null)
const taskModalCloser = ref<any>(null)



const priorityDropdown: { name: string, value: tasksPriorityTypes }[] = [
    { name: 'High', value: 'high' },
    { name: 'Medium', value: 'medium' },
    { name: 'low', value: 'low' },
]


// async function updateTaskStatus(task:any, status:any)
// {
//     try{
//         const form = new FormData();
//         form.append('user_id', task.user_id);
//         form.append('task_id', task.id);
//         form.append('status', status);
//         const resp = await api.userUpdateTask(form)
//         if(resp)toast.success('Task Updated', { position: 'top-right' })

//     } catch (error) {
//         toast.error('Something went wrong', { position: 'top-right' })
//         console.log(error);
//         // taskForm.isSaving = false
//     }

// }

async function updateTask(task: any, status?: any) {
    try {

        // taskForm.isSaving = true
        const form = new FormData();
        form.append('task_id', task.id);
        form.append('title', task?.title);
        form.append('content', task?.content);
        form.append('priority', task?.priority);
        form.append('due_date', typeof task.due_date != 'string'?task.due_date.toDateString():task.due_date);
        // form.append('status', status);
        console.log(task?.title)
        getTasks_ActivitiesAndComments()
        // return
        const resp = await  api.adminUpdateTask(form)
        if(resp)toast.success('Task Updated', { position: 'top-right' })

    } catch (error) {
        toast.error('Something went wrong', { position: 'top-right' })
        console.log(error);
        // taskForm.isSaving = false
    }
}


watch(() => modal.value, () => {
    taskModalOpener.value.click()
    ActivitiesAndComments.activities = []
    ActivitiesAndComments.comments = []
    ActivitiesAndComments.contentShowing = 'activities'
    ActivitiesAndComments.isLoading = true
    getTasks_ActivitiesAndComments()
    
})

// commentsANDactivities

const commentForm = reactive({
    text: '',
    isSending: false
})

const ActivitiesAndComments = reactive<any>({
    activities: [],
    comments: [],
    contentShowing: 'activities',
    isLoading: true
})

function getName(name:any) { 
 const initials = name.split(" ")
  const names = initials.map((initial: any)=> initial.charAt(0)).join("")
//  console.log(names)
  return names
}


async function getTasks_ActivitiesAndComments() {
    try {
        const commentsResp = await api.adminGetTaskComments(task.value.id)
        const activitesResp = await api.adminGetTaskActivities(task.value.id)
        ActivitiesAndComments.activities = activitesResp?.data?.data?.data ?? []
        ActivitiesAndComments.comments = commentsResp?.data?.data?.data ?? []
        ActivitiesAndComments.isLoading = false

    }
    catch {
        ActivitiesAndComments.isLoading = false
    }
}



async function submitComment() {
    if (commentForm.text) {
        try {
            commentForm.isSending = true
            const formData = new FormData();
            formData.append('task_id', task.value.id);
            formData.append('comment', commentForm.text);
            const resp = userType.value == 'admin' ? await api.adminSendTaskComment(formData) : await api.userSendTaskComment(formData)
            commentForm.text = ''
            getTasks_ActivitiesAndComments()
            commentForm.isSending = false

        }
        catch {
            commentForm.isSending = false
            toast.error('Something went wrong with your request')
        }
    }

}











onBeforeRouteLeave(() => {
    taskModalCloser.value.click()
})


</script>
<style scoped>

.activity-tab {
    border-left: #dee2e6 solid 1px;
}

.activity-tab .header {
    border-bottom: #dee2e6 solid 1px;
}

.activity-tab .body {
    background-color: #dee2e625;
    height: 400px;
    overflow-y: auto;
}
.modal-form{
    border:none;
    font-size:20px;
    font-weight:bold;
}
input:hover{ 
    background-color: #e6f7ff;
    border:1px solid #00000067;
}
input:focus{
    border:1px solid #00000067;
}
.modal-text {
    border:none;
    font-size:15px;
}

textarea{
    border:none;
}
textarea:focus {
    border:1px solid rgba(232, 226, 226, 0.589);
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