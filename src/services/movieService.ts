import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {language, urls} from "../constants";

const movieService = {
    getAll: (page: string): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page, language}}),
    getById:(id: string):IRes<IMovie> => apiService.get(urls.movies.byId(id),{params: {language}}),
    getByGenreId: (page:string,id:string):IRes<any> =>apiService.get(urls.movies.byGenreId(id),{params: {page,language}}),
    // getByYear: (page:string, year: string): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page, year, language}}),
    search: (page:string, searchText:string):IRes<IPagination<IMovie>> => apiService.get(urls.movies.byName(searchText),{params: {page,language}})
}

export {
    movieService
}