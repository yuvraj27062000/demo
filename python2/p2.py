#Python program to check whether the string is Symmetrical or Palindrome

string = 'khokho'
len = len(string)//2
rev = string[: :-1]
if string == rev:
    print('its palindrome')
else: 
    print('its not palindrome')

p=(string[:3]==string[3:])
if p==True:
    print("its symmetric")
else:
    print("its mot symmetric")