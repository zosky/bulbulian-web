<script setup>
import { getStorage, ref as fbRef, getDownloadURL } from 'firebase/storage'
import { Loading, CalendarBlankOutline, DownloadCircleOutline, GamepadCircleOutline, Linux, GlassWine } from 'mdue'
import moment from 'moment'
const last5games = ref([])
const fData = inject('$fData')

fData('marc/games/lutris','hidden','==',0,'lastplayed',true,5)
  .then(async r=>{
    last5games.value = r?.map( g => g = 
    { ...g, imgRef:`games/lutris/coverart/${g.slug}.jpg` })
    for (const g of last5games.value){ 
      const fileRel = fbRef(getStorage(),g.imgRef)
      g.img = await getDownloadURL(fileRel).catch(()=> null)
      delete g.imgRef
    }
  })
const formatPlaytime = h => { 
  const hs = Math.floor(h)
  const mR = Math.round((h-hs) * 60)
  const str = `${ hs>0?(hs+'h'):'' }${ mR>0?(mR +'m'):'' }`
  return str
}
</script>

<template>
  <div class="flex flex-col p-3">
    <div class="header">
      <PersonBubble name="ben" class="i" />
      <div class="tLabel" v-text="'&'" />
      <PersonBubble name="marc" class="i" /> 
      <div class="tLabel" v-text="'last'" />
      <GameControllers class="i -rotate-12 animate scale-[3] translate-x-full" /> 
    </div>
    <div class="cards">
      <div v-for="(game,gIX) in last5games" :key="gIX" class="game flip">
        <div class="front">
          <img v-if="game?.img" :src="game?.img" :alt="game?.name">
          <Loading v-else />
          <div class="infoWrap">
            <Linux v-if="game.platform == 'Linux'" class="pIcon mix-blend-difference text-yellow-300 w-12 h-12 -rotate-12 -mr-6" />
            <GlassWine v-else-if="game.platform == 'Windows'" class="pIcon mix-blend-difference text-yellow-300 w-10 h-10 -mr-1 -mb-1" />
            <div v-else v-text="game.platform" />
            <div class="infoBar">
              <div v-if="game?.playtime>0.1" class="line1">
                <CalendarBlankOutline />
                <div v-text="formatPlaytime(game.playtime)" />
              </div>
              <div class="tRel" v-text="moment(game.lastplayed,'X').fromNow(true)" />
            </div>
          </div>
        </div>
        <div class="back">
          <div class="font-extrabold text-xl">
            <h1 class="w-full" v-text="game.name" />
            <h2 class="opacity-75 font-mono" v-text="game.year" />
          </div>
          <div class="text-lg">
            <GamepadCircleOutline />
            <h3 v-text="moment(game.lastplayed,'X').format('MMM Do')" />
          </div>
          <div class="text-base font-light -mt-3">
            <DownloadCircleOutline class="scale-125" />
            <h4 v-text="moment(game.installed_at,'X').format('MMM Do YYYY')" />
          </div>
          <div>
            <Linux v-if="game.platform == 'Linux'" class="mix-blend-difference text-yellow-300 w-12 h-12 -rotate-12 -mr-6" />
            <GlassWine v-else-if="game.platform == 'Windows'" class="mix-blend-difference text-yellow-300 w-10 h-10 -mr-1 -mb-1" />
            <div class="font-bold" v-text="game.runner" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .header { @apply p-3 flex flex-row items-center gap-1 w-full text-4xl font-extrabold -mb-4 z-[3] }
  .header .i { @apply aspect-1 h-[1em]   }
  .cards { @apply grid grid-cols-5 gap-2 z-[2] w-full }
  .game { @apply rounded-sm shadow-md }
/* CARD FLIP: tailwind-afied++ by moi
 * [OG props](https://codepen.io/aron-tw/pen/pLJqgE)
 */
.game { @apply relative inline-block
  shadow-blue-900 hover:shadow-yellow-400 w-full transition-shadow 
  border-b-2 border-r rounded-xl border-blue-600 hover:border-yellow-600 }
.game > div { @apply 
  flex flex-col items-center justify-center 
  bg-gray-800 backdrop-blur-md bg-opacity-75
  rounded-xl;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}
.game img { @apply rounded-xl w-full h-full aspect-[3/4] }
.game > .front { transform: rotateY(0deg); }
.game > .back { transform: rotateY(-180deg); @apply absolute opacity-0 top-0 left-0 w-full h-full ; }
.game:hover > .front { transform: rotateY(180deg);}
.game:hover > .back { transform: rotateY(0deg); @apply opacity-100; }
/* card infoTab */
.back { @apply flex flex-col gap-4}
.tRel { @apply font-bold text-sm }
.tRel::after { content: 'ago'; @apply font-light scale-75 opacity-75 pl-1 }
.back > div { @apply flex flex-row items-center gap-1 px-2 leading-none text-center }
.tLabel { @apply font-light opacity-50;  }
.infoWrap { @apply absolute bottom-2 right-0 flex flex-row h-7 overflow-visible items-end }
.infoBar { @apply flex flex-col -mb-2 px-3 justify-end items-end bg-blue-900 backdrop-blur-sm border-sky-700 border-l border-t rounded-tl-2xl opacity-75 rounded-br-md }
.line1 { @apply flex flex-row-reverse items-center -mb-2 -mr-1 font-extrabold text-xl }
</style>
<style>
/* inlined svg needs NOT scoped css (but still specific enough to only target this one) */
.pIcon path { stroke: skyblue; stroke-width: 0.5px; }
</style>