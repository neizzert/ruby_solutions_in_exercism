
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function reportOverheating(temperature){
    const argumnetError = new ArgumentError("Throws an ArgumentError")
    const overHeatingError = new OverheatingError(temperature)

    if (!temperature) throw argumnetError
    if (temperature > 500) throw overHeatingError
}




export function checkHumidityLevel(Percentage) {
    if (Percentage > 70) throw new Error("Throws an error");
    return 
}




export function monitorTheMachine({
    check,
    alertDeadSensor,
    alertOverheating,
    shutdown,}){
    
    // en revisión
    try { 
       check()
    } catch (error) {
        if (error instanceof ArgumentError){
          alertDeadSensor()
          return
        } 
        if (error instanceof OverheatingError) {
            if (error.temperature < 600){
                alertOverheating()
                return
            }
            else{
               shutdown()
               return
            }
        }
       else{
           throw error
       }
   }
}









