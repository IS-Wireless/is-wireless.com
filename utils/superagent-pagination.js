// /***/ //"./lib/pagination.js":
// /*!***************************!*\
//   !*** ./lib/pagination.js ***!
//   \***************************/
// /*! no static exports found */
// /***/ ;(function (module, exports, __webpack_require__) {
//   function _objectSpread(target) {
//     for (var i = 1; i < arguments.length; i++) {
//       var source = arguments[i] != null ? arguments[i] : {}
//       var ownKeys = Object.keys(source)
//       if (typeof Object.getOwnPropertySymbols === 'function') {
//         ownKeys = ownKeys.concat(
//           Object.getOwnPropertySymbols(source).filter(function (sym) {
//             return Object.getOwnPropertyDescriptor(source, sym).enumerable
//           })
//         )
//       }
//       ownKeys.forEach(function (key) {
//         _defineProperty(target, key, source[key])
//       })
//     }
//     return target
//   }

//   function _defineProperty(obj, key, value) {
//     if (key in obj) {
//       Object.defineProperty(obj, key, {
//         value: value,
//         enumerable: true,
//         configurable: true,
//         writable: true,
//       })
//     } else {
//       obj[key] = value
//     }
//     return obj
//   }

//   var parseLinkHeader = __webpack_require__(
//     /*! li */ './node_modules/li/lib/index.js'
//   ).parse

//   var WPRequest = __webpack_require__(
//     /*! ../lib/constructors/wp-request */ './lib/constructors/wp-request.js'
//   )
//   /**
//    * If the response is not paged, return the body as-is. If pagination
//    * information is present in the response headers, parse those headers into
//    * a custom `_paging` property on the response body. `_paging` contains links
//    * to the previous and next pages in the collection, as well as metadata
//    * about the size and number of pages in the collection.
//    *
//    * The structure of the `_paging` property is as follows:
//    *
//    * - `total` {Integer} The total number of records in the collection
//    * - `totalPages` {Integer} The number of pages available
//    * - `links` {Object} The parsed "links" headers, separated into individual URI strings
//    * - `next` {WPRequest} A WPRequest object bound to the "next" page (if page exists)
//    * - `prev` {WPRequest} A WPRequest object bound to the "previous" page (if page exists)
//    *
//    * @private
//    * @param {Object} result           The response object from the HTTP request
//    * @param {Object} options          The options hash from the original request
//    * @param {String} options.endpoint The base URL of the requested API endpoint
//    * @param {Object} httpTransport    The HTTP transport object used by the original request
//    * @returns {Object} The pagination metadata object for this HTTP request, or else null
//    */

//   function createPaginationObject(result, options, httpTransport) {
//     var _paging = null

//     if (!result.headers) {
//       // No headers: return as-is
//       return _paging
//     } // Guard against capitalization inconsistencies in returned headers

//     Object.keys(result.headers).forEach(function (header) {
//       result.headers[header.toLowerCase()] = result.headers[header]
//     })

//     if (!result.headers['x-wp-totalpages']) {
//       // No paging: return as-is
//       return _paging
//     }

//     var totalPages = +result.headers['x-wp-totalpages']

//     if (!totalPages || totalPages === 0) {
//       // No paging: return as-is
//       return _paging
//     } // Decode the link header object

//     var links = result.headers.link ? parseLinkHeader(result.headers.link) : {} // Store pagination data from response headers on the response collection

//     _paging = {
//       total: +result.headers['x-wp-total'],
//       totalPages: totalPages,
//       links: links,
//     } // Create a WPRequest instance pre-bound to the "next" page, if available

//     if (links.next) {
//       _paging.next = new WPRequest(
//         _objectSpread({}, options, {
//           transport: httpTransport,
//           endpoint: links.next,
//         })
//       )
//     } // Create a WPRequest instance pre-bound to the "prev" page, if available

//     if (links.prev) {
//       _paging.prev = new WPRequest(
//         _objectSpread({}, options, {
//           transport: httpTransport,
//           endpoint: links.prev,
//         })
//       )
//     }

//     return _paging
//   }

//   module.exports = {
//     createPaginationObject: createPaginationObject,
//   }
// })
