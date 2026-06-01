/* ====== 穗学伴 · 各章节动画引导数据 ====== */

const GUIDES = {};

// ====== 第1章 位置与方向 ======
GUIDES[1] = {
  name: '位置与方向',
  steps: [
    {
      title: '认识东南西北',
      voiceScript: '好啦，我们来认识四个基本方向。早晨太阳从东方升起，记住这个口诀：上北下南，左西右东，这是看地图时的标准方向。',
      html: '<p>早晨太阳从 <span class="highlight">东方</span> 升起。</p><div style="display:flex;justify-content:center;margin:20px 0;"><svg viewBox="0 0 280 280" style="width:220px;max-width:100%;"><circle cx="140" cy="140" r="120" fill="none" stroke="#444" stroke-width="2"/><circle cx="140" cy="140" r="80" fill="none" stroke="#444" stroke-width="1" stroke-dasharray="4,4"/><line x1="140" y1="20" x2="140" y2="260" stroke="#555" stroke-width="1.5"/><line x1="20" y1="140" x2="260" y2="140" stroke="#555" stroke-width="1.5"/><line x1="55" y1="55" x2="225" y2="225" stroke="#444" stroke-width="1" stroke-dasharray="3,3"/><line x1="225" y1="55" x2="55" y2="225" stroke="#444" stroke-width="1" stroke-dasharray="3,3"/><text x="140" y="18" text-anchor="middle" fill="var(--gold)" font-size="24" font-weight="700">北</text><text x="140" y="278" text-anchor="middle" fill="var(--text-secondary)" font-size="24" font-weight="700">南</text><text x="278" y="147" text-anchor="end" fill="var(--text-secondary)" font-size="24" font-weight="700">东</text><text x="2" y="147" text-anchor="start" fill="var(--text-secondary)" font-size="24" font-weight="700">西</text><text x="45" y="40" text-anchor="middle" fill="#666" font-size="14">东北</text><text x="235" y="40" text-anchor="middle" fill="#666" font-size="14">西北</text><text x="45" y="250" text-anchor="middle" fill="#666" font-size="14">东南</text><text x="235" y="250" text-anchor="middle" fill="#666" font-size="14">西南</text><text x="140" y="140" text-anchor="middle" fill="var(--gold)" font-size="14">★</text></svg></div><p style="font-size:16px;line-height:2;">口诀：<span class="highlight">上北 下南 左西 右东</span></p>'
    },
    {
      title: '方向与位置关系',
      voiceScript: '现在来看看不同方向之间的对应关系。记住：北和南相对，东和西相对。如果你面向北，那你的后面就是南，右面是东，左面是西。换个方向也是一样的道理。',
      html: '<p>假设你<span class="highlight">面向北</span>：</p><div style="display:flex;justify-content:center;gap:12px;margin:20px 0;flex-wrap:wrap;"><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:16px;text-align:center;width:100px;"><div style="font-size:30px;">⬆️</div><div style="color:var(--gold);font-weight:700;">北</div><div style="font-size:12px;color:var(--text-secondary);">前面</div></div><div style="background:rgba(80,80,80,.3);border-radius:12px;padding:16px;text-align:center;width:100px;"><div style="font-size:30px;">⬇️</div><div style="color:var(--text-secondary);">南</div><div style="font-size:12px;color:var(--text-secondary);">后面</div></div><div style="background:rgba(80,80,80,.3);border-radius:12px;padding:16px;text-align:center;width:100px;"><div style="font-size:30px;">➡️</div><div style="color:var(--text-secondary);">东</div><div style="font-size:12px;color:var(--text-secondary);">右面</div></div><div style="background:rgba(80,80,80,.3);border-radius:12px;padding:16px;text-align:center;width:100px;"><div style="font-size:30px;">⬅️</div><div style="color:var(--text-secondary);">西</div><div style="font-size:12px;color:var(--text-secondary);">左面</div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:14px;"><div style="background:#2a2a2a;border-radius:8px;padding:10px;text-align:center;">面东 → 左北 右南</div><div style="background:#2a2a2a;border-radius:8px;padding:10px;text-align:center;">面南 → 左东 右西</div><div style="background:#2a2a2a;border-radius:8px;padding:10px;text-align:center;">面西 → 左南 右北</div><div style="background:#2a2a2a;border-radius:8px;padding:10px;text-align:center;">面北 → 左西 右东</div></div>'
    }
  ]
};

