<script setup>
import { AlertCircleOutline, CloseCircle } from 'mdue'
import { msgCache } from './fireBase/messaging'
const mCache = computed( ()=> msgCache?.value )
const rmNote = ix => { msgCache.value.splice(ix,1) }
</script>

<template>
  <details v-if="mCache?.length">
    <summary>
      <AlertCircleOutline /> 
      <div v-text="mCache?.length" />
    </summary>
    <ul>
      <li v-for="(n,nIX) of mCache" :key="nIX">
        <CloseCircle class="close" @click="rmNote(nIX)" />
        <div class="txt">
          <div class="t" v-text="n?.title" />
          <div class="b" v-text="n?.body" />
        </div>
        <img v-if="n?.image" :src="n.image" />
      </li>
    </ul>
  </details>
</template>

<style scoped>
details { @apply self-center mb-3 relative }
details:not([open]) summary { @apply animate-pulse }
summary { @apply 
  flex flex-row gap-0 items-center justify-center 
  ring-1 bg-yellow-300 rounded-full ring-blue-400
  shadow-md shadow-sky-400
  px-2 py-1 -mt-2
  text-2xl font-extrabold
}
ul { @apply 
  absolute right-0 -bottom-8
  flex flex-col justify-start items-end h-full min-w-max
}
li { @apply 
    flex flex-row justify-end my-2 gap-1
    bg-blue-900 rounded-lg ring-1 
    shadow-sm shadow-sky-300 
    pl-3 transition-all relative
    hover:hue-rotate-15 hover:scale-105
}
.txt { @apply text-right }
 .t { @apply font-extrabold text-lg -mb-1 }
 .b { @apply font-light text-sm leading-none }
img { @apply h-[3em] scale-125 origin-left }
.close { @apply 
  absolute -top-2 -left-2
  hover:text-yellow-400 transition-all
  animate-spin
}
</style>