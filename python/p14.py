if __name__ == '__main__':
    n = int(input().strip())
    if 1<=n<=100:
        if n%2!=0:
            print("Weird")
        else:
            if n<=5 and n%2==0:
                print("Not Weird")
        if n<=20 and n>=6:
            if n%2==0:
                print('Weird')
        if n>=20 and n%2==0:
            print("Not Weird")
                    