<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full bg-gray-100">
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">

              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_103_4)">
                  <path d="M3.5878 40.7351L6.56235 45.7337L26.8938 32.5066L45.8965 18.9422L24.9108 29.1742L3.5878 40.7351ZM31.9326 18.2293C31.4566 20.1273 31.4934 22.1177 32.0392 23.9968L37.0828 20.9954C37.0745 20.0475 37.3291 19.1166 37.7847 18.2886L34.7606 13.2068L34.7549 13.2054C33.356 14.619 32.4004 16.3617 31.9325 18.2293L31.9326 18.2293ZM34.8499 28.7122C37.6749 31.5064 41.8108 32.583 45.6301 31.4723L42.6059 26.3905C41.6623 26.3923 40.7201 26.1692 39.8908 25.7101L34.85 28.7122L34.8499 28.7122ZM39.5036 10.3796L42.5278 15.4614C43.4718 15.46 44.411 15.682 45.2402 16.1411L50.2838 13.1397C47.4589 10.3452 43.3228 9.26863 39.5036 10.3796ZM47.3491 23.5632L50.3732 28.6451C53.1711 25.8178 54.1985 21.6696 53.089 17.8536L48.0454 20.855L48.0509 20.8564C48.0592 21.8044 47.8049 22.7358 47.3491 23.5632Z" fill="#4F46E5"/>
                </g>
                <defs>
                  <clipPath id="clip0_103_4">
                    <rect width="46.7967" height="46.7967" fill="white" transform="translate(0.798584 45.7793) rotate(-75.7562)"/>
                  </clipPath>
                </defs>
              </svg>

<!--              <img-->
<!--                  class="h-8 w-8"-->
<!--                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"-->
<!--                  alt="Workflow"-->
<!--              />-->
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.to"
                    active-class="underline text-gray-700"
                    :class="[
                    this.$route.name === item.to.name
                      ? ''
                      : 'text-gray-900 hover:text-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium',
                  ]"
                >{{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div class="flex">
                  <MenuButton
                      class="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span class="sr-only">Open user menu</span>

                    <div class="mx-3">
                      <div
                          class="text-left text-base font-medium leading-none text-gray-900"
                      >
                        {{ user.name }}
                      </div>
                      <div
                          class="text-sm font-medium leading-none text-gray-400"
                      >
                        {{ user.email }}
                      </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </MenuButton>
                </div>
                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem v-slot="{}">
                      <a
                          @click="logout"
                          :class="[
                          'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                        ]"
                      >Sign out</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              active-class="bg-gray-900 text-white"
              :class="[
              this.$route.name === item.to.name
                ? ''
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
          >{{ item.name }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                {{ user.email }}
              </div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton
                as="a"
                @click="logout"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
            >Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <router-view :key="$route.path"></router-view>
    <Notification/>
  </div>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Notification from "./Notification.vue";


const navigation = [
  { name: "Dashboard", to: { name: "Dashboard" } },
  { name: "Surveys", to: { name: "Surveys" } },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    Notification,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function logout() {
      store.dispatch("logout").then(() => {
        router.push({
          name: "Login",
        });
      });
    }
    // store.dispatch("getUser");

    return {
      user: computed(() => store.state.user.data),
      navigation,
      logout
    };
  },
};
</script>