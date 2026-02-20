
export class Squares {
    constructor(n) {
        this.n = n
    }

    get sumOfSquares() {
        let sum = 0
        for (let num = 0; num <= this.n; num++) {
            sum += num ** 2
        }               
        return sum    
    }
  
    get squareOfSum() {
        let sum = 0
        for (let num = 0; num <= this.n; num++) {
            sum+=num
        }
        sum  = sum ** 2        
        return sum
    }

    get difference() {
       return this.squareOfSum - this.sumOfSquares
    }
}  