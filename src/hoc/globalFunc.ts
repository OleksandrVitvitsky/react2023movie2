
const globfunc_getYear = (fullDate:string):string => {
   return  fullDate && fullDate? new Date(fullDate).getFullYear().toString() : '';
}
export {
    globfunc_getYear
}