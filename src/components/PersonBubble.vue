<script setup>
const props = defineProps({name:{type:String,default:'ben'}})
const dynamicImg = new URL(`./photos/${props.name}.webp`,import.meta.url).href
</script>

<template>
  <img :src="dynamicImg" class="person" />
</template>

<style scoped>
  .person { 
    @apply rounded-full border-2 transition-all
      border-blue-300 hover:border-blue-600
      dark:border-yellow-200 hover:dark:border-orange-600 
      hover:scale-110 
  }
</style>