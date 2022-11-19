#Python program to find second largest number in a list
l=[]

for i in range(5):
    l.append(int(input()))
print(type(l))
l.sort()
print(l[1])
