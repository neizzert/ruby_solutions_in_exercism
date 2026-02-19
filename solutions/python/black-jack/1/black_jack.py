
def value_of_card(card):
    if card == "J" or card == "Q" or card == "K":  return 10
    elif (card == "A"): return 1
    else: return int(card)

def higher_card(value_one, value_two):
    if value_of_card(value_one) > value_of_card(value_two):
        return str(value_one)
    elif value_of_card(value_one) == value_of_card(value_two):
        return (value_one, value_two)
    else:
        return str(value_two)
    
    
def value_of_ace(value, value2):
    if (value_of_card(value) + value_of_card(value2)) * 2  > 21:
        return 1
    elif (value == "A" or value2 == "A" ):
        return 1
    else:
        return  11



def is_blackjack(card_one, card_two):
    if card_one ==  "A" and card_two == "A":
        return False
    elif (card_one == "A" or card_two == "A"):
        return True
    else:
        return False

def can_split_pairs(card_one, card_two):
    if value_of_card(card_one) == value_of_card(card_two):
        return True
    else:
        return False    

def can_double_down(card_one, card_two):
    result = value_of_card(card_one) + value_of_card(card_two)
    if (result == 9 or result == 10 or result == 11): return True
    return False