// ====== 第4章 两位数乘两位数 ======
GUIDES[4] = {
  name: '两位数乘两位数',
  steps: [
    {
      title: '口算乘法：拆分法',
      voiceScript: '口算两位数乘一位数，我们可以用拆分法。比如十四乘三，把十四拆成十和四，先用十乘三得三十，再用四乘三得十二，最后三十加十二等于四十二。这样算又快又不容易出错！',
      html: '<p>口算 <span class="highlight">14 × 3</span>：</p><div style="display:flex;align-items:center;justify-content:center;gap:12px;margin:20px 0;flex-wrap:wrap;"><div style="background:#2a2a2a;border-radius:12px;padding:16px;text-align:center;min-width:100px;"><div style="font-size:26px;font-weight:700;color:var(--gold);">14×3</div></div><div style="font-size:28px;color:var(--text-secondary);">=</div><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:16px;text-align:center;min-width:100px;"><div style="font-size:14px;color:var(--text-secondary);">拆</div><div style="font-size:24px;font-weight:700;color:var(--gold);">10×3+4×3</div></div><div style="font-size:28px;color:var(--text-secondary);">=</div><div style="background:rgba(76,175,80,.1);border-radius:12px;padding:16px;text-align:center;min-width:100px;"><div style="font-size:14px;color:var(--text-secondary);">算</div><div style="font-size:24px;font-weight:700;color:var(--green);">30+12</div></div><div style="font-size:28px;color:var(--text-secondary);">=</div><div style="background:rgba(201,168,76,.2);border-radius:12px;padding:16px;text-align:center;min-width:100px;border:2px solid var(--gold);"><div style="font-size:14px;color:var(--text-secondary);">答案</div><div style="font-size:28px;font-weight:700;color:var(--gold-light);">42</div></div></div><p style="font-size:15px;">💡 把两位数拆成 <span class="highlight">整十数 + 个位数</span>，分别乘再加</p>'
    },
    {
      title: '笔算乘法：竖式分步',
      voiceScript: '接下来学竖式计算二十三乘十二。第一步，用个位的二去乘二十三，得到四十六。第二步，用十位的一去乘二十三，得到二十三，注意要向左移一位，因为这实际上是二十三乘十。第三步，把四十六和二百三十加起来，等于二百七十六。看，一步一步来其实很简单！',
      html: '<p><span class="highlight">23 × 12</span> 竖式：</p><div style="display:flex;justify-content:center;margin:16px 0;"><div style="background:#2a2a2a;border-radius:12px;padding:20px 28px;font-family:monospace;font-size:22px;line-height:2;"><div style="display:flex;justify-content:flex-end;">&nbsp;&nbsp;2&nbsp;3</div><div style="display:flex;justify-content:flex-end;">×&nbsp;1&nbsp;2</div><div style="border-top:2px solid var(--gold);display:flex;justify-content:flex-end;color:var(--gold);">&nbsp;&nbsp;4&nbsp;6&nbsp;&nbsp;<span style="font-size:13px;color:var(--text-secondary);">23×2</span></div><div style="display:flex;justify-content:flex-end;color:var(--gold);">2&nbsp;3&nbsp;0&nbsp;<span style="font-size:13px;color:var(--text-secondary);">23×10</span></div><div style="border-top:2px solid var(--gold-light);display:flex;justify-content:flex-end;color:var(--gold-light);font-weight:700;">2&nbsp;7&nbsp;6&nbsp;<span style="font-size:13px;color:var(--text-secondary);">相加</span></div></div></div><p style="font-size:15px;">本质：23×12 = 23×2 + 23×10</p>'
    }
  ]
};

