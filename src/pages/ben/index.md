<script setup>
  import { Youtube, Video } from 'mdue'
</script>

## Hi. I'm <PersonBubble name=ben /> <Bulbulian />

I love watching & making videos.
subscribe to my <Youtube /> channel & like my <Video/>s

# here's some of my favorite videos

<div class="flex flex-wrap">
  <YouTube id="Y1JWQ8_ms5U" class=v />
  <YouTube id="fnCczQODFzo" class=v />
  <YouTube id="Y1JWQ8_ms5U" class=v />
  <YouTube id="J-FzHDxeNIE" class=v />
</div>

<style scoped>
  .v { @apply w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-0.5 }
</style>
