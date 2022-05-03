(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{455:function(t,i,e){"use strict";e.r(i);var s=e(62),a=Object(s.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("Title: Words position limit")]),t._v(" "),e("li",[t._v("Start Date: 2021-10-06")]),t._v(" "),e("li",[t._v("Specification PR: "),e("a",{attrs:{href:"https://github.com/meilisearch/specifications/pull/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("#77"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Discovery Issue: "),e("a",{attrs:{href:"https://github.com/meilisearch/product/issues/202",target:"_blank",rel:"noopener noreferrer"}},[t._v("#202"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"words-position-limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#words-position-limit"}},[t._v("#")]),t._v(" Words position limit")]),t._v(" "),e("h2",{attrs:{id:"_1-functional-specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-functional-specification"}},[t._v("#")]),t._v(" 1. Functional Specification")]),t._v(" "),e("h3",{attrs:{id:"i-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-summary"}},[t._v("#")]),t._v(" I. Summary")]),t._v(" "),e("p",[t._v("The purpose of this specification is to remove the limit of 1000 positions per attribute.")]),t._v(" "),e("h4",{attrs:{id:"summary-key-points"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary-key-points"}},[t._v("#")]),t._v(" Summary Key points")]),t._v(" "),e("ul",[e("li",[t._v("1000 positions limit per document field is now raised at 65535.")])]),t._v(" "),e("h3",{attrs:{id:"ii-motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ii-motivation"}},[t._v("#")]),t._v(" II. Motivation")]),t._v(" "),e("p",[t._v("We've seen many users denormalizing fields into multiple fields to index all the words because of the initial limit. This change will increases the limit to 65535, which should greatly reduce frictions on this issue. We expect to reduce the changes to be made to the document schema in order to use MeiliSearch more quickly and easily.")]),t._v(" "),e("h3",{attrs:{id:"iii-technical-explanations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iii-technical-explanations"}},[t._v("#")]),t._v(" III. Technical Explanations")]),t._v(" "),e("p",[t._v("n/a")]),t._v(" "),e("h2",{attrs:{id:"_2-technical-aspects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-aspects"}},[t._v("#")]),t._v(" 2. Technical Aspects")]),t._v(" "),e("p",[t._v("When MeiliSearch indexes a document, it indexes several word positions per field until a limit is reached.")]),t._v(" "),e("p",[t._v("It is important to note that the limit is not strictly related to the number of words. Indeed, soft separators are also counted as "),e("code",[t._v("1")]),t._v(" position while hard separators are counted as "),e("code",[t._v("8")]),t._v(" positions.")]),t._v(" "),e("h2",{attrs:{id:"_3-future-possibilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[t._v("#")]),t._v(" 3. Future Possibilities")]),t._v(" "),e("ul",[e("li",[t._v("Expose a configurable default limit up to 65535.")])])])}),[],!1,null,null,null);i.default=a.exports}}]);