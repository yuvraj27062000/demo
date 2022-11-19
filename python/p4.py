# fibonacci series
#   0,1,1,2,3,5,8,13,21,34,55,89,144
i,j=0,1
count=0
print(i)
while count<15:
    b = i+j
    j = i
    i = b
    count+=1

    print(b) 