let MockCache = new Map();

export function findCache(options) {
  const { url, type } = options;
  return MockCache.get((url + type).toLowerCase()) || false;
}

export function setCache(options, data) {
  const item = findCache(options);
  if (!item) {
    const { url, type } = options;
    MockCache.set((url + type).toLowerCase(), data);
  }
}

export function getCache(options) {
  if (options === undefined) return MockCache;
  const item = findCache(options);
  if (item) return item;
  console.error('[remock] mock cache not found');
  return false;
}

export function deleteCache(options) {
  const item = findCache(options);
  if (item) {
    const { url, type } = options;
    MockCache.delete((url + type).toLowerCase());
  }
}

export function clearCache() {
  MockCache = new Map();
}

export function createNativeXHR() {
  try {
    return new window._XMLHttpRequest();
  } catch (e) {
    console.error(e);
  }
  return false;
}

export const XHR_STATES = {
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
}

export const XHR_EVENTS = 'readystatechange loadstart progress abort error load upload timeout loadend'.split(' ');
export const XHR_REQUEST_PROPERTIES = 'responseType timeout withCredentials'.split(' ');
export const XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ');

export const HTTP_STATUS_CODES = {
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
}