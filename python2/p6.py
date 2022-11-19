#Python program to print even length words in a string
s= "yuvrajsingh"
for i in range(len(s)):
    if i%2==0:
        print("".join(s[i]),end="")
print(" ".join([s[i] for i in range(len(s)) if i%2==0]))
# print( ''.join([s[i] for i in range(len(s)) if i !=p  ]))