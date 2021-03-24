import Utils from './utils';

const { pick } = Utils;

const EN_FIRST = [
  // male
  'James', 'John', 'Robert', 'Michael', 'William',
  'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
  'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald',
  'George', 'Kenneth', 'Steven', 'Edward', 'Brian',
  'Ronald', 'Anthony', 'Kevin', 'Jason', 'Matthew',
  'Gary', 'Timothy', 'Jose', 'Larry', 'Jeffrey',
  'Frank', 'Scott', 'Eric'
].concat([
  // female
  'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth',
  'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy',
  'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen',
  'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon',
  'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah',
  'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa',
  'Brenda', 'Amy', 'Anna'
]);

const EN_LAST = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
  'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
  'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez',
  'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
  'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark',
  'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
  'Young', 'Allen'
];

const CHINESE_FIRST = '王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文'.split(' ');

const CHINESE_T_FIRST = '王 李 張 劉 陳 楊 趙 黃 周 吳 徐 孫 胡 朱 高 林 何 郭 馬 羅 梁 宋 鄭 謝 韓 唐 馮 於 董 蕭 程 曹 袁 鄧 許 傅 沈 曾 彭 呂 蘇 盧 蔣 蔡 賈 丁 魏 薛 葉 閻 餘 潘 杜 戴 夏 鍾 汪 田 任 姜 範 方 石 姚 譚 廖 鄒 熊 金 陸 郝 孔 白 崔 康 毛 邱 秦 江 史 顧 侯 邵 孟 龍 萬 段 雷 錢 湯 尹 黎 易 常 武 喬 賀 賴 龔 文'.split(' ');

const CHINESE_LAST = '怡君 欣怡 雅雯 心怡 志豪 雅婷 雅惠 家豪 雅玲 静怡 志伟 俊宏 建宏 佩君 怡婷 淑芬 静宜 俊杰 怡如 家铭 佳玲 慧君 怡伶 雅芳 宗翰 志宏 淑娟 信宏 志强 淑婷'.split(' ');

const CHINESE_T_LAST = '怡君 欣怡 雅雯 心怡 志豪 雅婷 雅惠 家豪 雅玲 靜怡 志偉 俊宏 建宏 佩君 怡婷 淑芬 靜宜 俊傑 怡如 家銘 佳玲 慧君 怡伶 雅芳 宗翰 志宏 淑娟 信宏 志強 淑婷'.split(' ');

const JP_FIRST = '佐藤 安井 宮崎 後藤 松 北原 松島 三菱 日向 橋本 小林 鈴原 有森 黒田 原 服部 浜崎 村上 塚原 笠原 石川 佐々木 武田 遠藤 本多 鎌田 佐久間 木村 內藤 木下 福田 鬼塚'.split(' ');

const JP_LAST = '愛子 愛理 安曇 歩 杏子 乙女 花梨 久美子 小雪 冴 桜 早苗 詩織 園子 千夏 奈緒 大和 陽向 蓮 湊 悠真 龍之介 悠太郎 聡一郎 遼太郎 京之助 夕 与 孝 佑 遼 諒 潤 駿 謙 優'.split(' ');

const KR_FIRST = '김 이 박 최 장 임 윤 정 진 안 강 유 선우 황보 동방 남궁 서문 이연 숙민 지우 소영'.split(' ');

const KR_LAST = '서준 하준 도윤 시우 은우 지호 이준 예준 지안 하윤 서아 하은 서윤 하린 지우 아린'.split(' ');

const FIRST_MAP = {
  en: EN_FIRST,
  ch: CHINESE_FIRST,
  tw: CHINESE_T_FIRST,
  jp: JP_FIRST,
  kr: KR_FIRST,
};

const LAST_MAP = {
  en: EN_LAST,
  ch: CHINESE_LAST,
  tw: CHINESE_T_LAST,
  jp: JP_LAST,
  kr: KR_LAST,
};

function first(lang = 'en') {
  return pick(FIRST_MAP[lang]);
}

function last(lang = 'en') {
  return pick(LAST_MAP[lang]);
}

function name(lang = 'en', middle) {
  return first(lang) +
    (lang === 'en' ? ' ' : '') +
    ((lang === 'en' && middle) ? first(lang) + ' ' : '') +
    last(lang);
}

export default {
  first,
  last,
  name,
}
