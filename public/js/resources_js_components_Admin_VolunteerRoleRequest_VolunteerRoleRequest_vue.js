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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", _vm._l(_vm.requests, function (request) {
    return _c("div", [_c("h3", [_vm._v(_vm._s("".concat(request.name, "  ").concat(request.surname, " ").concat(request.middlename)))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(request.about))]), _vm._v(" "), _c("input", {
      staticClass: "btn btn-success",
      attrs: {
        type: "submit",
        value: "approve"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.approveStatus(request.user_id, request.card);
        }
      }
    }), _vm._v(" "), _c("input", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "submit",
        value: "disapprove"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.disapprove(request.id);
        }
      }
    })]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


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
/* harmony import */ var _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true& */ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true&");
/* harmony import */ var _VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerRoleRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VolunteerRoleRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a8de834",
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

/***/ "./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequest_vue_vue_type_template_id_2a8de834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/VolunteerRoleRequest/VolunteerRoleRequest.vue?vue&type=template&id=2a8de834&scoped=true&");


/***/ })

}]);