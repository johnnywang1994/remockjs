import basicMap from './basic';

const { natural } = basicMap;

function capitalize(word) {
  return (word + '').charAt(0).toUpperCase() + (word + '').substr(1);
}

function range(defaultMin, defaultMax, min, max) {
  return min === undefined ? natural(defaultMin, defaultMax) : // ()
    max === undefined ? parseInt(min, 10) : // ( len )
    natural(min, max) // ( min, max )
}

function shuffle(arr, min, max) {
  arr = arr || [];
  const old = arr.slice(0);
  const result = [];
  let index = 0;
  while (old.length) {
    index = natural(0, old.length - 1);
		result.push(old[index]);
		old.splice(index, 1);
  }
  if (arguments.length < 2) return result;
  max = parseInt(max || min, 10);
  min = parseInt(min, 10)
  return result.slice(0, natural(min, max));
}

function pick(arr, min, max) {
  // pick( item1, item2 ... )
  if (!Array.isArray(arr)) {
    arr = [].slice.call(arguments);
    min = 1;
    max = 1;
  } else {
    // pick( [ item1, item2 ... ] )
    if (min === undefined) min = 1;

    // pick( [ item1, item2 ... ], count )
    if (max === undefined) max = min;
  }

  if (min === 1 && max === 1) return arr[natural(0, arr.length - 1)];

  return shuffle(arr, min, max);
}

function pickMap(setBox) {
  const rateMap = [...setBox].reduce((total, item) => {
    total.max += Number(item.rmin);
    total.map.set(item, total.max);
    return total;
  }, { max: 0, map: new Map() });

  const { max, map } = rateMap;
  
  return function getRandomItem(fallback, cmax) {
    const count = Math.floor(Math.random() * (cmax || max));
    let target;
    for (let [item, limit] of map) {
      if (count < limit) {
        target = item;
        break;
      }
    }
    return target || fallback;
  }
}

export default {
  capitalize,
  range,
  pick,
  pickMap,
};
