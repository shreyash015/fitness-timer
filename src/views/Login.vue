<script setup>
  import { Modal, Input } from 'flowbite-vue'
  import { ref } from 'vue'

  const showPasswordModal = ref(false)
  function closeModal() {
    showPasswordModal.value = false;
    document.getElementById('login-main-container').classList.remove('is-blurred')
  }
  function showModal() {
    showPasswordModal.value = true;
    document.getElementById('login-main-container').classList.add('is-blurred')
  }
</script>


<template>
  <div>
    <div id="login-main-container" class="login-container flex min-h-full flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:items-center">
        <img class="hidden xl:block" src="@/assets/workout.png" alt="">
        <div
          class="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:border sm:border-gray-200 sm:py-6 sm:shadow-2xl sm:rounded-md">
          <p class="text-xl text-center uppercase font-extralight sm:text-lg sm:font-light sm:tracking-wide">Login</p>
          <div class="bg-white px-4 py-8  sm:rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required
                    class="appearance-none block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required
                    class="appearance-none block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input type="checkbox" class="accent-primary">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                <div class="text-sm">
                  <a href="#" @click="showModal()" class="font-medium text-primary hover:text-indigo-500">Forgot your password?</a>
                </div>
              </div>

              <div>
                <button type="submit"
                  class="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login
                  with Email</button>
              </div>
              <div>
                <router-link to="/signup"
                  class="flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-lg border hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                  up
                </router-link>
              </div>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a href="#"
                    class="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                    <span class="sr-only">Sign in with Facebook</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href="#"
                    class="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                    <span class="sr-only">Sign in with Google</span>
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" fill="#6b7280">
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <title>google [#6b7280]</title>
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#6b7280">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path
                                d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386"
                                id="google-[#6b7280]"> </path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="hidden xl:block" src="@/assets/timer.png" alt="">
      </div>
    </div>
    <transition name="fade">
    <Modal size="lg" v-if="showPasswordModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-base font-light">
          Recover Password
        </div>
      </template>
      <template #body>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          Enter the email address associated with your account
        </p>
        <Input placeholder="email"/>
        <div class="flex justify-end mt-4">
          <button @click="closeModal" type="button" class="mr-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="closeModal" type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send Reset Link
          </button>
        </div>
      </template>
    </Modal>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
  }
};
</script>

<style scoped>
.timer-logo {
  height: 30px;
  width: 30px;
}

.login-container {
  height: calc(100vh - 90px);
}

.google-icon {
  max-width: 24px;
}

.is-blurred {
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transition: all 0.1s ease-in-out;
}
.fade-enter-from{
  opacity:0;
  transform: scale(2);
}
.fade-enter-active{
  transition: all 0.1s ease-in-out;
}
.fade-leave-to{
  opacity:1;
  transform: scale(1);
}
.fade-leave-active{
  transition: all 0.1s linear;
}

@media (min-width: 1024px) {
  .timer-logo {
    height: 48px;
    width: 48px;
  }
}
</style>