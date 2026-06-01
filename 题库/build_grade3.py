#!/usr/bin/env python3
"""三年级下册知识点图谱 + PDF 生成"""
import json, os

base = "/Users/joezou/文档/任务/家教项目/题库"
os.makedirs(base, exist_ok=True)

xia3_kg = {
    "grade": "三年级下册",
    "subject": "数学",
    "version": "人教版",
    "total_sections": 9,
    "sections": [
        {
            "id": 1, "title": "位置与方向（一）",
            "description": "认识东、南、西、北、东北、东南、西北、西南八个方向，能用这些词语描述物体所在的方向，会看简单的路线图",
            "subsections": [
                {"title":"认识四个基本方向","kps":["早晨太阳在东方，面向东方背对西方","左手指北、右手指南","东与西相对，北与南相对","能辨认实际生活中的东南西北"],"concepts":["东","南","西","北","相对"],"diff":"基础","weight":"高"},
                {"title":"认识东北、东南等方向","kps":["东北介于东和北之间","东南介于东和南之间","西北介于西和北之间","西南介于西和南之间","能用八个方向描述物体位置"],"concepts":["东北","东南","西北","西南"],"diff":"中等","weight":"高"},
                {"title":"看简单的路线图","kps":["能根据路线图描述行走路线","用先向再向的方式描述","能判断不同方向到达同一目标的不同路线"],"concepts":["路线图","方向描述"],"diff":"中等","weight":"中"}
            ]
        },
        {
            "id": 2, "title": "除数是一位数的除法",
            "description": "掌握除数是一位数的口算、估算和笔算方法，能正确计算并验算",
            "subsections": [
                {"title":"口算除法","kps":["整十、整百、整千数除以一位数的口算","几十几除以一位数（每位都能整除）","用乘法口诀辅助除法口算"],"concepts":["口算","除法"],"diff":"基础","weight":"高"},
                {"title":"笔算除法（首位能整除）","kps":["从被除数的高位除起","除到哪一位商就写在那一位上面","余数必须小于除数","验算：商乘除数等于被除数"],"concepts":["笔算","高位除起"],"diff":"中等","weight":"高"},
                {"title":"笔算除法（首位不能整除）","kps":["被除数前一位不够除，看前两位","商中间或末尾有0的除法","0除以任何不是0的数都得0","验算：商乘除数加余数等于被除数"],"concepts":["进位","商0"],"diff":"中等","weight":"高"},
                {"title":"估算","kps":["把被除数看作整十整百数再除","估算与精算结合判断商的范围","用估算验证结果是否合理"],"concepts":["估算","取值"],"diff":"中等","weight":"中"}
            ]
        },
        {
            "id": 3, "title": "复式统计表",
            "description": "认识复式统计表，能对数据进行收集、整理和分析",
            "subsections": [
                {"title":"复式统计表的认识","kps":["复式统计表是把几个单式统计表合并在一个表里","表头包含横栏和纵栏","能看懂复式统计表的数据含义"],"concepts":["复式统计表","表头"],"diff":"基础","weight":"高"},
                {"title":"数据的收集与分析","kps":["从复式统计表中获取信息","能比较和分析两组数据","根据数据提出问题并解答"],"concepts":["数据分析","比较"],"diff":"中等","weight":"中"}
            ]
        },
        {
            "id": 4, "title": "两位数乘两位数",
            "description": "掌握两位数乘两位数的口算、估算和笔算方法",
            "subsections": [
                {"title":"口算乘法","kps":["整十整百数乘整十数的口算","两位数乘整十数的口算","先用0前面的数相乘，再在积的末尾添相应个数的0"],"concepts":["口算","整十数"],"diff":"基础","weight":"高"},
                {"title":"笔算乘法（不进位）","kps":["先用第二个因数个位上的数乘第一个因数","再用第二个因数十位上的数乘第一个因数","把两个积相加","相同数位要对齐"],"concepts":["笔算","不进位"],"diff":"中等","weight":"高"},
                {"title":"笔算乘法（进位）","kps":["哪一位上乘得的积满几十就向前一位进几","进位的数要加在下一位上","能正确计算两位数乘两位数","验算：交换两个因数的位置再乘"],"concepts":["进位","验算"],"diff":"中等","weight":"高"},
                {"title":"解决问题","kps":["用连乘解决实际问题（如先算一箱再算几箱）","用乘除两步计算解决实际问题","能找出题目中的隐含条件"],"concepts":["连乘","两步计算"],"diff":"提高","weight":"高"}
            ]
        },
        {
            "id": 5, "title": "面积",
            "description": "理解面积的含义，认识面积单位，掌握长方形和正方形面积公式",
            "subsections": [
                {"title":"面积和面积单位","kps":["物体表面或封闭图形的大小叫面积","常用面积单位：平方厘米、平方分米、平方米","1平方厘米约等于大拇指指甲盖大小","1平方分米约等于手掌大小"],"concepts":["面积","平方厘米","平方分米","平方米"],"diff":"基础","weight":"高"},
                {"title":"长方形正方形面积计算","kps":["长方形面积等于长乘宽","正方形面积等于边长乘边长","已知面积求长宽或边长","面积公式的灵活应用"],"concepts":["长方形面积","正方形面积"],"diff":"中等","weight":"高"},
                {"title":"面积单位间的进率","kps":["1平方分米等于100平方厘米","1平方米等于100平方分米","相邻面积单位间进率是100","单位换算方法：大化小小化大"],"concepts":["进率","单位换算"],"diff":"中等","weight":"高"},
                {"title":"解决问题（铺地砖问题）","kps":["用面积知识解决铺地砖问题","比较面积和周长的不同","求不规则图形的面积（割补法）"],"concepts":["铺地砖","割补"],"diff":"提高","weight":"中"}
            ]
        },
        {
            "id": 6, "title": "年、月、日",
            "description": "认识年月日的时间单位关系，了解平年闰年，掌握24时计时法",
            "subsections": [
                {"title":"年月日的认识","kps":["一年有12个月","大月（31天）：1、3、5、7、8、10、12月","小月（30天）：4、6、9、11月","二月平年28天闰年29天","利用拳头记忆法或歌诀记忆大小月"],"concepts":["大月","小月","二月"],"diff":"基础","weight":"高"},
                {"title":"平年和闰年","kps":["公历年份是4的倍数通常是闰年","整百年必须是400的倍数","平年365天闰年366天","能判断某一年是平年还是闰年"],"concepts":["平年","闰年","4的倍数"],"diff":"中等","weight":"高"},
                {"title":"24时计时法","kps":["1日等于24小时","普通计时法转24时计时法（下午加12）","24时计时法转普通计时法（减12加时间词）","用24时计时法计算经过时间"],"concepts":["24时计时法","经过时间"],"diff":"中等","weight":"高"},
                {"title":"制作活动日历","kps":["用不同正方体表示月日星期","能设计并制作一个简易活动日历"],"concepts":["日历制作"],"diff":"提高","weight":"低"}
            ]
        },
        {
            "id": 7, "title": "小数的初步认识",
            "description": "初步认识小数，会读写简单的小数，会比较小数大小和简单加减",
            "subsections": [
                {"title":"小数的含义和读写","kps":["像3.45、0.85这样的数叫小数","小数点左边是整数部分右边是小数部分","读作：三点四五、零点八五","一位小数表示十分之几"],"concepts":["小数","整数部分","小数部分"],"diff":"基础","weight":"高"},
                {"title":"小数比较大小","kps":["先比较整数部分","整数部分相同再比较小数部分","能比较生活中常见小数的大小"],"concepts":["比较","整数部分"],"diff":"基础","weight":"中"},
                {"title":"简单的小数加减法","kps":["小数点对齐（相同数位对齐）","从低位算起","得数的小数部分末尾有0要去掉","能解决小数加减的实际问题"],"concepts":["小数点对齐","加减法"],"diff":"中等","weight":"高"}
            ]
        },
        {
            "id": 8, "title": "数学广角—搭配（二）",
            "description": "掌握有序排列和搭配的方法，能用枚举法解决组合问题",
            "subsections": [
                {"title":"排列","kps":["固定一个位置交换其他位置","按顺序枚举所有排列","排列与顺序有关","用图示法或列表法枚举"],"concepts":["排列","顺序"],"diff":"中等","weight":"高"},
                {"title":"搭配","kps":["固定一种搭配枚举所有可能","用连线法解决搭配问题","搭配与顺序无关","解决穿衣配餐等实际问题"],"concepts":["搭配","枚举"],"diff":"中等","weight":"高"}
            ]
        },
        {
            "id": 9, "title": "总复习",
            "description": "全册系统复习",
            "subsections": [
                {"title":"数与计算","kps":["除数是一位数的除法复习","两位数乘两位数复习","小数的初步认识复习"],"concepts":["综合"],"diff":"中等","weight":"中"},
                {"title":"图形与空间","kps":["位置与方向复习","面积及单位换算复习"],"concepts":["综合"],"diff":"中等","weight":"中"},
                {"title":"统计与时间","kps":["复式统计表复习","年月日知识复习"],"concepts":["综合"],"diff":"中等","weight":"中"},
                {"title":"数学广角","kps":["搭配问题复习"],"concepts":["综合"],"diff":"中等","weight":"中"}
            ]
        }
    ]
}

