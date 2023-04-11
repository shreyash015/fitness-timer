<template>
  <div class="px-10 mt-12 max-w-5xl mx-auto lg:mt-24">
    <div class="intro-text text-left text-2xl font-medium tracking-wide">
      <p>Hey Clark. Ready to try out our workout timer?</p>
    </div>
    <div class="flex justify-between">
      <div class="left-container">
        <div class="grid grid-cols-5 mt-12 max-w-4xl md:grid-cols-10">
          <font-awesome-icon class="col-span-1 pt-1" :icon="['fas', 'circle-plus']" size="xl" />
          <p class="text-sm tracking-wider col-span-4 md:col-span-9">Create a workout using one of our standard templates,
            or create a
            workout from scratch.</p>
        </div>

        <div class="grid grid-cols-5 mt-12  max-w-4xl md:grid-cols-10">
          <font-awesome-icon class="col-span-1 pt-1" :icon="['fas', 'palette']" size="xl" />
          <p class="text-sm tracking-wider col-span-4 md:col-span-9">Color code your workouts to distinguish them from one
            another.</p>
        </div>


        <div class="grid grid-cols-5 mt-12  max-w-4xl md:grid-cols-10">
          <font-awesome-icon class="col-span-1 pt-1" :icon="['fas', 'stopwatch-20']" size="xl" />
          <p class="text-sm tracking-wider col-span-4 md:col-span-9">Add a countdown to each of your workouts in the
            circuit.</p>
        </div>

        <div class="grid grid-cols-5 mt-12  max-w-4xl md:grid-cols-10">
          <font-awesome-icon class="col-span-1 pt-1" :icon="['fas', 'face-grin-beam-sweat']" size="xl" />
          <p class="text-sm tracking-wider col-span-4 md:col-span-9">Sweat it out and enjoy the training.</p>
        </div>
      </div>
      <div class="right-container hidden  md:flex flex-col justify-start w-">
        <img class="w-56 h-32 ml-auto" src="@/assets/spin-cycle.svg" alt="">
        <img class="w-28  h-32 mt-12 mr-auto" src="@/assets/kettlebell.svg" alt="">
      </div>
    </div>

    <hr class="mt-10">
    <div class="mt-6 md:max-w-xs md:ml-auto">
      <router-link to="/intro"
        class="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get Started
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {

    }
  }
}
</script>

<style scoped></style>