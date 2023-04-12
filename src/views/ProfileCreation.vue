<script setup>
import Datepicker from 'flowbite-datepicker/Datepicker';
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>

<template>
  <div class="px-10 mt-12 max-w-5xl mx-auto lg:mt-24">
    <div class="intro-text text-left text-2xl font-medium tracking-wide">
      <p class="lg:text-4xl">Create you profile</p>
      <p class="text-sm mt-2 tracking-normal font-extralight lg:text-lg">This information allows us to better recommend workouts for
        you.</p>
    </div>

    <div class="lg:grid lg:grid-cols-4 lg:items-start">

    <div class="flex justify-center items-center flex-col mt-8 lg:flex-start lg:items-start">
      <font-awesome-icon class="border-4 p-12 rounded-full" :icon="['fas', 'camera']" size="2xl"
        style="color:#b7b8b8" />
        <input id="fileUpload" type="file" hidden>
      <button
        @click="uploadFiles()"
        class="flex w-32 mt-6 justify-center border border-primary rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Upload photo
      </button>
    </div>

<div class="lg:col-span-3">
    <p class="font-normal tracking-wide mt-10 text-xl">Birthday*</p>
    <p class="text-sm font-extralight">(DD/MM/YY)</p>
    <div class="relative max-w-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input  id="datepickerEle" datepicker type="text"
        class="hover:cursor-pointer mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date">
    </div>

    <p class="font-normal tracking-wide mt-6 text-xl">Location</p>
    <p class="text-sm tracking-normal font-extralight">This information lets allows us to recommend our partner gyms
      nearby.</p>

      <div class="lg:grid lg:grid-cols-2">
        <div>
      <label for="countr" class="block mt-4 text-sm font-medium leading-6 text-gray-900">Country*</label>
      <div class="mt-2">
        <input id="country" name="country" type="text" autocomplete="country" required
          class="appearance-none block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div>
      <label for="countr" class="block mt-4 text-sm font-medium leading-6 text-gray-900">City*</label>
      <div class="mt-2">
        <input id="country" name="country" type="text" autocomplete="country" required
          class="appearance-none block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div>
      <label for="countr" class="block mt-4 text-sm font-medium leading-6 text-gray-900">State*</label>
      <div class="mt-2">
        <input id="country" name="country" type="dropdown" autocomplete="country" required
          class="appearance-none block w-52 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div>
      <label for="countr" class="block mt-4 text-sm font-medium leading-6 text-gray-900">Zip*</label>
      <div class="mt-2">
        <input id="country" name="country" type="text" autocomplete="country" required
          class="appearance-none block w-24 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:w-52">
      </div>
    </div>
      </div>
    <p class="font-normal tracking-wide mt-6 text-xl">Weight</p>
    <div>
      <div class="mt-2 lg:max-w-xl ">
        <label for="default-range" class="mb-2 block mt-4 text-sm font-medium leading-6 text-gray-900">Current Weight*</label>
        <span>{{ currentWeight }}kg</span>
        <input id="default-range" type="range"  v-model="currentWeight" min="35" max="180"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
      </div>
    </div>

    <div>
      <div class="mt-2 lg:max-w-xl">
        <label for="default-range" class="mb-2 block mt-4 text-sm font-medium leading-6 text-gray-900">Goal Weight*</label>
        <span>{{ goalWeight }}kg</span>
        <input id="default-range" type="range"  v-model="goalWeight" min="35" max="180"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
      </div>
    </div>
</div>
</div>


    <hr class="mt-10">
    <div class="mt-6 pb-4 md:max-w-xs md:ml-auto">
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
      currentWeight: 84,
      goalWeight: 70
    }
  },
  methods: {
    createDatePicker() {
      const datepickerEl = document.getElementById('datepickerEle');
      new Datepicker(datepickerEl, {
        autohide: false,
        todayBtn: false,
        orientation: 'center',
        format: 'dd/mm/yy'
      });
    },
    uploadFiles() {
      document.getElementById("fileUpload").click();
    }
  },
  mounted() {
    this.createDatePicker();
  }
}
</script>

<style scoped></style>