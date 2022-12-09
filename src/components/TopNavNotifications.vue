<script setup>
import { AlertCircleOutline, CloseCircle } from 'mdue'
// import { msgCache } from './fireBase/messaging'
import PersonBubbleBen from './PersonBubblePerPerson/PersonBubbleBen.vue'
// import PersonBubbleMarc from './PersonBubblePerPerson/PersonBubbleBen.vue'
const msgCache = inject('$msgCache')
const mCache = computed( ()=> msgCache?.value )
const rmNote = ix => { msgCache.value.splice(ix,1) }

// debug: inject fake notifications
const addNote = newNote => msgCache?.value?.find(m=>m.title==newNote.title) 
  ? null : msgCache?.value?.push(newNote)

addNote( { title: 'hello world 1', body: 'test1', image: '/favicon.svg', type: 'error' })
addNote( { title: 'hello world 2', body: 'test1', icon: PersonBubbleBen , type: 'info' })

</script>

<template>
  <details v-if="mCache?.length">
    <summary>
      <AlertCircleOutline /> 
      <div v-text="mCache?.length" />
    </summary>
    <ul>
      <li 
        v-for="(n,nIX) of mCache" :key="nIX" 
        class="Toastification__toast Vue-Toastification__toast top-right toastReshade"
        :class="`Vue-Toastification__toast--${n.type}`">
        <img v-if="n?.image" :src="n.image" />
        <component :is="n.icon" v-else />
        <div class="Vue-Toastification__toast-body custom-body">
          <div class="t" v-text="n?.title" />
          <div class="b" v-text="n?.body" />
        </div>
        <CloseCircle class="close" @click="rmNote(nIX)" />
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
  absolute right-0 -bottom-10
  flex flex-col justify-start items-center h-full min-w-max
}
li { @apply flex flex-row items-center }
/* li { @apply 
    flex flex-row justify-end my-2 gap-1
    bg-blue-900 rounded-lg ring-1 
    shadow-sm shadow-sky-300 
    pl-3 transition-all relative
    hover:hue-rotate-15 hover:scale-105
} */
.txt { @apply text-right }
 .t { @apply font-extrabold text-lg -mb-1 }
 .b { @apply font-light text-sm leading-none }
img { @apply h-[2em] scale-125 origin-right mr-2 }
.close { @apply 
  /* absolute -top-2 -left-2 */
  hover:text-yellow-400 transition-all
  animate-spin
}
</style>