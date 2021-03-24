function image(size, background, foreground, format, text) {
  size = size || '100x100';
  background = background || '#000';
  foreground = foreground || '#fff';
  format = format || 'png';
  if (~background.indexOf('#')) background = background.slice(1);
  if (~foreground.indexOf('#')) foreground = foreground.slice(1);

  // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
  return 'http://dummyimage.com/' + size +
      (background ? '/' + background : '') +
      (foreground ? '/' + foreground : '') +
      (format ? '.' + format : '') +
      (text ? '&text=' + text : '');
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

export default {
  pngimage,
  jpgimage,
  gifimage,
  image,
};
