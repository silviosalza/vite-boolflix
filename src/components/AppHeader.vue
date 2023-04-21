<script>
import AppSearch from './AppSearch.vue';
import { store } from '../store';
import axios from 'axios';

export default{
   
    name: "AppHeader",
    components: { AppSearch
    
    },
    data(){
        return{
            store
        }
    },

    methods: {
        handlefilter (){
        
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params:{
                    api_key: "edea3a003526728c6be0a37fd4c82aea",
                    query: this.store.UserFilter
                }
            })
            .then((resp)=>{
                this.store.movies = resp.data.results
                console.log(this.store.movies);

            })
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params:{
                    api_key: "edea3a003526728c6be0a37fd4c82aea",
                    query: this.store.UserFilter
                }
            })
            .then((resp)=>{
                this.store.TVshows = resp.data.results
                console.log(this.store.TVshows);

            })
        }
    }
}

</script>

<template>
    <header>
        <div class="header">
            <AppSearch @filter="handlefilter"/>
        </div>

    </header>
</template>

<style scoped lang="scss">
.header{
    height: 100px;
background-color: black; }


</style>