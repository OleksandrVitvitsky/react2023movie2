

const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500';

const imdbURL = 'https://www.imdb.com/title/'
const youtubeURL = 'https://www.youtube.com/embed/';

const discover = '/discover'
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        base: `${discover}${movie}`,
        byId: (id: string): string => `${movie}/${id}`,
        video: (id:string):string => `${movie}/${id}/videos`,
        byGenreId: (id:string):string => `${discover}${movie}?with_genres=${id}`,
        byName: (searchText:string):string => `${baseURL}/search/movie?query=${searchText}`
    },
    genres: {
        base: genres
    },
    poster: {
        base: (poster_path: string): string => `${posterURL}${poster_path}`
    },
    countries:{
        base: '/configuration/countries'
    },
    casts:{
        byMovieId: (id:string):string => `/movie/${id}/credits`
    }

}

export {
    baseURL,
    posterURL,
    imdbURL,
    youtubeURL,
    urls
}