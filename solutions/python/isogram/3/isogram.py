def is_isogram(s):
    letters = []
    NewString = ""
    if not s: return True
    
    for l in s:
        if l == "-" or l == "_": continue
        elif l == " ": NewString += " "
        NewString += l
     
    for letter in NewString[0:]:
        if letter.upper() in letters:
            return False
        if letter == " ": continue
        else:
            letters.append(letter.upper())
    return True



