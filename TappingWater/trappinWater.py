array = [0,1,0,2,1,0,3,1,0,1,2]

def getTrapperWater(heigths):
    totalTrappedWater = 0

    for i in range(len(heigths)):
        LMax = 0
        RMax= 0
        RIndex = i
        LIndex = i

        while(LIndex > 0):
            LMax = max(heigths[LIndex], LMax)
            LIndex -= 1
        
        while(RIndex < len(heigths)):
            RMax = max(heigths[RIndex], RMax)
            RIndex += 1
        
        totalTrappedWater += min(LMax, RMax) - heigths[i]
    
    return totalTrappedWater

def optimalTrapperWater(heigths):
    totalTrappedWater = 0
    LIndex = 0
    RIndex = len(heigths)
    maxL = 0
    maxR = 0

    while (LIndex < RIndex):
        if(heigths[LIndex] > heigths[RIndex]):
            if(heigths[RIndex] > maxR):
                maxR = heigths[RIndex]
            else
                totalTrappedWater += maxR - heigths[RIndex]
            RIndex -= 1
        else
            if(heigths[LIndex] > maxL):
                maxL = heigths[LIndex]
            else
                totalTrappedWater += maxL - heigths[LIndex]
            LIndex += 1
        
    return totalTrappedWater




print(optimalTrapperWater(array))