// ====== 第5章 面积 ======
GUIDES[5] = {
  name: '面积',
  steps: [
    {
      title: '面积和面积单位',
      voiceScript: '面积就是物体表面的大小。比如课桌面的大小、数学书封面的大小，都是面积。常用的面积单位有三个：平方厘米，大概是你拇指指甲那么大；平方分米，差不多一个手掌那么大；平方米，大概是一张双人课桌面那么大。',
      html: '<p><span class="highlight">面积</span> = 物体表面或封闭图形的大小。</p><div style="display:flex;justify-content:center;gap:16px;margin:16px 0;flex-wrap:wrap;"><div style="background:#2a2a2a;border-radius:12px;padding:16px;text-align:center;width:120px;"><div style="font-size:36px;">📄</div><div style="font-size:13px;">课桌面<br><span style="color:var(--text-secondary);font-size:11px;">≈2400cm²</span></div></div><div style="background:#2a2a2a;border-radius:12px;padding:16px;text-align:center;width:120px;"><div style="font-size:36px;">📏</div><div style="font-size:13px;">数学书<br><span style="color:var(--text-secondary);font-size:11px;">≈450cm²</span></div></div><div style="background:#2a2a2a;border-radius:12px;padding:16px;text-align:center;width:120px;"><div style="font-size:36px;">🖐️</div><div style="font-size:13px;">手掌<br><span style="color:var(--text-secondary);font-size:11px;">≈100cm²</span></div></div></div><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;"><p style="font-size:14px;">📌 <span class="highlight">cm²</span> 平方厘米 — 拇指指甲<br>📌 <span class="highlight">dm²</span> 平方分米 — 手掌 (10cm×10cm)<br>📌 <span class="highlight">m²</span> 平方米 — 双人课桌面</p></div>'
    },
    {
      title: '面积公式',
      voiceScript: '计算面积有公式，记好了非常简单。长方形的面积等于长乘以宽。正方形的面积等于边长乘以边长。比如一个长方形长八厘米，宽五厘米，八乘五等于四十平方厘米。注意单位要用平方厘米哦！',
      html: '<div style="display:flex;justify-content:center;gap:16px;margin:16px 0;flex-wrap:wrap;"><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:20px;text-align:center;min-width:170px;border:2px solid var(--gold);"><div style="font-weight:700;color:var(--gold);">▭ 长方形</div><div style="font-size:14px;margin:6px 0;color:var(--text-secondary);">面积 = 长 × 宽</div><svg viewBox="0 0 100 70" style="width:80px;"><rect x="5" y="5" width="90" height="60" fill="rgba(201,168,76,.1)" stroke="var(--gold)" stroke-width="2"/><text x="50" y="38" text-anchor="middle" fill="var(--gold)" font-size="18" font-weight="700">S</text></svg></div><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:20px;text-align:center;min-width:170px;border:2px solid var(--gold);"><div style="font-weight:700;color:var(--gold);">◻ 正方形</div><div style="font-size:14px;margin:6px 0;color:var(--text-secondary);">面积 = 边长×边长</div><svg viewBox="0 0 70 70" style="width:60px;"><rect x="5" y="5" width="60" height="60" fill="rgba(201,168,76,.1)" stroke="var(--gold)" stroke-width="2"/><text x="35" y="38" text-anchor="middle" fill="var(--gold)" font-size="18" font-weight="700">S</text></svg></div></div><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;"><p style="font-size:14px;">✏️ 长8cm宽5cm → 8×5=<span style="color:var(--green);font-weight:700;">40 cm²</span></p></div>'
    }
  ]
};

