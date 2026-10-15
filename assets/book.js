/* =========================================================
   电子书阅读版 · book.js
   主题 / 侧栏隐藏 / 沉浸全屏 / 阅读设置 / 进度 / 快捷键
   ======================================================= */
(function () {
  'use strict';

  /* ---------- 数据 ---------- */

  // 由构建脚本注入的章节数据
  window.NAV_DATA = [{title:"第一卷 国内革命战争时期",sections:[{sub:"第一次国内革命战争时期"},{url:"000-中国社会各阶级的分析.html"},{url:"001-湖南农民运动考察报告.html"},{sub:"第二次国内革命战争时期"},{url:"002-中国的红色政权为什么能够存在？.html"},{url:"003-井冈山的斗争.html"},{url:"004-关于纠正党内的错误思想.html"},{url:"005-星星之火，可以燎原.html"},{url:"006-反对本本主义.html"},{url:"007-必须注意经济工作.html"},{url:"008-怎样分析农村阶级.html"},{url:"009-我们的经济政策.html"},{url:"010-关心群众生活，注意工作方法.html"},{url:"011-论反对日本帝国主义的策略.html"},{url:"012-中国革命战争的战略问题.html"},{url:"013-关于蒋介石声明的声明.html"},{url:"014-中国共产党在抗日时期的任务.html"},{url:"015-为争取千百万群众进入抗日民族统一战线而斗争.html"},{url:"016-实践论.html"},{url:"017-矛盾论.html"}]},{title:"第二卷 抗日战争时期（上）",sections:[{url:"018-反对日本进攻的方针、办法和前途.html"},{url:"019-为动员一切力量争取抗战胜利而斗争.html"},{url:"020-反对自由主义.html"},{url:"021-国共合作成立后的迫切任务.html"},{url:"022-和英国记者贝特兰的谈话.html"},{url:"023-上海太原失陷以后抗日战争的形势和任务.html"},{url:"024-陕甘宁边区政府第八路军后方留守处布告.html"},{url:"025-抗日游击战争的战略问题.html"},{url:"026-论持久战.html"},{url:"027-中国共产党在民族战争中的地位.html"},{url:"028-统一战线中的独立自主问题.html"},{url:"029-战争和战略问题.html"},{url:"030-五四运动.html"},{url:"031-青年运动的方向.html"},{url:"032-反对投降活动.html"},{url:"033-必须制裁反动派.html"},{url:"034-关于国际新形势对新华日报记者的谈话.html"},{url:"035-和中央社、扫荡报、新民报三记者的谈话.html"},{url:"036-苏联利益和人类利益的一致.html"},{url:"037-《共产党人》发刊词.html"},{url:"038-目前形势和党的任务.html"},{url:"039-大量吸收知识分子.html"},{url:"040-中国革命和中国共产党.html"},{url:"041-斯大林是中国人民的朋友.html"},{url:"042-纪念白求恩.html"},{url:"043-新民主主义论.html"},{url:"044-克服投降危险，力争时局好转.html"},{url:"045-团结一切抗日力量，反对反共顽固派.html"},{url:"046-向国民党的十点要求.html"},{url:"047-《中国工人》发刊词.html"},{url:"048-必须强调团结和进步.html"},{url:"049-新民主主义的宪政.html"},{url:"050-抗日根据地的政权问题.html"},{url:"051-目前抗日统一战线中的策略问题.html"},{url:"052-放手发展抗日力量，抵抗反共顽固派的进攻.html"},{url:"053-团结到底.html"},{url:"054-论政策.html"},{url:"055-为皖南事变发表的命令和谈话.html"},{url:"056-打退第二次反共高潮后的时局.html"},{url:"057-关于打退第二次反共高潮的总结.html"}]},{title:"第三卷 抗日战争时期（下）",sections:[{url:"058-《农村调查》的序言和跋.html"},{url:"059-改造我们的学习.html"},{url:"060-揭破远东慕尼黑的阴谋.html"},{url:"061-关于反法西斯的国际统一战线.html"},{url:"062-在陕甘宁边区参议会的演说.html"},{url:"063-整顿党的作风.html"},{url:"064-反对党八股.html"},{url:"065-在延安文艺座谈会上的讲话.html"},{url:"066-一个极其重要的政策.html"},{url:"067-第二次世界大战的转折点.html"},{url:"068-祝十月革命二十五周年.html"},{url:"069-抗日时期的经济问题和财政问题.html"},{url:"070-关于领导方法的若干问题.html"},{url:"071-质问国民党.html"},{url:"072-开展根据地的减租、生产和拥政爱民运动.html"},{url:"073-评国民党十一中全会和三届二次国民参政会.html"},{url:"074-组织起来.html"},{url:"075-学习和时局.html"},{url:"076-为人民服务.html"},{url:"077-评蒋介石在双十节的演说.html"},{url:"078-文化工作中的统一战线.html"},{url:"079-必须学会做经济工作.html"},{url:"080-游击区也能够进行生产.html"},{url:"081-两个中国之命运.html"},{url:"082-论联合政府.html"},{url:"083-愚公移山.html"},{url:"084-论军队生产自给，兼论整风和生产两大运动的重要性.html"},{url:"085-赫尔利和蒋介石的双簧已经破产.html"},{url:"086-评赫尔利政策的危险.html"},{url:"087-给福斯特同志的电报.html"},{url:"088-对日寇的最后一战.html"}]},{title:"第四卷 第三次国内革命战争时期",sections:[{url:"089-抗日战争胜利后的时局和我们的方针.html"},{url:"090-蒋介石在挑动内战.html"},{url:"091-第十八集团军总司令给蒋介石的两个电报.html"},{url:"092-评蒋介石发言人谈话.html"},{url:"093-中共中央关于同国民党进行和平谈判的通知.html"},{url:"094-关于重庆谈判.html"},{url:"095-国民党进攻的真相.html"},{url:"096-减租和生产是保卫解放区的两件大事.html"},{url:"097-一九四六年解放区工作的方针.html"},{url:"098-建立巩固的东北根据地.html"},{url:"099-关于目前国际形势的几点估计.html"},{url:"100-以自卫战争粉碎蒋介石的进攻.html"},{url:"101-和美国记者安娜·路易斯·斯特朗的谈话.html"},{url:"102-集中优势兵力，各个歼灭敌人.html"},{url:"103-美国“调解”真相和中国内战前途.html"},{url:"104-三个月总结.html"},{url:"105-迎接中国革命的新高潮.html"},{url:"106-中共中央关于暂时放弃延安和保卫陕甘宁边区的两个文件.html"},{url:"107-关于西北战场的作战方针.html"},{url:"108-蒋介石政府已处在全民的包围中.html"},{url:"109-解放战争第二年的战略方针.html"},{url:"110-中国人民解放军宣言.html"},{url:"111-中国人民解放军总部关于重行颁布三大纪律八项注意的训令.html"},{url:"112-目前形势和我们的任务.html"},{url:"113-关于建立报告制度.html"},{url:"114-关于目前党的政策中的几个重要问题.html"},{url:"115-军队内部的民主运动.html"},{url:"116-在不同地区实施土地法的不同策略.html"},{url:"117-纠正土地改革宣传中的“左”倾错误.html"},{url:"118-新解放区土地改革要点.html"},{url:"119-关于工商业政策.html"},{url:"120-关于民族资产阶级和开明绅士问题.html"},{url:"121-评西北大捷兼论解放军的新式整军运动.html"},{url:"122-关于情况的通报.html"},{url:"123-在晋绥干部会议上的讲话.html"},{url:"124-对晋绥日报编辑人员的谈话.html"},{url:"125-再克洛阳后给洛阳前线指挥部的电报.html"},{url:"126-新解放区农村工作的策略问题.html"},{url:"127-一九四八年的土地改革工作和整党工作.html"},{url:"128-关于辽沈战役的作战方针.html"},{url:"129-关于健全党委制.html"},{url:"130-中共中央关于九月会议的通知.html"},{url:"131-关于淮海战役的的作战方针.html"},{url:"132-全世界革命力量团结起来，反对帝国主义的侵略.html"},{url:"133-中国军事形势的重大变化.html"},{url:"134-关于平津战役的作战方针.html"},{url:"135-敦促杜聿明等投降书.html"},{url:"136-将革命进行到底.html"},{url:"137-评战犯求和.html"},{url:"138-中共中央毛泽东主席关于时局的声明.html"},{url:"139-中共发言人评南京行政院的决议.html"},{url:"140-中共发言人关于命令国民党反动政府重新逮捕前日本侵华军总司令冈村宁次和逮捕国民党内战罪犯的谈话.html"},{url:"141-中共发言人关于和平条件必须包括惩办日本战犯和国民党战犯的声明.html"},{url:"142-把军队变为工作队.html"},{url:"143-四分五裂的反动派为什么还要空喊“全面和平”？.html"},{url:"144-国民党反动派由“呼吁和平”变为呼吁战争.html"},{url:"145-评国民党对战争责任问题的几种答案.html"},{url:"146-在中国共产党第七届中央委员会第二次全体会议上的报告.html"},{url:"147-党委会的工作方法.html"},{url:"148-南京政府向何处去？.html"},{url:"149-向全国进军的命令.html"},{url:"150-中国人民解放军布告.html"},{url:"151-中国人民解放军总部发言人为英国军舰暴行发表的声明.html"},{url:"152-在新政治协商会议筹备会上的讲话.html"},{url:"153-论人民民主专政--纪念中国共产党二十八周年.html"},{url:"154-丢掉幻想，准备斗争.html"},{url:"155-别了，司徒雷登.html"},{url:"156-“友谊”，还是侵略？.html"},{url:"157-为什么要讨论白皮书？.html"},{url:"158-唯心历史观的破产.html"}]},{title:"第五卷 中国人民站起来了",sections:[{url:"159-中国人民站起来了.html"},{url:"160-中国人民大团结万岁.html"},{url:"161-人民英雄们永垂不朽.html"},{url:"162-永远保持艰苦奋斗的作风.html"},{url:"163-征询对待富农策略问题的意见.html"},{url:"164-为争取国家财政经济状况的基本好转而斗争.html"},{url:"165-不要四面出击.html"},{url:"166-做一个完全的革命派.html"},{url:"167-你们是全民族的模范人物.html"},{url:"168-给中国人民志愿军的命令.html"},{url:"169-中国人民志愿军要爱护朝鲜的一山一水一草一木.html"},{url:"170-中共中央政治局扩大会议决议要点.html"},{url:"171-镇压反革命必须实行党的群众路线.html"},{url:"172-镇压反革命必须打得稳，打得准，打得狠.html"},{url:"173-应当重视电影《武训传》的讨论.html"},{url:"174-三大运动的伟大胜利.html"},{url:"175-关于“三反”、“五反”的斗争.html"},{url:"176-把农业互助合作当作一件大事去做.html"},{url:"177-元旦祝词.html"},{url:"178-中共中央关于西藏工作方针的指示.html"},{url:"179-工人阶级与资产阶级的矛盾是国内的主要矛盾.html"},{url:"180-团结起来，划清敌我界限.html"},{url:"181-祝贺中国人民志愿军的重大胜利.html"},{url:"182-反对官僚主义、命令主义和违法乱纪.html"},{url:"183-批判大汉族主义.html"},{url:"184-解决“五多”问题.html"},{url:"185-对刘少奇、杨尚昆破坏纪律擅自以中央名义发出文件的批评.html"},{url:"186-批判离开总路线的右倾观点.html"},{url:"187-青年团的工作要照顾青年的特点.html"},{url:"188-关于国家资本主义.html"},{url:"189-党在过渡时期的总路线.html"},{url:"190-反对党内的资产阶级思想.html"},{url:"191-改造资本主义工商业的必经之路.html"},{url:"192-抗美援朝的伟大胜利和今后的任务.html"},{url:"193-批判梁漱溟的反动思想.html"},{url:"194-关于农业互助合作的两次谈话.html"},{url:"195-关于中华人民共和国宪法草案.html"},{url:"196-为建设一个伟大的社会主义国家而奋斗.html"},{url:"197-关于《红楼梦》研究问题的信.html"},{url:"198-原子弹吓不倒中国人民.html"},{url:"199-在中国共产党全国代表会议上的讲话.html"},{url:"200-驳“舆论一律”.html"},{url:"201-《关于胡风反革命集团的材料》的序言和按语.html"},{url:"202-关于农业合作化问题.html"},{url:"203-农业合作化必须依靠党团员和贫农下中农.html"},{url:"204-农业合作化的一场辩论和当前的阶级斗争.html"},{url:"205-《中国农村的社会主义高潮》的序言.html"},{url:"206-《中国农村的社会主义高潮》的按语.html"},{url:"207-征询对农业十七条的意见.html"},{url:"208-加快手工业的社会主义改造.html"},{url:"209-论十大关系.html"},{url:"210-美帝国主义是纸老虎.html"},{url:"211-增强党的团结，继承党的传统.html"},{url:"212-我们党的—些历史经验.html"},{url:"213-纪念孙中山先生.html"},{url:"214-在中国共产党第八届中央委员会第二次全体会议上的讲话.html"},{url:"215-在省市自治区党委书记会议上的讲话.html"},{url:"216-关于正确处理人民内部矛盾的问题.html"},{url:"217-在中国共产党全国宣传工作会议上的讲话.html"},{url:"218-坚持艰苦奋斗，密切联系群众.html"},{url:"219-事情正在起变化.html"},{url:"220-中国共产党是全中国人民的领导核心.html"},{url:"221-组织力量反击右派分子的猖狂进攻.html"},{url:"222-文汇报的资产阶级方向应当批判.html"},{url:"223-打退资产阶级右派的进攻.html"},{url:"224-一九五七年夏季的形势.html"},{url:"225-做革命的促进派.html"},{url:"226-坚定地相信群众的大多数.html"},{url:"227-党内团结的辩证方法.html"},{url:"228-一切反动派都是纸老虎.html"}]}];

  var THEME_DATA = {
    blue:   { name: '天空蓝', color: '#3f7fe0' },
    green:  { name: '护眼绿', color: '#4a8f5a' },
    orange: { name: '暖橙',   color: '#c07d33' },
    purple: { name: '雅紫',   color: '#7a5cd6' },
    rose:   { name: '玫瑰',   color: '#cf5a72' },
    gray:   { name: '经典灰', color: '#5b6470' }
  };
  var THEME_KEYS = ['blue', 'green', 'orange', 'purple', 'rose', 'gray'];
  var FONT_SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

  /* ---------- 存储（兼容 file:// / 隐私模式） ---------- */

  var safeStorage = (function () {
    var mem = {}, ok = false;
    try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); ok = true; } catch (e) {}
    return {
      get: function (k) {
        try { return ok ? localStorage.getItem(k) : (mem[k] == null ? null : mem[k]); }
        catch (e) { return mem[k] == null ? null : mem[k]; }
      },
      set: function (k, v) {
        try { if (ok) localStorage.setItem(k, v); else mem[k] = v; } catch (e) { mem[k] = v; }
      }
    };
  })();

  /* ---------- 状态 ---------- */

  var state = {
    theme: safeStorage.get('book-theme') || 'blue',
    dark: safeStorage.get('book-dark') === 'true',
    font: safeStorage.get('book-font') || 'sans',
    size: parseInt(safeStorage.get('book-size'), 10) || 17,
    width: safeStorage.get('book-width') || 'medium',
    navHidden: safeStorage.get('book-nav-hidden') === 'true',
    immersive: false
  };
  if (THEME_KEYS.indexOf(state.theme) === -1) state.theme = 'blue';
  if (FONT_SIZES.indexOf(state.size) === -1) state.size = 17;

  function $(sel, root) { return (root || document).querySelector(sel); }

  /* ---------- 主题 ---------- */

  function applyTheme() {
    var attr = state.dark ? state.theme + '-dark' : state.theme;
    document.documentElement.setAttribute('data-theme', attr);
    safeStorage.set('book-theme', state.theme);
    safeStorage.set('book-dark', state.dark ? 'true' : 'false');
    syncThemeUI();
  }

  function syncThemeUI() {
    var dots = document.querySelectorAll('.theme-dot');
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', dots[i].getAttribute('data-theme') === state.theme);
    }
    var dt = $('.dark-toggle');
    if (dt) dt.textContent = state.dark ? '☀ 浅色' : '🌙 深色';
    var tb = $('#btnDark');
    if (tb) { tb.textContent = state.dark ? '☀' : '🌙'; tb.title = state.dark ? '切换浅色' : '切换深色'; }
  }

  function setTheme(key) { state.theme = key; applyTheme(); }
  function toggleDark() { state.dark = !state.dark; applyTheme(); }
  function cycleThemeNext() {
    var i = THEME_KEYS.indexOf(state.theme);
    setTheme(THEME_KEYS[(i + 1) % THEME_KEYS.length]);
  }

  /* ---------- 阅读设置 ---------- */

  function applyReading() {
    var r = document.documentElement;
    r.style.setProperty('--reading-size', state.size + 'px');
    r.setAttribute('data-font', state.font);
    r.setAttribute('data-width', state.width);
    safeStorage.set('book-size', String(state.size));
    safeStorage.set('book-font', state.font);
    safeStorage.set('book-width', state.width);
    syncReaderUI();
  }

  function adjustFont(delta) {
    var i = FONT_SIZES.indexOf(state.size);
    if (i === -1) i = FONT_SIZES.indexOf(17);
    i = Math.max(0, Math.min(FONT_SIZES.length - 1, i + delta));
    state.size = FONT_SIZES[i];
    applyReading();
  }

  function syncReaderUI() {
    var pop = $('#readerPop');
    if (!pop) return;
    var segs = pop.querySelectorAll('[data-set]');
    for (var i = 0; i < segs.length; i++) {
      var el = segs[i];
      var kind = el.getAttribute('data-set');
      var val = el.getAttribute('data-val');
      var on = (kind === 'font' && val === state.font)
            || (kind === 'width' && val === state.width)
            || (kind === 'size' && parseInt(val, 10) === state.size);
      el.classList.toggle('active', on);
    }
  }

  function toggleReaderPop(force) {
    var pop = $('#readerPop');
    if (!pop) return;
    var open = typeof force === 'boolean' ? force : !pop.classList.contains('open');
    pop.classList.toggle('open', open);
    var btn = $('#btnReader');
    if (btn) btn.classList.toggle('on', open);
  }

  function buildReaderPop() {
    var topbar = $('.topbar');
    if (!topbar || $('#readerPop')) return;
    var pop = document.createElement('div');
    pop.className = 'reader-pop';
    pop.id = 'readerPop';
    pop.innerHTML =
      '<div class="pop-row"><span class="pop-label">字体</span>' +
      '<div class="pop-seg">' +
      '<button data-set="font" data-val="sans">黑体 Sans</button>' +
      '<button data-set="font" data-val="serif">宋体 Serif</button>' +
      '</div></div>' +
      '<div class="pop-row"><span class="pop-label">版心宽度</span>' +
      '<div class="pop-seg">' +
      '<button data-set="width" data-val="narrow">窄</button>' +
      '<button data-set="width" data-val="medium">中</button>' +
      '<button data-set="width" data-val="wide">宽</button>' +
      '</div></div>' +
      '<div class="pop-row"><span class="pop-label">字号</span>' +
      '<div class="pop-seg">' +
      '<button data-set="size" data-val="15">小</button>' +
      '<button data-set="size" data-val="16">偏小</button>' +
      '<button data-set="size" data-val="17">标准</button>' +
      '<button data-set="size" data-val="18">大</button>' +
      '<button data-set="size" data-val="20">特大</button>' +
      '</div></div>';
    topbar.appendChild(pop);

    pop.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-set]');
      if (!b) return;
      var kind = b.getAttribute('data-set'), val = b.getAttribute('data-val');
      if (kind === 'font') state.font = val;
      else if (kind === 'width') state.width = val;
      else if (kind === 'size') state.size = parseInt(val, 10);
      applyReading();
    });

    document.addEventListener('click', function (e) {
      if (!pop.classList.contains('open')) return;
      if (pop.contains(e.target)) return;
      var btn = $('#btnReader');
      if (btn && btn.contains(e.target)) return;
      toggleReaderPop(false);
    });
  }

  /* ---------- 侧栏 ---------- */

  function isMobile() { return window.innerWidth <= 980; }
  var _lastMobile = isMobile();

  function toggleSidebar() {
    var sb = $('#sidebar'), ov = $('#overlay');
    if (!sb) return;
    if (isMobile()) {
      var open = sb.classList.toggle('open');
      if (ov) ov.classList.toggle('open', open);
    } else {
      toggleSidebarCollapse();
    }
  }

  function toggleSidebarCollapse() {
    state.navHidden = !state.navHidden;
    document.body.classList.toggle('nav-hidden', state.navHidden);
    safeStorage.set('book-nav-hidden', state.navHidden ? 'true' : 'false');
    syncIconUI();
  }

  function closeDrawer() {
    var sb = $('#sidebar'), ov = $('#overlay');
    if (sb) sb.classList.remove('open');
    if (ov) ov.classList.remove('open');
  }

  function syncIconUI() {
    var mb = $('#btnMenu');
    if (mb) mb.classList.toggle('on', !isMobile() && state.navHidden === false);
    var fb = $('#btnFull');
    if (fb) fb.classList.toggle('on', state.immersive);
  }

  /* ---------- 沉浸全屏 ---------- */

  function enterImmersive() {
    state.immersive = true;
    document.body.classList.add('immersive');
    closeDrawer();
    syncIconUI();
    var el = document.documentElement;
    if (el.requestFullscreen) { try { el.requestFullscreen().catch(function () {}); } catch (e) {} }
  }

  function exitImmersive() {
    state.immersive = false;
    document.body.classList.remove('immersive');
    syncIconUI();
    if (document.fullscreenElement && document.exitFullscreen) {
      try { document.exitFullscreen().catch(function () {}); } catch (e) {}
    }
  }

  function toggleFullscreen() {
    if (state.immersive) exitImmersive(); else enterImmersive();
  }

  function buildImmersiveBar() {
    if ($('#immersiveBar')) return;
    var bar = document.createElement('div');
    bar.className = 'immersive-bar';
    bar.id = 'immersiveBar';
    bar.innerHTML =
      '<button class="icon-btn" onclick="adjustFont(-1)" title="减小字号">A−</button>' +
      '<button class="icon-btn" onclick="adjustFont(1)" title="增大字号">A+</button>' +
      '<button class="icon-btn" onclick="cycleThemeNext()" title="切换配色">◐</button>' +
      '<button class="icon-btn" onclick="toggleDark()" title="亮/暗">🌙</button>' +
      '<button class="icon-btn" onclick="toggleFullscreen()" title="退出全屏阅读 (Esc)">⤢</button>';
    document.body.appendChild(bar);
  }

  /* ---------- 侧栏目录 ---------- */

  // 章节显示名：直接取文件名去掉 .html（与 index.html 目录保持一致，含 000- 编号）
  function titleFromUrl(url) {
    return String(url).replace(/\.html$/i, '');
  }

  function renderNav() {
    var nav = $('#sidebarNav');
    if (!nav) return;
    var data = window.NAV_DATA || [];
    var current = 'index.html';
    try { current = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html'; } catch (e) {}
    var html = '';
    data.forEach(function (group) {
      html += '<div class="nav-group">';
      if (group.title) html += '<div class="nav-group-title">' + group.title + '</div>';
      (group.sections || []).forEach(function (s) {
        if (s.sub) {
          html += '<div class="nav-subtitle">' + s.sub + '</div>';
          return;
        }
        var url = s.url;
        var match = false;
        try { match = decodeURIComponent(url) === current; } catch (e) { match = url === current; }
        html += '<a href="' + url + '" class="nav-link' + (match ? ' active' : '') + '">' +
                (s.title || titleFromUrl(url)) + '</a>';
      });
      html += '</div>';
    });
    nav.innerHTML = html;

    // 让当前章节在目录中居中可见
    var act = nav.querySelector('.nav-link.active');
    if (act) {
      var target = act.offsetTop - nav.clientHeight / 2;
      nav.scrollTop = Math.max(0, target);
    }
  }

  /* ---------- 主题色板 ---------- */

  function renderThemePanel() {
    var panel = $('#themePanel');
    if (!panel) return;
    panel.innerHTML = '';
    THEME_KEYS.forEach(function (key) {
      var t = THEME_DATA[key];
      var btn = document.createElement('button');
      btn.className = 'theme-dot' + (key === state.theme ? ' active' : '');
      btn.setAttribute('data-theme', key);
      btn.setAttribute('title', t.name);
      btn.setAttribute('aria-label', t.name);
      btn.style.setProperty('--dot', t.color);
      var tip = document.createElement('span');
      tip.className = 'tooltip';
      tip.textContent = t.name;
      btn.appendChild(tip);
      btn.addEventListener('click', function () { setTheme(key); });
      panel.appendChild(btn);
    });

    var dark = document.createElement('button');
    dark.className = 'dark-toggle';
    dark.textContent = state.dark ? '☀ 浅色' : '🌙 深色';
    dark.addEventListener('click', toggleDark);
    panel.appendChild(dark);
  }

  /* ---------- 进度条 / 回到顶部 ---------- */

  function initProgress() {
    var bar = $('.progress-bar');
    var btn = $('.back-to-top');
    if (btn) {
      btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }
    function onScroll() {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, top / h) : 0) + ')';
      if (btn) btn.classList.toggle('visible', top > 420);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 滚动揭示 ---------- */

  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var nodes = document.querySelectorAll(
      '.content > h2, .content > h3, .content > blockquote, .content > table, ' +
      '.content > pre, .content > hr, .chapter-card, .hero-section'
    );
    if (!nodes.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.classList.add('reveal');
      io.observe(n);
    }
  }

  /* ---------- 键盘快捷键 ---------- */

  function initKeys() {
    document.addEventListener('keydown', function (e) {
      var tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'b' || e.key === 'B') { e.preventDefault(); toggleSidebar(); }
        return;
      }
      if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFullscreen(); return; }
      if (e.key === 'Escape') { if (state.immersive) exitImmersive(); return; }
      if (e.key === '+' || e.key === '=') { e.preventDefault(); adjustFont(1); return; }
      if (e.key === '-' || e.key === '_') { e.preventDefault(); adjustFont(-1); return; }
      if (e.key === 'ArrowLeft') {
        var p = $('.nav-btn.prev');
        if (p && p.href) window.location.href = p.href;
      }
      if (e.key === 'ArrowRight') {
        var n = $('.nav-btn.next');
        if (n && n.href) window.location.href = n.href;
      }
    });
  }

  /* ---------- 初始化 ---------- */

  function init() {
    if (!document.body) { document.addEventListener('DOMContentLoaded', init); return; }

    applyTheme();
    applyReading();
    renderThemePanel();
    renderNav();
    buildReaderPop();
    buildImmersiveBar();

    if (state.navHidden && !isMobile()) document.body.classList.add('nav-hidden');

    initProgress();
    initReveal();
    initKeys();

    var ov = $('#overlay');
    if (ov) ov.addEventListener('click', closeDrawer);

    // 视口跨断点时清理抽屉状态
    window.addEventListener('resize', function () {
      var m = isMobile();
      if (m !== _lastMobile) {
        _lastMobile = m;
        closeDrawer();
        if (!m) document.body.classList.toggle('nav-hidden', state.navHidden);
        else document.body.classList.remove('nav-hidden');
        syncIconUI();
      }
    });

    document.addEventListener('fullscreenchange', function () {
      if (!document.fullscreenElement && state.immersive) {
        state.immersive = false;
        document.body.classList.remove('immersive');
        syncIconUI();
      }
    });

    syncIconUI();
  }

  /* ---------- 对外暴露（供内联 onclick 调用） ---------- */

  window.toggleSidebar = toggleSidebar;
  window.toggleSidebarCollapse = toggleSidebarCollapse;
  window.toggleFullscreen = toggleFullscreen;
  window.exitImmersive = exitImmersive;
  window.toggleReaderPop = toggleReaderPop;
  window.adjustFont = adjustFont;
  window.cycleThemeNext = cycleThemeNext;
  window.toggleDark = toggleDark;
  window.setTheme = setTheme;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
