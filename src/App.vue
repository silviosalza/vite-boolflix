<script >
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMainPage from "./components/AppMainPage.vue"

export default{
  components: {
    AppHeader,
    AppMainPage
},
  data(){
    return{
      store
    }

  },
}


</script>

<template>
  <AppHeader/>
  <AppMainPage/>
</template>

<style lang="scss" >
@use "./styles/general.scss";
body{
  background-color: rgb(53, 48, 48);

}


</style>
