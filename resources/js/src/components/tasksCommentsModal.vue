<template>
    <button ref="taskModalOpener" type="button" class=" d-none" data-bs-toggle="modal" data-bs-target="#tsk-cm-mdl">
    </button>

    <div class="modal fade" id="tsk-cm-mdl" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleIdT" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header d-inline">
                    <modalCloseBtn class="float-end ms-5" />
                    <h5 class="modal-title fw-light text-muted small float-end" id="modalTitleIdT">
                        Created {{ `${useFxn.dateDisplay(task.created_at)}` }}
                    </h5>
                </div>
                <div class="modal-body py-0">
                    <div class="row">
                        <div class="col-lg-7 py-3">
                            <h5 class="modal-title text-capitalize" id="modalTitleIdT">
                                {{ task?.title }}
                            </h5>
                            <div class="alert alert-warning mt-3 border-0" role="alert">
                                {{ task?.content }}
                            </div>
                            <div class="table-responsive">
                                <table class="table table-primary table-borderless bg-transparent">
                                    <tbody>
                                        <tr>
                                            <td> <i class="bi bi-stars"></i> Status: </td>
                                            <td>
                                                <span :class="`text-${templateStore.taskStatusColor(task.status)}`">
                                                    {{ task.status }}
                                                </span>
                                            </td>
                                            <td v-for="i in 10"></td>
                                        </tr>
                                        <tr>
                                            <td> <i class="bi bi-calendar"></i> Dates: </td>
                                            <td>
                                                <span class="">
                                                    {{ ` ${useFxn.dateDisplay(task.created_at)} -
                                                    ${useFxn.dateDisplay(task.due_date)}` }}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr v-if="task?.user_task?.name">
                                            <td> <i class="bi bi-person"></i> Assignee: </td>
                                            <td>
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
                                                <span
                                                    :style="{ color: templateStore.taskPriorityColor(task.priority) }">
                                                    {{ task.priority }}
                                                </span>
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
import { onBeforeRouteLeave } from 'vue-router';
import useFxn from '@/stores/Helpers/useFunctions';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';


const toast = useToast()

const templateStore = useTemplateStore()
const { commentsModalIsClicked: modal,
    currentTaskComments: comments,
    currentTaskObj: task,
    currentUserType: userType,
} = storeToRefs(templateStore)

const taskModalOpener = ref<any>(null)
const taskModalCloser = ref<any>(null)

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



async function getTasks_ActivitiesAndComments() {
    try {
        const commentsResp = userType.value == 'admin' ? await api.adminGetTaskComments(task.value.id) : await api.userGetTaskComments(task.value.id)
        const activitesResp = userType.value == 'admin' ? await api.adminGetTaskActivities(task.value.id) : await api.userGetTaskActivities(task.value.id)
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
</style>