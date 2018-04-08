webpackJsonp([43],{354:function(s,a,t){s.exports=t(423)},423:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{value:5,disabled:!0}},methods:{_handleChange:function(s){console.log("changed ",s)},_toggle:function(){this.disabled=!this.disabled}}},l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("undefined",[t("h1",[s._v("InputNumber 数字输入框")]),s._v(" "),t("p",[s._v("通过鼠标或键盘，输入范围内的数值。")]),s._v(" "),t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),t("p",[s._v("当需要获取标准数值时。")]),s._v(" "),t("h2",{attrs:{id:"zu-jian-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 组件演示")]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-input-number :min="1" :max="1000" v-model="value" @change="_handleChange"></v-input-number>\n\n',script:"\nexport default {\n    data() {\n        return {\n            value: 5\n        }\n    },\n    methods: {\n        _handleChange(value) {\n            console.log('changed ', value)\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[t("v-input-number",{attrs:{min:1,max:1e3},on:{change:s._handleChange},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}})],1),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ji-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),t("p",[s._v("数字输入框。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1000"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_handleChange"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n            "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("\n        }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        _handleChange(value) {\n            "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'changed '")]),s._v(", value)\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 基本\n  数字输入框。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_handleChange"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n        }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        _handleChange(value) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'changed '")]),s._v(", value)\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-input-number :min="1" :max="10" :disabled="disabled" @change="_handleChange"></v-input-number>\n    <br>\n    <br>\n    <v-button @click="_toggle" type="primary">Toggle disabled</v-button>\n</template>\n\n',script:"\nexport default {\n    data: function() {\n        return {\n            disabled: true\n        }\n    }\n    methods: {\n        _toggle() {\n            this.disabled = !this.disabled\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-input-number",{attrs:{min:1,max:10,disabled:s.disabled},on:{change:s._handleChange}}),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("v-button",{attrs:{type:"primary"},on:{click:s._toggle}},[s._v("Toggle disabled")])]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"bu-ke-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bu-ke-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 不可用")]),s._v(" "),t("p",[s._v("点击按钮切换可用状态。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":disabled")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"disabled"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_handleChange"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_toggle"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("Toggle disabled"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n            "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        }\n    }\n    methods: {\n        _toggle() {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".disabled = !"),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".disabled\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 不可用\n  点击按钮切换可用状态。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_handleChange"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_toggle"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Toggle disabled"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n    }\n    methods: {\n        _toggle() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".disabled = !"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".disabled\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-input-number size="large" :min="1" :max="100000" @change="_handleChange"></v-input-number>\n    <v-input-number :min="1" :max="100000" @change="_handleChange"></v-input-number>\n    <v-input-number size="small" :min="1" :max="100000" @change="_handleChange"></v-input-number>\n</template>\n\n',script:"\nexport default {\n    methods: {\n        _handleChange(value) {\n            console.log('changed ', value)\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-input-number",{attrs:{size:"large",min:1,max:1e5},on:{change:s._handleChange}}),s._v(" "),t("v-input-number",{attrs:{min:1,max:1e5},on:{change:s._handleChange}}),s._v(" "),t("v-input-number",{attrs:{size:"small",min:1,max:1e5},on:{change:s._handleChange}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"san-chong-da-xiao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#san-chong-da-xiao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 三种大小")]),s._v(" "),t("p",[s._v("三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"large"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"100000"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_handleChange"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"100000"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_handleChange"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"100000"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_handleChange"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        _handleChange(value) {\n            "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'changed '")]),s._v(", value)\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 三种大小\n  三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_handleChange"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_handleChange"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_handleChange"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        _handleChange(value) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'changed '")]),s._v(", value)\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-input-number :min="1" :max="10" :step="0.1"></v-input-number>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[t("v-input-number",{attrs:{min:1,max:10,step:.1}})],1),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"xiao-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiao-shu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 小数")]),s._v(" "),t("p",[s._v("和原生的数字输入框一样，value 的精度由 step 的小数位数决定。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":step")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"0.1"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-input-number")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 小数\n  和原生的数字输入框一样，value 的精度由 step 的小数位数决定。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-input-number")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),t("h3",{attrs:{id:"input-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Input Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("min")]),s._v(" "),t("td",[s._v("最小值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("-Infinity")])]),s._v(" "),t("tr",[t("td",[s._v("max")]),s._v(" "),t("td",[s._v("最大值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("Infinity")])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("当前值")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("step")]),s._v(" "),t("td",[s._v("每次改变步数，可以为小数")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("禁用")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("输入框大小")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"input-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Input Events")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("变化回调事件")]),s._v(" "),t("td",[s._v("value")])])])])],1)},v=[],_={render:l,staticRenderFns:v},e=_,r=t(0),i=r(n,e,!1,null,null,null);a.default=i.exports}});
//# sourceMappingURL=43.f0ed281354032f0a1fb9.js.map