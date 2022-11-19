#Python | Ways to check if element exists in list
l = [4,2,6,3,5,2,5]
i=int(input())
if i in l:
    print("True")


print('True' if i in l else 'False')

p = 'True' if i in l else 'False'
print(p)


# Python program to demonstrate nested ternary operator
a, b = 10, 20
print ("Both a and b are equal" if a == b else "a is greater than b"
        if a > b else "b is greater than a")