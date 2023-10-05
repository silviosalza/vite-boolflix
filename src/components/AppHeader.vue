<script>
import AppSearch from './AppSearch.vue';
import AppLogo from './AppLogo.vue'
import { store } from '../store';
import axios from 'axios';

export default{
   
    name: "AppHeader",
    components: { AppSearch,
        AppLogo
    
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
                    api_key: "e8d583293f8b235b5fead3bfd3ade0ac",
                    query: this.store.UserFilter
                }
            })
            .then((resp)=>{
                this.store.movies = resp.data.results
                console.log(this.store.movies);

            })
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params:{
                    api_key: "e8d583293f8b235b5fead3bfd3ade0ac",
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
        <div class="header d-flex align-items-center">
            <AppLogo/>
            <AppSearch @filter="handlefilter"/>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header{
    width: 100%;
    height: 100px;
background-color: rgb(0, 0, 0); }


</style>