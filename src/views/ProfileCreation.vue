<template>
  <div class="px-10 mt-12 max-w-5xl mx-auto lg:mt-24">
    <div class="intro-text text-left text-2xl font-medium tracking-wide">
      <p>Create you profile</p>
      <p class="text-base mt-2 font-light">This information allows us to better recommend workouts to you.</p>
    </div>
    
    <div class="flex justify-center items-center flex-col mt-12">
      <font-awesome-icon class="col-span-1  border-4 p-12 rounded-full" :icon="['fas', 'camera']" size="2xl" style="color:#b7b8b8" />
      <button class="flex w-32 mt-6 justify-center border border-primary rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Upload photo
      </button>
    </div>

    <p class="font-normal tracking-wide mt-10 text-xl">Birthday</p>
    <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
    <hr class="mt-10">
    <div class="mt-6 md:max-w-xs md:ml-auto">
      <router-link to="/profile-creation"
        class="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Create Workout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCreation',
  data() {
    return {

    }
  }
}
</script>

<style scoped></style>