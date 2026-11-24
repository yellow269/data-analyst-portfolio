with open('app/components/Projects.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 119 (0-indexed = 118)
# Replace the literal double quotes with "
line = lines[118]
line = line.replace('"In Progress"', '"In Progress"')
lines[118] = line

with open('app/components/Projects.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Fixed')