// ====== 第6章 年、月、日 ======
GUIDES[6] = {
  name: '年、月、日',
  steps: [
    {
      title: '一年有12个月',
      voiceScript: '一年有十二个月。其中一月、三月、五月、七月、八月、十月、十二月，这七个月是三十一天的大月。四月、六月、九月、十一月，这四个月是三十天的小月。二月最特殊，平年二十八天，闰年二十九天。',
      html: '<p>一年有 <span class="highlight">12 个月</span>。</p><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:16px 0;">'+
      [31,28,31,30,31,30,31,31,30,31,30,31].map((d,i)=>{
        const col=d===31?'var(--gold)':d===30?'var(--text-secondary)':'var(--red)';
        return '<div style="background:#2a2a2a;border-radius:8px;padding:8px 4px;text-align:center;font-size:13px;border-left:3px solid '+col+';">'+(i+1)+'月<span style="font-size:18px;font-weight:700;color:'+col+';display:block;">'+d+'</span></div>';
      }).join('')+'</div><p style="font-size:13px;color:var(--text-secondary);">🟡金=31天 &nbsp; ⚪灰=30天 &nbsp; 🔴红=28/29</p>'
    },
    {
      title: '拳头记忆法',
      voiceScript: '教你一个超好用的方法，拳头记忆法。握紧拳头，凸起来的骨节代表大月三十一天，凹下去的指缝代表小月三十天，二月除外。从食指骨节开始数，一月凸、二月凹、三月凸、四月凹、五月凸、六月凹、七月凸。然后换右手，八月凸、九月凹、十月凸、十一月凹、十二月凸。所有凸起都是三十一天的大月！',
      html: '<p>握紧拳头，凸起=大月(31天)，凹陷=小月(30天)：</p><div style="margin:12px 0;"><svg viewBox="0 0 760 130" style="width:100%;max-width:760px;">'+
      '<rect x="0" y="10" width="760" height="100" rx="10" fill="rgba(255,255,255,.03)"/>'+
      '<text x="100" y="25" fill="#666" font-size="12" text-anchor="middle">👈 左手</text>'+
      [[40,70,22],[102,95,16],[164,70,22],[226,95,16],[288,70,22],[350,95,16],[412,70,22]].map(([cx,cy,r],i)=>{
        const m=i+1; const bump=r===22;
        return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(bump?'rgba(201,168,76,.25)':'rgba(80,80,80,.4)')+'" stroke="'+(bump?'var(--gold)':'#555')+'" stroke-width="2"/><text x="'+cx+'" y="'+(cy-6)+'" text-anchor="middle" fill="var(--text-primary)" font-size="13" font-weight="700">'+m+'月</text><text x="'+cx+'" y="'+(cy+10)+'" text-anchor="middle" fill="var(--text-secondary)" font-size="10">'+['31天','28天','31天','30天','31天','30天','31天'][i]+'</text>';
      }).join('')+
      '<line x1="425" y1="25" x2="425" y2="105" stroke="#444" stroke-width="2" stroke-dasharray="4,4"/>'+
      '<text x="580" y="25" fill="#666" font-size="12" text-anchor="middle">👉 右手</text>'+
      [[448,70,22],[510,95,16],[572,70,22],[634,95,16],[696,70,22]].map(([cx,cy,r],i)=>{
        const m=i+8; const bump=r===22;
        return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(bump?'rgba(201,168,76,.25)':'rgba(80,80,80,.4)')+'" stroke="'+(bump?'var(--gold)':'#555')+'" stroke-width="2"/><text x="'+cx+'" y="'+(cy-6)+'" text-anchor="middle" fill="var(--text-primary)" font-size="13" font-weight="700">'+m+'月</text><text x="'+cx+'" y="'+(cy+10)+'" text-anchor="middle" fill="var(--text-secondary)" font-size="10">'+['31天','30天','31天','30天','31天'][i]+'</text>';
      }).join('')+
      '</svg></div>'
    },
    {
      title: '月份口诀',
      voiceScript: '再来学一首口诀歌：一三五七八十腊，三十一天永不差。这说的是月份一、三、五、七、八、十、十二月，都是三十一天的大月。四六九冬三十日，四月、六月、九月、十一月是三十天。平年二月二十八，闰年二月把一加。记住了吗？',
      html: '<div style="background:rgba(201,168,76,.1);border-radius:16px;padding:20px;text-align:center;"><p style="font-size:20px;line-height:2;font-weight:600;color:var(--gold-light);">一三五七八十腊<br><span style="font-size:14px;color:var(--text-secondary);">（1·3·5·7·8·10·12月）</span></p><p style="font-size:20px;line-height:2;font-weight:600;color:var(--gold-light);">三十一天永不差</p><p style="font-size:20px;line-height:2;font-weight:600;color:var(--text-secondary);margin-top:10px;">四六九冬三十日<br><span style="font-size:14px;color:var(--text-secondary);">（4·6·9·11月）</span></p><p style="font-size:20px;line-height:2;font-weight:600;color:var(--red);margin-top:10px;">平年二月二十八<br>闰年二月把一加</p></div><p style="font-size:13px;color:var(--text-secondary);margin-top:6px;">📝 "腊"=12月 &nbsp; "冬"=11月</p>'
    },
    {
      title: '平年和闰年',
      voiceScript: '最后来看看平年和闰年的区别。平年二月二十八天，全年三百六十五天。闰年二月多一天变成二十九天，全年三百六十六天。怎么判断闰年呢？记住：年份能被四整除的就是闰年。但如果是整百年，要能被四百整除才算闰年。比如两千年是闰年，但一九零零年就不是。',
      html: '<div style="display:flex;gap:12px;margin:16px 0;"><div style="flex:1;background:rgba(80,80,80,.2);border-radius:10px;padding:16px;text-align:center;"><div style="font-size:32px;font-weight:700;color:var(--text-secondary);">28</div><div style="font-size:15px;font-weight:600;">平年</div><div style="font-size:12px;color:var(--text-secondary);">365天</div></div><div style="flex:1;background:rgba(201,168,76,.1);border-radius:10px;padding:16px;text-align:center;"><div style="font-size:32px;font-weight:700;color:var(--gold);">29</div><div style="font-size:15px;font-weight:600;">闰年</div><div style="font-size:12px;color:var(--text-secondary);">366天</div></div></div><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;"><p style="font-size:14px;">🔍 <span class="highlight">能被4整除</span>的是闰年<br>· 2024÷4=506 → ✅ 闰年<br>· 整百年要能被 <span class="highlight">400</span> 整除<br>· 2000年是闰年，1900年不是</p></div>'
    }
  ]
};


