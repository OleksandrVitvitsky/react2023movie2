const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2FkN2JiOGJiYjZlYjQzYjFkZWI2ODNlNTgxM2E5OSIsInN1YiI6IjY1ZTMyMjgyMWFkOTNiMDE4NjA2M2E0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFGBqV8D-mE4hWK9IgXfgSmxhEJRoDrBxKDBGyWzs50';

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
        base: (poster_path: string): string => `${poster_path}`
    }

}

export {
    baseURL,
    posterURL,
    urls,
    token
}