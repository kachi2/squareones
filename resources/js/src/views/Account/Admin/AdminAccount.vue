<template>
    <div class="container">

        <div class="card border-0 min-vh-100">
            <div class="card-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                            type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            Profile
                        </button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button"
                            role="tab" aria-controls="tab2" aria-selected="false">
                            Documents Upload
                        </button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button"
                            role="tab" aria-controls="tab3" aria-selected="false">
                            Notifications
                        </button>
                    </li>
                </ul>


                <!-- Tab panes -->
                <div class="tab-content pt-5">
                    <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <div class="row g-3">

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header fw-bold bg-transparent border-0">Information</div>
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="form-label">Name:</div>
                                                <input type="text" class="form-control" value="Micheal Kachi">
                                            </div>
                                            <div class="col-12">
                                                <div class="form-label">Email:</div>
                                                <input type="text" class="form-control" value="kachi@mail.com">
                                            </div>
                                            <div class="col-12">
                                                <div class="form-label"> Date Of Birth:</div>
                                                <input type="text" class="form-control" value="12 Jan, 2024">
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary float-end">Update Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header fw-bold bg-transparent border-0">Password</div>
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="form-label">Old Password:</div>
                                                <input type="password" class="form-control">
                                            </div>
                                            <div class="col-12">
                                                <div class="form-label">New Password:</div>
                                                <input type="password" class="form-control">
                                            </div>
                                            <div class="col-12">
                                                <div class="form-label"> Repeat Password:</div>
                                                <input type="password" class="form-control">
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary float-end">Update Password</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">

                    </div>
                    <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        <div class="row g-3">
                            <div class="col-lg-5">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="form-label">Notification Title:</div>
                                                <input type="text" class="form-control" placeholder="enter title..">
                                            </div>
                                            <div class="col-12">
                                                <div class="form-label">Notification Text:</div>
                                                <textarea rows="6" class="form-control"
                                                    placeholder="enter text here..."></textarea>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100">
                                                    Send Notification <i class="bi bi-send"></i>
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






    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()



</script>
<style lang="css" scoped></style>