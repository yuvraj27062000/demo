num = int(input("please give a number : "))
def sum(num):
    if num == 0:
        return 0
    return (num % 10 + sum( int(num//10)))
print(sum(num))