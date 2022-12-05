<script setup>
import { 
  PlayCircleOutline, RobotExcited, HelpCircleOutline,
  ArrowUpCircleOutline, ArrowDownCircleOutline, ArrowLeftCircleOutline, ArrowRightCircleOutline, CloseCircleOutline 
} from 'mdue'
import moment from 'moment'
import { levelMaps } from './nibbles/levelMaps'
const gameOn = ref(false)
const gameAuto = ref(false)
const gamePause = ref(false)
const gameTimer = ref(null)
const gameDifficulty = ref(1000)
const score = ref(0)
const computedScore = computed(()=>{
  // props; https://stackoverflow.com/questions/29549836/how-to-find-the-sum-of-all-numbers-between-1-and-n-using-javascript
  const s = score.value
  const t = Math.floor(s/10)
  const numSum = (n) => n * (n+1) / 2
  const nt = numSum(s)*100 - (t*1000) // almost logRyhtmic (no 10's)
  return nt
})
// fireStore scoreBoard
const highScore = ref([])
const dbCollection = 'nibblesHighScore' // cached @ fireBase
const localUser = inject('$localUser') // isLoggedIN ?
// const getData = inject('$getData') // getter
const qData = inject('$qData')
const saveData = inject('$saveData') // setter
// const rmData = inject('$rmData') // remover
qData(dbCollection,'score',true,5)
  .then( r =>{ 
    const rSorted = r?.sort((a,b)=>a.score<b.score?1:-1)
    highScore.value = rSorted
    const scoreTxt = `${rSorted[0]?.name} ${rSorted[0].score}`
    useHead({title:`nibbles champion: [${scoreTxt}]`})
  })

// PLAY VARS
const curX = ref(3)
const curY = ref(3)
const curDirection = ref('x+')
const tailLength = ref(3)
const tail = ref([])
const levelMap = ref([])
const max = ref({x:32,y:32})
const thisFruit = ref(null) // filled in by from one of these when playing ...
const fruits = [
  '🌭','🌮','🌯','🌰','🌶️','🌽','🍄','🍅','🍆','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🍎',
  '🍏','🍐','🍑','🍒','🍓','🍔','🍕','🍖','🍗','🍘','🍙','🍚','🍛','🍜','🍝','🍞','🍟',
  '🍠','🍡','🍢','🍣','🍤','🍥','🍦','🍦','🍧','🍨','🍩','🍪','🍫','🍬','🍭','🍮','🍯',
  '🍰','🍱','🍲','🍳','🍴','🍵','🍶','🍷','🍸','🍹','🍺','🍻','🍼','🍽️','🍾','🍿','🎂',
  '🥂','🥃','🥄','🥐','🥑','🥒','🥓','🥔','🥕','🥖','🥗','🥘','🥙','🥚','🥛','🥜','🥝',
  '🥞','🥟','🥠','🥡','🥢','🥣','🥤','🥥','🥦','🥧','🥨','🥩','🥪','🥫','🥬','🥭','🥮',
  '🥯','🦪','🧀','🧁','🧂','🧃','🧄','🧅','🧆','🧇','🧈','🧉','🧊','🧋','🫐','🫑','🫒',
  '🫓','🫔','🫕','🫖']
onMounted(()=>{
  window.addEventListener('keypress', function(e) {
    e.preventDefault()
    // console.log(String.fromCharCode(e.keyCode))
    const k = String.fromCharCode(e.keyCode)
    const validMove = ['w','a','s','d'].includes(k)
    // if: init (play/auto)
    if(['q','p'].includes(k)) {
      if(gameOn.value) { 
        // TOGGLE > then process
        gamePause.value = !gamePause.value 
        if (gamePause.value) { // paused
          clearInterval(gameTimer.value)
        } else { // unPaused
          gameTimer.value = setInterval(()=>{movePlayer()}, gameDifficulty.value)
        }
      } else { // start/reset game
        gameOn.value = true
        curX.value = 3
        curY.value = 3
        tail.value = []
        tailLength.value = 3
        gameAuto.value = k=='p'?true:false // on/off
        gameDifficulty.value = gameAuto.value ? 420 : 1000
        score.value = 0
        levelMap.value = levelMaps[0] // "level 1"
        curDirection.value = 'x+'
        // TODO switch leveles points/10
      }
    }
    // valid move
    else if((!gameOn.value||gamePause.value) && validMove){
      // ui/ux micro preGame
      const thisB = document.getElementById(k)
      thisB.classList.add('keyBlink')      
      setTimeout(()=> {thisB.classList.remove('keyBlink')},150)      
    } else if(validMove){
      // setDirection
      const cd = 
        (['a','d'].includes(k)?'x':'y') + // x(L|R) or Y
        (['a','w'].includes(k)?'-':'+') // up(L|T) or down
      curDirection.value = cd
      movePlayer(cd)
    }
  }.bind(this))
})

