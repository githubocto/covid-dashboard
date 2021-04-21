webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/fromPairs */ \"./node_modules/lodash/fromPairs.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/startCase */ \"./node_modules/lodash/startCase.js\");\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar formatDate = function formatDate(d) {\n  return d.getDate() === 1 ? Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"timeFormat\"])(\"%-b %Y\")(d) : Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"timeFormat\"])(\"%-b %-d, %Y\")(d);\n};\n\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor;\n  var filteredData = data.filter(function (d) {\n    return Object.values(d).find(function (d) {\n      return typeof d === \"number\";\n    });\n  });\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6 / 2; // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"scaleTime\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"extent\"])(filteredData, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(3).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lastPoint = filteredData.slice(-1)[0] || {};\n  console.log(lastPoint, filteredData);\n  var keys = Object.keys(lastPoint).filter(function (d) {\n    return d !== \"Date\";\n  });\n  var keyColors = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5___default()(keys.map(function (key, i) {\n    return [key, colors[i % colors.length]];\n  }));\n  var lastKeyValues = keys.map(function (key) {\n    return [key, Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data).reverse().find(function (d) {\n      return d[key] !== undefined;\n    })];\n  });\n  console.log(lastKeyValues);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-0\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 top-0 bottom-0\",\n        children: lastKeyValues.map(function (_ref4, i) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              key = _ref5[0],\n              value = _ref5[1];\n\n          return value !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute \".concat(keyColors[key], \" text-right right-0 -mt-6 whitespace-nowrap\"),\n            style: {\n              top: \"\".concat(yScale(value) + i * 2, \"%\")\n            },\n            children: lodash_startCase__WEBPACK_IMPORTED_MODULE_6___default()(key)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-full\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, yOffset, 100, 100].join(\" \"),\n        children: [Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"range\"])(1, 6).map(function (i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(yScale(i - 0.5) + yOffset, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n              x2: \"100\",\n              className: \"text-gray-200 stroke-current\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this);\n        }), keys.map(function (key, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(function (d) {\n                return d[key];\n              }) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-6 whitespace-nowrap\",\n        children: xTicks.map(function (_ref6) {\n          var _ref7 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref6, 2),\n              offset = _ref7[0],\n              value = _ref7[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZCIsImdldERhdGUiLCJ0aW1lRm9ybWF0IiwiUmVzdHJpY3Rpb25zVGltZWxpbmUiLCJkYXRhIiwieEFjY2Vzc29yIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZCIsImxpbmVPZmZzZXQiLCJ5T2Zmc2V0IiwieFNjYWxlIiwic2NhbGVUaW1lIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJ4VGlja3MiLCJ0aWNrcyIsIm1hcCIsInRpY2siLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInlUaWNrcyIsInRvTG9jYWxlU3RyaW5nIiwiYXJlYUdlbmVyYXRvciIsInlBY2Nlc3NvciIsImFyZWEiLCJ4IiwieTAiLCJ5MSIsImRlZmluZWQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwieSIsImxhc3RQb2ludCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImtleXMiLCJrZXlDb2xvcnMiLCJmcm9tUGFpcnMiLCJrZXkiLCJpIiwiY29sb3JzIiwibGVuZ3RoIiwibGFzdEtleVZhbHVlcyIsInJldmVyc2UiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJvZmZzZXQiLCJ2YWx1ZSIsInRvcCIsInN0YXJ0Q2FzZSIsImpvaW4iLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOztBQVFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQ7QUFBQSxTQUNqQkEsQ0FBQyxDQUFDQyxPQUFGLE9BQWdCLENBQWhCLEdBQW9CQyxxREFBVSxDQUFDLFFBQUQsQ0FBVixDQUFxQkYsQ0FBckIsQ0FBcEIsR0FBOENFLHFEQUFVLENBQUMsYUFBRCxDQUFWLENBQTBCRixDQUExQixDQUQ3QjtBQUFBLENBQW5COztBQUVPLElBQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBZ0M7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUNsRSxNQUFNQyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUNQLENBQUQ7QUFBQSxXQUMvQlEsTUFBTSxDQUFDQyxNQUFQLENBQWNULENBQWQsRUFBaUJVLElBQWpCLENBQXNCLFVBQUNWLENBQUQ7QUFBQSxhQUFPLE9BQU9BLENBQVAsS0FBYSxRQUFwQjtBQUFBLEtBQXRCLENBRCtCO0FBQUEsR0FBWixDQUFyQjtBQUdBLE1BQU1XLFVBQVUsR0FBRyxHQUFuQjtBQUNBLE1BQU1DLE9BQU8sR0FBSUQsVUFBVSxHQUFHLENBQWQsR0FBbUIsQ0FBbkMsQ0FMa0UsQ0FNbEU7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHQyxvREFBUyxHQUNyQkMsTUFEWSxDQUNMQyxpREFBTSxDQUFDVixZQUFELEVBQWVELFNBQWYsQ0FERCxFQUVaWSxLQUZZLENBRU4sQ0FBQyxDQUFELEVBQUksR0FBSixDQUZNLENBQWY7QUFHQSxNQUFNQyxNQUFNLEdBQUdMLE1BQU0sQ0FDbEJNLEtBRFksQ0FDTixDQURNLEVBRVpDLEdBRlksQ0FFUixVQUFDQyxJQUFEO0FBQUEsV0FBVSxDQUFDUixNQUFNLENBQUNRLElBQUQsQ0FBUCxFQUFldEIsVUFBVSxDQUFDc0IsSUFBRCxDQUF6QixDQUFWO0FBQUEsR0FGUSxDQUFmO0FBR0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBVyxHQUFHUixNQUFkLENBQXFCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBckIsRUFBNkJFLEtBQTdCLENBQW1DLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FBbkMsQ0FBZjtBQUNBLE1BQU1PLE1BQU0sR0FBR0YsTUFBTSxDQUNsQkgsS0FEWSxDQUNOLENBRE0sRUFFWkMsR0FGWSxDQUVSLFVBQUNDLElBQUQ7QUFBQSxXQUFVLENBQUNDLE1BQU0sQ0FBQ0QsSUFBRCxDQUFQLEVBQWVBLElBQUksQ0FBQ0ksY0FBTCxFQUFmLENBQVY7QUFBQSxHQUZRLENBQWY7O0FBSUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFEO0FBQUEsV0FDcEJDLCtDQUFJLEdBQ0RDLENBREgsQ0FDSyxVQUFDN0IsQ0FBRDtBQUFBLGFBQVlhLE1BQU0sQ0FBQ1IsU0FBUyxDQUFDTCxDQUFELENBQVYsQ0FBbEI7QUFBQSxLQURMLEVBRUc4QixFQUZILENBRU0sR0FGTixFQUdHQyxFQUhILENBR00sVUFBQy9CLENBQUQ7QUFBQSxhQUFZc0IsTUFBTSxDQUFDSyxTQUFTLENBQUMzQixDQUFELENBQVYsQ0FBbEI7QUFBQSxLQUhOLEVBSUdnQyxPQUpILENBSVcsVUFBQ2hDLENBQUQ7QUFBQSxhQUFZaUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCUCxTQUFTLENBQUMzQixDQUFELENBQXpCLENBQVo7QUFBQSxLQUpYLEVBSXNETSxZQUp0RCxDQURvQjtBQUFBLEdBQXRCOztBQU1BLE1BQU02QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNSLFNBQUQ7QUFBQSxXQUNwQlMsK0NBQUksR0FDRFAsQ0FESCxDQUNLLFVBQUM3QixDQUFEO0FBQUEsYUFBWWEsTUFBTSxDQUFDUixTQUFTLENBQUNMLENBQUQsQ0FBVixDQUFsQjtBQUFBLEtBREwsRUFFR3FDLENBRkgsQ0FFSyxVQUFDckMsQ0FBRDtBQUFBLGFBQVlzQixNQUFNLENBQUNLLFNBQVMsQ0FBQzNCLENBQUQsQ0FBVixDQUFsQjtBQUFBLEtBRkwsRUFHR2dDLE9BSEgsQ0FHVyxVQUFDaEMsQ0FBRDtBQUFBLGFBQVlpQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JQLFNBQVMsQ0FBQzNCLENBQUQsQ0FBekIsQ0FBWjtBQUFBLEtBSFgsRUFHc0RNLFlBSHRELENBRG9CO0FBQUEsR0FBdEI7O0FBTUEsTUFBTWdDLFNBQVMsR0FBR2hDLFlBQVksQ0FBQ2lDLEtBQWIsQ0FBbUIsQ0FBQyxDQUFwQixFQUF1QixDQUF2QixLQUE2QixFQUEvQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWixFQUF1QmhDLFlBQXZCO0FBQ0EsTUFBTW9DLElBQUksR0FBR2xDLE1BQU0sQ0FBQ2tDLElBQVAsQ0FBWUosU0FBWixFQUF1Qi9CLE1BQXZCLENBQThCLFVBQUNQLENBQUQ7QUFBQSxXQUFPQSxDQUFDLEtBQUssTUFBYjtBQUFBLEdBQTlCLENBQWI7QUFDQSxNQUFNMkMsU0FBUyxHQUFHQyx1REFBUyxDQUN6QkYsSUFBSSxDQUFDdEIsR0FBTCxDQUFTLFVBQUN5QixHQUFELEVBQU1DLENBQU47QUFBQSxXQUFZLENBQUNELEdBQUQsRUFBTUUsTUFBTSxDQUFDRCxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBWixDQUFaLENBQVo7QUFBQSxHQUFULENBRHlCLENBQTNCO0FBR0EsTUFBTUMsYUFBYSxHQUFHUCxJQUFJLENBQUN0QixHQUFMLENBQVMsVUFBQ3lCLEdBQUQ7QUFBQSxXQUFTLENBQ3RDQSxHQURzQyxFQUV0QyxpS0FBSXpDLElBQUosRUFBVThDLE9BQVYsR0FBb0J4QyxJQUFwQixDQUF5QixVQUFDVixDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDNkMsR0FBRCxDQUFELEtBQVdNLFNBQWxCO0FBQUEsS0FBekIsQ0FGc0MsQ0FBVDtBQUFBLEdBQVQsQ0FBdEI7QUFJQVgsU0FBTyxDQUFDQyxHQUFSLENBQVlRLGFBQVo7QUFFQSxzQkFDRTtBQUNFLGFBQVMsRUFBQyxxQ0FEWjtBQUVFLFNBQUssRUFBRTtBQUFFRyxZQUFNLEVBQUU7QUFBVixLQUZUO0FBQUEsNEJBSUU7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBQSxnQkFDRzVCLE1BQU0sQ0FBQ0osR0FBUCxDQUFXO0FBQUE7QUFBQSxZQUFFaUMsTUFBRjtBQUFBLFlBQVVDLEtBQVY7O0FBQUEsNEJBQ1Y7QUFDRSxtQkFBUyxFQUFDLDZFQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVDLGVBQUcsWUFBS0YsTUFBTDtBQUFMLFdBRlQ7QUFBQSxvQkFJR0M7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQWNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxrQkFDR0wsYUFBYSxDQUFDN0IsR0FBZCxDQUNDLGlCQUFlMEIsQ0FBZjtBQUFBO0FBQUEsY0FBRUQsR0FBRjtBQUFBLGNBQU9TLEtBQVA7O0FBQUEsaUJBQ0VBLEtBQUssS0FBS0gsU0FBVixpQkFDRTtBQUNFLHFCQUFTLHFCQUFjUixTQUFTLENBQUNFLEdBQUQsQ0FBdkIsZ0RBRFg7QUFFRSxpQkFBSyxFQUFFO0FBQ0xVLGlCQUFHLFlBQUtqQyxNQUFNLENBQUNnQyxLQUFELENBQU4sR0FBZ0JSLENBQUMsR0FBRyxDQUF6QjtBQURFLGFBRlQ7QUFBQSxzQkFNR1UsdURBQVMsQ0FBQ1gsR0FBRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxTQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0JFO0FBQ0UsaUJBQVMsRUFBQyxnQ0FEWjtBQUVFLDJCQUFtQixFQUFDLE1BRnRCO0FBR0UsZUFBTyxFQUFFLENBQUMsQ0FBRCxFQUFJakMsT0FBSixFQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUI2QyxJQUF2QixDQUE0QixHQUE1QixDQUhYO0FBQUEsbUJBS0d4QyxnREFBSyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUwsQ0FBWUcsR0FBWixDQUFnQixVQUFDMEIsQ0FBRDtBQUFBLDhCQUNmO0FBQVcscUJBQVMseUJBQWtCeEIsTUFBTSxDQUFDd0IsQ0FBQyxHQUFHLEdBQUwsQ0FBTixHQUFrQmxDLE9BQXBDLE1BQXBCO0FBQUEsbUNBQ0U7QUFDRSxnQkFBRSxFQUFDLEtBREw7QUFFRSx1QkFBUyxFQUFDLDhCQUZaO0FBR0UsMEJBQVksRUFBQztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFRa0MsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBaEIsQ0FMSCxFQWNHSixJQUFJLENBQUN0QixHQUFMLENBQVMsVUFBQ3lCLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLDhCQUNSO0FBQVcscUJBQVMseUJBQWtCbkMsVUFBVSxHQUFHbUMsQ0FBL0IsTUFBcEI7QUFBQSxtQ0FDRTtBQUNFLGVBQUMsRUFBRVgsYUFBYSxDQUFDLFVBQUNuQyxDQUFEO0FBQUEsdUJBQU9BLENBQUMsQ0FBQzZDLEdBQUQsQ0FBUjtBQUFBLGVBQUQsQ0FBYixJQUFnQyxFQURyQztBQUVFLHVCQUFTLFlBQ1BFLE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE1BQVosQ0FEQyx1Q0FGWDtBQUtFLGtCQUFJLEVBQUMsTUFMUDtBQU1FLHlCQUFXLEVBQUMsR0FOZDtBQU9FLDJCQUFhLEVBQUMsT0FQaEI7QUFRRSw0QkFBYyxFQUFDLE9BUmpCO0FBU0UsMEJBQVksRUFBQztBQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFRRixDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFULENBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLGVBOENFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtCQUNHNUIsTUFBTSxDQUFDRSxHQUFQLENBQVc7QUFBQTtBQUFBLGNBQUVpQyxNQUFGO0FBQUEsY0FBVUMsS0FBVjs7QUFBQSw4QkFDVjtBQUNFLHFCQUFTLEVBQUMsK0NBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVJLGtCQUFJLFlBQUtMLE1BQUw7QUFBTixhQUZUO0FBQUEsc0JBSUdDO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEVELENBcEhNO0tBQU1uRCxvQjtBQXNIYixJQUFNNEMsTUFBTSxHQUFHLENBQ2IsaUJBRGEsRUFFYixnQkFGYSxFQUdiLGlCQUhhLEVBSWIsZUFKYSxFQUtiLGVBTGEsRUFNYixlQU5hLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3RyaWN0aW9uc1RpbWVsaW5lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGV4dGVudCxcbiAgcmFuZ2UsXG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWUsXG4gIGFyZWEsXG4gIGxpbmUsXG4gIHRpbWVGb3JtYXQsXG59IGZyb20gXCJkM1wiO1xuaW1wb3J0IGZyb21QYWlycyBmcm9tIFwibG9kYXNoL2Zyb21QYWlyc1wiO1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tIFwibG9kYXNoL3N0YXJ0Q2FzZVwiO1xuXG50eXBlIEFjY2Vzc29yVHlwZSA9IChkOiBhbnkpID0+IG51bWJlciB8IERhdGUgfCBudWxsO1xudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55W107XG4gIHhBY2Nlc3NvcjogQWNjZXNzb3JUeXBlO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZSA9IChkOiBEYXRlKSA9PlxuICBkLmdldERhdGUoKSA9PT0gMSA/IHRpbWVGb3JtYXQoXCIlLWIgJVlcIikoZCkgOiB0aW1lRm9ybWF0KFwiJS1iICUtZCwgJVlcIikoZCk7XG5leHBvcnQgY29uc3QgUmVzdHJpY3Rpb25zVGltZWxpbmUgPSAoeyBkYXRhLCB4QWNjZXNzb3IgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGQpID0+XG4gICAgT2JqZWN0LnZhbHVlcyhkKS5maW5kKChkKSA9PiB0eXBlb2YgZCA9PT0gXCJudW1iZXJcIilcbiAgKTtcbiAgY29uc3QgbGluZU9mZnNldCA9IDEuNjtcbiAgY29uc3QgeU9mZnNldCA9IChsaW5lT2Zmc2V0ICogNikgLyAyO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSgpXG4gICAgLmRvbWFpbihleHRlbnQoZmlsdGVyZWREYXRhLCB4QWNjZXNzb3IpIGFzIFtudW1iZXIsIG51bWJlcl0pXG4gICAgLnJhbmdlKFswLCAxMDBdKTtcbiAgY29uc3QgeFRpY2tzID0geFNjYWxlXG4gICAgLnRpY2tzKDMpXG4gICAgLm1hcCgodGljaykgPT4gW3hTY2FsZSh0aWNrKSwgZm9ybWF0RGF0ZSh0aWNrKV0pO1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgNV0pLnJhbmdlKFsxMDAsIDBdKTtcbiAgY29uc3QgeVRpY2tzID0geVNjYWxlXG4gICAgLnRpY2tzKDUpXG4gICAgLm1hcCgodGljaykgPT4gW3lTY2FsZSh0aWNrKSwgdGljay50b0xvY2FsZVN0cmluZygpXSk7XG5cbiAgY29uc3QgYXJlYUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBhcmVhKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkwKDEwMClcbiAgICAgIC55MSgoZDogYW55KSA9PiB5U2NhbGUoeUFjY2Vzc29yKGQpKSlcbiAgICAgIC5kZWZpbmVkKChkOiBhbnkpID0+IE51bWJlci5pc0Zpbml0ZSh5QWNjZXNzb3IoZCkpKShmaWx0ZXJlZERhdGEpO1xuICBjb25zdCBsaW5lR2VuZXJhdG9yID0gKHlBY2Nlc3NvcjogQWNjZXNzb3JUeXBlKSA9PlxuICAgIGxpbmUoKVxuICAgICAgLngoKGQ6IGFueSkgPT4geFNjYWxlKHhBY2Nlc3NvcihkKSkpXG4gICAgICAueSgoZDogYW55KSA9PiB5U2NhbGUoeUFjY2Vzc29yKGQpKSlcbiAgICAgIC5kZWZpbmVkKChkOiBhbnkpID0+IE51bWJlci5pc0Zpbml0ZSh5QWNjZXNzb3IoZCkpKShmaWx0ZXJlZERhdGEpO1xuXG4gIGNvbnN0IGxhc3RQb2ludCA9IGZpbHRlcmVkRGF0YS5zbGljZSgtMSlbMF0gfHwge307XG4gIGNvbnNvbGUubG9nKGxhc3RQb2ludCwgZmlsdGVyZWREYXRhKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGxhc3RQb2ludCkuZmlsdGVyKChkKSA9PiBkICE9PSBcIkRhdGVcIik7XG4gIGNvbnN0IGtleUNvbG9ycyA9IGZyb21QYWlycyhcbiAgICBrZXlzLm1hcCgoa2V5LCBpKSA9PiBba2V5LCBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdXSlcbiAgKTtcbiAgY29uc3QgbGFzdEtleVZhbHVlcyA9IGtleXMubWFwKChrZXkpID0+IFtcbiAgICBrZXksXG4gICAgWy4uLmRhdGFdLnJldmVyc2UoKS5maW5kKChkKSA9PiBkW2tleV0gIT09IHVuZGVmaW5lZCksXG4gIF0pO1xuICBjb25zb2xlLmxvZyhsYXN0S2V5VmFsdWVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy03eGwgbWItOCBmbGV4XCJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogNDAwIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgZmxleC1ub25lIHctMFwiPlxuICAgICAgICB7eVRpY2tzLm1hcCgoW29mZnNldCwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0wIGgtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBsZWZ0LWZ1bGwgLW1sLTIgdGFidWxhci1udW1zXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogYCR7b2Zmc2V0fSVgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0wIGJvdHRvbS0wXCI+XG4gICAgICAgICAge2xhc3RLZXlWYWx1ZXMubWFwKFxuICAgICAgICAgICAgKFtrZXksIHZhbHVlXSwgaSkgPT5cbiAgICAgICAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtrZXlDb2xvcnNba2V5XX0gdGV4dC1yaWdodCByaWdodC0wIC1tdC02IHdoaXRlc3BhY2Utbm93cmFwYH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogYCR7eVNjYWxlKHZhbHVlKSArIGkgKiAyfSVgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKGtleSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LXZpc2libGUgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9e1swLCB5T2Zmc2V0LCAxMDAsIDEwMF0uam9pbihcIiBcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7cmFuZ2UoMSwgNikubWFwKChpKSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2l9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAke3lTY2FsZShpIC0gMC41KSArIHlPZmZzZXR9KWB9PlxuICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgIHgyPVwiMTAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIHN0cm9rZS1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICB2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtrZXlzLm1hcCgoa2V5LCBpKSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2l9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAke2xpbmVPZmZzZXQgKiBpfSlgfT5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPXtsaW5lR2VuZXJhdG9yKChkKSA9PiBkW2tleV0pIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF1cbiAgICAgICAgICAgICAgICB9IHN0cm9rZS1jdXJyZW50IG1peC1ibGVuZC1tdWx0aXBseWB9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICB2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBtdC02IHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAge3hUaWNrcy5tYXAoKFtvZmZzZXQsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTAgZmxleCBqdXN0aWZ5LWNlbnRlciB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHtvZmZzZXR9JWAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBjb2xvcnMgPSBbXG4gIFwidGV4dC1pbmRpZ28tNTAwXCIsXG4gIFwidGV4dC1ncmVlbi01MDBcIixcbiAgXCJ0ZXh0LXllbGxvdy01MDBcIixcbiAgXCJ0ZXh0LWdyYXktNTAwXCIsXG4gIFwidGV4dC1waW5rLTUwMFwiLFxuICBcInRleHQtYmx1ZS01MDBcIixcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})