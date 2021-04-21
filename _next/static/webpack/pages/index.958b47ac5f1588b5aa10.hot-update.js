webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\n\nvar formatDate = function formatDate(d) {\n  return d.getDate() === 1 ? Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %Y\")(d) : Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %-d, %Y\")(d);\n};\n\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor,\n      yAccessors = _ref.yAccessors;\n  var filteredData = data.filter(function (d) {\n    return Object.values(d).find(typeof d === \"number\");\n  });\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6 / 2; // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleTime\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(data, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(3).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  var lastPoint = data.slice(-1)[0] || {};\n  console.log(lastPoint, data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-0\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 top-0 bottom-0\",\n        children: [\"schoolClosing\", \"workplaceClosing\", \"cancelPublicEvents\", \"restrictionsOnGatherings\", \"closePublicTransport\", \"stayAtHomeRequirements\", \"restrictionsOnInternalMovement\", \"internationalTravelControls\"].map(function (key) {\n          return lastPoint[key] !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute\",\n            children: [key, \" \", lastPoint[key]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-full\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, yOffset, 100, 100].join(\" \"),\n        children: [Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"range\"])(1, 6).map(function (i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(yScale(i - 0.5) + yOffset, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n              x2: \"100\",\n              className: \"text-gray-200 stroke-current\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this);\n        }), yAccessors.map(function (yAccessor, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: [yAccessors.length === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: areaGenerator(yAccessor) || \"\",\n              className: \"text-indigo-50 fill-current\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(yAccessor) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-6 whitespace-nowrap\",\n        children: xTicks.map(function (_ref4) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              offset = _ref5[0],\n              value = _ref5[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZCIsImdldERhdGUiLCJ0aW1lRm9ybWF0IiwiUmVzdHJpY3Rpb25zVGltZWxpbmUiLCJkYXRhIiwieEFjY2Vzc29yIiwieUFjY2Vzc29ycyIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJsaW5lT2Zmc2V0IiwieU9mZnNldCIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwieFRpY2tzIiwidGlja3MiLCJtYXAiLCJ0aWNrIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJ5VGlja3MiLCJ0b0xvY2FsZVN0cmluZyIsImFyZWFHZW5lcmF0b3IiLCJ5QWNjZXNzb3IiLCJhcmVhIiwieCIsInkwIiwieTEiLCJkZWZpbmVkIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJsaW5lR2VuZXJhdG9yIiwibGluZSIsInkiLCJsYXN0UG9pbnQiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJvZmZzZXQiLCJ2YWx1ZSIsInRvcCIsImtleSIsInVuZGVmaW5lZCIsImpvaW4iLCJpIiwibGVuZ3RoIiwiY29sb3JzIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWlCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFEO0FBQUEsU0FDakJBLENBQUMsQ0FBQ0MsT0FBRixPQUFnQixDQUFoQixHQUFvQkMscURBQVUsQ0FBQyxRQUFELENBQVYsQ0FBcUJGLENBQXJCLENBQXBCLEdBQThDRSxxREFBVSxDQUFDLGFBQUQsQ0FBVixDQUEwQkYsQ0FBMUIsQ0FEN0I7QUFBQSxDQUFuQjs7QUFFTyxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLE9BSXZCO0FBQUEsTUFIWEMsSUFH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QUFBQSxjQUFFdUIsTUFBRjtBQUFBLGNBQVVDLEtBQVY7O0FBQUEsOEJBQ1Y7QUFDRSxxQkFBUyxFQUFDLCtDQURaO0FBRUUsaUJBQUssRUFBRTtBQUFFUSxrQkFBSSxZQUFLVCxNQUFMO0FBQU4sYUFGVDtBQUFBLHNCQUlHQztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9GRCxDQXpITTtLQUFNMUMsb0I7QUEySGIsSUFBTWlELE1BQU0sR0FBRyxDQUNiLGlCQURhLEVBRWIsZ0JBRmEsRUFHYixpQkFIYSxFQUliLGVBSmEsRUFLYixlQUxhLEVBTWIsZUFOYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBleHRlbnQsXG4gIHJhbmdlLFxuICBzY2FsZUxpbmVhcixcbiAgc2NhbGVUaW1lLFxuICBhcmVhLFxuICBsaW5lLFxuICB0aW1lRm9ybWF0LFxufSBmcm9tIFwiZDNcIjtcblxudHlwZSBBY2Nlc3NvclR5cGUgPSAoZDogYW55KSA9PiBudW1iZXIgfCBEYXRlIHwgbnVsbDtcbnR5cGUgUHJvcHMgPSB7XG4gIGRhdGE6IGFueVtdO1xuICB4QWNjZXNzb3I6IEFjY2Vzc29yVHlwZTtcbiAgeUFjY2Vzc29yczogQWNjZXNzb3JUeXBlW107XG59O1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGQ6IERhdGUpID0+XG4gIGQuZ2V0RGF0ZSgpID09PSAxID8gdGltZUZvcm1hdChcIiUtYiAlWVwiKShkKSA6IHRpbWVGb3JtYXQoXCIlLWIgJS1kLCAlWVwiKShkKTtcbmV4cG9ydCBjb25zdCBSZXN0cmljdGlvbnNUaW1lbGluZSA9ICh7XG4gIGRhdGEsXG4gIHhBY2Nlc3NvcixcbiAgeUFjY2Vzc29ycyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PlxuICAgIE9iamVjdC52YWx1ZXMoZCkuZmluZCh0eXBlb2YgZCA9PT0gXCJudW1iZXJcIilcbiAgKTtcbiAgY29uc3QgbGluZU9mZnNldCA9IDEuNjtcbiAgY29uc3QgeU9mZnNldCA9IChsaW5lT2Zmc2V0ICogNikgLyAyO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSgpXG4gICAgLmRvbWFpbihleHRlbnQoZGF0YSwgeEFjY2Vzc29yKSBhcyBbbnVtYmVyLCBudW1iZXJdKVxuICAgIC5yYW5nZShbMCwgMTAwXSk7XG4gIGNvbnN0IHhUaWNrcyA9IHhTY2FsZVxuICAgIC50aWNrcygzKVxuICAgIC5tYXAoKHRpY2spID0+IFt4U2NhbGUodGljayksIGZvcm1hdERhdGUodGljayldKTtcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDVdKS5yYW5nZShbMTAwLCAwXSk7XG4gIGNvbnN0IHlUaWNrcyA9IHlTY2FsZVxuICAgIC50aWNrcyg1KVxuICAgIC5tYXAoKHRpY2spID0+IFt5U2NhbGUodGljayksIHRpY2sudG9Mb2NhbGVTdHJpbmcoKV0pO1xuXG4gIGNvbnN0IGFyZWFHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgYXJlYSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55MCgxMDApXG4gICAgICAueTEoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZGF0YSk7XG4gIGNvbnN0IGxpbmVHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgbGluZSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55KChkOiBhbnkpID0+IHlTY2FsZSh5QWNjZXNzb3IoZCkpKVxuICAgICAgLmRlZmluZWQoKGQ6IGFueSkgPT4gTnVtYmVyLmlzRmluaXRlKHlBY2Nlc3NvcihkKSkpKGRhdGEpO1xuXG4gIGNvbnN0IGxhc3RQb2ludCA9IGRhdGEuc2xpY2UoLTEpWzBdIHx8IHt9O1xuICBjb25zb2xlLmxvZyhsYXN0UG9pbnQsIGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTd4bCBtYi04IGZsZXhcIlxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA0MDAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCBmbGV4LW5vbmUgdy0wXCI+XG4gICAgICAgIHt5VGlja3MubWFwKChbb2Zmc2V0LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTAgaC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGxlZnQtZnVsbCAtbWwtMiB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHtvZmZzZXR9JWAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgYm90dG9tLTBcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgXCJzY2hvb2xDbG9zaW5nXCIsXG4gICAgICAgICAgICBcIndvcmtwbGFjZUNsb3NpbmdcIixcbiAgICAgICAgICAgIFwiY2FuY2VsUHVibGljRXZlbnRzXCIsXG4gICAgICAgICAgICBcInJlc3RyaWN0aW9uc09uR2F0aGVyaW5nc1wiLFxuICAgICAgICAgICAgXCJjbG9zZVB1YmxpY1RyYW5zcG9ydFwiLFxuICAgICAgICAgICAgXCJzdGF5QXRIb21lUmVxdWlyZW1lbnRzXCIsXG4gICAgICAgICAgICBcInJlc3RyaWN0aW9uc09uSW50ZXJuYWxNb3ZlbWVudFwiLFxuICAgICAgICAgICAgXCJpbnRlcm5hdGlvbmFsVHJhdmVsQ29udHJvbHNcIixcbiAgICAgICAgICBdLm1hcChcbiAgICAgICAgICAgIChrZXkpID0+XG4gICAgICAgICAgICAgIGxhc3RQb2ludFtrZXldICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj5cbiAgICAgICAgICAgICAgICAgIHtrZXl9IHtsYXN0UG9pbnRba2V5XX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD17WzAsIHlPZmZzZXQsIDEwMCwgMTAwXS5qb2luKFwiIFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyYW5nZSgxLCA2KS5tYXAoKGkpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17aX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7eVNjYWxlKGkgLSAwLjUpICsgeU9mZnNldH0pYH0+XG4gICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgeDI9XCIxMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgc3Ryb2tlLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3lBY2Nlc3NvcnMubWFwKCh5QWNjZXNzb3IsIGkpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17aX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7bGluZU9mZnNldCAqIGl9KWB9PlxuICAgICAgICAgICAgICB7eUFjY2Vzc29ycy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPXthcmVhR2VuZXJhdG9yKHlBY2Nlc3NvcikgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTUwIGZpbGwtY3VycmVudFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPXtsaW5lR2VuZXJhdG9yKHlBY2Nlc3NvcikgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXVxuICAgICAgICAgICAgICAgIH0gc3Ryb2tlLWN1cnJlbnQgbWl4LWJsZW5kLW11bHRpcGx5YH1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIG10LTYgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICB7eFRpY2tzLm1hcCgoW29mZnNldCwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMCBmbGV4IGp1c3RpZnktY2VudGVyIHRhYnVsYXItbnVtc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNvbG9ycyA9IFtcbiAgXCJ0ZXh0LWluZGlnby01MDBcIixcbiAgXCJ0ZXh0LWdyZWVuLTUwMFwiLFxuICBcInRleHQteWVsbG93LTUwMFwiLFxuICBcInRleHQtZ3JheS01MDBcIixcbiAgXCJ0ZXh0LXBpbmstNTAwXCIsXG4gIFwidGV4dC1ibHVlLTUwMFwiLFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})