const movePlayer = d =>{
  d = d ?? curDirection.value ?? 'x+'
  // AUTOMODE ?!
  if(gameAuto.value==true){
    const [cX,cY] = [ curX.value, curY.value ]
    const [fX,fY] = [ thisFruit.value?.x, thisFruit.value?.y ]
    const [dX,dY] = [ cX-fX, cY-fY ]
    const [aX,aY] = [ Math.abs(dX), Math.abs(dY)]
    const [nX,nY] = [
      aY>0 && d[0]=='x' ? `y${dY>0?'-':'+'}` : null, // turn up/down
      `x${dX>0?'-':'+'}`, // turn left/right
    ]
    console.log('autoDebug', `c:${cX}/${cY}`, `f:${fX}/${fY}`, `a:${aX}/${aY}`, `d:${d}`,`n:${nX}/${nY}`,)
    d= nX ?? nY
  }
  // tail
  tail.value.unshift({x:curX.value,y:curY.value}) // update tail
  if(tail.value.length >= tailLength.value) tail.value.pop() // max length
  // head
  const diff = d[1]=='+'?+1:-1
  if (d[0]=='x') curX.value = curX.value + diff
  else curY.value = curY.value + diff
  // reset timer
  clearInterval(gameTimer.value)
  gameTimer.value = setInterval(()=>{movePlayer()}, gameDifficulty.value)
}

// "play the game"
watchEffect(()=>{
  const x = curX.value
  const y = curY.value
  const maxXY = max.value
  // fail conditions
  const xFail = x > maxXY.x || !x
  const yFail = y > maxXY.y || !y
  const tailFail = tail.value.find(t=>t?.x==x && t?.y==y)
  const wallFail = levelMap.value.find(t=>t?.x==x && t?.y==y)
  if( xFail || yFail || tailFail || wallFail ) {     
    clearInterval(gameTimer.value)
    gameTimer.value = null
    gameOn.value = false
    const newHighScore = score.value > highScore?.value?.at(-1)?.score 
    const arrFull = highScore?.value?.length == 5
    // doNewScore (if top5+loggedIN > add)
    console.log(
      'GAME OVER // u',localUser?.user?.displayName, 
      'auth', !gameAuto.value, 
      'score', score.value, 
      'LOW:',score.value > highScore?.value?.at(-1)?.score
    )
    if ( localUser?.user?.displayName && !gameAuto.value ){
      // drop last if newHight && arrFull
      if ( newHighScore && arrFull ){ highScore.value = highScore.value.slice(0,-1) }
      if ( newHighScore ){
        const n = localUser?.user?.displayName
        const d = moment().format('X')
        const s = computedScore.value //score.value 
        const o = {name:n,score:s,date:d}
        highScore.value.push(o) // inject into runState (max5)
        highScore.value = highScore.value.sort((a,b)=>a.score>b.score?-1:1) // reSort
        const rmD = highScore.value?.at(-1)?.date
        // const savedScore = highScore.value.find(h=>h.date==o.date && h.score==o.score)
        console.log('newHighScore', o, `full:${arrFull}`,'rm', rmD)
        saveData( dbCollection, d, o ) // save remote
      }
    }
  }
})


const pickFruit = (point) => {
  if (point) { // score++    
    score.value = score.value + 1
    //gameDifficulty++ (cancel timer > set new difficulty > (re)set timer
    clearInterval(gameTimer.value)
    const newDifficulty = gameDifficulty.value - (score.value*10)
    // linier after ~12 points
    gameDifficulty.value = newDifficulty > 200 ? newDifficulty : gameDifficulty.value - 10
    gameTimer.value = setInterval(()=>{movePlayer()}, gameDifficulty.value)
    // load new levelMap every 10 points
    if(score.value%10==0){
      levelMap.value = levelMaps[score.value] // "level X"
      gameDifficulty.value = 420
      tailLength.value = 1
      tail.value = []
    } else { 
      tailLength.value = tailLength.value + 1
    }
  }
  // pick new fruit
  const newFruit = {
    fruit: fruits[Math.floor(Math.random()*fruits.length)],
    x: Math.ceil(Math.random()*max.value.x),
    y: Math.ceil(Math.random()*max.value.y)
  }
  // pick again (if it landed on the tail)
  if(tail.value.find(t=>t?.x==newFruit.x&&t?.y==newFruit.y)) pickFruit()
  else thisFruit.value = newFruit
}

