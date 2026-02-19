
def capitalize_title(title):
    substrings = title.split()
    new_strings = [ word.capitalize() for word  in substrings ]
    return " ".join(new_strings)         
    
def check_sentence_ending(sentence):
    return sentence.endswith(".")

def clean_up_spacing(sentence):
    return sentence.strip(" ")
    
def replace_word_choice(sentence, old, new):
    return sentence.replace(old, new)
