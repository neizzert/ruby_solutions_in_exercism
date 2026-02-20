export const EXPECTED_MINUTES_IN_OVEN = 40

export function remainingMinutesInOven(actualMinutesInOven) {
       const EXPECTED_MINUTES_IN_OVEN = 40
       return EXPECTED_MINUTES_IN_OVEN -  actualMinutesInOven
}
   
export function preparationTimeInMinutes(numberOfLayers) {
       return numberOfLayers + numberOfLayers
}
 
 export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
       const TimePreparation = preparationTimeInMinutes(numberOfLayers)
       let  TotalTime =  actualMinutesInOven + TimePreparation
       return TotalTime
}
