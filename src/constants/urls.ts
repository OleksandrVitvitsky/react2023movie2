

const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500';



const discover = '/discover'
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        base: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`
        // byGenreId: (id:number):string => `${discover}${movie}?with_genres=${id}`,
        // byName: (searchText:string):string => `${baseURL}/search/movie?query=${searchText}`
    },
    genres: {
        base: genres
    },
    poster: {
        base: (poster_path: string): string => `${posterURL}${poster_path}`
    }

}

export {
    baseURL,
    posterURL,
    urls
}