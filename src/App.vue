<script setup>
inject('$messaging') // init fireBase messaging
</script>

<template>
  <div>
    <TopNav />
    <NavPersonPages v-if="$route?.path!='/'" class="z-10"/>
    <main>
      <router-view />
    </main>
    <BackgroundBocca />
    <AppInstall />
  </div>
</template>
