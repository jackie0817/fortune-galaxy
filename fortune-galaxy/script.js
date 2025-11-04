// 简体中文脚本：抽牌并显示 图片 + 简介 + 宇宙讯息，含翻牌动画
const drawBtn = document.getElementById("draw-btn");
const resetBtn = document.getElementById("reset-btn");
const cardEl = document.getElementById("card");
const cardImage = document.getElementById("card-image");
const cardName = document.getElementById("card-name");
const cardIntro = document.getElementById("card-intro");
const cardMessage = document.getElementById("card-message");

// 卡牌列表（10 张），顺序对应 images/card1.jpg ... card10.jpg
const cards = [
  {
    name: "星际猎手",
    intro: "寂静星海中的追光者，擅长在暗流中寻得机遇。",
    message: "今天你适合主动出击：一小步的勇气，能点燃长远的轨迹。"
  },
  {
    name: "铃兰",
    intro: "洁白如雪的铃兰，带来疗愈与重启的气息。",
    message: "让自己休息一下，温柔地整理内心，新的灵感会悄然来临。"
  },
  {
    name: "半兽人",
    intro: "力量与温情交织的战士，直觉与本能并存。",
    message: "直觉是你的盟友。信任身体的回答，比过度分析更可靠。"
  },
  {
    name: "古人类歌者",
    intro: "从远古歌谣中传来的声音，记忆与智慧的守护者。",
    message: "倾听过去的经验，那里藏着解决现在问题的线索。"
  },
  {
    name: "人鱼",
    intro: "海潮与心事的织者，能在深处看到情感的纹路。",
    message: "情感的表达会让关系更清澈：一句真诚的话胜过千言万语。"
  },
  {
    name: "剑灵",
    intro: "锋利而纯粹的意志，切开迷雾，显现方向。",
    message: "当优先级清晰时，执行力会自然到来。先做最重要的事。"
  },
  {
    name: "机械水手",
    intro: "在钢铁与星尘之间航行，理性与效率的化身。",
    message: "整理信息、建立步骤表，将复杂任务拆解成可执行的小步。"
  },
  {
    name: "麦伦家族",
    intro: "家族与传统的像素化投影，温暖而复杂。",
    message: "与亲近的人保持小幅度的沟通，会避免误会并带来支持。"
  },
  {
    name: "星际玫瑰",
    intro: "在宇宙中绽放的玫瑰，象征热情与脆弱并存。",
    message: "表达你的热情，但也别忘了保护内心的柔软处。"
  },
  {
    name: "异体人·赛博恩",
    intro: "跨越肉体与代码的存在，既陌生又熟悉，带来变革的气息。",
    message: "今天适合尝试新的工具或方法；小小的技术改变可能带来意想不到的自由。"
  }
];

// 随机整数
function randInt(n) {
  return Math.floor(Math.random() * n);
}

// 抽牌逻辑
function drawCard() {
  // 禁止频繁点击
  drawBtn.disabled = true;
  drawBtn.textContent = "抽牌中…";

  // 添加翻牌动画（先把卡片翻起）
  cardEl.classList.remove("flipped");
  // 先做短暂的「翻起」效果，模拟翻牌过程
  setTimeout(() => {
    cardEl.classList.add("flipped");
  }, 50);

  // 在翻转到一半时（约 450ms）替换图片与文本
  setTimeout(() => {
    const idx = randInt(cards.length);
    const selected = cards[idx];

    // 图片路径按顺序对应（card1.jpg -> cards[0]）
    cardImage.src = `images/card${idx + 1}.jpeg`;
    cardImage.alt = selected.name;

    cardName.textContent = selected.name;
    cardIntro.textContent = selected.intro;
    cardMessage.textContent = selected.message;
  }, 450);

  // 最终解锁按钮（翻牌结束后）
  setTimeout(() => {
    drawBtn.disabled = false;
    drawBtn.textContent = "再次抽牌";
  }, 950);
}

// 重置（恢复初始提示）
function resetView() {
  cardEl.classList.remove("flipped");
  cardImage.src = "";
  cardImage.alt = "卡牌图片";
  cardName.textContent = "今日占卜";
  cardIntro.textContent = "点击「抽一张牌」，让宇宙为你揭示一条讯息。";
  cardMessage.textContent = "—— 星尘正等待你的指引 ——";
  drawBtn.textContent = "抽 一 张 牌";
}

// 绑定事件
drawBtn.addEventListener("click", drawCard);
resetBtn.addEventListener("click", resetView);

// 初次载入时保持提示
resetView();

