"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_AdminStatistic_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminStatistic",
  data: function data() {
    return {
      notifications: {}
    };
  },
  mounted: function mounted() {
    this.getNotifications();
  },
  methods: {
    getNotifications: function getNotifications() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/user/notifications').then(function (res) {
        return _this.notifications = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "vidget-container"
  }, [_c("div", {
    staticClass: "vidget"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "category.index"
      }
    }
  }, [_vm._v("Категорії")]), _vm._v(" "), _c("div", {
    staticClass: "count"
  }, [_vm._v("'Кількість: " + _vm._s(_vm.notifications.category_count))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vidget"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "user.index"
      }
    }
  }, [_vm._v("Користувачі")]), _vm._v(" "), _c("div", {
    staticClass: "count"
  }, [_vm._v("Кількість: " + _vm._s(_vm.notifications.users_count))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vidget"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "post.create"
      }
    }
  }, [_vm._v("Новини")]), _vm._v(" "), _c("div", {
    staticClass: "count"
  }, [_vm._v("Кількість: " + _vm._s(_vm.notifications.news))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vidget"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "admin.wanted"
      }
    }
  }, [_vm._v("Запити на розміщення оголошень про зниклих")]), _vm._v(" "), _c("div", [_vm._v("Кількість:  "), _c("span", {
    staticClass: "notifications"
  }, [_vm._v(" " + _vm._s(_vm.notifications.wanted_request_count))])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vidget"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "admin.status.request"
      }
    }
  }, [_vm._v("Запити на отримання статусу волонтера")]), _vm._v(" "), _c("div", [_vm._v("Кількість:  "), _c("span", {
    staticClass: "notifications"
  }, [_vm._v(" " + _vm._s(_vm.notifications.volunteer_requests_count))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vidget[data-v-2328fa0c]{\n    padding: 10px;\n    background-color: black;\n    width: 180px;\n    height: auto;\n    text-align: center;\n    border-radius: 10px;\n}\n.count[data-v-2328fa0c]{\n    color: #bfc0bf;\n}\n.notifications[data-v-2328fa0c]{\n    padding: 5px;\n    background-color: red;\n    border-radius: 100px;\n}\n.vidget-container[data-v-2328fa0c]{\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    color: white;\n}\n.vidget[data-v-2328fa0c]:hover{\n    box-shadow: 0px 4px 120px 12px rgba(66,0,66,1);\n    transition: 0.3s ease;\n}\na[data-v-2328fa0c]{\n    color: white;\n    text-decoration: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_style_index_0_id_2328fa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_style_index_0_id_2328fa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_style_index_0_id_2328fa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Admin/AdminStatistic.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/AdminStatistic.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");
/* harmony import */ var _AdminStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminStatistic.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminStatistic_vue_vue_type_style_index_0_id_2328fa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& */ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2328fa0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminStatistic.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminStatistic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_template_id_2328fa0c_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=template&id=2328fa0c&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");


/***/ }),

/***/ "./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStatistic_vue_vue_type_style_index_0_id_2328fa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/AdminStatistic.vue?vue&type=style&index=0&id=2328fa0c&scoped=true&lang=css&");


/***/ })

}]);