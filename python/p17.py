#Python Program to find largest element in an array

list = [5,4,2,7,8,5,3,5,7]

p = c = list[0]
for i in list[1: :]:
    if i>p:
        p = i
    elif i<c:
          c =i 
print(p,c)
