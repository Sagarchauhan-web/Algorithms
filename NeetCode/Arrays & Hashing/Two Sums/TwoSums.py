# Time O(n)
# Space O(n)

# https://leetcode.com/problems/two-sum/description/

class Solution(object):
    def twoSum(self, nums, target):
        checkingHashmap = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in checkingHashmap:
                return [checkingHashmap[diff], i]
            checkingHashmap[n] = i
        return

result = Solution()
print(result.twoSum([2, 7, 11, 15], 9))