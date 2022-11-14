names = ["Aravind", "Marck", "Amritha", "Rejani", "Steve", "Jim", "Dustin","Luke","amrithan"]
names2 = []

alphabets = "abcdefghijklmnopqrstuvwxyz"

def find(array,element):
    count = 0
    for i in array:
        if i.lower()==element.lower():
            return count 
        count += 1 
    return -1



length = len(names)

while length!=len(names2):
    small = names[0]
    for name in names:
        for letter in range(len(name)):  
            if len(small) > letter:
                if find(alphabets,name[letter]) < find(alphabets,small[letter]):
                    small = name
                    break
                elif find(alphabets,name[letter]) == find(alphabets,small[letter]):
                    continue
                else: 
                    break
    names.remove(small)
    names2.append(small)

print(names2)