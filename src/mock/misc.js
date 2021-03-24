import basicMap from './basic';
import dateMap from './date';
import Utils from './utils';
import { C_DICT } from './address_dict';

const { string } = basicMap;
const { date } = dateMap;
const { pick } = Utils;

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
const GUID_POOL = 'abcdefABCDEF1234567890';

function guid() {
  const guid = string(GUID_POOL, 8) + '-' +
    string(GUID_POOL, 4) + '-' +
    string(GUID_POOL, 4) + '-' +
    string(GUID_POOL, 4) + '-' +
    string(GUID_POOL, 12);
  return guid;
}

function autoIncrement(step) {
  let key = 0;
  return function() {
    return key += (+step || 1) // step?
  }
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
  const rank = [
    '7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'
  ];
  const last = [
    '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'
  ];
  let id;
  let sum = 0;

  id = pick(C_DICT).code +
    date('yyyyMMdd') +
    string('number', 3);

  for (var i = 0; i < id.length; i++) {
    sum += id[i] * rank[i];
  }
  id += last[sum % 11];

  return id;
}

// tw id
function twid() {
  var city = new Array(1,10,19,28,37,46,55,64,39,73,82,2,11,20,48,29,38,47,56,65,74,83,21,3,12,30);
  var id = new Array();
  id[0] = String.fromCharCode(Math.floor(Math.random() * (26)) + 65);
  id[1] = Math.floor(Math.random() * (2)) + 1;
  for(let i=2; i<9; i++){
    id[i] = Math.floor(Math.random() * (9)) + 0;
  }
  var total = city[id[0].charCodeAt(0)-65];
  for(let i=1; i<=8; i++){
    total += eval(id[i]) * (9 - i);
  }
  var total_arr = (total+'').split('');
  var lastChar = eval(10-total_arr[total_arr.length-1]);
  var lastChar_arr = (lastChar+'').split('');
  id[id.length++] = lastChar_arr[lastChar_arr.length-1];
  return id.join('');
}

// ssn source from chancejs
function enid(dashes = true, ssnFour = false) {
  const ssn_pool = '1234567890';
  const dash = dashes ? '-' : '';
  let ssn;

  if(!ssnFour) {
    ssn = string(ssn_pool, 3) + dash +
    string(ssn_pool, 2) + dash +
    string(ssn_pool, 4);
  } else {
    ssn = string(ssn_pool, 4);
  }
  return ssn;
}

const idMap = {
  ch: chid,
  tw: twid,
  en: enid,
};

function id(type = 'en') {
  return idMap[type]();
}

export default {
  guid,
  id,
  increment,
}
