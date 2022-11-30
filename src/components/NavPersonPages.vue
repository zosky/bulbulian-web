<script setup>
import { BookOpenPageVariant } from 'mdue'
const route = useRoute()
const router = useRouter()
const person = computed( ()=> route?.path?.split('/')?.[1] )
const myRoutes = computed(() => router?.options?.routes
  ?.find( r=>r.path == `/${person.value}`)?.children
  ?.filter( r=>r.name )
)
</script>

<template>
  <div class="w-full px-2 bg-opacity-20 bg-gray-300 flex flex-row">
    <div class="max-w-7xl w-full mx-auto flex flex-row p-2 ">
      <menu class="px-3 flex flex-row items-center gap-2">
        <li
          v-for="p in myRoutes" :key="p"
          :class="{hereNow: $route.name == p.name }"
          @click="$router.push(p)">
          <BookOpenPageVariant class="inline mb-0.5" /> 
          {{p?.name?.split('/')?.pop() || 'home' }}
        </li>
      </menu>
    </div>
  </div>
</template>

<style scoped>
li { @apply  transition-all text-sm font-light }
.hereNow { @apply 
  text-blue-800 dark:text-yellow-400 px-3
  scale-125 font-normal }
</style>