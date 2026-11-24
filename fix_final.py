with open('app/components/Projects.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

line = lines[118]
# Replace double quote (chr(34)) with & q u o t ; (without spaces)
line = line.replace(chr(34) + 'In Progress' + chr(34), '"In Progress"')
lines[118] = line

with open('app/components/Projects.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Fixed')