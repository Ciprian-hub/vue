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
  <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <form class="space-y-6 mt-8" @submit="login">
        <Alert v-if="errorMsg">
          {{ errorMsg }}
          <span
              @click="errorMsg = ''"
              class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
          >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
        </Alert>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" v-model="user.email"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-200 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :class="{
          'cursor-not-allowed': loading,
          'hover:bg-indigo-500': loading,
        }"
          >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
          />
        </span>
            <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
              <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
              ></circle>
              <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <router-link :to="{name: 'Register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Register for free
        </router-link>
      </p>
    </div>

</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import store from "../store";
import {useRouter} from "vue-router";
import {ref} from "vue";
import Alert from "../components/Alert.vue";

const loading = ref(false)
let errorMsg = ref("")
const router = useRouter()

const user = {
  email: '',
  password: '',
}

function login(ev){
  loading.value = true
  ev.preventDefault()
  store
      .dispatch('login', user)
      .then(() => {
        loading.value = false
        router.push({
          path: '/dashboard'
        });
      }).catch((err) => {
        loading.value = false
        errorMsg.value = err.response.data.error
  })
}

</script>

<style scoped>

</style>