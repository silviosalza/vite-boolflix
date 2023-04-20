<script>
import {store} from "../store";
export default{
    name: "AppSearch",
    emits: ["filter"],
    data (){
        return{
            store,
        }
    }

  
}

</script>

<template>
    
        <div class="search-section d-flex gap-2 justify-content-end align-items-center">
            <div class="searchbar input-group mb-3">
                <input @keyup.enter ="$emit('filter')" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Inserisci il titolo" v-model="store.UserFilter">
                <button @click="$emit('filter')" class="btn btn-danger">Cerca</button>
            </div>
        </div>
</template>

<style scoped lang="scss">
.header{
    height: 100px;
    background-color: rgb(66, 66, 66);
    .search-section{
        height: 100%;
        padding-right: 2rem;
        .searchbar{
            height: 30%;
            width: 30%;
        }
        .btn{
            padding: 0 3rem;
        }
    }
 }


</style>