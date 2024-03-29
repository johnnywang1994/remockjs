(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReMock = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var CH_POOL = {
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
    }

  };

  function _boolean() {
    return Math.random() > 0.5;
  }

  function natural$4(min, max) {
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

  function character$1(pool) {
    var type = pool || 'default'; // multi pool

    if (Array.isArray(pool)) {
      pool = pool.reduce(function (total, part) {
        return total + CH_POOL[part];
      }, '');
    }

    pool = CH_POOL[('' + type).toLowerCase()] || pool;
    return pool.charAt(natural$4(pool.length - 1));
  }

  function _float(min, max, dmin, dmax) {
    dmin = dmin === undefined ? 0 : dmin;
    dmin = Math.max(Math.min(dmin, 17), 0);
    dmax = dmax === undefined ? 17 : dmax;
    dmax = Math.max(Math.min(dmax, 17), 0);
    var ret = Math.random() * (max - min) + min;
    var dcount = this.natural(dmin, dmax);

    if (dcount > 0) {
      var precision = 1;

      if (dcount > 1) {
        ret = parseFloat(ret.toFixed(dcount - 1) + this.character('123456789'));
        precision = dcount;
      } // fixed by "pixcai"


      if (parseFloat(ret.toFixed(precision)) > max) {
        if (max.toString().indexOf('.') === -1) {
          max = max - 1 / (precision * 10);
        }

        ret = max.toFixed(precision + 1).slice(0, -1);
      }
    }

    return parseFloat(ret);
  }

  function string$1(pool, min, max) {
    var len;
    var text = ''; // multi pool

    if (Array.isArray(pool)) {
      pool = pool.reduce(function (total, part) {
        return total + CH_POOL[part];
      }, '');
    }

    var paramsMap = {
      0: function _() {
        len = natural$4(3, 7);
      },
      1: function _() {
        if (typeof pool === 'string') {
          len = natural$4(3, 7);
        } else {
          len = pool;
          pool = undefined;
        }
      },
      2: function _() {
        if (typeof pool === 'string') {
          len = min;
        } else {
          // ( min, max )
          len = natural$4(pool, min);
          pool = undefined;
        }
      },
      3: function _() {
        len = natural$4(min, max);
      }
    };
    paramsMap[arguments.length]();

    for (var i = 0; i < len; i++) {
      text += character$1(pool);
    }

    return text;
  }

  var basicMap = {
    "boolean": _boolean,
    natural: natural$4,
    integer: integer,
    character: character$1,
    "float": _float,
    string: string$1
  };

  var patternLetters = {
    yyyy: 'getFullYear',
    yy: function yy(date) {
      return ('' + date.getFullYear()).slice(2);
    },
    MM: function MM(date) {
      var m = date.getMonth() + 1;
      return m < 10 ? '0' + m : m;
    },
    M: function M(date) {
      return date.getMonth() + 1;
    },
    dd: function dd(date) {
      var d = date.getDate();
      return d < 10 ? '0' + d : d;
    },
    d: 'getDate',
    HH: function HH(date) {
      var h = date.getHours();
      return h < 10 ? '0' + h : h;
    },
    H: 'getHours',
    hh: function hh(date) {
      var h = date.getHours() % 12;
      return h < 10 ? '0' + h : h;
    },
    h: function h(date) {
      return date.getHours() % 12;
    },
    mm: function mm(date) {
      var m = date.getMinutes();
      return m < 10 ? '0' + m : m;
    },
    m: 'getMinutes',
    ss: function ss(date) {
      var s = date.getSeconds();
      return s < 10 ? '0' + s : s;
    },
    s: 'getSeconds',
    SS: function SS(date) {
      var ms = date.getMilliseconds();
      return String(ms).padStart(3, 0);
    },
    S: 'getMilliseconds',
    A: function A(date) {
      return date.getHours() < 12 ? 'AM' : 'PM';
    },
    a: function a(date) {
      return date.getHours() < 12 ? 'am' : 'pm';
    },
    _T: 'getTime'
  };
  var unitMap = {
    year: function year(date) {
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    },
    month: function month(date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    },
    week: function week(date) {
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - date.getDay());
    },
    day: function day(date) {
      return date.setHours(0, 0, 0, 0);
    },
    hour: function hour(date) {
      return date.setMinutes(0, 0, 0);
    },
    minute: function minute(date) {
      return date.setSeconds(0, 0);
    },
    second: function second(date) {
      return date.setMilliseconds(0);
    },
    "default": function _default() {}
  };
  var rformat = new RegExp(function () {
    var re = [];

    for (var i in patternLetters) {
      re.push(i);
    }

    return '(' + re.join('|') + ')';
  }(), 'g');

  function formatDate(date, format) {
    return format.replace(rformat, function replaceDate($0, flag) {
      return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) : date[patternLetters[flag]]();
    });
  }

  function randomDate(min, max) {
    // min, max
    min = min === undefined ? new Date(0) : min;
    max = max === undefined ? new Date() : max;
    return new Date(Math.random() * (max.getTime() - min.getTime()));
  }

  function date$1(format, min, max) {
    format = format || 'yyyy-MM-dd';

    if (max === undefined) {
      max = min;
      min = undefined;
    }

    return formatDate(randomDate(min, max), format);
  }

  function time(format, min, max) {
    format = format || 'HH:mm:ss';

    if (max === undefined) {
      max = min;
      min = undefined;
    }

    return formatDate(randomDate(min, max), format);
  }

  function datetime(format, min, max) {
    format = format || 'yyyy-MM-dd HH:mm:ss';

    if (max === undefined) {
      max = min;
      min = undefined;
    }

    return formatDate(randomDate(min, max), format);
  }

  function now(unit, format) {
    // now(unit) now(format)
    if (arguments.length === 1) {
      // now(format)
      if (!/year|month|day|hour|minute|second|week/.test(unit)) {
        format = unit;
        unit = '';
      }
    }

    unit = (unit || 'default').toLowerCase();
    format = format || 'yyyy-MM-dd HH:mm:ss';
    var date = new Date();
    unitMap[unit](date);
    return formatDate(date, format);
  }

  var dateMap = {
    date: date$1,
    time: time,
    datetime: datetime,
    now: now
  };

  function image(size, background, foreground, format, text) {
    size = size || '100x100';
    background = background || '#000';
    foreground = foreground || '#fff';
    format = format || 'png';
    if (~background.indexOf('#')) background = background.slice(1);
    if (~foreground.indexOf('#')) foreground = foreground.slice(1); // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello

    return 'http://dummyimage.com/' + size + (background ? '/' + background : '') + (foreground ? '/' + foreground : '') + (format ? '.' + format : '') + (text ? '&text=' + text : '');
  }

  function pngimage(size, background, foreground, text) {
    return image(size, background, foreground, 'png', text);
  }

  function jpgimage(size, background, foreground, text) {
    return image(size, background, foreground, 'jpg', text);
  }

  function gifimage(size, background, foreground, text) {
    return image(size, background, foreground, 'gif', text);
  }

  var imageMap = {
    pngimage: pngimage,
    jpgimage: jpgimage,
    gifimage: gifimage,
    image: image
  };

  var Convert = {
    rgb2hsl: function rgb2hsl(rgb) {
      var r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,
          s,
          l;
      if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
      h = Math.min(h * 60, 360);
      if (h < 0) h += 360;
      l = (min + max) / 2;
      if (max == min) s = 0;else if (l <= 0.5) s = delta / (max + min);else s = delta / (2 - max - min);
      return [h, s * 100, l * 100];
    },
    rgb2hsv: function rgb2hsv(rgb) {
      var r = rgb[0],
          g = rgb[1],
          b = rgb[2],
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,
          s,
          v;
      if (max === 0) s = 0;else s = delta / max * 1000 / 10;
      if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
      h = Math.min(h * 60, 360);
      if (h < 0) h += 360;
      v = max / 255 * 1000 / 10;
      return [h, s, v];
    },
    hsl2rgb: function hsl2rgb(hsl) {
      var h = hsl[0] / 360,
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          t1,
          t2,
          t3,
          rgb,
          val;

      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }

      if (l < 0.5) t2 = l * (1 + s);else t2 = l + s - l * s;
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];

      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;
        if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;else if (2 * t3 < 1) val = t2;else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else val = t1;
        rgb[i] = val * 255;
      }

      return rgb;
    },
    hsl2hsv: function hsl2hsv(hsl) {
      var h = hsl[0],
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          sv,
          v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      v = (l + s) / 2;
      sv = 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    },
    hsv2rgb: function hsv2rgb(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v = 255 * v;

      switch (hi) {
        case 0:
          return [v, t, p];

        case 1:
          return [q, v, p];

        case 2:
          return [p, v, t];

        case 3:
          return [p, q, v];

        case 4:
          return [t, p, v];

        case 5:
          return [v, p, q];
      }
    },
    hsv2hsl: function hsv2hsl(hsv) {
      var h = hsv[0],
          s = hsv[1] / 100,
          v = hsv[2] / 100,
          sl,
          l;
      l = (2 - s) * v;
      sl = s * v;
      sl /= l <= 1 ? l : 2 - l;
      l /= 2;
      return [h, sl * 100, l * 100];
    },
    // http://www.140byt.es/keywords/color
    rgb2hex: function rgb2hex(a, // red, as a number from 0 to 255
    b, // green, as a number from 0 to 255
    c // blue, as a number from 0 to 255
    ) {
      return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1);
    },
    hex2rgb: function hex2rgb(a // take a "#xxxxxx" hex string,
    ) {
      a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
      return [a >> 16, a >> 8 & 255, a & 255];
    }
  };

  var goldenRatio = 0.618033988749895;
  var hue = Math.random(); // returns format "hsv"

  function goldenRatioColor(saturation, value) {
    hue += goldenRatio;
    hue %= 1;
    if (typeof saturation !== 'number') saturation = 0.5;
    if (typeof value !== 'number') value = 0.95;
    return [hue * 360, saturation * 100, value * 100];
  }

  function color() {
    return hex();
  } // #DAC0DE


  function hex() {
    var hsv = goldenRatioColor();
    var rgb = Convert.hsv2rgb(hsv);
    return Convert.rgb2hex(rgb[0], rgb[1], rgb[2]);
  } // rgb(128,255,255)


  function rgb() {
    var hsv = goldenRatioColor();
    var rgb = Convert.hsv2rgb(hsv);
    return 'rgb(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ')';
  } // rgba(128,255,255,0.3)


  function rgba() {
    var hsv = goldenRatioColor();
    var rgb = Convert.hsv2rgb(hsv);
    return 'rgba(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ', ' + Math.random().toFixed(2) + ')';
  } // hsl(300,80%,90%)


  function hsl() {
    var hsv = goldenRatioColor();
    var hsl = Convert.hsv2hsl(hsv);
    return 'hsl(' + parseInt(hsl[0], 10) + ', ' + parseInt(hsl[1], 10) + '%, ' + parseInt(hsl[2], 10) + '%)';
  }

  function hsv() {
    var hsv = goldenRatioColor();
    return 'hsv(' + parseInt(hsv[0], 10) + ', ' + parseInt(hsv[1], 10) + '%, ' + parseInt(hsv[2], 10) + '%)';
  }

  var colorMap = {
    color: color,
    hex: hex,
    rgb: rgb,
    rgba: rgba,
    hsl: hsl,
    hsv: hsv
  };

  var natural$3 = basicMap.natural;

  function capitalize$1(word) {
    return (word + '').charAt(0).toUpperCase() + (word + '').substr(1);
  }

  function range$1(defaultMin, defaultMax, min, max) {
    return min === undefined ? natural$3(defaultMin, defaultMax) : // ()
    max === undefined ? parseInt(min, 10) : // ( len )
    natural$3(min, max); // ( min, max )
  }

  function shuffle(arr, min, max) {
    arr = arr || [];
    var old = arr.slice(0);
    var result = [];
    var index = 0;

    while (old.length) {
      index = natural$3(0, old.length - 1);
      result.push(old[index]);
      old.splice(index, 1);
    }

    if (arguments.length < 2) return result;
    max = parseInt(max || min, 10);
    min = parseInt(min, 10);
    return result.slice(0, natural$3(min, max));
  }

  function pick$5(arr, min, max) {
    // pick( item1, item2 ... )
    if (!Array.isArray(arr)) {
      arr = [].slice.call(arguments);
      min = 1;
      max = 1;
    } else {
      // pick( [ item1, item2 ... ] )
      if (min === undefined) min = 1; // pick( [ item1, item2 ... ], count )

      if (max === undefined) max = min;
    }

    if (min === 1 && max === 1) return arr[natural$3(0, arr.length - 1)];
    return shuffle(arr, min, max);
  }

  function pickMap$1(setBox) {
    var rateMap = _toConsumableArray(setBox).reduce(function (total, item) {
      total.max += Number(item.rmin);
      total.map.set(item, total.max);
      return total;
    }, {
      max: 0,
      map: new Map()
    });

    var max = rateMap.max,
        map = rateMap.map;
    return function getRandomItem(fallback, cmax) {
      var count = Math.floor(Math.random() * (cmax || max));
      var target;

      var _iterator = _createForOfIteratorHelper(map),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              item = _step$value[0],
              limit = _step$value[1];

          if (count < limit) {
            target = item;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return target || fallback;
    };
  }

  var Utils$1 = {
    capitalize: capitalize$1,
    range: range$1,
    pick: pick$5,
    pickMap: pickMap$1
  };

  var character = basicMap.character;
  var capitalize = Utils$1.capitalize,
      range = Utils$1.range;

  function word$1(pool, min, max) {
    // (min, max)
    if (typeof pool === 'number') {
      max = min;
      min = pool;
      pool = '';
    }

    var len = range(3, 10, min, max);
    var result = '';

    for (var i = 0; i < len; i++) {
      result += character(pool || 'lower');
    }

    return result;
  }

  function sentence(pool, min, max) {
    // (min, max)
    if (typeof pool === 'number') {
      max = min;
      min = pool;
      pool = '';
    }

    var len = range(8, 14, min, max);
    var result = [];

    for (var i = 0; i < len; i++) {
      result.push(word$1(pool));
    }

    return capitalize(result.join(' ')) + '.';
  }

  function paragraph(pool, min, max) {
    // (min, max)
    if (typeof pool === 'number') {
      max = min;
      min = pool;
      pool = '';
    }

    var len = range(3, 7, min, max);
    var result = [];

    for (var i = 0; i < len; i++) {
      result.push(sentence(pool));
    }

    return result.join(' ');
  }

  function title(pool, min, max) {
    // (min, max)
    if (typeof pool === 'number') {
      max = min;
      min = pool;
      pool = '';
    }

    var len = range(3, 7, min, max);
    var result = [];

    for (var i = 0; i < len; i++) {
      result.push(capitalize(word$1(pool)));
    }

    return result.join(' ');
  }

  var textMap = {
    word: word$1,
    sentence: sentence,
    paragraph: paragraph,
    title: title
  };

  var pick$4 = Utils$1.pick;
  var EN_FIRST = [// male
  'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald', 'Anthony', 'Kevin', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Jose', 'Larry', 'Jeffrey', 'Frank', 'Scott', 'Eric'].concat([// female
  'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna']);
  var EN_LAST = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen'];
  var CHINESE_FIRST = '王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文'.split(' ');
  var CHINESE_T_FIRST = '王 李 張 劉 陳 楊 趙 黃 周 吳 徐 孫 胡 朱 高 林 何 郭 馬 羅 梁 宋 鄭 謝 韓 唐 馮 於 董 蕭 程 曹 袁 鄧 許 傅 沈 曾 彭 呂 蘇 盧 蔣 蔡 賈 丁 魏 薛 葉 閻 餘 潘 杜 戴 夏 鍾 汪 田 任 姜 範 方 石 姚 譚 廖 鄒 熊 金 陸 郝 孔 白 崔 康 毛 邱 秦 江 史 顧 侯 邵 孟 龍 萬 段 雷 錢 湯 尹 黎 易 常 武 喬 賀 賴 龔 文'.split(' ');
  var CHINESE_LAST = '怡君 欣怡 雅雯 心怡 志豪 雅婷 雅惠 家豪 雅玲 静怡 志伟 俊宏 建宏 佩君 怡婷 淑芬 静宜 俊杰 怡如 家铭 佳玲 慧君 怡伶 雅芳 宗翰 志宏 淑娟 信宏 志强 淑婷'.split(' ');
  var CHINESE_T_LAST = '怡君 欣怡 雅雯 心怡 志豪 雅婷 雅惠 家豪 雅玲 靜怡 志偉 俊宏 建宏 佩君 怡婷 淑芬 靜宜 俊傑 怡如 家銘 佳玲 慧君 怡伶 雅芳 宗翰 志宏 淑娟 信宏 志強 淑婷'.split(' ');
  var JP_FIRST = '佐藤 安井 宮崎 後藤 松 北原 松島 三菱 日向 橋本 小林 鈴原 有森 黒田 原 服部 浜崎 村上 塚原 笠原 石川 佐々木 武田 遠藤 本多 鎌田 佐久間 木村 內藤 木下 福田 鬼塚'.split(' ');
  var JP_LAST = '愛子 愛理 安曇 歩 杏子 乙女 花梨 久美子 小雪 冴 桜 早苗 詩織 園子 千夏 奈緒 大和 陽向 蓮 湊 悠真 龍之介 悠太郎 聡一郎 遼太郎 京之助 夕 与 孝 佑 遼 諒 潤 駿 謙 優'.split(' ');
  var KR_FIRST = '김 이 박 최 장 임 윤 정 진 안 강 유 선우 황보 동방 남궁 서문 이연 숙민 지우 소영'.split(' ');
  var KR_LAST = '서준 하준 도윤 시우 은우 지호 이준 예준 지안 하윤 서아 하은 서윤 하린 지우 아린'.split(' ');
  var FIRST_MAP = {
    en: EN_FIRST,
    ch: CHINESE_FIRST,
    tw: CHINESE_T_FIRST,
    jp: JP_FIRST,
    kr: KR_FIRST
  };
  var LAST_MAP = {
    en: EN_LAST,
    ch: CHINESE_LAST,
    tw: CHINESE_T_LAST,
    jp: JP_LAST,
    kr: KR_LAST
  };

  function first() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    return pick$4(FIRST_MAP[lang]);
  }

  function last() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    return pick$4(LAST_MAP[lang]);
  }

  function name() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    var middle = arguments.length > 1 ? arguments[1] : undefined;
    return first(lang) + (lang === 'en' ? ' ' : '') + (lang === 'en' && middle ? first(lang) + ' ' : '') + last(lang);
  }

  var nameMap = {
    first: first,
    last: last,
    name: name
  };

  var natural$2 = basicMap.natural;
  var word = textMap.word;
  var pick$3 = Utils$1.pick;

  function tld() {
    return pick$3(('com net org edu gov int mil cn tw ' + 'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' + 'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw').split(' '));
  }

  function domain(ctld) {
    return word() + '.' + (ctld || tld());
  }

  function protocol() {
    return pick$3('http https ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' '));
  }

  function url(protoc, host) {
    return (protoc || protocol()) + '://' + ( // protocol?
    host || domain()) + // host?
    '/' + word();
  }

  function email(cdomain, pool, min, max) {
    return word(pool, min, max) + '@' + (cdomain || domain());
  }

  function ip() {
    return natural$2(0, 255) + '.' + natural$2(0, 255) + '.' + natural$2(0, 255) + '.' + natural$2(0, 255);
  }

  var webMap = {
    domain: domain,
    protocol: protocol,
    url: url,
    email: email,
    ip: ip
  };

  var C_REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北'];
  /**
   * 中华人民共和国行政区划代码
   * 省级、地级、县级、乡级和村级
   * last updated - 2021/01/26
   * https://github.com/uiwjs/province-city-china/blob/gh-pages/level.json
   */

  var C_DICT = [{
    code: "110000",
    name: "北京市",
    province: "11",
    children: [{
      code: "110101",
      name: "东城区",
      province: "11",
      city: "01",
      area: "01"
    }, {
      code: "110102",
      name: "西城区",
      province: "11",
      city: "01",
      area: "02"
    }, {
      code: "110105",
      name: "朝阳区",
      province: "11",
      city: "01",
      area: "05"
    }, {
      code: "110106",
      name: "丰台区",
      province: "11",
      city: "01",
      area: "06"
    }, {
      code: "110107",
      name: "石景山区",
      province: "11",
      city: "01",
      area: "07"
    }, {
      code: "110108",
      name: "海淀区",
      province: "11",
      city: "01",
      area: "08"
    }, {
      code: "110109",
      name: "门头沟区",
      province: "11",
      city: "01",
      area: "09"
    }, {
      code: "110111",
      name: "房山区",
      province: "11",
      city: "01",
      area: "11"
    }, {
      code: "110112",
      name: "通州区",
      province: "11",
      city: "01",
      area: "12"
    }, {
      code: "110113",
      name: "顺义区",
      province: "11",
      city: "01",
      area: "13"
    }, {
      code: "110114",
      name: "昌平区",
      province: "11",
      city: "01",
      area: "14"
    }, {
      code: "110115",
      name: "大兴区",
      province: "11",
      city: "01",
      area: "15"
    }, {
      code: "110116",
      name: "怀柔区",
      province: "11",
      city: "01",
      area: "16"
    }, {
      code: "110117",
      name: "平谷区",
      province: "11",
      city: "01",
      area: "17"
    }, {
      code: "110118",
      name: "密云区",
      province: "11",
      city: "01",
      area: "18"
    }, {
      code: "110119",
      name: "延庆区",
      province: "11",
      city: "01",
      area: "19"
    }]
  }, {
    code: "120000",
    name: "天津市",
    province: "12",
    children: [{
      code: "120101",
      name: "和平区",
      province: "12",
      city: "01",
      area: "01"
    }, {
      code: "120102",
      name: "河东区",
      province: "12",
      city: "01",
      area: "02"
    }, {
      code: "120103",
      name: "河西区",
      province: "12",
      city: "01",
      area: "03"
    }, {
      code: "120104",
      name: "南开区",
      province: "12",
      city: "01",
      area: "04"
    }, {
      code: "120105",
      name: "河北区",
      province: "12",
      city: "01",
      area: "05"
    }, {
      code: "120106",
      name: "红桥区",
      province: "12",
      city: "01",
      area: "06"
    }, {
      code: "120110",
      name: "东丽区",
      province: "12",
      city: "01",
      area: "10"
    }, {
      code: "120111",
      name: "西青区",
      province: "12",
      city: "01",
      area: "11"
    }, {
      code: "120112",
      name: "津南区",
      province: "12",
      city: "01",
      area: "12"
    }, {
      code: "120113",
      name: "北辰区",
      province: "12",
      city: "01",
      area: "13"
    }, {
      code: "120114",
      name: "武清区",
      province: "12",
      city: "01",
      area: "14"
    }, {
      code: "120115",
      name: "宝坻区",
      province: "12",
      city: "01",
      area: "15"
    }, {
      code: "120116",
      name: "滨海新区",
      province: "12",
      city: "01",
      area: "16"
    }, {
      code: "120117",
      name: "宁河区",
      province: "12",
      city: "01",
      area: "17"
    }, {
      code: "120118",
      name: "静海区",
      province: "12",
      city: "01",
      area: "18"
    }, {
      code: "120119",
      name: "蓟州区",
      province: "12",
      city: "01",
      area: "19"
    }]
  }, {
    code: "130000",
    name: "河北省",
    province: "13",
    children: [{
      code: "130100",
      name: "石家庄市",
      province: "13",
      city: "01",
      children: [{
        code: "130102",
        name: "长安区",
        province: "13",
        city: "01",
        area: "02"
      }, {
        code: "130104",
        name: "桥西区",
        province: "13",
        city: "01",
        area: "04"
      }, {
        code: "130105",
        name: "新华区",
        province: "13",
        city: "01",
        area: "05"
      }, {
        code: "130107",
        name: "井陉矿区",
        province: "13",
        city: "01",
        area: "07"
      }, {
        code: "130108",
        name: "裕华区",
        province: "13",
        city: "01",
        area: "08"
      }, {
        code: "130109",
        name: "藁城区",
        province: "13",
        city: "01",
        area: "09"
      }, {
        code: "130110",
        name: "鹿泉区",
        province: "13",
        city: "01",
        area: "10"
      }, {
        code: "130111",
        name: "栾城区",
        province: "13",
        city: "01",
        area: "11"
      }, {
        code: "130121",
        name: "井陉县",
        province: "13",
        city: "01",
        area: "21"
      }, {
        code: "130123",
        name: "正定县",
        province: "13",
        city: "01",
        area: "23"
      }, {
        code: "130125",
        name: "行唐县",
        province: "13",
        city: "01",
        area: "25"
      }, {
        code: "130126",
        name: "灵寿县",
        province: "13",
        city: "01",
        area: "26"
      }, {
        code: "130127",
        name: "高邑县",
        province: "13",
        city: "01",
        area: "27"
      }, {
        code: "130128",
        name: "深泽县",
        province: "13",
        city: "01",
        area: "28"
      }, {
        code: "130129",
        name: "赞皇县",
        province: "13",
        city: "01",
        area: "29"
      }, {
        code: "130130",
        name: "无极县",
        province: "13",
        city: "01",
        area: "30"
      }, {
        code: "130131",
        name: "平山县",
        province: "13",
        city: "01",
        area: "31"
      }, {
        code: "130132",
        name: "元氏县",
        province: "13",
        city: "01",
        area: "32"
      }, {
        code: "130133",
        name: "赵县",
        province: "13",
        city: "01",
        area: "33"
      }, {
        code: "130181",
        name: "辛集市",
        province: "13",
        city: "01",
        area: "81"
      }, {
        code: "130183",
        name: "晋州市",
        province: "13",
        city: "01",
        area: "83"
      }, {
        code: "130184",
        name: "新乐市",
        province: "13",
        city: "01",
        area: "84"
      }]
    }, {
      code: "130200",
      name: "唐山市",
      province: "13",
      city: "02",
      children: [{
        code: "130202",
        name: "路南区",
        province: "13",
        city: "02",
        area: "02"
      }, {
        code: "130203",
        name: "路北区",
        province: "13",
        city: "02",
        area: "03"
      }, {
        code: "130204",
        name: "古冶区",
        province: "13",
        city: "02",
        area: "04"
      }, {
        code: "130205",
        name: "开平区",
        province: "13",
        city: "02",
        area: "05"
      }, {
        code: "130207",
        name: "丰南区",
        province: "13",
        city: "02",
        area: "07"
      }, {
        code: "130208",
        name: "丰润区",
        province: "13",
        city: "02",
        area: "08"
      }, {
        code: "130209",
        name: "曹妃甸区",
        province: "13",
        city: "02",
        area: "09"
      }, {
        code: "130224",
        name: "滦南县",
        province: "13",
        city: "02",
        area: "24"
      }, {
        code: "130225",
        name: "乐亭县",
        province: "13",
        city: "02",
        area: "25"
      }, {
        code: "130227",
        name: "迁西县",
        province: "13",
        city: "02",
        area: "27"
      }, {
        code: "130229",
        name: "玉田县",
        province: "13",
        city: "02",
        area: "29"
      }, {
        code: "130281",
        name: "遵化市",
        province: "13",
        city: "02",
        area: "81"
      }, {
        code: "130283",
        name: "迁安市",
        province: "13",
        city: "02",
        area: "83"
      }, {
        code: "130284",
        name: "滦州市",
        province: "13",
        city: "02",
        area: "84"
      }]
    }, {
      code: "130300",
      name: "秦皇岛市",
      province: "13",
      city: "03",
      children: [{
        code: "130302",
        name: "海港区",
        province: "13",
        city: "03",
        area: "02"
      }, {
        code: "130303",
        name: "山海关区",
        province: "13",
        city: "03",
        area: "03"
      }, {
        code: "130304",
        name: "北戴河区",
        province: "13",
        city: "03",
        area: "04"
      }, {
        code: "130306",
        name: "抚宁区",
        province: "13",
        city: "03",
        area: "06"
      }, {
        code: "130321",
        name: "青龙满族自治县",
        province: "13",
        city: "03",
        area: "21"
      }, {
        code: "130322",
        name: "昌黎县",
        province: "13",
        city: "03",
        area: "22"
      }, {
        code: "130324",
        name: "卢龙县",
        province: "13",
        city: "03",
        area: "24"
      }]
    }, {
      code: "130400",
      name: "邯郸市",
      province: "13",
      city: "04",
      children: [{
        code: "130402",
        name: "邯山区",
        province: "13",
        city: "04",
        area: "02"
      }, {
        code: "130403",
        name: "丛台区",
        province: "13",
        city: "04",
        area: "03"
      }, {
        code: "130404",
        name: "复兴区",
        province: "13",
        city: "04",
        area: "04"
      }, {
        code: "130406",
        name: "峰峰矿区",
        province: "13",
        city: "04",
        area: "06"
      }, {
        code: "130407",
        name: "肥乡区",
        province: "13",
        city: "04",
        area: "07"
      }, {
        code: "130408",
        name: "永年区",
        province: "13",
        city: "04",
        area: "08"
      }, {
        code: "130423",
        name: "临漳县",
        province: "13",
        city: "04",
        area: "23"
      }, {
        code: "130424",
        name: "成安县",
        province: "13",
        city: "04",
        area: "24"
      }, {
        code: "130425",
        name: "大名县",
        province: "13",
        city: "04",
        area: "25"
      }, {
        code: "130426",
        name: "涉县",
        province: "13",
        city: "04",
        area: "26"
      }, {
        code: "130427",
        name: "磁县",
        province: "13",
        city: "04",
        area: "27"
      }, {
        code: "130430",
        name: "邱县",
        province: "13",
        city: "04",
        area: "30"
      }, {
        code: "130431",
        name: "鸡泽县",
        province: "13",
        city: "04",
        area: "31"
      }, {
        code: "130432",
        name: "广平县",
        province: "13",
        city: "04",
        area: "32"
      }, {
        code: "130433",
        name: "馆陶县",
        province: "13",
        city: "04",
        area: "33"
      }, {
        code: "130434",
        name: "魏县",
        province: "13",
        city: "04",
        area: "34"
      }, {
        code: "130435",
        name: "曲周县",
        province: "13",
        city: "04",
        area: "35"
      }, {
        code: "130481",
        name: "武安市",
        province: "13",
        city: "04",
        area: "81"
      }]
    }, {
      code: "130500",
      name: "邢台市",
      province: "13",
      city: "05",
      children: [{
        code: "130502",
        name: "襄都区",
        province: "13",
        city: "05",
        area: "02"
      }, {
        code: "130503",
        name: "信都区",
        province: "13",
        city: "05",
        area: "03"
      }, {
        code: "130505",
        name: "任泽区",
        province: "13",
        city: "05",
        area: "05"
      }, {
        code: "130506",
        name: "南和区",
        province: "13",
        city: "05",
        area: "06"
      }, {
        code: "130522",
        name: "临城县",
        province: "13",
        city: "05",
        area: "22"
      }, {
        code: "130523",
        name: "内丘县",
        province: "13",
        city: "05",
        area: "23"
      }, {
        code: "130524",
        name: "柏乡县",
        province: "13",
        city: "05",
        area: "24"
      }, {
        code: "130525",
        name: "隆尧县",
        province: "13",
        city: "05",
        area: "25"
      }, {
        code: "130528",
        name: "宁晋县",
        province: "13",
        city: "05",
        area: "28"
      }, {
        code: "130529",
        name: "巨鹿县",
        province: "13",
        city: "05",
        area: "29"
      }, {
        code: "130530",
        name: "新河县",
        province: "13",
        city: "05",
        area: "30"
      }, {
        code: "130531",
        name: "广宗县",
        province: "13",
        city: "05",
        area: "31"
      }, {
        code: "130532",
        name: "平乡县",
        province: "13",
        city: "05",
        area: "32"
      }, {
        code: "130533",
        name: "威县",
        province: "13",
        city: "05",
        area: "33"
      }, {
        code: "130534",
        name: "清河县",
        province: "13",
        city: "05",
        area: "34"
      }, {
        code: "130535",
        name: "临西县",
        province: "13",
        city: "05",
        area: "35"
      }, {
        code: "130581",
        name: "南宫市",
        province: "13",
        city: "05",
        area: "81"
      }, {
        code: "130582",
        name: "沙河市",
        province: "13",
        city: "05",
        area: "82"
      }]
    }, {
      code: "130600",
      name: "保定市",
      province: "13",
      city: "06",
      children: [{
        code: "130602",
        name: "竞秀区",
        province: "13",
        city: "06",
        area: "02"
      }, {
        code: "130606",
        name: "莲池区",
        province: "13",
        city: "06",
        area: "06"
      }, {
        code: "130607",
        name: "满城区",
        province: "13",
        city: "06",
        area: "07"
      }, {
        code: "130608",
        name: "清苑区",
        province: "13",
        city: "06",
        area: "08"
      }, {
        code: "130609",
        name: "徐水区",
        province: "13",
        city: "06",
        area: "09"
      }, {
        code: "130623",
        name: "涞水县",
        province: "13",
        city: "06",
        area: "23"
      }, {
        code: "130624",
        name: "阜平县",
        province: "13",
        city: "06",
        area: "24"
      }, {
        code: "130626",
        name: "定兴县",
        province: "13",
        city: "06",
        area: "26"
      }, {
        code: "130627",
        name: "唐县",
        province: "13",
        city: "06",
        area: "27"
      }, {
        code: "130628",
        name: "高阳县",
        province: "13",
        city: "06",
        area: "28"
      }, {
        code: "130629",
        name: "容城县",
        province: "13",
        city: "06",
        area: "29"
      }, {
        code: "130630",
        name: "涞源县",
        province: "13",
        city: "06",
        area: "30"
      }, {
        code: "130631",
        name: "望都县",
        province: "13",
        city: "06",
        area: "31"
      }, {
        code: "130632",
        name: "安新县",
        province: "13",
        city: "06",
        area: "32"
      }, {
        code: "130633",
        name: "易县",
        province: "13",
        city: "06",
        area: "33"
      }, {
        code: "130634",
        name: "曲阳县",
        province: "13",
        city: "06",
        area: "34"
      }, {
        code: "130635",
        name: "蠡县",
        province: "13",
        city: "06",
        area: "35"
      }, {
        code: "130636",
        name: "顺平县",
        province: "13",
        city: "06",
        area: "36"
      }, {
        code: "130637",
        name: "博野县",
        province: "13",
        city: "06",
        area: "37"
      }, {
        code: "130638",
        name: "雄县",
        province: "13",
        city: "06",
        area: "38"
      }, {
        code: "130681",
        name: "涿州市",
        province: "13",
        city: "06",
        area: "81"
      }, {
        code: "130682",
        name: "定州市",
        province: "13",
        city: "06",
        area: "82"
      }, {
        code: "130683",
        name: "安国市",
        province: "13",
        city: "06",
        area: "83"
      }, {
        code: "130684",
        name: "高碑店市",
        province: "13",
        city: "06",
        area: "84"
      }]
    }, {
      code: "130700",
      name: "张家口市",
      province: "13",
      city: "07",
      children: [{
        code: "130702",
        name: "桥东区",
        province: "13",
        city: "07",
        area: "02"
      }, {
        code: "130703",
        name: "桥西区",
        province: "13",
        city: "07",
        area: "03"
      }, {
        code: "130705",
        name: "宣化区",
        province: "13",
        city: "07",
        area: "05"
      }, {
        code: "130706",
        name: "下花园区",
        province: "13",
        city: "07",
        area: "06"
      }, {
        code: "130708",
        name: "万全区",
        province: "13",
        city: "07",
        area: "08"
      }, {
        code: "130709",
        name: "崇礼区",
        province: "13",
        city: "07",
        area: "09"
      }, {
        code: "130722",
        name: "张北县",
        province: "13",
        city: "07",
        area: "22"
      }, {
        code: "130723",
        name: "康保县",
        province: "13",
        city: "07",
        area: "23"
      }, {
        code: "130724",
        name: "沽源县",
        province: "13",
        city: "07",
        area: "24"
      }, {
        code: "130725",
        name: "尚义县",
        province: "13",
        city: "07",
        area: "25"
      }, {
        code: "130726",
        name: "蔚县",
        province: "13",
        city: "07",
        area: "26"
      }, {
        code: "130727",
        name: "阳原县",
        province: "13",
        city: "07",
        area: "27"
      }, {
        code: "130728",
        name: "怀安县",
        province: "13",
        city: "07",
        area: "28"
      }, {
        code: "130730",
        name: "怀来县",
        province: "13",
        city: "07",
        area: "30"
      }, {
        code: "130731",
        name: "涿鹿县",
        province: "13",
        city: "07",
        area: "31"
      }, {
        code: "130732",
        name: "赤城县",
        province: "13",
        city: "07",
        area: "32"
      }]
    }, {
      code: "130800",
      name: "承德市",
      province: "13",
      city: "08",
      children: [{
        code: "130802",
        name: "双桥区",
        province: "13",
        city: "08",
        area: "02"
      }, {
        code: "130803",
        name: "双滦区",
        province: "13",
        city: "08",
        area: "03"
      }, {
        code: "130804",
        name: "鹰手营子矿区",
        province: "13",
        city: "08",
        area: "04"
      }, {
        code: "130821",
        name: "承德县",
        province: "13",
        city: "08",
        area: "21"
      }, {
        code: "130822",
        name: "兴隆县",
        province: "13",
        city: "08",
        area: "22"
      }, {
        code: "130824",
        name: "滦平县",
        province: "13",
        city: "08",
        area: "24"
      }, {
        code: "130825",
        name: "隆化县",
        province: "13",
        city: "08",
        area: "25"
      }, {
        code: "130826",
        name: "丰宁满族自治县",
        province: "13",
        city: "08",
        area: "26"
      }, {
        code: "130827",
        name: "宽城满族自治县",
        province: "13",
        city: "08",
        area: "27"
      }, {
        code: "130828",
        name: "围场满族蒙古族自治县",
        province: "13",
        city: "08",
        area: "28"
      }, {
        code: "130881",
        name: "平泉市",
        province: "13",
        city: "08",
        area: "81"
      }]
    }, {
      code: "130900",
      name: "沧州市",
      province: "13",
      city: "09",
      children: [{
        code: "130902",
        name: "新华区",
        province: "13",
        city: "09",
        area: "02"
      }, {
        code: "130903",
        name: "运河区",
        province: "13",
        city: "09",
        area: "03"
      }, {
        code: "130921",
        name: "沧县",
        province: "13",
        city: "09",
        area: "21"
      }, {
        code: "130922",
        name: "青县",
        province: "13",
        city: "09",
        area: "22"
      }, {
        code: "130923",
        name: "东光县",
        province: "13",
        city: "09",
        area: "23"
      }, {
        code: "130924",
        name: "海兴县",
        province: "13",
        city: "09",
        area: "24"
      }, {
        code: "130925",
        name: "盐山县",
        province: "13",
        city: "09",
        area: "25"
      }, {
        code: "130926",
        name: "肃宁县",
        province: "13",
        city: "09",
        area: "26"
      }, {
        code: "130927",
        name: "南皮县",
        province: "13",
        city: "09",
        area: "27"
      }, {
        code: "130928",
        name: "吴桥县",
        province: "13",
        city: "09",
        area: "28"
      }, {
        code: "130929",
        name: "献县",
        province: "13",
        city: "09",
        area: "29"
      }, {
        code: "130930",
        name: "孟村回族自治县",
        province: "13",
        city: "09",
        area: "30"
      }, {
        code: "130981",
        name: "泊头市",
        province: "13",
        city: "09",
        area: "81"
      }, {
        code: "130982",
        name: "任丘市",
        province: "13",
        city: "09",
        area: "82"
      }, {
        code: "130983",
        name: "黄骅市",
        province: "13",
        city: "09",
        area: "83"
      }, {
        code: "130984",
        name: "河间市",
        province: "13",
        city: "09",
        area: "84"
      }]
    }, {
      code: "131000",
      name: "廊坊市",
      province: "13",
      city: "10",
      children: [{
        code: "131002",
        name: "安次区",
        province: "13",
        city: "10",
        area: "02"
      }, {
        code: "131003",
        name: "广阳区",
        province: "13",
        city: "10",
        area: "03"
      }, {
        code: "131022",
        name: "固安县",
        province: "13",
        city: "10",
        area: "22"
      }, {
        code: "131023",
        name: "永清县",
        province: "13",
        city: "10",
        area: "23"
      }, {
        code: "131024",
        name: "香河县",
        province: "13",
        city: "10",
        area: "24"
      }, {
        code: "131025",
        name: "大城县",
        province: "13",
        city: "10",
        area: "25"
      }, {
        code: "131026",
        name: "文安县",
        province: "13",
        city: "10",
        area: "26"
      }, {
        code: "131028",
        name: "大厂回族自治县",
        province: "13",
        city: "10",
        area: "28"
      }, {
        code: "131081",
        name: "霸州市",
        province: "13",
        city: "10",
        area: "81"
      }, {
        code: "131082",
        name: "三河市",
        province: "13",
        city: "10",
        area: "82"
      }]
    }, {
      code: "131100",
      name: "衡水市",
      province: "13",
      city: "11",
      children: [{
        code: "131102",
        name: "桃城区",
        province: "13",
        city: "11",
        area: "02"
      }, {
        code: "131103",
        name: "冀州区",
        province: "13",
        city: "11",
        area: "03"
      }, {
        code: "131121",
        name: "枣强县",
        province: "13",
        city: "11",
        area: "21"
      }, {
        code: "131122",
        name: "武邑县",
        province: "13",
        city: "11",
        area: "22"
      }, {
        code: "131123",
        name: "武强县",
        province: "13",
        city: "11",
        area: "23"
      }, {
        code: "131124",
        name: "饶阳县",
        province: "13",
        city: "11",
        area: "24"
      }, {
        code: "131125",
        name: "安平县",
        province: "13",
        city: "11",
        area: "25"
      }, {
        code: "131126",
        name: "故城县",
        province: "13",
        city: "11",
        area: "26"
      }, {
        code: "131127",
        name: "景县",
        province: "13",
        city: "11",
        area: "27"
      }, {
        code: "131128",
        name: "阜城县",
        province: "13",
        city: "11",
        area: "28"
      }, {
        code: "131182",
        name: "深州市",
        province: "13",
        city: "11",
        area: "82"
      }]
    }]
  }];
  var REGION = ['大台北', '桃竹苗', '中彰投', '雲嘉嘉', '南高屏澎', '東部', '金馬'];
  var DICT = [{
    name: "臺北市",
    enName: "Taipei City",
    children: [{
      code: "100",
      name: "中正區",
      enName: "Zhongzheng Dist."
    }, {
      code: "103",
      name: "大同區",
      enName: "Datong Dist."
    }, {
      code: "104",
      name: "中山區",
      enName: "Zhongshan Dist."
    }, {
      code: "105",
      name: "松山區",
      enName: "Songshan Dist."
    }, {
      code: "106",
      name: "大安區",
      enName: "Da’an Dist."
    }, {
      code: "108",
      name: "萬華區",
      enName: "Wanhua Dist."
    }, {
      code: "110",
      name: "信義區",
      enName: "Xinyi Dist."
    }, {
      code: "111",
      name: "士林區",
      enName: "Shilin Dist."
    }, {
      code: "112",
      name: "北投區",
      enName: "Beitou Dist."
    }, {
      code: "114",
      name: "內湖區",
      enName: "Neihu Dist."
    }, {
      code: "115",
      name: "南港區",
      enName: "Nangang Dist."
    }, {
      code: "116",
      name: "文山區",
      enName: "Wenshan Dist."
    }]
  }, {
    name: "基隆市",
    enName: "Keelung City",
    children: [{
      code: "200",
      name: "仁愛區",
      enName: "Ren’ai Dist."
    }, {
      code: "201",
      name: "信義區",
      enName: "Xinyi Dist."
    }, {
      code: "202",
      name: "中正區",
      enName: "Zhongzheng Dist."
    }, {
      code: "203",
      name: "中山區",
      enName: "Zhongshan Dist."
    }, {
      code: "204",
      name: "安樂區",
      enName: "Anle Dist."
    }, {
      code: "205",
      name: "暖暖區",
      enName: "Nuannuan Dist."
    }, {
      code: "206",
      name: "七堵區",
      enName: "Qidu Dist."
    }]
  }, {
    name: "新北市",
    enName: "New Taipei City",
    children: [{
      code: "207",
      name: "萬里區",
      enName: "Wanli Dist."
    }, {
      code: "208",
      name: "金山區",
      enName: "Jinshan Dist."
    }, {
      code: "220",
      name: "板橋區",
      enName: "Banqiao Dist."
    }, {
      code: "221",
      name: "汐止區",
      enName: "Xizhi Dist."
    }, {
      code: "222",
      name: "深坑區",
      enName: "Shenkeng Dist."
    }, {
      code: "223",
      name: "石碇區",
      enName: "Shiding Dist."
    }, {
      code: "224",
      name: "瑞芳區",
      enName: "Ruifang Dist."
    }, {
      code: "226",
      name: "平溪區",
      enName: "Pingxi Dist."
    }, {
      code: "227",
      name: "雙溪區",
      enName: "Shuangxi Dist."
    }, {
      code: "228",
      name: "貢寮區",
      enName: "Gongliao Dist."
    }, {
      code: "231",
      name: "新店區",
      enName: "Xindian Dist."
    }, {
      code: "232",
      name: "坪林區",
      enName: "Pinglin Dist."
    }, {
      code: "233",
      name: "烏來區",
      enName: "Wulai Dist."
    }, {
      code: "234",
      name: "永和區",
      enName: "Yonghe Dist."
    }, {
      code: "235",
      name: "中和區",
      enName: "Zhonghe Dist."
    }, {
      code: "236",
      name: "土城區",
      enName: "Tucheng Dist."
    }, {
      code: "237",
      name: "三峽區",
      enName: "Sanxia Dist."
    }, {
      code: "238",
      name: "樹林區",
      enName: "Shulin Dist."
    }, {
      code: "239",
      name: "鶯歌區",
      enName: "Yingge Dist."
    }, {
      code: "241",
      name: "三重區",
      enName: "Sanchong Dist."
    }, {
      code: "242",
      name: "新莊區",
      enName: "Xinzhuang Dist."
    }, {
      code: "243",
      name: "泰山區",
      enName: "Taishan Dist."
    }, {
      code: "244",
      name: "林口區",
      enName: "Linkou Dist."
    }, {
      code: "247",
      name: "蘆洲區",
      enName: "Luzhou Dist."
    }, {
      code: "248",
      name: "五股區",
      enName: "Wugu Dist."
    }, {
      code: "249",
      name: "八里區",
      enName: "Bali Dist."
    }, {
      code: "251",
      name: "淡水區",
      enName: "Tamsui Dist."
    }, {
      code: "252",
      name: "三芝區",
      enName: "Sanzhi Dist."
    }, {
      code: "253",
      name: "石門區",
      enName: "Shimen Dist."
    }]
  }, {
    name: "連江縣",
    enName: "Lienchiang County",
    children: [{
      code: "209",
      name: "南竿鄉",
      enName: "Nangan Township"
    }, {
      code: "210",
      name: "北竿鄉",
      enName: "Beigan Township"
    }, {
      code: "211",
      name: "莒光鄉",
      enName: "Juguang Township"
    }, {
      code: "212",
      name: "東引鄉",
      enName: "Dongyin Township"
    }]
  }, {
    name: "宜蘭縣",
    enName: "Yilan County",
    children: [{
      code: "260",
      name: "宜蘭市",
      enName: "Yilan City"
    }, {
      code: "263",
      name: "壯圍鄉",
      enName: "Zhuangwei Township"
    }, {
      code: "261",
      name: "頭城鎮",
      enName: "Toucheng Township"
    }, {
      code: "262",
      name: "礁溪鄉",
      enName: "Jiaoxi Township"
    }, {
      code: "264",
      name: "員山鄉",
      enName: "Yuanshan Township"
    }, {
      code: "265",
      name: "羅東鎮",
      enName: "Luodong Township"
    }, {
      code: "266",
      name: "三星鄉",
      enName: "Sanxing Township"
    }, {
      code: "267",
      name: "大同鄉",
      enName: "Datong Township"
    }, {
      code: "268",
      name: "五結鄉",
      enName: "Wujie Township"
    }, {
      code: "269",
      name: "冬山鄉",
      enName: "Dongshan Township"
    }, {
      code: "270",
      name: "蘇澳鎮",
      enName: "Su’ao Township"
    }, {
      code: "272",
      name: "南澳鄉",
      enName: "Nan’ao Township"
    }, {
      code: "290",
      name: "釣魚臺",
      enName: "Diaoyutai"
    }]
  }];
  var EN_REGION = ['Northeast', 'Southeastern', 'Midwestern', 'Northwestern', 'Western'];
  var EN_DICT_RAW = {
    Alabama: ["ABBEVILLE", "ADAMSVILLE", "ADDISON", "AKRON", "ALABASTER", "ALBERTVILLE", "ALEXANDER CITY", "ALEXANDRIA", "ALICEVILLE", "ALLGOOD", "ALTOONA", "ANDALUSIA", "ANDERSON", "ANNISTON", "ARAB", "ARDMORE", "ARGO", "ARITON", "ARLEY", "ASHFORD", "ASHLAND", "ASHVILLE", "ATHENS", "ATMORE", "ATTALLA", "AUBURN", "AUTAUGAVILLE", "AVON", "BABBIE", "BAILEYTON", "BANKS", "BAY MINETTE", "BAYOU LA BATRE", "BEAR CREEK", "BEATRICE", "BEAVERTON", "BELK", "BENTON", "BERRY", "BESSEMER", "BILLINGSLEY", "BIRMINGHAM", "BLACK", "BLOUNTSVILLE", "BLUE MOUNTAIN", "BLUE RIDGE ", "BLUE SPRINGS ", "BOAZ ", "BOLIGEE ", "BON AIR ", " BRANCHVILLE ", "BRANTLEY ", " BRENT ", " BREWTON ", "BRIDGEPORT", "BRIGHTON", "BRILLIANT", "BROOKSIDE", "BROOKWOOD", "BRUNDIDGE", "BUTLER", "BYNUM", "CAHABA HEIGHTS", "CALERA", "CAMDEN", "CAMP HILL", "CARBON HILL", "CARDIFF", "CAROLINA", "CARROLLTON", "CASTLEBERRY", "CEDAR BLUFF", "CENTER POINT", "CENTRE", "CENTREVILLE", "CHALKVILLE", "CHATOM", "CHELSEA", "CHEROKEE", "CHICKASAW", "CHILDERSBURG", "CITRONELLE", "CLANTON", "CLAY", "CLAYHATCHEE", "CLAYTON", "CLEVELAND", "CLIO", "COALING", "COFFEE SPRINGS", "COFFEEVILLE", "COKER", "COLLINSVILLE", "COLONY", "COLUMBIA", "COLUMBIANA", "CONCORD", "COOSADA", "CORDOVA", "COTTONWOOD", "COUNTY LINE", "COURTLAND", "COWARTS", "CREOLA", "CROSSVILLE", "CUBA", "CULLMAN", "DADEVILLE", "DALEVILLE", "DAPHNE", "DAUPHIN ISLAND", "DAVISTON", "DAYTON", "DEATSVILLE", "DECATUR", "DEMOPOLIS", "DETROIT", "DODGE CITY", "DORA", "DOTHAN", "DOUBLE SPRINGS", "DOUGLAS", "DOZIER", "DUTTON", "EAST BREWTON", "ECLECTIC", "EDGEWATER", "EDWARDSVILLE", "ELBA", "ELBERTA", "ELDRIDGE", "ELKMONT", "ELMORE", "EMELLE", "ENTERPRISE", "EPES", "ETHELSVILLE", "EUFAULA", "EUNOLA", "EUTAW", "EVA", "EVERGREEN", "EXCEL", "FAIRFIELD", "FAIRHOPE", "FAIRVIEW", "FALKVILLE", "FAUNSDALE", "FAYETTE", "FIVE POINTS", "FLOMATON", "FLORALA", "FLORENCE", "FOLEY", "FORESTDALE", "FORKLAND", "FORT DEPOSIT", "FORT PAYNE", "FORT RUCKER", "FRANKLIN", "FRISCO CITY", "FRUITHURST", "FULTON", "FULTONDALE", "FYFFE", "GADSDEN", "GAINESVILLE", "GANTT", "GANTTS QUARRY", "GARDEN CITY", "GARDENDALE", "GAYLESVILLE", "GEIGER", "GENEVA", "GEORGIANA", "GERALDINE", "GILBERTOWN", "GLEN ALLEN", "GLENCOE", "GLENWOOD", "GOLDVILLE", "GOOD HOPE", "GOODWATER", "GORDO", "GORDON", "GORDONVILLE", "GOSHEN", "GRAND BAY", "GRANT", "GRAYSON VALLEY", "GRAYSVILLE", "GREENSBORO", "GREENVILLE", "GRIMES", "GROVE HILL", "GUIN", "GULF SHORES", "GUNTERSVILLE", "GURLEY", "GU-WIN", "HACKLEBURG", "HALEBURG", "HALEYVILLE", "HAMILTON", "HAMMONDVILLE", "HANCEVILLE", "HARPERSVILLE", "HARTFORD", "HARTSELLE", "HARVEST", "HAYDEN", "HAYNEVILLE", "HAZEL GREEN", "HEADLAND", "HEATH", "HEFLIN", "HELENA", "HENAGAR", "HIGHLAND LAKE", "HILLSBORO", "HOBSON CITY", "HODGES", "HOKES BLUFF", "HOLLY POND", "HOLLYWOOD", "HOLT", "HOMEWOOD", "HOOVER", "HORN HILL", "HUEYTOWN", "HUGULEY", "HUNTSVILLE", "HURTSBORO", "HYTOP", "IDER", "INDIAN SPRINGS VILLAGE", "IRONDALE", "JACKSON", "JACKSONS GAP", "JACKSONVILLE", "JASPER", "JEMISON", "KANSAS", "KENNEDY", "KILLEN", "KIMBERLY", "KINSEY", "KINSTON", "LADONIA", "LA FAYETTE", "LAKE PURDY", "LAKEVIEW", "LAKE VIEW", "LANETT", "LANGSTON", "LEEDS", "LEESBURG", "LEIGHTON", "LESTER", "LEVEL PLAINS", "LEXINGTON", "LIBERTYVILLE", "LINCOLN", "LINDEN", "LINEVILLE", "LIPSCOMB", "LISMAN", "LITTLEVILLE", "LIVINGSTON", "LOACHAPOKA", "LOCKHART", "LOCUST FORK", "LOUISVILLE", "LOWNDESBORO", "LOXLEY", "LUVERNE", "LYNN", "MCDONALD CHAPEL", "MACEDONIA", "MCINTOSH", "MCKENZIE", "MCMULLEN", "MADISON", "MADRID", "MALVERN", "MAPLESVILLE", "MARGARET", "MARION", "MAYTOWN", "MEADOWBROOK", "MEMPHIS", "MENTONE", "MERIDIANVILLE", "MIDFIELD", "MIDLAND CITY", "MIDWAY", "MIGNON", "MILLBROOK", "MILLPORT", "MILLRY", "MINOR", "MOBILE", "MONROEVILLE", "MONTEVALLO", "MONTGOMERY", "MOODY", "MOORES MILL", "MOORESVILLE", "MORRIS", "MOSSES", "MOULTON", "MOUNDVILLE", "MOUNTAINBORO", "MOUNTAIN BROOK", "MOUNT OLIVE", "MOUNT VERNON", "MULGA", "MUNFORD", "MUSCLE SHOALS", "MYRTLEWOOD", "NAPIER FIELD", "NATURAL BRIDGE", "NAUVOO", "NECTAR", "NEEDHAM", "NEWBERN", "NEW BROCKTON", "NEW HOPE", "NEW MARKET", "NEW SITE", "NEWTON", "NEWVILLE", "NORTH BIBB", "NORTH COURTLAND", "NORTH JOHNS", "NORTHPORT", "NOTASULGA", "OAK GROVE", "OAK HILL", "OAKMAN", "ODENVILLE", "OHATCHEE", "ONEONTA", "ONYCHA", "OPELIKA", "OPP", "ORANGE BEACH", "ORRVILLE", "OWENS CROSS ROADS", "OXFORD", "OZARK", "PAINT ROCK", "PARRISH", "PELHAM", "PELL CITY", "PENNINGTON", "PETREY", "PHENIX CITY", "PHIL CAMPBELL", "PICKENSVILLE", "PIEDMONT", "PIKE ROAD", "PINCKARD", "PINE APPLE", "PINE HILL", "PINE RIDGE", "PINSON", "PISGAH", "PLEASANT GROVE", "PLEASANT GROVES", "POINT CLEAR", "POLLARD", "POWELL", "PRATTVILLE", "PRICEVILLE", "PRICHARD", "PROVIDENCE", "RAGLAND", "RAINBOW CITY", "RAINSVILLE", "RANBURNE", "RED BAY", "RED LEVEL", "REDSTONE ARSENAL", "REECE CITY", "REFORM", "REHOBETH", "REPTON", "RIDGEVILLE", "RIVER FALLS", "RIVERSIDE", "RIVERVIEW", "ROANOKE", "ROBERTSDALE", "ROCK CREEK", "ROCKFORD", "ROCK MILLS", "ROGERSVILLE", "ROSA", "RUSSELLVILLE", "RUTLEDGE", "ST. FLORIAN", "SAKS", "SAMSON", "SAND ROCK", "SANFORD", "SARALAND", "SARDIS CITY", "SATSUMA", "SCOTTSBORO", "SECTION", "SELMA", "SELMONT-WEST SELMONT", "SHEFFIELD", "SHILOH", "SHORTER", "SILAS", "SILVERHILL", "SIPSEY", "SKYLINE", "SLOCOMB", "SMITHS", "SMOKE RISE", "SNEAD", "SOMERVILLE", "SOUTHSIDE", "SOUTH VINEMONT", "SPANISH FORT", "SPRINGVILLE", "STEELE", "STEVENSON", "SULLIGENT", "SUMITON", "SUMMERDALE", "SUSAN MOORE", "SWEET WATER", "SYLACAUGA", "SYLVANIA", "SYLVAN SPRINGS", "TALLADEGA", "TALLADEGA SPRINGS", "TALLASSEE", "TARRANT", "TAYLOR", "THEODORE", "THOMASTON", "THOMASVILLE", "THORSBY", "TILLMANS CORNER", "TOWN CREEK", "TOXEY", "TRAFFORD", "TRIANA", "TRINITY", "TROY", "TRUSSVILLE", "TUSCALOOSA", "TUSCUMBIA", "TUSKEGEE", "UNDERWOOD-PETERSVILLE", "UNION", "UNION GROVE", "UNION SPRINGS", "UNIONTOWN", "VALLEY", "VALLEY HEAD", "VANCE", "VERNON", "VESTAVIA HILLS", "VINA", "VINCENT", "VREDENBURGH", "WADLEY", "WALDO", "WALNUT GROVE", "WARRIOR", "WATERLOO", "WAVERLY", "WEAVER", "WEBB", "WEDOWEE", "WEST BLOCTON", "WEST END-COBB TOWN", "WEST JEFFERSON", "WEST POINT", "WETUMPKA", "WHITE HALL", "WILSONVILLE", "WILTON", "WINFIELD", "WOODLAND", "WOODVILLE", "YELLOW BLUFF", "YORK"],
    California: ["ACTON", "ADELANTO", "AGOURA HILLS", "ALAMEDA", "ALAMO", "ALBANY", "ALHAMBRA", "ALISO VIEJO", "ALMANOR", "ALONDRA PARK", "ALPAUGH", "ALPINE", "ALPINE VILLAGE", "ALTADENA", "ALTA SIERRA", "ALTURAS", "ALUM ROCK", "AMADOR CITY", "AMERICAN CANYON", "AMESTI", "ANAHEIM", "ANDERSON", "ANGELS CITY", "ANGWIN", "ANTIOCH", "APPLE VALLEY", "APTOS", "APTOS HILLS-LARKIN VALLEY", "ARBUCKLE", "ARCADIA", "ARCATA", "ARDEN-ARCADE", "ARMONA", "ARNOLD", "AROMAS", "ARROYO GRANDE", "ARTESIA", "ARVIN", "ASHLAND", "ATASCADERO", "ATHERTON", "ATWATER", "AUBERRY", "AUBURN", "AUGUST", "AVALON", "AVENAL", "AVERY", "AVOCADO HEIGHTS", "AZUSA", "BAKERSFIELD", "BALDWIN PARK", "BANNING", "BARSTOW", "BAY POINT", "BAYVIEW", "BAYVIEW-MONTALVIN", "BAYWOOD-LOS OSOS", "BEALE AFB", "BEAR VALLEY", "BEAR VALLEY SPRINGS", "BEAUMONT", "BECKWOURTH", "BELDEN", "BELL", "BELLFLOWER", "BELL GARDENS", "BELMONT", "BELVEDERE", "BENICIA", "BEN LOMOND", "BERKELEY", "BERMUDA DUNES", "BERTSCH-OCEANVIEW", "BETHEL ISLAND", "BEVERLY HILLS", "BIG BEAR CITY", "BIG BEAR LAKE", "BIG BEND", "BIGGS", "BIG PINE", "BIG RIVER", "BIOLA", "BISHOP", "BLACKHAWK-CAMINO TASSAJARA", "BLACK POINT-GREEN POINT", "BLAIRSDEN", "BLOOMINGTON", "BLUE LAKE", "BLUEWATER", "BLYTHE", "BODEGA BAY", "BODFISH", "BOLINAS", "BOMBAY BEACH", "BONADELLE RANCHOS-MADERA RANCHOS", "BONITA", "BONSALL", "BOOTJACK", "BORON", "BORONDA", "BORREGO SPRINGS", "BOSTONIA", "BOULDER CREEK", "BOWLES", "BOYES HOT SPRINGS", "BRADBURY", "BRADLEY", "BRAWLEY", "BREA", "BRENTWOOD", "BRET HARTE", "BRISBANE", "BROADMOOR", "BUCKS LAKE", "BUELLTON", "BUENA PARK", "BUENA VISTA", "BURBANK", "BURLINGAME", "BURNEY", "BUTTONWILLOW", "BYRON", "BYSTROM", "CABAZON", "CALABASAS", "CALEXICO", "CALIFORNIA CITY", "CALIMESA", "CALIPATRIA", "CALISTOGA", "CALWA", "CAMARILLO", "CAMBRIA", "CAMBRIAN PARK", "CAMERON PARK", "CAMPBELL", "CAMP PENDLETON NORTH", "CAMP PENDLETON SOUTH", "CANTUA CREEK", "CANYONDAM", "CANYON LAKE", "CAPITOLA", "CARIBOU", "CARLSBAD", "CARMEL-BY-THE-SEA", "CARMEL VALLEY VILLAGE", "CARMICHAEL", "CARPINTERIA", "CARRICK", "CARSON", "CARTAGO", "CARUTHERS", "CASA CONEJO", "CASA DE ORO-MOUNT HELIX", "CASTRO VALLEY", "CASTROVILLE", "CATHEDRAL CITY", "CAYUCOS", "CERES", "CERRITOS", "CHALLENGE-BROWNSVILLE", "CHANNEL ISLANDS BEACH", "CHARTER OAK", "CHERRYLAND", "CHERRY VALLEY", "CHESTER", "CHICO", "CHILCOOT-VINTON", "CHINA LAKE ACRES", "CHINESE CAMP", "CHINO", "CHINO HILLS", "CHOWCHILLA", "CHUALAR", "CHULA VISTA", "CITRUS", "CITRUS HEIGHTS", "CLAREMONT", "CLAYTON", "CLEARLAKE", "CLEARLAKE OAKS", "CLIO", "CLOVERDALE", "CLOVIS", "CLYDE", "COACHELLA", "COALINGA", "COBB", "COLFAX", "COLMA", "COLTON", "COLUMBIA", "COLUSA", "COMMERCE", "COMPTON", "CONCORD", "CONCOW", "COPPEROPOLIS", "CORCORAN", "CORNING", "CORONA", "CORONADO", "CORRALITOS", "CORTE MADERA", "COSTA MESA", "COTATI", "COTO DE CAZA", "COTTONWOOD", "COUNTRY CLUB", "COVELO", "COVINA", "CRESCENT CITY", "CRESCENT CITY NORTH", "CRESCENT MILLS", "CREST", "CRESTLINE", "C-ROAD", "CROCKETT", "CROMBERG", "CUDAHY", "CULVER CITY", "CUPERTINO", "CUTLER", "CUTTEN", "CYPRESS", "DALY CITY", "DANA POINT", "DANVILLE", "DARWIN", "DAVIS", "DAY VALLEY", "DEER PARK", "DEL AIRE", "DELANO", "DELHI", "DELLEKER", "DEL MAR", "DEL MONTE FOREST", "DEL REY", "DEL REY OAKS", "DEL RIO", "DENAIR", "DERBY ACRES", "DESERT HOT SPRINGS", "DESERT SHORES", "DESERT VIEW HIGHLANDS", "DIABLO", "DIAMOND BAR", "DIAMOND SPRINGS", "DILLON BEACH", "DINUBA", "DISCOVERY BAY", "DIXON", "DIXON LANE-MEADOW CREEK", "DOLLAR POINT", "DORRINGTON", "DORRIS", "DOS PALOS", "DOWNEY", "DUARTE", "DUBLIN", "DUCOR", "DUNSMUIR", "DURHAM", "DUSTIN ACRES", "EARLIMART", "EAST BLYTHE", "EAST COMPTON", "EAST FOOTHILLS", "EAST HEMET", "EAST LA MIRADA", "EAST LOS ANGELES", "EAST OAKDALE", "EASTON", "EAST OROSI", "EAST PALO ALTO", "EAST PASADENA", "EAST PORTERVILLE", "EAST QUINCY", "EAST RICHMOND HEIGHTS", "EAST SAN GABRIEL", "EAST SHORE", "EAST SONORA", "EDGEWOOD", "EDWARDS AFB", "EL CAJON", "EL CENTRO", "EL CERRITO", "EL DORADO HILLS", "ELDRIDGE", "EL GRANADA", "ELK GROVE", "ELKHORN", "ELMIRA", "EL MONTE", "EL PASO DE ROBLES (PASO ROBLES)", "EL RIO", "EL SEGUNDO", "EL SOBRANTE", "EL VERANO", "EMERALD LAKE HILLS", "EMERYVILLE", "EMPIRE", "ENCINITAS", "ESCALON", "ESCONDIDO", "ESPARTO", "ETNA", "EUREKA", "EXETER", "FAIRBANKS RANCH", "FAIRFAX", "FAIRFIELD", "FAIR OAKS", "FAIRVIEW", "FALLBROOK", "FALL RIVER MILLS", "FARMERSVILLE", "FARMINGTON", "FELLOWS", "FELTON", "FERNDALE", "FETTERS HOT SPRINGS-AGUA CALIENTE", "FILLMORE", "FIREBAUGH", "FLORENCE-GRAHAM", "FLORIN", "FOLSOM", "FONTANA", "FOOTHILL FARMS", "FOOTHILL RANCH", "FORD CITY", "FORESTHILL", "FOREST MEADOWS", "FORESTVILLE", "FORT BRAGG", "FORT JONES", "FORTUNA", "FOSTER CITY", "FOUNTAIN VALLEY", "FOWLER", "FRAZIER PARK", "FREEDOM", "FREMONT", "FRENCH CAMP", "FRENCH GULCH", "FRESNO", "FRIANT", "FRUITDALE", "FULLERTON", "FURNACE CREEK", "GALT", "GARDENA", "GARDEN ACRES", "GARDEN GROVE", "GAZELLE", "GEORGETOWN", "GERBER-LAS FLORES", "GILROY", "GLEN AVON", "GLENDALE", "GLENDORA", "GLEN ELLEN", "GOLDEN HILLS", "GOLD RIVER", "GOLETA", "GONZALES", "GOSHEN", "GRAEAGLE", "GRAND TERRACE", "GRANITE BAY", "GRANITE HILLS", "GRASS VALLEY", "GRATON", "GRAYSON", "GREENFIELD", "GREENHORN", "GREEN VALLEY", "GREENVIEW", "GREENVILLE", "GRENADA", "GRIDLEY", "GROVELAND-BIG OAK FLAT", "GROVER BEACH", "GUADALUPE", "GUERNEVILLE", "GUSTINE", "HACIENDA HEIGHTS", "HALF MOON BAY", "HAMILTON BRANCH", "HAMILTON CITY", "HANFORD", "HARBISON CANYON", "HAWAIIAN GARDENS", "HAWTHORNE", "HAYFORK", "HAYWARD", "HEALDSBURG", "HEBER", "HEMET", "HERCULES", "HERMOSA BEACH", "HESPERIA", "HICKMAN", "HIDDEN HILLS", "HIDDEN MEADOWS", "HIDDEN VALLEY LAKE", "HIGHGROVE", "HIGHLAND", "HIGHLANDS-BAYWOOD PARK", "HILLSBOROUGH", "HILMAR-IRWIN", "HOLLISTER", "HOLTVILLE", "HOME GARDEN", "HOME GARDENS", "HOMELAND", "HOMEWOOD CANYON-VALLEY WELLS", "HORNBROOK", "HUGHSON", "HUMBOLDT HILL", "HUNTINGTON BEACH", "HUNTINGTON PARK", "HURON", "HYDESVILLE", "IDYLLWILD-PINE COVE", "IMPERIAL", "IMPERIAL BEACH", "INDEPENDENCE", "INDIAN FALLS", "INDIAN WELLS", "INDIO", "INDUSTRY", "INGLEWOOD", "INTERLAKEN", "INVERNESS", "INYOKERN", "IONE", "IRON HORSE", "IRVINE", "IRWINDALE", "ISLA VISTA", "ISLETON", "IVANHOE", "JACKSON", "JAMESTOWN", "JAMUL", "JOHANNESBURG", "JOHNSVILLE", "JOSHUA TREE", "JULIAN", "KEDDIE", "KEELER", "KEENE", "KELSEYVILLE", "KENNEDY", "KENSINGTON", "KENTFIELD", "KERMAN", "KERNVILLE", "KETTLEMAN CITY", "KEYES", "KING CITY", "KINGS BEACH", "KINGSBURG", "KIRKWOOD", "KLAMATH", "KNIGHTSEN", "LA CANADA FLINTRIDGE", "LA CRESCENTA-MONTROSE", "LADERA HEIGHTS", "LAFAYETTE", "LAGUNA", "LAGUNA BEACH", "LAGUNA HILLS", "LAGUNA NIGUEL", "LAGUNA WEST-LAKESIDE", "LAGUNA WOODS", "LAGUNITAS-FOREST KNOLLS", "LA HABRA", "LA HABRA HEIGHTS", "LAKE ALMANOR COUNTRY CLUB", "LAKE ALMANOR PENINSULA", "LAKE ALMANOR WEST", "LAKE ARROWHEAD", "LAKE DAVIS", "LAKE ELSINORE", "LAKE FOREST", "LAKEHEAD-LAKESHORE", "LAKE ISABELLA", "LAKELAND VILLAGE", "LAKE LOS ANGELES", "LAKE NACIMIENTO", "LAKE OF THE PINES", "LAKE OF THE WOODS", "LAKEPORT", "LAKE SAN MARCOS", "LAKESIDE", "LAKEVIEW", "LAKE WILDWOOD", "LAKEWOOD", "LA MESA", "LA MIRADA", "LAMONT", "LANARE", "LANCASTER", "LA PALMA", "LA PORTE", "LA PRESA", "LA PUENTE", "LA QUINTA", "LA RIVIERA", "LARKFIELD-WIKIUP", "LARKSPUR", "LAS FLORES", "LAS LOMAS", "LATHROP", "LATON", "LA VERNE", "LAWNDALE", "LAYTONVILLE", "LEBEC", "LE GRAND", "LEMON COVE", "LEMON GROVE", "LEMOORE", "LEMOORE STATION", "LENNOX", "LENWOOD", "LEWISTON", "LEXINGTON HILLS", "LINCOLN", "LINCOLN VILLAGE", "LINDA", "LINDEN", "LINDSAY", "LITTLE GRASS VALLEY", "LITTLEROCK", "LIVE OAK", "LIVERMORE", "LIVINGSTON", "LOCKEFORD", "LODI", "LOMA LINDA", "LOMA RICA", "LOMITA", "LOMPOC", "LONDON", "LONE PINE", "LONG BEACH", "LOOMIS", "LOS ALAMITOS", "LOS ALAMOS", "LOS ALTOS", "LOS ALTOS HILLS", "LOS ANGELES", "LOS BANOS", "LOS GATOS", "LOS MOLINOS", "LOST HILLS", "LOWER LAKE", "LOYALTON", "LOYOLA", "LUCAS VALLEY-MARINWOOD", "LUCERNE", "LYNWOOD", "MCARTHUR", "MCCLOUD", "MACDOEL", "MCFARLAND", "MCKINLEYVILLE", "MCKITTRICK", "MADERA", "MADERA ACRES", "MAGALIA", "MALIBU", "MAMMOTH LAKES", "MANHATTAN BEACH", "MANTECA", "MANTON", "MARCH AFB", "MARICOPA", "MARINA", "MARINA DEL REY", "MARIPOSA", "MARKLEEVILLE", "MARTINEZ", "MARYSVILLE", "MAYFLOWER VILLAGE", "MAYWOOD", "MEADOW VALLEY", "MEADOW VISTA", "MECCA", "MEINERS OAKS", "MENDOCINO", "MENDOTA", "MENLO PARK", "MENTONE", "MERCED", "MESA", "MESA VISTA", "METTLER", "MIDDLETOWN", "MILLBRAE", "MILL VALLEY", "MILLVILLE", "MILPITAS", "MINERAL", "MIRA LOMA", "MIRA MONTE", "MISSION CANYON", "MISSION HILLS", "MISSION VIEJO", "MI-WUK VILLAGE", "MODESTO", "MOHAWK VISTA", "MOJAVE", "MOKELUMNE HILL", "MONO VISTA", "MONROVIA", "MONTAGUE", "MONTARA", "MONTCLAIR", "MONTEBELLO", "MONTECITO", "MONTEREY", "MONTEREY PARK", "MONTE RIO", "MONTE SERENO", "MONTGOMERY CREEK", "MOORPARK", "MORADA", "MORAGA", "MORENO VALLEY", "MORGAN HILL", "MORONGO VALLEY", "MORRO BAY", "MOSS BEACH", "MOSS LANDING", "MOUNTAIN MESA", "MOUNTAIN RANCH", "MOUNTAIN VIEW", "MOUNTAIN VIEW ACRES", "MOUNT HEBRON", "MOUNT SHASTA", "MUIR BEACH", "MURPHYS", "MURRIETA", "MURRIETA HOT SPRINGS", "MUSCOY", "MYRTLETOWN", "NAPA", "NATIONAL CITY", "NEBO CENTER", "NEEDLES", "NEVADA CITY", "NEWARK", "NEWMAN", "NEWPORT BEACH", "NEWPORT COAST", "NICE", "NILAND", "NIPOMO", "NORCO", "NORTH AUBURN", "NORTH EDWARDS", "NORTH EL MONTE", "NORTH FAIR OAKS", "NORTH HIGHLANDS", "NORTH LAKEPORT", "NORTH WOODBRIDGE", "NORWALK", "NOVATO", "NUEVO", "OAKDALE", "OAKHURST", "OAKLAND", "OAKLEY", "OAK PARK", "OAK VIEW", "OCCIDENTAL", "OCEANO", "OCEANSIDE", "OCOTILLO", "OILDALE", "OJAI", "OLANCHA", "OLIVEHURST", "ONTARIO", "ONYX", "OPAL CLIFFS", "ORANGE", "ORANGE COVE", "ORANGEVALE", "ORCUTT", "ORINDA", "ORLAND", "OROSI", "OROVILLE", "OROVILLE EAST", "OXNARD", "PACHECO", "PACIFICA", "PACIFIC GROVE", "PAJARO", "PALERMO", "PALMDALE", "PALM DESERT", "PALM SPRINGS", "PALO ALTO", "PALO CEDRO", "PALOS VERDES ESTATES", "PALO VERDE", "PARADISE", "PARAMOUNT", "PARKSDALE", "PARKWAY-SOUTH SACRAMENTO", "PARKWOOD", "PARLIER", "PASADENA", "PATTERSON", "PAXTON", "PEARSONVILLE", "PEDLEY", "PENN VALLEY", "PERRIS", "PETALUMA", "PHOENIX LAKE-CEDAR RIDGE", "PICO RIVERA", "PIEDMONT", "PINE HILLS", "PINE MOUNTAIN CLUB", "PINE VALLEY", "PINOLE", "PIRU", "PISMO BEACH", "PITTSBURG", "PIXLEY", "PLACENTIA", "PLACERVILLE", "PLANADA", "PLEASANT HILL", "PLEASANTON", "PLUMAS EUREKA", "PLYMOUTH", "POINT ARENA", "POINT REYES STATION", "POLLOCK PINES", "POMONA", "POPLAR-COTTON CENTER", "PORT COSTA", "PORTERVILLE", "PORT HUENEME", "PORTOLA", "PORTOLA HILLS", "PORTOLA VALLEY", "POWAY", "PRATTVILLE", "PRUNEDALE", "QUAIL VALLEY", "QUARTZ HILL", "QUINCY", "RAIL ROAD FLAT", "RAINBOW", "RAISIN CITY", "RAMONA", "RANCHO CALAVERAS", "RANCHO CORDOVA", "RANCHO CUCAMONGA", "RANCHO MIRAGE", "RANCHO MURIETA", "RANCHO PALOS VERDES", "RANCHO SAN DIEGO", "RANCHO SANTA FE", "RANCHO SANTA MARGARITA", "RANCHO TEHAMA RESERVE", "RANDSBURG", "RED BLUFF", "REDDING", "REDLANDS", "REDONDO BEACH", "REDWAY", "REDWOOD CITY", "REEDLEY", "RIALTO", "RICHGROVE", "RICHMOND", "RIDGECREST", "RIDGEMARK", "RIO DELL", "RIO DEL MAR", "RIO LINDA", "RIO VISTA", "RIPON", "RIVERBANK", "RIVERDALE", "RIVERDALE PARK", "RIVERSIDE", "ROCKLIN", "RODEO", "ROHNERT PARK", "ROLLING HILLS", "ROLLING HILLS ESTATES", "ROLLINGWOOD", "ROMOLAND", "ROSAMOND", "ROSEDALE", "ROSELAND", "ROSEMEAD", "ROSEMONT", "ROSEVILLE", "ROSS", "ROSSMOOR", "ROUND MOUNTAIN", "ROUND VALLEY", "ROWLAND HEIGHTS", "RUBIDOUX", "RUNNING SPRINGS", "SACRAMENTO", "ST. HELENA", "SALIDA", "SALINAS", "SALTON CITY", "SALTON SEA BEACH", "SAN ANDREAS", "SAN ANSELMO", "SAN ANTONIO HEIGHTS", "SAN ARDO", "SAN BERNARDINO", "SAN BRUNO", "SAN BUENAVENTURA (VENTURA)", "SAN CARLOS", "SAN CLEMENTE", "SAND CITY", "SAN DIEGO", "SAN DIEGO COUNTRY ESTATES", "SAN DIMAS", "SAN FERNANDO", "SAN FRANCISCO", "SAN GABRIEL", "SANGER", "SAN GERONIMO", "SAN JACINTO", "SAN JOAQUIN", "SAN JOAQUIN HILLS", "SAN JOSE", "SAN JUAN BAUTISTA", "SAN JUAN CAPISTRANO", "SAN LEANDRO", "SAN LORENZO", "SAN LUCAS", "SAN LUIS OBISPO", "SAN MARCOS", "SAN MARINO", "SAN MARTIN", "SAN MATEO", "SAN MIGUEL", "SAN PABLO", "SAN RAFAEL", "SAN RAMON", "SANTA ANA", "SANTA BARBARA", "SANTA CLARA", "SANTA CLARITA", "SANTA CRUZ", "SANTA FE SPRINGS", "SANTA MARIA", "SANTA MONICA", "SANTA PAULA", "SANTA ROSA", "SANTA VENETIA", "SANTA YNEZ", "SANTEE", "SARATOGA", "SAUSALITO", "SCOTTS VALLEY", "SEAL BEACH", "SEARLES VALLEY", "SEASIDE", "SEBASTOPOL", "SEDCO HILLS", "SEELEY", "SELMA", "SEVEN TREES", "SHACKELFORD", "SHAFTER", "SHANDON", "SHASTA LAKE", "SHAVER LAKE", "SHINGLE SPRINGS", "SHINGLETOWN", "SHOSHONE", "SIERRA MADRE", "SIGNAL HILL", "SIMI VALLEY", "SOLANA BEACH", "SOLEDAD", "SOLVANG", "SONOMA", "SONORA", "SOQUEL", "SOULSBYVILLE", "SOUTH DOS PALOS", "SOUTH EL MONTE", "SOUTH GATE", "SOUTH LAKE TAHOE", "SOUTH OROVILLE", "SOUTH PASADENA", "SOUTH SAN FRANCISCO", "SOUTH SAN GABRIEL", "SOUTH SAN JOSE HILLS", "SOUTH TAFT", "SOUTH WHITTIER", "SOUTH WOODBRIDGE", "SOUTH YUBA CITY", "SPRECKELS", "SPRING GARDEN", "SPRING VALLEY", "SPRINGVILLE", "SQUAW VALLEY", "SQUIRREL MOUNTAIN VALLEY", "STALLION SPRINGS", "STANFORD", "STANTON", "STINSON BEACH", "STOCKTON", "STORRIE", "STRATFORD", "STRATHMORE", "STRAWBERRY", "SUISUN CITY", "SUMMERLAND", "SUN CITY", "SUNNYSIDE-TAHOE CITY", "SUNNYSLOPE", "SUNNYVALE", "SUNOL", "SUNOL-MIDTOWN", "SUSANVILLE", "SUTTER", "SUTTER CREEK", "TAFT", "TAFT HEIGHTS", "TAFT MOSSWOOD", "TAHOE VISTA", "TALMAGE", "TAMALPAIS-HOMESTEAD VALLEY", "TARA HILLS", "TAYLORSVILLE", "TECOPA", "TEHACHAPI", "TEHAMA", "TEMECULA", "TEMELEC", "TEMPLE CITY", "TEMPLETON", "TENNANT", "TERRA BELLA", "THERMALITO", "THOUSAND OAKS", "THOUSAND PALMS", "THREE RIVERS", "TIBURON", "TIERRA BUENA", "TIPTON", "TOBIN", "TOMALES", "TORO CANYON", "TORRANCE", "TRACY", "TRANQUILLITY", "TRAVER", "TRINIDAD", "TRUCKEE", "TULARE", "TULELAKE", "TUOLUMNE CITY", "TUPMAN", "TURLOCK", "TUSTIN", "TUSTIN FOOTHILLS", "TWAIN", "TWAIN HARTE", "TWENTYNINE PALMS", "TWENTYNINE PALMS BASE", "TWIN LAKES", "UKIAH", "UNION CITY", "UPLAND", "UPPER LAKE", "VACAVILLE", "VALINDA", "VALLECITO", "VALLEJO", "VALLE VISTA", "VALLEY ACRES", "VALLEY CENTER", "VALLEY RANCH", "VALLEY SPRINGS", "VAL VERDE", "VANDENBERG AFB", "VANDENBERG VILLAGE", "VERNON", "VICTORVILLE", "VIEW PARK-WINDSOR HILLS", "VILLA PARK", "VINCENT", "VINE HILL", "VINEYARD", "VISALIA", "VISTA", "WALDON", "WALLACE", "WALNUT", "WALNUT CREEK", "WALNUT GROVE", "WALNUT PARK", "WASCO", "WATERFORD", "WATSONVILLE", "WEAVERVILLE", "WEED", "WEEDPATCH", "WELDON", "WEST ATHENS", "WEST BISHOP", "WEST CARSON", "WEST COMPTON", "WEST COVINA", "WESTHAVEN-MOONSTONE", "WEST HOLLYWOOD", "WESTLAKE VILLAGE", "WESTLEY", "WEST MENLO PARK", "WESTMINSTER", "WEST MODESTO", "WESTMONT", "WESTMORLAND", "WEST POINT", "WEST PUENTE VALLEY", "WEST SACRAMENTO", "WEST WHITTIER-LOS NIETOS", "WESTWOOD", "WHEATLAND", "WHITEHAWK", "WHITTIER", "WILDOMAR", "WILKERSON", "WILLIAMS", "WILLITS", "WILLOWBROOK", "WILLOW CREEK", "WILLOWS", "WILTON", "WINCHESTER", "WINDSOR", "WINTER GARDENS", "WINTERHAVEN", "WINTERS", "WINTON", "WOFFORD HEIGHTS", "WOODACRE", "WOODCREST", "WOODLAKE", "WOODLAND", "WOODSIDE", "WOODVILLE", "WRIGHTWOOD", "YORBA LINDA", "YOSEMITE LAKES", "YOSEMITE VALLEY", "YOUNTVILLE", "YREKA", "YUBA CITY", "YUCAIPA", "YUCCA VALLEY"],
    Florida: ["ALACHUA", "ALFORD", "ALTAMONTE SPRINGS", "ALTHA", "ALTOONA", "ALVA", "ANDOVER", "ANDREWS", "ANNA MARIA", "APALACHICOLA", "APOLLO BEACH", "APOPKA", "ARCADIA", "ARCHER", "ASBURY LAKE", "ASTATULA", "ASTOR", "ATLANTIC BEACH", "ATLANTIS", "AUBURNDALE", "AVENTURA", "AVON PARK", "AZALEA PARK", "BABSON PARK", "BAGDAD", "BALDWIN", "BAL HARBOUR", "BARTOW", "BASCOM", "BAY HARBOR ISLANDS", "BAY HILL", "BAY LAKE", "BAYONET POINT", "BAY PINES", "BAYPORT", "BAYSHORE GARDENS", "BEACON SQUARE", "BEE RIDGE", "BELL", "BELLAIR-MEADOWBROOK TERRACE", "BELLEAIR", "BELLEAIR BEACH", "BELLEAIR BLUFFS", "BELLEAIR SHORE", "BELLE GLADE", "BELLE GLADE CAMP", "BELLE ISLE", "BELLEVIEW", "BELLVIEW", "BEVERLY BEACH", "BEVERLY HILLS", "BIG COPPITT KEY", "BIG PINE KEY", "BISCAYNE PARK", "BITHLO", "BLACK DIAMOND", "BLOOMINGDALE", "BLOUNTSTOWN", "BOCA DEL MAR", "BOCA POINTE", "BOCA RATON", "BOKEELIA", "BONIFAY", "BONITA SPRINGS", "BONNIE LOCK-WOODSETTER NORTH", "BOULEVARD GARDENS", "BOWLING GREEN", "BOYETTE", "BOYNTON BEACH", "BRADENTON", "BRADENTON BEACH", "BRANDON", "BRANFORD", "BRENT", "BRINY BREEZES", "BRISTOL", "BROADVIEW PARK", "BROADVIEW-POMPANO PARK", "BRONSON", "BROOKER", "BROOKRIDGE", "BROOKSVILLE", "BROWARD ESTATES", "BROWNSVILLE", "BUCKHEAD RIDGE", "BUCKINGHAM", "BUNCHE PARK", "BUNNELL", "BURNT STORE MARINA", "BUSHNELL", "BUTLER BEACH", "CALLAHAN", "CALLAWAY", "CAMPBELL", "CAMPBELLTON", "CANAL POINT", "CAPE CANAVERAL", "CAPE CORAL", "CAPTIVA", "CAROL CITY", "CARRABELLE", "CARVER RANCHES", "CARYVILLE", "CASSELBERRY", "CEDAR GROVE", "CEDAR KEY", "CELEBRATION", "CENTER HILL", "CENTURY", "CENTURY VILLAGE", "CHAMBERS ESTATES", "CHARLESTON PARK", "CHARLOTTE HARBOR", "CHARLOTTE PARK", "CHATTAHOOCHEE", "CHEVAL", "CHIEFLAND", "CHIPLEY", "CHOKOLOSKEE", "CHRISTMAS", "CHULA VISTA", "CHULUOTA", "CINCO BAYOU", "CITRUS HILLS", "CITRUS PARK", "CITRUS RIDGE", "CITRUS SPRINGS", "CLEARWATER", "CLERMONT", "CLEVELAND", "CLEWISTON", "CLOUD LAKE", "COCOA", "COCOA BEACH", "COCOA WEST", "COCONUT CREEK", "COLEMAN", "COLLIER MANOR-CRESTHAVEN", "COMBEE SETTLEMENT", "CONWAY", "COOPER CITY", "CORAL GABLES", "CORAL SPRINGS", "CORAL TERRACE", "CORTEZ", "COTTONDALE", "COUNTRY CLUB", "COUNTRY ESTATES", "COUNTRY WALK", "CRESCENT BEACH", "CRESCENT CITY", "CRESTVIEW", "CROOKED LAKE PARK", "CROSS CITY", "CRYSTAL LAKE", "CRYSTAL LAKE", "CRYSTAL RIVER", "CRYSTAL SPRINGS", "CUDJOE KEY", "CUTLER", "CUTLER RIDGE", "CYPRESS GARDENS", "CYPRESS LAKE", "CYPRESS LAKES", "CYPRESS QUARTERS", "DADE CITY", "DADE CITY NORTH", "DANIA BEACH", "DAVENPORT", "DAVIE", "DAYTONA BEACH", "DAYTONA BEACH SHORES", "DE BARY", "DEERFIELD BEACH", "DE FUNIAK SPRINGS", "DE LAND", "DE LAND SOUTHWEST", "DE LEON SPRINGS", "DELRAY BEACH", "DELTONA", "DESOTO LAKES", "DESTIN", "DOCTOR PHILLIPS", "DORAL", "DOVER", "DUCK KEY", "DUNDEE", "DUNEDIN", "DUNES ROAD", "DUNNELLON", "EAGLE LAKE", "EAST BRONSON", "EAST DUNBAR", "EAST LAKE", "EAST LAKE-ORIENT PARK", "EAST PALATKA", "EAST PERRINE", "EASTPOINT", "EAST WILLISTON", "EATONVILLE", "EBRO", "EDGEWATER", "EDGEWATER", "EDGEWOOD", "EGLIN AFB", "EGYPT LAKE-LETO", "ELFERS", "ELLENTON", "EL PORTAL", "ENGLEWOOD", "ENSLEY", "ESTATES OF FORT LAUDERDALE", "ESTERO", "ESTO", "EUSTIS", "EVERGLADES", "FAIRVIEW SHORES", "FANNING SPRINGS", "FEATHER SOUND", "FELLSMERE", "FERNANDINA BEACH", "FERNDALE", "FERN PARK", "FERRY PASS", "FISHER ISLAND", "FISH HAWK", "FIVE POINTS", "FLAGLER BEACH", "FLORAL CITY", "FLORIDA CITY", "FLORIDA RIDGE", "FOREST CITY", "FORT LAUDERDALE", "FORT MEADE", "FORT MYERS", "FORT MYERS BEACH", "FORT MYERS SHORES", "FORT PIERCE", "FORT PIERCE NORTH", "FORT PIERCE SOUTH", "FORT WALTON BEACH", "FORT WHITE", "FOUNTAINBLEAU", "FRANKLIN PARK", "FREEPORT", "FREMD VILLAGE-PADGETT ISLAND", "FROSTPROOF", "FRUIT COVE", "FRUITLAND PARK", "FRUITVILLE", "FUSSELS CORNER", "GAINESVILLE", "GANDY", "GATEWAY", "GENEVA", "GIBSONIA", "GIBSONTON", "GIFFORD", "GLADEVIEW", "GLENCOE", "GLEN RIDGE", "GLEN ST. MARY", "GLENVAR HEIGHTS", "GODFREY ROAD", "GOLDEN BEACH", "GOLDEN GATE", "GOLDEN GLADES", "GOLDEN HEIGHTS", "GOLDEN LAKES", "GOLDENROD", "GOLF", "GONZALEZ", "GOODLAND", "GOTHA", "GOULDING", "GOULDS", "GRACEVILLE", "GRAND RIDGE", "GREATER CARROLLWOOD", "GREATER NORTHDALE", "GREATER SUN CENTER", "GREENACRES", "GREEN COVE SPRINGS", "GREEN MEADOW", "GREENSBORO", "GREENVILLE", "GREENWOOD", "GRETNA", "GROVE CITY", "GROVELAND", "GULF BREEZE", "GULF GATE ESTATES", "GULFPORT", "GULF STREAM", "GUN CLUB ESTATES", "HAINES CITY", "HALLANDALE", "HAMPTON", "HAMPTONS AT BOCA RATON", "HARBOR BLUFFS", "HARBOUR HEIGHTS", "HARLEM", "HARLEM HEIGHTS", "HASTINGS", "HAVANA", "HAVERHILL", "HAWTHORNE", "HEATHROW", "HERNANDO", "HERNANDO BEACH", "HIALEAH", "HIALEAH GARDENS", "HIGHLAND BEACH", "HIGHLAND CITY", "HIGHLAND PARK", "HIGH POINT", "HIGH POINT", "HIGH SPRINGS", "HILAND PARK", "HILLCREST HEIGHTS", "HILLIARD", "HILL N DALE", "HILLSBORO BEACH", "HILLSBORO PINES", "HILLSBORO RANCHES", "HOBE SOUND", "HOLDEN HEIGHTS", "HOLIDAY", "HOLLY HILL", "HOLLYWOOD", "HOLMES BEACH", "HOMESTEAD", "HOMESTEAD BASE", "HOMOSASSA", "HOMOSASSA SPRINGS", "HORSESHOE BEACH", "HOWEY-IN-THE-HILLS", "HUDSON", "HUNTERS CREEK", "HUTCHINSON ISLAND SOUTH", "HYPOLUXO", "IMMOKALEE", "INDIALANTIC", "INDIAN CREEK", "INDIAN HARBOUR BEACH", "INDIAN RIVER ESTATES", "INDIAN RIVER SHORES", "INDIAN ROCKS BEACH", "INDIAN SHORES", "INDIANTOWN", "INGLIS", "INTERLACHEN", "INVERNESS", "INVERNESS HIGHLANDS NORTH", "INVERNESS HIGHLANDS SOUTH", "INWOOD", "IONA", "ISLAMORADA", "ISLANDIA", "ISTACHATTA", "IVANHOE ESTATES", "IVES ESTATES", "JACKSONVILLE", "JACKSONVILLE BEACH", "JACOB CITY", "JAN PHYL VILLAGE", "JASMINE ESTATES", "JASPER", "JAY", "JENNINGS", "JENSEN BEACH", "JUNE PARK", "JUNO BEACH", "JUNO RIDGE", "JUPITER", "JUPITER INLET COLONY", "JUPITER ISLAND", "KATHLEEN", "KENDALE LAKES", "KENDALL", "KENDALL GREEN", "KENDALL WEST", "KENNETH CITY", "KENSINGTON PARK", "KEY BISCAYNE", "KEY COLONY BEACH", "KEY LARGO", "KEYSTONE", "KEYSTONE HEIGHTS", "KEY WEST", "KINGS POINT", "KISSIMMEE", "LABELLE", "LACOOCHEE", "LA CROSSE", "LADY LAKE", "LAGUNA BEACH", "LAKE ALFRED", "LAKE BELVEDERE ESTATES", "LAKE BUENA VISTA", "LAKE BUTLER", "LAKE BUTTER", "LAKE CITY", "LAKE CLARKE SHORES", "LAKE FOREST", "LAKE HAMILTON", "LAKE HARBOR", "LAKE HART", "LAKE HELEN", "LAKE KATHRYN", "LAKELAND", "LAKELAND HIGHLANDS", "LAKE LINDSEY", "LAKE LORRAINE", "LAKE LUCERNE", "LAKE MACK-FOREST HILLS", "LAKE MAGDALENE", "LAKE MARY", "LAKE PANASOFFKEE", "LAKE PARK", "LAKE PLACID", "LAKE SARASOTA", "LAKES BY THE BAY", "LAKESIDE", "LAKESIDE GREEN", "LAKE WALES", "LAKEWOOD PARK", "LAKE WORTH", "LAKE WORTH CORRIDOR", "LAND O LAKES", "LANTANA", "LARGO", "LAUDERDALE-BY-THE-SEA", "LAUDERDALE LAKES", "LAUDERHILL", "LAUREL", "LAUREL HILL", "LAWTEY", "LAYTON", "LAZY LAKE", "LECANTO", "LEE", "LEESBURG", "LEHIGH ACRES", "LEISURE CITY", "LEISUREVILLE", "LELY", "LELY RESORT", "LIGHTHOUSE POINT", "LIMESTONE CREEK", "LISBON", "LIVE OAK", "LOCH LOMOND", "LOCHMOOR WATERWAY ESTATES", "LOCKHART", "LONGBOAT KEY", "LONGWOOD", "LOUGHMAN", "LOWER GRAND LAGOON", "LUTZ", "LYNN HAVEN", "MACCLENNY", "MCGREGOR", "MCINTOSH", "MADEIRA BEACH", "MADISON", "MAITLAND", "MALABAR", "MALONE", "MANALAPAN", "MANASOTA KEY", "MANATTEE ROAD", "MANGO", "MANGONIA PARK", "MARATHON", "MARCO ISLAND", "MARGATE", "MARIANNA", "MARINELAND", "MARY ESTHER", "MASARYKTOWN", "MASCOTTE", "MATLACHA", "MATLACHA ISLES-MATLACHA SHORES", "MAYO", "MEADOW WOODS", "MEDLEY", "MEDULLA", "MELBOURNE", "MELBOURNE BEACH", "MELBOURNE VILLAGE", "MELROSE PARK", "MEMPHIS", "MERRITT ISLAND", "MEXICO BEACH", "MIAMI", "MIAMI BEACH", "MIAMI GARDENS", "MIAMI LAKES", "MIAMI SHORES", "MIAMI SPRINGS", "MICANOPY", "MICCO", "MIDDLEBURG", "MIDWAY", "MIDWAY", "MILTON", "MIMS", "MINNEOLA", "MIRAMAR", "MIRAMAR BEACH", "MISSION BAY", "MOLINO", "MONTICELLO", "MONTVERDE", "MOORE HAVEN", "MOUNT DORA", "MOUNT PLYMOUTH", "MULBERRY", "MYRTLE GROVE", "NAPLES", "NAPLES MANOR", "NAPLES PARK", "NARANJA", "NASSAU VILLAGE-RATLIFF", "NEPTUNE BEACH", "NEWBERRY", "NEW PORT RICHEY", "NEW PORT RICHEY EAST", "NEW SMYRNA BEACH", "NICEVILLE", "NOBLETON", "NOKOMIS", "NOMA", "NORLAND", "NORTH ANDREWS GARDENS", "NORTH BAY VILLAGE", "NORTH BEACH", "NORTH BROOKSVILLE", "NORTH DE LAND", "NORTH FORT MYERS", "NORTH KEY LARGO", "NORTH LAUDERDALE", "NORTH MIAMI", "NORTH MIAMI BEACH", "NORTH PALM BEACH", "NORTH PORT", "NORTH REDINGTON BEACH", "NORTH RIVER SHORES", "NORTH SARASOTA", "NORTH WEEKI WACHEE", "OAK HILL", "OAKLAND", "OAKLAND PARK", "OAK POINT", "OAK RIDGE", "OCALA", "OCEAN BREEZE PARK", "OCEAN CITY", "OCEAN RIDGE", "OCOEE", "ODESSA", "OJUS", "OKAHUMPKA", "OKEECHOBEE", "OLDSMAR", "OLGA", "OLYMPIA HEIGHTS", "OPA-LOCKA", "OPA-LOCKA NORTH", "ORANGE CITY", "ORANGE PARK", "ORANGETREE", "ORCHID", "ORLANDO", "ORLOVISTA", "ORMOND BEACH", "ORMOND-BY-THE-SEA", "OSPREY", "OTTER CREEK", "OVIEDO", "PACE", "PAGE PARK", "PAHOKEE", "PAISLEY", "PALATKA", "PALM AIRE", "PALM BAY", "PALM BEACH", "PALM BEACH GARDENS", "PALM BEACH SHORES", "PALM CITY", "PALM COAST", "PALMETTO", "PALMETTO ESTATES", "PALM HARBOR", "PALMONA PARK", "PALM RIVER-CLAIR MEL", "PALM SHORES", "PALM SPRINGS", "PALM SPRINGS NORTH", "PALM VALLEY", "PANAMA CITY", "PANAMA CITY BEACH", "PARADISE HEIGHTS", "PARKER", "PARKLAND", "PAXTON", "PEBBLE CREEK", "PELICAN BAY", "PEMBROKE PARK", "PEMBROKE PINES", "PENNEY FARMS", "PENSACOLA", "PERRY", "PIERSON", "PINE CASTLE", "PINECREST", "PINE HILLS", "PINE ISLAND", "PINE ISLAND CENTER", "PINE ISLAND RIDGE", "PINE LAKES", "PINELAND", "PINELLAS PARK", "PINE MANOR", "PINE RIDGE", "PINE RIDGE", "PINEWOOD", "PITTMAN", "PLACID LAKES", "PLANTATION", "PLANTATION", "PLANTATION ISLAND", "PLANTATION MOBILE HOME PARK", "PLANT CITY", "POINCIANA", "POLK CITY", "POMONA PARK", "POMPANO BEACH", "POMPANO BEACH HIGHLANDS", "POMPANO ESTATES", "PONCE DE LEON", "PONCE INLET", "PORT CHARLOTTE", "PORT LA BELLE", "PORT ORANGE", "PORT RICHEY", "PORT ST. JOE", "PORT ST. JOHN", "PORT ST. LUCIE", "PORT ST. LUCIE-RIVER PARK", "PORT SALERNO", "PRETTY BAYOU", "PRINCETON", "PROGRESS VILLAGE", "PUNTA GORDA", "PUNTA RASSA", "QUINCY", "RAIFORD", "RAMBLEWOOD EAST", "RAVENSWOOD ESTATES", "REDDICK", "REDINGTON BEACH", "REDINGTON SHORES", "RICHMOND HEIGHTS", "RICHMOND WEST", "RIDGECREST", "RIDGE MANOR", "RIDGE WOOD HEIGHTS", "RIO", "RIVERLAND VILLAGE", "RIVERVIEW", "RIVIERA BEACH", "ROCK ISLAND", "ROCKLEDGE", "ROLLING OAKS", "ROOSEVELT GARDENS", "ROSELAND", "ROTONDA", "ROYAL PALM BEACH", "ROYAL PALM ESTATES", "ROYAL PALM RANCHES", "RUSKIN", "SAFETY HARBOR", "ST. AUGUSTINE", "ST. AUGUSTINE BEACH", "ST. AUGUSTINE SHORES", "ST. AUGUSTINE SOUTH", "ST. CLOUD", "ST. GEORGE", "ST. JAMES CITY", "ST. LEO", "ST. LUCIE", "ST. MARKS", "ST. PETE BEACH", "ST. PETERSBURG", "SAMOSET", "SAMSULA-SPRUCE CREEK", "SAN ANTONIO", "SAN CARLOS PARK", "SANDALFOOT COVE", "SANFORD", "SANIBEL", "SARASOTA", "SARASOTA SPRINGS", "SATELLITE BEACH", "SAWGRASS", "SCHALL CIRCLE", "SCOTT LAKE", "SEA RANCH LAKES", "SEBASTIAN", "SEBRING", "SEFFNER", "SEMINOLE", "SEMINOLE MANOR", "SEWALL S POINT", "SHADY HILLS", "SHALIMAR", "SHARPES", "SIESTA KEY", "SILVER LAKE", "SILVER SPRINGS SHORES", "SKY LAKE", "SNEADS", "SOLANA", "SOPCHOPPY", "SORRENTO", "SOUTH APOPKA", "SOUTH BAY", "SOUTH BEACH", "SOUTH BRADENTON", "SOUTH BROOKSVILLE", "SOUTHCHASE", "SOUTH DAYTONA", "SOUTHEAST ARCADIA", "SOUTHGATE", "SOUTH GATE RIDGE", "SOUTH HIGHPOINT", "SOUTH MIAMI", "SOUTH MIAMI HEIGHTS", "SOUTH PALM BEACH", "SOUTH PASADENA", "SOUTH PATRICK SHORES", "SOUTH SARASOTA", "SOUTH VENICE", "SPRINGFIELD", "SPRING HILL", "SPRING LAKE", "STACEY STREET", "STARKE", "STOCK ISLAND", "STUART", "SUGARMILL WOODS", "SUNCOAST ESTATES", "SUNNY ISLES BEACH", "SUNRISE", "SUNSET", "SUNSHINE ACRES", "SUNSHINE RANCHES", "SURFSIDE", "SWEETWATER", "SYLVAN SHORES", "TAFT", "TALLAHASSEE", "TAMARAC", "TAMIAMI", "TAMPA", "TANGELO PARK", "TANGERINE", "TARPON SPRINGS", "TAVARES", "TAVERNIER", "TAYLOR CREEK", "TEDDER", "TEMPLE TERRACE", "TEQUESTA", "TERRA MAR", "THE CROSSINGS", "THE HAMMOCKS", "THE MEADOWS", "THE VILLAGES", "THONOTOSASSA", "THREE LAKES", "THREE OAKS", "TICE", "TIERRA VERDE", "TILDENVILLE", "TIMBER PINES", "TITUSVILLE", "TOWN N COUNTRY", "TREASURE ISLAND", "TRENTON", "TRINITY", "TWIN LAKES", "TYNDALL AFB", "UMATILLA", "UNION PARK", "UNIVERSITY", "UNIVERSITY PARK", "UPPER GRAND LAGOON", "UTOPIA", "VALPARAISO", "VALRICO", "VAMO", "VENICE", "VENICE GARDENS", "VERNON", "VERO BEACH", "VERO BEACH SOUTH", "VILLAGE PARK", "VILLAGES OF ORIOLE", "VILLANO BEACH", "VILLAS", "VINEYARDS", "VIRGINIA GARDENS", "WABASSO", "WABASSO BEACH", "WAHNETA", "WALDO", "WARM MINERAL SPRINGS", "WARRINGTON", "WASHINGTON PARK", "WATERTOWN", "WAUCHULA", "WAUSAU", "WAVERLY", "WEBSTER", "WEDGEFIELD", "WEEKI WACHEE", "WEEKI WACHEE GARDENS", "WEKIWA SPRINGS", "WELAKA", "WELLINGTON", "WESLEY CHAPEL", "WESLEY CHAPEL SOUTH", "WEST AND EAST LEALMAN", "WEST BRADENTON", "WESTCHASE", "WESTCHESTER", "WEST DE LAND", "WESTGATE-BELVEDERE HOMES", "WEST KEN-LARK", "WEST LITTLE RIVER", "WEST MELBOURNE", "WEST MIAMI", "WESTON", "WEST PALM BEACH", "WEST PENSACOLA", "WEST PERRINE", "WEST SAMOSET", "WEST VERO CORRIDOR", "WESTVIEW", "WESTVILLE", "WESTWOOD LAKES", "WEWAHITCHKA", "WHISKEY CREEK", "WHISPER WALK", "WHITE CITY", "WHITE SPRINGS", "WHITFIELD", "WILDWOOD", "WILLIAMSBURG", "WILLISTON", "WILLISTON HIGHLANDS", "WILLOW OAK", "WILTON MANORS", "WIMAUMA", "WINDERMERE", "WINSTON", "WINTER BEACH", "WINTER GARDEN", "WINTER HAVEN", "WINTER PARK", "WINTER SPRINGS", "WOODVILLE", "WORTHINGTON SPRINGS", "WRIGHT", "YALAHA", "YANKEETOWN", "YEEHAW JUNCTION", "YULEE", "ZELLWOOD", "ZEPHYRHILLS", "ZEPHYRHILLS NORTH", "ZEPHYRHILLS SOUTH", "ZEPHYRHILLS WEST", "ZOLFO SPRINGS"],
    Georgia: ["ABBEVILLE", "ACWORTH", "ADAIRSVILLE", "ADEL", "ADRIAN", "AILEY", "ALAMO", "ALAPAHA", "ALBANY", "ALDORA", "ALLENHURST", "ALLENTOWN", "ALMA", "ALPHARETTA", "ALSTON", "ALTO", "AMBROSE", "AMERICUS", "ANDERSONVILLE", "ARABI", "ARAGON", "ARCADE", "ARGYLE", "ARLINGTON", "ARNOLDSVILLE", "ASHBURN", "ATHENS-CLARKE COUNTY", "ATLANTA", "ATTAPULGUS", "AUBURN", "AUGUSTA-RICHMOND COUNTY", "AUSTELL", "AVALON", "AVERA", "AVONDALE ESTATES", "BACONTON", "BAINBRIDGE", "BALDWIN", "BALL GROUND", "BARNESVILLE", "BARTOW", "BARWICK", "BAXLEY", "BELLVILLE", "BELVEDERE PARK", "BERKELEY LAKE", "BERLIN", "BETHLEHEM", "BETWEEN", "BIBB CITY", "BISHOP", "BLACKSHEAR", "BLACKSVILLE", "BLAIRSVILLE", "BLAKELY", "BLOOMINGDALE", "BLUE RIDGE", "BLUFFTON", "BLYTHE", "BOGART", "BONANZA", "BOSTON", "BOSTWICK", "BOWDON", "BOWERSVILLE", "BOWMAN", "BRASELTON", "BRASWELL", "BREMEN", "BRINSON", "BRONWOOD", "BROOKLET", "BROOKS", "BROXTON", "BRUNSWICK", "BUCHANAN", "BUCKHEAD", "BUENA VISTA", "BUFORD", "BUTLER", "BYROMVILLE", "BYRON", "CADWELL", "CAIRO", "CALHOUN", "CAMAK", "CAMILLA", "CANDLER-MCAFEE", "CANON", "CANTON", "CARL", "CARLTON", "CARNESVILLE", "CARROLLTON", "CARTERSVILLE", "CAVE SPRING", "CECIL", "CEDARTOWN", "CENTERVILLE", "CENTRALHATCHEE", "CHAMBLEE", "CHATSWORTH", "CHATTANOOGA VALLEY", "CHAUNCEY", "CHESTER", "CHICKAMAUGA", "CLARKESVILLE", "CLARKSTON", "CLAXTON", "CLAYTON", "CLERMONT", "CLEVELAND", "CLIMAX", "COBBTOWN", "COCHRAN", "COHUTTA", "COLBERT", "COLEMAN", "COLLEGE PARK", "COLLINS", "COLQUITT", "COLUMBUS CITY", "COMER", "COMMERCE", "CONCORD", "CONLEY", "CONYERS", "COOLIDGE", "CORDELE", "CORINTH", "CORNELIA", "COUNTRY CLUB ESTATES", "COVINGTON", "CRAWFORD", "CRAWFORDVILLE", "CULLODEN", "CUMMING", "CUSSETA", "CUTHBERT", "DACULA", "DAHLONEGA", "DAISY", "DALLAS", "DALTON", "DAMASCUS", "DANIELSVILLE", "DANVILLE", "DARIEN", "DASHER", "DAVISBORO", "DAWSON", "DAWSONVILLE", "DEARING", "DECATUR", "DEENWOOD", "DEEPSTEP", "DEMOREST", "DENTON", "DE SOTO", "DEXTER", "DILLARD", "DOCK JUNCTION", "DOERUN", "DONALSONVILLE", "DOOLING", "DORAVILLE", "DOUGLAS", "DOUGLASVILLE", "DRUID HILLS", "DUBLIN", "DUDLEY", "DULUTH", "DUNWOODY", "DU PONT", "EAST DUBLIN", "EAST ELLIJAY", "EAST GRIFFIN", "EASTMAN", "EAST NEWNAN", "EAST POINT", "EATONTON", "EDGE HILL", "EDISON", "ELBERTON", "ELLAVILLE", "ELLENTON", "ELLIJAY", "EMERSON", "ENIGMA", "EPHESUS", "ETON", "EUHARLEE", "EVANS", "EXPERIMENT", "FAIRBURN", "FAIRMOUNT", "FAIR OAKS", "FAIRVIEW", "FARGO", "FAYETTEVILLE", "FITZGERALD", "FLEMINGTON", "FLOVILLA", "FLOWERY BRANCH", "FOLKSTON", "FOREST PARK", "FORSYTH", "FORT BENNING SOUTH", "FORT GAINES", "FORT OGLETHORPE", "FORT STEWART", "FORT VALLEY", "FRANKLIN", "FRANKLIN SPRINGS", "FUNSTON", "GAINESVILLE", "GARDEN CITY", "GARFIELD", "GAY", "GENEVA", "GEORGETOWN", "GEORGETOWN", "GIBSON", "GILLSVILLE", "GIRARD", "GLENNVILLE", "GLENWOOD", "GOOD HOPE", "GORDON", "GRAHAM", "GRANTVILLE", "GRAY", "GRAYSON", "GREENSBORO", "GREENVILLE", "GRESHAM PARK", "GRIFFIN", "GROVETOWN", "GUMBRANCH", "GUMLOG", "GUYTON", "HAGAN", "HAHIRA", "HAMILTON", "HAMPTON", "HANNAHS MILL", "HAPEVILLE", "HARALSON", "HARLEM", "HARRISON", "HARTWELL", "HAWKINSVILLE", "HAZLEHURST", "HELEN", "HELENA", "HEPHZIBAH", "HIAWASSEE", "HIGGSTON", "HILLTOP", "HILTONIA", "HINESVILLE", "HIRAM", "HOBOKEN", "HOGANSVILLE", "HOLLY SPRINGS", "HOMELAND", "HOMER", "HOMERVILLE", "HOSCHTON", "HULL", "IDEAL", "ILA", "INDIAN SPRINGS", "IRON CITY", "IRONDALE", "IRWINTON", "ISLE OF HOPE", "IVEY", "JACKSON", "JACKSONVILLE", "JAKIN", "JASPER", "JEFFERSON", "JEFFERSONVILLE", "JENKINSBURG", "JERSEY", "JESUP", "JONESBORO", "JUNCTION CITY", "KENNESAW", "KEYSVILLE", "KINGS BAY BASE", "KINGSLAND", "KINGSTON", "KITE", "LA FAYETTE", "LAGRANGE", "LAKE CITY", "LAKELAND", "LAKE PARK", "LAKEVIEW", "LAKEVIEW ESTATES", "LAVONIA", "LAWRENCEVILLE", "LEARY", "LEESBURG", "LENOX", "LESLIE", "LEXINGTON", "LILBURN", "LILLY", "LINCOLN PARK", "LINCOLNTON", "LINDALE", "LITHIA SPRINGS", "LITHONIA", "LOCUST GROVE", "LOGANVILLE", "LONE OAK", "LOOKOUT MOUNTAIN", "LOUISVILLE", "LOVEJOY", "LUDOWICI", "LULA", "LUMBER CITY", "LUMPKIN", "LUTHERSVILLE", "LYERLY", "LYONS", "MABLETON", "MCCAYSVILLE", "MCDONOUGH", "MCINTYRE", "MACON", "MCRAE", "MADISON", "MANASSAS", "MANCHESTER", "MANSFIELD", "MARIETTA", "MARSHALLVILLE", "MARTIN", "MARTINEZ", "MAXEYS", "MAYSVILLE", "MEANSVILLE", "MEIGS", "MENLO", "METTER", "MIDVILLE", "MIDWAY", "MIDWAY-HARDWICK", "MILAN", "MILLEDGEVILLE", "MILLEN", "MILNER", "MITCHELL", "MOLENA", "MONROE", "MONTEZUMA", "MONTGOMERY", "MONTICELLO", "MONTROSE", "MOODY AFB", "MORELAND", "MORGAN", "MORGANTON", "MORROW", "MORVEN", "MOULTRIE", "MOUNTAIN CITY", "MOUNTAIN PARK", "MOUNTAIN PARK", "MOUNT AIRY", "MOUNT VERNON", "MOUNT ZION", "NAHUNTA", "NASHVILLE", "NELSON", "NEWBORN", "NEWINGTON", "NEWNAN", "NEWTON", "NICHOLLS", "NICHOLSON", "NORCROSS", "NORMAN PARK", "NORTH ATLANTA", "NORTH DECATUR", "NORTH DRUID HILLS", "NORTH HIGH SHOALS", "NORWOOD", "NUNEZ", "OAK PARK", "OAKWOOD", "OCHLOCKNEE", "OCILLA", "OCONEE", "ODUM", "OFFERMAN", "OGLETHORPE", "OLIVER", "OMEGA", "ORCHARD HILL", "OXFORD", "PALMETTO", "PANTHERSVILLE", "PARROTT", "PATTERSON", "PAVO", "PAYNE", "PEACHTREE CITY", "PEARSON", "PELHAM", "PEMBROKE", "PENDERGRASS", "PERRY", "PHILLIPSBURG", "PINEHURST", "PINE LAKE", "PINE MOUNTAIN", "PINEVIEW", "PITTS", "PLAINS", "PLAINVILLE", "POOLER", "PORTAL", "PORTERDALE", "PORT WENTWORTH", "POULAN", "POWDER SPRINGS", "PRESTON", "PULASKI", "PUTNEY", "QUITMAN", "RANGER", "RAOUL", "RAY CITY", "RAYLE", "REBECCA", "REDAN", "REED CREEK", "REGISTER", "REIDSVILLE", "REMERTON", "RENTZ", "RESACA", "REST HAVEN", "REYNOLDS", "RHINE", "RICEBORO", "RICHLAND", "RICHMOND HILL", "RIDDLEVILLE", "RINCON", "RINGGOLD", "RIVERDALE", "RIVERSIDE", "ROBERTA", "ROBINS AFB", "ROCHELLE", "ROCKMART", "ROCKY FORD", "ROME", "ROOPVILLE", "ROSSVILLE", "ROSWELL", "ROYSTON", "RUTLEDGE", "ST. MARYS", "ST. SIMONS", "SALE CITY", "SALEM", "SANDERSVILLE", "SANDY SPRINGS", "SANTA CLAUS", "SARDIS", "SASSER", "SAVANNAH", "SCOTLAND", "SCOTTDALE", "SCREVEN", "SENOIA", "SHADY DALE", "SHANNON", "SHARON", "SHARPSBURG", "SHELLMAN", "SHILOH", "SILOAM", "SKIDAWAY ISLAND", "SKY VALLEY", "SMITHVILLE", "SMYRNA", "SNELLVILLE", "SOCIAL CIRCLE", "SOPERTON", "SPARKS", "SPARTA", "SPRINGFIELD", "STAPLETON", "STATESBORO", "STATHAM", "STILLMORE", "STOCKBRIDGE", "STONE MOUNTAIN", "SUGAR HILL", "SUMMERTOWN", "SUMMERVILLE", "SUMNER", "SUNNY SIDE", "SUNNYSIDE", "SUNSET VILLAGE", "SURRENCY", "SUWANEE", "SWAINSBORO", "SYCAMORE", "SYLVANIA", "SYLVESTER", "TALBOTTON", "TALKING ROCK", "TALLAPOOSA", "TALLULAH FALLS", "TALMO", "TARRYTOWN", "TAYLORSVILLE", "TEMPLE", "TENNILLE", "THOMASTON", "THOMASVILLE", "THOMSON", "THUNDERBOLT", "TIFTON", "TIGER", "TIGNALL", "TOCCOA", "TOOMSBORO", "TRENTON", "TRION", "TUCKER", "TUNNEL HILL", "TURIN", "TWIN CITY", "TYBEE ISLAND", "TYRONE", "TY TY", "UNADILLA", "UNION CITY", "UNION POINT", "UNIONVILLE", "UVALDA", "VALDOSTA", "VARNELL", "VERNONBURG", "VIDALIA", "VIDETTE", "VIENNA", "VILLA RICA", "VININGS", "WACO", "WADLEY", "WALESKA", "WALNUT GROVE", "WALTHOURVILLE", "WARM SPRINGS", "WARNER ROBINS", "WARRENTON", "WARWICK", "WASHINGTON", "WATKINSVILLE", "WAVERLY HALL", "WAYCROSS", "WAYNESBORO", "WESTON", "WEST POINT", "WHIGHAM", "WHITE", "WHITEMARSH ISLAND", "WHITE PLAINS", "WHITESBURG", "WILLACOOCHEE", "WILLIAMSON", "WILMINGTON ISLAND", "WINDER", "WINTERVILLE", "WOODBINE", "WOODBURY", "WOODLAND", "WOODSTOCK", "WOODVILLE", "WOOLSEY", "WRENS", "WRIGHTSVILLE", "YATESVILLE", "YOUNG HARRIS", "ZEBULON"],
    Hawaii: ["AHUIMANU", "AIEA", "AINALOA", "ANAHOLA", "BARBERS POINT HOUSING", "CAPTAIN COOK", "EDEN ROC", "ELEELE", "EWA BEACH", "EWA GENTRY", "EWA VILLAGES", "FERN ACRES", "FERN FOREST", "HAIKU-PAUWELA", "HALAULA", "HALAWA", "HALEIWA", "HALIIMAILE", "HANA", "HANALEI", "HANAMAULU", "HANAPEPE", "HAUULA", "HAWAIIAN ACRES", "HAWAIIAN BEACHES", "HAWAIIAN OCEAN VIEW", "HAWAIIAN PARADISE PARK", "HAWI", "HEEIA", "HICKAM HOUSING", "HILO", "HOLUALOA", "HONALO", "HONAUNAU-NAPOOPOO", "HONOKAA", "HONOLULU", "HONOMU", "IROQUOIS POINT", "KAAAWA", "KAANAPALI", "KAHALUU", "KAHALUU-KEAUHOU", "KAHUKU", "KAHULUI", "KAILUA", "KAILUA", "KALAHEO", "KALAOA", "KALIHIWAI", "KANEOHE", "KANEOHE STATION", "KAPAA", "KAPAAU", "KAPALUA", "KAUMAKANI", "KAUNAKAKAI", "KAWELA BAY", "KEAAU", "KEALAKEKUA", "KEKAHA", "KIHEI", "KILAUEA", "KOLOA", "KUALAPUU", "KUKUIHAELE", "KURTISTOWN", "LAHAINA", "LAIE", "LANAI CITY", "LAUPAHOEHOE", "LAWAI", "LEILANI ESTATES", "LIHUE", "MAALAEA", "MAILI", "MAKAHA", "MAKAHA VALLEY", "MAKAKILO CITY", "MAKAWAO", "MAUNALOA", "MAUNAWILI", "MILILANI TOWN", "MOKULEIA", "MOUNTAIN VIEW", "NAALEHU", "NANAKULI", "NANAWALE ESTATES", "NAPILI-HONOKOWAI", "OMAO", "ORCHIDLANDS ESTATES", "PAAUILO", "PAHALA", "PAHOA", "PAIA", "PAKALA VILLAGE", "PAPAIKOU", "PAUKAA", "PEARL CITY", "PEPEEKEO", "POIPU", "PRINCEVILLE", "PUAKO", "PUHI", "PUKALANI", "PUNALUU", "PUPUKEA", "SCHOFIELD BARRACKS", "VILLAGE PARK", "VOLCANO", "WAHIAWA", "WAIALUA", "WAIANAE", "WAIHEE-WAIEHU", "WAIKANE", "WAIKAPU", "WAIKOLOA VILLAGE", "WAILEA-MAKENA", "WAILUA", "WAILUA HOMESTEADS", "WAILUKU", "WAIMALU", "WAIMANALO", "WAIMANALO BEACH", "WAIMEA", "WAIMEA", "WAINAKU", "WAIPAHU", "WAIPIO", "WAIPIO ACRES", "WHEELER AFB", "WHITMORE VILLAGE"],
    Indiana: ["ADVANCE", "AKRON", "ALAMO", "ALBANY", "ALBION", "ALEXANDRIA", "ALFORDSVILLE", "ALTON", "ALTONA", "AMBIA", "AMBOY", "AMO", "ANDERSON", "ANDREWS", "ANGOLA", "ARCADIA", "ARGOS", "ASHLEY", "ATLANTA", "ATTICA", "AUBURN", "AURORA", "AUSTIN", "AVILLA", "AVON", "BAINBRIDGE", "BARGERSVILLE", "BASS LAKE", "BATESVILLE", "BATTLE GROUND", "BEDFORD", "BEECH GROVE", "BERNE", "BETHANY", "BEVERLY SHORES", "BICKNELL", "BIRDSEYE", "BLOOMFIELD", "BLOOMINGDALE", "BLOOMINGTON", "BLOUNTSVILLE", "BLUFFTON", "BOONVILLE", "BORDEN", "BOSTON", "BOSWELL", "BOURBON", "BRAZIL", "BREMEN", "BRIGHT", "BRISTOL", "BROOK", "BROOKLYN", "BROOKSBURG", "BROOKSTON", "BROOKVILLE", "BROWNSBURG", "BROWNSTOWN", "BRUCEVILLE", "BRYANT", "BUFFALO", "BUNKER HILL", "BURKET", "BURLINGTON", "BURNETTSVILLE", "BURNS HARBOR", "BUTLER", "CADIZ", "CAMBRIDGE CITY", "CAMDEN", "CAMPBELLSBURG", "CANNELBURG", "CANNELTON", "CARBON", "CARLISLE", "CARMEL", "CARTHAGE", "CAYUGA", "CEDAR GROVE", "CEDAR LAKE", "CENTER POINT", "CENTERVILLE", "CHALMERS", "CHANDLER", "CHARLESTOWN", "CHESTERFIELD", "CHESTERTON", "CHRISNEY", "CHURUBUSCO", "CICERO", "CLARKS HILL", "CLARKSVILLE", "CLAY CITY", "CLAYPOOL", "CLAYTON", "CLEAR LAKE", "CLERMONT", "CLIFFORD", "CLINTON", "CLOVERDALE", "COATESVILLE", "COLFAX", "COLLEGEVILLE", "COLUMBIA CITY", "COLUMBUS", "CONNERSVILLE", "CONVERSE", "CORUNNA", "CORYDON", "COUNTRY CLUB HEIGHTS", "COVINGTON", "CRANDALL", "CRANE", "CRAWFORDSVILLE", "CROMWELL", "CROTHERSVILLE", "CROWN POINT", "CROWS NEST", "CULVER", "CUMBERLAND", "CYNTHIANA", "DALE", "DALEVILLE", "DANA", "DANVILLE", "DARLINGTON", "DARMSTADT", "DAYTON", "DECATUR", "DECKER", "DELPHI", "DE MOTTE", "DENVER", "DILLSBORO", "DUBLIN", "DUGGER", "DUNE ACRES", "DUNKIRK", "DUNLAP", "DUNREITH", "DUPONT", "DYER", "EARL PARK", "EAST CHICAGO", "EAST GERMANTOWN", "EATON", "ECONOMY", "EDGEWOOD", "EDINBURGH", "EDWARDSPORT", "ELBERFELD", "ELIZABETH", "ELIZABETHTOWN", "ELKHART", "ELLETTSVILLE", "ELNORA", "ELWOOD", "ENGLISH", "ETNA GREEN", "EVANSVILLE", "FAIRLAND", "FAIRMOUNT", "FAIRVIEW PARK", "FARMERSBURG", "FARMLAND", "FERDINAND", "FILLMORE", "FISHERS", "FLORA", "FORT BRANCH", "FORTVILLE", "FORT WAYNE", "FOUNTAIN CITY", "FOWLER", "FOWLERTON", "FRANCESVILLE", "FRANCISCO", "FRANKFORT", "FRANKLIN", "FRANKTON", "FREDERICKSBURG", "FREMONT", "FRENCH LICK", "FULTON", "GALENA", "GALVESTON", "GARRETT", "GARY", "GAS CITY", "GASTON", "GENEVA", "GENTRYVILLE", "GEORGETOWN", "GEORGETOWN", "GLENWOOD", "GOODLAND", "GOSHEN", "GOSPORT", "GRABILL", "GRANDVIEW", "GRANGER", "GREENCASTLE", "GREENDALE", "GREENFIELD", "GREENSBORO", "GREENSBURG", "GREENS FORK", "GREENTOWN", "GREENVILLE", "GREENWOOD", "GRIFFIN", "GRIFFITH", "GRISSOM AFB", "GULIVOIRE PARK", "HAGERSTOWN", "HAMILTON", "HAMLET", "HAMMOND", "HANOVER", "HARDINSBURG", "HARMONY", "HARTFORD CITY", "HARTSVILLE", "HAUBSTADT", "HAZLETON", "HEBRON", "HENRYVILLE", "HIDDEN VALLEY", "HIGHLAND", "HIGHLAND", "HILLSBORO", "HOBART", "HOLLAND", "HOLTON", "HOMECROFT", "HOPE", "HUDSON", "HUNTERTOWN", "HUNTINGBURG", "HUNTINGTON", "HYMERA", "INDIANAPOLIS CITY", "INDIAN HEIGHTS", "INDIAN VILLAGE", "INGALLS", "JAMESTOWN", "JASONVILLE", "JASPER", "JEFFERSONVILLE", "JONESBORO", "JONESVILLE", "KEMPTON", "KENDALLVILLE", "KENNARD", "KENTLAND", "KEWANNA", "KINGMAN", "KINGSBURY", "KINGSFORD HEIGHTS", "KIRKLIN", "KNIGHTSTOWN", "KNIGHTSVILLE", "KNOX", "KOKOMO", "KOONTZ LAKE", "KOUTS", "LACONIA", "LA CROSSE", "LADOGA", "LAFAYETTE", "LA FONTAINE", "LAGRANGE", "LAGRO", "LAKE DALECARLIA", "LAKES OF THE FOUR SEASONS", "LAKE STATION", "LAKE VILLAGE", "LAKEVILLE", "LANESVILLE", "LA PAZ", "LAPEL", "LA PORTE", "LARWILL", "LAUREL", "LAWRENCE", "LAWRENCEBURG", "LEAVENWORTH", "LEBANON", "LEESBURG", "LEO-CEDARVILLE", "LEWISVILLE", "LIBERTY", "LIGONIER", "LINDEN", "LINTON", "LITTLE YORK", "LIVONIA", "LIZTON", "LOGANSPORT", "LONG BEACH", "LOOGOOTEE", "LOSANTVILLE", "LOWELL", "LYNN", "LYNNVILLE", "LYONS", "MCCORDSVILLE", "MACKEY", "MACY", "MADISON", "MARENGO", "MARION", "MARKLE", "MARKLEVILLE", "MARSHALL", "MARTINSVILLE", "MATTHEWS", "MAUCKPORT", "MECCA", "MEDARYVILLE", "MEDORA", "MELLOTT", "MELODY HILL", "MEMPHIS", "MENTONE", "MERIDIAN HILLS", "MEROM", "MERRILLVILLE", "MEXICO", "MICHIANA SHORES", "MICHIGAN CITY", "MICHIGANTOWN", "MIDDLEBURY", "MIDDLETOWN", "MILAN", "MILFORD", "MILFORD", "MILLERSBURG", "MILLHOUSEN", "MILLTOWN", "MILTON", "MISHAWAKA", "MITCHELL", "MODOC", "MONON", "MONROE", "MONROE CITY", "MONROEVILLE", "MONROVIA", "MONTEREY", "MONTEZUMA", "MONTGOMERY", "MONTICELLO", "MONTPELIER", "MOORELAND", "MOORES HILL", "MOORESVILLE", "MORGANTOWN", "MOROCCO", "MORRISTOWN", "MOUNT AUBURN", "MOUNT AYR", "MOUNT CARMEL", "MOUNT ETNA", "MOUNT SUMMIT", "MOUNT VERNON", "MULBERRY", "MUNCIE", "MUNSTER", "NAPOLEON", "NAPPANEE", "NASHVILLE", "NEW ALBANY", "NEW AMSTERDAM", "NEWBERRY", "NEWBURGH", "NEW CARLISLE", "NEW CASTLE", "NEW CHICAGO", "NEW HARMONY", "NEW HAVEN", "NEW MARKET", "NEW MIDDLETOWN", "NEW PALESTINE", "NEW PARIS", "NEW PEKIN", "NEWPOINT", "NEWPORT", "NEW RICHMOND", "NEW ROSS", "NEWTOWN", "NEW WASHINGTON", "NEW WHITELAND", "NOBLESVILLE", "NORTH CROWS NEST", "NORTH JUDSON", "NORTH LIBERTY", "NORTH MANCHESTER", "NORTH SALEM", "NORTH TERRE HAUTE", "NORTH VERNON", "NORTH WEBSTER", "NORWAY", "OAKLAND CITY", "OAK PARK", "OAKTOWN", "ODON", "OGDEN DUNES", "OLDENBURG", "ONWARD", "OOLITIC", "ORESTES", "ORLAND", "ORLEANS", "OSCEOLA", "OSGOOD", "OSSIAN", "OTTERBEIN", "OWENSVILLE", "OXFORD", "PALMYRA", "PAOLI", "PARAGON", "PARKER CITY", "PATOKA", "PATRIOT", "PENDLETON", "PENNVILLE", "PERRYSVILLE", "PERU", "PETERSBURG", "PIERCETON", "PINE VILLAGE", "PITTSBORO", "PLAINFIELD", "PLAINVILLE", "PLYMOUTH", "PONETO", "PORTAGE", "PORTER", "PORTLAND", "POSEYVILLE", "POTTAWATTAMIE PARK", "PRINCES LAKES", "PRINCETON", "REDKEY", "REMINGTON", "RENSSELAER", "REYNOLDS", "RICHMOND", "RIDGEVILLE", "RILEY", "RISING SUN", "RIVER FOREST", "ROACHDALE", "ROANN", "ROANOKE", "ROCHESTER", "ROCKPORT", "ROCKVILLE", "ROCKY RIPPLE", "ROME CITY", "ROSEDALE", "ROSELAND", "ROSELAWN", "ROSSVILLE", "ROYAL CENTER", "RUSHVILLE", "RUSSELLVILLE", "RUSSIAVILLE", "ST. JOE", "ST. JOHN", "ST. LEON", "ST. PAUL", "SALAMONIA", "SALEM", "SALTILLO", "SANDBORN", "SAN PIERRE", "SANTA CLAUS", "SARATOGA", "SCHERERVILLE", "SCHNEIDER", "SCOTTSBURG", "SEELYVILLE", "SELLERSBURG", "SELMA", "SEYMOUR", "SHADELAND", "SHAMROCK LAKES", "SHARPSVILLE", "SHELBURN", "SHELBYVILLE", "SHERIDAN", "SHIPSHEWANA", "SHIRLEY", "SHOALS", "SIDNEY", "SILVER LAKE", "SIMONTON LAKE", "SOMERVILLE", "SOUTH BEND", "SOUTH HAVEN", "SOUTHPORT", "SOUTH WHITLEY", "SPEEDWAY", "SPENCER", "SPICELAND", "SPRING GROVE", "SPRING HILL", "SPRING LAKE", "SPRINGPORT", "SPURGEON", "STAR CITY", "STATE LINE CITY", "STAUNTON", "STILESVILLE", "STINESVILLE", "STRAUGHN", "SULLIVAN", "SULPHUR SPRINGS", "SUMMITVILLE", "SUNMAN", "SWAYZEE", "SWEETSER", "SWITZ CITY", "SYRACUSE", "TAYLORSVILLE", "TELL CITY", "TENNYSON", "TERRE HAUTE", "THORNTOWN", "TIPTON", "TOPEKA", "TOWN OF PINES", "TRAFALGAR", "TRAIL CREEK", "TRI-LAKES", "TROY", "ULEN", "UNION CITY", "UNIONDALE", "UNIVERSAL", "UPLAND", "UTICA", "VALPARAISO", "VAN BUREN", "VEEDERSBURG", "VERA CRUZ", "VERNON", "VERSAILLES", "VEVAY", "VINCENNES", "WABASH", "WAKARUSA", "WALKERTON", "WALLACE", "WALTON", "WANATAH", "WARREN", "WARREN PARK", "WARSAW", "WASHINGTON", "WATERLOO", "WAVELAND", "WAYNETOWN", "WEST BADEN SPRINGS", "WEST COLLEGE CORNER", "WESTFIELD", "WEST HARRISON", "WEST LAFAYETTE", "WEST LEBANON", "WESTPORT", "WEST TERRE HAUTE", "WESTVILLE", "WHEATFIELD", "WHEATLAND", "WHITELAND", "WHITESTOWN", "WHITEWATER", "WHITING", "WILKINSON", "WILLIAMS CREEK", "WILLIAMSPORT", "WINAMAC", "WINCHESTER", "WINDFALL CITY", "WINFIELD", "WINGATE", "WINONA LAKE", "WINSLOW", "WOLCOTT", "WOLCOTTVILLE", "WOODBURN", "WOODLAWN HEIGHTS", "WORTHINGTON", "WYNNEDALE", "YEOMAN", "YORKTOWN", "ZANESVILLE", "ZIONSVILLE"],
    Kentucky: ["ADAIRVILLE", "ALBANY", "ALEXANDRIA", "ALLEN", "ALLENSVILLE", "ANCHORAGE", "ANNVILLE", "ARLINGTON", "ASHLAND", "AUBURN", "AUDUBON PARK", "AUGUSTA", "BANCROFT", "BARBOURMEADE", "BARBOURVILLE", "BARDSTOWN", "BARDWELL", "BARLOW", "BEATTYVILLE", "BEAVER DAM", "BEDFORD", "BEECHWOOD VILLAGE", "BELLEFONTE", "BELLEMEADE", "BELLEVUE", "BELLEWOOD", "BENHAM", "BENTON", "BEREA", "BERRY", "BLACKEY", "BLAINE", "BLANDVILLE", "BLOOMFIELD", "BLUE RIDGE MANOR", "BONNIEVILLE", "BOONEVILLE", "BOWLING GREEN", "BRADFORDSVILLE", "BRANDENBURG", "BRECKINRIDGE CENTER", "BREMEN", "BRIARWOOD", "BROAD FIELDS", "BRODHEAD", "BROECK POINTE", "BROMLEY", "BROOKS", "BROOKSVILLE", "BROWNSBORO FARM", "BROWNSBORO VILLAGE", "BROWNSVILLE", "BUCKHORN", "BUCKNER", "BUECHEL", "BURGIN", "BURKESVILLE", "BURLINGTON", "BURNSIDE", "BUTLER", "CADIZ", "CALHOUN", "CALIFORNIA", "CALVERT CITY", "CAMARGO", "CAMBRIDGE", "CAMPBELLSBURG", "CAMPBELLSVILLE", "CAMPTON", "CANEYVILLE", "CARLISLE", "CARROLLTON", "CARRSVILLE", "CATLETTSBURG", "CAVE CITY", "CEDARVILLE", "CENTERTOWN", "CENTRAL CITY", "CHERRYWOOD VILLAGE", "CLARKSON", "CLARYVILLE", "CLAY", "CLAY CITY", "CLINTON", "CLOVERPORT", "COAL RUN VILLAGE", "COLD SPRING", "COLDSTREAM", "COLUMBIA", "COLUMBUS", "CONCORD", "CORBIN", "CORINTH", "CORYDON", "COVINGTON", "CRAB ORCHARD", "CREEKSIDE", "CRESCENT SPRINGS", "CRESTVIEW", "CRESTVIEW HILLS", "CRESTWOOD", "CRITTENDEN", "CROFTON", "CROSSGATE", "CUMBERLAND", "CYNTHIANA", "DANVILLE", "DAWSON SPRINGS", "DAYTON", "DIXON", "DOUGLASS HILLS", "DOVER", "DRAKESBORO", "DRUID HILLS", "DRY RIDGE", "DYCUSBURG", "EARLINGTON", "EAST BERNSTADT", "EDDYVILLE", "EDGEWOOD", "EDMONTON", "EKRON", "ELIZABETHTOWN", "ELKHORN CITY", "ELKTON", "ELSMERE", "EMINENCE", "ERLANGER", "EUBANK", "EVARTS", "EWING", "FAIRDALE", "FAIRFIELD", "FAIRMEADE", "FAIRVIEW", "FALMOUTH", "FERGUSON", "FERN CREEK", "FINCASTLE", "FLATWOODS", "FLEMING-NEON", "FLEMINGSBURG", "FLORENCE", "FORDSVILLE", "FOREST HILLS", "FORT CAMPBELL NORTH", "FORT KNOX", "FORT MITCHELL", "FORT THOMAS", "FORT WRIGHT", "FOUNTAIN RUN", "FOX CHASE", "FRANKFORT", "FRANKLIN", "FREDONIA", "FRENCHBURG", "FULTON", "GAMALIEL", "GEORGETOWN", "GERMANTOWN", "GHENT", "GLASGOW", "GLENCOE", "GLENVIEW", "GLENVIEW HILLS", "GLENVIEW MANOR", "GOOSE CREEK", "GOSHEN", "GRAND RIVERS", "GRATZ", "GRAYMOOR-DEVONDALE", "GRAYSON", "GREENSBURG", "GREEN SPRING", "GREENUP", "GREENVILLE", "GUTHRIE", "HANSON", "HARDIN", "HARDINSBURG", "HARLAN", "HARRODSBURG", "HARTFORD", "HAWESVILLE", "HAZARD", "HAZEL", "HEBRON ESTATES", "HENDERSON", "HENDRON", "HICKMAN", "HICKORY HILL", "HIGHLAND HEIGHTS", "HIGHVIEW", "HILLS AND DALES", "HILLVIEW", "HINDMAN", "HISEVILLE", "HODGENVILLE", "HOLLOW CREEK", "HOLLYVILLA", "HOPKINSVILLE", "HORSE CAVE", "HOUSTON ACRES", "HUNTERS HOLLOW", "HURSTBOURNE", "HURSTBOURNE ACRES", "HUSTONVILLE", "HYDEN", "INDEPENDENCE", "INDIAN HILLS", "INEZ", "IRVINE", "IRVINGTON", "ISLAND", "JACKSON", "JAMESTOWN", "JEFFERSONTOWN", "JEFFERSONVILLE", "JENKINS", "JUNCTION CITY", "KEENELAND", "KENTON VALE", "KEVIL", "KINGSLEY", "KUTTAWA", "LA CENTER", "LAFAYETTE", "LA GRANGE", "LAKESIDE PARK", "LAKEVIEW HEIGHTS", "LANCASTER", "LANGDON PLACE", "LATONIA LAKES", "LAWRENCEBURG", "LEBANON", "LEBANON JUNCTION", "LEDBETTER", "LEITCHFIELD", "LEWISBURG", "LEWISPORT", "", "LIBERTY", "LINCOLNSHIRE", "LIVERMORE", "LIVINGSTON", "LONDON", "LONE OAK", "LORETTO", "LOUISA", "LOUISVILLE", "LOYALL", "LUDLOW", "LYNCH", "LYNDON", "LYNNVIEW", "MCHENRY", "MCKEE", "MACKVILLE", "MCROBERTS", "MADISONVILLE", "MANCHESTER", "MANOR CREEK", "MARION", "MARTIN", "MARYHILL ESTATES", "MASONVILLE", "MASSAC", "MAYFIELD", "MAYSVILLE", "MEADOWBROOK FARM", "MEADOW VALE", "MEADOWVIEW ESTATES", "MELBOURNE", "MENTOR", "MIDDLESBOROUGH", "MIDDLETOWN", "MIDWAY", "MILLERSBURG", "MILTON", "MINOR LANE HEIGHTS", "MOCKINGBIRD VALLEY", "MONTEREY", "MONTICELLO", "MOORLAND", "MOREHEAD", "MORGANFIELD", "MORGANTOWN", "MORTONS GAP", "MOUNT OLIVET", "MOUNT STERLING", "MOUNT VERNON", "MOUNT WASHINGTON", "MULDRAUGH", "MUNFORDVILLE", "MURRAY", "MURRAY HILL", "NEBO", "NEWBURG", "NEW CASTLE", "NEW HAVEN", "NEWPORT", "NICHOLASVILLE", "NORBOURNE ESTATES", "NORTH CORBIN", "NORTHFIELD", "NORTH MIDDLETOWN", "NORTONVILLE", "NORWOOD", "OAKBROOK", "OAK GROVE", "OAKLAND", "OKOLONA", "OLD BROWNSBORO PLACE", "OLIVE HILL", "ORCHARD GRASS HILLS", "OWENSBORO", "OWENTON", "OWINGSVILLE", "PADUCAH", "PAINTSVILLE", "PARIS", "PARK CITY", "PARK HILLS", "PARK LAKE", "PARKWAY VILLAGE", "PEMBROKE", "PERRYVILLE", "PEWEE VALLEY", "PHELPS", "PIKEVILLE", "PINE KNOT", "PINEVILLE", "PIONEER VILLAGE", "PIPPA PASSES", "PLANTATION", "PLEASURE RIDGE PARK", "PLEASUREVILLE", "PLUM SPRINGS", "PLYMOUTH VILLAGE", "POPLAR HILLS", "POWDERLY", "PRESTONSBURG", "PRESTONVILLE", "PRINCETON", "PROSPECT", "PROVIDENCE", "RACELAND", "RADCLIFF", "RAVENNA", "RAYWICK", "REIDLAND", "RICHLAWN", "RICHMOND", "RIVER BLUFF", "RIVERWOOD", "ROBARDS", "ROCHESTER", "ROCKPORT", "ROLLING FIELDS", "ROLLING HILLS", "RUSSELL", "RUSSELL SPRINGS", "RUSSELLVILLE", "RYLAND HEIGHTS", "SACRAMENTO", "SADIEVILLE", "ST. CHARLES", "ST. DENNIS", "ST. MATTHEWS", "ST. REGIS PARK", "SALEM", "SALT LICK", "SALYERSVILLE", "SANDERS", "SANDY HOOK", "SARDIS", "SCIENCE HILL", "SCOTTSVILLE", "SEBREE", "SENECA GARDENS", "SHARPSBURG", "SHELBYVILLE", "SHEPHERDSVILLE", "SHIVELY", "SILVER GROVE", "SIMPSONVILLE", "SLAUGHTERS", "SMITHFIELD", "SMITHLAND", "SMITHS GROVE", "SOMERSET", "SONORA", "SOUTH CARROLLTON", "SOUTHGATE", "SOUTH PARK VIEW", "SOUTH SHORE", "SOUTH WALLINS", "SPARTA", "SPRINGFIELD", "SPRINGLEE", "SPRING MILL", "SPRING VALLEY", "STAMPING GROUND", "STANFORD", "STANTON", "STEARNS", "STRATHMOOR MANOR", "STRATHMOOR VILLAGE", "STURGIS", "SYCAMORE", "TAYLOR MILL", "TAYLORSVILLE", "TEN BROECK", "THORNHILL", "TOMPKINSVILLE", "TRENTON", "UNION", "UNIONTOWN", "UPTON", "VALLEY STATION", "VANCEBURG", "VERSAILLES", "VICCO", "VILLA HILLS", "VINE GROVE", "VISALIA", "WALLINS CREEK", "WALTON", "WARFIELD", "WARSAW", "WATER VALLEY", "WATTERSON PARK", "WAVERLY", "WAYLAND", "WELLINGTON", "WEST BUECHEL", "WEST LIBERTY", "WEST POINT", "WESTWOOD", "WESTWOOD", "WHEATCROFT", "WHEELWRIGHT", "WHIPPS MILLGATE", "WHITE PLAINS", "WHITESBURG", "WHITESVILLE", "WHITLEY CITY", "WICKLIFFE", "WILDER", "WILDWOOD", "WILLIAMSBURG", "WILLIAMSTOWN", "WILLISBURG", "WILMORE", "WINCHESTER", "WINDY HILLS", "WINGO", "WOODBURN", "WOODBURY", "WOODLAND HILLS", "WOODLAWN", "WOODLAWN-OAKDALE", "WOODLAWN PARK", "WORTHINGTON", "WORTHINGTON HILLS", "WORTHVILLE", "WURTLAND"],
    Louisiana: ["ABBEVILLE", "ABITA SPRINGS", "ADDIS", "ALBANY", "ALEXANDRIA", "AMA", "AMELIA", "AMITE CITY", "ANACOCO", "ANGIE", "ARABI", "ARCADIA", "ARNAUDVILLE", "ASHLAND", "ATHENS", "ATLANTA", "AVONDALE", "BAKER", "BALDWIN", "BALL", "BARATARIA", "BASILE", "BASKIN", "BASTROP", "BATON ROUGE", "BAYOU CANE", "BAYOU GAUCHE", "BAYOU VISTA", "BELCHER", "BELLE CHASSE", "BELLE ROSE", "BENTON", "BERNICE", "BERWICK", "BIENVILLE", "BLANCHARD", "BOGALUSA", "BONITA", "BOOTHVILLE-VENICE", "BOSSIER CITY", "BOUTTE", "BOYCE", "BREAUX BRIDGE", "BRIDGE CITY", "BROUSSARD", "BROWNFIELDS", "BROWNSVILLE-BAWCOMVILLE", "BRUSLY", "BRYCELAND", "BUNKIE", "BURAS-TRIUMPH", "CALVIN", "CAMERON", "CAMPTI", "CANKTON", "CARENCRO", "CARLYSS", "CASTOR", "CECILIA", "CHACKBAY", "CHALMETTE", "CHARENTON", "CHATAIGNIER", "CHATHAM", "CHAUVIN", "CHENEYVILLE", "CHOUDRANT", "CHURCH POINT", "CLAIBORNE", "CLARENCE", "CLARKS", "CLAYTON", "CLINTON", "COLFAX", "COLLINSTON", "COLUMBIA", "CONVERSE", "COTTONPORT", "COTTON VALLEY", "COUSHATTA", "COVINGTON", "CROWLEY", "CULLEN", "CUT OFF", "DELCAMBRE", "DELHI", "DELTA", "DENHAM SPRINGS", "DEQUINCY", "DE RIDDER", "DES ALLEMANDS", "DESTREHAN", "DEVILLE", "DIXIE INN", "DODSON", "DONALDSONVILLE", "DOWNSVILLE", "DOYLINE", "DRY PRONG", "DUBACH", "DUBBERLY", "DULAC", "DUSON", "EAST HODGE", "EASTWOOD", "EDEN ISLE", "EDGARD", "EDGEFIELD", "ELIZABETH", "ELMWOOD", "ELTON", "EMPIRE", "EPPS", "ERATH", "EROS", "ESTELLE", "ESTHERWOOD", "EUNICE", "EVERGREEN", "FARMERVILLE", "FENTON", "FERRIDAY", "FISHER", "FLORIEN", "FOLSOM", "FORDOCHE", "FOREST", "FOREST HILL", "FORT POLK NORTH", "FORT POLK SOUTH", "FRANKLIN", "FRANKLINTON", "FRENCH SETTLEMENT", "GALLIANO", "GARDERE", "GARYVILLE", "GEORGETOWN", "GIBSLAND", "GILBERT", "GILLIAM", "GLENMORA", "GOLDEN MEADOW", "GOLDONNA", "GONZALES", "GRAMBLING", "GRAMERCY", "GRAND CANE", "GRAND COTEAU", "GRAND ISLE", "GRAY", "GRAYSON", "GREENSBURG", "GREENWOOD", "GRETNA", "GROSSE TETE", "GUEYDAN", "HACKBERRY", "HAHNVILLE", "HALL SUMMIT", "HAMMOND", "HARAHAN", "HARRISONBURG", "HARVEY", "HAUGHTON", "HAYNESVILLE", "HEFLIN", "HENDERSON", "HESSMER", "HODGE", "HOMER", "HORNBECK", "HOSSTON", "HOUMA", "IDA", "INDEPENDENCE", "INNISWOLD", "IOTA", "IOWA", "JACKSON", "JAMESTOWN", "JEANERETTE", "JEAN LAFITTE", "JEFFERSON", "JENA", "JENNINGS", "JONESBORO", "JONESVILLE", "JUNCTION CITY", "KAPLAN", "KEACHI", "KENNER", "KENTWOOD", "KILBOURNE", "KILLIAN", "KILLONA", "KINDER", "KROTZ SPRINGS", "LABADIEVILLE", "LACOMBE", "LAFAYETTE", "LAFITTE", "LAKE ARTHUR", "LAKE CHARLES", "LAKE PROVIDENCE", "LAPLACE", "LAROSE", "LECOMPTE", "LEESVILLE", "LEONVILLE", "LILLIE", "LISBON", "LIVINGSTON", "LIVONIA", "LOCKPORT", "LOGANSPORT", "LONGSTREET", "LOREAUVILLE", "LUCKY", "LULING", "LUTCHER", "LYDIA", "MCNARY", "MADISONVILLE", "MAMOU", "MANDEVILLE", "MANGHAM", "MANSFIELD", "MANSURA", "MANY", "MARINGOUIN", "MARION", "MARKSVILLE", "MARRERO", "MARTIN", "MATHEWS", "MAURICE", "MELVILLE", "MERAUX", "MERMENTAU", "MER ROUGE", "MERRYDALE", "MERRYVILLE", "METAIRIE", "MIDWAY", "MINDEN", "MONROE", "MONTEGUT", "MONTGOMERY", "MONTICELLO", "MONTPELIER", "MONTZ", "MOORINGSPORT", "MOREAUVILLE", "MORGAN CITY", "MORGANZA", "MORSE", "MOSS BLUFF", "MOUND", "MOUNT LEBANON", "NAPOLEONVILLE", "NATALBANY", "NATCHEZ", "NATCHITOCHES", "NEWELLTON", "NEW IBERIA", "NEW LLANO", "NEW ORLEANS", "NEW ROADS", "NEW SARPY", "NOBLE", "NORCO", "NORTH HODGE", "NORTH VACHERIE", "NORWOOD", "OAKDALE", "OAK GROVE", "OAK HILLS PLACE", "OAK RIDGE", "OBERLIN", "OIL CITY", "OLD JEFFERSON", "OLLA", "OPELOUSAS", "PAINCOURTVILLE", "PALMETTO", "PARADIS", "PARKS", "PATTERSON", "PEARL RIVER", "PIERRE PART", "PINE PRAIRIE", "PINEVILLE", "PIONEER", "PLAIN DEALING", "PLAQUEMINE", "PLAUCHEVILLE", "PLEASANT HILL", "POLLOCK", "PONCHATOULA", "PORT ALLEN", "PORT BARRE", "PORT SULPHUR", "PORT VINCENT", "POWHATAN", "POYDRAS", "PRIEN", "PROVENCAL", "QUITMAN", "RACELAND", "RAYNE", "RAYVILLE", "RED CHUTE", "REEVES", "RESERVE", "RICHMOND", "RICHWOOD", "RIDGECREST", "RINGGOLD", "RIVER RIDGE", "ROBELINE", "RODESSA", "ROSEDALE", "ROSELAND", "ROSEPINE", "RUSTON", "ST. FRANCISVILLE", "ST. GABRIEL", "ST. JOSEPH", "ST. MARTINVILLE", "ST. ROSE", "SALINE", "SAREPTA", "SCHRIEVER", "SCOTT", "SHENANDOAH", "SHONGALOO", "SHREVEPORT", "SIBLEY", "SICILY ISLAND", "SIKES", "SIMMESPORT", "SIMPSON", "SIMSBORO", "SLAUGHTER", "SLIDELL", "SORRENTO", "SOUTH MANSFIELD", "SOUTH VACHERIE", "SPEARSVILLE", "SPRINGFIELD", "SPRINGHILL", "STANLEY", "STERLINGTON", "STONEWALL", "SULPHUR", "SUN", "SUNSET", "SUPREME", "SWARTZ", "TAFT", "TALLULAH", "TANGIPAHOA", "TERRYTOWN", "THIBODAUX", "TICKFAW", "TIMBERLANE", "TULLOS", "TURKEY CREEK", "URANIA", "VARNADO", "VIDALIA", "VIENNA", "VILLAGE ST. GEORGE", "VILLE PLATTE", "VINTON", "VIOLET", "VIVIAN", "WAGGAMAN", "WALKER", "WALLACE", "WASHINGTON", "WATERPROOF", "WELSH", "WEST FERRIDAY", "WESTLAKE", "WESTMINSTER", "WEST MONROE", "WESTWEGO", "WHITE CASTLE", "WILSON", "WINNFIELD", "WINNSBORO", "WISNER", "WOODMERE", "WOODWORTH", "YOUNGSVILLE", "ZACHARY", "ZWOLLE"],
    Michigan: ["ADDISON", "ADRIAN", "AHMEEK", "AKRON", "ALANSON", "ALBION", "ALGONAC", "ALLEGAN", "ALLEN", "ALLENDALE", "ALLEN PARK", "ALMA", "ALMONT", "ALPENA", "ALPHA", "ANN ARBOR", "APPLEGATE", "ARGENTINE", "ARMADA", "ASHLEY", "ATHENS", "ATLANTA", "AUBURN", "AUBURN HILLS", "AU GRES", "AUGUSTA", "AU SABLE", "BAD AXE", "BALDWIN", "BANCROFT", "BANGOR", "BARAGA", "BARNES LAKE-MILLERS LAKE", "BARODA", "BARRYTON", "BARTON HILLS", "BATTLE CREEK", "BAY CITY", "BEAL CITY", "BEAR LAKE", "BEAVERTON", "BEECHER", "BEECHWOOD", "BELDING", "BELLAIRE", "BELLEVILLE", "BELLEVUE", "BENTON HARBOR", "BENTON HEIGHTS", "BENZONIA", "BERKLEY", "BERRIEN SPRINGS", "BESSEMER", "BEULAH", "BEVERLY HILLS", "BIG BAY", "BIG RAPIDS", "BINGHAM FARMS", "BIRCH RUN", "BIRMINGHAM", "BLISSFIELD", "BLOOMFIELD HILLS", "BLOOMFIELD TOWNSHIP", "BLOOMINGDALE", "BOYNE CITY", "BOYNE FALLS", "BRECKENRIDGE", "BREEDSVILLE", "BRIDGEPORT", "BRIDGMAN", "BRIGHTON", "BRITTON", "BRONSON", "BROOKLYN", "BROWN CITY", "BROWNLEE PARK", "BUCHANAN", "BUCKLEY", "BUENA VISTA", "BURLINGTON", "BURR OAK", "BURT", "BURTON", "BYRON", "BYRON CENTER", "CADILLAC", "CALEDONIA", "CALUMET", "CAMDEN", "CANADA CREEK RANCH", "CANADIAN LAKES", "CANTON", "CAPAC", "CARLETON", "CARNEY", "CARO", "CARROLLTON", "CARSON CITY", "CARSONVILLE", "CASEVILLE", "CASNOVIA", "CASPIAN", "CASS CITY", "CASSOPOLIS", "CEDAR SPRINGS", "CEMENT CITY", "CENTER LINE", "CENTRAL LAKE", "CENTREVILLE", "CHARLEVOIX", "CHARLOTTE", "CHATHAM", "CHEBOYGAN", "CHELSEA", "CHESANING", "CLARE", "CLARKSVILLE", "CLAWSON", "CLAYTON", "CLIFFORD", "CLIMAX", "CLINTON", "CLINTON", "CLIO", "COLDWATER", "COLEMAN", "COLOMA", "COLON", "COLUMBIAVILLE", "COMSTOCK NORTHWEST", "COMSTOCK PARK", "CONCORD", "CONSTANTINE", "COOPERSVILLE", "COPEMISH", "COPPER CITY", "CORUNNA", "CROSWELL", "CRYSTAL FALLS", "CUSTER", "CUTLERVILLE", "DAGGETT", "DANSVILLE", "DAVISON", "DEARBORN", "DEARBORN HEIGHTS", "DECATUR", "DECKERVILLE", "DEERFIELD", "DE TOUR VILLAGE", "DETROIT", "DETROIT BEACH", "DE WITT", "DEXTER", "DIMONDALE", "DOUGLAS", "DOWAGIAC", "DRYDEN", "DUNDEE", "DURAND", "EAGLE", "EAST GRAND RAPIDS", "EAST JORDAN", "EASTLAKE", "EAST LANSING", "EASTPOINTE", "EAST TAWAS", "EASTWOOD", "EATON RAPIDS", "EAU CLAIRE", "ECORSE", "EDGEMONT PARK", "EDMORE", "EDWARDSBURG", "ELBERTA", "ELK RAPIDS", "ELKTON", "ELLSWORTH", "ELSIE", "EMMETT", "EMPIRE", "ESCANABA", "ESSEXVILLE", "ESTRAL BEACH", "EVART", "FAIRGROVE", "FAIR PLAIN", "FARMINGTON", "FARMINGTON HILLS", "FARWELL", "FENNVILLE", "FENTON", "FERNDALE", "FERRYSBURG", "FIFE LAKE", "FLAT ROCK", "FLINT", "FLUSHING", "FOREST HILLS", "FORESTVILLE", "FOUNTAIN", "FOWLER", "FOWLERVILLE", "FRANKENMUTH", "FRANKFORT", "FRANKLIN", "FRASER", "FREELAND", "FREEPORT", "FREE SOIL", "FREMONT", "FRUITPORT", "GAASTRA", "GAGETOWN", "GAINES", "GALESBURG", "GALIEN", "GARDEN", "GARDEN CITY", "GAYLORD", "GIBRALTAR", "GLADSTONE", "GLADWIN", "GOBLES", "GOODRICH", "GRAND BEACH", "GRAND BLANC", "GRAND HAVEN", "GRAND LEDGE", "GRAND RAPIDS", "GRANDVILLE", "GRANT", "GRASS LAKE", "GRAYLING", "GREATER GALESBURG", "GREENVILLE", "GREILICKVILLE", "GROSSE ILE", "GROSSE POINTE", "GROSSE POINTE FARMS", "GROSSE POINTE PARK", "GROSSE POINTE SHORES", "GROSSE POINTE WOODS", "GWINN", "HAMTRAMCK", "HANCOCK", "HANOVER", "HARBOR BEACH", "HARBOR SPRINGS", "HARPER WOODS", "HARRIETTA", "HARRISON", "HARRISON", "HARRISVILLE", "HART", "HARTFORD", "HARVEY", "HASLETT", "HASTINGS", "HAZEL PARK", "HEMLOCK", "HERSEY", "HESPERIA", "HIGHLAND PARK", "HILLMAN", "HILLSDALE", "HOLLAND", "HOLLY", "HOLT", "HOMER", "HONOR", "HOPKINS", "HOUGHTON", "HOUGHTON LAKE", "HOWARD CITY", "HOWELL", "HUBBARD LAKE", "HUBBARDSTON", "HUBBELL", "HUDSON", "HUDSONVILLE", "HUNTINGTON WOODS", "IMLAY CITY", "INDIAN RIVER", "INKSTER", "IONIA", "IRON MOUNTAIN", "IRON RIVER", "IRONWOOD", "ISHPEMING", "ITHACA", "JACKSON", "JENISON", "JONESVILLE", "KALAMAZOO", "KALEVA", "KALKASKA", "KEEGO HARBOR", "KENT CITY", "KENTWOOD", "KINDE", "KINGSFORD", "KINGSLEY", "KINGSTON", "K. I. SAWYER AFB", "LAINGSBURG", "LAKE ANGELUS", "LAKE ANN", "LAKE CITY", "LAKE FENTON", "LAKE LINDEN", "LAKE MICHIGAN BEACH", "LAKE ODESSA", "LAKE ORION", "LAKEVIEW", "LAKEWOOD CLUB", "LAMBERTVILLE", "L ANSE", "LANSING", "LAPEER", "LATHRUP VILLAGE", "LAURIUM", "LAWRENCE", "LAWTON", "LENNON", "LEONARD", "LE ROY", "LESLIE", "LEVEL PARK-OAK PARK", "LEWISTON", "LEXINGTON", "LINCOLN", "LINCOLN PARK", "LINDEN", "LITCHFIELD", "LIVONIA", "LOST LAKE WOODS", "LOWELL", "LUDINGTON", "LUNA PIER", "LUTHER", "LYONS", "MCBAIN", "MCBRIDE", "MACKINAC ISLAND", "MACKINAW CITY", "MADISON HEIGHTS", "MANCELONA", "MANCHESTER", "MANISTEE", "MANISTIQUE", "MANITOU BEACH-DEVILS LAKE", "MANTON", "MAPLE RAPIDS", "MARCELLUS", "MARINE CITY", "MARION", "MARLETTE", "MARQUETTE", "MARSHALL", "MARTIN", "MARYSVILLE", "MASON", "MATTAWAN", "MAYBEE", "MAYVILLE", "MECOSTA", "MELVIN", "MELVINDALE", "MEMPHIS", "MENDON", "MENOMINEE", "MERRILL", "MESICK", "METAMORA", "MICHIANA", "MICHIGAMME", "MICHIGAN CENTER", "MIDDLETOWN", "MIDDLEVILLE", "MIDLAND", "MILAN", "MILFORD", "MILLERSBURG", "MILLINGTON", "MINDEN CITY", "MINERAL HILLS", "MIO", "MONROE", "MONTAGUE", "MONTGOMERY", "MONTROSE", "MORENCI", "MORLEY", "MORRICE", "MOUNT CLEMENS", "MOUNT MORRIS", "MOUNT PLEASANT", "MUIR", "MULLIKEN", "MUNISING", "MUSKEGON", "MUSKEGON HEIGHTS", "NAPOLEON", "NASHVILLE", "NEGAUNEE", "NEWAYGO", "NEW BALTIMORE", "NEWBERRY", "NEW BUFFALO", "NEW ERA", "NEW HAVEN", "NEW LOTHROP", "NILES", "NORTH ADAMS", "NORTH BRANCH", "NORTH MUSKEGON", "NORTHPORT", "NORTHVIEW", "NORTHVILLE", "NORTON SHORES", "NORWAY", "NOVI", "OAKLEY", "OAK PARK", "OKEMOS", "OLIVET", "OMER", "ONAWAY", "ONEKAMA", "ONSTED", "ONTONAGON", "ORCHARD LAKE VILLAGE", "ORTONVILLE", "OSCODA", "OSSINEKE", "OTISVILLE", "OTSEGO", "OTTER LAKE", "OVID", "OWENDALE", "OWOSSO", "OXFORD", "PALMER", "PARCHMENT", "PARMA", "PAW PAW", "PAW PAW LAKE", "PEARL BEACH", "PECK", "PELLSTON", "PENTWATER", "PERRINTON", "PERRY", "PETERSBURG", "PETOSKEY", "PEWAMO", "PIERSON", "PIGEON", "PINCKNEY", "PINCONNING", "PLAINWELL", "PLEASANT RIDGE", "PLYMOUTH", "PLYMOUTH TOWNSHIP", "PONTIAC", "PORTAGE", "PORT AUSTIN", "PORT HOPE", "PORT HURON", "PORTLAND", "PORT SANILAC", "POSEN", "POTTERVILLE", "POWERS", "PRESCOTT", "PRUDENVILLE", "QUINCY", "QUINNESEC", "RAVENNA", "READING", "REDFORD", "REED CITY", "REESE", "REPUBLIC", "RICHLAND", "RICHMOND", "RIVER ROUGE", "RIVERVIEW", "ROBIN GLEN-INDIANTOWN", "ROCHESTER", "ROCHESTER HILLS", "ROCKFORD", "ROCKWOOD", "ROGERS CITY", "ROMEO", "ROMULUS", "ROOSEVELT PARK", "ROSCOMMON", "ROSEBUSH", "ROSE CITY", "ROSEVILLE", "ROTHBURY", "ROYAL OAK", "SAGINAW", "SAGINAW TOWNSHIP NORTH", "SAGINAW TOWNSHIP SOUTH", "ST. CHARLES", "ST. CLAIR", "ST. CLAIR SHORES", "ST. HELEN", "ST. IGNACE", "ST. JOHNS", "ST. JOSEPH", "ST. LOUIS", "SALINE", "SAND LAKE", "SANDUSKY", "SANFORD", "SARANAC", "SAUGATUCK", "SAULT STE. MARIE", "SCHOOLCRAFT", "SCOTTVILLE", "SEBEWAING", "SHELBY", "SHELBY", "SHEPHERD", "SHERIDAN", "SHERWOOD", "SHIELDS", "SHOREHAM", "SHOREWOOD-TOWER HILLS-HARBERT", "SKIDWAY LAKE", "SOUTHFIELD", "SOUTHGATE", "SOUTH GULL LAKE", "SOUTH HAVEN", "SOUTH LYON", "SOUTH MONROE", "SOUTH RANGE", "SOUTH ROCKWOOD", "SPARTA", "SPRING ARBOR", "SPRINGFIELD", "SPRING LAKE", "SPRINGPORT", "STAMBAUGH", "STANDISH", "STANTON", "STANWOOD", "STEPHENSON", "STERLING", "STERLING HEIGHTS", "STEVENSVILLE", "STOCKBRIDGE", "STONY POINT", "STURGIS", "SUNFIELD", "SUTTONS BAY", "SWARTZ CREEK", "SYLVAN LAKE", "TAWAS CITY", "TAYLOR", "TECUMSEH", "TEKONSHA", "TEMPERANCE", "THOMPSONVILLE", "THREE OAKS", "THREE RIVERS", "TRAVERSE CITY", "TRENTON", "TROWBRIDGE PARK", "TROY", "TURNER", "TUSTIN", "TWINING", "TWIN LAKE", "UBLY", "UNION CITY", "UNIONVILLE", "UTICA", "VANDALIA", "VANDERBILT", "VANDERCOOK LAKE", "VASSAR", "VERMONTVILLE", "VERNON", "VICKSBURG", "VILLAGE OF CLARKSTON", "VILLAGE OF LAKE ISABELLA", "WAKEFIELD", "WALDRON", "WALKER", "WALKERVILLE", "WALLED LAKE", "WARREN", "WATERFORD", "WATERVLIET", "WAVERLY", "WAYLAND", "WAYNE", "WEBBERVILLE", "WEIDMAN", "WEST BLOOMFIELD TOWNSHIP", "WEST BRANCH", "WEST ISHPEMING", "WESTLAND", "WEST MONROE", "WESTPHALIA", "WESTWOOD", "WHITE CLOUD", "WHITEHALL", "WHITE PIGEON", "WHITMORE LAKE", "WHITTEMORE", "WILLIAMSTON", "WIXOM", "WOLF LAKE", "WOLVERINE", "WOLVERINE LAKE", "WOODHAVEN", "WOODLAND", "WOODLAND BEACH", "WYANDOTTE", "WYOMING", "YALE", "YPSILANTI", "ZEELAND", "ZILWAUKEE"],
    "New Jersey": ["ABSECON", "ALLAMUCHY-PANTHER VALLEY", "ALLENDALE", "ALLENHURST", "ALLENTOWN", "ALLENWOOD", "ALLOWAY", "ALPHA", "ALPINE", "ANDOVER", "ANNANDALE", "ASBURY PARK", "ASHLAND", "ATLANTIC CITY", "ATLANTIC HIGHLANDS", "AUDUBON", "AUDUBON PARK", "AVALON", "AVENEL", "AVON-BY-THE-SEA", "BARCLAY-KINGSTON", "BARNEGAT", "BARNEGAT LIGHT", "BARRINGTON", "BAY HEAD", "BAYONNE", "BEACH HAVEN", "BEACH HAVEN WEST", "BEACHWOOD", "BEATYESTOWN", "BECKETT", "BELFORD", "BELLEVILLE", "BELLMAWR", "BELMAR", "BELVIDERE", "BERGENFIELD", "BERKELEY HEIGHTS", "BERLIN", "BERNARDSVILLE", "BEVERLY", "BLACKWOOD", "BLOOMFIELD", "BLOOMINGDALE", "BLOOMSBURY", "BOGOTA", "BOONTON", "BORDENTOWN", "BOUND BROOK", "BRADLEY BEACH", "BRANCHVILLE", "BRASS CASTLE", "BRIDGETON", "BRIELLE", "BRIGANTINE", "BROOKLAWN", "BROWNS MILLS", "BROWNVILLE", "BUDD LAKE", "BUENA", "BURLINGTON", "BUTLER", "CALDWELL", "CALIFON", "CAMDEN", "CAPE MAY", "CAPE MAY COURT HOUSE", "CAPE MAY POINT", "CARLSTADT", "CARNEYS POINT", "CARTERET", "CEDAR GLEN LAKES", "CEDAR GLEN WEST", "CEDAR GROVE", "CEDARVILLE", "CHATHAM", "CHERRY HILL MALL", "CHESILHURST", "CHESTER", "CLARK", "CLAYTON", "CLEARBROOK PARK", "CLEMENTON", "CLIFFSIDE PARK", "CLIFFWOOD BEACH", "CLIFTON", "CLINTON", "CLOSTER", "COLLINGS LAKES", "COLLINGSWOOD", "COLONIA", "CONCORDIA", "CORBIN CITY", "COUNTRY LAKE ESTATES", "CRANBURY", "CRANDON LAKES", "CRANFORD", "CRESSKILL", "CRESTWOOD VILLAGE", "DAYTON", "DEAL", "DEMAREST", "DIAMOND BEACH", "DOVER", "DOVER BEACHES NORTH", "DOVER BEACHES SOUTH", "DUMONT", "DUNELLEN", "EAST BRUNSWICK", "EAST FREEHOLD", "EAST NEWARK", "EAST ORANGE", "EAST RUTHERFORD", "EATONTOWN", "ECHELON", "EDGEWATER", "EDISON", "EGG HARBOR CITY", "ELIZABETH", "ELMER", "ELMWOOD PARK", "ELWOOD-MAGNOLIA", "EMERSON", "ENGLEWOOD", "ENGLEWOOD CLIFFS", "ENGLISHTOWN", "ERLTON-ELLISBURG", "ERMA", "ESSEX FELLS", "ESTELL MANOR", "EWING", "FAIRFIELD", "FAIR HAVEN", "FAIR LAWN", "FAIRTON", "FAIRVIEW", "FAIRVIEW", "FANWOOD", "FAR HILLS", "FARMINGDALE", "FIELDSBORO", "FLEMINGTON", "FLORENCE-ROEBLING", "FLORHAM PARK", "FOLSOM", "FORDS", "FORKED RIVER", "FORT DIX", "FORT LEE", "FRANKLIN", "FRANKLIN LAKES", "FREEHOLD", "FRENCHTOWN", "GARFIELD", "GARWOOD", "GIBBSBORO", "GIBBSTOWN", "GLASSBORO", "GLENDORA", "GLEN GARDNER", "GLEN RIDGE", "GLEN ROCK", "GLOUCESTER CITY", "GOLDEN TRIANGLE", "GREAT MEADOWS-VIENNA", "GREENTREE", "GUTTENBERG", "HACKENSACK", "HACKETTSTOWN", "HADDONFIELD", "HADDON HEIGHTS", "HALEDON", "HAMBURG", "HAMMONTON", "HAMPTON", "HARRINGTON PARK", "HARRISON", "HARVEY CEDARS", "HASBROUCK HEIGHTS", "HAWORTH", "HAWTHORNE", "HEATHCOTE", "HELMETTA", "HIGH BRIDGE", "HIGHLAND LAKE", "HIGHLAND PARK", "HIGHLANDS", "HIGHTSTOWN", "HILLSDALE", "HILLSIDE", "HI-NELLA", "HOBOKEN", "HO-HO-KUS", "HOLIDAY CITY-BERKELEY", "HOLIDAY CITY SOUTH", "HOLIDAY HEIGHTS", "HOPATCONG", "HOPEWELL", "INTERLAKEN", "IRVINGTON", "ISELIN", "ISLAND HEIGHTS", "JAMESBURG", "JERSEY CITY", "KEANSBURG", "KEARNY", "KENDALL PARK", "KENILWORTH", "KEYPORT", "KINGSTON", "KINNELON", "LAKEHURST", "LAKE MOHAWK", "LAKE TELEMARK", "LAKEWOOD", "LAMBERTVILLE", "LAUREL LAKE", "LAUREL SPRINGS", "LAURENCE HARBOR", "LAVALLETTE", "LAWNSIDE", "LAWRENCEVILLE", "LEBANON", "LEISURE KNOLL", "LEISURETOWNE", "LEISURE VILLAGE", "LEISURE VILLAGE EAST", "LEISURE VILLAGE WEST-PINE LAKE PARK", "LEONARDO", "LEONIA", "LINCOLN PARK", "LINCROFT", "LINDEN", "LINDENWOLD", "LINWOOD", "LITTLE FALLS", "LITTLE FERRY", "LITTLE SILVER", "LIVINGSTON", "LOCH ARBOUR", "LODI", "LONG BRANCH", "LONGPORT", "LONG VALLEY", "LYNDHURST", "MCGUIRE AFB", "MADISON", "MADISON PARK", "MAGNOLIA", "MANAHAWKIN", "MANASQUAN", "MANTOLOKING", "MANVILLE", "MAPLEWOOD", "MARGATE CITY", "MARLTON", "MATAWAN", "MAYS LANDING", "MAYWOOD", "MEDFORD LAKES", "MENDHAM", "MERCERVILLE-HAMILTON SQUARE", "MERCHANTVILLE", "METUCHEN", "MIDDLESEX", "MIDLAND PARK", "MILFORD", "MILLBURN", "MILLSTONE", "MILLTOWN", "MILLVILLE", "MONMOUTH BEACH", "MONMOUTH JUNCTION", "MONTCLAIR", "MONTVALE", "MOONACHIE", "MOORESTOWN-LENOLA", "MORGANVILLE", "MORRIS PLAINS", "MORRISTOWN", "MOUNTAIN LAKES", "MOUNTAINSIDE", "MOUNT ARLINGTON", "MOUNT EPHRAIM", "MULLICA HILL", "MYSTIC ISLAND", "NATIONAL PARK", "NAVESINK", "NEPTUNE CITY", "NETCONG", "NEWARK", "NEW BRUNSWICK", "NEW EGYPT", "NEWFIELD", "NEW MILFORD", "NEW PROVIDENCE", "NEWTON", "NORTH ARLINGTON", "NORTH BEACH HAVEN", "NORTH BRUNSWICK TOWNSHIP", "NORTH CALDWELL", "NORTH CAPE MAY", "NORTHFIELD", "NORTH HALEDON", "NORTH MIDDLETOWN", "NORTH PLAINFIELD", "NORTHVALE", "NORTH WILDWOOD", "NORWOOD", "NUTLEY", "OAKHURST", "OAKLAND", "OAKLYN", "OAK VALLEY", "OCEAN ACRES", "OCEAN CITY", "OCEAN GATE", "OCEAN GROVE", "OCEANPORT", "OGDENSBURG", "OLD BRIDGE", "OLD TAPPAN", "OLIVET", "ORADELL", "ORANGE", "OXFORD", "PALISADES PARK", "PALMYRA", "PARAMUS", "PARK RIDGE", "PASSAIC", "PATERSON", "PAULSBORO", "PEAPACK AND GLADSTONE", "PEMBERTON", "PEMBERTON HEIGHTS", "PENNINGTON", "PENNSAUKEN", "PENNS GROVE", "PENNSVILLE", "PERTH AMBOY", "PHILLIPSBURG", "PINE BEACH", "PINE HILL", "PINE RIDGE AT CRESTWOOD", "PINE VALLEY", "PITMAN", "PLAINFIELD", "PLAINSBORO CENTER", "PLEASANTVILLE", "POINT PLEASANT", "POINT PLEASANT BEACH", "POMONA", "POMPTON LAKES", "PORT MONMOUTH", "PORT NORRIS", "PORT READING", "PORT REPUBLIC", "PRESIDENTIAL LAKES ESTATES", "PRINCETON", "PRINCETON JUNCTION", "PRINCETON MEADOWS", "PRINCETON NORTH", "PROSPECT PARK", "RAHWAY", "RAMBLEWOOD", "RAMSEY", "RAMTOWN", "RARITAN", "RED BANK", "RIDGEFIELD", "RIDGEFIELD PARK", "RIDGEWOOD", "RINGWOOD", "RIO GRANDE", "RIVERDALE", "RIVER EDGE", "RIVERTON", "RIVER VALE", "ROCHELLE PARK", "ROCKAWAY", "ROCKLEIGH", "ROCKY HILL", "ROOSEVELT", "ROSELAND", "ROSELLE", "ROSELLE PARK", "ROSENHAYN", "ROSSMOOR", "RUMSON", "RUNNEMEDE", "RUTHERFORD", "SADDLE BROOK", "SADDLE RIVER", "SALEM", "SAYREVILLE", "SCOTCH PLAINS", "SEA BRIGHT", "SEABROOK FARMS", "SEA GIRT", "SEA ISLE CITY", "SEASIDE HEIGHTS", "SEASIDE PARK", "SECAUCUS", "SEWAREN", "SHARK RIVER HILLS", "SHILOH", "SHIP BOTTOM", "SHREWSBURY", "SILVER RIDGE", "SOCIETY HILL", "SOMERDALE", "SOMERSET", "SOMERS POINT", "SOMERVILLE", "SOUTH AMBOY", "SOUTH BELMAR", "SOUTH BOUND BROOK", "SOUTH ORANGE", "SOUTH PLAINFIELD", "SOUTH RIVER", "SOUTH TOMS RIVER", "SPOTSWOOD", "SPRINGDALE", "SPRINGFIELD", "SPRING LAKE", "SPRING LAKE HEIGHTS", "STANHOPE", "STOCKTON", "STONE HARBOR", "STRATFORD", "STRATHMERE", "STRATHMORE", "SUCCASUNNA-KENVIL", "SUMMIT", "SURF CITY", "SUSSEX", "SWEDESBORO", "TAVISTOCK", "TEANECK", "TENAFLY", "TETERBORO", "TINTON FALLS", "TOMS RIVER", "TOTOWA", "TRENTON", "TUCKERTON", "TURNERSVILLE", "TWIN RIVERS", "UNION", "UNION BEACH", "UNION CITY", "UPPER SADDLE RIVER", "VENTNOR CITY", "VERNON VALLEY", "VERONA", "VICTORY GARDENS", "VICTORY LAKES", "VILLAS", "VINELAND", "VISTA CENTER", "WALDWICK", "WALLINGTON", "WANAMASSA", "WANAQUE", "WARETOWN", "WASHINGTON", "WASHINGTON TOWNSHIP", "WATCHUNG", "WAYNE", "WENONAH", "WEST BELMAR", "WEST CALDWELL", "WEST CAPE MAY", "WESTFIELD", "WEST FREEHOLD", "WEST LONG BRANCH", "WEST MILFORD", "WEST NEW YORK", "WEST ORANGE", "WEST PATERSON", "WESTVILLE", "WEST WILDWOOD", "WESTWOOD", "WHARTON", "WHITE HORSE", "WHITE HOUSE STATION", "WHITE MEADOW LAKE", "WHITESBORO-BURLEIGH", "WHITTINGHAM", "WILDWOOD", "WILDWOOD CREST", "WILLIAMSTOWN", "WOODBINE", "WOODBRIDGE", "WOODBURY", "WOODBURY HEIGHTS", "WOODCLIFF LAKE", "WOODLYNNE", "WOOD-RIDGE", "WOODSTOWN", "WRIGHTSTOWN", "WYCKOFF", "YARDVILLE-GROVEVILLE", "YORKETOWN"],
    "New Mexico": ["ACOMITA LAKE", "AGUA FRIA", "ALAMO", "ALAMOGORDO", "ALBUQUERQUE", "ALCALDE", "ALGODONES", "ANGEL FIRE", "ANTHONY", "ARTESIA", "AZTEC", "BAYARD", "BECLABITO", "BELEN", "BERNALILLO", "BLACK ROCK", "BLOOMFIELD", "BOLES ACRES", "BOSQUE FARMS", "BRIMHALL NIZHONI", "CANADA DE LOS ALAMOS", "CANNON AFB", "CAPITAN", "CARLSBAD", "CARLSBAD NORTH", "CARNUEL", "CARRIZOZO", "CASA COLORADA", "CAUSEY", "CEDAR CREST", "CEDAR GROVE", "CHAMA", "CHAMISAL", "CHAPARRAL", "CHILILI", "CHIMAYO", "CHUPADERO", "CHURCH ROCK", "CIMARRON", "CLAYTON", "CLOUDCROFT", "CLOVIS", "COCHITI", "COLUMBUS", "CORONA", "CORRALES", "CROWNPOINT", "CRYSTAL", "CUARTELEZ", "CUBA", "CUNDIYO", "CUYAMUNGUE", "DEMING", "DES MOINES", "DEXTER", "DONA ANA", "DORA", "DULCE", "EAGLE NEST", "EDGEWOOD", "EL CERRO-MONTEREY PARK", "ELDORADO AT SANTA FE", "ELEPHANT BUTTE", "ELIDA", "EL RANCHO", "EL VALLE DE ARROYO SECO", "ENCINAL", "ENCINO", "ESPANOLA", "ESTANCIA", "EUNICE", "FARMINGTON", "FLORA VISTA", "FLOYD", "FOLSOM", "FORT SUMNER", "GALISTEO", "GALLUP", "GLORIETA", "GRADY", "GRANTS", "GRENVILLE", "HAGERMAN", "HATCH", "HOBBS", "HOLLOMAN AFB", "HOPE", "HOUSE", "HUERFANO", "HURLEY", "ISLETA VILLAGE PROPER", "JACONITA", "JAL", "JARALES", "JEMEZ PUEBLO", "JEMEZ SPRINGS", "KIRTLAND", "LA CIENEGA", "LAGUNA", "LA JARA", "LAKE ARTHUR", "LAKE SUMNER", "LA LUZ", "LAMY", "LA PUEBLA", "LAS CRUCES", "LAS VEGAS", "LOGAN", "LORDSBURG", "LOS ALAMOS", "LOS CERRILLOS", "LOS CHAVES", "LOS LUNAS", "LOS RANCHOS DE ALBUQUERQUE", "LOS TRUJILLOS-GABALDON", "LOVING", "LOVINGTON", "MADRID", "MAGDALENA", "MANZANO", "MAXWELL", "MEADOW LAKE", "MELROSE", "MESCALERO", "MESILLA", "MESITA", "MESQUITE", "MILAN", "MORIARTY", "MOSQUERO", "MOUNTAINAIR", "NAGEEZI", "NAKAIBITO", "NAPI HQ", "NASCHITTI", "NAVAJO", "NENAHNEZAD", "NEWCOMB", "NORTH ACOMITA VILLAGE", "NORTH VALLEY", "OJO AMARILLO", "PAGUATE", "PARAJE", "PECOS", "PENA BLANCA", "PENASCO", "PERALTA", "PICURIS PUEBLO", "PINEHILL", "PLACITAS", "POJOAQUE", "PONDEROSA", "PORTALES", "PUEBLO OF SANDIA VILLAGE", "PUEBLO PINTADO", "QUESTA", "RADIUM SPRINGS", "RAMAH", "RANCHOS DE TAOS", "RATON", "RED RIVER", "REGINA", "RESERVE", "RINCON", "RIO CHIQUITO", "RIO COMMUNITIES", "RIO COMMUNITIES NORTH", "RIO EN MEDIO", "RIO LUCIO", "RIO RANCHO", "ROCK SPRINGS", "ROSWELL", "ROY", "RUIDOSO", "RUIDOSO DOWNS", "SALEM", "SAN FELIPE PUEBLO", "SAN ILDEFONSO PUEBLO", "SAN JON", "SAN JUAN", "SANOSTEE", "SANTA ANA PUEBLO", "SANTA CLARA", "SANTA CLARA PUEBLO", "SANTA CRUZ", "SANTA FE", "SANTA ROSA", "SANTA TERESA", "SANTO DOMINGO PUEBLO", "SAN YSIDRO", "SEAMA", "SHEEP SPRINGS", "SHIPROCK", "SILVER CITY", "SKYLINE-GANIPA", "SOCORRO", "SOMBRILLO", "SOUTH VALLEY", "SPRINGER", "SUNLAND PARK", "TAJIQUE", "TAOS", "TAOS PUEBLO", "TAOS SKI VALLEY", "TATUM", "TESUQUE", "TEXICO", "THOREAU", "TIJERAS", "TIMBERON", "TOHATCHI", "TOME-ADELINO", "TORREON", "TORREON", "TRUTH OR CONSEQUENCES", "TSE BONITO", "TUCUMCARI", "TULAROSA", "TWIN LAKES", "UNIVERSITY PARK", "UPPER FRUITLAND", "VADITO", "VADO", "VALENCIA", "VAUGHN", "VIRDEN", "WAGON MOUND", "WHITE ROCK", "WHITE SANDS", "WILLARD", "WILLIAMSBURG", "YAH-TA-HEY", "ZIA PUEBLO", "ZUNI PUEBLO"],
    "New York": ["ACCORD", "ADAMS", "ADAMS CENTER", "ADDISON", "AFTON", "AIRMONT", "AKRON", "ALBANY", "ALBERTSON", "ALBION", "ALDEN", "ALEXANDER", "ALEXANDRIA BAY", "ALFRED", "ALLEGANY", "ALMOND", "ALTAMONT", "ALTMAR", "ALTONA", "AMAGANSETT", "AMENIA", "AMES", "AMITYVILLE", "AMSTERDAM", "ANDES", "ANDOVER", "ANGELICA", "ANGOLA", "ANGOLA ON THE LAKE", "ANTWERP", "APALACHIN", "AQUEBOGUE", "ARCADE", "ARDSLEY", "ARGYLE", "ARKPORT", "ARLINGTON", "ARMONK", "ASHAROKEN", "ATHENS", "ATLANTIC BEACH", "ATTICA", "AUBURN", "AURORA", "AU SABLE FORKS", "AVERILL PARK", "AVOCA", "AVON", "BABYLON", "BAINBRIDGE", "BAITING HOLLOW", "BALDWIN", "BALDWIN HARBOR", "BALDWINSVILLE", "BALLSTON SPA", "BALMVILLE", "BARDONIA", "BARKER", "BARNEVELD", "BARNUM ISLAND", "BATAVIA", "BATH", "BAXTER ESTATES", "BAY PARK", "BAYPORT", "BAY SHORE", "BAYVILLE", "BAYWOOD", "BEACON", "BEAVERDAM LAKE-SALISBURY MILLS", "BEDFORD", "BELLEROSE", "BELLEROSE TERRACE", "BELLE TERRE", "BELLMORE", "BELLPORT", "BELMONT", "BEMUS POINT", "BERGEN", "BETHPAGE", "BIG FLATS", "BIG FLATS AIRPORT", "BILLINGTON HEIGHTS", "BINGHAMTON", "BLACK RIVER", "BLASDELL", "BLAUVELT", "BLOOMFIELD", "BLOOMINGBURG", "BLUE POINT", "BOHEMIA", "BOLIVAR", "BOONVILLE", "BRASHER FALLS-WINTHROP", "BRENTWOOD", "BREWERTON", "BREWSTER", "BREWSTER HILL", "BRIARCLIFF MANOR", "BRIDGEHAMPTON", "BRIDGEPORT", "BRIDGEWATER", "BRIGHTON", "BRIGHTWATERS", "BRINCKERHOFF", "BROADALBIN", "BROCKPORT", "BROCTON", "BRONXVILLE", "BROOKHAVEN", "BROOKVILLE", "BROWNVILLE", "BRUSHTON", "BUCHANAN", "BUFFALO", "BURDETT", "BURKE", "CAIRO", "CALCIUM", "CALEDONIA", "CALLICOON", "CALVERTON", "CAMBRIDGE", "CAMDEN", "CAMILLUS", "CANAJOHARIE", "CANANDAIGUA", "CANASERAGA", "CANASTOTA", "CANDOR", "CANISTEO", "CANTON", "CAPE VINCENT", "CARLE PLACE", "CARMEL HAMLET", "CARTHAGE", "CASSADAGA", "CASTILE", "CASTLETON-ON-HUDSON", "CASTORLAND", "CATO", "CATSKILL", "CATTARAUGUS", "CAYUGA", "CAYUGA HEIGHTS", "CAZENOVIA", "CEDARHURST", "CELORON", "CENTEREACH", "CENTER MORICHES", "CENTERPORT", "CENTRAL ISLIP", "CENTRAL SQUARE", "CENTRAL VALLEY", "CENTRE ISLAND", "CHAMPLAIN", "CHAPPAQUA", "CHATEAUGAY", "CHATHAM", "CHAUMONT", "CHEEKTOWAGA", "CHERRY CREEK", "CHERRY VALLEY", "CHESTER", "CHESTNUT RIDGE", "CHITTENANGO", "CHURCHVILLE", "CLARENCE CENTER", "CLARK MILLS", "CLAVERACK-RED MILLS", "CLAYTON", "CLAYVILLE", "CLEVELAND", "CLIFTON SPRINGS", "CLINTON", "CLINTONDALE", "CLYDE", "COBLESKILL", "COEYMANS", "COHOCTON", "COHOES", "COLD BROOK", "COLD SPRING", "COLD SPRING HARBOR", "COLONIE", "COMMACK", "CONGERS", "CONSTABLEVILLE", "CONSTANTIA", "COOPERSTOWN", "COPAKE LAKE", "COPENHAGEN", "COPIAGUE", "CORAM", "CORFU", "CORINTH", "CORNING", "CORNWALL ON HUDSON", "CORTLAND", "CORTLAND WEST", "COUNTRY KNOLLS", "COVE NECK", "COXSACKIE", "CRAGSMOOR", "CROGHAN", "CROMPOND", "CROTON-ON-HUDSON", "CROWN HEIGHTS", "CRUGERS", "CUBA", "CUMBERLAND HEAD", "CUTCHOGUE", "DANNEMORA", "DANSVILLE", "DEER PARK", "DEFERIET", "DELANSON", "DELEVAN", "DELHI", "DELMAR", "DEPAUVILLE", "DEPEW", "DEPOSIT", "DERING HARBOR", "DERUYTER", "DEXTER", "DIX HILLS", "DOBBS FERRY", "DOLGEVILLE", "DOVER PLAINS", "DRESDEN", "DRYDEN", "DUANE LAKE", "DUANESBURG", "DUNDEE", "DUNKIRK", "EARLVILLE", "EAST ATLANTIC BEACH", "EAST AURORA", "EASTCHESTER", "EAST FARMINGDALE", "EAST GARDEN CITY", "EAST GLENVILLE", "EAST GREENBUSH", "EAST HAMPTON", "EAST HAMPTON NORTH", "EAST HILLS", "EAST ISLIP", "EAST ITHACA", "EAST KINGSTON", "EAST MARION", "EAST MASSAPEQUA", "EAST MEADOW", "EAST MORICHES", "EAST NASSAU", "EAST NORTHPORT", "EAST NORWICH", "EAST PATCHOGUE", "EASTPORT", "EAST QUOGUE", "EAST RANDOLPH", "EAST ROCHESTER", "EAST ROCKAWAY", "EAST SHOREHAM", "EAST SYRACUSE", "EAST WILLISTON", "EATONS NECK", "EDEN", "EDWARDS", "ELBA", "ELBRIDGE", "ELLENVILLE", "ELLICOTTVILLE", "ELLISBURG", "ELMA CENTER", "ELMIRA", "ELMIRA HEIGHTS", "ELMONT", "ELMSFORD", "ELWOOD", "ENDICOTT", "ENDWELL", "ESPERANCE", "EVANS MILLS", "FABIUS", "FAIR HAVEN", "FAIRMOUNT", "FAIRPORT", "FAIRVIEW", "FAIRVIEW", "FALCONER", "FARMINGDALE", "FARMINGVILLE", "FARNHAM", "FAYETTEVILLE", "FIRE ISLAND", "FIRTHCLIFFE", "FISHERS ISLAND", "FISHKILL", "FLANDERS", "FLEISCHMANNS", "FLORAL PARK", "FLORIDA", "FLOWER HILL", "FONDA", "FOREST HOME", "FORESTVILLE", "FORT ANN", "FORT DRUM", "FORT EDWARD", "FORT JOHNSON", "FORT MONTGOMERY", "FORT PLAIN", "FORT SALONGA", "FRANKFORT", "FRANKLIN", "FRANKLIN SQUARE", "FRANKLINVILLE", "FREDONIA", "FREEPORT", "FREEVILLE", "FREWSBURG", "FRIENDSHIP", "FULTON", "FULTONVILLE", "GAINESVILLE", "GALEVILLE", "GALWAY", "GANG MILLS", "GARDEN CITY", "GARDEN CITY PARK", "GARDEN CITY SOUTH", "GARDINER", "GARDNERTOWN", "GASPORT", "GATES-NORTH GATES", "GENESEO", "GENEVA", "GERMANTOWN", "GHENT", "GILBERTSVILLE", "GILGO-OAK BEACH-CAPTREE", "GLASCO", "GLEN COVE", "GLEN HEAD", "GLEN PARK", "GLENS FALLS", "GLENS FALLS NORTH", "GLENWOOD LANDING", "GLOVERSVILLE", "GOLDEN S BRIDGE", "GORDON HEIGHTS", "GOSHEN", "GOUVERNEUR", "GOWANDA", "GRAND VIEW-ON-HUDSON", "GRANVILLE", "GREAT BEND", "GREAT NECK", "GREAT NECK ESTATES", "GREAT NECK GARDENS", "GREAT NECK PLAZA", "GREAT RIVER", "GREECE", "GREENE", "GREEN ISLAND", "GREENLAWN", "GREENPORT", "GREENPORT WEST", "GREENVALE", "GREENVILLE", "GREENVILLE", "GREENWICH", "GREENWOOD LAKE", "GROTON", "HAGAMAN", "HALESITE", "HAMBURG", "HAMILTON", "HAMMOND", "HAMMONDSPORT", "HAMPTON BAYS", "HAMPTON MANOR", "HANCOCK", "HANNIBAL", "HARBOR HILLS", "HARBOR ISLE", "HARRIMAN", "HARRIS HILL", "HARRISON", "HARRISVILLE", "HARTSDALE", "HASTINGS-ON-HUDSON", "HAUPPAUGE", "HAVERSTRAW", "HAVILAND", "HAWTHORNE", "HEAD OF THE HARBOR", "HEMPSTEAD", "HERITAGE HILLS", "HERKIMER", "HERMON", "HERRICKS", "HERRINGS", "HEUVELTON", "HEWLETT", "HEWLETT BAY PARK", "HEWLETT HARBOR", "HEWLETT NECK", "HICKSVILLE", "HIGH FALLS", "HIGHLAND", "HIGHLAND FALLS", "HIGHLAND MILLS", "HILLBURN", "HILLCREST", "HILLSIDE", "HILLSIDE LAKE", "HILTON", "HOBART", "HOLBROOK", "HOLLAND", "HOLLAND PATENT", "HOLLEY", "HOLTSVILLE", "HOMER", "HONEOYE FALLS", "HOOSICK FALLS", "HOPEWELL JUNCTION", "HORNELL", "HORSEHEADS", "HORSEHEADS NORTH", "HOUGHTON", "HUDSON", "HUDSON FALLS", "HUNTER", "HUNTINGTON", "HUNTINGTON BAY", "HUNTINGTON STATION", "HURLEY", "ILION", "INTERLAKEN", "INWOOD", "IRONDEQUOIT", "IRVINGTON", "ISLANDIA", "ISLAND PARK", "ISLIP", "ISLIP TERRACE", "ITHACA", "JAMESPORT", "JAMESTOWN", "JAMESTOWN WEST", "JEFFERSON HEIGHTS", "JEFFERSON VALLEY-YORKTOWN", "JEFFERSONVILLE", "JERICHO", "JOHNSON CITY", "JOHNSTOWN", "JORDAN", "KASER", "KEESEVILLE", "KENMORE", "KENSINGTON", "KERHONKSON", "KINDERHOOK", "KINGS PARK", "KINGS POINT", "KINGSTON", "KIRYAS JOEL", "LACKAWANNA", "LACONA", "LA FARGEVILLE", "LAKE CARMEL", "LAKE ERIE BEACH", "LAKE GEORGE", "LAKE GROVE", "LAKE KATRINE", "LAKELAND", "LAKE LUZERNE-HADLEY", "LAKE MOHEGAN", "LAKE PLACID", "LAKE RONKONKOMA", "LAKE SUCCESS", "LAKEVIEW", "LAKEWOOD", "LANCASTER", "LANSING", "LARCHMONT", "LATTINGTOWN", "LAUREL", "LAUREL HOLLOW", "LAURENS", "LAWRENCE", "LEEDS", "LEICESTER", "LE ROY", "LEVITTOWN", "LEWISTON", "LIBERTY", "LIDO BEACH", "LIMA", "LIME LAKE-MACHIAS", "LIMESTONE", "LINCOLNDALE", "LINCOLN PARK", "LINDENHURST", "LISLE", "LITTLE FALLS", "LITTLE VALLEY", "LIVERPOOL", "LIVINGSTON MANOR", "LIVONIA", "LLOYD HARBOR", "LOCKPORT", "LOCUST VALLEY", "LODI", "LONG BEACH", "LORENZ PARK", "LOWVILLE", "LYNBROOK", "LYNCOURT", "LYNDONVILLE", "LYON MOUNTAIN", "LYONS", "LYONS FALLS", "MACEDON", "MCGRAW", "MADISON", "MAHOPAC", "MALDEN", "MALONE", "MALVERNE", "MALVERNE PARK OAKS", "MAMARONECK", "MANCHESTER", "MANHASSET", "MANHASSET HILLS", "MANLIUS", "MANNSVILLE", "MANORHAVEN", "MANORVILLE", "MARATHON", "MARCELLUS", "MARGARETVILLE", "MARIAVILLE LAKE", "MARLBORO", "MASSAPEQUA", "MASSAPEQUA PARK", "MASSENA", "MASTIC", "MASTIC BEACH", "MATINECOCK", "MATTITUCK", "MATTYDALE", "MAYBROOK", "MAYFIELD", "MAYVILLE", "MECHANICSTOWN", "MECHANICVILLE", "MEDFORD", "MEDINA", "MEDUSA", "MELROSE PARK", "MELVILLE", "MENANDS", "MERIDIAN", "MERRICK", "MEXICO", "MIDDLEBURGH", "MIDDLE ISLAND", "MIDDLEPORT", "MIDDLETOWN", "MIDDLEVILLE", "MILFORD", "MILLBROOK", "MILLER PLACE", "MILLERTON", "MILL NECK", "MILLPORT", "MILTON", "MILTON", "MINEOLA", "MINETTO", "MINEVILLE-WITHERBEE", "MINOA", "MOHAWK", "MONROE", "MONSEY", "MONTAUK", "MONTEBELLO", "MONTGOMERY", "MONTICELLO", "MONTOUR FALLS", "MOOERS", "MORAVIA", "MORICHES", "MORRIS", "MORRISONVILLE", "MORRISTOWN", "MORRISVILLE", "MOUNT IVY", "MOUNT KISCO", "MOUNT MORRIS", "MOUNT SINAI", "MOUNT VERNON", "MUNNSVILLE", "MUNSEY PARK", "MUNSONS CORNERS", "MUTTONTOWN", "MYERS CORNER", "NANUET", "NAPANOCH", "NAPEAGUE", "NAPLES", "NARROWSBURG", "NASSAU", "NATURAL BRIDGE", "NEDROW", "NELLISTON", "NELSONVILLE", "NESCONSET", "NEWARK", "NEWARK VALLEY", "NEW BERLIN", "NEWBURGH", "NEW CASSEL", "NEW CITY", "NEWFANE", "NEWFIELD HAMLET", "NEW HARTFORD", "NEW HEMPSTEAD", "NEW HYDE PARK", "NEW PALTZ", "NEWPORT", "NEW ROCHELLE", "NEW SQUARE", "NEW SUFFOLK", "NEW WINDSOR", "NEW YORK", "NEW YORK MILLS", "NIAGARA FALLS", "NICHOLS", "NISKAYUNA", "NISSEQUOGUE", "NIVERVILLE", "NORFOLK", "NORTH AMITYVILLE", "NORTHAMPTON", "NORTH BABYLON", "NORTH BALLSTON SPA", "NORTH BAY SHORE", "NORTH BELLMORE", "NORTH BELLPORT", "NORTH BOSTON", "NORTH COLLINS", "NORTHEAST ITHACA", "NORTH GREAT RIVER", "NORTH HAVEN", "NORTH HILLS", "NORTH HORNELL", "NORTH LINDENHURST", "NORTH LYNBROOK", "NORTH MASSAPEQUA", "NORTH MERRICK", "NORTH NEW HYDE PARK", "NORTH PATCHOGUE", "NORTHPORT", "NORTH SEA", "NORTH SYRACUSE", "NORTH TONAWANDA", "NORTH VALLEY STREAM", "NORTHVILLE", "NORTHVILLE", "NORTH WANTAGH", "NORTHWEST HARBOR", "NORTHWEST ITHACA", "NORWICH", "NORWOOD", "NOYACK", "NUNDA", "NYACK", "OAKDALE", "OAKFIELD", "OCEAN BEACH", "OCEANSIDE", "ODESSA", "OGDENSBURG", "OLCOTT", "OLD BETHPAGE", "OLD BROOKVILLE", "OLD FIELD", "OLD WESTBURY", "OLEAN", "ONEIDA", "ONEIDA CASTLE", "ONEONTA", "ORANGEBURG", "ORANGE LAKE", "ORCHARD PARK", "ORIENT", "ORISKANY", "ORISKANY FALLS", "OSSINING", "OSWEGO", "OTEGO", "OTISVILLE", "OVID", "OWEGO", "OXFORD", "OYSTER BAY", "OYSTER BAY COVE", "PAINTED POST", "PALATINE BRIDGE", "PALENVILLE", "PALMYRA", "PANAMA", "PARC", "PARISH", "PATCHOGUE", "PATTERSONVILLE-ROTTERDAM JUNCTION", "PAWLING", "PEACH LAKE", "PEARL RIVER", "PECONIC", "PEEKSKILL", "PELHAM", "PELHAM MANOR", "PENN YAN", "PERRY", "PERRYSBURG", "PERU", "PHELPS", "PHILADELPHIA", "PHILMONT", "PHOENICIA", "PHOENIX", "PIERMONT", "PIKE", "PINE BUSH", "PINE HILL", "PINE PLAINS", "PITTSFORD", "PLAINEDGE", "PLAINVIEW", "PLANDOME", "PLANDOME HEIGHTS", "PLANDOME MANOR", "PLATTEKILL", "PLATTSBURGH", "PLATTSBURGH WEST", "PLEASANT VALLEY", "PLEASANTVILLE", "POESTENKILL", "POINT LOOKOUT", "POLAND", "POMONA", "POQUOTT", "PORT BYRON", "PORT CHESTER", "PORT DICKINSON", "PORT EWEN", "PORT HENRY", "PORT JEFFERSON", "PORT JEFFERSON STATION", "PORT JERVIS", "PORT LEYDEN", "PORTVILLE", "PORT WASHINGTON", "PORT WASHINGTON NORTH", "POTSDAM", "POUGHKEEPSIE", "PRESTON-POTTER HOLLOW", "PROSPECT", "PULASKI", "PUTNAM LAKE", "QUIOQUE", "QUOGUE", "RANDOLPH", "RANSOMVILLE", "RAPIDS", "RAVENA", "RED CREEK", "REDFORD", "RED HOOK", "RED OAKS MILL", "REDWOOD", "REMSEN", "REMSENBURG-SPEONK", "RENSSELAER", "RENSSELAER FALLS", "RHINEBECK", "RICHBURG", "RICHFIELD SPRINGS", "RICHMONDVILLE", "RICHVILLE", "RIDGE", "RIFTON", "RIPLEY", "RIVERHEAD", "RIVERSIDE", "RIVERSIDE", "ROCHESTER", "ROCK HILL", "ROCKVILLE CENTRE", "ROCKY POINT", "ROME", "RONKONKOMA", "ROOSEVELT", "ROSCOE", "ROSENDALE VILLAGE", "ROSLYN", "ROSLYN ESTATES", "ROSLYN HARBOR", "ROSLYN HEIGHTS", "ROTTERDAM", "ROUND LAKE", "ROUSES POINT", "RUSHVILLE", "RUSSELL GARDENS", "RYE", "RYE BROOK", "SACKETS HARBOR", "SADDLE ROCK", "SADDLE ROCK ESTATES", "SAGAPONACK", "SAG HARBOR", "ST. BONAVENTURE", "ST. JAMES", "ST. JOHNSVILLE", "SALAMANCA", "SALEM", "SALISBURY", "SALTAIRE", "SAND RIDGE", "SANDS POINT", "SANDY CREEK", "SARANAC LAKE", "SARATOGA SPRINGS", "SAUGERTIES", "SAUGERTIES SOUTH", "SAVONA", "SAYVILLE", "SCARSDALE", "SCHAGHTICOKE", "SCHENECTADY", "SCHOHARIE", "SCHUYLERVILLE", "SCOTCHTOWN", "SCOTIA", "SCOTTS CORNERS", "SCOTTSVILLE", "SEA CLIFF", "SEAFORD", "SEARINGTOWN", "SELDEN", "SENECA FALLS", "SENECA KNOLLS", "SETAUKET-EAST SETAUKET", "SHARON SPRINGS", "SHELTER ISLAND", "SHELTER ISLAND HEIGHTS", "SHENOROCK", "SHERBURNE", "SHERMAN", "SHERRILL", "SHINNECOCK HILLS", "SHIRLEY", "SHOKAN", "SHOREHAM", "SHORTSVILLE", "SHRUB OAK", "SIDNEY", "SILVER CREEK", "SILVER SPRINGS", "SINCLAIRVILLE", "SKANEATELES", "SLEEPY HOLLOW", "SLOAN", "SLOATSBURG", "SMALLWOOD", "SMITHTOWN", "SMYRNA", "SODUS", "SODUS POINT", "SOLVAY", "SOUND BEACH", "SOUTHAMPTON", "SOUTH CORNING", "SOUTH DAYTON", "SOUTH FALLSBURG", "SOUTH FARMINGDALE", "SOUTH FLORAL PARK", "SOUTH GLENS FALLS", "SOUTH HEMPSTEAD", "SOUTH HILL", "SOUTH HUNTINGTON", "SOUTH LOCKPORT", "SOUTH NYACK", "SOUTHOLD", "SOUTHPORT", "SOUTH VALLEY STREAM", "SPACKENKILL", "SPECULATOR", "SPENCER", "SPENCERPORT", "SPRINGS", "SPRING VALLEY", "SPRINGVILLE", "STAATSBURG", "STAMFORD", "STANNARDS", "STAR LAKE", "STEWART MANOR", "STILLWATER", "STONE RIDGE", "STONY BROOK", "STONY POINT", "STOTTVILLE", "SUFFERN", "SYLVAN BEACH", "SYOSSET", "SYRACUSE", "TANNERSVILLE", "TAPPAN", "TARRYTOWN", "TERRYVILLE", "THERESA", "THIELLS", "THOMASTON", "THORNWOOD", "TILLSON", "TIVOLI", "TONAWANDA", "TONAWANDA", "TOWN LINE", "TRIBES HILL", "TROY", "TRUMANSBURG", "TUCKAHOE", "TUCKAHOE", "TULLY", "TUPPER LAKE", "TURIN", "TUXEDO PARK", "UNADILLA", "UNIONDALE", "UNION SPRINGS", "UNIONVILLE", "UNIVERSITY GARDENS", "UPPER BROOKVILLE", "UPPER NYACK", "UTICA", "VAILS GATE", "VALATIE", "VALHALLA", "VALLEY COTTAGE", "VALLEY FALLS", "VALLEY STREAM", "VAN ETTEN", "VERNON", "VERPLANCK", "VICTOR", "VICTORY", "VILLAGE GREEN", "VILLAGE OF THE BRANCH", "VIOLA", "VOORHEESVILLE", "WADDINGTON", "WADING RIVER", "WAINSCOTT", "WALDEN", "WALKER VALLEY", "WALLKILL", "WALTON", "WALTON PARK", "WAMPSVILLE", "WANTAGH", "WAPPINGERS FALLS", "WARRENSBURG", "WARSAW", "WARWICK", "WASHINGTON HEIGHTS", "WASHINGTONVILLE", "WATERFORD", "WATERLOO", "WATERMILL", "WATERTOWN", "WATERVILLE", "WATERVLIET", "WATKINS GLEN", "WAVERLY", "WAYLAND", "WEBSTER", "WEEDSPORT", "WELLSBURG", "WELLSVILLE", "WESLEY HILLS", "WEST BABYLON", "WEST BAY SHORE", "WESTBURY", "WEST CARTHAGE", "WEST ELMIRA", "WEST END", "WESTFIELD", "WEST GLENS FALLS", "WESTHAMPTON", "WESTHAMPTON BEACH", "WEST HAMPTON DUNES", "WEST HAVERSTRAW", "WEST HEMPSTEAD", "WEST HILLS", "WEST HURLEY", "WEST ISLIP", "WESTMERE", "WEST NYACK", "WESTON MILLS", "WEST POINT", "WEST SAND LAKE", "WEST SAYVILLE", "WEST SENECA", "WESTVALE", "WEST WINFIELD", "WHEATLEY HEIGHTS", "WHITEHALL", "WHITE PLAINS", "WHITESBORO", "WHITNEY POINT", "WILLIAMSVILLE", "WILLISTON PARK", "WILSON", "WINDHAM", "WINDSOR", "WOLCOTT", "WOODBURY", "WOODMERE", "WOODRIDGE", "WOODSBURGH", "WOODSTOCK", "WURTSBORO", "WYANDANCH", "WYNANTSKILL", "WYOMING", "YAPHANK", "YONKERS", "YORKSHIRE", "YORKTOWN HEIGHTS", "YORKVILLE", "YOUNGSTOWN", "ZENA"],
    Texas: ["ABBOTT", "ABERNATHY", "ABILENE", "ABRAM-PEREZVILLE", "ACKERLY", "ADDISON", "ADRIAN", "AGUA DULCE", "AGUA DULCE", "AIRPORT ROAD ADDITION", "ALAMO", "ALAMO HEIGHTS", "ALBA", "ALBANY", "ALDINE", "ALEDO", "ALFRED-SOUTH LA PALOMA", "ALICE", "ALICE ACRES", "ALLEN", "ALMA", "ALPINE", "ALTO", "ALTO BONITO", "ALTON", "ALTON NORTH", "ALVARADO", "ALVIN", "ALVORD", "AMARILLO", "AMES", "AMHERST", "ANAHUAC", "ANDERSON", "ANDERSON MILL", "ANDREWS", "ANGLETON", "ANGUS", "ANNA", "ANNETTA", "ANNETTA NORTH", "ANNETTA SOUTH", "ANNONA", "ANSON", "ANTHONY", "ANTON", "APPLEBY", "AQUILLA", "ARANSAS PASS", "ARCHER CITY", "ARCOLA", "ARGYLE", "ARLINGTON", "ARP", "ARROYO ALTO", "ARROYO COLORADO ESTATES", "ARROYO GARDENS-LA TINA RANCH", "ASHERTON", "ASPERMONT", "ATASCOCITA", "ATHENS", "ATLANTA", "AUBREY", "AURORA", "AUSTIN", "AUSTWELL", "AVERY", "AVINGER", "AZLE", "BACLIFF", "BAILEY", "BAILEY S PRAIRIE", "BAIRD", "BALCH SPRINGS", "BALCONES HEIGHTS", "BALLINGER", "BALMORHEA", "BANDERA", "BANGS", "BARDWELL", "BARRETT", "BARRY", "BARSTOW", "BARTLETT", "BARTON CREEK", "BARTONVILLE", "BASTROP", "BATESVILLE", "BAUSELL AND ELLIS", "BAY CITY", "BAYOU VISTA", "BAYSIDE", "BAYTOWN", "BAYVIEW", "BEACH CITY", "BEAR CREEK", "BEASLEY", "BEAUMONT", "BECKVILLE", "BEDFORD", "BEE CAVE", "BEEVILLE", "BELLAIRE", "BELLEVUE", "BELLMEAD", "BELLS", "BELLVILLE", "BELTON", "BENAVIDES", "BENBROOK", "BENJAMIN", "BERRYVILLE", "BERTRAM", "BEVERLY HILLS", "BEVIL OAKS", "BIGFOOT", "BIG LAKE", "BIG SANDY", "BIG SPRING", "BIG WELLS", "BISHOP", "BISHOP HILLS", "BIXBY", "BLACKWELL", "BLANCO", "BLANKET", "BLESSING", "BLOOMBURG", "BLOOMING GROVE", "BLOOMINGTON", "BLOSSOM", "BLUE BERRY HILL", "BLUE MOUND", "BLUE RIDGE", "BLUETOWN-IGLESIA ANTIGUA", "BLUM", "BOERNE", "BOGATA", "BOLING-IAGO", "BOLIVAR PENINSULA", "BONHAM", "BONNEY", "BOOKER", "BORGER", "BOTINES", "BOVINA", "BOWIE", "BOX CANYON-AMISTAD", "BOYD", "BRACKETTVILLE", "BRADY", "BRAZORIA", "BRECKENRIDGE", "BREMOND", "BRENHAM", "BRIAR", "BRIARCLIFF", "BRIAROAKS", "BRIDGE CITY", "BRIDGEPORT", "BROADDUS", "BRONTE", "BROOKSHIRE", "BROOKSIDE VILLAGE", "BROWNDELL", "BROWNFIELD", "BROWNSBORO", "BROWNSVILLE", "BROWNWOOD", "BRUCEVILLE-EDDY", "BRUNDAGE", "BRUNI", "BRUSHY CREEK", "BRYAN", "BRYSON", "BUCHANAN DAM", "BUCKHOLTS", "BUDA", "BUFFALO", "BUFFALO GAP", "BUFFALO SPRINGS", "BULLARD", "BULVERDE", "BUNA", "BUNKER HILL VILLAGE", "BURKBURNETT", "BURKE", "BURLESON", "BURNET", "BURTON", "BUTTERFIELD", "BYERS", "BYNUM", "CACTUS", "CADDO MILLS", "CALDWELL", "CALLISBURG", "CALVERT", "CAMERON", "CAMERON PARK", "CAMPBELL", "CAMP SWIFT", "CAMP WOOD", "CANADIAN", "CANEY CITY", "CANTON", "CANTU ADDITION", "CANUTILLO", "CANYON", "CANYON LAKE", "CARBON", "CARL S CORNER", "CARMINE", "CARRIZO HILL", "CARRIZO SPRINGS", "CARROLLTON", "CARTHAGE", "CASTLE HILLS", "CASTROVILLE", "CATARINA", "CEDAR HILL", "CEDAR PARK", "CELESTE", "CELINA", "CENTER", "CENTERVILLE", "CENTRAL GARDENS", "CESAR CHAVEZ", "CHANDLER", "CHANNELVIEW", "CHANNING", "CHARLOTTE", "CHESTER", "CHICO", "CHILDRESS", "CHILLICOTHE", "CHINA", "CHINA GROVE", "CHIRENO", "CHRISTINE", "CHRISTOVAL", "CHULA VISTA-ORASON", "CHULA VISTA-RIVER SPUR", "CIBOLO", "CIENEGAS TERRACE", "CINCO RANCH", "CIRCLE D-KC ESTATES", "CISCO", "CITRUS CITY", "CLARENDON", "CLARKSVILLE", "CLARKSVILLE CITY", "CLAUDE", "CLEAR LAKE SHORES", "CLEBURNE", "CLEVELAND", "CLIFTON", "CLINT", "CLOVERLEAF", "CLUTE", "CLYDE", "COAHOMA", "COCKRELL HILL", "COFFEE CITY", "COLDSPRING", "COLEMAN", "COLLEGE STATION", "COLLEYVILLE", "COLLINSVILLE", "COLMESNEIL", "COLORADO CITY", "COLUMBUS", "COMANCHE", "COMBES", "COMBINE", "COMFORT", "COMMERCE", "COMO", "CONCEPCION", "CONROE", "CONVERSE", "COOL", "COOLIDGE", "COOPER", "COPPELL", "COPPERAS COVE", "COPPER CANYON", "CORINTH", "CORPUS CHRISTI", "CORRAL CITY", "CORRIGAN", "CORSICANA", "COTTONWOOD", "COTTONWOOD SHORES", "COTULLA", "COVE", "COVINGTON", "COYANOSA", "COYOTE ACRES", "CRANDALL", "CRANE", "CRANFILLS GAP", "CRAWFORD", "CREEDMOOR", "CROCKETT", "CROSBY", "CROSBYTON", "CROSS MOUNTAIN", "CROSS PLAINS", "CROSS ROADS", "CROSS TIMBER", "CROWELL", "CROWLEY", "CRYSTAL CITY", "CUERO", "CUEVITAS", "CUMBY", "CUMINGS", "CUNEY", "CUSHING", "CUT AND SHOOT", "DAINGERFIELD", "DAISETTA", "DALHART", "DALLAS", "DALWORTHINGTON GARDENS", "DAMON", "DANBURY", "DARROUZETT", "DAWSON", "DAYTON", "DAYTON LAKES", "DEAN", "DECATUR", "DEER PARK", "DE KALB", "DE LEON", "DELL CITY", "DEL MAR HEIGHTS", "DEL RIO", "DEL SOL-LOMA LINDA", "DENISON", "DENTON", "DENVER CITY", "DEPORT", "DESOTO", "DETROIT", "DEVERS", "DEVINE", "DEWEYVILLE", "DIBOLL", "DICKENS", "DICKINSON", "DILLEY", "DIMMITT", "DODD CITY", "DODSON", "DOFFING", "DOMINO", "DONNA", "DOOLITTLE", "DORCHESTER", "DOUBLE OAK", "DOUGLASSVILLE", "DOYLE", "DRIPPING SPRINGS", "DRISCOLL", "DUBLIN", "DUMAS", "DUNCANVILLE", "EAGLE LAKE", "EAGLE MOUNTAIN", "EAGLE PASS", "EARLY", "EARTH", "EAST BERNARD", "EASTLAND", "EAST MOUNTAIN", "EASTON", "EAST TAWAKONI", "ECTOR", "EDCOUCH", "EDEN", "EDGECLIFF VILLAGE", "EDGEWATER-PAISANO", "EDGEWOOD", "EDINBURG", "EDMONSON", "EDNA", "EDOM", "EDROY", "EIDSON ROAD", "ELBERT", "EL CAMINO ANGOSTO", "EL CAMPO", "EL CENIZO", "ELDORADO", "ELECTRA", "ELGIN", "EL INDIO", "ELKHART", "EL LAGO", "ELM CREEK", "ELMENDORF", "EL PASO", "EL REFUGIO", "ELSA", "EMHOUSE", "EMORY", "ENCANTADA-RANCHITO EL CALABOZ", "ENCHANTED OAKS", "ENCINAL", "ENCINO", "ENNIS", "ESCOBARES", "ESTELLINE", "EULESS", "EUREKA", "EUSTACE", "EVADALE", "EVANT", "EVERMAN", "FABENS", "FAIRCHILDS", "FAIRFIELD", "FAIR OAKS RANCH", "FAIRVIEW", "FALCON HEIGHTS", "FALCON LAKE ESTATES", "FALCON MESA", "FALCON VILLAGE", "FALFURRIAS", "FALLS CITY", "FALMAN-COUNTY ACRES", "FARMERS BRANCH", "FARMERSVILLE", "FARWELL", "FATE", "FAYETTEVILLE", "FAYSVILLE", "FERRIS", "FIFTH STREET", "FLATONIA", "FLORENCE", "FLORESVILLE", "FLOWELLA", "FLOWER MOUND", "FLOYDADA", "FOLLETT", "FOREST HILL", "FORNEY", "FORSAN", "FORT BLISS", "FORT DAVIS", "FORT HANCOCK", "FORT HOOD", "FORT STOCKTON", "FORT WORTH", "FOUR CORNERS", "FOWLERTON", "FRANKLIN", "FRANKSTON", "FREDERICKSBURG", "FREEPORT", "FREER", "FRESNO", "FRIENDSWOOD", "FRIONA", "FRISCO", "FRITCH", "FRONTON", "FROST", "FRUITVALE", "FULSHEAR", "FULTON", "GAINESVILLE", "GALENA PARK", "GALLATIN", "GALVESTON", "GANADO", "GARCENO", "GARDENDALE", "GARDEN RIDGE", "GARFIELD", "GARLAND", "GARRETT", "GARRISON", "GARY CITY", "GATESVILLE", "GEORGETOWN", "GEORGE WEST", "GERONIMO", "GHOLSON", "GIDDINGS", "GILMER", "GIRARD", "GLADEWATER", "GLENN HEIGHTS", "GLEN ROSE", "GODLEY", "GOLDSMITH", "GOLDTHWAITE", "GOLIAD", "GOLINDA", "GONZALES", "GOODLOW", "GOODRICH", "GORDON", "GOREE", "GORMAN", "GRAFORD", "GRAHAM", "GRANBURY", "GRAND ACRES", "GRANDFALLS", "GRAND PRAIRIE", "GRAND SALINE", "GRANDVIEW", "GRANGER", "GRANITE SHOALS", "GRANJENO", "GRAPE CREEK", "GRAPELAND", "GRAPEVINE", "GRAYS PRAIRIE", "GREATWOOD", "GREEN VALLEY FARMS", "GREENVILLE", "GREGORY", "GREY FOREST", "GROESBECK", "GROOM", "GROVES", "GROVETON", "GRUVER", "GUERRA", "GUN BARREL CITY", "GUNTER", "GUSTINE", "HACKBERRY", "HALE CENTER", "HALLETTSVILLE", "HALLSBURG", "HALLSVILLE", "HALTOM CITY", "HAMILTON", "HAMLIN", "HAPPY", "HARDIN", "HARKER HEIGHTS", "HARLINGEN", "HARPER", "HART", "HARTLEY", "HASKELL", "HASLET", "HAVANA", "HAWK COVE", "HAWKINS", "HAWLEY", "HAYS", "HEARNE", "HEATH", "HEBBRONVILLE", "HEBRON", "HEDLEY", "HEDWIG VILLAGE", "HEIDELBERG", "HELOTES", "HEMPHILL", "HEMPSTEAD", "HENDERSON", "HENRIETTA", "HEREFORD", "HERMLEIGH", "HEWITT", "HICKORY CREEK", "HICO", "HIDALGO", "HIGGINS", "HIGHLAND HAVEN", "HIGHLAND PARK", "HIGHLANDS", "HIGHLAND VILLAGE", "HILL COUNTRY VILLAGE", "HILLCREST", "HILLSBORO", "HILLTOP", "HILSHIRE VILLAGE", "HITCHCOCK", "HOLIDAY LAKES", "HOLLAND", "HOLLIDAY", "HOLLYWOOD PARK", "HOMESTEAD MEADOWS NORTH", "HOMESTEAD MEADOWS SOUTH", "HONDO", "HONEY GROVE", "HOOKS", "HORIZON CITY", "HORSESHOE BAY", "HOUSTON", "HOWARDWICK", "HOWE", "HUBBARD", "HUDSON", "HUDSON BEND", "HUDSON OAKS", "HUGHES SPRINGS", "HUMBLE", "HUNGERFORD", "HUNTERS CREEK VILLAGE", "HUNTINGTON", "HUNTSVILLE", "HURST", "HUTCHINS", "HUTTO", "HUXLEY", "IDALOU", "IMPACT", "IMPERIAL", "INDIAN HILLS", "INDIAN LAKE", "INDUSTRY", "INEZ", "INGLESIDE", "INGLESIDE ON THE BAY", "INGRAM", "IOWA COLONY", "IOWA PARK", "IRAAN", "IREDELL", "IRVING", "ITALY", "ITASCA", "JACINTO CITY", "JACKSBORO", "JACKSONVILLE", "JAMAICA BEACH", "JASPER", "JAYTON", "JEFFERSON", "JERSEY VILLAGE", "JEWETT", "JOAQUIN", "JOHNSON CITY", "JOLLY", "JOLLYVILLE", "JONES CREEK", "JONESTOWN", "JOSEPHINE", "JOSHUA", "JOURDANTON", "JUNCTION", "JUSTIN", "KARNES CITY", "KATY", "KAUFMAN", "K-BAR RANCH", "KEENE", "KELLER", "KEMAH", "KEMP", "KEMPNER", "KENDLETON", "KENEDY", "KENEFICK", "KENNARD", "KENNEDALE", "KERENS", "KERMIT", "KERRVILLE", "KILGORE", "KILLEEN", "KINGSBURY", "KINGSLAND", "KINGSVILLE", "KIRBY", "KIRBYVILLE", "KIRVIN", "KNIPPA", "KNOLLWOOD", "KNOX CITY", "KOSSE", "KOUNTZE", "KRESS", "KRUGERVILLE", "KRUM", "KYLE", "LA BLANCA", "LA CASITA-GARCIASVILLE", "LACKLAND AFB", "LACOSTE", "LACY-LAKEVIEW", "LADONIA", "LA FERIA", "LA FERIA NORTH", "LAGO", "LAGO VISTA", "LA GRANGE", "LA GRULLA", "LAGUNA HEIGHTS", "LAGUNA SECA", "LAGUNA VISTA", "LA HOMA", "LA JOYA", "LAKE BRIDGEPORT", "LAKE BROWNWOOD", "LAKE CITY", "LAKE DALLAS", "LAKEHILLS", "LAKE JACKSON", "LAKE KIOWA", "LAKEPORT", "LAKESHORE GARDENS-HIDDEN ACRES", "LAKESIDE", "LAKESIDE", "LAKESIDE CITY", "LAKE TANGLEWOOD", "LAKEVIEW", "LAKE VIEW", "LAKEWAY", "LAKEWOOD VILLAGE", "LAKE WORTH", "LA MARQUE", "LAMESA", "LAMPASAS", "LANCASTER", "LA PALOMA", "LA PALOMA-LOST CREEK", "LA PORTE", "LA PRESA", "LA PRYOR", "LA PUERTA", "LAREDO", "LAREDO RANCHETTES", "LARGA VISTA", "LA ROSITA", "LASANA", "LASARA", "LAS COLONIAS", "LAS LOMAS", "LAS LOMITAS", "LAS PALMAS-JUAREZ", "LAS QUINTAS FRONTERIZAS", "LATEXO", "LAUGHLIN AFB", "LAURELES", "LA VERNIA", "LA VICTORIA", "LA VILLA", "LAVON", "LA WARD", "LAWN", "LEAGUE CITY", "LEAKEY", "LEANDER", "LEARY", "LEFORS", "LEONA", "LEONARD", "LEON VALLEY", "LEROY", "LEVELLAND", "LEWISVILLE", "LEXINGTON", "LIBERTY", "LIBERTY CITY", "LIBERTY HILL", "LINCOLN PARK", "LINDALE", "LINDEN", "LINDSAY", "LINDSAY", "LIPAN", "LIPSCOMB", "LITTLE ELM", "LITTLEFIELD", "LITTLE RIVER-ACADEMY", "LIVE OAK", "LIVERPOOL", "LIVINGSTON", "LLANO", "LLANO GRANDE", "LOCKHART", "LOCKNEY", "LOG CABIN", "LOLITA", "LOMA LINDA EAST", "LOMETA", "LONE OAK", "LONE STAR", "LONGVIEW", "LOPENO", "LOPEZVILLE", "LORAINE", "LORENA", "LORENZO", "LOS ALVAREZ", "LOS ANGELES SUBDIVISION", "LOS EBANOS", "LOS FRESNOS", "LOS INDIOS", "LOST CREEK", "LOS VILLAREALES", "LOS YBANEZ", "LOTT", "LOUISE", "LOVELADY", "LOWRY CROSSING", "LOZANO", "LUBBOCK", "LUCAS", "LUEDERS", "LUFKIN", "LULING", "LUMBERTON", "LYFORD", "LYFORD SOUTH", "LYTLE", "MABANK", "MCALLEN", "MCCAMEY", "MCGREGOR", "MCKINNEY", "MCLEAN", "MCLENDON-CHISHOLM", "MCQUEENEY", "MADISONVILLE", "MAGNOLIA", "MALAKOFF", "MALONE", "MANOR", "MANSFIELD", "MANVEL", "MARATHON", "MARBLE FALLS", "MARFA", "MARIETTA", "MARION", "MARKHAM", "MARLIN", "MARQUEZ", "MARSHALL", "MARSHALL CREEK", "MART", "MARTINDALE", "MASON", "MATADOR", "MATHIS", "MAUD", "MAURICEVILLE", "MAYPEARL", "MEADOW", "MEADOWLAKES", "MEADOWS PLACE", "MEDINA", "MEGARGEL", "MELISSA", "MELVIN", "MEMPHIS", "MENARD", "MERCEDES", "MERIDIAN", "MERKEL", "MERTENS", "MERTZON", "MESQUITE", "MEXIA", "MIAMI", "MIDLAND", "MIDLOTHIAN", "MIDWAY", "MIDWAY NORTH", "MIDWAY SOUTH", "MILA DOCE", "MILAM", "MILANO", "MILDRED", "MILES", "MILFORD", "MILLER S COVE", "MILLICAN", "MILLSAP", "MINEOLA", "MINERAL WELLS", "MINGUS", "MIRANDO CITY", "MISSION", "MISSION BEND", "MISSOURI CITY", "MOBEETIE", "MOBILE CITY", "MONAHANS", "MONT BELVIEU", "MONTE ALTO", "MONTGOMERY", "MOODY", "MOORE", "MOORE STATION", "MORALES-SANCHEZ", "MORAN", "MORGAN", "MORGAN FARM AREA", "MORGANS POINT", "MORGAN S POINT RESORT", "MORNING GLORY", "MORSE", "MORTON", "MOULTON", "MOUNTAIN CITY", "MOUNT CALM", "MOUNT ENTERPRISE", "MOUNT PLEASANT", "MOUNT VERNON", "MUENSTER", "MULESHOE", "MULLIN", "MUNDAY", "MUNIZ", "MURCHISON", "MURPHY", "MUSTANG", "MUSTANG RIDGE", "NACOGDOCHES", "NAPLES", "NASH", "NASSAU BAY", "NATALIA", "NAVARRO", "NAVASOTA", "NAZARETH", "NEDERLAND", "NEEDVILLE", "NESBITT", "NEVADA", "NEWARK", "NEW BERLIN", "NEW BOSTON", "NEW BRAUNFELS", "NEWCASTLE", "NEW CHAPEL HILL", "NEW DEAL", "NEW FAIRVIEW", "NEW FALCON", "NEW HOME", "NEW HOPE", "NEW LONDON", "NEW SUMMERFIELD", "NEW TERRITORY", "NEWTON", "NEW WAVERLY", "NEYLANDVILLE", "NIEDERWALD", "NIXON", "NOCONA", "NOLANVILLE", "NOME", "NOONDAY", "NORDHEIM", "NORMANGEE", "NORMANNA", "NORTH ALAMO", "NORTH CLEVELAND", "NORTHCLIFF", "NORTH ESCOBARES", "NORTHLAKE", "NORTH PEARSALL", "NORTH RICHLAND HILLS", "NORTH SAN PEDRO", "NOVICE", "NURILLO", "OAK GROVE", "OAKHURST", "OAK LEAF", "OAK POINT", "OAK RIDGE", "OAK RIDGE", "OAK RIDGE NORTH", "OAK TRAIL SHORES", "OAK VALLEY", "OAKWOOD", "O BRIEN", "ODEM", "ODESSA", "O DONNELL", "OGLESBY", "OILTON", "OLD RIVER-WINFREE", "OLIVAREZ", "OLMITO", "OLMOS PARK", "OLNEY", "OLTON", "OMAHA", "ONALASKA", "ONION CREEK", "OPDYKE WEST", "ORANGE", "ORANGE GROVE", "ORCHARD", "ORE CITY", "OVERTON", "OVILLA", "OWL RANCH-AMARGOSA", "OYSTER CREEK", "O", "PADUCAH", "PAINT ROCK", "PALACIOS", "PALESTINE", "PALISADES", "PALMER", "PALMHURST", "PALM VALLEY", "PALMVIEW", "PALMVIEW SOUTH", "PAMPA", "PANHANDLE", "PANORAMA VILLAGE", "PANTEGO", "PARADISE", "PARIS", "PARKER", "PASADENA", "PATTISON", "PATTON VILLAGE", "PAWNEE", "PAYNE SPRINGS", "PEARLAND", "PEARSALL", "PECAN ACRES", "PECAN GAP", "PECAN GROVE", "PECAN HILL", "PECAN PLANTATION", "PECOS", "PELICAN BAY", "PENELOPE", "PENITAS", "PERNITAS POINT", "PERRYTON", "PETERSBURG", "PETROLIA", "PETRONILA", "PETTUS", "PFLUGERVILLE", "PHARR", "PILOT POINT", "PINE FOREST", "PINEHURST", "PINEHURST", "PINE ISLAND", "PINELAND", "PINEWOOD ESTATES", "PINEY POINT VILLAGE", "PITTSBURG", "PLAINS", "PLAINVIEW", "PLANO", "PLEAK", "PLEASANTON", "PLEASANT VALLEY", "PLUM GROVE", "POINT", "POINT BLANK", "POINT COMFORT", "PONDER", "PORT ARANSAS", "PORT ARTHUR", "PORTER HEIGHTS", "PORT ISABEL", "PORTLAND", "PORT LAVACA", "PORT MANSFIELD", "PORT NECHES", "POST", "POST OAK BEND CITY", "POTEET", "POTH", "POTOSI", "POTTSBORO", "POWELL", "POYNOR", "PRADO VERDE", "PRAIRIE VIEW", "PREMONT", "PRESIDIO", "PRIMERA", "PRINCETON", "PROGRESO", "PROGRESO LAKES", "PROSPER", "PUTNAM", "PYOTE", "QUAIL", "QUANAH", "QUEEN CITY", "QUEMADO", "QUINLAN", "QUINTANA", "QUITAQUE", "QUITMAN", "RADAR BASE", "RALLS", "RANCHETTE ESTATES", "RANCHITOS LAS LOMAS", "RANCHO ALEGRE", "RANCHO BANQUETE", "RANCHO CHICO", "RANCHOS PENITAS WEST", "RANCHO VIEJO", "RANGER", "RANGERVILLE", "RANKIN", "RANSOM CANYON", "RATAMOSA", "RAVENNA", "RAYMONDVILLE", "REALITOS", "REDFORD", "RED LICK", "RED OAK", "REDWATER", "REDWOOD", "REESE CENTER", "REFUGIO", "REID HOPE KING", "REKLAW", "RELAMPAGO", "RENDON", "RENO", "RENO", "RETREAT", "RHOME", "RICE", "RICHARDSON", "RICHLAND", "RICHLAND HILLS", "RICHLAND SPRINGS", "RICHMOND", "RICHWOOD", "RIESEL", "RIO BRAVO", "RIO GRANDE CITY", "RIO HONDO", "RIO VISTA", "RISING STAR", "RIVER OAKS", "RIVERSIDE", "ROANOKE", "ROARING SPRINGS", "ROBERT LEE", "ROBINSON", "ROBSTOWN", "ROBY", "ROCHESTER", "ROCKDALE", "ROCKPORT", "ROCKSPRINGS", "ROCKWALL", "ROCKY MOUND", "ROGERS", "ROLLINGWOOD", "ROMA", "ROMA CREEK", "ROMAN FOREST", "ROPESVILLE", "ROSCOE", "ROSEBUD", "ROSE CITY", "ROSE HILL ACRES", "ROSENBERG", "ROSITA NORTH", "ROSITA SOUTH", "ROSS", "ROSSER", "ROTAN", "ROUND MOUNTAIN", "ROUND ROCK", "ROUND TOP", "ROWLETT", "ROXTON", "ROYSE CITY", "RULE", "RUNAWAY BAY", "RUNGE", "RUSK", "SABINAL", "SACHSE", "SADLER", "SAGINAW", "ST. HEDWIG", "ST. JO", "ST. PAUL", "ST. PAUL", "SALADO", "SALINENO", "SAMNORWOOD", "SAN ANGELO", "SAN ANTONIO", "SAN AUGUSTINE", "SAN BENITO", "SAN CARLOS", "SANCTUARY", "SANDERSON", "SANDIA", "SAN DIEGO", "SANDY HOLLOW-ESCONDIDAS", "SAN ELIZARIO", "SAN FELIPE", "SANFORD", "SANGER", "SAN IGNACIO", "SAN ISIDRO", "SAN JUAN", "SAN LEANNA", "SAN LEON", "SAN MANUEL-LINN", "SAN MARCOS", "SAN PATRICIO", "SAN PEDRO", "SAN PERLITA", "SAN SABA", "SANSOM PARK", "SANTA ANNA", "SANTA CLARA", "SANTA CRUZ", "SANTA FE", "SANTA MARIA", "SANTA MONICA", "SANTA ROSA", "SAVOY", "SCENIC OAKS", "SCHERTZ", "SCHULENBURG", "SCISSORS", "SCOTLAND", "SCOTTSVILLE", "SEABROOK", "SEADRIFT", "SEAGOVILLE", "SEAGRAVES", "SEALY", "SEBASTIAN", "SEGUIN", "SELMA", "SEMINOLE", "SERENADA", "SETH WARD", "SEVEN OAKS", "SEVEN POINTS", "SEYMOUR", "SHADY HOLLOW", "SHADY SHORES", "SHALLOWATER", "SHAMROCK", "SHAVANO PARK", "SHELDON", "SHENANDOAH", "SHEPHERD", "SHERMAN", "SHINER", "SHOREACRES", "SIENNA PLANTATION", "SIERRA BLANCA", "SIESTA SHORES", "SILSBEE", "SILVERTON", "SIMONTON", "SINTON", "SKELLYTOWN", "SKIDMORE", "SLATON", "SMILEY", "SMITHVILLE", "SMYER", "SNOOK", "SNYDER", "SOCORRO", "SOLIS", "SOMERSET", "SOMERVILLE", "SONORA", "SOUR LAKE", "SOUTH ALAMO", "SOUTH FORK ESTATES", "SOUTH HOUSTON", "SOUTHLAKE", "SOUTHMAYD", "SOUTH MOUNTAIN", "SOUTH PADRE ISLAND", "SOUTH POINT", "SOUTHSIDE PLACE", "SOUTH TOLEDO BEND", "SPADE", "SPARKS", "SPEARMAN", "SPLENDORA", "SPOFFORD", "SPRING", "SPRING GARDEN-TERRA VERDE", "SPRINGLAKE", "SPRINGTOWN", "SPRING VALLEY", "SPUR", "STAFFORD", "STAGECOACH", "STAMFORD", "STANTON", "STAR HARBOR", "STEPHENVILLE", "STERLING CITY", "STINNETT", "STOCKDALE", "STONEWALL", "STOWELL", "STRATFORD", "STRAWN", "STREETMAN", "STUDY BUTTE-TERLINGUA", "SUDAN", "SUGAR LAND", "SULLIVAN CITY", "SULPHUR SPRINGS", "SUNDOWN", "SUNNYVALE", "SUNRAY", "SUNRISE BEACH VILLAGE", "SUNSET", "SUNSET VALLEY", "SUN VALLEY", "SURFSIDE BEACH", "SWEENY", "SWEETWATER", "TAFT", "TAFT SOUTHWEST", "TAHOKA", "TALCO", "TALTY", "TATUM", "TAYLOR", "TAYLOR LAKE VILLAGE", "TEAGUE", "TEHUACANA", "TEMPLE", "TENAHA", "TERRELL", "TERRELL HILLS", "TEXARKANA", "TEXAS CITY", "TEXHOMA", "TEXLINE", "THE COLONY", "THE HILLS", "THE WOODLANDS", "THOMPSONS", "THORNDALE", "THORNTON", "THORNTONVILLE", "THRALL", "THREE RIVERS", "THROCKMORTON", "TIERRA BONITA", "TIERRA GRANDE", "TIKI ISLAND", "TIMBERCREEK CANYON", "TIMBERWOOD PARK", "TIMPSON", "TIOGA", "TIRA", "TOCO", "TODD MISSION", "TOLAR", "TOMBALL", "TOM BEAN", "TOOL", "TORNILLO", "TOYAH", "TRADEWINDS", "TRENT", "TRENTON", "TRINIDAD", "TRINITY", "TROPHY CLUB", "TROUP", "TROY", "TULETA", "TULIA", "TULSITA", "TURKEY", "TUSCOLA", "TYE", "TYLER", "TYNAN", "UHLAND", "UNCERTAIN", "UNION GROVE", "UNIVERSAL CITY", "UNIVERSITY PARK", "UTOPIA", "UVALDE", "UVALDE ESTATES", "VALENTINE", "VALLEY MILLS", "VALLEY VIEW", "VAL VERDE PARK", "VAN", "VAN ALSTYNE", "VANDERBILT", "VAN HORN", "VAN VLECK", "VEGA", "VENUS", "VERNON", "VICTORIA", "VIDOR", "VILLA DEL SOL", "VILLA PANCHO", "VILLA VERDE", "VINTON", "WACO", "WAELDER", "WAKE VILLAGE", "WALLER", "WALLIS", "WALNUT SPRINGS", "WARREN CITY", "WASKOM", "WATAUGA", "WAXAHACHIE", "WEATHERFORD", "WEBSTER", "WEIMAR", "WEINERT", "WEIR", "WELLINGTON", "WELLMAN", "WELLS", "WELLS BRANCH", "WESLACO", "WEST", "WESTBROOK", "WEST COLUMBIA", "WESTDALE", "WESTLAKE", "WEST LAKE HILLS", "WEST LIVINGSTON", "WESTMINSTER", "WEST ODESSA", "WESTON", "WEST ORANGE", "WESTOVER HILLS", "WEST PEARSALL", "WEST SHARYLAND", "WEST TAWAKONI", "WEST UNIVERSITY PLACE", "WESTWAY", "WESTWORTH VILLAGE", "WHARTON", "WHEELER", "WHITE DEER", "WHITEFACE", "WHITEHOUSE", "WHITE OAK", "WHITESBORO", "WHITE SETTLEMENT", "WHITEWRIGHT", "WHITNEY", "WICHITA FALLS", "WICKETT", "WILD PEACH VILLAGE", "WILLAMAR", "WILLIS", "WILLOW PARK", "WILLS POINT", "WILMER", "WILSON", "WIMBERLEY", "WINDCREST", "WINDEMERE", "WINDOM", "WINDTHORST", "WINFIELD", "WINK", "WINNIE", "WINNSBORO", "WINONA", "WINTERS", "WIXON VALLEY", "WOLFE CITY", "WOLFFORTH", "WOODBRANCH", "WOODCREEK", "WOODLOCH", "WOODSBORO", "WOODSON", "WOODVILLE", "WOODWAY", "WORTHAM", "WYLDWOOD", "WYLIE", "YANTIS", "YOAKUM", "YORKTOWN", "YZNAGA", "ZAPATA", "ZAPATA RANCH", "ZAVALLA", "ZUEHL"],
    Washington: ["ABERDEEN", "ABERDEEN GARDENS", "ACME", "AHTANUM", "AIRWAY HEIGHTS", "ALBION", "ALDERWOOD MANOR", "ALGER", "ALGONA", "ALLYN-GRAPEVIEW", "ALMIRA", "AMBOY", "AMES LAKE", "ANACORTES", "ARLINGTON", "ARLINGTON HEIGHTS", "ARTONDALE", "ASHFORD", "ASOTIN", "AUBURN", "AULT FIELD", "BAINBRIDGE ISLAND", "BANGOR TRIDENT BASE", "BANKS LAKE SOUTH", "BARBERTON", "BARING", "BASIN CITY", "BATTLE GROUND", "BAY CENTER", "BAY VIEW", "BEAUX ARTS VILLAGE", "BELLEVUE", "BELL HILL", "BELLINGHAM", "BENTON CITY", "BICKLETON", "BIG LAKE", "BINGEN", "BIRCH BAY", "BLACK DIAMOND", "BLAINE", "BLYN", "BONNEY LAKE", "BOTHELL", "BRADY", "BREMERTON", "BREWSTER", "BRIDGEPORT", "BRIER", "BRINNON", "BRUSH PRAIRIE", "BRYN MAWR-SKYWAY", "BUCKLEY", "BUCODA", "BURBANK", "BURIEN", "BURLINGTON", "CAMANO", "CAMAS", "CARBONADO", "CARLSBORG", "CARNATION", "CARSON RIVER VALLEY", "CASCADE-FAIRWOOD", "CASCADE VALLEY", "CASHMERE", "CASTLE ROCK", "CATHAN", "CATHCART", "CATHLAMET", "CENTERVILLE", "CENTRALIA", "CENTRAL PARK", "CHEHALIS", "CHEHALIS VILLAGE", "CHELAN", "CHENEY", "CHERRY GROVE", "CHEWELAH", "CHINOOK", "CLARKSTON", "CLARKSTON HEIGHTS-VINELAND", "CLEAR LAKE", "CLE ELUM", "CLINTON", "CLYDE HILL", "COHASSETT BEACH", "COLFAX", "COLLEGE PLACE", "COLTON", "COLVILLE", "CONCONULLY", "CONCRETE", "CONNELL", "CONWAY", "COPALIS BEACH", "COSMOPOLIS", "COTTAGE LAKE", "COULEE CITY", "COULEE DAM", "COUNTRY HOMES", "COUPEVILLE", "COVINGTON", "CRESTON", "CUSICK", "CUSTER", "DALLESPORT", "DARRINGTON", "DAVENPORT", "DAYTON", "DEER PARK", "DEMING", "DESERT AIRE", "DES MOINES", "DISHMAN", "DIXIE", "DOLLAR CORNER", "DUPONT", "DUVALL", "EAST CATHLAMET", "EASTGATE", "EAST HILL-MERIDIAN", "EASTON", "EAST PORT ORCHARD", "EAST RENTON HIGHLANDS", "EAST WENATCHEE", "EAST WENATCHEE BENCH", "EATONVILLE", "ECHO LAKE", "EDGEWOOD", "EDISON", "EDMONDS", "ELBE", "ELECTRIC CITY", "ELK PLAIN", "ELLENSBURG", "ELMA", "ELMER CITY", "ENDICOTT", "ENTIAT", "ENUMCLAW", "EPHRATA", "ERLANDS POINT-KITSAP LAKE", "ESCHBACH", "ESPERANCE", "EVERETT", "EVERSON", "FAIRCHILD AFB", "FAIRFIELD", "FAIRWOOD", "FALL CITY", "FARMINGTON", "FEDERAL WAY", "FELIDA", "FERNDALE", "FIFE", "FINLEY", "FIRCREST", "FIVE CORNERS", "FORDS PRAIRIE", "FORKS", "FORT LEWIS", "FOX ISLAND", "FREDERICKSON", "FREELAND", "FRIDAY HARBOR", "GARFIELD", "GARRETT", "GENEVA", "GEORGE", "GIG HARBOR", "GLACIER", "GLEED", "GOLD BAR", "GOLDENDALE", "GRAHAM", "GRAND COULEE", "GRAND MOUND", "GRANDVIEW", "GRANGER", "GRANITE FALLS", "GRAYLAND", "GREEN ACRES", "GREENWATER", "HAMILTON", "HARRAH", "HARRINGTON", "HARTLINE", "HATTON", "HAZEL DELL NORTH", "HAZEL DELL SOUTH", "HIGHLAND", "HOBART", "HOCKINSON", "HOQUIAM", "HUMPTULIPS", "HUNTS POINT", "ILWACO", "INCHELIUM", "INDEX", "INDIANOLA", "INGLEWOOD-FINN HILL", "IONE", "ISSAQUAH", "JOHN SAM LAKE", "JORDAN ROAD-CANYON CREEK", "JUNCTION CITY", "KAHLOTUS", "KALAMA", "KELSO", "KENDALL", "KENMORE", "KENNEWICK", "KENT", "KETTLE FALLS", "KINGSGATE", "KINGSTON", "KIRKLAND", "KITTITAS", "KLICKITAT", "KRUPP", "LA CENTER", "LACEY", "LA CONNER", "LA CROSSE", "LAKE BOSWORTH", "LAKE CAVANAUGH", "LAKE FOREST PARK", "LAKE GOODWIN", "LAKE KETCHUM", "LAKELAND NORTH", "LAKELAND SOUTH", "LAKE MCMURRAY", "LAKE MARCEL-STILLWATER", "LAKE MORTON-BERRYDALE", "LAKE ROESIGER", "LAKE SHORE", "LAKE STEVENS", "LAKEVIEW", "LAKEWOOD", "LAMONT", "LANGLEY", "LATAH", "LEA HILL", "LEAVENWORTH", "LEBAM", "LEWISVILLE", "LIBERTY LAKE", "LIND", "LOCHSLOY", "LONG BEACH", "LONGVIEW", "LONGVIEW HEIGHTS", "LYLE", "LYMAN", "LYNDEN", "LYNNWOOD", "MABTON", "MCCHORD AFB", "MCCLEARY", "MACHIAS", "MALDEN", "MALONE-PORTER", "MALTBY", "MANCHESTER", "MANSFIELD", "MAPLE FALLS", "MAPLE HEIGHTS-LAKE DESIRE", "MAPLE VALLEY", "MARBLEMOUNT", "MARCUS", "MARIETTA-ALDERWOOD", "MARKHAM", "MARROWSTONE", "MARTHA LAKE", "MARYHILL", "MARYSVILLE", "MATTAWA", "MAY CREEK", "MEADOW GLADE", "MEDICAL LAKE", "MEDINA", "MERCER ISLAND", "MESA", "METALINE", "METALINE FALLS", "MIDLAND", "MILL CREEK", "MILL PLAIN", "MILLWOOD", "MILTON", "MINNEHAHA", "MIRRORMONT", "MOCLIPS", "MONROE", "MONTESANO", "MORTON", "MOSES LAKE", "MOSES LAKE NORTH", "MOSSYROCK", "MOUNTLAKE TERRACE", "MOUNT VERNON", "MOUNT VISTA", "MOXEE", "MUKILTEO", "NACHES", "NAPAVINE", "NASELLE", "NAVY YARD CITY", "NEAH BAY", "NEILTON", "NESPELEM", "NESPELEM COMMUNITY", "NEWCASTLE", "NEWPORT", "NISQUALLY INDIAN COMMUNITY", "NOOKSACK", "NORMANDY PARK", "NORTH BEND", "NORTH BONNEVILLE", "NORTH CREEK", "NORTH MARYSVILLE", "NORTH OMAK", "NORTHPORT", "NORTH STANWOOD", "NORTH SULTAN", "NORTHWEST SNOHOMISH", "NORTH YELM", "OAKESDALE", "OAK HARBOR", "OAKVILLE", "OCEAN CITY", "OCEAN PARK", "OCEAN SHORES", "ODESSA", "OKANOGAN", "OLYMPIA", "OMAK", "OPPORTUNITY", "ORCHARDS", "OROVILLE", "ORTING", "OSO", "OTHELLO", "OTIS ORCHARDS-EAST FARMS", "OYEHUT-HOGANS CORNER", "PACIFIC", "PAINE FIELD-LAKE STICKNEY", "PALOUSE", "PARKLAND", "PARKWOOD", "PASCO", "PATEROS", "PEACEFUL VALLEY", "PE ELL", "PICNIC POINT-NORTH LYNNWOOD", "POMEROY", "PORT ANGELES", "PORT ANGELES EAST", "PORT HADLOCK-IRONDALE", "PORT LUDLOW", "PORT ORCHARD", "PORT TOWNSEND", "POULSBO", "PRAIRIE RIDGE", "PRESCOTT", "PRIEST POINT", "PROSSER", "PULLMAN", "PUYALLUP", "QUILCENE", "QUINCY", "RAINIER", "RAVENSDALE", "RAYMOND", "REARDAN", "REDMOND", "RENTON", "REPUBLIC", "RICHLAND", "RIDGEFIELD", "RITZVILLE", "RIVERBEND", "RIVER ROAD", "RIVERSIDE", "RIVERTON-BOULEVARD PARK", "ROCHESTER", "ROCKFORD", "ROCK ISLAND", "ROCKPORT", "RONALD", "ROOSEVELT", "ROSALIA", "ROSLYN", "ROY", "ROYAL CITY", "RUSTON", "ST. JOHN", "SALMON CREEK", "SAMMAMISH", "SATSOP", "SATUS", "SEATAC", "SEATTLE", "SEATTLE HILL-SILVER FIRS", "SEDRO-WOOLLEY", "SELAH", "SEQUIM", "SHAKER CHURCH", "SHELTON", "SHORELINE", "SILVANA", "SILVERDALE", "SKOKOMISH", "SKYKOMISH", "SMOKEY POINT", "SNOHOMISH", "SNOQUALMIE", "SNOQUALMIE PASS", "SOAP LAKE", "SOUTH BEND", "SOUTH CLE ELUM", "SOUTH HILL", "SOUTH PRAIRIE", "SOUTH WENATCHEE", "SPANAWAY", "SPANGLE", "SPOKANE", "SPRAGUE", "SPRINGDALE", "STANWOOD", "STARBUCK", "STARTUP", "STEILACOOM", "STEVENSON", "STIMSON CROSSING", "SUDDEN VALLEY", "SULTAN", "SUMAS", "SUMMIT", "SUMMITVIEW", "SUMNER", "SUNNYSIDE", "SUNNYSLOPE", "SUQUAMISH", "TACOMA", "TAHOLAH", "TANGLEWILDE-THOMPSON PLACE", "TANNER", "TEKOA", "TENINO", "TERRACE HEIGHTS", "THORP", "THREE LAKES", "TIETON", "TOKELAND", "TOLEDO", "TONASKET", "TOPPENISH", "TOUCHET", "TOWN AND COUNTRY", "TRACYTON", "TRENTWOOD", "TROUT LAKE", "TUKWILA", "TULALIP BAY", "TUMWATER", "TWISP", "UNION GAP", "UNION HILL-NOVELTY HILL", "UNIONTOWN", "UNIVERSITY PLACE", "VADER", "VANCOUVER", "VANTAGE", "VASHON", "VENERSBORG", "VERADALE", "VERLOT", "WAITSBURG", "WALLA WALLA", "WALLA WALLA EAST", "WALLER", "WALLULA", "WALNUT GROVE", "WAPATO", "WARDEN", "WARM BEACH", "WASHOUGAL", "WASHTUCNA", "WATERVILLE", "WAVERLY", "WEALLUP LAKE", "WENATCHEE", "WEST CLARKSTON-HIGHLAND", "WEST LAKE SAMMAMISH", "WEST LAKE STEVENS", "WEST LONGVIEW", "WEST PASCO", "WESTPORT", "WEST RICHLAND", "WEST SIDE HIGHWAY", "WEST VALLEY", "WEST WENATCHEE", "WHITE CENTER", "WHITE SALMON", "WHITE SWAN", "WILBUR", "WILKESON", "WILSON CREEK", "WINLOCK", "WINTHROP", "WISHRAM", "WOODINVILLE", "WOODLAND", "WOODS CREEK", "WOODWAY", "YACOLT", "YAKIMA", "YARROW POINT", "YELM", "ZILLAH"],
    Wisconsin: ["ABBOTSFORD", "ADAMS", "ADELL", "ALBANY", "ALGOMA", "ALLOUEZ", "ALMA", "ALMA CENTER", "ALMENA", "ALMOND", "ALTOONA", "AMERY", "AMHERST", "AMHERST JUNCTION", "ANIWA", "ANTIGO", "APPLETON", "ARCADIA", "ARENA", "ARGYLE", "ARLINGTON", "ARPIN", "ASHLAND", "ASHWAUBENON", "ATHENS", "AUBURNDALE", "AUGUSTA", "AVOCA", "BAGLEY", "BALDWIN", "BALSAM LAKE", "BANGOR", "BARABOO", "BARNEVELD", "BARRON", "BAY CITY", "BAYFIELD", "BAYSIDE", "BEAR CREEK", "BEAVER DAM", "BELGIUM", "BELL CENTER", "BELLEVILLE", "BELLEVUE TOWN", "BELMONT", "BELOIT", "BENTON", "BERLIN", "BIG BEND", "BIG FALLS", "BIRCHWOOD", "BIRNAMWOOD", "BIRON", "BLACK CREEK", "BLACK EARTH", "BLACK RIVER FALLS", "BLAIR", "BLANCHARDVILLE", "BLOOMER", "BLOOMINGTON", "BLUE MOUNDS", "BLUE RIVER", "BOAZ", "BOHNERS LAKE", "BONDUEL", "BOSCOBEL", "BOWLER", "BOYCEVILLE", "BOYD", "BRANDON", "BRICE PRAIRIE", "BRILLION", "BRODHEAD", "BROKAW", "BROOKFIELD", "BROOKLYN", "BROWN DEER", "BROWNS LAKE", "BROWNSVILLE", "BROWNTOWN", "BRUCE", "BUFFALO CITY", "BURLINGTON", "BUTLER", "BUTTERNUT", "CADOTT", "CAMBRIA", "CAMBRIDGE", "CAMERON", "CAMPBELLSPORT", "CAMP DOUGLAS", "CAMP LAKE", "CASCADE", "CASCO", "CASHTON", "CASSVILLE", "CATAWBA", "CAZENOVIA", "CECIL", "CEDARBURG", "CEDAR GROVE", "CENTURIA", "CHAIN O LAKES-KING", "CHASEBURG", "CHENEQUA", "CHETEK", "CHIEF LAKE", "CHILTON", "CHIPPEWA FALLS", "CLAYTON", "CLEAR LAKE", "CLEVELAND", "CLINTON", "CLINTONVILLE", "CLYMAN", "COBB", "COCHRANE", "COLBY", "COLEMAN", "COLFAX", "COLOMA", "COLUMBUS", "COMBINED LOCKS", "COMO", "CONRATH", "COON VALLEY", "CORNELL", "COTTAGE GROVE", "COUDERAY", "CRANDON", "CRIVITZ", "CROSS PLAINS", "CUBA CITY", "CUDAHY", "CUMBERLAND", "CURTISS", "DALLAS", "DANE", "DARIEN", "DARLINGTON", "DEERFIELD", "DEER PARK", "DEFOREST", "DELAFIELD", "DELAVAN", "DELAVAN LAKE", "DENMARK", "DE PERE", "DE SOTO", "DICKEYVILLE", "DODGEVILLE", "DORCHESTER", "DOUSMAN", "DOWNING", "DOYLESTOWN", "DRESSER", "DURAND", "EAGLE", "EAGLE LAKE", "EAGLE RIVER", "EASTMAN", "EAST TROY", "EAU CLAIRE", "EDEN", "EDGAR", "EDGERTON", "EGG HARBOR", "ELAND", "ELDERON", "ELEVA", "ELKHART LAKE", "ELKHORN", "ELK MOUND", "ELLSWORTH", "ELM GROVE", "ELMWOOD", "ELMWOOD PARK", "ELROY", "EMBARRASS", "ENDEAVOR", "EPHRAIM", "ETTRICK", "EVANSVILLE", "EVERGREEN", "EXELAND", "FAIRCHILD", "FAIRWATER", "FALL CREEK", "FALL RIVER", "FENNIMORE", "FENWOOD", "FERRYVILLE", "FITCHBURG", "FOND DU LAC", "FONTANA-ON-GENEVA LAKE", "FOOTVILLE", "FORESTVILLE", "FORT ATKINSON", "FOUNTAIN CITY", "FOX LAKE", "FOX POINT", "FRANCIS CREEK", "FRANKLIN", "FRANKSVILLE", "FREDERIC", "FREDONIA", "FREMONT", "FRENCH ISLAND", "FRIENDSHIP", "FRIESLAND", "GALESVILLE", "GAYS MILLS", "GENOA", "GENOA CITY", "GERMANTOWN", "GILLETT", "GILMAN", "GLENBEULAH", "GLENDALE", "GLEN FLORA", "GLENWOOD CITY", "GRAFTON", "GRANTON", "GRANTSBURG", "GRATIOT", "GREEN BAY", "GREENDALE", "GREENFIELD", "GREEN LAKE", "GREENWOOD", "GRESHAM", "HALES CORNERS", "HAMMOND", "HANCOCK", "HARTFORD", "HARTLAND", "HATLEY", "HAUGEN", "HAWKINS", "HAYWARD", "HAZEL GREEN", "HEBRON", "HELENVILLE", "HEWITT", "HIGHLAND", "HILBERT", "HILLSBORO", "HIXTON", "HOLLANDALE", "HOLMEN", "HORICON", "HORTONVILLE", "HOWARD", "HOWARDS GROVE", "HUDSON", "HURLEY", "HUSTISFORD", "HUSTLER", "INDEPENDENCE", "INGRAM", "IOLA", "IRON RIDGE", "IRONTON", "IXONIA", "JACKSON", "JANESVILLE", "JEFFERSON", "JOHNSON CREEK", "JUNCTION CITY", "JUNEAU", "KAUKAUNA", "KEKOSKEE", "KELLNERSVILLE", "KENDALL", "KENNAN", "KENOSHA", "KESHENA", "KEWASKUM", "KEWAUNEE", "KIEL", "KIMBERLY", "KINGSTON", "KNAPP", "KOHLER", "LAC DU FLAMBEAU", "LAC LA BELLE", "LA CROSSE", "LADYSMITH", "LA FARGE", "LAKE DELTON", "LAKE GENEVA", "LAKE KOSHKONONG", "LAKE LAC LA BELLE", "LAKE MILLS", "LAKE NEBAGAMON", "LAKE RIPLEY", "LAKE SHANGRILA", "LAKE WAZEECHA", "LAKE WISCONSIN", "LAKE WISSOTA", "LANCASTER", "LANNON", "LA VALLE", "LEGEND LAKE", "LENA", "LIME RIDGE", "LINDEN", "LITTLE CHUTE", "LITTLE ROUND LAKE", "LIVINGSTON", "LODI", "LOGANVILLE", "LOHRVILLE", "LOMIRA", "LONE ROCK", "LOWELL", "LOYAL", "LUBLIN", "LUCK", "LUXEMBURG", "LYNDON STATION", "LYNXVILLE", "MCFARLAND", "MADISON", "MAIDEN ROCK", "MANAWA", "MANITOWOC", "MAPLE BLUFF", "MARATHON CITY", "MARIBEL", "MARINETTE", "MARION", "MARKESAN", "MARQUETTE", "MARSHALL", "MARSHFIELD", "MASON", "MATTOON", "MAUSTON", "MAYVILLE", "MAZOMANIE", "MEDFORD", "MELLEN", "MELROSE", "MELVINA", "MENASHA", "MENOMONEE FALLS", "MENOMONIE", "MEQUON", "MERRILL", "MERRILLAN", "MERRIMAC", "MERTON", "MIDDLETON", "MIDDLE VILLAGE", "MILLADORE", "MILLTOWN", "MILTON", "MILWAUKEE", "MINERAL POINT", "MINONG", "MISHICOT", "MONDOVI", "MONONA", "MONROE", "MONTELLO", "MONTFORT", "MONTICELLO", "MONTREAL", "MOSINEE", "MOUNT CALVARY", "MOUNT HOPE", "MOUNT HOREB", "MOUNT STERLING", "MUKWONAGO", "MUSCODA", "MUSKEGO", "NASHOTAH", "NECEDAH", "NEENAH", "NEILLSVILLE", "NEKOOSA", "NELSON", "NELSONVILLE", "NEOPIT", "NEOSHO", "NESHKORO", "NEW AUBURN", "NEW BERLIN", "NEWBURG", "NEW GLARUS", "NEW HOLSTEIN", "NEW LISBON", "NEW LONDON", "NEW POST", "NEW RICHMOND", "NIAGARA", "NICHOLS", "NORTH BAY", "NORTH FOND DU LAC", "NORTH FREEDOM", "NORTH HUDSON", "NORTH PRAIRIE", "NORWALK", "OAK CREEK", "OAKDALE", "OAKFIELD", "OCONOMOWOC", "OCONOMOWOC LAKE", "OCONTO", "OCONTO FALLS", "ODANAH", "OGDENSBURG", "OKAUCHEE LAKE", "OLIVER", "OMRO", "ONALASKA", "ONEIDA", "ONTARIO", "OOSTBURG", "OREGON", "ORFORDVILLE", "OSCEOLA", "OSHKOSH", "OSSEO", "OWEN", "OXFORD", "PADDOCK LAKE", "PALMYRA", "PARDEEVILLE", "PARK FALLS", "PARK RIDGE", "PATCH GROVE", "PELL LAKE", "PEPIN", "PESHTIGO", "PEWAUKEE", "PEWAUKEE", "PHILLIPS", "PIGEON FALLS", "PITTSVILLE", "PLAIN", "PLAINFIELD", "PLATTEVILLE", "PLEASANT PRAIRIE", "PLOVER", "PLUM CITY", "PLYMOUTH", "POPLAR", "PORTAGE", "PORT EDWARDS", "PORT WASHINGTON", "POTOSI", "POTTER", "POTTER LAKE", "POUND", "POWERS LAKE", "POYNETTE", "PRAIRIE DU CHIEN", "PRAIRIE DU SAC", "PRAIRIE FARM", "PRENTICE", "PRESCOTT", "PRINCETON", "PULASKI", "RACINE", "RADISSON", "RANDOLPH", "RANDOM LAKE", "READSTOWN", "REDGRANITE", "REEDSBURG", "REEDSVILLE", "REESEVILLE", "RESERVE", "REWEY", "RHINELANDER", "RIB LAKE", "RIB MOUNTAIN", "RICE LAKE", "RICHLAND CENTER", "RIDGELAND", "RIDGEWAY", "RIO", "RIPON", "RIVER FALLS", "RIVER HILLS", "ROBERTS", "ROCHESTER", "ROCKDALE", "ROCKLAND", "ROCK SPRINGS", "ROME", "ROSENDALE", "ROSHOLT", "ROTHSCHILD", "RUDOLPH", "ST. CLOUD", "ST. CROIX FALLS", "ST. FRANCIS", "ST. NAZIANZ", "SAUK CITY", "SAUKVILLE", "SCANDINAVIA", "SCHOFIELD", "SEYMOUR", "SEYMOUR", "SHARON", "SHAWANO", "SHEBOYGAN", "SHEBOYGAN FALLS", "SHELDON", "SHELL LAKE", "SHERWOOD", "SHIOCTON", "SHOREWOOD", "SHOREWOOD HILLS", "SHULLSBURG", "SILVER LAKE", "SIREN", "SISTER BAY", "SLINGER", "SOLDIERS GROVE", "SOLON SPRINGS", "SOMERSET", "SOUTH MILWAUKEE", "SOUTH WAYNE", "SPARTA", "SPENCER", "SPOONER", "SPRING GREEN", "SPRING VALLEY", "STANLEY", "STAR PRAIRIE", "STETSONVILLE", "STEUBEN", "STEVENS POINT", "STOCKBRIDGE", "STOCKHOLM", "STODDARD", "STOUGHTON", "STRATFORD", "STRUM", "STURGEON BAY", "STURTEVANT", "SULLIVAN", "SUN PRAIRIE", "SUPERIOR", "SUPERIOR", "SURING", "SUSSEX", "TAINTER LAKE", "TAYLOR", "TENNYSON", "THERESA", "THIENSVILLE", "THORP", "TIGERTON", "TOMAH", "TOMAHAWK", "TONY", "TREMPEALEAU", "TURTLE LAKE", "TWIN LAKES", "TWO RIVERS", "UNION CENTER", "UNION GROVE", "UNITY", "VALDERS", "VERONA", "VESPER", "VIOLA", "VIROQUA", "WALDO", "WALES", "WALWORTH", "WARRENS", "WASHBURN", "WATERFORD", "WATERFORD NORTH", "WATERLOO", "WATERTOWN", "WAUKESHA", "WAUNAKEE", "WAUPACA", "WAUPUN", "WAUSAU", "WAUSAUKEE", "WAUTOMA", "WAUWATOSA", "WAUZEKA", "WEBSTER", "WEST ALLIS", "WEST BARABOO", "WEST BEND", "WESTBY", "WESTFIELD", "WEST MILWAUKEE", "WESTON", "WEST SALEM", "WEYAUWEGA", "WEYERHAEUSER", "WHEELER", "WHITEFISH BAY", "WHITEHALL", "WHITE LAKE", "WHITELAW", "WHITEWATER", "WHITING", "WILD ROSE", "WILLIAMS BAY", "WILSON", "WILTON", "WIND LAKE", "WIND POINT", "WINDSOR", "WINNECONNE", "WINTER", "WISCONSIN DELLS", "WISCONSIN RAPIDS", "WITHEE", "WITTENBERG", "WONEWOC", "WOODMAN", "WOODVILLE", "WRIGHTSTOWN", "WYEVILLE", "WYOCENA", "YUBA", "ZOAR"]
  };
  var EN_DICT = function () {
    var result = [];

    for (var key in EN_DICT_RAW) {
      var list = EN_DICT_RAW[key];
      var children = [];

      for (var i = 0; i < list.length; ++i) {
        children[i] = {
          name: list[i]
        };
      }

      result.push({
        name: key,
        children: children
      });
    }

    return result;
  }();

  var natural$1 = basicMap.natural;
  var pick$2 = Utils$1.pick;
  var typeMap = {
    ch: {
      dict: C_DICT,
      region: C_REGION
    },
    tw: {
      dict: DICT,
      region: REGION
    },
    en: {
      dict: EN_DICT,
      region: EN_REGION
    }
  };

  function region() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ch';
    return pick$2(typeMap[type].region);
  }

  function province() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ch';
    return pick$2(typeMap[type].dict).name;
  }

  function city() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ch';
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dict = typeMap[type].dict;
    var province = pick$2(dict) || {
      children: {}
    };
    var city = pick$2(province.children) || {
      name: '-'
    };
    return prefix ? [province.name, city.name].join(' ') : city.name;
  }

  function county() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ch';
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dict = typeMap[type].dict;
    var province = pick$2(dict);
    var city = pick$2(province.children);
    var county = pick$2(city.children) || {
      name: '-'
    };
    return prefix ? [province.name, city.name, county.name].join(' ') : county.name;
  }

  function zip(len) {
    var zip = '';

    for (var i = 0; i < (len || 6); i++) {
      zip += natural$1(0, 9);
    }

    return zip;
  }

  var addressMap = {
    region: region,
    province: province,
    city: city,
    county: county,
    zip: zip
  };

  var string = basicMap.string;
  var date = dateMap.date;
  var pick$1 = Utils$1.pick;
  /*
    随机生成一个 GUID。
    http://www.broofa.com/2008/09/javascript-uuid-function/
    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
        UUIDs (Universally Unique IDentifier)
        GUIDs (Globally Unique IDentifier)
        The formal definition of the UUID string representation is provided by the following ABNF [7]:
            UUID                   = time-low "-" time-mid "-"
                                    time-high-and-version "-"
                                    clock-seq-and-reserved
                                    clock-seq-low "-" node
            time-low               = 4hexOctet
            time-mid               = 2hexOctet
            time-high-and-version  = 2hexOctet
            clock-seq-and-reserved = hexOctet
            clock-seq-low          = hexOctet
            node                   = 6hexOctet
            hexOctet               = hexDigit hexDigit
            hexDigit =
                "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
                "a" / "b" / "c" / "d" / "e" / "f" /
                "A" / "B" / "C" / "D" / "E" / "F"
    
    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
  */

  var GUID_POOL = 'abcdefABCDEF1234567890';

  function guid() {
    var guid = string(GUID_POOL, 8) + '-' + string(GUID_POOL, 4) + '-' + string(GUID_POOL, 4) + '-' + string(GUID_POOL, 4) + '-' + string(GUID_POOL, 12);
    return guid;
  }

  function autoIncrement(step) {
    var key = 0;
    return function () {
      return key += +step || 1; // step?
    };
  }

  function increment(step) {
    return autoIncrement(step);
  }
  /*
    随机生成一个 18 位身份证。
    [身份证](http://baike.baidu.com/view/1697.htm#4)
        地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
  */


  function chid() {
    var rank = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
    var last = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var id;
    var sum = 0;
    id = pick$1(C_DICT).code + date('yyyyMMdd') + string('number', 3);

    for (var i = 0; i < id.length; i++) {
      sum += id[i] * rank[i];
    }

    id += last[sum % 11];
    return id;
  } // tw id


  function twid() {
    var city = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);
    var id = new Array();
    id[0] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    id[1] = Math.floor(Math.random() * 2) + 1;

    for (var i = 2; i < 9; i++) {
      id[i] = Math.floor(Math.random() * 9) + 0;
    }

    var total = city[id[0].charCodeAt(0) - 65];

    for (var _i = 1; _i <= 8; _i++) {
      total += eval(id[_i]) * (9 - _i);
    }

    var total_arr = (total + '').split('');
    var lastChar = eval(10 - total_arr[total_arr.length - 1]);
    var lastChar_arr = (lastChar + '').split('');
    id[id.length++] = lastChar_arr[lastChar_arr.length - 1];
    return id.join('');
  } // ssn source from chancejs


  function enid() {
    var dashes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var ssnFour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var ssn_pool = '1234567890';
    var dash = dashes ? '-' : '';
    var ssn;

    if (!ssnFour) {
      ssn = string(ssn_pool, 3) + dash + string(ssn_pool, 2) + dash + string(ssn_pool, 4);
    } else {
      ssn = string(ssn_pool, 4);
    }

    return ssn;
  }

  var idMap = {
    ch: chid,
    tw: twid,
    en: enid
  };

  function id() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    return idMap[type]();
  }

  var miscMap = {
    guid: guid,
    id: id,
    increment: increment
  };

  var natural = basicMap.natural;
  var pick = Utils$1.pick,
      pickMap = Utils$1.pickMap;
  var idKeyMap = new Map(); // [id, rateMap]

  var rmaxMap = new Map(); // [id, rmax]

  var countCache = []; // null: not start

  var dataTypeMap = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, basicMap), dateMap), imageMap), colorMap), textMap), nameMap), webMap), addressMap), miscMap);

  function parseKey(matchKey) {
    var newKey = matchKey[1];
    var splitId = matchKey[2].split(':');
    var counter = matchKey[2].indexOf('=') > -1; // id, params

    var id, rmin, rmax, min, max, nextCount;

    if (splitId[1]) {
      id = splitId[0];

      var _splitId$1$split = splitId[1].split('/');

      var _splitId$1$split2 = _slicedToArray(_splitId$1$split, 2);

      rmin = _splitId$1$split2[0];
      rmax = _splitId$1$split2[1];
    } else if (counter) {
      nextCount = new Function('i', "return i".concat(matchKey[2], ";"));
    } else {
      var _matchKey$2$split = matchKey[2].split('-');

      var _matchKey$2$split2 = _slicedToArray(_matchKey$2$split, 2);

      min = _matchKey$2$split2[0];
      max = _matchKey$2$split2[1];
      if (!max) max = min;
    }

    return {
      newKey: newKey,
      id: id,
      min: min,
      max: max,
      rmin: rmin,
      rmax: rmax,
      nextCount: nextCount
    };
  }
  /**
   * parseValueSchema
   * @param {*} value 
   */


  function parseValueSchema(value) {
    if (Array.isArray(value)) {
      return value.map(function (item) {
        return createData(item);
      });
    }

    if (typeof value === 'function') {
      return value(dataTypeMap);
    }

    if (typeof value !== 'string') return value;
    var matchValue = value.match(/@([^)]*)/);

    if (matchValue) {
      return new Function('', "\n      with (this) {\n        return ".concat(value.replace(/@([^)]*)/g, '$1'), ";\n      }\n    ")).call(dataTypeMap);
    }

    return value;
  }

  function normalKeyHandler(params, value, output) {
    var newKey = params.newKey,
        min = params.min,
        max = params.max,
        nextCount = params.nextCount;
    var newValue; // -- string value

    if (typeof value === 'string') {
      var unitValue = parseValueSchema(value);
      newValue = unitValue.repeat(natural(min, max));
    } // -- number value
    else if (typeof value === 'number') {
        if (nextCount) {
          var cacheIndex = countCache.length - 1;
          newValue = nextCount(countCache[cacheIndex] || value);
          countCache[cacheIndex] = newValue;
        } else {
          newValue = natural(min, max);
        }
      } // -- array value
      else if (Array.isArray(value)) {
          newValue = [];
          countCache.push(null);

          for (var i = 0; i < natural(min, max); ++i) {
            var cpick = pick(value);
            newValue.push(_typeof(cpick) === 'object' ? createData(cpick) : parseValueSchema(cpick));
          }

          countCache.pop();

          if (max == 1) {
            newValue = newValue[0];
          }
        } // -- not handled value(object, boolean, others...)
        else {
            newValue = createData(value);
          }

    output[newKey] = newValue;
  }

  function idKeyHandler(params, value, output) {
    var newKey = params.newKey,
        id = params.id,
        rmin = params.rmin,
        rmax = params.rmax; // create rateMap by id

    var targetRateMap = idKeyMap.get(id);

    if (!targetRateMap) {
      idKeyMap.set(id, targetRateMap = new Set());
    } // set item to rateMap


    targetRateMap.add({
      parent: output,
      key: newKey,
      value: value,
      rmin: rmin
    }); // set id rmax

    rmaxMap.set(id, rmax);
  }
  /**
   * parseKeySchema
   * @param {*} output 
   * @param {*} key 
   * @param {*} value 
   */


  function parseKeySchema(output, key, value) {
    var matchKey = key.match(/(.*)\|(.*)/); // console.log(matchKey);

    if (matchKey) {
      var params = parseKey(matchKey);

      if (params.id) {
        idKeyHandler(params, value, output);
      } else {
        normalKeyHandler(params, value, output);
      }
    } else {
      output['invalid'] = 'Error: matchKey invalid';
    }
  }
  /**
   * createData
   * create mock data without probability pick
   * @param {*} dataSchema 
   */


  function createData(dataSchema) {
    if (!dataSchema || _typeof(dataSchema) !== 'object' || Array.isArray(dataSchema)) {
      return parseValueSchema(dataSchema);
    }

    var output = {};

    for (var key in dataSchema) {
      // key schema
      if (key.indexOf('|') > -1) {
        // set output in handler
        parseKeySchema(output, key, dataSchema[key]);
      } // value schema
      else {
          output[key] = createData(dataSchema[key]);
        }
    }

    return output;
  } // only inject rate keys once


  function mock(dataSchema) {
    var output = createData(dataSchema); // inject rate keys
    // console.log(idKeyMap.get('key'));

    var _iterator = _createForOfIteratorHelper(idKeyMap),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            rateMap = _step$value[1];

        var picker = pickMap(rateMap);
        var rmax = rmaxMap.get(key);

        var _picker = picker({
          parent: {},
          key: '',
          value: '',
          rmin: 0
        }, rmax),
            parent = _picker.parent,
            pickKey = _picker.key,
            value = _picker.value;

        parent[pickKey] = createData(value);
        idKeyMap["delete"](key);
        rmaxMap["delete"](key);
        picker = null; // drop memory
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return output;
  }

  var MockCache = new Map();
  function findCache(options) {
    var url = options.url,
        type = options.type;
    return MockCache.get((url + type).toLowerCase()) || false;
  }
  function setCache(options, data) {
    var item = findCache(options);

    if (!item) {
      var url = options.url,
          type = options.type;
      MockCache.set((url + type).toLowerCase(), data);
    }
  }
  function getCache(options) {
    if (options === undefined) return MockCache;
    var item = findCache(options);
    if (item) return item;
    console.error('[remock] mock cache not found');
    return false;
  }
  function deleteCache(options) {
    var item = findCache(options);

    if (item) {
      var url = options.url,
          type = options.type;
      MockCache["delete"]((url + type).toLowerCase());
    }
  }
  function clearCache() {
    MockCache = new Map();
  }
  function createNativeXHR() {
    try {
      return new window._XMLHttpRequest();
    } catch (e) {
      console.error(e);
    }

    return false;
  }
  var XHR_STATES = {
    // The object has been constructed.
    UNSENT: 0,
    // The open() method has been successfully invoked.
    OPENED: 1,
    // All redirects (if any) have been followed and all HTTP headers of the response have been received.
    HEADERS_RECEIVED: 2,
    // The response's body is being received.
    LOADING: 3,
    // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
    DONE: 4
  };
  var XHR_EVENTS = 'readystatechange loadstart progress abort error load upload timeout loadend'.split(' ');
  var XHR_REQUEST_PROPERTIES = 'responseType timeout withCredentials'.split(' ');
  var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ');
  var HTTP_STATUS_CODES = {
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choice',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported'
  };

  /* eslint-disable no-empty */

  function extend$1(to, from, thisArgs) {
    Object.keys(from).forEach(function (key) {
      var val = from[key];

      if (thisArgs && typeof val === 'function') {
        to[key] = val.bind(thisArgs);
      } else {
        to[key] = val;
      }
    });
    return to;
  } // sync event: NativeXMLHttpRequest => MockXMLHttpRequest


  function nativeResponseHandler(event) {
    var mock = this;
    var nativeProLen = XHR_RESPONSE_PROPERTIES.length;

    for (var i = 0; i < nativeProLen; ++i) {
      try {
        mock[XHR_RESPONSE_PROPERTIES[i]] = mock.custom.xhr[XHR_RESPONSE_PROPERTIES[i]];
      } catch (e) {}
    }

    mock.dispatchEvent(new CustomEvent(event.type));
  }

  function syncNativeResponse$1(xhr, mock) {
    for (var i = 0; i < XHR_EVENTS.length; ++i) {
      xhr.addEventListener(XHR_EVENTS[i], nativeResponseHandler.bind(mock));
    }
  }

  function syncNativeRequest$1(xhr, mock) {
    var nativeProLen = XHR_REQUEST_PROPERTIES.length;

    for (var j = 0; j < nativeProLen; ++j) {
      try {
        xhr[XHR_REQUEST_PROPERTIES[j]] = mock[XHR_REQUEST_PROPERTIES[j]];
      } catch (e) {}
    }
  }

  function transformResponse$1(item, options) {
    return typeof item === 'function' ? item(options) : mock(item);
  }

  var Utils = {
    extend: extend$1,
    syncNativeResponse: syncNativeResponse$1,
    syncNativeRequest: syncNativeRequest$1,
    transformResponse: transformResponse$1
  };

  var extend = Utils.extend,
      syncNativeResponse = Utils.syncNativeResponse,
      syncNativeRequest = Utils.syncNativeRequest,
      transformResponse = Utils.transformResponse;

  function MockXMLHttpRequest() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mock = this;
    mock.custom = {
      events: {},
      requestHeaders: {},
      responseHeaders: {}
    }; // request

    mock.timeout = options.timeout || 0;
    mock.withCredentials = options.withCredentials || false;
    mock.upload = {}; // response

    mock.responseURL = '';
    mock.status = MockXMLHttpRequest.UNSENT;
    mock.statusText = '';

    mock.overrideMimeType = function ()
    /*mime*/
    {};

    mock.responseType = ''; // '', 'text', 'arraybuffer', 'blob', 'document', 'json'

    mock.response = null;
    mock.responseText = '';
    mock.responseXML = null;
    var readyState = MockXMLHttpRequest.UNSENT;
    Object.defineProperty(mock, 'readyState', {
      get: function get() {
        return readyState;
      },
      set: function set(newState) {
        readyState = newState;
        mock.dispatchEvent(new CustomEvent('readystatechange'));
      }
    });
  }

  extend(MockXMLHttpRequest, XHR_STATES);
  extend(MockXMLHttpRequest.prototype, XHR_STATES); // -- Request --

  extend(MockXMLHttpRequest.prototype, {
    open: function open(method, url, isAsync) {
      var mock = this;
      isAsync = typeof isAsync === 'boolean' ? isAsync : true;
      extend(mock.custom, {
        method: method,
        url: url,
        isAsync: isAsync,
        options: {
          url: url,
          type: method
        }
      });
      var item = findCache(mock.custom.options);

      if (item) {
        mock.match = true;
        mock.custom.template = item;
        mock.readyState = MockXMLHttpRequest.OPENED;
        return;
      } // fallback native xhr


      var xhr = createNativeXHR();
      mock.custom.xhr = xhr; // pre define response data for mock

      syncNativeResponse(xhr, mock);
      xhr.open(method, url, isAsync); // set request data for mock

      syncNativeRequest(xhr, mock);
    },
    setRequestHeader: function setRequestHeader(name, value) {
      var mock = this; // native

      if (!mock.match) {
        mock.custom.xhr.setRequestHeader(name, value);
        return;
      } // intercept


      var requestHeaders = mock.custom.requestHeaders;
      if (requestHeaders[name]) requestHeaders[name] += ",".concat(value);else requestHeaders[name] = value;
    },
    send: function send(data) {
      var mock = this;
      var compiler;
      var response;
      mock.custom.options.body = data; // native

      if (!mock.match) {
        mock.custom.xhr.send(data);
        return;
      } // intercept


      mock.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');
      mock.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      mock.dispatchEvent(new CustomEvent('loadstart'));

      var done = function done() {
        mock.readyState = MockXMLHttpRequest.HEADERS_RECEIVED;
        mock.readyState = MockXMLHttpRequest.LOADING;
        mock.status = 200;
        mock.statusText = HTTP_STATUS_CODES[200];
        mock.responseText = response;
        mock.response = mock.responseText;
        mock.readyState = MockXMLHttpRequest.DONE;
        mock.dispatchEvent(new CustomEvent('load'));
        mock.dispatchEvent(new CustomEvent('loadend'));
      };

      compiler = transformResponse(mock.custom.template, mock.custom.options); // promise

      if (typeof compiler.then === 'function') {
        compiler.then(function (data) {
          response = data;
          done();
        });
      } else if (mock.custom.isAsync) {
        response = compiler;
        setTimeout(done, mock.timeout);
      } else {
        response = compiler;
        done();
      }
    },
    abort: function abort() {
      var mock = this; // native

      if (!mock.match) {
        mock.custom.xhr.abort();
        return;
      } // intercept


      mock.readyState = MockXMLHttpRequest.UNSENT;
      mock.dispatchEvent(new CustomEvent('abort', {
        detail: this
      }));
      mock.dispatchEvent(new CustomEvent('error', {
        detail: this
      }));
    }
  }); // -- Response --

  extend(MockXMLHttpRequest.prototype, {
    getResponseHeader: function getResponseHeader(name) {
      var mock = this; // native

      if (!mock.match) {
        return mock.custom.xhr.getResponseHeader(name);
      } // intercept


      return mock.custom.responseHeaders[name.toLowerCase()];
    },
    getAllResponseHeaders: function getAllResponseHeaders() {
      var mock = this; // native

      if (!mock.match) {
        return mock.custom.xhr.getAllResponseHeaders();
      } // intercept


      var responseHeaders = mock.custom.responseHeaders;
      var headers = '';

      for (var h in responseHeaders) {
        if (!(h in responseHeaders)) continue;
        headers += "".concat(h, ": ").concat(responseHeaders[h], "\r\n");
      }

      return headers;
    }
  }); // -- Events --

  extend(MockXMLHttpRequest.prototype, {
    addEventListener: function addEventListener(type, handler) {
      var events = this.custom.events;
      if (!events[type]) events[type] = [];
      events[type].push(handler);
    },
    removeEventListener: function removeEventListener(type, handler) {
      var handlers = this.custom.events[type] || [];
      var len = handlers.length;

      for (var i = 0; i < len; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          i -= 1;
        }
      }
    },
    dispatchEvent: function dispatchEvent(event) {
      var mock = this;
      var handlers = mock.custom.events[event.type] || [];
      var len = handlers.length;

      for (var i = 0; i < len; i++) {
        handlers[i].call(mock, event);
      }

      var ontype = "on".concat(event.type);
      if (mock[ontype]) mock[ontype](event);
    }
  });

  function initMock(options) {
    window._XMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = MockXMLHttpRequest.bind(window, options); // fix by "coveralls"

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  function mockXHR(options) {
    if (window) {
      initMock(options);
      return function cancelMockXHR() {
        clearCache();
        window.XMLHttpRequest = window._XMLHttpRequest;
      };
    }
  }
  function mockRequest(method, url, data) {
    return setCache({
      url: url,
      type: method
    }, data);
  }

  exports.Random = dataTypeMap;
  exports.clearCache = clearCache;
  exports.deleteCache = deleteCache;
  exports.findCache = findCache;
  exports.getCache = getCache;
  exports.mock = mock;
  exports.mockRequest = mockRequest;
  exports.mockXHR = mockXHR;
  exports.setCache = setCache;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
