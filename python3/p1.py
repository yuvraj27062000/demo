# # Assigning Subsequent Rows to Matrix first row elements

# Input : test_list = [[5, 8, 10], [2, 0, 9], [5, 4, 2], [2, 3, 9]]
# Output : {5: [2, 0, 9], 8: [5, 4, 2], 10: [2, 3, 9]}

l = [[5, 8, 10], [2, 0, 9], [5, 4, 2], [2, 3, 9]]
d = {}
# for ind i in enumerate(l[0]):
for ind,i in enumerate(l[0],1):
    d[i]=l[ind]
print(d)

for i in range(100):
    p=0
    for j in range(2,i//2+1):
        if i%j==0:
            p=1
            break
    if p ==1:
        print(i)
           
