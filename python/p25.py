#Different ways to clear a list in Python
l =[1,2,3,4,5]

print(l)

l.clear()
print(l)

l =[1,2,3,4,5]
print(l)

del l[:]
print(l)

l =[1,2,3,4,5]
print(l)
for p in l[ : ]:
    l.pop()
print(l)