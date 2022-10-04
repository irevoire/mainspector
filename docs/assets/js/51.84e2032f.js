(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{475:function(t,s,a){"use strict";a.r(s);var e=a(62),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[t._v("Title: Indexing JSON")]),t._v(" "),a("li",[t._v("Start Date: 2022-08-16")]),t._v(" "),a("li",[t._v("Specification PR: "),a("a",{attrs:{href:"https://github.com/meilisearch/specifications/pull/167",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR-#167"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Discovery Issue: n/a")])]),t._v(" "),a("h1",{attrs:{id:"indexing-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing-json"}},[t._v("#")]),t._v(" Indexing JSON")]),t._v(" "),a("h2",{attrs:{id:"_1-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-functional-specification"}},[t._v("#")]),t._v(" 1. Functional Specification")]),t._v(" "),a("h3",{attrs:{id:"i-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-summary"}},[t._v("#")]),t._v(" I. Summary")]),t._v(" "),a("p",[t._v("To index documents, the body of the add documents request has to match a specific format. That specific format is then parsed and tokenized inside MeiliSearch. After which, the documents added are in the pool of searchable and returnable documents.")]),t._v(" "),a("p",[t._v("A "),a("a",{attrs:{href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),a("OutboundLink")],1),t._v(" data format is easier to use than a CSV format because it propose a convenient format for storing structured data.\nWhen indexing multiple documents you should prefer using "),a("RouterLink",{attrs:{to:"/specifications/text/0028-indexing-ndjson.html"}},[t._v("ndjson")]),t._v(". It's faster and more concise.")],1),t._v(" "),a("h4",{attrs:{id:"summary-key-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-key-points"}},[t._v("#")]),t._v(" Summary Key Points")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("application/json")]),t._v(" Content-Type header is now supported.")]),t._v(" "),a("li",[t._v("The error cases have been strengthened and completed. See Errors part.")])]),t._v(" "),a("h3",{attrs:{id:"ii-explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-explanation"}},[t._v("#")]),t._v(" II. Explanation")]),t._v(" "),a("ul",[a("li",[t._v("Meilisearch accept an array of documents")]),t._v(" "),a("li",[t._v("Or a single document.")]),t._v(" "),a("li",[t._v("The data should be encoded in UTF-8.")])]),t._v(" "),a("h4",{attrs:{id:"example-of-a-valid-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-valid-json"}},[t._v("#")]),t._v(" Example of a valid JSON")]),t._v(" "),a("p",[t._v('To send the following documents;\n\'\'\'\n{"id":1, "label": "t-shirt", "colors": ["red", "green", "blue"]}\n{"id":499, "label": "hoodie", "colors": ["purple"]}\n\'\'\'')]),t._v(" "),a("p",[t._v("You can send them in an array like that;")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t-shirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoodie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("You also have the possibility to format the json however you like. Here is another way to send the two same documents;")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t-shirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoodie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Or you could two requests to send the documents directly;")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t-shirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("And")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoodie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For example.")]),t._v(" "),a("p",[t._v("/!\\ Be cautious though, if you send the two documents in a single request like that for example;")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t-shirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoodie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Meilisearch will only index the first document and "),a("strong",[t._v("won't")]),t._v(" throw an error.")]),t._v(" "),a("h4",{attrs:{id:"api-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoints"}},[t._v("#")]),t._v(" API Endpoints")]),t._v(" "),a("blockquote",[a("p",[t._v("Each API endpoints mentioned above will now require a "),a("code",[t._v("application/json")]),t._v(" as "),a("code",[t._v("Content-Type")]),t._v(" header to be processed as JSON data.")])]),t._v(" "),a("p",[a("strong",[t._v("As a developer, I want to upload a JSON payload of documents so that end-user can search them")])]),t._v(" "),a("p",[a("strong",[t._v("POST documents")]),t._v(" "),a("code",[t._v("/indexes/:indexUid/documents")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    [{"id":1, "label": "t-shirt", "price": 4.99, "colors": ["red", "green", "blue"]},{"id":499, "label": "hoodie", "price": 19.99, "colors": ["purple"]}]\'')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("202 Accepted - Response")])]),t._v(" "),a("p",[a("strong",[t._v("PUT documents")]),t._v(" "),a("code",[t._v("/indexes/:indexUid/documents")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    [{"id":1, "label": "t-shirt", "price": 4.99, "colors": ["red", "green", "blue"]},{"id":499, "label": "hoodie", "price": 19.99, "colors": ["purple"]}]\'')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("202 Accepted - Response")])]),t._v(" "),a("h5",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),a("ul",[a("li",[t._v("🔴 Omitted "),a("code",[t._v("Content-Type")]),t._v(" header will lead to a 415 Unsupported Media Type - "),a("strong",[t._v("missing_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an empty "),a("code",[t._v("Content-Type")]),t._v(" will lead to a 415 Unsupported Media Type - "),a("strong",[t._v("invalid_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a different "),a("code",[t._v("Content-Type")]),t._v(" than "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("application/x-ndjson")]),t._v(" or "),a("code",[t._v("text/csv")]),t._v(" will lead to 415 Unsupported Media Type  "),a("strong",[t._v("invalid_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an empty payload will lead to a 400 Bad Request - "),a("strong",[t._v("missing_payload")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a different payload type than the "),a("code",[t._v("Content-Type")]),t._v(" header should return a 400 Bad Request - "),a("strong",[t._v("malformed_payload")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a payload excessing the limit will lead to a 413 Payload Too Large - "),a("strong",[t._v("payload_too_large")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an invalid json format will lead to a 400 bad_request - "),a("strong",[t._v("malformed_payload")]),t._v(" error code.")])]),t._v(" "),a("h5",{attrs:{id:"errors-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-definition"}},[t._v("#")]),t._v(" Errors Definition")]),t._v(" "),a("h2",{attrs:{id:"missing-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-content-type"}},[t._v("#")]),t._v(" missing_content_type")]),t._v(" "),a("h3",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the Content-Type header is missing.")]),t._v(" "),a("h3",{attrs:{id:"error-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("415 Unsupported Media Type")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A Content-Type header is missing. Accepted values for the Content-Type header are: :contentTypeList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_content_type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#missing_content_type"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":contentTypeList")]),t._v(" is inferred when the message is generated. The values are separated by a "),a("code",[t._v(",")]),t._v(" char. e.g. "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("text/csv")]),t._v(".")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"invalid-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-content-type"}},[t._v("#")]),t._v(" invalid_content_type")]),t._v(" "),a("h3",{attrs:{id:"context-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-2"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the provided content-type is not handled by the API method.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-2"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("415 Unsupported Media Type")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The Content-Type :contentType is invalid. Accepted values for the Content-Type header are: :contentTypeList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_content_type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#invalid_content_type"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":contentTypeList")]),t._v(" is inferred when the message is generated. The values are separated by a "),a("code",[t._v(",")]),t._v(" char. e.g. "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("text/csv")]),t._v(".")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"missing-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-payload"}},[t._v("#")]),t._v(" missing_payload")]),t._v(" "),a("h3",{attrs:{id:"context-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-3"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the client does not provide a mandatory payload to the request.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-3"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("400 Bad Request")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A :payloadType payload is missing."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_payload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#missing_payload"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":payloadType")]),t._v(" is inferred when the message is generated. e.g. "),a("code",[t._v("json")]),t._v(", "),a("code",[t._v("ndjson")]),t._v(", "),a("code",[t._v("csv")])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"malformed-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#malformed-payload"}},[t._v("#")]),t._v(" malformed_payload")]),t._v(" "),a("h3",{attrs:{id:"context-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-4"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the format sent in the payload is malformed. The payload contains a syntax error.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-4"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("400 Bad Request")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":syntaxErrorHelper. The :payloadType payload provided is malformed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"malformed_payload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#malformed_payload"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":payloadType")]),t._v(" is inferred when the message is generated. e.g. "),a("code",[t._v("json")]),t._v(", "),a("code",[t._v("ndjson")]),t._v(", "),a("code",[t._v("csv")])]),t._v(" "),a("li",[t._v("The "),a("code",[t._v(":syntaxErrorHelper")]),t._v(" is inferred when the message is generated.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-technical-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-details"}},[t._v("#")]),t._v(" 2. Technical details")]),t._v(" "),a("p",[t._v("n/a")]),t._v(" "),a("h2",{attrs:{id:"_3-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[t._v("#")]),t._v(" 3. Future possibilities")]),t._v(" "),a("ul",[a("li",[t._v("Throw an error when there is multiple documents in the payload but not in an array.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);