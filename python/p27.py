#Python program to find sum of elements in list

l = [1,2,3,4,5,6,7,8]
count=even=0
for i in l:
    if i%2==0:
        even+=i
    else:
        for j in range(1,i):
            if i%j==0 and i%1==0:
                count+=i
print(count)

print(even)