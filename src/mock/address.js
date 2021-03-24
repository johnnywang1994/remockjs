import { C_DICT, C_REGION, DICT, REGION, EN_DICT, EN_REGION } from './address_dict';
import basicMap from './basic';
import Utils from './utils';

const { natural } = basicMap;
const { pick } = Utils;

const typeMap = {
  ch: {
    dict: C_DICT,
    region: C_REGION,
  },
  tw: {
    dict: DICT,
    region: REGION,
  },
  en: {
    dict: EN_DICT,
    region: EN_REGION
  }
};

function region(type = 'ch') {
  return pick(typeMap[type].region);
}

function province(type = 'ch') {
  return pick(typeMap[type].dict).name;
}

function city(type = 'ch', prefix = false) {
  const { dict } = typeMap[type];
  const province = pick(dict) || { children: {} };
  const city = pick(province.children) || { name: '-' };
  return prefix ? [province.name, city.name].join(' ') : city.name;
}

function county(type = 'ch', prefix = false) {
  const { dict } = typeMap[type];
  const province = pick(dict);
  const city = pick(province.children);
  const county = pick(city.children) || {
    name: '-'
  };
  return prefix
    ? [province.name, city.name, county.name].join(' ')
    : county.name;
}

function zip(len) {
  let zip = '';
  for (var i = 0; i < (len || 6); i++) zip += natural(0, 9);
  return zip;
}

export default {
  region,
  province,
  city,
  county,
  zip,
}
