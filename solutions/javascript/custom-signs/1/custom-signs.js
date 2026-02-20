
export function buildSign(occasion, name){
    return `Happy ${occasion} ${name}!`

}

export function buildBirthdaySign(age){
        return  `${age >= 50 ?'Happy Birthday! What a mature fellow you are.' :"Happy Birthday! What a young fellow you are."}`
}


export function graduationFor(name, year){
   return   `Congratulations ${name}!\nClass of ${year}`
}

export function costOf(sign, currency) {
   let base = 20
 
   if (currency === "dollars"){
       for (let i = 0; i<sign.length; i++){
         base = base + 2
      }
      return `Your sign costs ${base}.00 dollars.`

   }
   else{
     for (let i = 0; i<sign.length; i++){
         base = base + 2
      }
      return `Your sign costs ${base}.00 euros.`
   }
}
 
