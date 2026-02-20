


export  const reverseString = (string) => {
    const subStrings = string.split("", string.length )
    let re = ""

    subStrings.reverse().forEach(element => {
        re += element        
    });

    return re
};
