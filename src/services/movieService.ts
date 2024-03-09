import {apiService} from "./apiService";
import {IRes} from "../types";
import {IResMovieData} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll: (page: string = '1'): IRes<IResMovieData> => apiService.get(urls.movies.base, {params: {page}}),
}

export {
    movieService
}