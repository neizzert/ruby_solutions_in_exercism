
def add_prefix_un(word):
    return "un" + word
    
def make_word_groups(ListoWords:list):
    prefix = ListoWords[0]
    WordsWithPrefix = [ prefix + word  for word in ListoWords[1:]]
    return prefix  + " "+ "::" +  " " + " :: ".join(WordsWithPrefix)

def remove_suffix_ness(word):
    Strings  = word.split("ness")
    newString = Strings[0]
    lastLetter = newString[-1]
    
    if lastLetter == "i":
        GenerateWord = newString[:-1]
        return GenerateWord + "y"
    
    return newString

def adjective_to_verb(sentence, index):
    sub =   sentence.split(".")[0]
    return sub.split(" ")[index] + "en"
