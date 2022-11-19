
# # Enter the number of rows:2
# # Enter the number of columns:3
# # Enter the entries rowwise:
# # 1
# # 2
# # 3
# # 4
# # 5
# # 6
# 3
# # 1 2 3 
# # 4 5 6 

# r = int(input("enter a row count=>"))
# c = int(input("enter a column count=>"))
# # for i in range(r):
# #     for j in range(c):
# #         print(j)

# mat = [[int(input()) for x in range (c)] for y in range(r)]
# print(mat)










# A basic code for matrix input from user
  
r = int(input("Enter the number of rows:"))
c = int(input("Enter the number of columns:"))
m1=[]
for i in range(r):
    m=[]
    for j in range(c):
        m.append(int(input("=>")))
    m1.append(m)
print(m1)
for i in range(r):
    for j in range(c):
        print(m1[i][j],end=" ")
    print()


