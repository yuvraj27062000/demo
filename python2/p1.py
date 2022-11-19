# Python | Ways to find length of list
# Maximum of two numbers in Python

# list1 = input("==>").split(",")
# print(len(list1))

list1 = [4,3,5,2,6]
p = list1[0]

for i in list1[1:]:
    if p<i:
        p=i
print(p)

print(max(list1))
print(min(list1))