// ====== 第2章 除数是一位数的除法 ======
GUIDES[2] = {
  name: '除数是一位数的除法',
  steps: [
    {
      title: '口算除法',
      voiceScript: '先来学口算除法。比如六十除以三，想成六个十除以三等于两个十，也就是二十。四百除以五，四十个十除以五等于八个十，也就是八十。记住，被除数后面有几个零，答案后面也有几个零。',
      html: '<p>口算除法：把被除数看成几个十或几个百。</p><div style="display:flex;flex-direction:column;gap:12px;margin:16px 0;"><div style="background:#2a2a2a;border-radius:10px;padding:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><span style="font-size:22px;font-weight:700;color:var(--gold);">60 ÷ 3</span><span style="color:var(--text-secondary);">=</span><span style="background:rgba(201,168,76,.1);border-radius:8px;padding:8px 14px;">6个十÷3=2个十</span><span style="color:var(--text-secondary);">=</span><span style="font-size:22px;font-weight:700;color:var(--green);">20</span></div><div style="background:#2a2a2a;border-radius:10px;padding:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><span style="font-size:22px;font-weight:700;color:var(--gold);">400 ÷ 5</span><span style="color:var(--text-secondary);">=</span><span style="background:rgba(201,168,76,.1);border-radius:8px;padding:8px 14px;">40个十÷5=8个十</span><span style="color:var(--text-secondary);">=</span><span style="font-size:22px;font-weight:700;color:var(--green);">80</span></div><div style="background:#2a2a2a;border-radius:10px;padding:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><span style="font-size:22px;font-weight:700;color:var(--gold);">240 ÷ 6</span><span style="color:var(--text-secondary);">=</span><span style="background:rgba(201,168,76,.1);border-radius:8px;padding:8px 14px;">24个十÷6=4个十</span><span style="color:var(--text-secondary);">=</span><span style="font-size:22px;font-weight:700;color:var(--green);">40</span></div></div><p style="font-size:14px;color:var(--text-secondary);">💡 想算理：几个十 ÷ 除数 = 几个十</p>'
    },
    {
      title: '笔算除法',
      voiceScript: '笔算除法用竖式。比如九十六除以三，从高位除起，九除以三得三，写在十位上，六除以三得二，写在个位上，合起来就是三十二。注意如果某一位不够除，要商零占位。',
      html: '<p><span class="highlight">96 ÷ 3</span> 竖式：</p><div style="display:flex;justify-content:center;margin:16px 0;"><div style="background:#2a2a2a;border-radius:12px;padding:20px 28px;font-family:monospace;font-size:22px;line-height:2;"><div>3 ⟌ 9 6</div><div>&nbsp;&nbsp;&nbsp;3 2</div></div></div><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;"><p style="font-size:14px;">① 从高位除起：9÷3=3（十位）<br>② 下一位：6÷3=2（个位）<br>③ 结果：<span class="highlight">32</span></p></div>'
    }
  ]
};

