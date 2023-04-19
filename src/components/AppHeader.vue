<script>
import AppSearch from './AppSearch.vue';

export default{
    name: "AppHeader",
    components: { AppSearch
    
    }
}

</script>

<template>
    <header>
        <div class="header">
            <AppSearch/>
        </div>

    </header>
</template>

<style scoped lang="scss">
.header{
    height: 100px;
    background-color: rgb(66, 66, 66);
 }


</style>