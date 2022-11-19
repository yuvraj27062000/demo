#  find number is  palindrom or not 

num = list(input("enter any number"))
r=[]
for i in num:
    r.append(i) 
r.reverse()
if r == num :
    print("its palindrom number") 
else:
    print("its not a palindrom number")
