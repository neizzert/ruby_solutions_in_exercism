export function getFirstCard(deck){
    return deck[0]
}


  export  function getSecondCard(deck){
    deck.shift()
    return deck[0]
    
}





export function swapTopTwoCards(deck){
   let v1 = deck[0]
   let v2 = deck[1]
    
    deck[0] = v2
    deck[1] = v1
    return deck
}


/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */

    

   
export function discardTopCard(deck){
    let getFirstElement = deck.shift()
    let update = []
    update.push(getFirstElement)
    update.push(deck)
    return update
}



/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];


export function insertFaceCards(deck){
    let getElement = deck.shift()
    return [getElement, ...FACE_CARDS, ...deck]

}