# Save knowledge graph
with open(f"{base}/三年级下册_知识点图谱.json", "w", encoding="utf-8") as f:
    json.dump(xia3_kg, f, ensure_ascii=False, indent=2)

total_kps = sum(len(sub['kps']) for s in xia3_kg['sections'] for sub in s['subsections'])
print(f"三年级下册知识点图谱已保存")
print(f"章节数: {xia3_kg['total_sections']}")
print(f"子知识点数: {total_kps}")

# ===================== 生成 HTML PDF =====================
# 读取四年级图谱做框架参考
sk = xia3_kg

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>穗学伴 · 小学三年级下册数学知识点图谱</title>
<meta name="author" content="穗学伴">
<meta name="description" content="人教版小学数学三年级下册知识点图谱 — 9章内容、子知识点结构化呈现">
<meta name="keywords" content="小学数学, 人教版, 三年级, 知识点图谱, 穗学伴">
<meta name="generator" content="Kami">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --parchment: #f5f4ed; --ivory: #faf9f5; --near-black:#141413;
    --dark-warm: #3d3d3a; --olive: #504e49; --stone: #6b6a64;
    --brand: #1B365D; --border: #e8e6dc; --border-soft:#e5e3d8;
    --tag-bg: #E4ECF5;
    --serif: "TsangerJinKai02", "Source Han Serif SC", "Noto Serif CJK SC", "Songti SC", STSong, Georgia, serif;
  }
  @page {
    size: A4;
    margin: 20mm 22mm 22mm 22mm;
    background: #f5f4ed;
    @top-right { content: string(section-title); font-family: var(--serif); font-size: 8pt; color: #6b6a64; }
    @bottom-center { content: counter(page) " \\00B7 穗学伴三年级下册知识点"; font-family: var(--serif); font-size: 9pt; color: #6b6a64; }
  }
  @page:first { @top-right { content: ""; } @bottom-center { content: ""; } }
  html, body { background: var(--parchment); }
  @media screen { body { max-width: 210mm; margin: 0 auto; padding: 20mm 22mm; } }
  body {
    color: var(--near-black); font-family: var(--serif);
    font-size: 10pt; line-height: 1.55; letter-spacing: 0.2pt;
    widows: 3; orphans: 3;
  }
  .cover { min-height: 240mm; display: flex; flex-direction: column; justify-content: space-between; padding: 40mm 0 0 0; break-after: page; }
  .cover-eyebrow { font-size: 10pt; color: var(--brand); letter-spacing: 1pt; margin-bottom: 18pt; }
  .cover-title { font-size: 36pt; font-weight: 500; line-height: 1.15; margin-bottom: 16pt; }
  .cover-sub { font-size: 14pt; color: var(--olive); line-height: 1.5; max-width: 85%; margin-bottom: 30pt; }
  .cover-meta { font-size: 10pt; color: var(--stone); line-height: 1.5; }
  .cover-meta strong { color: var(--dark-warm); font-weight: 500; }

  .toc { break-after: page; }
  .toc h2 { font-size: 22pt; font-weight: 500; margin-bottom: 14pt; border-left: 2.5pt solid var(--brand); padding-left: 8pt; }
  .toc-item { display: flex; justify-content: space-between; padding: 5pt 0; border-bottom: 0.3pt dotted var(--border); font-size: 10.5pt; }
  .toc-num { color: var(--brand); font-weight: 500; min-width: 30pt; }
  .toc-title { flex: 1; padding-left: 6pt; }
  .toc-page { color: var(--stone); font-variant-numeric: tabular-nums; }

  h1 { font-size: 20pt; font-weight: 500; line-height: 1.2; margin: 0 0 10pt 0; border-left: 2.5pt solid var(--brand); padding-left: 8pt; break-after: avoid; }
  h2 { font-size: 14pt; font-weight: 500; line-height: 1.25; margin: 20pt 0 8pt 0; string-set: section-title content(); break-after: avoid; }
  h3 { font-size: 12pt; font-weight: 500; line-height: 1.3; margin: 14pt 0 6pt 0; color: var(--dark-warm); break-after: avoid; }
  .chap { font-size: 9pt; color: var(--brand); letter-spacing: 0.5pt; margin-bottom: 4pt; }
  p { margin: 0 0 8pt 0; line-height: 1.55; }
  .lead { font-size: 11pt; line-height: 1.55; color: var(--dark-warm); margin-bottom: 12pt; }
  .hl { color: var(--brand); font-weight: 500; }
  strong { font-weight: 500; }
  ul, ol { margin: 4pt 0 8pt 0; padding-left: 18pt; line-height: 1.5; }
  ul li::marker { color: var(--brand); }
  ol li::marker { color: var(--brand); font-weight: 500; }
  table { width: 100%; border-collapse: collapse; font-size: 9pt; margin: 10pt 0; break-inside: avoid; }
  table th { text-align: left; font-weight: 500; color: var(--dark-warm); padding: 5pt 6pt; border-bottom: 1pt solid var(--border); }
  table td { padding: 4pt 6pt; border-bottom: 0.3pt solid var(--border-soft); vertical-align: top; }
  .tag { display: inline-block; background: var(--tag-bg); color: var(--brand); font-size: 8.5pt; font-weight: 500; padding: 1pt 6pt; border-radius: 3pt; margin-right: 3pt; }
  .chapter { break-before: page; }
  .stats-row { display: flex; gap: 16pt; margin: 14pt 0; }
  .stat-card { flex: 1; background: var(--ivory); border-radius: 4pt; padding: 10pt 14pt; text-align: center; }
  .stat-val { font-size: 18pt; font-weight: 500; color: var(--brand); }
  .stat-label { font-size: 9pt; color: var(--olive); margin-top: 2pt; }
  .callout { background: var(--ivory); border-left: 2pt solid var(--brand); padding: 10pt 14pt; border-radius: 3pt; margin: 10pt 0; break-inside: avoid; }
</style>
</head>
<body>

<section class="cover">
  <div>
    <div class="cover-eyebrow">SUISUIXUEBAN · KNOWLEDGE GRAPH</div>
    <div class="cover-title">穗学伴<br>小学三年级下册<br>数学知识点图谱</div>
    <div class="cover-sub">人教版 · 基于教材目录深度提取<br>覆盖 9 章 子知识点</div>
  </div>
  <div class="cover-meta">
    <strong>穗学伴 · 智能家教助手</strong><br>
    版本 V1.0  ·  2026.05<br>
    人教版三年级数学
  </div>
</section>

<section class="toc">
  <h2>目录</h2>
  <div class="toc-item"><span class="toc-num">01</span><span class="toc-title">全册知识总览</span><span class="toc-page">03</span></div>
  <div class="toc-item"><span class="toc-num">02</span><span class="toc-title">知识点详解</span><span class="toc-page">04</span></div>
  <div class="toc-item"><span class="toc-num">03</span><span class="toc-title">与四年级的关联分析</span><span class="toc-page">XX</span></div>
</section>

<section class="chapter">
  <div class="chap">01 · OVERVIEW</div>
  <h1>全册知识总览</h1>

  <p class="lead">
    穗学伴知识图谱覆盖人教版小学数学三年级下册全部内容，9 章，为智能出题、记忆宫殿卡片生成、薄弱点诊断提供结构基础。
    与四年级知识点存在纵向递进关系，是穗学伴教材体系的重要组成部分。
  </p>

  <div class="stats-row">
    <div class="stat-card"><div class="stat-val">9</div><div class="stat-label">总章节</div></div>
    <div class="stat-card"><div class="stat-val">''' + str(total_kps) + '''</div><div class="stat-label">子知识点</div></div>
    <div class="stat-card"><div class="stat-val">3</div><div class="stat-label">知识模块</div></div>
  </div>

  <h2>章节一览</h2>
  <table>
    <thead><tr><th>章节</th><th>标题</th><th>子知识点</th><th>核心概念</th></tr></thead>
    <tbody>
'''

for s in sk['sections']:
    n_kps = len(s['subsections'])
    concepts = s['subsections'][0].get('concepts', [])[:3]
    html += f'      <tr><td>{s["id"]}</td><td>{s["title"]}</td><td>{n_kps}</td><td>{"、".join(concepts[:3])}</td></tr>\n'

html += '''    </tbody>
  </table>

  <h2>三大知识模块</h2>
  <table>
    <thead><tr><th>模块</th><th>包含章节</th><th>核心能力</th></tr></thead>
    <tbody>
      <tr><td>数与代数</td><td>除数是一位数的除法、两位数乘两位数、小数的初步认识</td><td>计算能力、数感</td></tr>
      <tr><td>图形与空间</td><td>位置与方向、面积</td><td>空间观念、测量能力</td></tr>
      <tr><td>统计与综合</td><td>复式统计表、年月日、搭配（二）</td><td>数据分析、时间计算、有序思维</td></tr>
    </tbody>
  </table>
</section>

<section class="chapter">
  <div class="chap">02 · KNOWLEDGE DETAIL</div>
  <h1>知识点详解</h1>
'''

for s in sk['sections']:
    html += f'''  <h2>{s['id']}. {s['title']}</h2>
  <p>{s.get('description', '')}</p>
'''
    for sub in s['subsections']:
        diffs = sub.get('diff', '基础')
        weight = sub.get('weight', '中')
        html += f'''  <h3>{sub['title']}</h3>
  <ul>
'''
        for kp in sub['kps']:
            html += f'    <li>{kp}</li>\n'
        html += f'''  </ul>
  <table class="compact">
    <tr><th>难度</th><th>重要性</th><th>关联概念</th></tr>
    <tr><td>{diffs}</td><td>{weight}</td><td>{"、".join(sub.get("concepts", []))}</td></tr>
  </table>
'''

html += '''</section>

<section class="chapter">
  <div class="chap">03 · GRADE 3 TO 4 PROGRESSION</div>
  <h1>与四年级的关联分析</h1>

  <p class="lead">三年级下册是四年级的重要基础。理解这些递进关系，有助于设计连贯的学习路径。</p>

  <h2>纵向递进（三年级下册 → 四年级）</h2>
  <table>
    <thead><tr><th>三年级知识点</th><th>四年级延伸</th><th>关联描述</th></tr></thead>
    <tbody>
      <tr><td>除数是一位数的除法</td><td>除数是两位数的除法（四上第6章）</td><td>除数从一位扩展到两位，试商方法相同但难度提升</td></tr>
      <tr><td>两位数乘两位数</td><td>三位数乘两位数（四上第4章）</td><td>乘数从两位数扩展到三位数</td></tr>
      <tr><td>小数的初步认识</td><td>小数的意义和性质（四下第4章）</td><td>从初步认识到深入理解数位体系</td></tr>
      <tr><td>小数的简单加减</td><td>小数的加法和减法（四下第6章）</td><td>从一位小数到多位小数加减</td></tr>
      <tr><td>面积（长方形正方形）</td><td>公顷和平方千米（四上第2章）</td><td>从常用面积单位扩展到较大面积单位</td></tr>
      <tr><td>面积单位进率</td><td>面积单位换算（四下小数与单位换算）</td><td>进率100的巩固 + 复合单位换算</td></tr>
      <tr><td>年月日 + 24时计时法</td><td>角的度量（四上第3章）</td><td>从时间度量到角度度量（度量思想延续）</td></tr>
      <tr><td>位置与方向（八个方向）</td><td>平行四边形和梯形（四上第5章）</td><td>从方向辨认到平行垂直关系（空间观念深化）</td></tr>
      <tr><td>搭配（二）</td><td>数学广角—优化（四上第8章）</td><td>从有序排列到系统优化策略</td></tr>
    </tbody>
  </table>

  <div class="callout">
    <strong>学习路径建议</strong>：三下到四上的计算链衔接最紧密（除法、乘法、小数），建议优先确保三下基础扎实。
    三四年级在"数与代数"模块的递进关系最为直接，应作为重点衔接环节。
  </div>

  <h2>穗学伴适配建议</h2>
  <table>
    <thead><tr><th>穗学伴功能</th><th>三年级适配</th><th>说明</th></tr></thead>
    <tbody>
      <tr><td>记忆宫殿</td><td>面积单位、年月日、方向位置最适合作贴纸</td><td>面积单位进率（100）可贴冰箱；方向图贴房间门上</td></tr>
      <tr><td>口算闯关</td><td>除数是一位数的口算、两位数乘两位数口算</td><td>重点训练整十整百除法和乘法口算</td></tr>
      <tr><td>应用题分步引导</td><td>连乘解决问题、铺地砖问题、经过时间计算</td><td>分步引导非常适合综合应用题</td></tr>
      <tr><td>知识点图谱</td><td>9章图谱为三年级题库提供结构基础</td><td>已有四年级题库435题，三年级待建</td></tr>
    </tbody>
  </table>
</section>

</body>
</html>'''

out = f"{base}/穗学伴_三年级下册_知识点图谱.html"
with open(out, "w", encoding="utf-8") as f:
    f.write(html)
print(f"HTML生成: {out}")
print(f"大小: {len(html)} 字符")