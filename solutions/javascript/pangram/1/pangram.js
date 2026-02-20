export const isNumber = (char) => {
   return char === '1' || char ==='2' || char === '3' || char === '4' || char == '5' || char == '6' || char == '7' || char == '8' || char == '9' || char == '0'  
}

export const isPangram = (sentence) => {
  let accumulate = 0
  const chars = sentence.split('')
  const saved = []
  let isHere = false
 
  for (const char of chars ) {
      if (char == "_" || char  == ' ' || isNumber(char) || char === '.' || char  === '"') continue
      for (const c of saved){
        if (c.toUpperCase() == char.toUpperCase()){
            isHere = true
            break
         }
        }
     if (isHere) {
        isHere = false
        continue
     }

      else{
         accumulate += 1
         saved.push(char)
   
      }
  }
  let ans = accumulate == 26 
  return ans    
}