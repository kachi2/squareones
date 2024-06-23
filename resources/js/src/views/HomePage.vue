<template>
  <div class="bg-white pb-5">
    <div class="container">
      <div class="row g-3 justify-content-center align-items-center">
        <div class="col-md-11">
          <div class="car bg-transparent border-0">
            <div class="card-body justify-content-center text-center ">
              <div class="fw-bold small">COMPANY INFORMATION</div>
              <div class="main-name">Hon Kong Company Limited by Shares</div>
              <div class="fw-bold">Welcome to Square One</div>
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="text-muted">
                    This form will take approximately 5-10 munites to complete, if however you are unable to compete in
                    in
                    one
                    go, you can always save and come back anytime.
                  </div>
                  <div class="text-muted mt-2">
                    Before you start, please make sure you have the following documents ready to fast track your
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="car border-0 bg-transparent">
            <div class="card-body">
              <section>
                <div class="text-muted h6">FOR INDIVIDUALS (DIRECTORS, MEMBERS, BENEFICIAL OWNERS)</div>
                <div class="row g-3 mt-1">
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-person-vcard"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Identification Proof</span>
                        <div class="text-muted"> Hong Kong Indentity Card / Passport / Travel Document / National
                          Identity
                          Card (Must have a photograph bearing the person.) </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-award"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Address Proof</span>
                        <div class="text-muted"> Your latest residential address proof showing your name(e.g uitility
                          bill
                          or bank statement issued within the last 3 months.) </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style="margin-top: 65px;">
                <div class=" text-muted h6">FOR CORPORATE DIRECTORS AND MEMBERS</div>
                <div class="row g-3 mt-1">
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-award"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Certificate of Incorporation</span>
                        <div class="text-muted"> Avalid copy of a certificate of incorporation </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-award"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Business Reigistration Certificate (if applicable)</span>
                        <div class="text-muted"> A valid business registration certificate </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-file-earmark-text"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Memorandom and Articles of Association</span>
                        <div class="text-muted"> A copy of memorandom and articles of Association </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-file-earmark-text"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Letter of Authorization</span>
                        <div class="text-muted"> Written authority (Including board resolution or similar written
                          authority of corporations) </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-file-earmark-text"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Ownership Cart</span>
                        <div class="text-muted"> Details of the ownership and control structure of the company </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-file-earmark-text"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Register Directors</span>
                        <div class="text-muted"> Showing all directors. </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-person-vcard"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">All Benficial Owners</span>
                        <div class="text-muted"> Documents for each beneficial owner holding more than 25% of share
                          capital (Refer to documents for individuals) </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="col-12"></div>

        <div class="col-md-4 col-lg-3">
          <router-link to="/login" class="btn btn-primary w-100">
            Start <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style lang="css" scoped>
.main-name {
  color: var(--sidebar-bg);
  font-size: 2.34rem;
  font-weight: 700;
  margin-block: 30px
}

.color-thick {
  color: var(--sidebar-bg);
}

@media(max-width: 767px) {
  .main-name {
    font-size: 1.4rem;
    font-weight: 700;
    margin-block: 14px;
  }
}
</style>
