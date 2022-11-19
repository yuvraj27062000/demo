num = 154
arm=num
a=0
while num>0:
    r = num % 10
    a = r**3+a
    num = num // 10
if a==arm:
    print("its armstrong number")
else:
    print("not ")