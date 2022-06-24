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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "C:\\Users\\kisho\\OneDrive\\Desktop\\A2Z\\client\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ "./src/components/other/FetchInitData.js":
/*!***********************************************!*\
  !*** ./src/components/other/FetchInitData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchInitData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");




function FetchInitData({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["fetchCartRequest"])());
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__["fetchWishListRequest"])());
  }, []);
  return children;
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
/* harmony import */ var _components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/other/FetchInitData */ "./src/components/other/FetchInitData.js");
var _jsxFileName = "C:\\Users\\kisho\\OneDrive\\Desktop\\A2Z\\client\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import Loading from "../components/other/Loading";




const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__["default"])(App));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/reducers/blogFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/blogFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/blogReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/blogReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  allPosts: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  recentPosts: {
    loading: true,
    data: [],
    error: false
  },
  postDetail: {
    loading: true,
    data: [],
    error: false
  }
};
function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = [];
function compareReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");
/* harmony import */ var _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopFilterReducer */ "./src/redux/reducers/shopFilterReducer.js");
/* harmony import */ var _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogFilterReducer */ "./src/redux/reducers/blogFilterReducer.js");
/* harmony import */ var _blogReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogReducer */ "./src/redux/reducers/blogReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogFilterReducer: _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  blogReducer: _blogReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  shopFilterReducer: _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  compareReducer: _compareReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/shopFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sort
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        show: action.show
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        color: action.color
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: action.size
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  saleProducts: {
    loading: true,
    data: [],
    error: false
  },
  featuredProducts: {
    loading: true,
    data: [],
    error: false
  },
  bestSellerProducts: {
    loading: true,
    data: [],
    error: false
  },
  daleProducts: {
    loading: true,
    data: [],
    error: false
  },
  productDetail: {
    loading: true,
    data: [],
    error: false
  },
  searchedProducts: {
    loading: true,
    data: [],
    error: false
  }
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WISHLISTReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");




