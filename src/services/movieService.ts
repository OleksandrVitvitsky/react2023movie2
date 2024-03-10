import {apiService} from "./apiService";
import {IRes} from "../types";
import {IResMovieState} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll: (page: string): IRes<IResMovieState> => apiService.get(urls.movies.base, {params: {page}}),
}

export {
    movieService
}