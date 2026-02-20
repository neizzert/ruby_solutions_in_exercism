
def is_isogram(string):
    NewString  = ""
    is_there_isograma = []
    temLetters = []
    
    if not string: return True
    
    for letter in string:
        if letter ==  "-" or  letter == "_":  continue
        elif  letter == " ":  NewString += " "
        else:  NewString += letter

    for substring in  NewString[0:]:
            if substring.upper() in temLetters: 
                is_there_isograma.append(False)
                continue 
            elif   ( 
                    substring.upper()  == "A" or  substring.upper() == "B" or substring.upper() == "C" 
                    or substring.upper() == "D"  or   substring.upper() == "E" or substring.upper()  == "F" 
                    or substring.upper()  == "G" or substring.upper()  == "H" or substring.upper()  == "I" 
                    or substring.upper()  == "J" or substring.upper()  == "K" or substring.upper()  == "L" 
                    or substring.upper()  == "N" or substring.upper()  == "M" or substring.upper()  == "O" 
                    or substring.upper()  == "P" or substring.upper()  == "Q" or substring.upper()  == "R" 
                    or substring.upper() ==  "S" or substring.upper() ==  "T" or substring.upper()  == "U" 
                    or substring.upper()  == "W" or substring.upper()  == "X" or substring.upper()  == "Y" 
                    or substring.upper()  == "Z" or substring.upper()  == "V"
                    ): 
                     temLetters.append(substring.upper())
                     is_there_isograma.append(True) 
    
                           
    for isograma in is_there_isograma:
        if not isograma: return False
    return True


















def is_isogram_new(string):
    NewString  = ""
    is_there_isograma = []
    temLetters = []
    
    if not string: return True
    
    for letter in string:
        if letter ==  "-" or  letter == "_":  continue
        elif  letter == " ":  NewString += " "
        else:  NewString += letter

    for substring in  NewString[0:]:
        temLetters.append(substring.upper())


    for letter in NewString[0:]:
        prev = letter
        if letter in temLetters:
            if letter == prev:
                print("letter repetida")
            else:
                print("no repetida")   


print(is_isogram_new("eleven"))
