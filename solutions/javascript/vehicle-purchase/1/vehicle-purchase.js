
export function needsLicense(kind) {
       if (kind === "car" || kind === "truck") return true
       return false
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */

export function chooseVehicle(option1 , option2 ){
      // entre dos opciones, se devuelve una opcion en orden 
      let ordered = []
      let message = "is clearly the better choice."
      ordered.push(option1)
      ordered.push(option2)
      ordered.sort()
      return ordered[0] + " " + message 
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */

export function calculateResellPrice(originalPrice, age){
       if (age < 3) {
           const thirtyPorcentage = 80
           let become =  thirtyPorcentage / 100
           return originalPrice * become
       }
       else if (age > 10){
            const fiftyPorcentage = 50
            let become =  fiftyPorcentage / 100
            return originalPrice * become
       }
       else if (age => 3  &&  age <10 ){
              const seventyPorcentage = 70
              let become  = seventyPorcentage / 100
              return originalPrice * become
       }
}

