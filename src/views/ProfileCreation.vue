<script setup>
import Datepicker from 'flowbite-datepicker/Datepicker';
import { Cropper } from 'vue-advanced-cropper'
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'
import 'vue-advanced-cropper/dist/style.css';
import CircleStencil from '@/components/CircleStencil.vue';
</script>

<template>
  <div class="px-10 mt-12 max-w-5xl mx-auto lg:mt-24">
    <div class="intro-text text-left text-2xl font-medium tracking-wide">
      <p class="lg:text-4xl">Create you profile</p>
      <p class="text-sm mt-2 tracking-normal font-extralight lg:text-lg">This information allows us to better recommend
        workouts for
        you.</p>
    </div>

    <div class="lg:grid lg:grid-cols-4 lg:items-start">

      <div class="flex justify-center items-center flex-col mt-8 lg:flex-start lg:items-start">
        <div class="" v-if="!croppedImage">
          <font-awesome-icon class="border-4 p-12 rounded-full" :icon="['fas', 'camera']" size="2xl"
          style="color:#b7b8b8" />
        </div>
        <div class="" v-else>
          <img class="rounded-full w-36 h-36" :src="croppedImage" alt="">
        </div>
        <input ref="fileInput" id="fileUpload" type="file" @change="pickFile" hidden>
        <button @click="uploadFiles()"
          class="flex w-32 mt-6 justify-center border border-primary rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Upload photo
        </button>
      </div>

      <div class="lg:col-span-3">
        <p class="font-normal tracking-wide mt-10 text-xl">Birthday*</p>
        <p class="text-sm font-extralight">(DD/MM/YY)</p>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input id="datepickerEle" datepicker type="text" readonly
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
        <p class="font-normal tracking-wide mt-6 text-xl">Gender</p>
        <div class="flex items-center justify-start mt-4">
          <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio"
              class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Male</label>
          </div>
          <div class="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio"
              class="w-4 h-4 ml-8 text-primary bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
          </div>
        </div>
        <p class="font-normal tracking-wide mt-6 text-xl">Weight</p>
        <div>
          <div class="mt-2 lg:max-w-xl ">
            <label for="default-range" class="mb-2 block mt-3 text-sm font-medium leading-6 text-gray-900">Current
              Weight*</label>
            <span>{{ currentWeight }}kg</span>
            <input id="default-range" type="range" step="0.1" v-model="currentWeight" min="35" max="180"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
          </div>
        </div>

        <div>
          <div class="mt-2 lg:max-w-xl">
            <label for="default-range" class="mb-2 block mt-3 text-sm font-medium leading-6 text-gray-900">Goal
              Weight*</label>
            <span>{{ goalWeight }}kg</span>
            <input id="default-range" type="range" step="0.1" v-model="goalWeight" min="35" max="180"
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
  <Modal size="4xl" v-if="isShowModal" @close="closeModal">
    <template #body>
      <cropper class="cropper" :src="previewImage" :stencil-props="{
          aspectRatio: 10 / 12,
          movable: true,
		      resizable: false,
        }" :stencil-size="{
      width: 320,
      height: 320
    }"
    :stencil-component="CircleStencil"
    image-restriction="stencil"
     @change="change" />

    </template>
    <template #footer>
        <div class="flex justify-end">
          <button @click="getCroppedImage" type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Crop Image
          </button>
        </div>
      </template>
  </Modal>
</template>

<script>
export default {
  name: 'ProfileCreation',
  components: {
    Cropper,
  },
  data() {
    return {
      currentWeight: 84,
      goalWeight: 70,
      previewImage: null,
      isShowModal: false,
      coordinates: {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			},
			image: null,
      croppedImage: null,
    }
  },
  methods: {
    createDatePicker() {
      const datepickerEl = document.getElementById('datepickerEle');
      new Datepicker(datepickerEl, {
        autohide: false,
        todayBtn: false,
        orientation: 'center',
        format: 'dd/mm/yyyy'
      });
    },
    change ({ coordinates, canvas }) {
      this.coordinates = coordinates;
      this.image = canvas.toDataURL();
    },
    getCroppedImage() {
      this.isShowModal = false;
      this.croppedImage = this.image;
    },
    uploadFiles() {
      document.getElementById("fileUpload").click();
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result;
          this.isShowModal = true;
        }
        reader.readAsDataURL(file[0]);
        this.$emit('input', file[0]);
      }
    },
    closeModal() {
      this.isShowModal = false;
    },
    handleFileUpload(e) {
      console.log(e)
      const uploadedFile = e.target.result;
      console.log(uploadedFile)
    }
  },
  mounted() {
    this.createDatePicker();
  },
}
</script>

<style scoped></style>