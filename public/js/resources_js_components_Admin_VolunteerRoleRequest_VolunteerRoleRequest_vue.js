"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_VolunteerRoleRequest_VolunteerRoleRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VolunteerRoleRequest",
  data: function data() {
    return {
      requests: null,
      card: null
    };
  },
  mounted: function mounted() {
    this.getRequests();
  },
  methods: {
    getRequests: function getRequests() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/admin/volunteer').then(function (res) {
        _this.requests = res.data;
        _this.card = res.data.card;
        console.log(res.data);
      });
    },
    disapprove: function disapprove(id) {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/auth/admin/volunteer/volunteer-statuses/".concat(id)).then(function () {
        _this2.getRequests();
      });
    },
    approveStatus: function approveStatus(id, card) {
      var _this3 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/api/auth/admin/volunteer/".concat(id), {
        role: 2,
        card: card
      }).then(function () {
        _this3.getRequests();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container"
  }, _vm._l(_vm.requests, function (request) {
    return _c("div", {
      staticClass: "request-card"
    }, [_c("h3", {
      staticClass: "request-name"
    }, [_vm._v(_vm._s("".concat(request.name, " ").concat(request.surname, " ").concat(request.middlename)))]), _vm._v(" "), _c("p", {
      staticClass: "request-about"
    }, [_vm._v(_vm._s(request.about))]), _vm._v(" "), _c("div", {
      staticClass: "buttons"
    }, [_c("button", {
      staticClass: "btn btn-approve",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.approveStatus(request.user_id, request.card);
        }
      }
    }, [_vm._v("\n                Затвердити\n            ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-disapprove",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.disapprove(request.id);
        }
      }
    }, [_vm._v("\n                Відхилити\n            ")])])]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.request-card {\n    background-color: #f2f2f2;\n    border-radius: 8px;\n    padding: 20px;\n    margin-bottom: 20px;\n    width: 400px;\n}\n.request-name {\n    color: #333;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n.request-about {\n    color: #555;\n    font-size: 16px;\n    margin-bottom: 10px;\n}\n.buttons {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 10px;\n    gap: 10px;\n}\n.btn {\n    padding: 8px 16px;\n    border-radius: 4px;\n    font-size: 14px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n.btn-approve {\n    background-color: #27ae60;\n    color: #fff;\n}\n.btn-approve:hover {\n    background-color: #219653;\n}\n.btn-disapprove {\n    background-color: #c0392b;\n    color: #fff;\n}\n.btn-disapprove:hover {\n    background-color: #a82c1a;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_style_index_0_id_2a8de834_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_style_index_0_id_2a8de834_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_style_index_0_id_2a8de834_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerRoleRequest.vue?vue&type=template&id=2a8de834& */ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&");
/* harmony import */ var _VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerRoleRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js&");
/* harmony import */ var _VolunteerRoleRequest_vue_vue_type_style_index_0_id_2a8de834_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& */ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__.render,
  _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequest.vue?vue&type=template&id=2a8de834& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&");


/***/ }),

/***/ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_style_index_0_id_2a8de834_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=style&index=0&id=2a8de834&lang=css&");


/***/ })

}]);