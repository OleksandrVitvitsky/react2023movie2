import {apiService} from "./apiService";
import {language, urls} from "../constants";
import {IRes} from "../types";

import {IProd_countriesInterface} from "../interfaces";

const countriesService = {
    getAll: (): IRes<IProd_countriesInterface[]> => apiService.get(urls.countries.base, {params: {language}})
};

export {
    countriesService
}