with open('app/components/Projects.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# The original line has literal double quotes - replace with "
old_text = 'Projects marked "In Progress" are actively being developed &mdash; check GitHub for updates.'
new_text = 'Projects marked "In Progress" are actively being developed &mdash; check GitHub for updates.'

content = content.replace(old_text, new_text)

with open('app/components/Projects.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed')