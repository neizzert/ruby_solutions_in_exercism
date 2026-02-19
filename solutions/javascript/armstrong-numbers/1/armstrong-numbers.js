
export  const isArmstrongNumber = (number) => {
    let baseString = String(number)
    let totalDigits = baseString.length
    let substrings = baseString.split("", totalDigits)
    let result = 0
    
    substrings.forEach(element => {
        let become = Number(element)
        result += become ** totalDigits
    });

    if (Number(baseString) === result) return true
    
    return false

};
