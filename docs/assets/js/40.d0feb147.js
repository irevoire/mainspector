(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{464:function(e,t,i){"use strict";i.r(t);var r=i(62),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"proximity-precision-setting-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proximity-precision-setting-api"}},[e._v("#")]),e._v(" Proximity Precision Setting API")]),e._v(" "),i("h2",{attrs:{id:"_1-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),i("p",[e._v("This specification describes the "),i("code",[e._v("proximityPrecision")]),e._v(" index setting API endpoints.")]),e._v(" "),i("h2",{attrs:{id:"_2-motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),i("p",[e._v("N/A")]),e._v(" "),i("h2",{attrs:{id:"_3-functional-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),i("h3",{attrs:{id:"_3-1-explanations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explanations"}},[e._v("#")]),e._v(" 3.1. Explanations")]),e._v(" "),i("p",[e._v("Let the users the possibility to lose a piece of Meilisearch relevancy to gain a lot of indexing speed and disk space.\nChanging this setting will impact the way Meilisearch calculate the proximity between the query words,\nthis changes the behavior of the "),i("code",[e._v("proximity")]),e._v(" ranking-rule, the phrase search, and the multi-word synonyms.\nThere are 2 possible variants for this setting:")]),e._v(" "),i("h4",{attrs:{id:"_3-1-1-byword"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-byword"}},[e._v("#")]),e._v(" 3.1.1. "),i("code",[e._v("byWord")])]),e._v(" "),i("p",[e._v("This variant is the default variant when the setting is not set.")]),e._v(" "),i("p",[e._v("Meilisearch will be precise when computing the proximity between words. It will calculate the distance as the minimal number of words in the document separating the queried words.\nThis variant forces Meilisearch to compute and create a dedicated database to store the distance between words which impacts the indexing time.")]),e._v(" "),i("h4",{attrs:{id:"_3-1-2-byattribute"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-byattribute"}},[e._v("#")]),e._v(" 3.1.2. "),i("code",[e._v("byAttribute")])]),e._v(" "),i("p",[e._v("Meilisearch will not be precise when computing the proximity between words. It will only calculate 2 degrees of distances,the queried words are considered close if they are in the same attribute, and will be considered far if there aren't. It will no more take into account the distance between words or their order in the query.")]),e._v(" "),i("h3",{attrs:{id:"_3-2-global-settings-api-endpoints-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-global-settings-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2. Global Settings API Endpoints Definition")]),e._v(" "),i("p",[i("code",[e._v("proximityPrecision")]),e._v(" is a sub-resource of "),i("code",[e._v("/indexes/:index_uid/settings")]),e._v(".")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0123-settings-api.html"}},[e._v("Settings API")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"_3-3-api-endpoints-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.3. API Endpoints Definition")]),e._v(" "),i("p",[e._v("Manipulate the "),i("code",[e._v("proximityPrecision")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),i("h4",{attrs:{id:"_3-3-1-get-indexes-index-uid-settings-proximity-precision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-get-indexes-index-uid-settings-proximity-precision"}},[e._v("#")]),e._v(" 3.3.1. "),i("code",[e._v("GET")]),e._v(" - "),i("code",[e._v("indexes/:index_uid/settings/proximity-precision")])]),e._v(" "),i("p",[e._v("Fetch the "),i("code",[e._v("proximityPrecision")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),i("h5",{attrs:{id:"_3-3-1-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-1-response-definition"}},[e._v("#")]),e._v(" 3.3.1.1. Response Definition")]),e._v(" "),i("ul",[i("li",[e._v("Type: String")]),e._v(" "),i("li",[e._v("Default: "),i("code",[e._v("byWord")])])]),e._v(" "),i("h5",{attrs:{id:"_3-3-1-2-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-errors"}},[e._v("#")]),e._v(" 3.3.1.2. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Sending an invalid index uid format for the "),i("code",[e._v(":index_uid")]),e._v(" path parameter returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[e._v("invalid_index_uid")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-3-2-put-indexes-index-uid-settings-proximity-precision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-put-indexes-index-uid-settings-proximity-precision"}},[e._v("#")]),e._v(" 3.3.2. "),i("code",[e._v("PUT")]),e._v(" - "),i("code",[e._v("indexes/:index_uid/settings/proximity-precision")])]),e._v(" "),i("p",[e._v("Modify the "),i("code",[e._v("proximityPrecision")]),e._v(" setting of a Meilisearch index.")]),e._v(" "),i("h5",{attrs:{id:"_3-3-2-1-request-payload-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-1-request-payload-definition"}},[e._v("#")]),e._v(" 3.3.2.1. Request Payload Definition")]),e._v(" "),i("ul",[i("li",[e._v("Type: String / "),i("code",[e._v("null")])])]),e._v(" "),i("p",[e._v("Setting "),i("code",[e._v("null")]),e._v(" is equivalent to using the "),i("a",{attrs:{href:"#333-delete---indexesindexuidsettingsproximity-precision"}},[e._v("3.3.3. "),i("code",[e._v("DELETE")]),e._v(" - "),i("code",[e._v("indexes/:index_uid/settings/proximity-precision")])]),e._v(" API endpoint.")]),e._v(" "),i("h5",{attrs:{id:"_3-3-2-2-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-2-response-definition"}},[e._v("#")]),e._v(" 3.3.2.2. Response Definition")]),e._v(" "),i("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),i("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),i("code",[e._v("task")]),e._v(" Object for "),i("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),i("h5",{attrs:{id:"_3-3-2-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-errors"}},[e._v("#")]),e._v(" 3.3.2.3. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Omitting Content-Type header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty Content-Type returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a different Content-Type than "),i("code",[e._v("application/json")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an empty payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an invalid JSON payload returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending an invalid index uid format for the "),i("code",[e._v(":index_uid")]),e._v(" path parameter returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[e._v("invalid_index_uid")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a request payload value type different of a "),i("code",[e._v("String")]),e._v(" or "),i("code",[e._v("null")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_settings_proximity_precision"}},[e._v("invalid_settings_proximity_precision")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Sending a request payload "),i("code",[e._v("String")]),e._v(" that is not "),i("code",[e._v("byWord")]),e._v(" or "),i("code",[e._v("byAttribute")]),e._v(" returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_settings_proximity_precision"}},[e._v("invalid_settings_proximity_precision")]),e._v(" error.")],1)]),e._v(" "),i("h6",{attrs:{id:"_3-3-2-3-1-async-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-3-1-async-errors"}},[e._v("#")]),e._v(" 3.3.2.3.1. Async Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 When Meilisearch is secured, if the API Key do not have the "),i("code",[e._v("indexes.create")]),e._v(" action defined, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related asynchronous "),i("code",[e._v("task")]),e._v(" resource. See "),i("a",{attrs:{href:"#3222-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")],1)]),e._v(" "),i("blockquote",[i("p",[e._v("Otherwise, Meilisearch will create the index in a lazy way. See "),i("a",{attrs:{href:"#3224-lazy-index-creation"}},[e._v("3.2.2.4. Lazy Index Creation")]),e._v(".")])]),e._v(" "),i("h5",{attrs:{id:"_3-3-2-4-lazy-index-creation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-4-lazy-index-creation"}},[e._v("#")]),e._v(" 3.3.2.4. Lazy Index Creation")]),e._v(" "),i("p",[e._v("If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, and the authorization layer allows it (See "),i("a",{attrs:{href:"#33231-async-errors"}},[e._v("3.3.2.3.1. Async Errors")]),e._v("), Meilisearch will create the index when the related asynchronous task resource is executed. See "),i("a",{attrs:{href:"#3322-response-definition"}},[e._v("3.3.2.2. Response Definition")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"_3-3-3-delete-indexes-index-uid-settings-proximity-precision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-delete-indexes-index-uid-settings-proximity-precision"}},[e._v("#")]),e._v(" 3.3.3. "),i("code",[e._v("DELETE")]),e._v(" - "),i("code",[e._v("indexes/:index_uid/settings/proximity-precision")])]),e._v(" "),i("p",[e._v("Reset the "),i("code",[e._v("proximityPrecision")]),e._v(" setting of a Meilisearch index to the default value "),i("code",[e._v("null")]),e._v(".")]),e._v(" "),i("h5",{attrs:{id:"_3-3-3-1-response-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-1-response-definition"}},[e._v("#")]),e._v(" 3.3.3.1. Response Definition")]),e._v(" "),i("p",[e._v("When the request is in a successful state, Meilisearch returns the HTTP code "),i("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),i("code",[e._v("task")]),e._v(" Object for "),i("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),i("h5",{attrs:{id:"_3-3-3-3-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-errors"}},[e._v("#")]),e._v(" 3.3.3.3. Errors")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Sending an invalid index uid format for the "),i("code",[e._v(":index_uid")]),e._v(" path parameter returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_index_uid"}},[e._v("invalid_index_uid")]),e._v(" error.")],1)]),e._v(" "),i("h6",{attrs:{id:"_3-3-3-3-1-asynchronous-index-not-found-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-3-1-asynchronous-index-not-found-error"}},[e._v("#")]),e._v(" 3.3.3.3.1. Asynchronous Index Not Found Error")]),e._v(" "),i("ul",[i("li",[e._v("🔴 If the requested "),i("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related async "),i("code",[e._v("task")]),e._v(" resource. See "),i("a",{attrs:{href:"#3331-response-definition"}},[e._v("3.3.3.1. Response Definition")]),e._v(".")],1)]),e._v(" "),i("h4",{attrs:{id:"_3-3-4-general-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-general-errors"}},[e._v("#")]),e._v(" 3.3.4. General Errors")]),e._v(" "),i("p",[e._v("These errors apply to all endpoints described here.")]),e._v(" "),i("h5",{attrs:{id:"_3-3-4-1-auth-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-1-auth-errors"}},[e._v("#")]),e._v(" 3.3.4.1 Auth Errors")]),e._v(" "),i("p",[e._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),e._v(" "),i("ul",[i("li",[e._v("🔴 Accessing this route without the "),i("code",[e._v("Authorization")]),e._v(" header returns a "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),i("li",[e._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),i("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),i("h2",{attrs:{id:"_4-technical-details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),i("h3",{attrs:{id:"_4-1-triggering-documents-re-indexing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-triggering-documents-re-indexing"}},[e._v("#")]),e._v(" 4.1. Triggering Documents Re-Indexing")]),e._v(" "),i("p",[e._v("Meilisearch favors search speed and makes a trade-off on indexing speed by computing internal data structures to get search results as fast as possible.")]),e._v(" "),i("p",[e._v("Modifying this index setting cause documents to be re-indexed.")])])}),[],!1,null,null,null);t.default=n.exports}}]);