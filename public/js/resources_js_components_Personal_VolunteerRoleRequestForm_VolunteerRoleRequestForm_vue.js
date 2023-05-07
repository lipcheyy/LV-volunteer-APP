"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Personal_VolunteerRoleRequestForm_VolunteerRoleRequestForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VolunteerRoleRequestForm",
  data: function data() {
    return {
      name: '',
      surname: '',
      middlename: '',
      about: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "d-flex flex-column gap-4 w-50"
  }, [_c("label", {
    attrs: {
      "for": "firstname"
    }
  }, [_vm._v("Ім'я:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    attrs: {
      type: "text",
      id: "firstname"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "surname"
    }
  }, [_vm._v("Прізвище:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surname,
      expression: "surname"
    }],
    attrs: {
      type: "text",
      id: "surname"
    },
    domProps: {
      value: _vm.surname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.surname = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "middlename"
    }
  }, [_vm._v("По батькові:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.middlename,
      expression: "middlename"
    }],
    attrs: {
      type: "text",
      id: "middlename"
    },
    domProps: {
      value: _vm.middlename
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.middlename = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "about"
    }
  }, [_vm._v("Дайте коротку інформацію чому саме ви повинні отримати статус волонтера")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.about,
      expression: "about"
    }],
    attrs: {
      id: "about"
    },
    domProps: {
      value: _vm.about
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.about = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "apply"
    }
  }, [_vm._v("Подати заявку на отримання статусу волонтера")]), _vm._v(" "), _c("input", {
    staticClass: "btn-primary btn",
    attrs: {
      id: "apply",
      value: "подати "
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true& */ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true&");
/* harmony import */ var _VolunteerRoleRequestForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerRoleRequestForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VolunteerRoleRequestForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a39d1aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequestForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true& ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_template_id_6a39d1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=template&id=6a39d1aa&scoped=true&");


/***/ })

}]);