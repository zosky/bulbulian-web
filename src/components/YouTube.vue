<script setup>
defineProps({id:{type:String,default:'Y1JWQ8_ms5U'}})
</script>

<template>
  <iframe
    class="aspect-[16/9]" :src="`https://www.youtube.com/embed/${id}?rel=0`"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>  
</template>