// gameStart or pointScored = newFruit + timer
watchEffect(()=>{
  const g = gameOn.value
  const t = thisFruit.value
  const h = { x: curX.value, y: curY.value }
  const pointScored = t?.x == h?.x && t?.y == h?.y
  if (g && !t) pickFruit()
  else if (pointScored) pickFruit(1) 
  // 1 timer
  if ( g && !gameTimer.value){
    gameTimer.value = setInterval(
      ()=>{ movePlayer() }, 
      gameDifficulty.value
    )
  }
})

</script>

<template>
  <div class="relative">
    <div id="header" class="flex flex-row gap-1 justify-between">
      <h1> nibbbles vue3 style</h1>
      <div v-if="score" class="text-xs self-center font-mono" v-text="`level ${Math.floor(score/10)+1}`" />
      <h2 v-if="!gameOn">Q to (re)start</h2>
      <!-- <div v-if="gameOn" class="text-red-500 px-3" v-text="`DEBUG: p:${curX}/:${curY}|f:${thisFruit?.x}/${thisFruit?.y}/d:${gameDifficulty}`"/>         -->
      <h2 v-if="gameOn" class="animate-pulse"> score: <b v-text="`${score} [${computedScore}]`"/> </h2>
    </div>
    <div v-if="(!gameOn || gamePause)" id="scoreBoard" class="absolute top-10 left-3 md:left-10 w-[95%] md:w-[90%] bg-blue-600 bg-opacity-40 p-3 rounded-xl z-20">
      <div :class="{'opacity-50':!score}" class="mx-3 flex flex-row justify-between bg-gray-800 bg-opacity-60 px-5 p-3 text-xl font-bold justify-between my-2 rounded-2xl ring-1">
        <div v-text="`${gameAuto?'robot':'my'} ${gamePause?'current':'last'} score`" />
        <div class="scale-150 pr-4" v-text="computedScore" />
      </div>
      <div class="flex flex-row justify-between w-full">
        <div class="font-extralight opacity-75 px-10">live leaderBoard</div>
        <div v-if="!localUser?.user?.email" class="text-xs font-mono italic text-left pr-7 self-center">*only for logged in users</div>        
      </div>
      <div v-for="(s,ix) in highScore" :key="ix" class="flex flex-row justify-between px-10 gap-4">
        <div class="flex flex-row gap-1">
          <div class="flex flex-row gap-2">
            <div class="rank font-bold text-right w-6 self-center" v-text="ix+1" />
            <PersonBubble 
              v-if="localUser?.user?.displayName.split(' ')?.[1]?.toLowerCase() == 'bulbulian'"
              class="h-[2.1em] m-1" 
              :name="localUser?.user?.displayName.split(' ')?.[0]" />
            <div v-else v-text="s.name" />
            <div class="text-xs font-light self-center" v-text="moment(s.date,'X').fromNow()" />
          </div>
        </div>
        <div class="font-bold text-xl" v-text="s.score" />
      </div>
      <div id="contolTest"  class="mt-2 flex flex-row flex-wrap justify-center items-center gap-3 w-full py-4 border-b border-t border-blue-600">
        <div class="flex flex-col justify-end items-end font-light opacity-50 -ml-10">
          <label class="text-2xl -mb-2" v-text="`test drive`" />
          <label class="text-4xl" v-text="`controls`" />
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex gap-2 ">
            <div id="q" class="keyboardStart flex flex-row gap-1 items-center">
              <PlayCircleOutline />
              <div v-text="`q`"/>
            </div>
            <!-- ArrowDownCircleOutline, ArrowLeftCircleOutline, ArrowRightCircleOutline -->
            <div id="w" class="keyboardButton">
              <ArrowUpCircleOutline />
              <div  v-text="`w`" />
            </div>
            <div id="q" class="keyboardStart flex flex-row gap-1 items-center ml-10">
              <RobotExcited />
              <div v-text="`p`"/>
            </div>
          </div>
          <div class="flex gap-2">
            <div id="a" class="keyboardButton">
              <ArrowLeftCircleOutline />
              <div v-text="`a`"/>
            </div>
            <div id="s" class="keyboardButton">
              <ArrowDownCircleOutline />
              <div v-text="`s`"/>
            </div>
            <div id="d" class="keyboardButton">
              <ArrowRightCircleOutline />
              <div v-text="`d`"/>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center w-full text-2xl p-3 pt-3 pb-0 flex flex-row gap-2">
        <div class="keyboardButton start w-full" v-text="`q`"/>
        <div class="keyboardButton robot w-full" v-text="`p`"/>
      </div> 
    </div>
    <div 
      id="game"
      class="flex flex-col w-full max-w-3xl mx-auto"
      :class="gameOn?'gameOn':'gameOff'">
      <div v-for="y of max.y" :key="y" class="flex flex-row w-full max-w-3xl">
        <div 
          v-for="x of max.x" :key="x"
          :class="{
            gCell: true,
            tailHere: tail.find(t=>t.x==x && t.y==y),
            headHere: curX == x && curY == y,
            wallHere: levelMap.find(t=>t.x==x && t.y==y)
          }">
          <div 
            v-if="(thisFruit?.x==x && thisFruit?.y==y)"
            id="food" 
            v-text="thisFruit.fruit"/>
        </div>
      </div>
    </div>
    <button 
      id="why" 
      class="p-4 flex flex-row gap-1 ring-1 my-10 m-4 rounded-xl items-center pr-10" 
      @click="$router.push(`/marc/nibbles${$route.name=='/marc/nibbles/why'?'':'/why'}`)">
      <HelpCircleOutline v-if="($route.name=='/marc/nibbles')" />
      <CloseCircleOutline v-else class="animate-spin" />
      {{ $route.name=='/marc/nibbles' ? 'why is this here?' : 'close' }}
    </button>
    <router-view />
    <div v-if="score" id="scoreBKG">
      <div v-text="score" />
    </div>
  </div>
