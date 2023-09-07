def ProcessData():
    q = int(input())
    stackpush = []
    stackdelete = []

    for i in range(q):
        t = list(input().split())
        if t[0]=="1":
            stackpush.append(t[1])
        elif t[0]=="2":
            if not stackdelete:
                while stackpush:
                    stackdelete.append(stackpush.pop())
            stackdelete.pop()
        elif t[0]=="3":
            if not stackdelete:
                while stackpush:
                    stackdelete.append(stackpush.pop())
            print(stackdelete[-1])