
export function twoSum(arry, arry2) {
   let string = ""
   let string2 = ""

    arry.forEach(element => {
        string +=element
    });
    
    arry2.forEach(element => {
        string2 +=element
    });
    
    let re = Number(string) +  Number(string2)

    return re
}


export function luckyNumber(value) {
    let orinal = String(value)
    let len = orinal.length
    let re = ""
    let subStrings = orinal.split("", len)
 
    for (let index = subStrings.length - 1; index >= 0; index--) {
        re += subStrings[index]
    }
    
    if (Number(re) === Number(orinal)) return true
    
    return false

}

export function errorMessage(input) {
    if  (input === "" || input === undefined  || input === null )  return 'Required field'
    if (!Number(input)) return 'Must be a number besides 0'
    return "" 
 
}
  
