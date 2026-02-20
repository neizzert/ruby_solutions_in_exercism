
export function getFactors(number){
    let factors = []
    let maxDivisor = number - 1

// small improvement, when we have a prime number then we cannot compute its divisors.

if (number % number && number % 1 && number % maxDivisor !==0) return 1
  
    while (maxDivisor >  0){
        if (number % maxDivisor === 0) factors.push(maxDivisor)
        maxDivisor -= 1
    }
    return factors
}

export function sumFactors(factors){
    let sumFactors = 0
 // prime number
 if (factors.length === 1) return 1 
   factors.forEach(element => {
        sumFactors+=element
    });

    return sumFactors
}

export const classify = (number) => {
    const factors = getFactors(number)
    let sumFactor = sumFactors(factors)
    let error =  new Error("Classification is only possible for natural numbers.")
    
    if (number <= 0)  throw error
    if (number === sumFactor) return "perfect"
    else if (number < sumFactor) return "abundant"
    else if (number >= sumFactor) return 'deficient'

};
