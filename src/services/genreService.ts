import {apiService} from "./apiService";
import {language, urls} from "../constants";
import {IRes} from "../types";

import {IGenre, IGenres} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenres<IGenre>> => apiService.get(urls.genres.base, {params: {language}})
};

export {
    genreService
}