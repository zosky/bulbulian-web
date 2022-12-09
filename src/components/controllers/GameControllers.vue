<script setup>
import ControllerPS3 from './ControllerPS3.vue'
import ControllerPS3move from './ControllerPS3move.vue'
import ControllerPS3guitar from './ControllerPS3guitar.vue'
import ControllerSNES from './ControllerSNES.vue'
import ControllerLutris from './ControllerLutris.vue'
defineProps({
  i: { type: String, default: 'ps3' },
  animate: { type: Boolean, default: true },    
})

const propIconMap = { 
  'ps3' : ControllerPS3 ,
  'move' : ControllerPS3move ,
  'guitar': ControllerPS3guitar,
  'snes': ControllerSNES,
  'lutris': ControllerLutris,
}
</script>

<template>  
  <component :is="propIconMap?.[i] ?? ControllerPS3" class="animate" />
</template>

