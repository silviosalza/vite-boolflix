import {reactive} from "vue";

export const store = reactive({
 

    movies: [],
    TVshows: [],
    APIurl: "https://api.themoviedb.org/3/search/movie",
    UserFilter: ""


})