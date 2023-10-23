<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="h-10 w-auto" >
      <svg class="mx-auto" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_4)">
          <path d="M3.5878 40.7351L6.56235 45.7337L26.8938 32.5066L45.8965 18.9422L24.9108 29.1742L3.5878 40.7351ZM31.9326 18.2293C31.4566 20.1273 31.4934 22.1177 32.0392 23.9968L37.0828 20.9954C37.0745 20.0475 37.3291 19.1166 37.7847 18.2886L34.7606 13.2068L34.7549 13.2054C33.356 14.619 32.4004 16.3617 31.9325 18.2293L31.9326 18.2293ZM34.8499 28.7122C37.6749 31.5064 41.8108 32.583 45.6301 31.4723L42.6059 26.3905C41.6623 26.3923 40.7201 26.1692 39.8908 25.7101L34.85 28.7122L34.8499 28.7122ZM39.5036 10.3796L42.5278 15.4614C43.4718 15.46 44.411 15.682 45.2402 16.1411L50.2838 13.1397C47.4589 10.3452 43.3228 9.26863 39.5036 10.3796ZM47.3491 23.5632L50.3732 28.6451C53.1711 25.8178 54.1985 21.6696 53.089 17.8536L48.0454 20.855L48.0509 20.8564C48.0592 21.8044 47.8049 22.7358 47.3491 23.5632Z" fill="#4F46E5"/>
        </g>
        <defs>
          <clipPath id="clip0_103_4">
            <rect width="46.7967" height="46.7967" fill="white" transform="translate(0.798584 45.7793) rotate(-75.7562)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for free</h2>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="register">
        <Alert v-if="Object.keys(errors).length" class="flex-col items-stretch text-sm">
          <div v-for="(field, i) of Object.keys(errors)" :key="i">
            <div v-for="(error, ind) of errors[field] || []" :key="ind">
              * {{ error }}
            </div>
          </div>
        </Alert>
        <div>
          <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
          <div class="mt-2">
            <input placeholder="Full Name" id="fullName" name="fullName" type="text" autocomplete="name" required="" v-model="user.name"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input placeholder="Email" id="email" name="email" type="email" autocomplete="email" required="" v-model="user.email"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input placeholder="Password" id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Password Confirmation</label>
          </div>
          <div class="mt-2">
            <input placeholder="Password Confirmation"
                   id="password_confirmation"
                   name="password_confirmation"
                   type="password"
                   autocomplete="current-password_confirmation"
                   required=""
                   v-model="user.password_confirmation"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login to your account
        </router-link>
      </p>
    </div>

</template>

<script setup>
import store from "../store";
import {useRouter} from "vue-router";
import {ref} from "vue";
import Alert from "../components/Alert.vue";

const router = useRouter()
const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
};
const loading = ref(false);
const errors = ref({})

function register(ev){
  ev.preventDefault();
  loading.value = true;
  store
      .dispatch('register', user)
      .then(() => {
        loading.value = false;
        router.push({
          name: "Dashboard"
        })
      }).catch((err) => {
    loading.value = false;
        if(err.response.status === 422) {
          errors.value = err.response.data.errors
        }
  })
}

</script>

<style scoped>

</style>