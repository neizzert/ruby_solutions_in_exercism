export const convert = (number) => {
    let word1 = "Pling"
    let word2 = "Plang"
    let word3 =  "Plong"
     
    if (number % 5 == 0 && number % 7 === 0 && number % 3 === 0) return word1 + word2 + word3
    if ( (number % 3 === 0 &&  number % 5 === 0)) return word1 + word2
    if (number % 3 === 0 &&  number % 7 === 0) return word1 + word3 
    if (number % 5 === 0 &&  number % 7 == 0)  return word2 + word3 
    if (number % 7 === 0 &&  (!number % 3 === 0 || !number & 7 === 0) ) return word3
    if (number % 5 === 0 ) return word2 
    if (number % 3 === 0) return  word1
    else return String(number)     
};