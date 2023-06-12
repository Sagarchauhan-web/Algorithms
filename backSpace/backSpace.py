# Brute Force Method

def buildString(string):
    finalString = []
    for i in range(len(string)):
        if(string[i] != '#'):
            finalString.append(string[i])
        else:
            finalString.pop()
        
    return finalString

def compareString(S, T):
    firstString = buildString(S)
    secondString = buildString(T)

    if(len(firstString) != len(secondString)):
        return False
    else:
        for i in range(len(firstString)):
            if(firstString[i] != secondString[i]):
                return False
    
    return True

print(compareString('ab##s','ab#s'))