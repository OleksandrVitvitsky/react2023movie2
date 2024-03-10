import {IMovie} from "./movieInterface";

export interface IResMovieState {
    page: number;
    results: IMovie[],
    total_pages: number;
    total_results: number;

}