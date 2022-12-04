<script setup>
import { AccountBox, AccountQuestionOutline, Google, LoginVariant, ClockAlertOutline } from 'mdue'
import moment from 'moment'
const localUser = inject('$localUser') // "ref({isLoading,hasFailed,user:{email,displayName,photoUrl,lastLoginAt...}})
// methods
const doAuth = inject('$doAuth') // sauce
const loginWithGoogle = async () => { await doAuth() } // do theSauce
const logoutNow = async() => { // unDo sauce (after confirm)
  const ask = await confirm('logout ?')
  if(ask) await doAuth(true)
}
</script>

<template>
  <div class="h-min my-auto">
    <button v-if="!localUser?.user?.uid" class="login" @click="loginWithGoogle">
      <div class="icons">
        <AccountQuestionOutline />
        <LoginVariant />
        <Google />
      </div>
      <div class="text-xs" v-text="'login w/google'" />
    </button>
    <label v-else class="u logOUT" @click="logoutNow()">
      <ul>
        <li>
          <AccountBox/> {{localUser?.user?.displayName}}
        </li>
        <li>
          <ClockAlertOutline/>
          {{moment(localUser?.user?.lastLoginAt).fromNow(true)}}
        </li>
      </ul>
      <img :src="localUser?.user?.photoURL" :alt="localUser?.user?.displayName">
      <AccountBox class="imgReplace"/>
    </label>
  </div>
</template>

<style scoped>
.login { @apply w-full flex flex-col items-center mb-2 -mt-2 }
.u { @apply flex flex-row items-center gap-2 -mt-5 }
.u img { @apply rounded-full h-10 w-10 hidden md:flex }
.u .imgReplace { @apply flex md:hidden mt-2 }
ul { @apply text-xs md:flex flex-col hidden }
li { @apply flex-row-reverse items-center gap-1 text-right hidden md:flex min-w-max }
.icons { @apply flex flex-row }
.logOUT { @apply -mt-6 }
</style>