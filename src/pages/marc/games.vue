<script setup>
import { GamepadVariant, Loading } from 'mdue'
import gamesPS3 from '../../json/ps3.json'
import gamesSNES from '../../json/snes.json'
const allGames = {ps3:gamesPS3,snes:gamesSNES}
const search = ref(null)
// smash URLs
const data = computed(()=>{
  const s = search.value
  const ps3 = allGames?.ps3
    ?.map(g=>g={...g, img:`/images/games/skyScrapper/covers/${g.id}${g.name.includes('PSN')?'.[PSN]':''}.png`})
    ?.filter(g=> s ? g.name.toLowerCase().includes(s) : true )
    ?? []
  const snes = allGames?.snes
    ?.map(g=>g={...g, img:`/images/games/skyScrapper/${g.cover}`})
    ?.filter(g=> s ? g.name.toLowerCase().includes(s) : true )
    ?? []
  return { ps3, snes }
})
const shelf = '/images/games/skyScrapper/woodShelf.png'

</script>

<template>
  <div class="wrap">
    <div class="searchBar">
      <GamepadVariant text-xl class="ico" />
      <input v-model="search" type="search" placeholder="search games...">
    </div>
    <details v-for="(games,console) in data" :key="console" class="p-2 ">
      <summary class="">
        <Loading v-if="(!games?.length && !search?.length)" class="animate-spin text-3xl animate-pulse" />
        <div v-else class="num" v-text="games?.length" />
        <GameControllers :i="console" :class="console" class="console animate" :animate="true" />
      </summary>
      <div class="blockBuster">
        <template v-for="(game,gIX) in games" :key="game.id">
          <img :src="game.img" :alt="game.name" class="game" />
          <!-- desktopShelf(*/6) || mobileShelf (*/4) -->
          <img v-if="((gIX%6==5) || gIX == games?.length-1)" :src="shelf" class="shelf hidden md:block" />
          <img v-if="((gIX%4==3) || gIX == games?.length-1)" :src="shelf" class="shelf block md:hidden" />
        </template>
      </div>
    </details>
  </div>
</template>

<style scoped>
.searchBar { @apply w-full flex flex-row items-center px-3 }
.searchBar .ico { @apply text-3xl -mr-12 self-center -mb-6 }
 details:not([open]) { @apply my-28 }
 details[open] { @apply mb-28 mt-10 }
 details[open] summary { @apply mb-20 }
 details:not([open]) .console { @apply w-[20em] lg:w-[32em]  }
 details[open] .console { @apply w-[10em] lg:w-[12em]}

 .wrap { @apply flex flex-col max-w-7xl mx-auto pb-12 }
 input { @apply bg-transparent rounded-full pl-10 pr-8 mt-2 -mb-4 text-yellow-300 mx-3 w-full }
 summary { @apply flex flex-row gap-2 items-center bg-blue-900 bg-opacity-40 font-bold w-min rounded-l-full shadow-sm shadow-sky-300 h-10 }
 .num { @apply w-12 text-right }
 .console { @apply -rotate-12 -mr-20 transition-all }
 .blockBuster { @apply grid grid-cols-4 lg:grid-cols-6 gap-y-10 px-5 xl:px-20 }
 .game { @apply scale-125 hover:scale-150 hover:z-10 transition-all hover:-translate-y-5}
 .shelf { @apply col-span-full w-full -mt-16 lg:-mt-36 }
</style>