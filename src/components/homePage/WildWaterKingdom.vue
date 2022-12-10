<template>
  <div class="wrap">
    <iframe
      src="https://youtube.com/embed/Y9EIzsrFp-c?autoplay=1&mute=1&playsinline=1&controls=1&showinfo=0&autohide=1&rel=0">
    </iframe>
    <div class="label">
      <div>
        <PersonBubble name="marc" class="i" />
        woohoo, wild water kingdom
      </div>
      <div>
        <PersonBubble name="ben" class="i" />
        thats not what its called anymore daddy!!!
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap { @apply w-full max-w-7xl mx-auto flex md:flex-row flex-col my-6 px-2 }
iframe { @apply 
  w-full md:w-2/3 aspect-[16/9] 
  border-gray-700 border-l 
  border-y 
  rounded-t-xl md:rounded-xl
}
.label{@apply 
  flex flex-col 
  mx-0 md:ml-0 md:mr-2 
  px-3 py-4 md:py-0 md:mx-0 md:my-10
  bg-gray-800 border-r border-y 
  border-gray-700 bg-opacity-50 backdrop-blur-md 
   w-full md:w-1/3 
  items-center justify-center 
  text-xl leading-none 
  gap-3 border-l 
  rounded-b-xl rounded-tr-none md:rounded-r-3xl md:rounded-bl-none md:border-l-0
}
.label > div { @apply flex flex-row gap-2 items-center max-w-xs }
.i { @apply w-[2em] }
</style>