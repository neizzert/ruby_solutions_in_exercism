def is_isogram(s):
    letters = []
    NewString = ""
    if not s: return True
    
    for l in s:
        if l == "-" or l == "_": continue
        elif l == " ": continue 
        NewString += l
     
    for letter in NewString[0:]:
        if letter.upper() in letters:
            return False
        else:
            letters.append(letter.upper())
    return True