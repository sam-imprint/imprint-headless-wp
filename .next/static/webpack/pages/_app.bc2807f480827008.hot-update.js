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

/***/ "./wp-templates/front-page.js":
/*!************************************!*\
  !*** ./wp-templates/front-page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Component; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/menus */ \"./constants/menus.js\");\n/* harmony import */ var _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fragments/GeneralSettings */ \"./fragments/GeneralSettings.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  \",\n        \"\\n  \",\n        \"\\n  query GetPageData(\\n    $headerLocation: MenuLocationEnum\\n    $footerLocation: MenuLocationEnum\\n  ) {\\n    page(id: 51, idType: DATABASE_ID)  {\\n      homeOptions {\\n        heroImage {\\n          id\\n          sourceUrl\\n          altText\\n          mediaDetails {\\n            width\\n            height\\n          }\\n        }\\n        heroH1\\n        hornsH2\\n        card1\\n        card2\\n        card3 \\n        trustH2\\n        trustCode\\n        weServeH2\\n        servicesH2\\n        studiesH2\\n        studiesCopy\\n        studiesBtnUrl\\n        studiesBtnText\\n      }\\n    }\\n    generalSettings {\\n      ...BlogInfoFragment\\n    }\\n    headerMenuItems: menuItems(where: { location: $headerLocation }) {\\n      nodes {\\n        ...NavigationMenuItemFragment\\n      }\\n    }\\n    footerMenuItems: menuItems(where: { location: $footerLocation }) {\\n      nodes {\\n        ...NavigationMenuItemFragment\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Component(props) {\n    var ref, ref1, ref2;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(Component.query, {\n        variables: Component.variables()\n    }).data;\n    var ref3 = data === null || data === void 0 ? void 0 : data.generalSettings, siteTitle = ref3.title, siteDescription = ref3.description;\n    var ref4;\n    var primaryMenu = (ref4 = data === null || data === void 0 ? void 0 : (ref = data.headerMenuItems) === null || ref === void 0 ? void 0 : ref.nodes) !== null && ref4 !== void 0 ? ref4 : [];\n    var ref5;\n    var footerMenu = (ref5 = data === null || data === void 0 ? void 0 : (ref1 = data.footerMenuItems) === null || ref1 === void 0 ? void 0 : ref1.nodes) !== null && ref5 !== void 0 ? ref5 : [];\n    var _homeOptions;\n    var ref6 = (_homeOptions = props === null || props === void 0 ? void 0 : (ref2 = props.data) === null || ref2 === void 0 ? void 0 : ref2.page.homeOptions) !== null && _homeOptions !== void 0 ? _homeOptions : [], heroImage = ref6.heroImage, heroH1 = ref6.heroH1, heroCopy = ref6.heroCopy, ctaBtn1 = ref6.ctaBtn1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.SEO, {\n                title: siteTitle,\n                description: siteDescription\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Header, {\n                title: siteTitle,\n                description: siteDescription,\n                menuItems: primaryMenu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Main, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Hero, {\n                            title: siteTitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                siteDescription,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: heroImage.sourceUrl,\n                                            alt: heroImage.altText,\n                                            width: heroImage.mediaDetails.width,\n                                            height: heroImage.mediaDetails.height,\n                                            priority: \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: heroH1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: heroCopy\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    children: ctaBtn1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Footer, {\n                title: siteTitle,\n                menuItems: footerMenu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\NZXT\\\\Repos\\\\imprint-headless-wp\\\\wp-templates\\\\front-page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Component, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Component;\nComponent.query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject(), _fragments_GeneralSettings__WEBPACK_IMPORTED_MODULE_5__.BlogInfoFragment, _components__WEBPACK_IMPORTED_MODULE_6__.NavigationMenu.fragments.entry);\nComponent.variables = function() {\n    return {\n        headerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__.PRIMARY_LOCATION,\n        footerLocation: _constants_menus__WEBPACK_IMPORTED_MODULE_4__.FOOTER_LOCATION\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Component\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNZLE9BQU87NENBQ3RCQyxLQUFLLEVBQUViLFNBQVMsQ0FBQ2MsWUFBWSxDQUFDRCxLQUFLOzRDQUNuQ0UsTUFBTSxFQUFFZixTQUFTLENBQUNjLFlBQVksQ0FBQ0MsTUFBTTs0Q0FDckNDLFFBQVEsRUFBQyxNQUFNOzs7OztnREFBRzs7Ozs7NENBQ3BCOzs7Ozt3Q0FDRzs4Q0FDVCw4REFBQ0MsSUFBRTs4Q0FBRWhCLE1BQU07Ozs7O3dDQUFNOzhDQUNqQiw4REFBQ2lCLEdBQUM7OENBQUVoQixRQUFROzs7Ozt3Q0FBSzs4Q0FDakIsOERBQUNpQixRQUFNOzhDQUFFaEIsT0FBTzs7Ozs7d0NBQVU7Ozs7OztnQ0FDdEI7Ozs7Ozt3QkFDSTs7Ozs7b0JBQ1A7MEJBQ1AsOERBQUMxQiwrQ0FBTTtnQkFBQ1ksS0FBSyxFQUFFQyxTQUFTO2dCQUFFYyxTQUFTLEVBQUVSLFVBQVU7Ozs7O29CQUFJOztvQkFDbEQsQ0FDSDtBQUNKLENBQUM7R0EzQ3VCYixTQUFTOztRQUNkYixvREFBUTs7O0FBREhhLEtBQUFBLFNBQVM7QUE2Q2pDQSxTQUFTLENBQUNHLEtBQUssR0FBR2YsbURBQUcsb0JBQ2pCSSx3RUFBZ0IsRUFDaEJLLHVFQUE4QixDQTZDakMsQ0FBQztBQUVGRyxTQUFTLENBQUNJLFNBQVMsR0FBRyxXQUFNO0lBQzFCLE9BQU87UUFDTG1DLGNBQWMsRUFBRWhELDhEQUFzQjtRQUN0Q2tELGNBQWMsRUFBRWxELDZEQUFxQjtLQUN0QyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3dwLXRlbXBsYXRlcy9mcm9udC1wYWdlLmpzP2UwZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBNRU5VUyBmcm9tICcuLi9jb25zdGFudHMvbWVudXMnO1xuaW1wb3J0IHsgQmxvZ0luZm9GcmFnbWVudCB9IGZyb20gJy4uL2ZyYWdtZW50cy9HZW5lcmFsU2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgSGVhZGVyLFxuICBGb290ZXIsXG4gIE1haW4sXG4gIENvbnRhaW5lcixcbiAgTmF2aWdhdGlvbk1lbnUsXG4gIEhlcm8sXG4gIFNFTyxcbn0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENvbXBvbmVudC5xdWVyeSwge1xuICAgIHZhcmlhYmxlczogQ29tcG9uZW50LnZhcmlhYmxlcygpLFxuICB9KTtcblxuICBjb25zdCB7IHRpdGxlOiBzaXRlVGl0bGUsIGRlc2NyaXB0aW9uOiBzaXRlRGVzY3JpcHRpb24gfSA9XG4gICAgZGF0YT8uZ2VuZXJhbFNldHRpbmdzO1xuICBjb25zdCBwcmltYXJ5TWVudSA9IGRhdGE/LmhlYWRlck1lbnVJdGVtcz8ubm9kZXMgPz8gW107XG4gIGNvbnN0IGZvb3Rlck1lbnUgPSBkYXRhPy5mb290ZXJNZW51SXRlbXM/Lm5vZGVzID8/IFtdO1xuICBjb25zdCB7IGhlcm9JbWFnZSwgaGVyb0gxLCBoZXJvQ29weSwgY3RhQnRuMSB9ID0gcHJvcHM/LmRhdGE/LnBhZ2UuaG9tZU9wdGlvbnMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNFTyB0aXRsZT17c2l0ZVRpdGxlfSBkZXNjcmlwdGlvbj17c2l0ZURlc2NyaXB0aW9ufSAvPlxuICAgICAgPEhlYWRlclxuICAgICAgICB0aXRsZT17c2l0ZVRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17c2l0ZURlc2NyaXB0aW9ufVxuICAgICAgICBtZW51SXRlbXM9e3ByaW1hcnlNZW51fVxuICAgICAgLz5cbiAgICAgIDxNYWluPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxIZXJvIHRpdGxlPXtzaXRlVGl0bGV9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge3NpdGVEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtoZXJvSW1hZ2Uuc291cmNlVXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2hlcm9JbWFnZS5hbHRUZXh0fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17aGVyb0ltYWdlLm1lZGlhRGV0YWlscy53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZXJvSW1hZ2UubWVkaWFEZXRhaWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9J3RydWUnIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGgxPntoZXJvSDF9PC9oMT5cbiAgICAgICAgICAgIDxwPntoZXJvQ29weX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uPntjdGFCdG4xfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTWFpbj5cbiAgICAgIDxGb290ZXIgdGl0bGU9e3NpdGVUaXRsZX0gbWVudUl0ZW1zPXtmb290ZXJNZW51fSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5Db21wb25lbnQucXVlcnkgPSBncWxgXG4gICR7QmxvZ0luZm9GcmFnbWVudH1cbiAgJHtOYXZpZ2F0aW9uTWVudS5mcmFnbWVudHMuZW50cnl9XG4gIHF1ZXJ5IEdldFBhZ2VEYXRhKFxuICAgICRoZWFkZXJMb2NhdGlvbjogTWVudUxvY2F0aW9uRW51bVxuICAgICRmb290ZXJMb2NhdGlvbjogTWVudUxvY2F0aW9uRW51bVxuICApIHtcbiAgICBwYWdlKGlkOiA1MSwgaWRUeXBlOiBEQVRBQkFTRV9JRCkgIHtcbiAgICAgIGhvbWVPcHRpb25zIHtcbiAgICAgICAgaGVyb0ltYWdlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICBtZWRpYURldGFpbHMge1xuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoZXJvSDFcbiAgICAgICAgaG9ybnNIMlxuICAgICAgICBjYXJkMVxuICAgICAgICBjYXJkMlxuICAgICAgICBjYXJkMyBcbiAgICAgICAgdHJ1c3RIMlxuICAgICAgICB0cnVzdENvZGVcbiAgICAgICAgd2VTZXJ2ZUgyXG4gICAgICAgIHNlcnZpY2VzSDJcbiAgICAgICAgc3R1ZGllc0gyXG4gICAgICAgIHN0dWRpZXNDb3B5XG4gICAgICAgIHN0dWRpZXNCdG5VcmxcbiAgICAgICAgc3R1ZGllc0J0blRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuZXJhbFNldHRpbmdzIHtcbiAgICAgIC4uLkJsb2dJbmZvRnJhZ21lbnRcbiAgICB9XG4gICAgaGVhZGVyTWVudUl0ZW1zOiBtZW51SXRlbXMod2hlcmU6IHsgbG9jYXRpb246ICRoZWFkZXJMb2NhdGlvbiB9KSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIC4uLk5hdmlnYXRpb25NZW51SXRlbUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICAgIGZvb3Rlck1lbnVJdGVtczogbWVudUl0ZW1zKHdoZXJlOiB7IGxvY2F0aW9uOiAkZm9vdGVyTG9jYXRpb24gfSkge1xuICAgICAgbm9kZXMge1xuICAgICAgICAuLi5OYXZpZ2F0aW9uTWVudUl0ZW1GcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuQ29tcG9uZW50LnZhcmlhYmxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJMb2NhdGlvbjogTUVOVVMuUFJJTUFSWV9MT0NBVElPTixcbiAgICBmb290ZXJMb2NhdGlvbjogTUVOVVMuRk9PVEVSX0xPQ0FUSU9OLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkltYWdlIiwiTGluayIsIk1FTlVTIiwiQmxvZ0luZm9GcmFnbWVudCIsIkhlYWRlciIsIkZvb3RlciIsIk1haW4iLCJDb250YWluZXIiLCJOYXZpZ2F0aW9uTWVudSIsIkhlcm8iLCJTRU8iLCJDb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJxdWVyeSIsInZhcmlhYmxlcyIsImdlbmVyYWxTZXR0aW5ncyIsInRpdGxlIiwic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaXRlRGVzY3JpcHRpb24iLCJwcmltYXJ5TWVudSIsImhlYWRlck1lbnVJdGVtcyIsIm5vZGVzIiwiZm9vdGVyTWVudSIsImZvb3Rlck1lbnVJdGVtcyIsInBhZ2UiLCJob21lT3B0aW9ucyIsImhlcm9JbWFnZSIsImhlcm9IMSIsImhlcm9Db3B5IiwiY3RhQnRuMSIsIm1lbnVJdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwic3JjIiwic291cmNlVXJsIiwiYWx0IiwiYWx0VGV4dCIsIndpZHRoIiwibWVkaWFEZXRhaWxzIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJoMSIsInAiLCJidXR0b24iLCJmcmFnbWVudHMiLCJlbnRyeSIsImhlYWRlckxvY2F0aW9uIiwiUFJJTUFSWV9MT0NBVElPTiIsImZvb3RlckxvY2F0aW9uIiwiRk9PVEVSX0xPQ0FUSU9OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./wp-templates/front-page.js\n"));

/***/ })

});