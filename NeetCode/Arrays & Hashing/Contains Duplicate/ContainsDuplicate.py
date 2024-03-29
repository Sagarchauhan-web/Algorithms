# Time O(n)
# Space O(n)

# https://leetcode.com/problems/contains-duplicate/description/

class Solution:
    def containsDuplicate(self, nums):
        hashset = set()

        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False

result = Solution()
print(result.containsDuplicate([1,3,5,2]))