// ====== 第3章 复式统计表 ======
GUIDES[3] = {
  name: '复式统计表',
  steps: [
    {
      title: '认识复式统计表',
      voiceScript: '复式统计表就是把几个有联系的统计表合并成一个表。比如要比较两个班的成绩，看两个表多麻烦，合并成一个就能一目了然。它的最大优点就是便于比较和分析数据。',
      html: '<p>把几个有联系的<span class="highlight">单式统计表</span>合并，就是复式统计表。</p><div style="background:rgba(201,168,76,.05);border-radius:12px;padding:20px;margin:16px 0;"><div style="font-size:14px;text-align:center;font-weight:600;color:var(--gold);margin-bottom:10px;">📊 两班成绩对比</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:4px;font-size:13px;text-align:center;"><div style="background:#2a2a2a;border-radius:4px;padding:8px;font-weight:600;color:var(--gold);">班级</div><div style="background:#2a2a2a;border-radius:4px;padding:8px;font-weight:600;color:var(--gold);">优秀</div><div style="background:#2a2a2a;border-radius:4px;padding:8px;font-weight:600;color:var(--gold);">良好</div><div style="background:#2a2a2a;border-radius:4px;padding:8px;font-weight:600;color:var(--gold);">待提高</div><div style="background:#1a1a1a;padding:8px;">三1班</div><div style="background:#1a1a1a;padding:8px;">18</div><div style="background:#1a1a1a;padding:8px;">12</div><div style="background:#1a1a1a;padding:8px;">5</div><div style="background:#1a1a1a;padding:8px;">三2班</div><div style="background:#1a1a1a;padding:8px;">15</div><div style="background:#1a1a1a;padding:8px;">14</div><div style="background:#1a1a1a;padding:8px;">6</div></div></div><p style="font-size:15px;">✅ 优点：<span class="highlight">便于比较和分析</span></p>'
    }
  ]
};

// ====== 第7章 小数的初步认识 ======
GUIDES[7] = {
  name: '小数的初步认识',
  steps: [
    {
      title: '认识小数',
      voiceScript: '小数由三部分组成：整数部分、小数点和小数部分。比如三点四五，三就是整数部分，四五是小数部分。小数点读作"点"。商品的价格、身高、体重经常用到小数。',
      html: '<p><span class="highlight">小数</span>由三部分组成：</p><div style="display:flex;justify-content:center;align-items:center;gap:8px;margin:20px 0;"><div style="background:rgba(201,168,76,.1);border-radius:10px;padding:16px 20px;text-align:center;"><div style="font-size:32px;font-weight:700;color:var(--gold);">3</div><div style="font-size:12px;color:var(--text-secondary);">整数部分</div></div><div style="font-size:36px;color:var(--gold);">.</div><div style="background:rgba(201,168,76,.1);border-radius:10px;padding:16px 20px;text-align:center;"><div style="font-size:32px;font-weight:700;color:var(--gold);">45</div><div style="font-size:12px;color:var(--text-secondary);">小数部分</div></div></div><p style="font-size:16px;text-align:center;">读作：<span class="highlight">三点四五</span></p><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;margin-top:12px;"><p style="font-size:14px;">📌 生活中处处有小数：<br>🍎 苹果 3.5元/斤 &nbsp; 📏 身高 1.42米 &nbsp; 🌡️ 体温 36.5°C</p></div>'
    },
    {
      title: '小数比大小',
      voiceScript: '小数比大小很简单，先比整数部分，整数部分大的这个数就大。如果整数部分相同，再比小数部分的第一位，第一位大的就大。比如零点六比零点三大大，因为六比三大。',
      html: '<p>比较 <span class="highlight">0.6</span> 和 <span class="highlight">0.3</span>：</p><div style="display:flex;justify-content:center;align-items:center;gap:20px;margin:20px 0;"><div style="text-align:center;"><div style="font-size:36px;font-weight:700;color:var(--gold);">0.6</div><div style="font-size:12px;color:var(--text-secondary);">十分位是6</div></div><div style="font-size:32px;color:var(--text-secondary);">&gt;</div><div style="text-align:center;"><div style="font-size:36px;font-weight:700;color:var(--text-secondary);">0.3</div><div style="font-size:12px;color:var(--text-secondary);">十分位是3</div></div></div><div style="background:rgba(201,168,76,.05);border-radius:8px;padding:14px;"><p style="font-size:14px;">规则：<br>① 先比<span class="highlight">整数部分</span>，大的就大<br>② 整数相同，比<span class="highlight">小数部分</span>第一位<br>③ 还相同，比第二位……</p></div>'
    }
  ]
};

