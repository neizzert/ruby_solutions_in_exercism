
export const steps = (n) => {
     let step = 0
     
     if (n <= 0) throw new Error("Only positive numbers are allowed") 

     while (n > 1){
        if (n % 2 == 0){
          n /= 2
          step += 1      
         }
        else  {
          n = (n * 3) + 1
           step += 1    
        }
     }       
     return step  
};