</template>

<style scoped>
  .gameOn .gCell { @apply ring-blue-500 ring-opacity-25 }
  .gameOff .gCell { @apply ring-gray-500 ring-opacity-25 }
  .gCell { @apply w-1/12 h-auto aspect-1 ring-1 }
  .tailHere { @apply  rounded-xl scale-95 }
  .headHere { @apply  rounded-full scale-110 }
  .wallHere { @apply opacity-30 bg-yellow-500 }
  .gameOn .headHere { @apply bg-sky-400 ring-sky-400 ring-1 bg-opacity-80 }
  .gameOn .tailHere { @apply bg-sky-500 bg-opacity-60 }
  .gameOff .tailHere { @apply bg-gray-800 bg-opacity-30 }
  .gameOff .headHere { @apply bg-gray-800 bg-opacity-80 }

  #food { @apply text-base scale-125 flex flex-row items-center justify-center  w-full h-full rounded-full  }
  .gameOn #food { @apply bg-green-300 animate-pulse bg-opacity-30 ring-green-600 ring-2}
  .gameOff #food { @apply bg-yellow-300 opacity-10 bg-opacity-10 }
  
  /* leaderBoard */
  #scoreBKG { @apply 
      absolute top-0 left-0 m-auto w-full opacity-25 
      flex flex-col justify-center items-center 
      text-[44em] font-extrabold text-center tracking-[-0.15em] leading-[1em] }
  .rank::before { content: '#'; @apply font-light opacity-50 }
  /* pauseMenu UX/UI */
  .keyboardButton { @apply ring-1 ring-blue-600 rounded-xl py-3 px-3 font-extrabold text-xl uppercase bg-gray-900 bg-opacity-50 flex flex-row items-center }
  .keyboardStart { @apply ring-1 ring-blue-300 rounded-xl py-3 px-3 font-extrabold text-xl uppercase bg-purple-900 bg-opacity-50 flex flex-row items-center }
  
  .start { @apply bg-sky-800 bg-opacity-50 text-sky-200 }
  .start::after { content: ' to start & pause'; @apply font-light text-xs pl-1 }
  .robot::after { content: ' to let maths do it'; @apply font-light text-xs pl-1 }
  .keyBlink { animation: keyPulse 125ms linear; @apply bg-opacity-75 }

@keyframes keyPulse {
  0%  { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

</style>