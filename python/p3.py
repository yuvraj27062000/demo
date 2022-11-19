# prime number

i,temp=0,0
n = int(input("please give a number : "))
for i in range(2,n):
    if n%i == 0:
        temp=n
        break
if temp == n:
    print(n," number is not prime")
else:
    print(n," number is prime") 