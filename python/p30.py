#Python program to find N largest elements from a list
l =[]
a=[]
for i in range(5):
    l.append(int(input()))
num = int(input("=> "))
for i in l[:]:
    if num<i:
        a.append(i)
print(a)