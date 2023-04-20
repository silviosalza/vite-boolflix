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
        <img v-show="isHovered" class="frontimg" :src="`${store.imgURL}${tvshow.poster_path}`" alt="">
        <ul v-show="!isHovered">
            <li>{{ tvshow.name }}</li>
            <li>{{ tvshow.original_name }}</li>
            <li><lang-flag :iso= tvshow.original_language /></li>
            <li>{{ tvshow.vote_average }}</li>
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
    }
.frontimg{
        height: 400px;
        border-radius: 10px;
    }

</style>