import math
num = int(input("enter a number=>"))
while num%2==0:
    print("2")
    num = num/2
d = num

for i in range(3,d+1,2):
    print(i)
    print(int(math.sqrt(113))+1)
    while num%i==0:
        print(i)
        num = num/i