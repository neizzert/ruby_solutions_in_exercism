"""def reverse(text:str):
    NewString = ""
    length = text.__len__() - 1
    while length >=1 or length == 0:
        NewString += text[length]
        if (length == 0): break
        length -= 1
    return NewString  
"""

# second version 
def reverse (cadena):
    mitad = len(cadena) // 2
    mid = cadena[mitad:]
    mid2 = cadena[:mitad]
    return mid[::-1] + mid2[::-1]