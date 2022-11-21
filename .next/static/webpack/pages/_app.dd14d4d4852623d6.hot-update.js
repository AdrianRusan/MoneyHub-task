"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateShades\": function() { return /* binding */ generateShades; },\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateShades = (hex)=>({\n        default: hex,\n        contrast: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).negate().hex(),\n        dark: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).darken(0.3).hex(),\n        light: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).lighten(0.8).hex()\n    });\nconst theme = {\n    fonts: {\n        body: '\"sans-serif\"'\n    },\n    colors: {\n        primary: generateShades(\"#01a5b8\"),\n        neutral: {\n            default: \"#9e9e9e\",\n            100: \"#f7f7f7\",\n            200: \"#e1e1e1\",\n            300: \"#cfcfcf\",\n            400: \"#b1b1b1\",\n            500: \"#9e9e9e\",\n            600: \"#7e7e7e\",\n            700: \"#626262\",\n            800: \"#515151\",\n            900: \"#3b3b3b\",\n            1000: \"#222222\"\n        },\n        white: {\n            default: \"#fff\"\n        },\n        green: {\n            default: \"#c2f7e1\"\n        }\n    },\n    typography: {\n        xs: {\n            fontSize: \"12px\",\n            lineHeight: 1.7\n        },\n        s: {\n            fontSize: \"14px\",\n            lineHeight: 1.6\n        },\n        m: {\n            fontSize: \"16px\",\n            lineHeight: 1.6\n        },\n        l: {\n            fontSize: \"18px\",\n            lineHeight: 1.5\n        },\n        xl: {\n            fontSize: \"20px\",\n            lineHeight: 1.4\n        },\n        \"2xl\": {\n            fontSize: \"24px\",\n            lineHeight: 1.3\n        },\n        \"3xl\": {\n            fontSize: \"30px\",\n            lineHeight: 1.2\n        },\n        \"4xl\": {\n            fontSize: \"36px\",\n            lineHeight: 1.2\n        },\n        \"5xl\": {\n            fontSize: \"48px\",\n            lineHeight: 1.1\n        }\n    },\n    space: {\n        xs: \"4px\",\n        s: \"8px\",\n        m: \"16px\",\n        l: \"32px\",\n        xl: \"64px\"\n    },\n    breakpoints: {\n        xxs: 375,\n        xs: 425,\n        s: 768,\n        m: 900,\n        l: 1024,\n        xl: 1300,\n        xxl: 1400,\n        xxxl: 1600\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLGlCQUFpQixDQUFDQyxNQUFTO1FBQ3RDQyxTQUFTRDtRQUNURSxVQUFVSiw0Q0FBS0EsQ0FBQ0UsS0FBS0csTUFBTSxHQUFHSCxHQUFHO1FBQ2pDSSxNQUFNTiw0Q0FBS0EsQ0FBQ0UsS0FBS0ssTUFBTSxDQUFDLEtBQUtMLEdBQUc7UUFDaENNLE9BQU9SLDRDQUFLQSxDQUFDRSxLQUFLTyxPQUFPLENBQUMsS0FBS1AsR0FBRztJQUNwQyxHQUFHO0FBRUksTUFBTVEsUUFBUTtJQUNuQkMsT0FBTztRQUNMQyxNQUFPO0lBQ1Q7SUFDQUMsUUFBUTtRQUNOQyxTQUFTYixlQUFlO1FBQ3hCYyxTQUFTO1lBQ1BaLFNBQVM7WUFDVCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxNQUFNO1FBQ1I7UUFDQWEsT0FBTztZQUNMYixTQUFTO1FBQ1g7UUFDQWMsT0FBTztZQUNMZCxTQUFTO1FBQ1g7SUFDRjtJQUNBZSxZQUFZO1FBQ1ZDLElBQUk7WUFDRkMsVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7UUFDQUMsR0FBRztZQUNERixVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBRSxHQUFHO1lBQ0RILFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0FHLEdBQUc7WUFDREosVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7UUFDQUksSUFBSTtZQUNGTCxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBLE9BQU87WUFDTEQsVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7UUFDQSxPQUFPO1lBQ0xELFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0EsT0FBTztZQUNMRCxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBLE9BQU87WUFDTEQsVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7SUFDRjtJQUNBSyxPQUFPO1FBQ0xQLElBQUk7UUFDSkcsR0FBRztRQUNIQyxHQUFHO1FBQ0hDLEdBQUc7UUFDSEMsSUFBSTtJQUNOO0lBQ0FFLGFBQWE7UUFDWEMsS0FBSztRQUNMVCxJQUFJO1FBQ0pHLEdBQUc7UUFDSEMsR0FBRztRQUNIQyxHQUFHO1FBQ0hDLElBQUk7UUFDSkksS0FBSztRQUNMQyxNQUFNO0lBQ1I7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3RoZW1lL2luZGV4LmpzPzBjODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbG9yIGZyb20gXCJjb2xvclwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTaGFkZXMgPSAoaGV4KSA9PiAoe1xuICBkZWZhdWx0OiBoZXgsXG4gIGNvbnRyYXN0OiBDb2xvcihoZXgpLm5lZ2F0ZSgpLmhleCgpLFxuICBkYXJrOiBDb2xvcihoZXgpLmRhcmtlbigwLjMpLmhleCgpLFxuICBsaWdodDogQ29sb3IoaGV4KS5saWdodGVuKDAuOCkuaGV4KCksXG59KTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICBmb250czoge1xuICAgIGJvZHk6IGBcInNhbnMtc2VyaWZcImAsXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6IGdlbmVyYXRlU2hhZGVzKFwiIzAxYTViOFwiKSxcbiAgICBuZXV0cmFsOiB7XG4gICAgICBkZWZhdWx0OiBcIiM5ZTllOWVcIixcbiAgICAgIDEwMDogXCIjZjdmN2Y3XCIsXG4gICAgICAyMDA6IFwiI2UxZTFlMVwiLFxuICAgICAgMzAwOiBcIiNjZmNmY2ZcIixcbiAgICAgIDQwMDogXCIjYjFiMWIxXCIsXG4gICAgICA1MDA6IFwiIzllOWU5ZVwiLFxuICAgICAgNjAwOiBcIiM3ZTdlN2VcIixcbiAgICAgIDcwMDogXCIjNjI2MjYyXCIsXG4gICAgICA4MDA6IFwiIzUxNTE1MVwiLFxuICAgICAgOTAwOiBcIiMzYjNiM2JcIixcbiAgICAgIDEwMDA6IFwiIzIyMjIyMlwiLFxuICAgIH0sXG4gICAgd2hpdGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxuICAgIH0sXG4gICAgZ3JlZW46IHtcbiAgICAgIGRlZmF1bHQ6IFwiI2MyZjdlMVwiLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICB4czoge1xuICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgbGluZUhlaWdodDogMS43LFxuICAgIH0sXG4gICAgczoge1xuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgbToge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgbDoge1xuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gICAgeGw6IHtcbiAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICB9LFxuICAgIFwiMnhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgICB9LFxuICAgIFwiM3hsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICB9LFxuICAgIFwiNHhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICB9LFxuICAgIFwiNXhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMSxcbiAgICB9LFxuICB9LFxuICBzcGFjZToge1xuICAgIHhzOiBcIjRweFwiLFxuICAgIHM6IFwiOHB4XCIsXG4gICAgbTogXCIxNnB4XCIsXG4gICAgbDogXCIzMnB4XCIsXG4gICAgeGw6IFwiNjRweFwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIHh4czogMzc1LFxuICAgIHhzOiA0MjUsXG4gICAgczogNzY4LFxuICAgIG06IDkwMCxcbiAgICBsOiAxMDI0LFxuICAgIHhsOiAxMzAwLFxuICAgIHh4bDogMTQwMCxcbiAgICB4eHhsOiAxNjAwLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDb2xvciIsImdlbmVyYXRlU2hhZGVzIiwiaGV4IiwiZGVmYXVsdCIsImNvbnRyYXN0IiwibmVnYXRlIiwiZGFyayIsImRhcmtlbiIsImxpZ2h0IiwibGlnaHRlbiIsInRoZW1lIiwiZm9udHMiLCJib2R5IiwiY29sb3JzIiwicHJpbWFyeSIsIm5ldXRyYWwiLCJ3aGl0ZSIsImdyZWVuIiwidHlwb2dyYXBoeSIsInhzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicyIsIm0iLCJsIiwieGwiLCJzcGFjZSIsImJyZWFrcG9pbnRzIiwieHhzIiwieHhsIiwieHh4bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme/index.js\n"));

/***/ })

});