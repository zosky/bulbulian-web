<!-- props: https://wweb.dev/resources/animated-css-background-generator/ -->

<template>
  <div class="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>  
</template>

<style scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    @apply z-[-10] opacity-40 bg-slate-50 dark:bg-black; 
    /* background: #00010a; */

    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
}

.background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 16;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #7d7f5c;
    top: 47%;
    left: 49%;
    animation-duration: 337s;
    animation-delay: -180s;
    transform-origin: 5vw 25vh;
    box-shadow: 40vmin 0 5.607442969406093vmin currentColor;
}
.background span:nth-child(1) {
    color: #7d7f5c;
    top: 31%;
    left: 40%;
    animation-duration: 132s;
    animation-delay: -90s;
    transform-origin: 8vw -2vh;
    box-shadow: -40vmin 0 5.5014414025413805vmin currentColor;
}
.background span:nth-child(2) {
    color: #10279e;
    top: 67%;
    left: 44%;
    animation-duration: 91s;
    animation-delay: -81s;
    transform-origin: -2vw 7vh;
    box-shadow: 40vmin 0 5.429498282694475vmin currentColor;
}
.background span:nth-child(3) {
    color: #10279e;
    top: 100%;
    left: 77%;
    animation-duration: 166s;
    animation-delay: -38s;
    transform-origin: -16vw 1vh;
    box-shadow: -40vmin 0 5.755398085330485vmin currentColor;
}
.background span:nth-child(4) {
    color: #7d7f5c;
    top: 50%;
    left: 44%;
    animation-duration: 265s;
    animation-delay: -258s;
    transform-origin: -11vw -1vh;
    box-shadow: -40vmin 0 5.810911891802153vmin currentColor;
}
.background span:nth-child(5) {
    color: #2b7873;
    top: 13%;
    left: 50%;
    animation-duration: 344s;
    animation-delay: -20s;
    transform-origin: -13vw -9vh;
    box-shadow: 40vmin 0 5.367986341282585vmin currentColor;
}
.background span:nth-child(6) {
    color: #7d7f5c;
    top: 56%;
    left: 32%;
    animation-duration: 115s;
    animation-delay: -302s;
    transform-origin: 11vw -22vh;
    box-shadow: 40vmin 0 5.348635899480195vmin currentColor;
}
.background span:nth-child(7) {
    color: #2b7873;
    top: 34%;
    left: 83%;
    animation-duration: 54s;
    animation-delay: -133s;
    transform-origin: -4vw 12vh;
    box-shadow: 40vmin 0 5.409754243266197vmin currentColor;
}
.background span:nth-child(8) {
    color: #7d7f5c;
    top: 76%;
    left: 88%;
    animation-duration: 107s;
    animation-delay: -324s;
    transform-origin: 22vw -18vh;
    box-shadow: -40vmin 0 5.216168852820408vmin currentColor;
}
.background span:nth-child(9) {
    color: #10279e;
    top: 49%;
    left: 65%;
    animation-duration: 100s;
    animation-delay: -194s;
    transform-origin: -18vw 15vh;
    box-shadow: 40vmin 0 5.97907973156207vmin currentColor;
}
.background span:nth-child(10) {
    color: #10279e;
    top: 35%;
    left: 30%;
    animation-duration: 215s;
    animation-delay: -300s;
    transform-origin: -14vw 6vh;
    box-shadow: 40vmin 0 5.26963578849923vmin currentColor;
}
.background span:nth-child(11) {
    color: #2b7873;
    top: 88%;
    left: 97%;
    animation-duration: 42s;
    animation-delay: -22s;
    transform-origin: -24vw -9vh;
    box-shadow: -40vmin 0 5.819581700454808vmin currentColor;
}
.background span:nth-child(12) {
    color: #2b7873;
    top: 30%;
    left: 64%;
    animation-duration: 329s;
    animation-delay: -80s;
    transform-origin: 20vw -11vh;
    box-shadow: 40vmin 0 5.907084619633551vmin currentColor;
}
.background span:nth-child(13) {
    color: #10279e;
    top: 65%;
    left: 5%;
    animation-duration: 29s;
    animation-delay: -238s;
    transform-origin: 6vw 16vh;
    box-shadow: -40vmin 0 5.662728785465875vmin currentColor;
}
.background span:nth-child(14) {
    color: #2b7873;
    top: 14%;
    left: 35%;
    animation-duration: 123s;
    animation-delay: -211s;
    transform-origin: 23vw 1vh;
    box-shadow: -40vmin 0 5.33229877244204vmin currentColor;
}
.background span:nth-child(15) {
    color: #7d7f5c;
    top: 53%;
    left: 60%;
    animation-duration: 248s;
    animation-delay: -200s;
    transform-origin: -10vw -20vh;
    box-shadow: 40vmin 0 5.34343779593299vmin currentColor;
}
.background span:nth-child(16) {
    color: #10279e;
    top: 58%;
    left: 94%;
    animation-duration: 278s;
    animation-delay: -308s;
    transform-origin: -24vw 6vh;
    box-shadow: -40vmin 0 5.59553194143828vmin currentColor;
}
.background span:nth-child(17) {
    color: #10279e;
    top: 84%;
    left: 55%;
    animation-duration: 114s;
    animation-delay: -40s;
    transform-origin: -7vw 10vh;
    box-shadow: 40vmin 0 5.621736700710397vmin currentColor;
}
.background span:nth-child(18) {
    color: #2b7873;
    top: 94%;
    left: 100%;
    animation-duration: 280s;
    animation-delay: -201s;
    transform-origin: -14vw -14vh;
    box-shadow: 40vmin 0 5.014842630476927vmin currentColor;
}
.background span:nth-child(19) {
    color: #2b7873;
    top: 16%;
    left: 58%;
    animation-duration: 100s;
    animation-delay: -178s;
    transform-origin: 8vw 8vh;
    box-shadow: 40vmin 0 5.5553301035065745vmin currentColor;
}

</style>