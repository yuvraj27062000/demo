# # x, y = map(int, input().split(","))
# # print(x,y)
# # Input : test_list = [1, 3, 4, 4, 2, 3]
# # Output : [[1], [2], [3, 3], [4, 4]]

# l = [1, 3, 4, 4, 2, 3]
# for i in l:

#     print(l)

# Python3 code to demonstrate working of
# Group similar elements into Matrix
# Using list comprehension + Counter()
from collections import Counter

# initializing list
test_list = [1, 3, 5, 1, 3, 2, 5, 4, 2]

# printing original list
print("The original list : " ,(test_list))
print(type(test_list))
# Group similar elements into Matrix
# Using list comprehension + Counter()
temp = Counter(test_list)
print(temp)
res = [[key] * val for key, val in temp.items()]

# printing result
print("Matrix after grouping : " + str(res))
for key, val in temp.items():
    print([key] * val)