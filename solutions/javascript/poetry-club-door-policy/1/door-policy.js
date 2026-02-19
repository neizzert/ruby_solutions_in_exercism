// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */

export function frontDoorResponse(string){
       let GetLength = string.length
       let GetFirstPostion =  GetLength - GetLength
       let r = string.charAt(GetFirstPostion).toUpperCase()
       return r
} 


export function frontDoorPassword(string){
      let extractString  = string.substring(1).toLocaleLowerCase()
      let GetFirstLetter = frontDoorResponse(string)
    
      return  GetFirstLetter + extractString
}

export function backDoorResponse(string){   
      let removeSpace = string.trim()
      let getLength = removeSpace.length
      let getLastLetter = removeSpace.charAt(getLength - 1)
      return getLastLetter
}

export function backDoorPassword(string){
       let cap  = frontDoorPassword(string)
       return cap + ", please"
}
