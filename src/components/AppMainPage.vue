<script>
import { store } from '../store';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTV from "./AppCardTV.vue"
import AppLogo from './AppLogo.vue';
export default{
    name: "AppMainPage",
    components: {
        AppCardMovie,
        AppCardTV,
        AppLogo
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
        <div class="letter" v-if= "(store.movies.length === 0) && (store.TVshows.length === 0)">
            <span>B</span>
        </div>
        <div class="movies">
            <div class="titleHeader" v-if= "(store.movies.length > 0)">
                <h2>FILM</h2>
            </div>
            <ul class="d-flex flex-wrap">
                <li v-for="(movie,index) in store.movies" :key="index">
                    <AppCardMovie :movie="movie"/>
                </li>
            </ul>
        </div>
        <div class="tvseries">
            <div class="titleHeader" v-if= "(store.TVshows.length > 0)">
                <h2>SERIE TV</h2>
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
    height: calc(100vh - 100px);
    .letter{
        background: -webkit-linear-gradient(#ff0000, #000000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20rem;
        position: absolute;
        left: calc(50% - 50px);
        top: calc(50% - 150px);
    }
    }
    .titleHeader{
        background-image: linear-gradient(to right, #970000, #000000);
        padding: 0.1rem 0;
        margin: 1rem 0;
        width: 100%;
        h2{
            padding-left: 3rem;
            font-size: 2rem;
            font-weight: 100;
            color: white;
        }
    }
    ul{
       padding: 0;
       li{
          list-style: none;
       }
   
    }

</style>