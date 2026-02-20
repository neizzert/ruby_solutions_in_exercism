// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */

export function getItem(list, position){
       return list[position]
}


export function setItem(list, position, replacementCard){
       list[position] = replacementCard
       return list
}

/**

 
/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(list, newCard){
       list.push(newCard)
       return list
}


/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */

       
export function removeItem(list, position){ 
       list.splice(position, 1) 
       return list
     
}


/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(list){
       list.pop()
       return list

}

export function insertItemAtBottom(list, newCard){
         list.unshift(newCard)
         return list
}


/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */

export function removeItemAtBottom(list){
       list.shift()
       return list
}


 
export function checkSizeOfStack(list, stackSize){
       const getLength = list.length
       if (getLength === stackSize) return true
       else return false
}
