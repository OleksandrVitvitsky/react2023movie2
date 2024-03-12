import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";

import {IMovie, IPagination} from "../interfaces";

const genreService = {
    getAll: (): IRes<IPagination<IMovie>> => apiService.get(urls.genres.base)
};

export {
    genreService
}