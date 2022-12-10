<script setup>
import { Firebase } from 'mdue'
import PersonBubbleBen from '/src/components/PersonBubblePerPerson/PersonBubbleBen.vue'
import PersonBubbleMel from '/src/components/PersonBubblePerPerson/PersonBubbleMel.vue'
// import moment from 'moment'

// GET FILE f/ fireStorage
// import { getStorage, ref as fbRef, getDownloadURL } from 'firebase/storage'
// const imgURL = ref(null)
// const storage = getStorage()
// getDownloadURL(fbRef(storage, 'benBanner.jpg'))
//   .then((url) => { imgURL.value = url })
//   .catch((error) => { console.log('fireStoreERROR', error) })
/////////////

// import type { TYPE } from 'vue-toastification'
// import PersonBubble from '/src/components/PersonBubble.vue'
// import PersonBubbleMarc from '/src/components/PersonBubblePerPerson/PersonBubbleMarc.vue'
// import PersonBubbleAmira from '/src/components/PersonBubblePerPerson/PersonBubbleAmira.vue'
// import PersonBubbleChris from '/src/components/PersonBubblePerPerson/PersonBubbleChris.vue'
// import PersonBubbleRoger from '/src/components/PersonBubblePerPerson/PersonBubbleRoger.vue'
const toast = useToast()
const toastIDs = ref([])
const goTime = () =>{
  toast.info('here. take some info', { timeout: 16000 })
  toast.success('youWin', { timeout: 6254, icon: PersonBubbleMel })
  toast.warning('thats not right', { timeout: 15000, icon: { component: PersonBubbleBen }})
  const tID = toast.error('NOOOOOO', { timeout: 212121, icon:Firebase })
  // const tID = toast('im a new test', { timeout: 12241, type: 'success' })
  toastIDs.value.push( tID )
}
// goTime()

const goTimeHack = (toastId, options) => toast.update(toastId, options)

const goTimeMod = () => goTimeHack(
  toastIDs.value.at(-1), 
  {content:'hacked',options:{type:'warning',timeout:12121}}
)

const last5games = ref([])
const qData = inject('$qData')
// qData('marc/games/lutris','lastplayed',true,5).then(r=>{last5games.value=r})

</script>

<template>
  <div class="flex flex-row flex-wrap gap-2">
    <button @click="goTime()">testToasts</button>
    <button @click="goTimeMod()">testHack</button>
    <ControllerPS3 class="w-10" />
    <!-- <pre>{{last5games}}</pre> -->
    <!-- i:{{imgURL}} -->
    <!-- <img v-if="imgURL" :src="imgURL" /> -->
    <GameControllers i="lutris" class="w-10" />
    <!-- {{toastIDs}} -->
    <!-- <pre class="text-red-500">{{mToken}}</pre>
    <pre>{{localUser}}</pre> -->
  </div>
  <GamePlayHistory />
</template>

<style>
</style>