// ====== 第8章 数学广角—搭配 ======
GUIDES[8] = {
  name: '数学广角—搭配',
  steps: [
    {
      title: '排列与搭配',
      voiceScript: '搭配问题很有趣。比如用数字一、二、三组成两位数，十位可以放一、二或三，三种选法，个位剩下两个数字，两种选法，一共三乘二等于六种。再比如三件上衣配两条裤子，三乘二等于六种穿法。记住，搭配问题用乘法！',
      html: '<p>搭配问题用 <span class="highlight">乘法</span> 解决！</p><div style="background:rgba(201,168,76,.05);border-radius:12px;padding:20px;margin:16px 0;"><div style="font-size:15px;font-weight:600;color:var(--gold);margin-bottom:10px;">🎯 用1、2、3组成两位数</div><div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;"><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">12</div><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">13</div><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">21</div><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">23</div><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">31</div><div style="background:#2a2a2a;border-radius:8px;padding:10px 14px;font-size:18px;font-weight:700;color:var(--gold-light);">32</div></div><p style="font-size:14px;text-align:center;margin-top:10px;">3个数字 × 剩下2个 = <span class="highlight">6种</span></p></div><div style="background:rgba(201,168,76,.05);border-radius:12px;padding:20px;"><div style="font-size:15px;font-weight:600;color:var(--gold);margin-bottom:10px;">🎯 3件上衣 × 2条裤子</div><div style="display:flex;justify-content:center;gap:16px;font-size:24px;"><span>👕</span><span>👕</span><span>👕</span><span style="color:var(--text-secondary);">×</span><span>👖</span><span>👖</span></div><p style="font-size:14px;text-align:center;margin-top:10px;">3 × 2 = <span class="highlight">6种穿法</span></p></div>'
    }
  ]
};

// ====== 第9章 总复习 ======
GUIDES[9] = {
  name: '总复习',
  steps: [
    {
      title: '数与计算复习',
      voiceScript: '总复习来啦。先看数与计算，这学期我们学了除法和乘法。除法要记住从高位除起，乘法要记住用拆分法或者竖式。口算的时候，把被除数看成几个十或几个百，想清楚算理就不容易错。',
      html: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0;"><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:16px;border:1px solid var(--gold);"><div style="font-weight:600;color:var(--gold);">➗ 除法</div><div style="font-size:13px;margin-top:6px;color:var(--text-secondary);">从高位除起<br>不够除商零占位<br>验算：商×除数=被除数</div></div><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:16px;border:1px solid var(--gold);"><div style="font-weight:600;color:var(--gold);">✖️ 乘法</div><div style="font-size:13px;margin-top:6px;color:var(--text-secondary);">拆分法：拆整十+个位<br>竖式：分步乘再相加<br>注意进位标记</div></div></div>'
    },
    {
      title: '空间与时间复习',
      voiceScript: '空间方面，我们学了面积，长方形面积等于长乘宽，正方形面积等于边长乘边长。记住三个面积单位：平方厘米、平方分米、平方米。时间方面，一年十二个月，拳头记忆法帮你记住大月小月，平年闰年的判断也要记牢。',
      html: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0;"><div style="background:rgba(100,181,246,.1);border-radius:12px;padding:16px;border:1px solid var(--blue);"><div style="font-weight:600;color:var(--blue);">📐 面积</div><div style="font-size:13px;margin-top:6px;color:var(--text-secondary);">长方形=长×宽<br>正方形=边长×边长<br>单位：cm² dm² m²</div></div><div style="background:rgba(201,168,76,.1);border-radius:12px;padding:16px;border:1px solid var(--gold);"><div style="font-weight:600;color:var(--gold);">📅 时间</div><div style="font-size:13px;margin-top:6px;color:var(--text-secondary);">大月31天：1·3·5·7·8·10·12<br>小月30天：4·6·9·11<br>平年28天，闰年29天</div></div></div><p style="font-size:15px;">📌 方向口诀：<span class="highlight">上北下南左西右东</span></p>'
    }
  ]
};
