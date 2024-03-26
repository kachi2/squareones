<template>
  <div class="bg-white">
    <div class="container">
      <div class="everything-center overflow-hidden">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card bg-transparent border-0">
            <div class="card-body">
              <!-- <img src="/icons/sidebar/squareone_main.png" alt=""> -->
              <h4 class="fw-bold lh-1">Sign In</h4>
              <div class="lh-1">Access Squareone using your email and password</div>

              <div class="row mt-4 g-3">
                <div class="col-12">
                  <label class="form-label fw-bold"> Email </label>
                  <input v-model="form.email" type="text" class="form-control">
                </div>

                <div class="col-12">
                  <div class="form-label fw-bold"> Password
                    <span v-if="form.password" @click="changeInputType" class="float-end">
                      <i v-if="inputType == 'password'" class="bi bi-eye-slash cursor-pointer"></i>
                      <i v-else class="bi bi-eye cursor-pointer"></i>
                    </span>
                  </div>
                  <input v-model="form.password" :type="inputType" class="form-control">
                </div>

                <div class="col-12 mt-4">
                  <button @click="submitForm" v-if="!form.isSaving" class="btn btn-primary w-100">
                    SIGN IN <i class="bi bi-chevron-right"></i>
                  </button>
                  <button v-else class="btn btn-primary w-100" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    SIGNING IN...
                  </button>

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
import { ref, reactive } from 'vue';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import useFxn from '@/stores/Helpers/useFunctions';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  // email: 'jesmikky@gmail.com',
  // password: 'mikky123',
  email: '',
  password: '',
  isSaving: false
})

const inputType = ref('password')
const changeInputType = () => {
  inputType.value = inputType.value == 'password' ? 'text' : 'password'
}


async function submitForm() {

  if (!form.email || !form.password) {
    toast.default('Please complete fields!', { position: 'top-right' })
    return;
  }

  if (!useFxn.isEmail(form.email)) {
    toast.warning('This email looks invalid', { position: 'top-right' })
    return;
  }

  form.isSaving = true
  try {
    const resp = await api.login(form)
    const data = resp.data.data
    console.log(resp.data.data);

    authStore.login(data.UserToken)
    router.push({ name: 'Start' })
  } catch (error: any) {
    console.log(error);

    if (error.response && error.response.status === 401) {
      toast.error('Invalid credentials, try again', { position: 'top-right' })
      return;
    }
  }
  finally {
    form.isSaving = false
  }
}

</script>

<style lang="css" scoped></style>
