<route lang="json">
  {
    "name": "blog Edit",
    "meta": { "title": "edit online" }
  }
</route>

<script setup>
// globals
import { BookPlusOutline, CheckboxMarkedCircle, Lock } from 'mdue'
const saveData = inject('$saveData') // setter
const rDoc = inject('$rDoc') // setter
const route = useRoute()
// vars
const title = ref(null)
const date = ref(null)
const body = ref(null)
const saved = ref(false)
const isReady = computed(()=> title.value && date.value && body.value )
// methods
const dbCollection = 'chrisBlog' // cached @ fireBase
const goTime = () => {
  saveData( dbCollection, date.value, {
    title:title.value,
    date:date.value,
    body:body.value
  })
    .then(() => { saved.value = true }) // save remote}
}
// get specific article
if(route.params?.thisID){
  rDoc(dbCollection, route.params?.thisID).then(r=>{
    console.log(r)
    title.value = r.title
    date.value = r.date
    body.value = r.body
  })
}
</script>

<template>
  <form>
    <div class="px-3 opacity-30 pt-2">{{$route?.params?.thisID?'editPost':'newPost'}}</div>
    <input id="title" v-model="title" name="title" :placeholder="'title'" />
    <label  :class="{ 'opacity-25': $route?.params?.thisID }" class="flex flex-row py-1">
      <Lock v-if="$route?.params?.thisID" class="ml-2 -mr-3" />
      <input
        id="date" v-model="date"
        name="date" type="date"
        :placeholder="'date'" 
        :disabled="$route?.params?.thisID"/>
    </label>
    <textarea v-model="body" :placeholder="'body'" class="h-96" />
    <button
      :class="isReady?'bg-blue-900':'opacity-50'" class="rounded-xl flex flex-row items-center justify-center p-3 text-4xl"
      @click.prevent="isReady?goTime():''">
      <BookPlusOutline />save
    </button>
    <button v-if="saved" class="rounded-xl flex flex-row items-center justify-center p-3 text-4xl" @click="$router.go(-1)"><CheckboxMarkedCircle/> done</button>
  </form>
</template>

<style scoped>
  form { @apply flex flex-col }
  input { @apply bg-transparent px-3  }
  #title { @apply text-xl font-bold  }
  #date { @apply text-xs border-0 -mt-2 -mb-2 }
  textarea { @apply bg-transparent rounded-xl my-2 }

</style>