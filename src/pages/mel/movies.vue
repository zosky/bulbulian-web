<script setup>
import { SortAlphabeticalAscendingVariant, SortCalendarDescending, MovieSearch, MovieOutline, CheckCircleOutline, PlayCircleOutline, StarCircleOutline, MovieFilter } from 'mdue'
import movies from '../../json/movies.json'
const moment = newMoment()
const search = ref(null)
const sortDate = ref(true)
const theseMovies = computed(()=>{
  const s = search.value?.toLowerCase()
  const mSearch = !s ? movies : movies.filter(m=>m.name.toLowerCase().includes(s))
  return mSearch
    ?.sort((a,b)=>
      sortDate?.value ? 
        a.created>b.created?-1:1
        : a.name > b.name ? 1:-1
    )
})
</script>

<template>
  <div class="flex flex-row justify-between">
    <div class="mt-5">
      <MovieSearch class="text-xl -mb-8 ml-2" />
      <input
        v-model="search" type="search"
        name="search" class="rounded-xl bg-transparent border border-blue-900 pl-8 text-yellow-400 w-96"
        :placeholder="`search`">
    </div>
    <div class="flex flex-row items-center pr-3 text-xl gap-1">
      <div class="font-mono text-lg" v-text="theseMovies.length" />
      <MovieOutline />
      <div class="flex flex-row gap-1 ring-1 rounded-xl px-2 py-1 items-center justify-center" @click="sortDate=!sortDate">
        <SortAlphabeticalAscendingVariant class="w-8 h-8 -mb-1" :class="{ 'text-yellow-400' : !sortDate }" />
        <SortCalendarDescending class="w-8 h-8" :class="{ 'text-yellow-400' : sortDate }" />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-6 gap-2 my-3">
    <div v-for="movie in theseMovies?.slice(0,24)" :key="movie.id" class="relative movie flip">
      <div class="front">
        <img :src="`/images/movies/poster/${movie.id}.jpg`" :alt="movie.name" class="w-full h-full poster">
        <CheckCircleOutline v-if="movie?.playCount" class="absolute bottom-1 right-1 text-3xl mix-blend-difference" />
      </div>
      <div class="back">
        <div class="b font-extrabold text-base py-4 bg-blue-900 bg-opacity-50 border-b border-sky-800 w-full" v-text="movie.name" />
        <div class="flex flex-col gap-0">
          <div class="d" v-text="moment(movie.created).fromNow()" />
          <div class="flex flex-row gap-1">
            <div v-if="movie.critic" class="flex flex-row gap-0">
              <MovieFilter />
              <div class="s" v-text="movie.critic" />
            </div>
            <div v-if="movie.rating" class="flex flex-row gap-0">
              <StarCircleOutline />
              <div class="r" v-text="movie.rating" />
            </div>
            <div v-if="movie.playCount" class="flex flex-row gap-0">
              <PlayCircleOutline />
              <div class="c" v-text="movie.playCount" />
            </div>
          </div>
          <div class="rez text-xs">
            <div class="w" v-text="movie.width" />
            <div class="h" v-text="movie.height" />
          </div>
        </div>

        <img :src="`/images/movies/backdrop/${movie.id}.jpg`" :alt="movie.name" class="w-full backdrop">
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* .header { @apply p-3 flex flex-row items-center gap-1 w-full text-4xl font-extrabold -mb-4 z-[3] } */
  /* .header .i { @apply aspect-1 h-[1em]   } */
  /* .cards { @apply grid grid-cols-2 md:grid-cols-6 gap-2 z-[2] w-full } */
  .movie { @apply rounded-sm shadow-md }
/* CARD FLIP: tailwind-afied++ by moi
 * [OG props](https://codepen.io/aron-tw/pen/pLJqgE)
 */
.movie { @apply relative inline-block
  /* shadow-blue-900 hover:shadow-yellow-400  */
  w-full transition-shadow 
  rounded-xl 
  /* border-b-2 border-r  */
  /* border-blue-600 hover:border-yellow-600  */
}
.movie > div { @apply 
  flex flex-col items-center justify-center 
  bg-gray-800 backdrop-blur-md bg-opacity-75
  rounded-xl;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}
.movie .poster { @apply rounded-xl w-full h-full aspect-[2/3] }
.movie .backdrop { @apply rounded-b-xl w-full aspect-[16/9]}
.movie > .front { transform: rotateY(0deg); }
.movie > .back { transform: rotateY(-180deg); @apply absolute opacity-0 top-0 left-0 w-full h-full ; }
.movie:hover > .front { transform: rotateY(180deg);}
.movie:hover > .back { transform: rotateY(0deg); @apply opacity-100; }
/* card infoTab */
.movie:hover > .back { @apply flex flex-col gap-1 justify-between h-full }
.tRel { @apply font-bold text-sm }
.tRel::after { content: 'ago'; @apply font-light scale-75 opacity-75 pl-1 }
.back > div { @apply items-center gap-1 px-2 leading-none text-center }
.tLabel { @apply font-light opacity-50;  }
.infoWrap { @apply absolute bottom-2 right-0 flex flex-row h-7 overflow-visible items-end }
.infoBar { @apply flex flex-col -mb-2 px-3 justify-end items-end bg-blue-900 backdrop-blur-sm border-sky-700 border-l border-t rounded-tl-2xl opacity-75 rounded-br-md }
.line1 { @apply flex flex-row-reverse items-center -mb-2 -mr-1 font-extrabold text-xl }

.rez { @apply flex flex-row gap-0 }
.rez .w::after { content: 'x'; @apply opacity-75 font-light }

</style>