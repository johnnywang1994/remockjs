const CH_POOL = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()[]',
  chinese: '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严',
  'chinese-tradition': '的一是在不了有和人這中大為上個國我以要他時來用們生到作地於出就分對成會可主發年動同工也能下過子說產種面而方後多定行學法所民得經十三之進著等部度家電力裡如水化高自二理起小物現實加量都兩體制機當使點從業本去把性好應開它合還因由其些然前外天政四日那社義事平形相全表間樣與關各重新線內數正心反你明看原又麼利比或但質氣第向道命此變條只沒結解問意建月公無系軍很情者最立代想已通並提直題黨程展五果料象員革位入常文總次品式活設及管特件長求老頭基資邊流路級少圖山統接知較將組見計別她手角期根論運農指幾九區強放決西被幹做必戰先回則任取據處隊南給色光門即保治北造百規熱領七海口東導器壓志世金增爭濟階油思術極交受聯什認六共權收證改清己美再採轉更單風切打白教速花帶安場身車例真務具萬每目至達走積示議聲報鬥完類八離華名確才科張信馬節話米整空元況今集溫傳土許步群廣石記需段研界拉林律叫且究觀越織裝影算低持音眾書布复容兒須際商非驗連斷深難近礦千週委素技備半辦青省列習響約支般史感勞便團往酸歷市克何除消構府稱太準精值號率族維劃選標寫存候毛親快效斯院查江型眼王按格養易置派層片始卻專狀育廠京識適屬圓包火住調滿縣局照參紅細引聽該鐵價嚴',
  hiragana: 'あいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわをん',
  katakana: 'アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヲン',
  korea: 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ',
  get en() {
    return this.lower + this.upper;
  },
  get ch() {
    return this.chinese;
  },
  get tw() {
    return this['chinese-tradition'];
  },
  get jp() {
    return this.hiragana + this.katakana;
  },
  get kr() {
    return this.korea;
  },
  get alpha() {
    return this.lower + this.upper;
  },
  get default() {
    return this.lower + this.upper + this.number + this.symbol;
  },
};

function boolean() {
  return Math.random() > 0.5;
}

function natural(min, max) {
  if (max) {
    max = parseInt(max || 9007199254740992, 10); // 2^53
    min = parseInt(min, 10);
  } else {
    max = parseInt(min, 10);
    min = 0;
  }
  return Math.round(Math.random() * (max - min)) + min;
}

function integer(min, max) {
  if (max) {
    max = parseInt(max || 9007199254740992, 10); // 2^53
    min = parseInt(min, 10);
  } else {
    max = parseInt(min, 10);
    min = -9007199254740992;
  }
  return Math.round(Math.random() * (max - min)) + min;
}

function character(pool) {
  const type = pool || 'default';
  // multi pool
  if (Array.isArray(pool)) {
    pool = pool.reduce((total, part) => {
      return total + CH_POOL[part];
    }, '');
  }
  pool = CH_POOL[('' + type).toLowerCase()] || pool;
  return pool.charAt(natural(pool.length - 1));
}

function float(min, max, dmin, dmax) {
  dmin = dmin === undefined ? 0 : dmin;
  dmin = Math.max(Math.min(dmin, 17), 0);
  dmax = dmax === undefined ? 17 : dmax;
  dmax = Math.max(Math.min(dmax, 17), 0);
  let ret = Math.random() * (max - min) + min;
  let dcount = this.natural(dmin, dmax);
  if (dcount > 0) {
    let precision = 1;
    if (dcount > 1) {
      ret = parseFloat(ret.toFixed(dcount - 1) + this.character('123456789'));
      precision = dcount;
    }
    // fixed by "pixcai"
    if (parseFloat(ret.toFixed(precision)) > max) {
      if (max.toString().indexOf('.') === -1) {
        max = max - 1 / (precision * 10);
      }
      ret = max.toFixed(precision + 1).slice(0, -1);
    }
  }
  return parseFloat(ret);
}

function string(pool, min, max) {
  let len;
  let text = '';
  // multi pool
  if (Array.isArray(pool)) {
    pool = pool.reduce((total, part) => {
      return total + CH_POOL[part];
    }, '');
  }
  const paramsMap = {
    0: () => {
      len = natural(3, 7);
    },
    1: () => {
      if (typeof pool === 'string') {
        len = natural(3, 7);
      } else {
        len = pool;
        pool = undefined;
      }
    },
    2: () => {
      if (typeof pool === 'string') {
        len = min;
      } else {
        // ( min, max )
        len = natural(pool, min);
        pool = undefined;
      }
    },
    3: () => {
      len = natural(min, max);
    },
  };
  paramsMap[arguments.length]();

  for (var i = 0; i < len; i++) {
    text += character(pool);
  }

  return text;
}

export default {
  boolean,
  natural,
  integer,
  character,
  float,
  string,
};
