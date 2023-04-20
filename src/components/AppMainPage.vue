<script>
import { store } from '../store';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTV from "./AppCardTV.vue"
export default{
    name: "AppMainPage",
    components: {
        AppCardMovie,
        AppCardTV
    },
    data (){
        return{
            store,
            isHovered: true
        }
    },
  
}

</script>

<template>
    <div class="main">
        <div class="movies">
            <div class="titleHeader">
                <h2 class="d-flex justify-content-center">MOVIES</h2>
            </div>
            <ul class="d-flex flex-wrap">
                <li v-for="(movie,index) in store.movies" :key="index">
                    <AppCardMovie :movie="movie"/>
                </li>
            </ul>
        </div>
        <div class="tvseries">
            <div class="titleHeader">
                <h2 class="d-flex justify-content-center">TV SHOWS</h2>
            </div>
            <ul class="d-flex flex-wrap">
                <li v-for="(tvshow,index) in store.TVshows" :key="index">
                    <AppCardTV :tvshow="tvshow"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main{ 
    
    .titleHeader{
        background-color: rgb(193, 129, 129);
        border: 3px solid black;
        padding: 1rem 0;
        margin: 1rem 0;
        h2{
            font-weight: 700;
            color: white;
        }

    }
    ul{
       padding: 0;
       li{
          list-style: none;
       }
   
    }
 }
</style>