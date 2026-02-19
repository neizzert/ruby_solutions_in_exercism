
export function getMultiples(number, levelMax){
  let multiples = []
  let next = 1
  while (next < levelMax) {
      if (number * next < levelMax){
          multiples.push(number * next)
          next += 1
      }
      else next += 1 
  }
  return multiples
}

export const sum = (numbers, level) => {
  let sum = 0
  let multiple = new Set()
  let values = []

  numbers.forEach(element => {
        values.push(...getMultiples(element, level))
  });
   
  values.sort( (a,b) => a - b)
  
  values.forEach(element => {
      multiple.add(element)
  });
  for (const element of multiple) {
      sum += element
  }
  return sum
};


