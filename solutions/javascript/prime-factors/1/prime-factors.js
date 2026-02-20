
export const primeFactors = (n) => {
  let divisor = 2
  let primes = [] 

  while (n > 1){
     if (n % divisor === 0) {
        n /= divisor
        primes.push(divisor)
       // We continue looking for subdivision, if we find exactly one division.
        if (n % divisor !== 0) divisor +=1
     } 
    else divisor +=1 
  }
  return primes
};


console.log(primeFactors(8))





















