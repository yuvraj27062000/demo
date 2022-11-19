#Python Program for Find reminder of array multiplication divided by n


arr = [4,3,6]
count=1
for i in arr[:]:
    count*=i
print(count// int(input()))