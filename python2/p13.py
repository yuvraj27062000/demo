# d ={'n': 10,'a':20,'m':30,'e':40}
# c=0
# for i in d.values():
#     c=c+i
# print(c)

# Python code to demonstrate a dictionary
# with multiple inputs in a key.
import random as rn

# creating an empty dictionary
dict = {}

# Insert first triplet in dictionary
x, y, z = 10, 20, 30
dict[x, y, z] = x + y - z

# Insert second triplet in dictionary
x, y, z = 5, 2, 4
dict[x, y, z] = x + y - z

# print the dictionary
print(dict)