const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInVybCIsImZldGNoQ2FydERhdGEiLCJjYXJ0SWQiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwicmVuZGVyUGFyYW0iLCJhZGRDYXJ0RGF0YSIsImRhdGEiLCJwb3N0IiwicmVtb3ZlQ2FydERhdGEiLCJkZWxldGUiLCJ1cGRhdGVDYXJ0RGF0YSIsInBhdGNoIiwiZmV0Y2hXaXNobGlzdERhdGEiLCJmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSIsImFkZFdpc2hsaXN0RGF0YSIsInJlbW92ZVdpc2hsaXN0RGF0YSIsIkF4aW9zU2VydmljZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsImZvcm1hdEN1cnJlbmN5IiwicHJpY2UiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJzdHIiLCJyZXBsYWNlIiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ3aXRoUmVkdXhTdG9yIiwiQXBwIiwiQXBwV2l0aFJlZHV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwicmVuZGVyIiwiRmV0Y2hJbml0RGF0YSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoQ2FydFJlcXVlc3QiLCJmZXRjaFdpc2hMaXN0UmVxdWVzdCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eFN0b3JlIiwiU0hPUCIsIkZFVENIX1BST0RVQ1RTIiwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9TQUxFX1BST0RVQ1RTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9EQUxFX1BST0RVQ1RTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTCIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUwiLCJCTE9HIiwiRkVUQ0hfUE9TVFMiLCJGRVRDSF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUE9TVFNfRkFJTCIsIkZFVENIX1BPU1RfREVUQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BPU1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9SRUNFTlRfUE9TVFMiLCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMIiwiU0hPUF9GSUxURVIiLCJSRVNFVF9GSUxURVJTIiwiU0VUX1NPUlQiLCJTRVRfU0hPVyIsIlNFVF9WSUVXIiwiU0VUX0NBVEVHT1JZIiwiU0VUX0NPTE9SIiwiU0VUX1NJWkUiLCJTRVRfVEFHIiwiQ0FSVCIsIkZFVENIX0NBUlQiLCJGRVRDSF9DQVJUX1NVQ0NFU1MiLCJGRVRDSF9DQVJUX0ZBSUwiLCJXSVNITElTVCIsIkZFVENIX1dJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyIsIkZFVENIX1dJU0hMSVNUX0ZBSUwiLCJDT01QQVJFIiwiQUREX1RPX0NPTVBBUkUiLCJSRU1PVkVfRlJPTV9DT01QQVJFIiwiQkxPR19GSUxURVIiLCJmZXRjaENhcnQiLCJ0eXBlIiwiZmV0Y2hDYXJ0U3VjY2VzcyIsInBheWxvYWQiLCJmZXRjaENhcnRGYWlsIiwiZXJyIiwiY2FydEFwaXMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJmZXRjaFdpc2hMaXN0IiwiZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MiLCJmZXRjaFdpc2hMaXN0RmFpbCIsIndpc2hsaXN0QXBpcyIsImNhdGVnb3J5IiwidGFnIiwiYmxvZ0ZpbHRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFsbFBvc3RzIiwibG9hZGluZyIsImNvdW50IiwicmVjZW50UG9zdHMiLCJwb3N0RGV0YWlsIiwiYmxvZ1JlZHVjZXIiLCJwb3N0Q291bnQiLCJjYXJ0UmVkdWNlciIsImNvbXBhcmVSZWR1Y2VyIiwiaW5jbHVkZXMiLCJsZWd0aCIsInNsaWNlIiwiY29tcGFyZUl0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwicHJvZHVjdElkIiwiY29tcGFyZUl0ZW1JbmRleCIsImluZGV4T2YiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNob3BSZWR1Y2VyIiwic2hvcEZpbHRlclJlZHVjZXIiLCJ3aXNobGlzdFJlZHVjZXIiLCJzb3J0Iiwic2hvdyIsInZpZXciLCJjb2xvciIsInNpemUiLCJwcm9kdWN0cyIsInNhbGVQcm9kdWN0cyIsImZlYXR1cmVkUHJvZHVjdHMiLCJiZXN0U2VsbGVyUHJvZHVjdHMiLCJkYWxlUHJvZHVjdHMiLCJwcm9kdWN0RGV0YWlsIiwic2VhcmNoZWRQcm9kdWN0cyIsInByb2R1Y3RDb3VudCIsIldJU0hMSVNUUmVkdWNlciIsImNyZWF0ZWRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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NkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FGVyxDQUFoQztBQUtPLE1BQU0zSSxlQUFlLEdBQUcsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLEtBQXVCO0FBQ3BELFNBQU93SSxZQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJwcm9kdWN0SWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnREYXRhID0gKGNhcnRJZCwgZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaGxpc3REYXRhID0gKCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiaWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSgpO1xuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgZ2V0KHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xuICB9XG5cbiAgcG9zdCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wb3N0KHVybCwgYm9keSk7XG4gIH1cblxuICBwYXRjaCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBeGlvc1NlcnZpY2UoKTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL29nYW1pLWFwaS5oZXJva3VhcHAuY29tXCI7XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHByaWNlLCBsb2NhbGVzID0gXCJ1cy1VU1wiLCBjdXJyZW5jeSA9IFwiVVNEXCIpID0+IHtcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXG4gIH0pLmZvcm1hdChwcmljZSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGFyYW0gPSAocGFyYW1OYW1lLCBwYXJhbVZhbHVlKSA9PiB7XG4gIGlmIChwYXJhbVZhbHVlICYmIHBhcmFtVmFsdWUgIT09IFwiXCIgJiYgcGFyYW1WYWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBgJiR7cGFyYW1OYW1lfT0ke3BhcmFtVmFsdWV9YDtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKFxuICBkYXRlLFxuICBpbnB1dEZvcm1hdCA9IFwiWVlZWS1NTS1ERFwiLFxuICBvdXRwdXRGb3JtYXQgPSBcIk1NTSBERCwgWVlZWVwiXG4pID0+IHtcbiAgcmV0dXJuIG1vbWVudChkYXRlLCBpbnB1dEZvcm1hdCkuZm9ybWF0KG91dHB1dEZvcm1hdCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRGFzaCA9IChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tL2csIFwiIFwiKTtcbn07XG4iLCJpbXBvcnQgeyBpbml0aWFsaXplU3RvcmUgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCI7XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG4gIHJldHVybiB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVkdXhTdG9yKEFwcCkge1xuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcbiAgICAgIC8vIEdldCBvciBDcmVhdGUgdGhlIHN0b3JlIHdpdGggYHVuZGVmaW5lZGAgYXMgaW5pdGlhbFN0YXRlXG4gICAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xuXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xuXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYXBwUHJvcHMsXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPjtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmZXRjaENhcnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7IGZldGNoV2lzaExpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoSW5pdERhdGEoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENhcnRSZXF1ZXN0KCkpO1xuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xuICB9LCBbXSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9hbnRkLmxlc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuc2Nzc1wiO1xuLy8gaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvTG9hZGluZ1wiO1xuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi9jb21tb24vd2l0aFJlZHV4U3RvcmVcIjtcbmltcG9ydCBGZXRjaEluaXREYXRhIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGFcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICA8RmV0Y2hJbml0RGF0YT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9GZXRjaEluaXREYXRhPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShBcHApO1xuIiwiZXhwb3J0IGNvbnN0IFNIT1AgPSB7XG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXG4gIEZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HID0ge1xuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxuICBGRVRDSF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVFNfRkFJTDogXCJGRVRDSF9QT1NUU19GQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDogXCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFNIT1BfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcbiAgU0VUX1NIT1c6IFwiU0VUX1NIT1dcIixcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfQ09MT1I6IFwiU0VUX0NPTE9SXCIsXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XG4gIEZFVENIX0NBUlQ6IFwiRkVUQ0hfQ0FSVFwiLFxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXG4gIEZFVENIX0NBUlRfRkFJTDogXCJGRVRDSF9DQVJUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcbiAgRkVUQ0hfV0lTSExJU1Q6IFwiRkVUQ0hfV0lTSExJU1RcIixcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXG4gIEZFVENIX1dJU0hMSVNUX0ZBSUw6IFwiRkVUQ0hfV0lTSExJU1RfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSB7XG4gIEFERF9UT19DT01QQVJFOiBcIkFERF9UT19DT01QQVJFXCIsXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIGNhcnRBcGlzIGZyb20gXCIuLi8uLi9hcGlzL2NhcnRcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0ID0gKCkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xuICAgIGNhcnRBcGlzXG4gICAgICAuZmV0Y2hDYXJ0RGF0YSgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgd2lzaGxpc3RBcGlzIGZyb20gXCIuLi8uLi9hcGlzL3dpc2hsaXN0XCI7XG5cbi8vR2V0IGNhcnQgZGF0YVxuY29uc3QgZmV0Y2hXaXNoTGlzdCA9ICgpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNULFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0KCkpO1xuICAgIHdpc2hsaXN0QXBpc1xuICAgICAgLmZldGNoV2lzaGxpc3REYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0RmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcbiIsImltcG9ydCB7IEJMT0dfRklMVEVSIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2F0ZWdvcnk6IFwiXCIsXG4gIHRhZzogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dGaWx0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQkxPR19GSUxURVIuUkVTRVRfRklMVEVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICB0YWc6IFwiXCIsXG4gICAgICB9O1xuICAgIGNhc2UgQkxPR19GSUxURVIuU0VUX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcnksXG4gICAgICB9O1xuICAgIGNhc2UgQkxPR19GSUxURVIuU0VUX1RBRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0YWc6IGFjdGlvbi50YWcsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJMT0cgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhbGxQb3N0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxuICByZWNlbnRQb3N0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIHBvc3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgLy9BbGwgcG9zdHNcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWxsUG9zdHM6IHtcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWxsUG9zdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wb3N0Q291bnQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbGxQb3N0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmFsbFBvc3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL1JlY2VudCBwb3N0c1xuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBCTE9HLkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVjZW50UG9zdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucG9zdENvdW50LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVjZW50UG9zdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vUG9zdCBkZXRhaWxcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9zdERldGFpbDogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvc3REZXRhaWw6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wb3N0RGV0YWlsLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUX0RFVEFJTF9GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3N0RGV0YWlsOiB7XG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FydFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDQVJULkZFVENIX0NBUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENPTVBBUkUgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ09NUEFSRS5BRERfVE9fQ09NUEFSRTpcbiAgICAgIGlmICghc3RhdGUuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuZGF0YSkpIHtcbiAgICAgICAgaWYgKHN0YXRlLmxlZ3RoIDw9IDMpIHtcbiAgICAgICAgICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLmRhdGEsIC4uLnN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLmRhdGEsIC4uLnN0YXRlLnNsaWNlKDAsIDIpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGNhc2UgQ09NUEFSRS5SRU1PVkVfRlJPTV9DT01QQVJFOlxuICAgICAgY29uc3QgY29tcGFyZUl0ZW0gPSBzdGF0ZS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdElkXG4gICAgICApO1xuICAgICAgY29uc3QgY29tcGFyZUl0ZW1JbmRleCA9IGNvbXBhcmVJdGVtICYmIHN0YXRlLmluZGV4T2YoY29tcGFyZUl0ZW0pO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgY29tcGFyZUl0ZW1JbmRleCksXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKGNvbXBhcmVJdGVtSW5kZXggKyAxKSxcbiAgICAgIF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tIFwiLi9jYXJ0UmVkdWNlclwiO1xuaW1wb3J0IGNvbXBhcmVSZWR1Y2VyIGZyb20gXCIuL2NvbXBhcmVSZWR1Y2VyXCI7XG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gXCIuL3dpc2hsaXN0UmVkdWNlclwiO1xuaW1wb3J0IHNob3BSZWR1Y2VyIGZyb20gXCIuL3Nob3BSZWR1Y2VyXCI7XG5pbXBvcnQgc2hvcEZpbHRlclJlZHVjZXIgZnJvbSBcIi4vc2hvcEZpbHRlclJlZHVjZXJcIjtcbmltcG9ydCBibG9nRmlsdGVyUmVkdWNlciBmcm9tIFwiLi9ibG9nRmlsdGVyUmVkdWNlclwiO1xuaW1wb3J0IGJsb2dSZWR1Y2VyIGZyb20gXCIuL2Jsb2dSZWR1Y2VyXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYmxvZ0ZpbHRlclJlZHVjZXIsXG4gIGJsb2dSZWR1Y2VyLFxuICBzaG9wUmVkdWNlcixcbiAgc2hvcEZpbHRlclJlZHVjZXIsXG4gIGNvbXBhcmVSZWR1Y2VyLFxuICBjYXJ0UmVkdWNlcixcbiAgd2lzaGxpc3RSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgU0hPUF9GSUxURVIgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzb3J0OiB7fSxcbiAgc2hvdzogXCIxMFwiLFxuICB2aWV3OiBcImdyaWRcIixcbiAgY2F0ZWdvcnk6IFwiXCIsXG4gIGNvbG9yOiBcIlwiLFxuICBzaXplOiBcIlwiLFxuICB0YWc6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wRmlsdGVyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1BfRklMVEVSLlJFU0VUX0ZJTFRFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3J0OiB7fSxcbiAgICAgICAgc2hvdzogXCIxMFwiLFxuICAgICAgICB2aWV3OiBcImdyaWRcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgIGNvbG9yOiBcIlwiLFxuICAgICAgICBzaXplOiBcIlwiLFxuICAgICAgICB0YWc6IFwiXCIsXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NPUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc29ydDogYWN0aW9uLnNvcnQsXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NIT1c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvdzogYWN0aW9uLnNob3csXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1ZJRVc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlldzogYWN0aW9uLnZpZXcsXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcnksXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX0NPTE9SOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbG9yOiBhY3Rpb24uY29sb3IsXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NJWkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2l6ZTogYWN0aW9uLnNpemUsXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1RBRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0YWc6IGFjdGlvbi50YWcsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxuICBzYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICBmZWF0dXJlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgYmVzdFNlbGxlclByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgZGFsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgcHJvZHVjdERldGFpbDogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gIHNlYXJjaGVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgLy9BbGwgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Q291bnQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL1NhbGUgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLnNhbGVQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zYWxlUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vRmVhdHVyZWQgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5mZWF0dXJlZFByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMOlxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9CZXN0IHNlbGxlciBwcm9kdWN0c1xuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5iZXN0U2VsbGVyUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czoge1xuICAgICAgICAgIC4uLnN0YXRlLmJlc3RTZWxsZXJQcm9kdWN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgLy9EYWxlIHByb2R1Y3RzXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGFsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kYWxlUHJvZHVjdHMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGFsZVByb2R1Y3RzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZGFsZVByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL1Byb2R1Y3QgZGV0YWlsXG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdERldGFpbCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTDpcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdERldGFpbDoge1xuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIC8vU2VhcmNoZWQgcHJvZHVjdHNcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaGVkUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2hlZFByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaGVkUHJvZHVjdHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2hlZFByb2R1Y3RzLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAvL0RlZmF1bCBjYXNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdJU0hMSVNUUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUw6XG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiO1xuXG5jb25zdCBjcmVhdGVkU3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbik7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIGNyZWF0ZWRTdG9yZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=