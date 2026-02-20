def reverse(text:str):
    NewString = ""
    length = text.__len__() - 1
    while length >=1 or length == 0:
        NewString += text[length]
        if (length == 0): break
        length -= 1
    return NewString  