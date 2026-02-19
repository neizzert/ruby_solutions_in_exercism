def are_there_combinations_with_strings_and_numbers(sentence:str) -> bool:
    SubSubstrings = sentence.split() 
    for s in sentence:
        if s == " " or "_": return False 
    for sub in SubSubstrings:
        print(sub)
        if sub.isdigit() or sub.isalpha(): continue
        # en caso de tener un trozo mezclado de numeros con letter
        else: return True
        
    return False

def is_pangram(sentence:str):
    CountLetter = 0
    SaveLastLetters = []
        
    if sentence == "": return False
    if  are_there_combinations_with_strings_and_numbers(sentence): return False
    
    for letter in sentence:
        if letter.lower():
            if letter.lower() in SaveLastLetters: continue
            elif ((letter == "a" or letter == "A") or   (letter == "b" or letter == "B") or (letter == "c" or letter == "C") 
                    or (letter == "d" or letter == "D")  or   (letter == "e" or letter == "E") or (letter == "f" or letter == "F") 
                    or (letter == "g" or letter == "G") or (letter == "h" or letter == "H") or (letter == "i" or letter == "I") 
                    or (letter == "j" or letter == "J") or (letter == "k" or letter == "K") or (letter == "l" or letter == "L") 
                    or (letter == "n" or letter == "N") or (letter == "m" or letter == "M") or (letter == "o" or letter == "O") 
                    or (letter == "p" or letter == "P") or (letter == "q" or letter == "Q") or (letter == "r" or letter == "R") 
                    or (letter == "s" or letter == "S") or (letter == "t" or letter == "T") or (letter == "u" or letter == "U") 
                    or (letter == "w" or letter == "W") or (letter == "x" or letter == "X") or (letter == "y" or letter == "Y") 
                    or (letter == "z" or letter == "Z") or (letter == "v" or letter == "V")
                    ): 
                     SaveLastLetters.append(letter)
                     CountLetter += 1

    return True if CountLetter == 26 else False