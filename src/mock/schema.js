import basicMap from './basic';
import dateMap from './date';
import imageMap from './image';
import colorMap from './color';
import textMap from './text';
import nameMap from './name';
import webMap from './web';
import addressMap from './address';
import miscMap from './misc';
import Utils from './utils';

const { natural } = basicMap;
const { pick, pickMap } = Utils;
const idKeyMap = new Map(); // [id, rateMap]
const rmaxMap = new Map(); // [id, rmax]
const countCache = []; // null: not start

export const dataTypeMap = {
  ...basicMap,
  ...dateMap,
  ...imageMap,
  ...colorMap,
  ...textMap,
  ...nameMap,
  ...webMap,
  ...addressMap,
  ...miscMap,
};

function parseKey(matchKey) {
  const newKey = matchKey[1];
  const splitId = matchKey[2].split(':');
  const counter = matchKey[2].indexOf('=') > -1;
  // id, params
  let id, rmin, rmax, min, max, nextCount;
  if (splitId[1]) {
    id = splitId[0];
    [rmin, rmax] = splitId[1].split('/');
  } else if (counter) {
    nextCount = new Function('i', `return i${matchKey[2]};`);
  } else {
    [min, max] = matchKey[2].split('-');
    if (!max) max = min;
  }
  return {
    newKey,
    id,
    min,
    max,
    rmin,
    rmax,
    nextCount,
  }
}

/**
 * parseValueSchema
 * @param {*} value 
 */
function parseValueSchema(value) {
  if (Array.isArray(value)) {
    return value.map((item) => createData(item));
  }
  if (typeof value === 'function') {
    return value(dataTypeMap);
  }
  if (typeof value !== 'string') return value;
  const matchValue = value.match(/@([^)]*)/);
  if (matchValue) {
    return new Function('', `
      with (this) {
        return ${value.replace(/@([^)]*)/g, '$1')};
      }
    `).call(dataTypeMap);
  }
  return value;
}

function normalKeyHandler(params, value, output) {
  const { newKey, min, max, nextCount } = params;
  let newValue;

  // -- string value
  if (typeof value === 'string') {
    const unitValue = parseValueSchema(value);
    newValue = unitValue.repeat(natural(min, max));
  }
  // -- number value
  else if (typeof value === 'number') {
    if (nextCount) {
      const cacheIndex = countCache.length - 1;
      newValue = nextCount(countCache[cacheIndex] || value);
      countCache[cacheIndex] = newValue;
    } else {
      newValue = natural(min, max);
    }
  }
  // -- array value
  else if (Array.isArray(value)) {
    newValue = [];
    countCache.push(null);
    for (let i = 0; i < natural(min, max); ++i) {
      const cpick = pick(value);
      newValue.push(
        typeof cpick === 'object'
          ? createData(cpick)
          : parseValueSchema(cpick)
      )
    }
    countCache.pop();
    if (max == 1) {
      newValue = newValue[0];
    }
  }
  // -- not handled value(object, boolean, others...)
  else {
    newValue = createData(value);
  }

  output[newKey] = newValue;
}

function idKeyHandler(params, value, output) {
  const { newKey, id, rmin, rmax } = params;
  // create rateMap by id
  let targetRateMap = idKeyMap.get(id);
  if (!targetRateMap) {
    idKeyMap.set(id, (targetRateMap = new Set()));
  }
  // set item to rateMap
  targetRateMap.add({
    parent: output,
    key: newKey,
    value,
    rmin,
  });
  // set id rmax
  rmaxMap.set(id, rmax);
}

/**
 * parseKeySchema
 * @param {*} output 
 * @param {*} key 
 * @param {*} value 
 */
function parseKeySchema(output, key, value) {
  const matchKey = key.match(/(.*)\|(.*)/);
  // console.log(matchKey);
  if (matchKey) {
    const params = parseKey(matchKey);
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
  if (typeof dataSchema !== 'object' || Array.isArray(dataSchema)) {
    return parseValueSchema(dataSchema);
  }

  const output = {};
  for (let key in dataSchema) {
    // key schema
    if (key.indexOf('|') > -1) {
      // set output in handler
      parseKeySchema(output, key, dataSchema[key]);
    }
    // value schema
    else {
      output[key] = createData(dataSchema[key]);
    }
  }

  return output;
}

// only inject rate keys once
export default function mock(dataSchema) {
  const output = createData(dataSchema);

  // inject rate keys
  // console.log(idKeyMap.get('key'));
  for (let [key, rateMap] of idKeyMap) {
    let picker = pickMap(rateMap);
    const rmax = rmaxMap.get(key);
    const { parent, key: pickKey, value } = picker({
      parent: {},
      key: '',
      value: '',
      rmin: 0,
    }, rmax);
    parent[pickKey] = createData(value);
    idKeyMap.delete(key);
    rmaxMap.delete(key);
    picker = null; // drop memory
  }

  return output;
}
