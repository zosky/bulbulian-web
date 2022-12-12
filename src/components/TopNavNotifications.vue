<script setup>
import { AlertCircleOutline, CloseCircle } from 'mdue'
const msgCache = inject('$msgCache')
const localUser = inject('$localUser') // getUser
const saveToken = inject('$saveToken') // get FCM token
const mCache = computed( ()=> msgCache?.value )

// (inject/unInject) notifications into tray
// const addNote = newNote => msgCache?.value?.find(m=>m.title==newNote.title) 
//   ? null : msgCache?.value?.push(newNote)
const rmNote = ix => { msgCache.value.splice(ix,1) }
// getToken ? save : notice
const thisToken = ref(null)
inject('$smashToken')().then(t=>thisToken.value=t)

// save if token and user 
watchEffect(()=>{
  const u = localUser?.user
  const t = thisToken.value
  // console.log('U+T DEBUG', u, t)
  if(u?.uid && t){ 
    console.log('✅ 👱 🗯️ 💾')
    saveToken(u) 
  }
})

const installGoTime = async () => {
  const promptEvent = window.deferredPrompt
  if (!promptEvent) return // The deferred prompt isn't available.
  promptEvent.prompt() // (else) Show the install prompt.
  await promptEvent.userChoice // Log the result
  window.deferredPrompt = null // Reset the deferred prompt variable, since prompt() can only be called once.
  const instalMsgIX = msgCache.value.findIndex(n=>n.id=='install')
  rmNote(instalMsgIX)
}

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
        class="Vue-Toastification__toast top-right toastReshade"
        :class="`Vue-Toastification__toast--${n?.type??'info'}`"
        @click="n?.id=='install'?installGoTime():''">
        <img v-if="typeof n?.icon == 'string' && n?.icon?.match(/(^http.*)/)" :src="n?.icon" />
        <component :is="n.icon" v-else class="h-8 w-8 mr-1 scale-125 origin-right" />
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
.txt { @apply text-right }
 .t { @apply font-extrabold text-lg -mb-1 }
 .b { @apply font-light text-sm leading-none max-w-[18rem] }
img { @apply h-[2em] scale-125 origin-right mr-2 }
.close { @apply 
  hover:text-yellow-400 transition-all
  animate-spin
}
</style>