import {IGenre} from "../interfaces";

const globalFunc_getYear = (fullDate:string):string => {
   return  fullDate && fullDate? new Date(fullDate).getFullYear().toString() : '';
}

 function getGenresByIDs (genresList:IGenre[],genresFilterID: number[]): IGenre[]  {
   return  genresList.filter(genre => genresFilterID.includes(genre.id));
};

export {
    globalFunc_getYear,
    getGenresByIDs
}