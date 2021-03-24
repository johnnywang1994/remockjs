import XHR from './instance';
import { setCache, clearCache } from './config';

function initMock(options) {
  window._XMLHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = XHR.bind(window, options);

  // fix by "coveralls"
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

export function mockXHR(options) {
  if (window) {
    initMock(options);
    return function cancelMockXHR() {
      clearCache();
      window.XMLHttpRequest = window._XMLHttpRequest;
    };
  }
}

export function mockRequest(method, url, data) {
  return setCache({
    url,
    type: method,
  }, data);
}

export { findCache, setCache, getCache, deleteCache, clearCache } from './config';

