# #Python – Row-wise element Addition in Tuple Matrix
# # Input :
# # test_list = [[(‘Gfg’, 3)], [(‘best’, 1)]]
# # cus_eles = [1, 2]
# # Output : [[(‘Gfg’, 3, 1)], [(‘best’, 1, 2)]]

# t = [[(1,2)],[(1,2)]]
# print(type(t))
# t1 =[3]
# for i in t:
#     for j in i:
#         y = list(j)
#         y.append(t1[0])
#         j=tuple(y)
#         print(t)

# Python3 code to demonstrate working of
# Row-wise element Addition in Tuple Matrix
# Using enumerate() + list comprehension

# initializing list
test_list = [[('Gfg', 3), ('is', 3)], [('best', 1)], [('for', 5), ('geeks', 1)]]

# printing original list
print("The original list is : " + str(test_list))

# initializing Custom eles
cus_eles = [6, 7,2]

# Row-wise element Addition in Tuple Matrix
# Using enumerate() + list comprehension
res = [[sub + (cus_eles[idx], ) for sub in val] for idx, val in enumerate(test_list)]

# printing result
print("The matrix after row elements addition : " + str(res))
