
const getYear = (fullDate:string):string => {
   return  fullDate && fullDate? new Date(fullDate).getFullYear().toString() : '';
}
export {
    getYear
}