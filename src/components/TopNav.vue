<script setup>
import { Home, ThemeLightDark, ArrowRight } from 'mdue'

const goTime = () => {
  const t = localStorage.getItem('theme')
  if ( t == 'dark' ) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme','dark')
  }
}

const t = localStorage.getItem('theme')
if( t=='dark' ) document.documentElement.classList.add('dark')

</script>
<template>
  <header>
    <div class="wrap">
      <h1 title="Bulbulian.com">
        <Home v-if="$route?.meta?.title=='Home'" class="home" />
        <template v-else-if="$route?.meta?.title!='Home'">
          <FamLogo  class="logo"   @click="$router.push({name:'/'})"/>
          <div v-for="p in $route?.name?.split('/')?.filter(t=>t)" :key="p" class="crumbs">
            <ArrowRight class="next" />
            {{p}}
          </div>
        </template>
      </h1>
      <div class="rSide">
        <TopNavPeople class="peeps" />
        <GoogleLogin />
        <ThemeLightDark class="darkLight" @click="goTime()" />
      </div>
    </div>
  </header>  
</template>

<style scoped>
header { @apply 
  bg-sky-200 bg-opacity-20 overflow-visible
  dark:bg-gray-900 dark:bg-opacity-20  dark:text-sky-600 
  shadow dark:shadow-yellow-400 backdrop-blur-sm 
}
.wrap { @apply mx-auto max-w-7xl px-4 pt-6 pb-2 sm:px-6 lg:px-8 flex flex-row justify-between }
h1 { @apply text-3xl font-bold leading-tight flex flex-row items-center gap-2 }
.logo { @apply h-12 -mb-3 md:mb-0 -mt-3 md:mt-0 }
.darkLight { @apply text-4xl -mt-2 md:-mt-5 }
.crumbs { @apply sm:flex flex-row items-center hidden }
.rSide { @apply flex flex-row items-center gap-2 }
.peeps { @apply scale-75 md:scale-100 transition-all }
.next { @apply opacity-50 scale-75 -mr-1 }
.home { @apply -mt-3 md:mt-0 }
</style>