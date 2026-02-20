def get_rounds(r):
    return [r, r + 1, r + 2]

def concatenate_rounds(rouneds_1, rouneds_2):
    return rouneds_1 + rouneds_2

def list_contains_round(rounds, search_round):
    return True if search_round in rounds else False

def card_average(elements):
    return sum(elements) / elements.__len__() 


def approx_average_is_average(hand):
    singleNumber = 0
    prom_total = 0
    prom = 0
    
    if (hand[0] == 0):
        del hand[0]
        singleNumber = hand[-1]
        prom_total = sum(hand) /  hand.__len__()
        return True if singleNumber == prom_total else False
       
    prom = (hand[0] + hand[-1]) //  2
    prom_total = sum(hand) /  hand.__len__()
    return True if prom == prom_total else False

  
def average_even_is_average_odd(elements):
    odd = 0
    con = 0
    count_add = 0
    count_con = 0
    
    for value in elements:
        if (value % 2 == 0):
            odd += value
            count_add += 1
        else:
            con += value
            count_con += 1
   
    if (count_add == 0 or count_con == 0):
        return True
    
    prom_add = odd / count_add
    prom_con = con / count_con
    
    return True if prom_add == prom_con else False         
     


def maybe_double_last(hand):
    if (hand[-1] == 11):
        hand[-1] += hand[-1]
    
    return hand