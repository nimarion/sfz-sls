/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/About.vue?vue&type=script&lang=js&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Team_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Team.vue */ "./src/components/Team.vue");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  components: {\n    Team: _components_Team_vue__WEBPACK_IMPORTED_MODULE_0__["default"]\n  },\n  metaInfo: function metaInfo() {\n    return {\n      title: "SFZ - Über uns",\n      meta: [{\n        property: "og:title",\n        content: "Schülerforschungszentrum - Über uns"\n      }, {\n        property: "og:site_name",\n        content: "Schülerforschungszentrum Saarlouis"\n      }, {\n        property: "og:type",\n        content: "website"\n      }, {\n        property: "og:url",\n        content: window.location.href\n      }, {\n        name: "robots",\n        content: "index,follow"\n      }]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/page/About.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7643f994-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Team.vue?vue&type=template&id=72a2780d&':function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "container" }, [\n    _c("div", { staticClass: "section" }, [\n      this.$store.getters.employees.length > 0\n        ? _c(\n            "div",\n            { staticClass: "row columns is-multiline" },\n            _vm._l(this.$store.getters.employees, function(card) {\n              return _c("div", { key: card.name, staticClass: "column is-4" }, [\n                _c("div", { staticClass: "card large" }, [\n                  _c(\n                    "div",\n                    { staticClass: "card-image is-1by1" },\n                    [\n                      _c("b-image", {\n                        attrs: { src: card.img, alt: card.name, ratio: "1by1" }\n                      })\n                    ],\n                    1\n                  ),\n                  _c("div", { staticClass: "card-content" }, [\n                    _c("div", { staticClass: "media" }, [\n                      _c("div", { staticClass: "media-content" }, [\n                        _c("p", { staticClass: "title is-4" }, [\n                          _vm._v(_vm._s(card.name))\n                        ]),\n                        _c("p", { staticClass: "subtitle is-6" }, [\n                          _vm._v(_vm._s(card.position))\n                        ])\n                      ])\n                    ]),\n                    _c("div", { staticClass: "content" }, [\n                      _vm._v(_vm._s(card.desc))\n                    ])\n                  ])\n                ])\n              ])\n            }),\n            0\n          )\n        : _vm._e()\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Team.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227643f994-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7643f994-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/About.vue?vue&type=template&id=7f376206&':function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("content", [\n    _c(\n      "section",\n      { staticClass: "hero", attrs: { id: "hero-background" } },\n      [_vm._m(0), _c("Team")],\n      1\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c("div", { staticClass: "hero-body" }, [\n      _c("div", { staticClass: "container has-text-centered" }, [\n        _c("p", { staticClass: "title", attrs: { id: "title" } }, [\n          _vm._v("Unser Team")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/page/About.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227643f994-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},"./src/components/Team.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team.vue?vue&type=template&id=72a2780d& */ "./src/components/Team.vue?vue&type=template&id=72a2780d&");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(\n  script,\n  _Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/Team.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Team.vue?')},"./src/components/Team.vue?vue&type=template&id=72a2780d&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7643f994-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Team.vue?vue&type=template&id=72a2780d& */ "./node_modules/cache-loader/dist/cjs.js?{\\"cacheDirectory\\":\\"node_modules/.cache/vue-loader\\",\\"cacheIdentifier\\":\\"7643f994-vue-loader-template\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Team.vue?vue&type=template&id=72a2780d&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_72a2780d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Team.vue?')},"./src/page/About.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=7f376206& */ "./src/page/About.vue?vue&type=template&id=7f376206&");\n/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./src/page/About.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/page/About.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/page/About.vue?')},"./src/page/About.vue?vue&type=script&lang=js&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/About.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/page/About.vue?')},"./src/page/About.vue?vue&type=template&id=7f376206&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7643f994-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=7f376206& */ "./node_modules/cache-loader/dist/cjs.js?{\\"cacheDirectory\\":\\"node_modules/.cache/vue-loader\\",\\"cacheIdentifier\\":\\"7643f994-vue-loader-template\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/About.vue?vue&type=template&id=7f376206&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7643f994_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_7f376206___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/page/About.vue?')}}]);