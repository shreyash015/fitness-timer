<template>
  <div class="logo text-4xl text-center mt-12 flex justify-center items-center lg:text-5xl">
    <img class="timer-logo" src="@/assets/stopwatch-svgrepo-com.svg" alt="">
    <span class="ml-2 font-extralight">Fitness</span> <span class="ml-1"> 
      <span style="color:#6c63ff">Timer</span></span>
  </div>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
</template>

<style scoped>
.timer-logo {
  height: 30px;
  width: 30px;
}
.route-enter-from{
  opacity:0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity:0;
  transform: translate(-100px);
}
.route-leave-active{
  transition:all 0.3s ease-in;
}
@media (min-width: 1024px) {
  .timer-logo {
    height: 48px;
    width: 48px;
  }
}

/* Main Color : #971212 */
</style>
