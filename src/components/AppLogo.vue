<script>
import { store } from '../store';
export default{
    name: "AppLogo",
    data (){
        return{
            store,
        }
    }, 
}
</script>

<template>
<div class="logo d-flex align-items-center">
  <span>B</span>
  <span>O</span>
  <span>O</span>
  <span>T</span>
  <span>F</span>
  <span>L</span>
  <span>I</span>
  <span>X</span>
</div>
</template>

<style scoped lang="scss">
.logo{
    height: 100%;
    padding-top: 10px;
    padding-left: 3rem;
    width: 100%;
    color: white;
    margin: 0;
    perspective: 1000px;
    perspective-origin: 50% 0;
    span{
        font-size: 7rem;
        display: inline-block;
    }
}
.logo span {
  transform-origin: 0 0;
  transform: scaleX(80) rotateY(89.5deg);
}

</style>