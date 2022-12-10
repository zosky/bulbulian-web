<script setup>
import { BookPlusOutline, TrashCanOutline, BookEditOutline } from 'mdue'
const moment = newMoment() // init dayJS
const dbCollection = 'chrisBlog' // cached @ fireBase
const localUser = inject('$localUser') // isLoggedIN ?
const qData = inject('$qData') // getter
const rmData = inject('$rmData') // unSet
const articles = ref([]) // fetched f/ amazon
qData(dbCollection,'date',true,50).then(async r => {articles.value = r})
const isBulbulian = computed(()=>localUser?.user?.email?.includes('@bulbulian.com'))
const rmArticle = async (x,ix) => {
  const ask = await confirm(`PERMANENTLY delete: ${articles.value[ix].title} ?\nTHERE IS NO UNDO`)
  if (ask) { 
    await rmData(dbCollection, x) // drop from DB
    articles.value.splice(ix,1) // drop here
  } else { 
    console.log('nope')
  }
}
</script>

<template>
  <div class="px-4 max-w-7xl mx-auto relative" >
    <button 
      v-if="isBulbulian"
      class="absolute -top-6 right-4 flex flex-row gap-1 items-center p-2 ring-1 rounded-xl bg-blue-900 bg-opacity-75 pt-3 shadow-md shadow-sky-200 text-blue-200" 
      @click="$router.push('/chris/blogEdit/')">
      <BookPlusOutline />
      NEW      
    </button>
    <!-- <div @click="goTime()">dataLoader [{{thisIX}}]</div> -->
    <div class="intro" >
      <h1 v-text="`But existing is basically all I do!`" />
      <h2 v-text="`blog by Chris R. Bulbulian`" />
      <div>
        *This is just my throwing my thoughts on paper. Well, more accurately, on the web. It may not always be relevant to you, but it's still interesting. Sometimes. Either way, good luck unscrambling my thoughts.*
        *P.S. Every blog post title is a quote from one of my favourite shows.*
      </div>
    </div>
    <details v-for="(a,ix) of articles" :key="ix">
      <summary class="flex flex-row justify-between">
        <div class="font-bold" v-text="a.title" />
        <div class="font-light min-w-max" v-text="moment(a.date).fromNow()" />
      </summary>
      <div class="buttonBar">
        <button
          v-if="isBulbulian" class="bg-blue-500 bg-opacity-25 ring-blue-500 shadow-blue-800"
          @click="$router.push(`/chris/blogEdit/${a.date}`)">
          <BookEditOutline />edit
        </button>
        <button
          v-if="isBulbulian" class="bg-red-500 text-yellow-400 bg-opacity-25 ring-red-500 shadow-yellow-800 "
          @click="rmArticle(a.date,ix)">
          <TrashCanOutline />?
        </button>
      </div>
      <pre class="max-w-full whitespace-pre-wrap" v-text="a.body" />
    </details>
  </div>

</template>

<style scoped>
h1 { @apply text-3xl font-extrabold m-0 p-0 }
h2 { @apply text-sm font-light m-0 p-0 }
.intro div { @apply text-sm italic }
.intro { @apply border-b border-blue-500 }
details { @apply py-1 px-1 }
details[open] { @apply ring-1 ring-blue-800 rounded-xl pt-1 px-2 from-blue-200 dark:from-blue-900 to-transparent bg-gradient-to-b }
details:nth-child(odd) { @apply bg-blue-200 bg-opacity-30 dark:bg-blue-900 dark:bg-opacity-30 }
details:nth-child(even) { @apply bg-gray-200 bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-30 }
.buttonBar { @apply flex flex-row gap-2 text-3xl }
.buttonBar button { @apply w-max px-3 py-1 my-1 rounded-xl ring-1 hover:bg-opacity-50 hover:scale-105 transition-all flex flex-row  items-center justify-center }
</style>