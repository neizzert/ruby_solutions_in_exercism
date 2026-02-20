export function getCardPosition(list, card){
      for (let index = 0; index < list.length; index++) {
         if (card === list[index]) return  index
    }
  return -1 
}
export function doesStackIncludeCard(list, card) { 
    for (const element of list) {
        if (card === element) return true
    }
    return false
}

export function isEachCardEven(stack) {
    let isEvent = []
    for (let index = 0; index < stack.length; index++) {
        const element = stack[index];
        if (element % 2 === 0) {
            isEvent.push(true)
        }
        else isEvent.push(false)
    }
    
    for (const element of isEvent) {
        if (element === true){
            continue
        }
        else return false
    }
   return true
}

export function doesStackIncludeOddCard(list){
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element % 2 !== 0) {
            return true
        }
    
    }
    return false  
}



export function getFirstOddCard(stack) {
  for (const element of stack) {
        if (element % 2 !== 0) return element
    }
    return 
}  


export function getFirstEvenCardPosition(list) {
    for (let index = 0; index < list.length; index++) {
           if (list[index] % 2 === 0) return index

      }
     return -1
    
}
