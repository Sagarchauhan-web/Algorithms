# Time O(m * n)
# Space O(n)

# https://leetcode.com/problems/group-anagrams/description/

from collections import defaultdict

class Solution(object):
    def groupAnagrams(self, strs):
        res = defaultdict(list) # mapping charCount to list of Anagrams

        for s in strs:
            count = [0] * 26

            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s)
        
        return res.values()

result = Solution()
print(result.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))