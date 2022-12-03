<script setup>
inject('$smashToken')() // init Firebase
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
