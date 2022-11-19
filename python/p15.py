#Avetage 
def avg(l):
    p =len(l)
    print(p ,l)
    count=0
    for i in l:
        count = count+i
    print("%0.2f" % (count/p))
    print("hii")

p= [1,2,3,4,5]

print(p)
avg(p)