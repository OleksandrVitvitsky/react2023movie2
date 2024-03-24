import {IGenre} from "./genreInterface";
import {IProd_companiesInterface} from "./prod_companiesInterface";
import {IProd_countriesInterface} from "./prod_countriesInterface";
import {ISpoken_langInterface} from "./spoken_langInterface";

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genre_ids: number[];
    genres:IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProd_companiesInterface[];
    production_countries: IProd_countriesInterface[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpoken_langInterface[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}