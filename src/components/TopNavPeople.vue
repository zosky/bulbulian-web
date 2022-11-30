<script setup>
const family = ['roger','amira','chris','marc','mel','ben',]
</script>

<template>  
  <div v-if="$route?.meta?.title!='Home'" class="max-w-md flex flex-row gap-2 -mt-2 md:pb-0 md:-mb-16 mx-auto justify-center">
    <PersonBubble
      v-for="p in family" :key="p"
      :name="p"
      class="w-10 p"
      :class="{hereNow: $route?.name?.includes(p)}"
      @click="$router.push({name:`/${p}/`})"/>
  </div>
</template>

<style scoped>
.hereNow { @apply scale-125 shadow-lg shadow-cyan-400 dark:shadow-red-600 }

.p:not(.hereNow):not(:hover) { 
    @apply sepia opacity-50 
    dark:brightness-50 dark:opacity-90
  }
</style>