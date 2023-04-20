<script>
import { store } from '../store';
export default{
    name: "AppCardMovie",
    props: {
        movie: Object
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
        <img class="frontimg" v-show="isHovered" :src="`${store.imgURL}${movie.poster_path}`" alt="">
        <ul v-show="!isHovered">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li> {{ movie.original_language }} <img class="languageIcon" src="../assets/Akrotiri-32.png" alt=""></li>
            <li>{{ movie.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

.card{
        width: 280px;
        height: 400px;
        margin: 10px;
        background-color: rgb(23, 23, 23, 0.5);
        border-radius: 10px;
        .frontimg{
            height: 400px;
            border-radius: 10px;
        }
    }

</style>