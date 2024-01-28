# Space O(s + t)
# Time O(s + t)
class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        
        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        
        for i in countS:
            if countS[i] != countT.get(i, 0):
                return False
        return True