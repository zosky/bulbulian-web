<script setup>
import { CheckboxMarkedCircle } from 'mdue'
import moment from 'moment'
// fireBaseDB
import jsonConvos from './cuteConvos.json' // jsonCache f/localAPI
const dbCollection = 'BenCuteConvos' // cached @ fireBase
const getData = inject('$getData') // getter
const saveData = inject('$saveData') // setter
// setup
const devMode = import.meta.env.MODE == 'development'
const iconXreff = { ben: 'ben', dad: 'marc', mom: 'mel' }
const convos = ref(devMode?jsonConvos:[])
const thisIX = ref(0) // used to loop through data @ loading
// if(!devMode) getData(dbCollection).then(r=>{ convos.value = r })
const convoRev = computed( ()=> {
  const c = convos?.value
  return c?.length ? c?.sort((a,b)=>a.date<b.date?1:-1) : []
})
// "(my)methods"
const cssTag = c => `${c} ${c!='ben'?'else':''}`
const setData = async () => {
  const x = convos?.value[thisIX.value] 
  await saveData(dbCollection, x.title, x)
  convos.value[thisIX.value].done = true
  thisIX.value = thisIX.value + 1
  if(convos?.value?.[thisIX.value]) await setData()
}
const loadData = async () => {
  convos.value = []
  await getData(dbCollection)
    .then( r =>{ 
      convos.value = r 
      useHead({title:`funny things ben said [${r.length}]`})
    })
}
// init remote data @ load onProd
onMounted(()=>{ if(!devMode) loadData() }) 
</script>

<template>
  <div class="convos">
    <div v-if="devMode" class="flex flex-row flex-wrap sm:flex-nowrap mb-2 items-center">
      <label class="px-2" v-text="'devButtons'" />
      <button 
        class="bg-red-900 bg-opacity-40 text-orange-700 font-bold w-full py-1" 
        @click="setData()" 
        v-text="`setData@${dbCollection}`" />
      <button 
        class="bg-violet-900 bg-opacity-40 text-violet-200 font-bold w-full py-1" 
        @click="loadData()" 
        v-text="`loadData@${dbCollection}`" />
    </div>
    <details v-for="(c,cIX) in convoRev" :key="cIX">
      <summary>
        <CheckboxMarkedCircle v-if="c?.done" class="done" />
        <div class="title" v-text="c?.title" />
        <div class="date" v-text="moment(c?.date).fromNow(true)" />
        <div class="dateFull" v-text="moment(c?.date).format('YY MMM. Do')" />
      </summary>
      <div class="convo">
        <div v-for="msg in c?.convo" :key="msg.id" :class="['msg',cssTag(msg.person), ``]">
          <PersonBubble  :name="iconXreff?.[msg?.person]" :class="['i', cssTag(msg.person)]" />
          <p v-text="msg.msg" />
        </div>
      </div>
    </details>
  </div>
</template>

<style scoped>
/* "list view" */
.convos { @apply flex flex-col divide-y divide-gray-700 max-w-7xl mx-auto py-2 }
details { @apply py-1 transition-all -mx-2 px-2 }
details:nth-child(even):not([open]) { @apply bg-blue-200 dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-50 }
details:nth-child(odd):not([open]) { @apply bg-gray-100 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 }
details summary { @apply flex flex-row justify-start gap-2 py-0.5}
details[open] { @apply from-blue-200 dark:from-blue-900 to-transparent bg-gradient-to-b rounded-3xl mx-0 px-4 py-2 my-2 }
details[open] summary { @apply px-3 scale-105 lg:px-10 }
details .title { @apply font-bold leading-none w-full self-center }
details .done { @apply dark:text-green-600  text-green-900 self-center }
details .date { @apply font-light min-w-max w-40 text-right}
details .date:after { content:' ago'; @apply font-light text-sm opacity-50 }
details[open] .dateFull { @apply block min-w-max text-xs self-center }
details[open] .date, details:not([open]) .dateFull { @apply hidden  }
/* "detail view" */
.convo { @apply  flex flex-col flex-wrap justify-center align-middle gap-2 gap-y-4 px-6 py-3 max-w-xl mx-auto }
.convo .msg:nth-child(even) { @apply rotate-2 } 
.convo .msg:nth-child(odd) { @apply -rotate-2 } 
.msg { @apply flex max-w-max gap-2 items-center  rounded-full shadow-sm dark:shadow-blue-400 transition-all }
.msg.ben { @apply flex-row }
.msg.else { @apply flex-row-reverse self-end }
/* COLORS */
.msg.ben { @apply bg-sky-500 text-blue-800 bg-opacity-70 }
.msg.dad { @apply bg-blue-300 text-blue-900 dark:bg-blue-900 dark:text-blue-400 bg-opacity-70 }
.msg.mom { @apply bg-purple-300 text-purple-900 dark:bg-purple-900 dark:text-purple-400 bg-opacity-70 }
/* msg layout */
.msg.ben .i { @apply -ml-8 }
.msg.else .i { @apply -mr-8 }
p { @apply max-w-prose leading-tight py-2 }
.msg.ben p { @apply mr-4 }
.msg.else p { @apply ml-8  }
.i { @apply  h-12 w-auto }

</style>