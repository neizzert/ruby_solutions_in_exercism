
export function cardTypeCheck(list, cardType){
    let accumulator = 0

    for (const element of list) {
        if (element === cardType) accumulator = accumulator + 1
    }
    return accumulator
}

 export function determineOddEvenCards(list, boolean){
    let accumulatorEven = 0
    let accumulatorAdd = 0

     if (boolean) {
        for (let i = 0; i < list.length; i++){
            if (list[i] % 2 == 0) accumulatorEven = accumulatorEven + 1
            
        }
        return accumulatorEven
     }
     else{
        for (let i = 0; i < list.length; i++){
            if (list[i] % 2 !== 0) accumulatorAdd = accumulatorAdd + 1  
     }
      return accumulatorAdd
    }
 }

