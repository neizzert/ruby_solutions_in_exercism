
def is_valid(isbn):
    totalDigits = 0
    products = []
    ValidNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    new_string = ""
    
    if isbn.__len__() == 0: return False
    
    for s in isbn:
        if s in ValidNumbers or s == "X":
            new_string += s 
            continue
        elif s == "-":
            continue
        else:
            return False
    if "X"  in  new_string[:-1]:
        return False 
     
    if new_string.__len__() == 10:
        if new_string[-1] == "X":
          PreCompute = 10 * 1
          for number in  new_string :
              totalDigits +=1
          for v in new_string [:-1]:
               execute = int(v) * totalDigits
               totalDigits -= 1
               if totalDigits == 0: break
               products.append(execute)     
          products.append(PreCompute)
          
          if sum(products) % 11 == 0: return True
          
        else: 
            for number in new_string:
               totalDigits += 1
            for number in new_string:
                products.append(int(number) * totalDigits)
                totalDigits -= 1
            
            if sum(products) % 11 == 0: return True
       
    
    return False

print(is_valid("3-598-2X507-9"))