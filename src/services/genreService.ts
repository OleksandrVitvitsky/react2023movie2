import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";

import {IResGenreData} from "../interfaces";

const genreService = {
    getAll: (): IRes<IResGenreData> => apiService.get(urls.genres.base)
};

export {
    genreService
}