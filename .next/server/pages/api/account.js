"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/account";
exports.ids = ["pages/api/account"];
exports.modules = {

/***/ "(api)/./pages/api/account.js":
/*!******************************!*\
  !*** ./pages/api/account.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This file mocks an api call to a service to return account data\n// Please do not edit this file\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    // This simulates loading time for api, do not remove.\n    setTimeout(()=>{\n        res.status(200).json({\n            account: {\n                uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n                deleted: false,\n                dateCreated: \"2020-12-03T08:55:33.421Z\",\n                currency: \"GBP\",\n                name: \"15 Temple Way\",\n                bankName: \"Residential\",\n                type: \"properties\",\n                subType: \"residential\",\n                originalPurchasePrice: 250000,\n                originalPurchasePriceDate: \"2017-09-03\",\n                recentValuation: {\n                    amount: 310000,\n                    status: \"good\"\n                },\n                associatedMortgages: [\n                    {\n                        name: \"HSBC Repayment Mortgage\",\n                        uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n                        currentBalance: -175000\n                    }\n                ],\n                canBeManaged: false,\n                postcode: \"BS1 2AA\",\n                lastUpdate: \"2020-12-03T08:55:33.421Z\",\n                updateAfterDays: 30\n            }\n        });\n    }, 1000);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0VBQWtFO0FBQ2xFLCtCQUErQjtBQUMvQixpRUFBZSxDQUFDQSxLQUFLQyxNQUFRO0lBQzNCLHNEQUFzRDtJQUN0REMsV0FBVyxJQUFNO1FBQ2pCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxTQUFTO2dCQUNQQyxLQUFLO2dCQUNMQyxTQUFTLEtBQUs7Z0JBQ2RDLGFBQWE7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1RDLHVCQUF1QjtnQkFDdkJDLDJCQUEyQjtnQkFDM0JDLGlCQUFpQjtvQkFBRUMsUUFBUTtvQkFBUWQsUUFBUTtnQkFBTztnQkFDbERlLHFCQUFxQjtvQkFDbkI7d0JBQ0VSLE1BQU07d0JBQ05KLEtBQUs7d0JBQ0xhLGdCQUFnQixDQUFDO29CQUNuQjtpQkFDRDtnQkFDREMsY0FBYyxLQUFLO2dCQUNuQkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsaUJBQWlCO1lBQ25CO1FBQ0Y7SUFDRixHQUFHO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3BlcnR5LWRldGFpbHMvLi9wYWdlcy9hcGkvYWNjb3VudC5qcz9mYmFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBtb2NrcyBhbiBhcGkgY2FsbCB0byBhIHNlcnZpY2UgdG8gcmV0dXJuIGFjY291bnQgZGF0YVxuLy8gUGxlYXNlIGRvIG5vdCBlZGl0IHRoaXMgZmlsZVxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIFRoaXMgc2ltdWxhdGVzIGxvYWRpbmcgdGltZSBmb3IgYXBpLCBkbyBub3QgcmVtb3ZlLlxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGFjY291bnQ6IHtcbiAgICAgIHVpZDogXCI2NTE1NmNkYy01Y2ZkLTRiMzQtYjYyNi00OWM4MzU2OWYzNWVcIixcbiAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxuICAgICAgZGF0ZUNyZWF0ZWQ6IFwiMjAyMC0xMi0wM1QwODo1NTozMy40MjFaXCIsXG4gICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgIG5hbWU6IFwiMTUgVGVtcGxlIFdheVwiLFxuICAgICAgYmFua05hbWU6IFwiUmVzaWRlbnRpYWxcIixcbiAgICAgIHR5cGU6IFwicHJvcGVydGllc1wiLFxuICAgICAgc3ViVHlwZTogXCJyZXNpZGVudGlhbFwiLFxuICAgICAgb3JpZ2luYWxQdXJjaGFzZVByaWNlOiAyNTAwMDAsXG4gICAgICBvcmlnaW5hbFB1cmNoYXNlUHJpY2VEYXRlOiBcIjIwMTctMDktMDNcIixcbiAgICAgIHJlY2VudFZhbHVhdGlvbjogeyBhbW91bnQ6IDMxMDAwMCwgc3RhdHVzOiBcImdvb2RcIiB9LFxuICAgICAgYXNzb2NpYXRlZE1vcnRnYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJIU0JDIFJlcGF5bWVudCBNb3J0Z2FnZVwiLFxuICAgICAgICAgIHVpZDogXCJmYjQ2MzEyMS1iNTFhLTQ5MGQtOWYxOS1kMmVhNzZmMDVlMjVcIixcbiAgICAgICAgICBjdXJyZW50QmFsYW5jZTogLTE3NTAwMCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjYW5CZU1hbmFnZWQ6IGZhbHNlLFxuICAgICAgcG9zdGNvZGU6IFwiQlMxIDJBQVwiLFxuICAgICAgbGFzdFVwZGF0ZTogXCIyMDIwLTEyLTAzVDA4OjU1OjMzLjQyMVpcIixcbiAgICAgIHVwZGF0ZUFmdGVyRGF5czogMzAsXG4gICAgfSxcbiAgfSk7XG59LCAxMDAwKVxufTtcbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwianNvbiIsImFjY291bnQiLCJ1aWQiLCJkZWxldGVkIiwiZGF0ZUNyZWF0ZWQiLCJjdXJyZW5jeSIsIm5hbWUiLCJiYW5rTmFtZSIsInR5cGUiLCJzdWJUeXBlIiwib3JpZ2luYWxQdXJjaGFzZVByaWNlIiwib3JpZ2luYWxQdXJjaGFzZVByaWNlRGF0ZSIsInJlY2VudFZhbHVhdGlvbiIsImFtb3VudCIsImFzc29jaWF0ZWRNb3J0Z2FnZXMiLCJjdXJyZW50QmFsYW5jZSIsImNhbkJlTWFuYWdlZCIsInBvc3Rjb2RlIiwibGFzdFVwZGF0ZSIsInVwZGF0ZUFmdGVyRGF5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/account.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/account.js"));
module.exports = __webpack_exports__;

})();