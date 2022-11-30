<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<script setup>
useHead({ title: 'Home' })
const family = ['roger','amira','chris','marc','mel','ben',]
const thisPerson = ref(null)
const intros = { 
  roger: 'doesn\'t talk that much',
  amira: 'makes the best rice',
  chris: 'a really nice guy,',
  marc: 'the best daddy ever',
  mel:'the best mommy ever',
  ben:'watch & subscribe'
}
</script>

<template>
  <div class="home">
    <div
      class="wrapper">
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 max-w-sm self-center ">
        <div class="grid grid-cols-3 gap-x-0 gap-y-0">
          <div
            v-for="p in family" :key="p"
            :class="[p,{
              'g gen1': ['amira','roger'].includes(p),
              'g gen2': ['mel','marc','chris'].includes(p),
              'g gen3': p=='ben'
            }]">
            <PersonBubble
              :name="p"
              @click="$router.push({name:`/${p}/`})"
              @mouseenter="thisPerson=p"
              @mouseleave="thisPerson=null" />
          </div>
          <div v-if="thisPerson" id="blurb" v-text="intros?.[thisPerson]" />
        </div>
      </div>
      <FamLogo />
    </div>
    <AboutApp />
  </div>

</template>

<style scoped>
.home { @apply bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-60 backdrop-blur-md border-y border-gray-300 my-3 dark:border-0 }
.wrapper { @apply mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 gap-4
  flex flex-col-reverse md:flex-row }
.g > img { @apply border-4 shadow-md shadow-gray-200 hover:shadow-cyan-600 }
/* .g:hover > img { @apply border-4 shadow-md  } */
.gen1, .gen2 { @apply border-blue-600 dark:border-yellow-600 ;}
.gen1 { @apply p-2  border-blue-600 rounded-t-full }
#blurb { @apply row-start-3 col-start-1 translate-x-1/4 scale-75
  flex flex-col items-center align-middle justify-center leading-tight pt-6
    bg-gray-300 dark:bg-slate-800 rounded-full border-gray-500 border-4 
    p-4 my-auto text-base  text-center h-full w-full }
#blurb::after { content: '-ben'; @apply text-xs font-mono }
.roger { @apply  border-r-2 pr-2 }
.amira { @apply  border-l-2 pl-2 }
.gen2 { @apply row-start-2 p-2 }
.chris { @apply border-t-2 rounded-l-full }
.marc { @apply rounded-b-full border-t-2 rounded-tr-full }
.mel { @apply border-l-2 rounded-t-full }
.ben { @apply row-start-3 col-start-2 translate-x-1/2 -translate-y-4 }

</style>