(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{440:function(t,e,a){"use strict";a.r(e);var s=a(62),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[t._v("Title: Indexing NDJSON")]),t._v(" "),a("li",[t._v("Start Date: 2021-04-12")]),t._v(" "),a("li",[t._v("Specification PR: "),a("a",{attrs:{href:"https://github.com/meilisearch/specifications/pull/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR-#29"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Discovery Issue: n/a")])]),t._v(" "),a("h1",{attrs:{id:"indexing-ndjson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing-ndjson"}},[t._v("#")]),t._v(" Indexing NDJSON")]),t._v(" "),a("h2",{attrs:{id:"_1-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-functional-specification"}},[t._v("#")]),t._v(" 1. Functional Specification")]),t._v(" "),a("h3",{attrs:{id:"i-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-summary"}},[t._v("#")]),t._v(" I. Summary")]),t._v(" "),a("p",[t._v("To index documents, the body of the add documents request has to match a specific format. That specific format is then parsed and tokenized inside MeiliSearch. After which, the documents added are in the pool of searchable and returnable documents.")]),t._v(" "),a("p",[t._v("An "),a("a",{attrs:{href:"http://ndjson.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NDJSON"),a("OutboundLink")],1),t._v(" data format is easier to use than a CSV format because it propose a convenient format for storing structured data.")]),t._v(" "),a("h4",{attrs:{id:"summary-key-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-key-points"}},[t._v("#")]),t._v(" Summary Key Points")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("application/x-ndjson")]),t._v(" Content-Type header is now supported.")]),t._v(" "),a("li",[t._v("The error cases have been strengthened and completed. See Errors part.")])]),t._v(" "),a("h3",{attrs:{id:"ii-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-motivation"}},[t._v("#")]),t._v(" II. Motivation")]),t._v(" "),a("p",[t._v("Currently, the engine only accepts JSON format as a data source. We want to give users the possibility of another simple data format to use. Thus, give them more versatility at the data source choices for the indexing step.")]),t._v(" "),a("p",[t._v("Writing performance is also a motivation since JSON Lines data parsing is less CPU and memory-intensive than parsing standard JSON. When new lines represent separate entries it makes the NDJSON data streamable, thus, more suited for indexing a consequent data set.")]),t._v(" "),a("p",[t._v("While we give the ability to Meilisearch to ingest CSV data for indexing in this "),a("a",{attrs:{href:"https://github.com/meilisearch/specifications/pull/28",target:"_blank",rel:"noopener noreferrer"}},[t._v("specification"),a("OutboundLink")],1),t._v(", we are aware of the limitations of CSV so we also want to provide a format that is easy to validate. Handling the validity of a CSV can be frustrating and difficult. Only strings can be managed within a CSV. In addition, there is no official specification except "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4180",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4180"),a("OutboundLink")],1),t._v(" which is not sufficient for all data scheme.")]),t._v(" "),a("p",[t._v("Representing nested structures in a JSON object is easy and convenient.")]),t._v(" "),a("h3",{attrs:{id:"iii-explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-explanation"}},[t._v("#")]),t._v(" III. Explanation")]),t._v(" "),a("p",[t._v("Newline-delimited JSON ("),a("code",[t._v("ndjson")]),t._v("), line-delimited JSON ("),a("code",[t._v("ldjson")]),t._v("), JSON lines ("),a("code",[t._v("jsonl")]),t._v(") are three terms expressing the same formats primarily intended for JSON streaming.")]),t._v(" "),a("p",[t._v("As of now, we will use "),a("code",[t._v("ndjson")]),t._v(" in the next parts to refer to a data format that represents JSON entries separated by a new line character.")]),t._v(" "),a("ul",[a("li",[t._v("Each entries will represent a document for MeiliSearch.")]),t._v(" "),a("li",[t._v("Each entries should be a valid JSON object.")]),t._v(" "),a("li",[t._v("The data should be encoded in UTF-8.")])]),t._v(" "),a("h4",{attrs:{id:"example-of-a-valid-njson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-valid-njson"}},[t._v("#")]),t._v(" Example of a valid NJSON")]),t._v(" "),a("p",[t._v('Given the NDJSON payload\n\'\'\'\n{"id":1, "label": "t-shirt", "price": 4.99, "colors": ["red", "green", "blue"]}\n{"id":499, "label": "hoodie", "price": 19.99, "colors": ["purple"]}\n\'\'\'\nthe search result should be displayed as')]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t-shirt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoodie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19.99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purple"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"api-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoints"}},[t._v("#")]),t._v(" API Endpoints")]),t._v(" "),a("blockquote",[a("p",[t._v("Each API endpoints mentioned above will now require a "),a("code",[t._v("application/x-ndjson")]),t._v(" as "),a("code",[t._v("Content-Type")]),t._v(" header to be processed as NDJSON data.")])]),t._v(" "),a("p",[a("strong",[t._v("As a developer, I want to upload a NDJSON payload of documents so that end-user can search them")])]),t._v(" "),a("p",[a("strong",[t._v("POST documents")]),t._v(" "),a("code",[t._v("/indexes/:indexUid/documents")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/x-ndjson'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {"id":1, "label": "t-shirt", "price": 4.99, "colors": ["red", "green", "blue"]}\\n\n    {"id":499, "label": "hoodie", "price": 19.99, "colors": ["purple"]}\n  \'')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("202 Accepted - Response")])]),t._v(" "),a("p",[a("strong",[t._v("PUT documents")]),t._v(" "),a("code",[t._v("/indexes/:indexUid/documents")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/documents'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/x-ndjson'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {"id":1, "label": "t-shirt", "price": 4.99, "colors": ["red", "green", "blue"]}\\n\n    {"id":499, "label": "hoodie", "price": 19.99, "colors": ["purple"]}\n  \'')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("202 Accepted - Response")])]),t._v(" "),a("h5",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),a("ul",[a("li",[t._v("🔴 Omitted "),a("code",[t._v("Content-Type")]),t._v(" header will lead to a 415 Unsupported Media Type - "),a("strong",[t._v("missing_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an empty "),a("code",[t._v("Content-Type")]),t._v(" will lead to a 415 Unsupported Media Type - "),a("strong",[t._v("invalid_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a different "),a("code",[t._v("Content-Type")]),t._v(" than "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("application/x-ndjson")]),t._v(" or "),a("code",[t._v("text/csv")]),t._v(" will lead to 415 Unsupported Media Type  "),a("strong",[t._v("invalid_content_type")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an empty payload will lead to a 400 Bad Request - "),a("strong",[t._v("missing_payload")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a different payload type than the "),a("code",[t._v("Content-Type")]),t._v(" header should return a 400 Bad Request - "),a("strong",[t._v("malformed_payload")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending a payload excessing the limit will lead to a 413 Payload Too Large - "),a("strong",[t._v("payload_too_large")]),t._v(" error code.")]),t._v(" "),a("li",[t._v("🔴 Sending an invalid ndjson format will lead to a 400 bad_request - "),a("strong",[t._v("malformed_payload")]),t._v(" error code.")])]),t._v(" "),a("h5",{attrs:{id:"errors-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-definition"}},[t._v("#")]),t._v(" Errors Definition")]),t._v(" "),a("h2",{attrs:{id:"missing-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-content-type"}},[t._v("#")]),t._v(" missing_content_type")]),t._v(" "),a("h3",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the Content-Type header is missing.")]),t._v(" "),a("h3",{attrs:{id:"error-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("415 Unsupported Media Type")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A Content-Type header is missing. Accepted values for the Content-Type header are: :contentTypeList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_content_type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#missing_content_type"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":contentTypeList")]),t._v(" is inferred when the message is generated. The values are separated by a "),a("code",[t._v(",")]),t._v(" char. e.g. "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("text/csv")]),t._v(".")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"invalid-content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-content-type"}},[t._v("#")]),t._v(" invalid_content_type")]),t._v(" "),a("h3",{attrs:{id:"context-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-2"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the provided content-type is not handled by the API method.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-2"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("415 Unsupported Media Type")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The Content-Type :contentType is invalid. Accepted values for the Content-Type header are: :contentTypeList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_content_type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#invalid_content_type"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":contentTypeList")]),t._v(" is inferred when the message is generated. The values are separated by a "),a("code",[t._v(",")]),t._v(" char. e.g. "),a("code",[t._v("application/json")]),t._v(", "),a("code",[t._v("text/csv")]),t._v(".")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"missing-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-payload"}},[t._v("#")]),t._v(" missing_payload")]),t._v(" "),a("h3",{attrs:{id:"context-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-3"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the client does not provide a mandatory payload to the request.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-3"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("400 Bad Request")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A :payloadType payload is missing."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_payload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#missing_payload"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":payloadType")]),t._v(" is inferred when the message is generated. e.g. "),a("code",[t._v("json")]),t._v(", "),a("code",[t._v("ndjson")]),t._v(", "),a("code",[t._v("csv")])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"malformed-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#malformed-payload"}},[t._v("#")]),t._v(" malformed_payload")]),t._v(" "),a("h3",{attrs:{id:"context-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-4"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("This error occurs when the format sent in the payload is malformed. The payload contains a syntax error.")]),t._v(" "),a("h3",{attrs:{id:"error-definition-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-definition-4"}},[t._v("#")]),t._v(" Error Definition")]),t._v(" "),a("p",[t._v("HTTP Code: "),a("code",[t._v("400 Bad Request")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":syntaxErrorHelper. The :payloadType payload provided is malformed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"malformed_payload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid_request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.meilisearch.com/errors#malformed_payload"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v(":payloadType")]),t._v(" is inferred when the message is generated. e.g. "),a("code",[t._v("json")]),t._v(", "),a("code",[t._v("ndjson")]),t._v(", "),a("code",[t._v("csv")])]),t._v(" "),a("li",[t._v("The "),a("code",[t._v(":syntaxErrorHelper")]),t._v(" is inferred when the message is generated.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-technical-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-details"}},[t._v("#")]),t._v(" 2. Technical details")]),t._v(" "),a("p",[t._v("n/a")]),t._v(" "),a("h2",{attrs:{id:"_3-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[t._v("#")]),t._v(" 3. Future possibilities")]),t._v(" "),a("ul",[a("li",[t._v("Provide an interface in the future dashboard to upload NDJSON data into an index.")]),t._v(" "),a("li",[t._v("Set a payload limit directly related to the type of data format. Currently, the payload size is equivalent to "),a("a",{attrs:{href:"https://docs.meilisearch.com/reference/features/configuration.html#payload-limit-size",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON payload size"),a("OutboundLink")],1),t._v(". Metrics on feature usage and configuration update should help to choose a better suited value for this type of data.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);