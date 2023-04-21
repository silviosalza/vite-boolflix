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
            return Math.ceil(element.vote_average / 2)
        },
        emptyStarVote(element){
            return 5 - Math.ceil(element.vote_average / 2)
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
            <li><span>Bootflix rate:</span><div class="stars"><i v-for="num in starVote(movie)" class="fa-solid fa-star"></i><i v-if="starVote(movie) < 5" v-for="num in emptyStarVote(movie)" class="fa-regular fa-star"></i></div></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card{
        width: 200px;
        height: 300px;
        margin: 5px;
        background-image: linear-gradient(to right, #751818, #2f2b2b);
        border-radius: 10px;
        border: rgb(185, 185, 185) 1px solid;
        
        ul{
            padding: 0.5rem;
            li{
                list-style: none;
                color: white;
                font-size: 0.9rem;
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
                font-size: 1.3rem;
                font-weight: 700;
                padding-top: 1rem;
                text-align: center;
            }

        }
    }


</style>