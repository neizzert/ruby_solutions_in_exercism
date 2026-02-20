export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

 export  const colorCode = (color) => {
    const colors = {
     "black": 0,
     "brown": 1,
     "red": 2,
     "orange": 3,
     "yellow": 4,
     "green": 5,
     "blue": 6,
     "violet": 7,
     "grey": 8,
     "white": 9,
  }
   
   return colors[color]
 };
 
export const decodedValue = (colors) => {
    let pairNumber = ""

    if (colors.length >= 3 || colors.length < 3){
        let colorOne = String(colorCode(colors[0]))
        let colorTwo = String(colorCode(colors[1]))
        
        pairNumber = colorOne + colorTwo
        return Number(pairNumber)
    }
};