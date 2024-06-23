<template>
  <div class="bg-white min-vh-100">
    <div class="row g-0">
      <div class="col-lg-6 min-vh-100">
        <div class="container">
          <div class="everything-center overflow-hidden">
            <div class="col-12 col-md-7">
              <div class="car p-3 rounded-3 bg-whit border-0">
                <div class="card-body">
                  <h4 class="fw-bold lh-1">Sign In</h4>
                  <div>Access Squareone using your email and password</div>

                  <div class="row mt-4 g-3">
                    <div class="col-12">
                      <label class="form-label fw-bold"> Email </label>
                      <input v-model="email" v-bind="emailAttrs" type="text" class="form-control exemption">
                      <span class="small text-danger">{{ errors.email }}</span>
                    </div>

                    <div class="col-12">
                      <div class="form-label fw-bold"> Password
                        <span v-if="password" @click="changeInputType" class="float-end">
                          <i v-if="inputType == 'password'" class="bi bi-eye-slash cursor-pointer"></i>
                          <i v-else class="bi bi-eye cursor-pointer"></i>
                        </span>
                      </div>
                      <input v-model="password" v-bind="passwordAttrs" :type="inputType" class="form-control exemption">
                      <span class="small text-danger">{{ errors.password }}</span>
                    </div>

                    <div class="col-12 mt-4">
                      <button :disabled="Object.keys(errors).length > 0" @click="submitForm()" v-if="!isSaving"
                        class="btn btn-primary w-100">
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
      <div class="col-lg-6 d-none d-lg-block bg-body-tertiary  min-vh-100">
        <div class="container">
          <div class="everything-center overflow-hidden">
            <div class="col-10">
              <div class="card border-0 shadow-sm bg-light">
                <div class="card-body">
                  <img style="width: 100%;" src="/images/snap_shot.png" alt="">
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
import { ref } from 'vue';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()

const isSaving = ref(false)


const inputType = ref('password')
const changeInputType = () => {
  inputType.value = inputType.value == 'password' ? 'text' : 'password'
}

const { errors, handleSubmit, defineField, setFieldValue } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
  // initialValues: {
  //   email: 'jesmikky@gmail.com',
  //   password: 'mikky123',
  // },
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const submitForm = handleSubmit(async (values) => {
  isSaving.value = true
  try {
    const resp = await api.login(values)
    const data = resp.data.data
    // console.log(data);

    authStore.login(data)

    getTwoFactorStatus()

  } catch (error: any) {
    console.log(error, 'error');

    if (error.response && error.response.status === 401) {
      toast.error('Invalid credentials, try again', { position: 'top-right' })
      isSaving.value = false
      return;
    }
  }

});




async function getTwoFactorStatus() {
  try {
    const resp = await api.checkAccountStatus()
    const data = resp.data.data

    if (data.enable_2fa_at) {
      authStore.twofactorEnabled = '1'
      authStore.twofactorAttendedTo = null
      router.push({ name: 'TwoFactorAuthentication' })
    }
    else {
      authStore.twofactorEnabled = null
      router.push({ name: 'Start' })
    }

    window.location.reload()
    // console.log(resp.data);
  } catch (error: any) {
    console.log(error);
  }
}

</script>

<style lang="css" scoped></style>
