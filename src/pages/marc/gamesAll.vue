<script setup>
import { GamepadVariant } from 'mdue'
import gamesPS3 from '../../json/ps3.json'
import gamesSNES from '../../json/snes.json'
import gamesLutris from '../../json/lutris.json'

const shelf = '/images/games/skyScrapper/woodShelf.png'
const myGames = ref([])
const lutrisArtStyle = ref('coverart') // TODO (banners|coverart)
const search = ref(null)
// smash URLs
const data = computed(()=>{
  const s = search.value
  const games = myGames.value.flat()
    ?.filter(g=> s ? g?.name?.toLowerCase()?.includes(s) : g?.name )
    ?.sort((a,b)=>a?.name?.toLowerCase()>b?.name?.toLowerCase()?1:-1)
    ?.slice(0,48) // TODO proper pager
  return games  
})
// ps3
myGames.value.push( 
  gamesPS3?.map( g => g = { ...g, console:'ps3', 
    img: `/images/games/skyScrapper/${g.images.cover}`
  })
)
// SNES
myGames.value.push( 
  gamesSNES?.map( g => g= { ...g, console:'snes', 
    img: `/images/games/skyScrapper/${g.cover}`
  })
)
// lutris
myGames.value.push( 
  gamesLutris?.map( g => g = { ...g, 
    img:`/images/games/lutris/${lutrisArtStyle.value}/${g.slug}.jpg`
  })
)
</script>

<template>
  <div class="wrap">
    <div class="searchBar">
      <GamepadVariant text-xl class="ico" />
      <input v-model="search" type="search" placeholder="search games...">
    </div>
    <!-- TODO: pager -->
    <div class="blockBuster">
      <template v-for="(game,gIX) in data?.slice(0,48)" :key="game.id">
        <div class="relative">
          <img
            :src="game.img"
            :alt="game.name" class="game"
            :class="game.console" />
          <div class="label">
            <GameControllers :i="game.console" class="w-1/4 -rotate-12 scale-150 origin-bottom-right" />
            <div class="w-full leading-none font-bold text-xs">{{game.name}}</div>
          </div>
        </div>
        <!-- desktopShelf(*/6) || mobileShelf (*/4) -->
        <img v-if="((gIX%6==5) || gIX == data?.length-1)" :src="shelf" class="shelf hidden md:block" />
        <img v-if="((gIX%4==3) || gIX == data?.length-1)" :src="shelf" class="shelf block md:hidden" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.searchBar { @apply w-full flex flex-row items-center px-3 }
.searchBar .ico { @apply text-3xl -mr-12 self-center -mb-2 }
 details:not([open]) { @apply my-28 }
 details[open] { @apply mb-28 mt-10 }
 details[open] summary { @apply mb-20 }
 details:not([open]) .console { @apply w-[20em] lg:w-[32em]  }
 details[open] .console { @apply w-[10em] lg:w-[12em]}

 .wrap { @apply flex flex-col max-w-7xl mx-auto pb-12 }
 input { @apply bg-transparent rounded-full pl-10 pr-8 mt-2 text-yellow-300 mx-3 w-full }
 summary { @apply flex flex-row gap-2 items-center bg-blue-900 bg-opacity-40 font-bold w-min rounded-l-full shadow-sm shadow-sky-300 h-10 }
 .num { @apply w-12 text-right }
 .console { @apply -rotate-12 -mr-20 transition-all }
 .blockBuster { @apply grid grid-cols-4 lg:grid-cols-6 gap-y-10 px-5 xl:px-20 mt-10 }
 .game { @apply scale-125 hover:scale-150 hover:z-10 transition-all hover:-translate-y-5}
 .shelf { @apply col-span-full w-full -mt-16 lg:-mt-36 }

 .game.snes { @apply mt-28 translate-x-8}
 .game.lutris {
    @apply inline relative h-full m-0 shadow-lg shadow-blue-600 ring-blue-600 ring-4 w-[90%] ;
    transform: perspective(250px) rotateY(20deg) translateX(20px);
    transition: all 0.2s ease;
}

 .game.lutris:hover { 
  transform: perspective(500px) rotateY(0deg) scale(1.2) translateX(20px);
 }

.label { @apply 
  absolute -bottom-[6.5rem] left-0 px-3 py-1 mx-4 
  flex flex-row  place-items-center gap-1 
  bg-blue-800 bg-opacity-25 
  ring-1 ring-blue-500 
  rounded-xl 
}
.ps3 { @apply aspect-[3/4]}
.lutris { @apply aspect-[3/4]}
.snes { @apply aspect-[4/3] }
</style>