self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var _Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Projects/ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Code\\ReactJS\\portfolio_website(choose)\\src\\components\\Hero\\Hero.js",
    _this = undefined;







var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          children: ["Welcome To ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 22
          }, _this), "Linh Nguyen's Portfolio"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_5__.Img, {
          style: {
            width: 200,
            height: 200,
            borderRadius: "50%",
            marginBottom: 20,
            marginTop: 20
          },
          src: "./images/ava.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: "I am a frontend developer with expertise in ReactJS, React Native, and Node.js. I specialize in creating interactive and visually appealing user interfaces for both web and mobile platforms."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: props.handleClick,
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGFuZGxlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDWDtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQUEsaURBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyx5REFBRDtBQUNFLGVBQUssRUFBRTtBQUNMQyxpQkFBSyxFQUFFLEdBREY7QUFFTEMsa0JBQU0sRUFBRSxHQUZIO0FBR0xDLHdCQUFZLEVBQUUsS0FIVDtBQUlMQyx3QkFBWSxFQUFFLEVBSlQ7QUFLTEMscUJBQVMsRUFBRTtBQUxOLFdBRFQ7QUFRRSxhQUFHLEVBQUU7QUFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBZUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFvQkUsOERBQUMsb0VBQUQ7QUFBUSxpQkFBTyxFQUFFTCxLQUFLLENBQUNNLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRFc7QUFBQSxDQUFiOztLQUFNUCxJO0FBNkJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc1YTYyNGM2ZWZhYTMzYTIzMzk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvblRleHQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHsgTGVmdFNlY3Rpb24gfSBmcm9tIFwiLi9IZXJvU3R5bGVzXCI7XHJcbmltcG9ydCB7IEltZyB9IGZyb20gXCIuLi9Qcm9qZWN0cy9Qcm9qZWN0c1N0eWxlc1wiO1xyXG5cclxuY29uc3QgSGVybyA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICA8TGVmdFNlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5cclxuICAgICAgICAgIFdlbGNvbWUgVG8gPGJyIC8+XHJcbiAgICAgICAgICBMaW5oIE5ndXllbidzIFBvcnRmb2xpb1xyXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgIDxJbWdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgc3JjPXtcIi4vaW1hZ2VzL2F2YS5qcGdcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgIEkgYW0gYSBmcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBleHBlcnRpc2UgaW4gUmVhY3RKUywgUmVhY3QgTmF0aXZlLCBhbmRcclxuICAgICAgICAgIE5vZGUuanMuIEkgc3BlY2lhbGl6ZSBpbiBjcmVhdGluZyBpbnRlcmFjdGl2ZSBhbmQgdmlzdWFsbHkgYXBwZWFsaW5nXHJcbiAgICAgICAgICB1c2VyIGludGVyZmFjZXMgZm9yIGJvdGggd2ViIGFuZCBtb2JpbGUgcGxhdGZvcm1zLlxyXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TGVhcm4gTW9yZTwvQnV0dG9uPlxyXG4gICAgICA8L0xlZnRTZWN0aW9uPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==