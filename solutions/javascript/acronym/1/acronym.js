export const parse = (sentence) => {
    const strings = sentence.split(" ")
    const words = []
    const results = [] 
    let Acronym = ""

    for (let index = 0; index < strings.length; index++) {
        let findGui = strings[index].indexOf("-") != -1 ? true : false
        let findGuiB = strings[index].indexOf("_") != -1 ? true : false
        let findGuicoma = strings[index].indexOf(",") != -1 ? true : false
    
        if (findGui){
            let tem1 = strings[index].split("-")
            tem1.forEach(word1 =>{
                words.push(word1)
            })
            console.log("gui")
            continue
        }
    
       else if (findGuiB){
            let tem2 = strings[index].split("_")
            tem2.forEach(word2 =>{
                words.push(word2)
            })
            continue
        }
        
       else  if (findGuicoma){
            let tem3 = strings[index].split(",")
            tem3.forEach(word3 =>{
                words.push(word3)
            })
            continue
        }
        
        else words.push(strings[index])   
    }

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if (element == ""){
            continue
        }
        results.push(element)
    }
    
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        Acronym += element[0]
    } 
    return Acronym.toLocaleUpperCase()
};