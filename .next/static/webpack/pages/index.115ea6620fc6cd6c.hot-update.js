"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/property-details/index.js":
/*!*******************************************!*\
  !*** ./modules/property-details/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ \"./components/button.js\");\n/* harmony import */ var _components_row_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/row-container */ \"./components/row-container.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./modules/property-details/style.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* eslint-disable max-statements */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((r)=>r.json());\n// const account = {\n//   uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n//   deleted: false,\n//   dateCreated: \"2020-12-03T08:55:33.421Z\",\n//   currency: \"GBP\",\n//   name: \"15 Temple Way\",\n//   bankName: \"Residential\",\n//   type: \"properties\",\n//   subType: \"residential\",\n//   originalPurchasePrice: 250000,\n//   originalPurchasePriceDate: \"2017-09-03\",\n//   recentValuation: { amount: 310000, status: \"good\" },\n//   associatedMortgages: [\n//     {\n//       name: \"HSBC Repayment Mortgage\",\n//       uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n//       currentBalance: -175000,\n//     },\n//   ],\n//   canBeManaged: false,\n//   postcode: \"BS1 2AA\",\n//   lastUpdate: \"2020-12-01T08:55:33.421Z\",\n//   updateAfterDays: 30,\n// };\nconst Detail = (param)=>{\n    let {} = param;\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/account\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n        lineNumber: 47,\n        columnNumber: 21\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n        lineNumber: 48,\n        columnNumber: 21\n    }, undefined);\n    const account = data.account;\n    let mortgage;\n    const lastUpdate = new Date(account.lastUpdate);\n    if (account.associatedMortgages.length) {\n        mortgage = account.associatedMortgages[0];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Inset, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountSection, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountLabel, {\n                        children: \"Estimated Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountHeadline, {\n                        children: new Intl.NumberFormat(\"en-GB\", {\n                            style: \"currency\",\n                            currency: \"GBP\"\n                        }).format(account.recentValuation.amount)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                    children: \"Last updated \".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(lastUpdate, \"do MMM yyyy\"))\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                    children: \"Next update \".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.add)(lastUpdate, {\n                                        days: account.updateAfterDays\n                                    }), \"do MMM yyyy\"))\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountSection, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountLabel, {\n                        children: \"Property details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_row_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                        children: account.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                        children: account.bankName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                        children: account.postcode\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            mortgage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountSection, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountLabel, {\n                        children: \"Mortgage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_row_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        // This is a dummy action\n                        onClick: ()=>alert(\"You have navigated to the mortgage page\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                        children: new Intl.NumberFormat(\"en-GB\", {\n                                            style: \"currency\",\n                                            currency: \"GBP\"\n                                        }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                        children: account.associatedMortgages[0].name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                // This is a dummy action\n                onClick: ()=>alert(\"You have navigated to the edit account page\"),\n                children: \"Edit account\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/Projects/RUSAN TECHNOLOGIES/MoneyHub-task/modules/property-details/index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Detail, \"0Md9nfe1w9EeNtTpqsFmc6MYhdg=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0MsbURBQWVBOzhDQUNkLDRFQUFDRSw0Q0FBUUE7a0RBQ04sSUFBSW1CLEtBQUtDLFlBQVksQ0FBQyxTQUFTOzRDQUM5QkMsT0FBTzs0Q0FDUEMsVUFBVTt3Q0FDWixHQUFHL0IsTUFBTSxDQUNQeUMsS0FBS0MsR0FBRyxDQUFDcEIsUUFBUUksbUJBQW1CLENBQUMsRUFBRSxDQUFDaUIsY0FBYzs7Ozs7Ozs7Ozs7OENBSTVELDhEQUFDcEMsbURBQWVBOzhDQUNkLDRFQUFDRSw0Q0FBUUE7a0RBQUVhLFFBQVFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQ1UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEQsOERBQUNsQyxzREFBTUE7Z0JBQ0wseUJBQXlCO2dCQUN6QnFDLFNBQVMsSUFBTUMsTUFBTTswQkFDdEI7Ozs7Ozs7Ozs7OztBQUtQO0dBekZNdEI7O1FBQ29CUCwyQ0FBTUE7OztLQUQxQk87QUEyRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9wcm9wZXJ0eS1kZXRhaWxzL2luZGV4LmpzPzgxYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbmltcG9ydCB7IGFkZCwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBSb3dDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcm93LWNvbnRhaW5lclwiO1xuaW1wb3J0IHtcbiAgQWNjb3VudEhlYWRsaW5lLFxuICBBY2NvdW50TGFiZWwsXG4gIEFjY291bnRMaXN0LFxuICBBY2NvdW50TGlzdEl0ZW0sXG4gIEFjY291bnRTZWN0aW9uLFxuICBJbmZvVGV4dCxcbiAgSW5zZXQsXG59IGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgdXNlU3dyIGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocikgPT4gci5qc29uKCkpO1xuXG4vLyBjb25zdCBhY2NvdW50ID0ge1xuLy8gICB1aWQ6IFwiNjUxNTZjZGMtNWNmZC00YjM0LWI2MjYtNDljODM1NjlmMzVlXCIsXG4vLyAgIGRlbGV0ZWQ6IGZhbHNlLFxuLy8gICBkYXRlQ3JlYXRlZDogXCIyMDIwLTEyLTAzVDA4OjU1OjMzLjQyMVpcIixcbi8vICAgY3VycmVuY3k6IFwiR0JQXCIsXG4vLyAgIG5hbWU6IFwiMTUgVGVtcGxlIFdheVwiLFxuLy8gICBiYW5rTmFtZTogXCJSZXNpZGVudGlhbFwiLFxuLy8gICB0eXBlOiBcInByb3BlcnRpZXNcIixcbi8vICAgc3ViVHlwZTogXCJyZXNpZGVudGlhbFwiLFxuLy8gICBvcmlnaW5hbFB1cmNoYXNlUHJpY2U6IDI1MDAwMCxcbi8vICAgb3JpZ2luYWxQdXJjaGFzZVByaWNlRGF0ZTogXCIyMDE3LTA5LTAzXCIsXG4vLyAgIHJlY2VudFZhbHVhdGlvbjogeyBhbW91bnQ6IDMxMDAwMCwgc3RhdHVzOiBcImdvb2RcIiB9LFxuLy8gICBhc3NvY2lhdGVkTW9ydGdhZ2VzOiBbXG4vLyAgICAge1xuLy8gICAgICAgbmFtZTogXCJIU0JDIFJlcGF5bWVudCBNb3J0Z2FnZVwiLFxuLy8gICAgICAgdWlkOiBcImZiNDYzMTIxLWI1MWEtNDkwZC05ZjE5LWQyZWE3NmYwNWUyNVwiLFxuLy8gICAgICAgY3VycmVudEJhbGFuY2U6IC0xNzUwMDAsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgY2FuQmVNYW5hZ2VkOiBmYWxzZSxcbi8vICAgcG9zdGNvZGU6IFwiQlMxIDJBQVwiLFxuLy8gICBsYXN0VXBkYXRlOiBcIjIwMjAtMTItMDFUMDg6NTU6MzMuNDIxWlwiLFxuLy8gICB1cGRhdGVBZnRlckRheXM6IDMwLFxuLy8gfTtcblxuY29uc3QgRGV0YWlsID0gKHt9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cihcIi9hcGkvYWNjb3VudFwiLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgY29uc3QgYWNjb3VudCA9IGRhdGEuYWNjb3VudDtcblxuICBsZXQgbW9ydGdhZ2U7XG4gIGNvbnN0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZShhY2NvdW50Lmxhc3RVcGRhdGUpO1xuICBpZiAoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzLmxlbmd0aCkge1xuICAgIG1vcnRnYWdlID0gYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5zZXQ+XG4gICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgIDxBY2NvdW50TGFiZWw+RXN0aW1hdGVkIFZhbHVlPC9BY2NvdW50TGFiZWw+XG4gICAgICAgIDxBY2NvdW50SGVhZGxpbmU+XG4gICAgICAgICAge25ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLUdCXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgICAgICB9KS5mb3JtYXQoYWNjb3VudC5yZWNlbnRWYWx1YXRpb24uYW1vdW50KX1cbiAgICAgICAgPC9BY2NvdW50SGVhZGxpbmU+XG4gICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICA8QWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgPEluZm9UZXh0PlxuICAgICAgICAgICAgICB7YExhc3QgdXBkYXRlZCAke2Zvcm1hdChsYXN0VXBkYXRlLCBcImRvIE1NTSB5eXl5XCIpfWB9XG4gICAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgIDwvQWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICA8SW5mb1RleHQ+XG4gICAgICAgICAgICAgIHtgTmV4dCB1cGRhdGUgJHtmb3JtYXQoXG4gICAgICAgICAgICAgICAgYWRkKGxhc3RVcGRhdGUsIHsgZGF5czogYWNjb3VudC51cGRhdGVBZnRlckRheXMgfSksXG4gICAgICAgICAgICAgICAgXCJkbyBNTU0geXl5eVwiXG4gICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgPC9BY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICA8QWNjb3VudExhYmVsPlByb3BlcnR5IGRldGFpbHM8L0FjY291bnRMYWJlbD5cbiAgICAgICAgPFJvd0NvbnRhaW5lcj5cbiAgICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgICA8QWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQubmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPC9BY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICA8QWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQuYmFua05hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDwvQWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgPEFjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50LnBvc3Rjb2RlfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgICA8L1Jvd0NvbnRhaW5lcj5cbiAgICAgIDwvQWNjb3VudFNlY3Rpb24+XG4gICAgICB7bW9ydGdhZ2UgJiYgKFxuICAgICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgICAgPEFjY291bnRMYWJlbD5Nb3J0Z2FnZTwvQWNjb3VudExhYmVsPlxuICAgICAgICAgIDxSb3dDb250YWluZXJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBkdW1teSBhY3Rpb25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiWW91IGhhdmUgbmF2aWdhdGVkIHRvIHRoZSBtb3J0Z2FnZSBwYWdlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgICAgPEFjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8SW5mb1RleHQ+XG4gICAgICAgICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdLmN1cnJlbnRCYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPEFjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXS5uYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICAgIDwvQWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgICAgICA8L1Jvd0NvbnRhaW5lcj5cbiAgICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIC8vIFRoaXMgaXMgYSBkdW1teSBhY3Rpb25cbiAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgaGF2ZSBuYXZpZ2F0ZWQgdG8gdGhlIGVkaXQgYWNjb3VudCBwYWdlXCIpfVxuICAgICAgPlxuICAgICAgICBFZGl0IGFjY291bnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvSW5zZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XG4iXSwibmFtZXMiOlsiYWRkIiwiZm9ybWF0IiwiUmVhY3QiLCJCdXR0b24iLCJSb3dDb250YWluZXIiLCJBY2NvdW50SGVhZGxpbmUiLCJBY2NvdW50TGFiZWwiLCJBY2NvdW50TGlzdCIsIkFjY291bnRMaXN0SXRlbSIsIkFjY291bnRTZWN0aW9uIiwiSW5mb1RleHQiLCJJbnNldCIsInVzZVN3ciIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkRldGFpbCIsImRhdGEiLCJlcnJvciIsImRpdiIsImFjY291bnQiLCJtb3J0Z2FnZSIsImxhc3RVcGRhdGUiLCJEYXRlIiwiYXNzb2NpYXRlZE1vcnRnYWdlcyIsImxlbmd0aCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwicmVjZW50VmFsdWF0aW9uIiwiYW1vdW50IiwiZGF5cyIsInVwZGF0ZUFmdGVyRGF5cyIsIm5hbWUiLCJiYW5rTmFtZSIsInBvc3Rjb2RlIiwib25DbGljayIsImFsZXJ0IiwiTWF0aCIsImFicyIsImN1cnJlbnRCYWxhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/property-details/index.js\n"));

/***/ })

});