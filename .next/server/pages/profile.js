module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      email: \"\",\n      password: \"\",\n      error: \"\",\n      isLoading: false\n    });\n\n    _defineProperty(this, \"handleChange\", event => {\n      this.setState({\n        [event.target.name]: event.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleSubmit\", event => {\n      const {\n        email,\n        password\n      } = this.state;\n      event.preventDefault();\n      this.setState({\n        error: \"\",\n        isLoading: true\n      });\n      Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__[\"loginUser\"])(email, password).then(() => {\n        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/profile\");\n      }).catch(this.showError);\n    });\n\n    _defineProperty(this, \"showError\", err => {\n      console.error(err);\n      const error = err.response && err.response.data || err.message;\n      this.setState({\n        error,\n        isLoading: false\n      });\n    });\n  }\n\n  render() {\n    const {\n      email,\n      password,\n      error,\n      isLoading\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n      onSubmit: this.handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"email\",\n          onChange: this.handleChange\n        })\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"password\",\n          onChange: this.handleChange\n        })\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n        disabled: isLoading,\n        type: \"submit\",\n        children: isLoading ? \"Sending\" : \"Submit\"\n      }), error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n        children: error\n      })]\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz8wMzQ4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwiaXNMb2FkaW5nIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN0YXRlIiwicHJldmVudERlZmF1bHQiLCJsb2dpblVzZXIiLCJ0aGVuIiwiUm91dGVyIiwicHVzaCIsImNhdGNoIiwic2hvd0Vycm9yIiwiZXJyIiwiY29uc29sZSIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBTixTQUF3QkMsNENBQUssQ0FBQ0MsU0FBOUIsQ0FBd0M7QUFBQTtBQUFBOztBQUFBLG1DQUM5QjtBQUNOQyxXQUFLLEVBQUUsRUFERDtBQUVOQyxjQUFRLEVBQUUsRUFGSjtBQUdOQyxXQUFLLEVBQUUsRUFIRDtBQUlOQyxlQUFTLEVBQUU7QUFKTCxLQUQ4Qjs7QUFBQSwwQ0FRdEJDLEtBQUQsSUFBVztBQUN4QixXQUFLQyxRQUFMLENBQWM7QUFBRSxTQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFBZCxHQUFxQkgsS0FBSyxDQUFDRSxNQUFOLENBQWFFO0FBQXBDLE9BQWQ7QUFDRCxLQVZxQzs7QUFBQSwwQ0FZdEJKLEtBQUQsSUFBVztBQUN4QixZQUFNO0FBQUVKLGFBQUY7QUFBU0M7QUFBVCxVQUFzQixLQUFLUSxLQUFqQztBQUNBTCxXQUFLLENBQUNNLGNBQU47QUFDQSxXQUFLTCxRQUFMLENBQWM7QUFBRUgsYUFBSyxFQUFFLEVBQVQ7QUFBYUMsaUJBQVMsRUFBRTtBQUF4QixPQUFkO0FBQ0FRLGlFQUFTLENBQUNYLEtBQUQsRUFBUUMsUUFBUixDQUFULENBQ0dXLElBREgsQ0FDUSxNQUFNO0FBQ1ZDLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFaO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsS0FBS0MsU0FKZDtBQUtELEtBckJxQzs7QUFBQSx1Q0F1QnpCQyxHQUFELElBQVM7QUFDbkJDLGFBQU8sQ0FBQ2hCLEtBQVIsQ0FBY2UsR0FBZDtBQUNBLFlBQU1mLEtBQUssR0FBSWUsR0FBRyxDQUFDRSxRQUFKLElBQWdCRixHQUFHLENBQUNFLFFBQUosQ0FBYUMsSUFBOUIsSUFBdUNILEdBQUcsQ0FBQ0ksT0FBekQ7QUFDQSxXQUFLaEIsUUFBTCxDQUFjO0FBQUVILGFBQUY7QUFBU0MsaUJBQVMsRUFBRTtBQUFwQixPQUFkO0FBQ0QsS0EzQnFDO0FBQUE7O0FBNEJ0Q21CLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRXRCLFdBQUY7QUFBU0MsY0FBVDtBQUFtQkMsV0FBbkI7QUFBMEJDO0FBQTFCLFFBQXdDLEtBQUtNLEtBQW5EO0FBQ0Esd0JBQ0U7QUFBTSxjQUFRLEVBQUUsS0FBS2MsWUFBckI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsT0FIZDtBQUlFLGtCQUFRLEVBQUUsS0FBS0M7QUFKakI7QUFERixRQURGLGVBU0U7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxrQkFBUSxFQUFFLEtBQUtBO0FBSmpCO0FBREYsUUFURixlQWlCRTtBQUFRLGdCQUFRLEVBQUVyQixTQUFsQjtBQUE2QixZQUFJLEVBQUMsUUFBbEM7QUFBQSxrQkFDR0EsU0FBUyxHQUFHLFNBQUgsR0FBZTtBQUQzQixRQWpCRixFQW9CR0QsS0FBSyxpQkFBSTtBQUFBLGtCQUFNQTtBQUFOLFFBcEJaO0FBQUEsTUFERjtBQXdCRDs7QUF0RHFDOztBQXlEekJMLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tIFwiLi4vbGliL2F1dGhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGVycm9yOiBcIlwiLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJcIiwgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgIGxvZ2luVXNlcihlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuc2hvd0Vycm9yKTtcbiAgfTtcblxuICBzaG93RXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIGNvbnN0IGVycm9yID0gKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSkgfHwgZXJyLm1lc3NhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNMb2FkaW5nfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge2lzTG9hZGluZyA/IFwiU2VuZGluZ1wiIDogXCJTdWJtaXRcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2PntlcnJvcn08L2Rpdj59XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: getServerSideToken, getClientSideToken, getUserScript, authInitialProps, loginUser, getUserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideToken\", function() { return getServerSideToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientSideToken\", function() { return getClientSideToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserScript\", function() { return getUserScript; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authInitialProps\", function() { return authInitialProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginUser\", function() { return loginUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserProfile\", function() { return getUserProfile; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;\nconst getServerSideToken = req => {\n  console.log(req.signedCookies);\n  const {\n    signedCookies = {}\n  } = req;\n\n  if (!signedCookies) {\n    return {};\n  } else if (!signedCookies.token) {\n    return {};\n  } else {\n    return {\n      user: signedCookies.token\n    };\n  }\n};\nconst getClientSideToken = () => {\n  if (false) {}\n\n  return {\n    user: {}\n  };\n};\nconst WINDOW_USER_SCRIPT_VARIABLE = \"__USER__\";\nconst getUserScript = user => {\n  //declare what propertyo of the window that our app to access to\n  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)}`;\n};\nconst authInitialProps = () => ({\n  req,\n  res\n}) => {\n  const auth = req ? getServerSideToken(req) : getClientSideToken();\n  return {\n    auth\n  };\n};\nconst loginUser = async (email, password) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/api/login\", {\n    email,\n    password\n  });\n\n  if (false) {}\n\n  console.log(response);\n};\nconst getUserProfile = async () => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/profile\");\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJnZXRTZXJ2ZXJTaWRlVG9rZW4iLCJyZXEiLCJjb25zb2xlIiwibG9nIiwic2lnbmVkQ29va2llcyIsInRva2VuIiwidXNlciIsImdldENsaWVudFNpZGVUb2tlbiIsIldJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRSIsImdldFVzZXJTY3JpcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXV0aEluaXRpYWxQcm9wcyIsInJlcyIsImF1dGgiLCJsb2dpblVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0IiwiZ2V0VXNlclByb2ZpbGUiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLGVBQWYsR0FBaUMsSUFBakM7QUFFTyxNQUFNQyxrQkFBa0IsR0FBSUMsR0FBRCxJQUFTO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxhQUFoQjtBQUNBLFFBQU07QUFBRUEsaUJBQWEsR0FBRztBQUFsQixNQUF5QkgsR0FBL0I7O0FBQ0EsTUFBSSxDQUFDRyxhQUFMLEVBQW9CO0FBQ2xCLFdBQU8sRUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0MsS0FBbkIsRUFBMEI7QUFDL0IsV0FBTyxFQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTztBQUFFQyxVQUFJLEVBQUVGLGFBQWEsQ0FBQ0M7QUFBdEIsS0FBUDtBQUNEO0FBQ0YsQ0FWTTtBQVlBLE1BQU1FLGtCQUFrQixHQUFHLE1BQU07QUFDdEMsYUFBbUMsRUFHbEM7O0FBQ0QsU0FBTztBQUFFRCxRQUFJLEVBQUU7QUFBUixHQUFQO0FBQ0QsQ0FOTTtBQVFQLE1BQU1FLDJCQUEyQixHQUFHLFVBQXBDO0FBRU8sTUFBTUMsYUFBYSxHQUFJSCxJQUFELElBQVU7QUFDckM7QUFDQSxTQUFRLEdBQUVFLDJCQUE0QixNQUFLRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZixDQUFxQixFQUFoRTtBQUNELENBSE07QUFLQSxNQUFNTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7QUFBRVgsS0FBRjtBQUFPWTtBQUFQLENBQUQsS0FBa0I7QUFDdEQsUUFBTUMsSUFBSSxHQUFHYixHQUFHLEdBQUdELGtCQUFrQixDQUFDQyxHQUFELENBQXJCLEdBQTZCTSxrQkFBa0IsRUFBL0Q7QUFDQSxTQUFPO0FBQUVPO0FBQUYsR0FBUDtBQUNELENBSE07QUFLQSxNQUFNQyxTQUFTLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxRQUFkLEtBQTJCO0FBQ2xELFFBQU1DLFFBQVEsR0FBRyxNQUFNckIsNENBQUssQ0FBQ3NCLElBQU4sQ0FBVyxZQUFYLEVBQXlCO0FBQUVILFNBQUY7QUFBU0M7QUFBVCxHQUF6QixDQUF2Qjs7QUFDQSxhQUFtQyxFQUVsQzs7QUFDRGYsU0FBTyxDQUFDQyxHQUFSLENBQVllLFFBQVo7QUFDRCxDQU5NO0FBUUEsTUFBTUUsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTXhCLDRDQUFLLENBQUN5QixHQUFOLENBQVUsY0FBVixDQUF2QjtBQUNBLFNBQU9ELElBQVA7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vbGliL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlVG9rZW4gPSAocmVxKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5zaWduZWRDb29raWVzKTtcbiAgY29uc3QgeyBzaWduZWRDb29raWVzID0ge30gfSA9IHJlcTtcbiAgaWYgKCFzaWduZWRDb29raWVzKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IGVsc2UgaWYgKCFzaWduZWRDb29raWVzLnRva2VuKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHVzZXI6IHNpZ25lZENvb2tpZXMudG9rZW4gfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldENsaWVudFNpZGVUb2tlbiA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB1c2VyID0gd2luZG93W1dJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRV0gfHwge307XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG4gIHJldHVybiB7IHVzZXI6IHt9IH07XG59O1xuXG5jb25zdCBXSU5ET1dfVVNFUl9TQ1JJUFRfVkFSSUFCTEUgPSBcIl9fVVNFUl9fXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyU2NyaXB0ID0gKHVzZXIpID0+IHtcbiAgLy9kZWNsYXJlIHdoYXQgcHJvcGVydHlvIG9mIHRoZSB3aW5kb3cgdGhhdCBvdXIgYXBwIHRvIGFjY2VzcyB0b1xuICByZXR1cm4gYCR7V0lORE9XX1VTRVJfU0NSSVBUX1ZBUklBQkxFfSA9ICR7SlNPTi5zdHJpbmdpZnkodXNlcil9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoSW5pdGlhbFByb3BzID0gKCkgPT4gKHsgcmVxLCByZXMgfSkgPT4ge1xuICBjb25zdCBhdXRoID0gcmVxID8gZ2V0U2VydmVyU2lkZVRva2VuKHJlcSkgOiBnZXRDbGllbnRTaWRlVG9rZW4oKTtcbiAgcmV0dXJuIHsgYXV0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3dbV0lORE9XX1VTRVJfU0NSSVBUX1ZBUklBQkxFXSA9IGRhdGEgfHwge307XG4gIH1cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvcHJvZmlsZVwiKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      user: null\n    });\n  }\n\n  componentDidMount() {\n    Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"getUserProfile\"])().then(user => this.setState({\n      user\n    }));\n  }\n\n  render() {\n    return;\n\n    /*#__PURE__*/\n    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Layout, {\n      title: \"Profile\",\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"pre\", {\n        children: JSON.stringify(this.state.user, null, 2)\n      })\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlciIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0VXNlclByb2ZpbGUiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLE9BQU4sU0FBc0JDLDRDQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDM0M7QUFDTkMsVUFBSSxFQUFFO0FBREEsS0FEMkM7QUFBQTs7QUFJbkRDLG1CQUFpQixHQUFHO0FBQ2xCQyxvRUFBYyxHQUFHQyxJQUFqQixDQUF1QkgsSUFBRCxJQUFVLEtBQUtJLFFBQUwsQ0FBYztBQUFFSjtBQUFGLEtBQWQsQ0FBaEM7QUFDRDs7QUFDREssUUFBTSxHQUFHO0FBQ1A7O0FBQ0E7QUFBQSxrRUFBQyxNQUFEO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLQyxLQUFMLENBQVdSLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLENBQXRDO0FBQU47QUFERjtBQUdEOztBQVprRCIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSB9IGZyb20gXCIuLi9saWIvYXV0aFwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGdldFVzZXJQcm9maWxlKCkudGhlbigodXNlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXIgfSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm47XG4gICAgPExheW91dCB0aXRsZT1cIlByb2ZpbGVcIj5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUudXNlciwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC9MYXlvdXQ+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ })

/******/ });