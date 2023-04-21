<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags'
export default{
    name: "AppCardMovie",
    components: {
        LangFlag
    },
    props: {
        movie: Object
    },
    data(){
        return{
            store,
            isHovered: true
        }
    },
    methods:{
        starVote(element){
            return parseInt(element.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="card" @mouseover="isHovered = false" @mouseleave="isHovered = true">
        <div class="front" v-show="isHovered">
            <img class="frontimg" :src="`${store.imgURL}${movie.poster_path}`" onerror="this.style.display='none'">
            <p v-if= "movie.poster_path === null">{{ movie.title }}</p>
        </div>
        <ul v-show="!isHovered">
            <li><span>Titolo:</span> <p>{{ movie.title }}</p></li>
            <li><span>Titolo originale:</span> <p>{{ movie.original_title }}</p></li>
            <li><span>Lingua originale: </span><lang-flag :iso= movie.original_language /></li>
            <li><span>Bootflix rate:</span><div class="stars">{{ starVote(movie) }}</div></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card{
        width: 200px;
        height: 300px;
        margin: 2px;
        background-color: rgb(23, 23, 23, 0.5);
        border-radius: 10px;
        
        ul{
            padding: 0.5rem;
            li{
                list-style: none;
                color: white;
                span{
                    font-weight: 700;
        
                }
            }
        }
        .front{
            .frontimg{
                width: 100%;
                height: 300px;
                border-radius: 10px;
                object-fit: cover;
                overflow: hidden;
            }
            p{
                color: white;
                font-size: 1.5rem;
                font-weight: 700;
                text-align: center;
            }

        }
    }


</style>