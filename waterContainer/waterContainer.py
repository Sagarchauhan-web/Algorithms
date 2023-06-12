# brute force method

def getWaterContainerMaxArea(heights):
    maxArea = 0;
    for p1 in range(len(heights)):
        for p2 in range(p1 + 1, len(heights)):
            height = min(heights[p1], heights[p2])
            width = p2 - p1
            area = height * width

            if(area > maxArea):
                maxArea = area
    
    return maxArea


# result = getWaterContainerMaxArea([7, 1, 2, 3, 9])
# print(result)

# Optimal method
def gatWaterContainerMaxAreaOptimal(heights):
    p1=0
    p2=len(heights) - 1
    maxArea = 0

    while(p1<p2):
        height = min(heights[p1],heights[p2])
        width = p2-p1;
        area = height * width

        if(area > maxArea):
            maxArea = area

        if (p1<=p2):
            p1 += 1
        else:
            p2 -= 1
    
    return maxArea

result = gatWaterContainerMaxAreaOptimal([10, 1, 28, 3, 9])
print(result)
