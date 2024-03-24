import {apiService} from "./apiService";
import {language, urls} from "../constants";
import {IRes} from "../types";


import {ICastsInterface} from "../interfaces/castsInterface";
import {ICast} from "../interfaces/castInterface";

const castsService = {
    getByMovieID: (id:string): IRes<ICastsInterface<ICast>> => apiService.get(urls.casts.byMovieId(id.toString()), {params: {language}})
};

export {
    castsService
}