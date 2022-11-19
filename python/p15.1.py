#Python Program for cube sum of first n natural numbers

num = int(input("enter a number=>"))
sum=0
for i in range(1,num+1):
    squ= i**3
    sum =sum+squ
print(sum)