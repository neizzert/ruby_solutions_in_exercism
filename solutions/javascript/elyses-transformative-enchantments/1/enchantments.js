export const seeingDouble =  (deck) => {
     return deck.map((x) => x + x)
}

export function threeOfEachThree(deck) {
     let Update = []
    if (deck.length == 0) return []

    for (let index = 0; index < deck.length; index++) {
        const element = deck[index];
        if (element == 3)  for (let value = 0; value < 2; value++) Update.push(element)   
        Update.push(element)
    }
    return  Update
}

export function middleTwo(deck) {
            return deck.splice(4, 2)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {nuber[]} transformed deck
 */

export function sandwichTrick(deck) {
   let getindex = deck[0]
    let len = deck.length
    let getIndex2 = deck[len - 1]
    
    
    if (len === 10 ){
        let res = deck.splice(1, getIndex2 + 1)
        res.splice(4, 0, getIndex2)
        res.splice(5, 0, getindex)
        return res
    }
  
    else if (len === 6){
        let res = deck.splice(1 , 4)
        res.splice(2, 0, getIndex2)
        res.splice(3, 0, getindex)
        return res
    }
    
    deck[0] = getIndex2
    deck[1] = getindex
    return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */


export function twoIsSpecial(deck) {
    return deck.filter((x) => x == 2);
}


/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
   return deck.sort((a, b) => a - b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
       return deck.reverse()
  
}
