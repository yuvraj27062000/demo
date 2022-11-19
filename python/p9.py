#  check given number representation is in binary or not

num = int(input("enter a number==>"))
binary=0
while num>0:
	rev = num%10
	num = num//10
	if rev==0 or rev==1:
		binary=1
	else:
		break
	
if  binary == 1:
	print("its binary numbers")
else:
	print("its not binary number")