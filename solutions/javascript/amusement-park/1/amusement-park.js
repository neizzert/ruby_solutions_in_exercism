export function createVisitor(value1,value2, value3){
    return {"name": value1, "age": value2, "ticketId": value3}
}


export function revokeTicket(object){
    object.ticketId = null
    return object
   }

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export  function  ticketStatus(object, code){
      if (object[code] === undefined) return "unknown ticket id"  
    
    if (object[code] === null) return "not sold"
    else  return "sold to" + " " + object[code]
    
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(object, code) {
     if (object[code] === null || object[code] === undefined) return "invalid ticket !!!"
        return object[code]
}



export function gtcVersion(object) {
      if (object.gtc) return object.gtc.version
    return undefined
}
