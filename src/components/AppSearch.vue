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
    
        <div class="search-section d-flex gap-2">
            <div class="searchbar input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Inserisci il titolo" v-model="store.UserFilter">
            </div>

            <div>
                <button @click="$emit('filter')" class="btn btn-danger">Cerca</button>
            </div>
        </div>
</template>

<style scoped lang="scss">
.header{
    height: 100px;
    background-color: rgb(66, 66, 66);
 }

 .searchbar{
    width: 20%;
 }


</style>