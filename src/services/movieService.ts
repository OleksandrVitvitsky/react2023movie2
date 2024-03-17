import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {language, urls} from "../constants";

const movieService = {
    getAll: (page: string): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page, language}}),
}

export {
    movieService
}