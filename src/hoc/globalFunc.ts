import {IGenre, IProd_countriesInterface} from "../interfaces";

const globalFunc_getYear = (fullDate:string):string => {
   return  fullDate && fullDate? new Date(fullDate).getFullYear().toString() : '';
}

 function getGenresByIDs (genresList:IGenre[],genresFilterID: number[]): IGenre[]  {
   return  genresList.filter(genre => genresFilterID.includes(genre.id));
};

function setAttrThemeMode() {
    const themeMode = JSON.parse(localStorage.getItem('darkMode'));
    if (themeMode){
        document.documentElement.setAttribute('themeMode', "dark")
    } else {
        document.documentElement.setAttribute('themeMode', "light")
    }
}

function getRuntime(time: number) {
    if (time && time > 0) {
        return Math.floor(time / 60) + " год. " + time % 60 + " хв."
    } else {
        return ""
    }
}


function findCountryByICO(countries:IProd_countriesInterface[],isoCode:string) {
    return countries.find(country => country.iso_3166_1 === isoCode)
}

export {
    globalFunc_getYear,
    getGenresByIDs,
    setAttrThemeMode,
    getRuntime,
    findCountryByICO
}