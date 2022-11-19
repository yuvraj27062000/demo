import mysql.connector;

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = 'yuvi',
    database  = 'sample'
)

cursor = mydb.cursor()
# qry = "show databases"
# cursor.execute(" SHOW DATABASES")
# cursor.execute(" CREATE DATABASE sample")
# cursor.execute(" use demo")
# cursor.execute("CREATE TABLE showdata (name VARCHAR(232), age int, address VARCHAR(233))")
# cursor.execute("CREATE TABLE gfg (name VARCHAR(255), user_name VARCHAR(255))")
# cursor.execute("SHOW TABLES")
# cursor.execute("desc showdata")
# qry = "insert into showdata (name, age, address) VALUES(%s,%s,%s) "
# qry = "INSERT INTO showdata (age,address) VALUES(%s, %s)"
# val = ("indore 21",21)
# cursor.execute(qry,val)

cursor.execute("select * from showdata ")

# mydb.commit()
print(cursor)
print("Done")
for x in cursor:
  print(x)