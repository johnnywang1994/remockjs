/* eslint-disable no-empty */
import mock from '../mock/schema';
import { XHR_RESPONSE_PROPERTIES, XHR_REQUEST_PROPERTIES, XHR_EVENTS } from './config';

function extend(to, from, thisArgs) {
  Object.keys(from).forEach((key) => {
    const val = from[key];
    if (thisArgs && typeof val === 'function') {
      to[key] = val.bind(thisArgs);
    } else {
      to[key] = val;
    }
  })
  return to;
}

// sync event: NativeXMLHttpRequest => MockXMLHttpRequest
function nativeResponseHandler(event) {
  const mock = this;
  const nativeProLen = XHR_RESPONSE_PROPERTIES.length;
  for (let i = 0; i < nativeProLen; ++i) {
    try {
      mock[XHR_RESPONSE_PROPERTIES[i]] = mock.custom.xhr[XHR_RESPONSE_PROPERTIES[i]]
    } catch (e) {}
  }
  mock.dispatchEvent(new CustomEvent(event.type));
}

function syncNativeResponse(xhr, mock) {
  for (let i = 0; i < XHR_EVENTS.length; ++i) {
    xhr.addEventListener(XHR_EVENTS[i], nativeResponseHandler.bind(mock));
  }
}

function syncNativeRequest(xhr, mock) {
  const nativeProLen = XHR_REQUEST_PROPERTIES.length;
  for (let j = 0; j < nativeProLen; ++j) {
    try {
      xhr[XHR_REQUEST_PROPERTIES[j]] = mock[XHR_REQUEST_PROPERTIES[j]]
    } catch (e) {}
  }
}

function transformResponse(item, options) {
  return typeof item === 'function'
    ? item(options)
    : mock(item);
}

export default {
  extend,
  syncNativeResponse,
  syncNativeRequest,
  transformResponse,
}