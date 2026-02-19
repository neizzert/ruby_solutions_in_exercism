export const score = (word) => {
    let sum = 0
    for (const element of word) {
        if (
            (element == "A" || element == "a") ||
            (element == "E" || element == "e") ||
            (element == "I" || element == "i") ||
            (element == "O" || element == "o") ||
            (element == "U" || element == "u") ||
            (element == "L" || element == "l") ||
            (element == "N" || element == "n") ||
            (element == "R" || element == "r") ||
            (element == "S" || element == "s") ||
            (element == "T" || element == "t")
        ) {
            sum += 1
        }
        else if ( 
            (element == "D" || element == "d") ||
            (element == "G" || element == "g") 
        ){
          sum += 2
        }

        else if ( 
            (element == "D" || element == "d") ||
            (element == "G" || element == "g") 
        ){
          sum += 2
        }

        else if ( 
            (element == "B" || element == "b") ||
            (element == "C" || element == "c") ||
            (element == "M" || element == "m") ||
            (element == "P" || element == "p") 

        ){
          sum += 3
        }

        else if ( 
            (element == "F" || element == "f") ||
            (element == "H" || element == "h") ||
            (element == "V" || element == "v") ||
            (element == "W" || element == "w") ||
            (element == "Y" || element == "y") 

        ){
          sum += 4
        }

        else if ( 
            (element == "J" || element == "j") ||
            (element == "X" || element == "x") 
        ){
          sum += 8
        }
        else if ( 
            (element == "Q" || element == "q") ||
            (element == "Z" || element == "z") 
        ){
          sum += 10
        }   
        else{
            sum += 5
        }
    }
    return sum
};

