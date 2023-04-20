<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags'
export default{
    name: "AppCardTV",
    components: {
        LangFlag
    },
    props: {
        tvshow: Object
    },
    data(){
        return{
            store,
            isHovered: true
        }
    }
}
</script>

<template>
    <div class="card" @mouseover="isHovered = false" @mouseleave="isHovered = true">
        <div class="front" v-show="isHovered">
            <img class="frontimg" :src="`${store.imgURL}${tvshow.poster_path}`" onerror="this.style.display='none'">
            <p v-if= "tvshow.poster_path === null ">{{ tvshow.name }}</p> 
        </div>

        <ul v-show="!isHovered">
            <li><span>Titolo:</span><p>{{ tvshow.name }}</p></li>
            <li><span>Titolo originale:</span><p>{{ tvshow.original_name }}</p></li>
            <li><span>Lingua originale: </span><lang-flag :iso= tvshow.original_language /></li>
            <li><span>Bootflix rate:</span>{{ tvshow.vote_average }}</li>
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