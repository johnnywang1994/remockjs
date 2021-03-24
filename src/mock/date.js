const patternLetters = {
  yyyy: 'getFullYear',
  yy: function(date) {
    return ('' + date.getFullYear()).slice(2);
  },
  MM: function(date) {
    const m = date.getMonth() + 1;
    return m < 10 ? '0' + m : m;
  },
  M: function(date) {
    return date.getMonth() + 1
  },
  dd: function(date) {
    const d = date.getDate();
    return d < 10 ? '0' + d : d;
  },
  d: 'getDate',
  HH: function(date) {
    const h = date.getHours();
    return h < 10 ? '0' + h : h;
  },
  H: 'getHours',
  hh: function(date) {
    const h = date.getHours() % 12;
    return h < 10 ? '0' + h : h;
  },
  h: function(date) {
    return date.getHours() % 12
  },
  mm: function(date) {
    const m = date.getMinutes();
    return m < 10 ? '0' + m : m
  },
  m: 'getMinutes',
  ss: function(date) {
    const s = date.getSeconds();
    return s < 10 ? '0' + s : s;
  },
  s: 'getSeconds',
  SS: function(date) {
    const ms = date.getMilliseconds();
    return String(ms).padStart(3, 0);
  },
  S: 'getMilliseconds',
  A: function(date) {
    return date.getHours() < 12 ? 'AM' : 'PM'
  },
  a: function(date) {
    return date.getHours() < 12 ? 'am' : 'pm'
  },
  _T: 'getTime'
};

const unitMap = {
  year: (date) => {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  },
  month: (date) => {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  },
  week: (date) => {
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay());
  },
  day: (date) => date.setHours(0, 0, 0, 0),
  hour: (date) => date.setMinutes(0, 0, 0),
  minute: (date) => date.setSeconds(0, 0),
  second: (date) => date.setMilliseconds(0),
  default: () => {},
};

const rformat = new RegExp((function() {
  const re = [];
  for (let i in patternLetters) re.push(i);
  return '(' + re.join('|') + ')';
})(), 'g');

function formatDate(date, format) {
  return format.replace(rformat, function replaceDate($0, flag) {
    return typeof patternLetters[flag] === 'function'
      ? patternLetters[flag](date)
      : date[patternLetters[flag]]();
  });
}

function randomDate(min, max) { // min, max
  min = min === undefined ? new Date(0) : min;
  max = max === undefined ? new Date() : max;
  return new Date(Math.random() * (max.getTime() - min.getTime()))
}

function date(format, min, max) {
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

  const date = new Date();
  unitMap[unit](date);

  return formatDate(date, format);
}

export default {
  date,
  time,
  datetime,
  now,
};
