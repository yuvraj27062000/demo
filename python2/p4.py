string="yuvrajji"
print(string)
p=int(input("=>"))
print( ''.join([string[i] for i in range(len(string)) if i !=p  ]))
