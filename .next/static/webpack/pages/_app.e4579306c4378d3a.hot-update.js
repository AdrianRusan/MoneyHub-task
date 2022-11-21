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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateShades\": function() { return /* binding */ generateShades; },\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateShades = (hex)=>({\n        default: hex,\n        contrast: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).negate().hex(),\n        dark: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).darken(0.3).hex(),\n        light: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).lighten(0.8).hex()\n    });\nconst theme = {\n    fonts: {\n        body: '\"sans-serif\"'\n    },\n    colors: {\n        primary: generateShades(\"#01a5b8\"),\n        neutral: {\n            default: \"#9e9e9e\",\n            100: \"#f7f7f7\",\n            200: \"#e1e1e1\",\n            300: \"#cfcfcf\",\n            400: \"#b1b1b1\",\n            500: \"#9e9e9e\",\n            600: \"#7e7e7e\",\n            700: \"#626262\",\n            800: \"#515151\",\n            900: \"#3b3b3b\",\n            1000: \"#222222\"\n        },\n        white: {\n            default: \"#fff\"\n        },\n        green: {\n            background: \"#c2f7e1\",\n            text: \"#006b57\"\n        }\n    },\n    typography: {\n        xs: {\n            fontSize: \"12px\",\n            lineHeight: 1.7\n        },\n        s: {\n            fontSize: \"14px\",\n            lineHeight: 1.6\n        },\n        m: {\n            fontSize: \"16px\",\n            lineHeight: 1.6\n        },\n        l: {\n            fontSize: \"18px\",\n            lineHeight: 1.5\n        },\n        xl: {\n            fontSize: \"20px\",\n            lineHeight: 1.4\n        },\n        \"2xl\": {\n            fontSize: \"24px\",\n            lineHeight: 1.3\n        },\n        \"3xl\": {\n            fontSize: \"30px\",\n            lineHeight: 1.2\n        },\n        \"4xl\": {\n            fontSize: \"36px\",\n            lineHeight: 1.2\n        },\n        \"5xl\": {\n            fontSize: \"48px\",\n            lineHeight: 1.1\n        }\n    },\n    space: {\n        xs: \"4px\",\n        s: \"8px\",\n        m: \"16px\",\n        l: \"32px\",\n        xl: \"64px\"\n    },\n    breakpoints: {\n        xxs: 375,\n        xs: 425,\n        s: 768,\n        m: 900,\n        l: 1024,\n        xl: 1300,\n        xxl: 1400,\n        xxxl: 1600\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLGlCQUFpQixDQUFDQyxNQUFTO1FBQ3RDQyxTQUFTRDtRQUNURSxVQUFVSiw0Q0FBS0EsQ0FBQ0UsS0FBS0csTUFBTSxHQUFHSCxHQUFHO1FBQ2pDSSxNQUFNTiw0Q0FBS0EsQ0FBQ0UsS0FBS0ssTUFBTSxDQUFDLEtBQUtMLEdBQUc7UUFDaENNLE9BQU9SLDRDQUFLQSxDQUFDRSxLQUFLTyxPQUFPLENBQUMsS0FBS1AsR0FBRztJQUNwQyxHQUFHO0FBRUksTUFBTVEsUUFBUTtJQUNuQkMsT0FBTztRQUNMQyxNQUFPO0lBQ1Q7SUFDQUMsUUFBUTtRQUNOQyxTQUFTYixlQUFlO1FBQ3hCYyxTQUFTO1lBQ1BaLFNBQVM7WUFDVCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxNQUFNO1FBQ1I7UUFDQWEsT0FBTztZQUNMYixTQUFTO1FBQ1g7UUFDQWMsT0FBTztZQUNMQyxZQUFZO1lBQ1pDLE1BQU07UUFDUjtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBQyxHQUFHO1lBQ0RGLFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0FFLEdBQUc7WUFDREgsVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7UUFDQUcsR0FBRztZQUNESixVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBSSxJQUFJO1lBQ0ZMLFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0EsT0FBTztZQUNMRCxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBLE9BQU87WUFDTEQsVUFBVTtZQUNWQyxZQUFZO1FBQ2Q7UUFDQSxPQUFPO1lBQ0xELFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0EsT0FBTztZQUNMRCxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtJQUNGO0lBQ0FLLE9BQU87UUFDTFAsSUFBSTtRQUNKRyxHQUFHO1FBQ0hDLEdBQUc7UUFDSEMsR0FBRztRQUNIQyxJQUFJO0lBQ047SUFDQUUsYUFBYTtRQUNYQyxLQUFLO1FBQ0xULElBQUk7UUFDSkcsR0FBRztRQUNIQyxHQUFHO1FBQ0hDLEdBQUc7UUFDSEMsSUFBSTtRQUNKSSxLQUFLO1FBQ0xDLE1BQU07SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvaW5kZXguanM/MGM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSBcImNvbG9yXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNoYWRlcyA9IChoZXgpID0+ICh7XG4gIGRlZmF1bHQ6IGhleCxcbiAgY29udHJhc3Q6IENvbG9yKGhleCkubmVnYXRlKCkuaGV4KCksXG4gIGRhcms6IENvbG9yKGhleCkuZGFya2VuKDAuMykuaGV4KCksXG4gIGxpZ2h0OiBDb2xvcihoZXgpLmxpZ2h0ZW4oMC44KS5oZXgoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIGZvbnRzOiB7XG4gICAgYm9keTogYFwic2Fucy1zZXJpZlwiYCxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogZ2VuZXJhdGVTaGFkZXMoXCIjMDFhNWI4XCIpLFxuICAgIG5ldXRyYWw6IHtcbiAgICAgIGRlZmF1bHQ6IFwiIzllOWU5ZVwiLFxuICAgICAgMTAwOiBcIiNmN2Y3ZjdcIixcbiAgICAgIDIwMDogXCIjZTFlMWUxXCIsXG4gICAgICAzMDA6IFwiI2NmY2ZjZlwiLFxuICAgICAgNDAwOiBcIiNiMWIxYjFcIixcbiAgICAgIDUwMDogXCIjOWU5ZTllXCIsXG4gICAgICA2MDA6IFwiIzdlN2U3ZVwiLFxuICAgICAgNzAwOiBcIiM2MjYyNjJcIixcbiAgICAgIDgwMDogXCIjNTE1MTUxXCIsXG4gICAgICA5MDA6IFwiIzNiM2IzYlwiLFxuICAgICAgMTAwMDogXCIjMjIyMjIyXCIsXG4gICAgfSxcbiAgICB3aGl0ZToge1xuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXG4gICAgfSxcbiAgICBncmVlbjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjYzJmN2UxXCIsXG4gICAgICB0ZXh0OiBcIiMwMDZiNTdcIixcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgeHM6IHtcbiAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNyxcbiAgICB9LFxuICAgIHM6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICB9LFxuICAgIG06IHtcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICB9LFxuICAgIGw6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICAgIHhsOiB7XG4gICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgfSxcbiAgICBcIjJ4bFwiOiB7XG4gICAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgfSxcbiAgICBcIjN4bFwiOiB7XG4gICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgICBcIjR4bFwiOiB7XG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgICBcIjV4bFwiOiB7XG4gICAgICBmb250U2l6ZTogXCI0OHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjEsXG4gICAgfSxcbiAgfSxcbiAgc3BhY2U6IHtcbiAgICB4czogXCI0cHhcIixcbiAgICBzOiBcIjhweFwiLFxuICAgIG06IFwiMTZweFwiLFxuICAgIGw6IFwiMzJweFwiLFxuICAgIHhsOiBcIjY0cHhcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICB4eHM6IDM3NSxcbiAgICB4czogNDI1LFxuICAgIHM6IDc2OCxcbiAgICBtOiA5MDAsXG4gICAgbDogMTAyNCxcbiAgICB4bDogMTMwMCxcbiAgICB4eGw6IDE0MDAsXG4gICAgeHh4bDogMTYwMCxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ29sb3IiLCJnZW5lcmF0ZVNoYWRlcyIsImhleCIsImRlZmF1bHQiLCJjb250cmFzdCIsIm5lZ2F0ZSIsImRhcmsiLCJkYXJrZW4iLCJsaWdodCIsImxpZ2h0ZW4iLCJ0aGVtZSIsImZvbnRzIiwiYm9keSIsImNvbG9ycyIsInByaW1hcnkiLCJuZXV0cmFsIiwid2hpdGUiLCJncmVlbiIsImJhY2tncm91bmQiLCJ0ZXh0IiwidHlwb2dyYXBoeSIsInhzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicyIsIm0iLCJsIiwieGwiLCJzcGFjZSIsImJyZWFrcG9pbnRzIiwieHhzIiwieHhsIiwieHh4bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme/index.js\n"));

/***/ })

});