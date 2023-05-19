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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VolunteerRoleRequestForm",
  data: function data() {
    return {
      name: '',
      surname: '',
      middlename: '',
      about: '',
      card: null
    };
  },
  methods: {
    store: function store() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/volunteer-role-request', {
        name: this.name,
        surname: this.surname,
        middlename: this.middlename,
        about: this.about,
        card: this.card
      }).then(this.$router.push({
        name: 'personal.page'
      }));
    }
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
  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "form-container"
  }, [_c("div", {
    staticClass: "d-flex flex-column gap-4"
  }, [_c("label", {
    staticClass: "form-label",
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
    staticClass: "form-control",
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
    staticClass: "form-label",
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
    staticClass: "form-control",
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
    staticClass: "form-label",
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
    staticClass: "form-control",
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
    staticClass: "form-label",
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
    staticClass: "form-control",
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
    staticClass: "form-label",
    attrs: {
      "for": "card"
    }
  }, [_vm._v("Дайте інформацію про кредитну картку")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.card,
      expression: "card"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "card"
    },
    domProps: {
      value: _vm.card
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.card = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "apply"
    }
  }, [_vm._v("Подати заявку на отримання статусу волонтера")]), _vm._v(" "), _c("input", {
    staticClass: "btn btn-outline-info",
    attrs: {
      type: "submit",
      id: "apply",
      value: "Подати"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.store.apply(null, arguments);
      }
    }
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-6a39d1aa] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-container[data-v-6a39d1aa] {\n    background-color: #494949;\n    padding: 20px;\n    border-radius: 10px;\n    width: 400px;\n}\n.form-label[data-v-6a39d1aa] {\n    color: #fff;\n}\n.form-control[data-v-6a39d1aa] {\n    width: 100%;\n    padding: 8px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n}\n.btn[data-v-6a39d1aa] {\n    padding: 8px 16px;\n    border-radius: 4px;\n    border: none;\n    color: #fff;\n    background-color: #007bff;\n}\n.btn[data-v-6a39d1aa]:hover {\n    background-color: #0056b3;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_style_index_0_id_6a39d1aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_style_index_0_id_6a39d1aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_style_index_0_id_6a39d1aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _VolunteerRoleRequestForm_vue_vue_type_style_index_0_id_6a39d1aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& */ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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


/***/ }),

/***/ "./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerRoleRequestForm_vue_vue_type_style_index_0_id_6a39d1aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/VolunteerRoleRequestForm/VolunteerRoleRequestForm.vue?vue&type=style&index=0&id=6a39d1aa&scoped=true&lang=css&");


/***/ })

}]);