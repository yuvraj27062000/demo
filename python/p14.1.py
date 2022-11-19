#Python Program for Sum of squares of first n natural numbers

num = int(input("enter a number=>"))
sum=0
for i in range(1,num+1):
    squ= i*i
    sum =sum+squ
print(sum)