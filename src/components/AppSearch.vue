<script>
import {store} from "../store";
import AppLogo from "./AppLogo.vue";
export default{
    name: "AppSearch",
    emits: ["filter"],
    components: {
        AppLogo
    },
    data (){
        return{
            store,
        }
    }

  
}

</script>

<template>
        <div class="search-section d-flex justify-content-end">
            <div class="searchbar input-group">
                <input @keyup.enter ="$emit('filter')" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Cerca qualsiasi cosa..." v-model="store.UserFilter">
                <button @click="$emit('filter')" class="btn btn-danger"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
</template>

<style scoped lang="scss">
.header{
    .search-section{
        width: 100%;
        height: 100%;
        border-radius: 0;
        .searchbar{
            width: 500px;
            i,
            .form-control{
                font-size: 1.8rem;
                border-radius: 0;
            }  
        }
        .btn{
            padding: 0 3rem;
            border-radius: 0;
        }
    }
 }


</style>