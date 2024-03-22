<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <router-link to="/dashboard">
                <!-- <img class="side-icon" src="/icons/sidebar/grid-four.png" alt=""> -->
                <i class="bi bi-grid me-2"></i>Dashboard
            </router-link>

        </li>
        <li class="list-group-item">
            <div class="accordion" id="accordionMenuCaompany">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="menu1Heading">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#accordionMenuCompanyCollapse" aria-expanded="true"
                            aria-controls="accordionMenuCompanyCollapse">
                            <!-- <img class="side-icon" src="/icons/sidebar/main-component.png" alt=""> -->
                            <i class="bi bi-buildings me-2"></i>Company
                        </button>
                    </h2>
                    <div id="accordionMenuCompanyCollapse" class="accordion-collapse collapse "
                        aria-labelledby="menu1Heading" data-bs-parent="#accordionMenuCaompany">
                        <div class="accordion-body">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">
                                        <router-link to="/account/company/company_info">
                                            <i class="bi bi-dot"></i> AB Limited
                                        </router-link>
                                    </a>
                                </li>

                                <li class="nav-item"><a class="nav-link" href="#">
                                        <!-- <router-link to="/account/company/company_info"> -->
                                        <i class="bi bi-dot"></i> CD Limited
                                        <!-- </router-link> -->

                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="accordion" id="accordionMenuADocument">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="menu1Heading">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#documentCollapse" aria-expanded="true"
                            aria-controls="accordionMenuADocumentCollapse">
                            <!-- <img class="side-icon" src="/icons/sidebar/document-upload.png" alt=""> -->
                            <i class="bi bi-file-earmark-arrow-up me-2"></i>
                            Documents
                        </button>
                    </h2>
                    <div id="documentCollapse" class="accordion-collapse collapse " aria-labelledby="menu1Heading"
                        data-bs-parent="#accordionMenuADocument">
                        <div class="accordion-body">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">Drivers License</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Birth Certificate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="accordion" id="accordionMenuUsers">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="menu1Heading">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#accordionMenuUsersCollapse" aria-expanded="true"
                            aria-controls="accordionMenuUsersCollapse">
                            <!-- <img class="side-icon" src="/icons/sidebar/people.png" alt=""> -->
                            <i class="bi bi-people me-2"></i>
                            Users
                        </button>
                    </h2>
                    <div id="accordionMenuUsersCollapse" class="accordion-collapse collapse "
                        aria-labelledby="menu1Heading" data-bs-parent="#accordionMenuUsers">
                        <div class="accordion-body">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">John Doe</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Micheal Kachi</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>

    <div class="mt-5">
        <!-- Some borders are removed -->
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Preferences</li>
            <li class="list-group-item">
                <img class="side-icon" src="/icons/sidebar/profile.png" alt="">Account
            </li>
            <li class="list-group-item">
                <img class="side-icon" src="/icons/sidebar/setting-2.png" alt="">Setting
            </li>

            <li class="list-group-item">
                <img class="side-icon" src="/icons/sidebar/money.png" alt="">Billings
            </li>

            <li class="list-group-item">
                <img class="side-icon" src="/icons/sidebar/message-question.png" alt="">Help
            </li>

        </ul>

    </div>
</template>

<style lang="css" scoped>
.list-group-item {
    background: transparent;
    border: none;
    color: #fff;
    padding-bottom: 15px;
}

.list-group-item a {
    color: #fff;
    text-decoration: none;
}


.accordion-item {
    background: transparent;
    border: none !important;
}


.accordion-button {
    padding: 0px;
    background-color: transparent;
    /* font-size: 16px; */
    color: #fff;
    border: none;
    box-shadow: none;
}

.accordion-button.collapsed::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-item .nav-item a {
    color: #fff;
    margin-block: 0px;
    font-size: 14px;
}

.accordion-body {
    padding-bottom: 0px !important;
    padding-top: 3px !important;
}


.side-icon {
    margin-right: 8px;
}

.list-group-item .router-link-active {
    color: var(--primary-color) !important
}
</style>
