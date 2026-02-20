
export function  cookingStatus(time){
    if (time == 0) return 'Lasagna is done.'
    if (time > 0 ) return 'Not done, please wait.'
    return 'You forgot to set the timer.'
}


export function preparationTime(layers, timeMiddle){
    let totalLenght = layers.length
    let re = 0

    if (timeMiddle === undefined){
        timeMiddle = 2
        re =  totalLenght * timeMiddle
        return re
    }

   else { 
          re =  totalLenght * timeMiddle
         return re
      }
    return re
}


export function quantities(ingredinsts){
    const quanty = {
        "noodles": 0,
        "sauce": 0
    }
    ingredinsts.forEach(element => {
        if (element === "noodles" ) quanty["noodles"] += 50
        if (element === "sauce") quanty["sauce"] += 0.2
    });
    return quanty
}

export function addSecretIngredient(friendsList, myList){
   let getLen = friendsList.length
    myList.push(friendsList[getLen - 1])

}


export function scaleRecipe(obj, num){
  let copy = {...obj}
    for (const key in  copy) {
        const keyob = key
      // PorcionesACocinarToal   =  MaxPorcionDeDos / 2 * cantidadDePorcion 
         copy[keyob] =  (copy[keyob] / 2) * num
    }
    return copy
}



