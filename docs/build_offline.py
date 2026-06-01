#!/usr/bin/env python3
"""Build a self-contained offline HTML: all CSS/JS/data inlined"""
import json, os, sys

SRC = '/Users/joezou/文档/任务/家教项目/docs'
OUT = os.path.join(SRC, '穗学伴_离线版.html')

# Read all source files
with open(os.path.join(SRC, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

with open(os.path.join(SRC, 'css/theme.css'), 'r', encoding='utf-8') as f:
    css_theme = f.read()

with open(os.path.join(SRC, 'css/layout.css'), 'r', encoding='utf-8') as f:
    css_layout = f.read()

with open(os.path.join(SRC, 'css/components.css'), 'r', encoding='utf-8') as f:
    css_components = f.read()

# JS files in order
js_files = ['router.js', 'store.js', 'guide-data.js', 'voice.js', 'quiz-engine.js', 'app.js']
js_content = {}
for jsf in js_files:
    with open(os.path.join(SRC, 'js', jsf), 'r', encoding='utf-8') as f:
        js_content[jsf] = f.read()

# Question bank data
with open(os.path.join(SRC, 'data/三年级下册_题库.json'), 'r', encoding='utf-8') as f:
    qdata = f.read()

# Read icons as base64
import base64
def img_b64(path):
    with open(path, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

icon_180 = img_b64(os.path.join(SRC, 'assets/icons/icon-180.png'))
icon_512 = img_b64(os.path.join(SRC, 'assets/icons/icon-512.png'))

# Build self-contained HTML
# 1. Remove external CSS/JS links, replace with inline
# 2. Inject question data into JS scope
# 3. Replace icon references

# Remove manifest, sw, and external resource links
lines = html.split('\n')
new_lines = []
skip_manifest = False
for line in lines:
    # Remove external CSS links
    if '<link rel="stylesheet"' in line and 'href=' in line:
        continue
    # Remove manifest
    if 'manifest.json' in line:
        continue
    # Remove external JS script tags (but keep the src="js/app.js" as marker)
    if '<script src=' in line and 'sw.js' not in line:
        if 'app.js' in line:
            new_lines.append('<!-- JS inlined below -->')
        continue
    # Remove service worker registration
    if 'serviceWorker.register' in line or 'sw.js' in line:
        continue
    # Replace icon refs with base64
    if 'icon-180.png' in line:
        line = line.replace('assets/icons/icon-180.png', icon_180)
    if 'icon-512.png' in line:
        line = line.replace('assets/icons/icon-512.png', icon_512)
    new_lines.append(line)

# Now rebuild with inline CSS and JS
head_end = None
body_end = None
for i, line in enumerate(new_lines):
    if '</head>' in line:
        head_end = i
    if '</body>' in line:
        body_end = i

# Insert CSS before </head>
css_block = f'<style>\n{css_theme}\n{css_layout}\n{css_components}\n</style>'
new_lines.insert(head_end, css_block)

# Insert JS before </body>
js_block = f'<script>\n// ====== 题库数据（内嵌）======\nconst QUESTION_BANK = {qdata};\n\n'
for name in ['router.js', 'store.js', 'guide-data.js', 'voice.js', 'quiz-engine.js']:
    js_block += f'// ====== {name} ======\n{js_content[name]}\n\n'

# Modify app.js: replace fetch with inline data
app_js = js_content['app.js']
# Replace the fetch block in init()
app_js = app_js.replace(
    "fetch('data/三年级下册_题库.json')",
    "// 内嵌数据，无需 fetch\nPromise.resolve({ json: () => QUESTION_BANK })"
)
# Fix the .then chain - since we don't have a Response object
app_js = app_js.replace(
    ".then(r => r.json())",
    ""
)

js_block += f'// ====== app.js ======\n{app_js}\n</script>'

new_lines.insert(body_end + 1, js_block)

output = '\n'.join(new_lines)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(output)

size_kb = len(output.encode('utf-8')) / 1024
print(f'✅ 生成成功: {OUT}')
print(f'   文件大小: {size_kb:.0f} KB')
print(f'   行数: {len(output.splitlines())}')
