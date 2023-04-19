<script>
import { store } from '../store';
export default{
    name: "AppMainPage",
    data (){
        return{
            store,
        }
    }
  
}

</script>

<template>
    <div class="main">
        <div class="movies">
            <h2>Movies</h2>
            <ul class="d-flex flex-wrap">
                <li class="col-1" v-for="(movie,index) in store.movies" :key="index">
                    <img src="https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg" alt="">
                    <ul>
                        <li>{{ movie.title }}</li>
                        <li>{{ movie.original_title }}</li>
                        <li>{{ movie.original_language }}</li>
                        <li>{{ movie.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="tvseries">
            <h2>TV Series</h2>
            <ul class="d-flex flex-wrap">
                <li class="col-1" v-for="(tvshow,index) in store.TVshows" :key="index">
                    <img src="https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg" alt="">
                    <ul>
                        <li>{{ tvshow.name }}</li>
                        <li>{{ tvshow.original_name }}</li>
                        <li>{{ tvshow.original_language }}</li>
                        <li>{{ tvshow.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </div>



    </div>
</template>

<style scoped lang="scss">
.main{
    height:calc(100vh - 100px);
    background-color: rgb(0, 0, 0, 0.3);
 }
 ul{
    padding: 0;
 }
 
 li{
    list-style: none;
 }
 img{
    width: 100px;
 }
 
 


</style>