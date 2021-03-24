import basicMap from './basic';
import Utils from './utils';

const { character } = basicMap;
const { capitalize, range } = Utils;

function word(pool, min, max) {
  // (min, max)
  if (typeof pool === 'number') {
    max = min;
    min = pool;
    pool = '';
  }

  const len = range(3, 10, min, max);
  let result = '';
  for (let i = 0; i < len; i++) {
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

  const len = range(8, 14, min, max);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(word(pool));
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

  const len = range(3, 7, min, max);
  const result = [];
  for (let i = 0; i < len; i++) {
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

  const len = range(3, 7, min, max);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(capitalize(word(pool)));
  }
  return result.join(' ');
}

export default {
  word,
  sentence,
  paragraph,
  title,
};
