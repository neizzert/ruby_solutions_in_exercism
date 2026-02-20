
export function getFactors(number){
    let factors = []
    let maxDivisor = number - 1
    
    while (maxDivisor >  0){
        if (number % maxDivisor === 0) factors.push(maxDivisor)
        maxDivisor -= 1
    }
    return factors
}

export function sumFactors(factors){
    let sumFactors = 0
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
