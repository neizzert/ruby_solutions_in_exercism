
export const isLeap = (num) => {
    let leap = false
    if (num % 100 != 0 && num % 400 == 0) leap = true 
    else if (num % 100 == 0 && num % 400 != 0) leap = false   
    else if (num % 4 == 0) leap = true
    return leap

};



















