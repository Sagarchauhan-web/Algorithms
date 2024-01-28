# In N2 Time complexity

def two_sum_function(nums, target):
    for p in range(len(nums)):
        number_to_find = target - nums[p]
        for j in range(p + 1, len(nums)):
            if nums[j] == number_to_find:
                return [p, j]

    return None

def two_sum_using_hashmap_function(nums, target):
    new_map = {}

    for p in range(len(nums)):
        value_in_map = new_map.get(nums[p], -1)

        if value_in_map >= 0:
            return [value_in_map, p]
        else:
            number_to_find = target - nums[p]
            new_map[number_to_find] = p

    return None


print(two_sum_function([2, 3, 9, 1, 6], 11));
print(two_sum_using_hashmap_function([2, 3, 9, 1, 6], 11));
