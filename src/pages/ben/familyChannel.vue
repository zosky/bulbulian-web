<script setup>
import { Video, SearchWeb } from 'mdue'
import MultiRangeSlider from 'multi-range-slider-vue'
import allVids from '../../json/benPlaylist.json'

const min = ref(allVids.at(-1).age.d/365)
const max = ref(allVids.at(0).age.d/365)
const minV = ref(min.value)
const maxV = ref(max.value)
const search = ref(null)

const UpdateValues = x => { 
  minV.value = x.minValue
  maxV.value = x.maxValue
}
const thisChunk = computed(()=>{
  const [d,s,e,S] = [ allVids, minV.value, maxV.value, search.value ]
  return d.filter( v => 
    (S ? v.title.toLowerCase().includes(S.toLowerCase()):true) 
    && v.age.d+1 >= s*365 && v.age.d-1 <= e*365 )
})

</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-1 my-3 md:my-0">
    <div class="flex sm:hidden xl:flex flex-row items-center w-96 md:w-max gap-1">
      <PersonBubble name="ben" class="h-[2em]" />'s 
      <em>private</em> 
      <div>family channel</div>
      <!-- <div v-if="thisChunk?.length != allVids.length" class="chunkCount" v-text="thisChunk.length" /> -->
      <!-- <div v-if="allVids.length" class="vidCount" v-text="allVids.length" /> -->
      <!-- <Loading v-else class=" text-3xl animate-spin" /> -->
    </div>
    <div class="relative mt-1 -mb-2 flex flex-row">
      <MultiRangeSlider
        :min="min"
        :max="max"
        :min-value="minV"
        :max-value="maxV"
        :step="0.01"
        :ruler="false"
        :label="false"
        class="w-96 border-0"
        @input="UpdateValues"/>
      <label class="absolute top-1 left-6 text-xs flex flex-row gap-1 items-center select-none">
        <b v-text="thisChunk.length"/> <Video class="text-xl" /> between age
        <b v-text="Math.round(minV*10)/10"/> & <b v-text="Math.round(maxV*10)/10"/>
      </label>
    </div>
    <div class="scale-90 mt-2">
      <SearchWeb class="text-xl -mb-8 ml-2" />
      <input
        v-model="search" type="search"
        name="search" class="rounded-xl bg-transparent border border-blue-900 pl-8 text-yellow-400 w-96"
        :placeholder="`search`">
    </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-0.5">
    <div v-for="v in thisChunk.slice(0,20)" :key="v.id" class="relative">
      <img :src="v.thumbnail" :alt="v.title" class="w-full h-full aspect-[16/9]">
      <div class="absolute bottom-0 w-full flex flex-row justify-between items-end p-1 text-white bg-blue-900 font-bold mix-blend-overlay">
        <div class="-mt-2 -mb-1.5">{{v.title}}</div>
      </div>
      <div class="text-xs absolute top-0 right-0 p-1 bg-blue-900 text-white items-end flex flex-col px-2 rounded-bl-3xl scale-75 origin-top-right bg-opacity-90\">
        <div class="relD" :class="v.relDate.y>0?'y':'m'">
          {{ v.relDate.y || v.relDate.m }}
        </div>
        <div class="ageY">{{v.age.y}}</div>
      </div>
    </div>
  </div>
  <!-- <pre>{{allVids}}</pre> -->
</template>

<style scoped>
.vidCount { @apply font-mono text-right self-center }
.vidCount::before { content: '['; @apply font-light  }
.vidCount::after { content: ']'; @apply font-light  }
.ageY::after { content: ' yrs old'; @apply font-light opacity-50 }
.relD.m::after { content: ' mon ago'; @apply font-light opacity-50 }
.relD.y::after { content: ' yrs ago'; @apply font-light opacity-50 }
</style>

<style>
/* multiSelect styles overRide */
.bar-inner > * { @apply bg-blue-700 }
.multi-range-slider { @apply border-0 }
.caption .min-caption { background: "rgb(29 78 216 / 0.6)"; }
.multi-range-slider .thumb::before { background-color: rgb(29 78 216 / 0.8); }
</style>