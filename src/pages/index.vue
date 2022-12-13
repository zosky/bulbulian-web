<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<script setup>
useHead({ title: 'Home' })
</script>

<template>
  <div class="home">
    <FamilyTree />
    <GamePlayHistory />
    <WildWaterKingdom />
    <NewMovies />
    <AboutApp />
  </div>
</template>

<style scoped>
.home { @apply 
  bg-gray-50 bg-opacity-50 
  dark:bg-gray-900 dark:bg-opacity-60 
  border-y dark:border-0 border-gray-300 
  my-3 backdrop-blur-md 
}

</style>