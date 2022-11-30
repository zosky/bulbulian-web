<script setup>
import { Vuejs, Tailwind, Github, Nodejs, Application, At, WrenchOutline, CloudOutline, Brain, HelpCircleOutline } from 'mdue'
const showIcons=ref(true)
</script>
<template>
  <article
    class="flex flex-row border-t md:pt-3 my-3 dark:border-0 select-none
      dark:bg-gray-900 dark:bg-opacity-25 
      bg-gray-100 bg-opacity-25 border-gray-300" role="button"
    @click="showIcons=!showIcons">
    <div
      class="mx-auto w-full max-w-screen-xl px-4 py-0 sm:px-6 md:flex lg:items-center md:justify-between lg:px-6">
      <section
        class="text-4xl mt-3 mb-2 lg:mt-0 flex-wrap flex flex-row items-center font-light max-w-max gap-1
      text-blue-600 dark:text-sky-100">
        <template v-if="showIcons" >
          <h4 title="nodeJS"><Nodejs /> </h4>
          <h4 title="app"><Application /> </h4>
          <h4 title="made with"><WrenchOutline /></h4>
          <h4 title="vue3"><Vuejs /> </h4>
          <h4 title="and"><div>&</div> </h4>
          <h4 title="tailWindCSS"><Tailwind /> </h4>
          <h4 title="hosted"><CloudOutline /></h4>
          <h4 title="at"><At/> </h4>
          <h4 title="gitHub"><Github /></h4>
          <h4 
            title="how this works?" 
            class="hover:scale-110 transition-all"
            @click="$router.push('/marc/appHowTo')">
            <HelpCircleOutline/>
          </h4>
        </template>
        <div v-else class="text-sm max-w-xs  leading-tight ">
          a NodeJS application made with Vue3 & TailWindCSS, hosted @ gitHub
        </div>
      </section>
      <div class="flex flex-row items-center font-light gap-1 float-right sm:float-none ">
        <div v-if="showIcons" class="flex flex-row">
          by <PersonBubble name="marc" class="w-8"/>'s <Brain class="text-4xl -mb-1" />
        </div>
        <div v-else class="text-right leading-tight font-sm">
          made by marc,<br>with brain power
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
 section > * { @apply flex flex-col }
</style>