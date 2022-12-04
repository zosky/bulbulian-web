<script setup>
const localUser = inject('$localUser')
const isMe = computed(()=>localUser?.user?.email?.match(/^(\w+)@bulbulian.com$/)?.[1])
const family = ['roger','amira','chris','marc','mel','ben',]
</script>

<template>  
  <div v-if="$route?.meta?.title!='Home'" class="max-w-md flex flex-row gap-2 -mt-2 md:pb-0 md:-mb-16 mx-auto justify-center">
    <div v-for="p in family" :key="p" class="relative">
      <PersonBubble
        :name="p"
        class="w-10 p"
        :class="{
          hereNow: $route?.name?.includes(p),
          isMe: isMe==p 
        }"
        @click="$router.push({name:`/${p}/`})"/>
      <div v-if="isMe==p " class="isMe"/>
    </div>
  </div>
</template>

<style scoped>
.hereNow { @apply scale-125 shadow-lg shadow-cyan-400 dark:shadow-red-600 }
.p:not(.hereNow):not(:hover) { 
    @apply sepia opacity-50 
    dark:brightness-50 dark:opacity-90
  }
img.isMe { @apply scale-105 shadow-lg shadow-sky-400 dark:shadow-blue-500 }
div.isMe {  @apply h-2 w-2 bg-sky-500 animate-ping rounded-full absolute top-0 right-0 }
</style>