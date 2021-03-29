import { createNativeXHR, findCache, XHR_STATES, HTTP_STATUS_CODES } from './config';
import Utils from './utils';

const { extend, syncNativeResponse, syncNativeRequest, transformResponse } = Utils;

function MockXMLHttpRequest(options = {}) {
  const mock = this;
  mock.custom = {
    events: {},
    requestHeaders: {},
    responseHeaders: {},
  };
  // request
  mock.timeout = options.timeout || 0;
  mock.withCredentials = options.withCredentials || false;
  mock.upload = {};
  // response
  mock.responseURL = '';
  mock.status = MockXMLHttpRequest.UNSENT;
  mock.statusText = '';
  mock.overrideMimeType = function( /*mime*/ ) {};
  mock.responseType = ''; // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
  mock.response = null;
  mock.responseText = '';
  mock.responseXML = null;

  let readyState = MockXMLHttpRequest.UNSENT;
  Object.defineProperty(mock, 'readyState', {
    get() {
      return readyState;
    },
    set(newState) {
      readyState = newState;
      mock.dispatchEvent(new CustomEvent('readystatechange'));
    },
  });
}

extend(MockXMLHttpRequest, XHR_STATES);
extend(MockXMLHttpRequest.prototype, XHR_STATES);

// -- Request --
extend(MockXMLHttpRequest.prototype, {
  open(method, url, isAsync) {
    const mock = this;
    isAsync = typeof isAsync === 'boolean' ? isAsync : true;
    extend(mock.custom, {
      method,
      url,
      isAsync,
      options: {
        url,
        type: method,
      },
    });
    const item = findCache(mock.custom.options);
    if (item) {
      mock.match = true;
      mock.custom.template = item;
      mock.readyState = MockXMLHttpRequest.OPENED;
      return;
    }

    // fallback native xhr
    const xhr = createNativeXHR();
    mock.custom.xhr = xhr;
    // pre define response data for mock
    syncNativeResponse(xhr, mock);
    xhr.open(method, url, isAsync);
    // set request data for mock
    syncNativeRequest(xhr, mock);
  },
  setRequestHeader(name, value) {
    const mock = this;
    // native
    if (!mock.match) {
      mock.custom.xhr.setRequestHeader(name, value);
      return;
    }

    // intercept
    const requestHeaders = mock.custom.requestHeaders;
    if (requestHeaders[name]) requestHeaders[name] += `,${value}`;
    else requestHeaders[name] = value;
  },
  send(data) {
    const mock = this;
    let compiler;
    let response;
    mock.custom.options.body = data;

    // native
    if (!mock.match) {
      mock.custom.xhr.send(data);
      return;
    }

    // intercept
    mock.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');
    mock.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    mock.dispatchEvent(new CustomEvent('loadstart'));

    const done = () => {
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

    compiler = transformResponse(mock.custom.template, mock.custom.options);

    // promise
    if (typeof compiler.then === 'function') {
      compiler.then(function (data) {
        response = data;
        done();
      });
    }
    else if (mock.custom.isAsync) {
      response = compiler;
      setTimeout(done, mock.timeout);
    }
    else {
      response = compiler;
      done();
    }
  },
  abort() {
    const mock = this;
    // native
    if (!mock.match) {
      mock.custom.xhr.abort();
      return;
    }

    // intercept
    mock.readyState = MockXMLHttpRequest.UNSENT;
    mock.dispatchEvent(new CustomEvent('abort', { detail: this }));
    mock.dispatchEvent(new CustomEvent('error', { detail: this }));
  }
});

// -- Response --
extend(MockXMLHttpRequest.prototype, {
  getResponseHeader(name) {
    const mock = this;
    // native
    if (!mock.match) {
      return mock.custom.xhr.getResponseHeader(name);
    }

    // intercept
    return mock.custom.responseHeaders[name.toLowerCase()];
  },
  getAllResponseHeaders() {
    const mock = this;
    // native
    if (!mock.match) {
      return mock.custom.xhr.getAllResponseHeaders();
    }

    // intercept
    const { responseHeaders } = mock.custom;
    let headers = '';
    for (const h in responseHeaders) {
      if (!(h in responseHeaders)) continue;
      headers += `${h}: ${responseHeaders[h]}\r\n`;
    }
    return headers;
  },
})


// -- Events --
extend(MockXMLHttpRequest.prototype, {
  addEventListener(type, handler) {
    const { events } = this.custom;
    if (!events[type]) events[type] = [];
    events[type].push(handler);
  },
  removeEventListener(type, handler) {
    const handlers = this.custom.events[type] || [];
    const len = handlers.length;
    for (let i = 0; i < len; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
        i -= 1;
      }
    }
  },
  dispatchEvent(event) {
    const mock = this;
    const handlers = mock.custom.events[event.type] || [];
    const len = handlers.length;
    for (let i = 0; i < len; i++) {
      handlers[i].call(mock, event);
    }

    const ontype = `on${event.type}`;
    if (mock[ontype]) mock[ontype](event);
  },
});

export default MockXMLHttpRequest;
