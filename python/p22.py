#Python program to swap two elements in a list
list1 = [22,44,3,5,7,5,3]
p1 = int(input(" => "))
p2 = int(input(" => "))
print(list1)
list1[p1],list1[p2]=list1[p2],list1[p1]
print(list1)