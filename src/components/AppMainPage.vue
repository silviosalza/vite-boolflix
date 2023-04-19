<script>
import { store } from '../store';
export default{
    name: "AppMainPage",
    data (){
        return{
            store,
            isHovered: true
        }
    },
    methods:{
        languageFlag(){
            
        }
    }
  
}

</script>

<template>
    <div class="main">
        <div class="movies">
            <h2>Movies</h2>
            <ul class="d-flex flex-wrap">
                <li class="col-2" v-for="(movie,index) in store.movies" :key="index">
                    <div class="card" @mouseover="isHovered = false" @mouseleave="isHovered = true">
                        <img class="frontimg" v-show="isHovered" :src="`${store.imgURL}${movie.poster_path}`" alt="">
                        <ul v-show="!isHovered">
                            <li>{{ movie.title }}</li>
                            <li>{{ movie.original_title }}</li>
                            <li> {{ movie.original_language }} <img class="languageIcon" src="../assets/Akrotiri-32.png" alt=""></li>
                            <li>{{ movie.vote_average }}</li>
                        </ul>
                    </div>

                </li>
            </ul>
        </div>
        <div class="tvseries">
            <h2>TV Series</h2>
            <ul class="d-flex flex-wrap">
                <li class="col-2" v-for="(tvshow,index) in store.TVshows" :key="index">
                    <div class="card" @mouseover="isHovered = false" @mouseleave="isHovered = true">
                        <img v-show="isHovered" class="frontimg" :src="`${store.imgURL}${tvshow.poster_path}`" alt="">
                        <ul v-show="!isHovered">
                            <li>{{ tvshow.name }}</li>
                            <li>{{ tvshow.original_name }}</li>
                            <li>{{ tvshow.original_language }}</li>
                            <li>{{ tvshow.vote_average }}</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">

.main{
    background-color: rgb(0, 0, 0, 0.3); 
    .card{
        height: 342px;
        margin: 10px;
        border-radius: 10px;
        .frontimg{
            height: 342px;
            border-radius: 10px;
        }
    }
 }
 ul{
    padding: 0;
 }
 li{
    list-style: none;
 }
 .languageIcon{
    width: 20px;
 }
</style>