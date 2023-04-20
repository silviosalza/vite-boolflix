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
            <h2>Movies</h2>
            <ul class="d-flex flex-wrap">
                <li v-for="(movie,index) in store.movies" :key="index">
                    <AppCardMovie :movie="movie"/>
                </li>
            </ul>
        </div>
        <div class="tvseries">
            <h2>TV Series</h2>
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
    background-color: rgb(0, 0, 0, 0.3); 
 }
 ul{
    padding: 0;
 }
 li{
    list-style: none;
 }
</style>