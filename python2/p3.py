#Reverse words in a given String in Python
string = "yuvraj singh chouhan"
p =string.split(" ")
print(string)
for i in p:
    print(i[: :-1],end =" ")

