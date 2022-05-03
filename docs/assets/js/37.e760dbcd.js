(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{461:function(e,t,r){"use strict";r.r(t);var i=r(62),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("ul",[r("li",[e._v("Title: Search API")]),e._v(" "),r("li",[e._v("Start Date: 2022-02-27")])]),e._v(" "),r("h1",{attrs:{id:"search-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#search-api"}},[e._v("#")]),e._v(" Search API")]),e._v(" "),r("h2",{attrs:{id:"_1-functional-specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-functional-specification"}},[e._v("#")]),e._v(" 1. Functional Specification")]),e._v(" "),r("h3",{attrs:{id:"_1-1-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-summary"}},[e._v("#")]),e._v(" 1.1. Summary")]),e._v(" "),r("p",[e._v("The search endpoints permit to retrieve documents within an index that are the most relevant given a set of parameters forming a search query.")]),e._v(" "),r("h3",{attrs:{id:"_1-2-explanation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-explanation"}},[e._v("#")]),e._v(" 1.2. Explanation")]),e._v(" "),r("p",[e._v("Meilisearch exposes 2 routes to perform searches:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("GET "),r("code",[e._v("indexes/:index_uid/search")])])]),e._v(" "),r("li",[r("p",[e._v("POST "),r("code",[e._v("indexes/:index_uid/search")])])]),e._v(" "),r("li",[r("p",[e._v("🔴 If the index does not exist, the API returns an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)])]),e._v(" "),r("p",[e._v("If the instance is secured by a master-key, the auth layer will return the following errors:")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Accessing these routes without the "),r("code",[e._v("Authorization")]),e._v(" header returns a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),r("p",[r("code",[e._v("POST")]),e._v(" HTTP verb errors:")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Omitting Content-Type header returns a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending an empty Content-Type returns an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending a different Content-Type than "),r("code",[e._v("application/json")]),e._v(" returns an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending an empty payload returns a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending an invalid JSON payload returns a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1)]),e._v(" "),r("h4",{attrs:{id:"_1-2-1-search-payload-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-search-payload-parameters"}},[e._v("#")]),e._v(" 1.2.1. Search payload parameters")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Field")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Required")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("q")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("filter")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("sort")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("facetsDistribution")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("limit")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("offset")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("attributesToRetrieve")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("attributesToHighlight")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("attributesToCrop")]),e._v(" "),r("td",[e._v("Array of String - String")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("cropLength")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("matches")]),e._v(" "),r("td",[e._v("Boolean")]),e._v(" "),r("td",[e._v("False")])])])]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-1-q"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-1-q"}},[e._v("#")]),e._v(" 1.2.1.1 "),r("code",[e._v("q")])]),e._v(" "),r("ul",[r("li",[e._v("Type: String")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("null")])])]),e._v(" "),r("p",[r("code",[e._v("q")]),e._v(" contains the terms to search within the index documents.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("String")]),e._v(" or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("q")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("When q isn't specified, Meilisearch performs a "),r("strong",[e._v("placeholder search")]),e._v(". A placeholder search returns all searchable documents in an index, modified by any search parameters used and sorted by that index's custom ranking rules. If the index has no sort or custom ranking rules, the results are returned in the order of their internal database position.")])]),e._v(" "),r("blockquote",[r("p",[e._v("Meilisearch only considers the first ten words of any given search query to deliver a fast search-as-you-type experience.")])]),e._v(" "),r("blockquote",[r("p",[r("code",[e._v("q")]),e._v(" supports "),r("RouterLink",{attrs:{to:"/specifications/text/0043-phrase-query.html"}},[e._v("Phrase Query")]),e._v(" expression.")],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-2-filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-2-filter"}},[e._v("#")]),e._v(" 1.2.1.2 "),r("code",[e._v("filter")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array of String (POST) | String (POST/GET)")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[r("code",[e._v("filter")]),e._v(" contains a filter expression written as a string or an array of strings. It permits to refine search results.")]),e._v(" "),r("p",[e._v("Attributes used as filter criteria must be added to the "),r("code",[e._v("filterableAttributes")]),e._v(" list of an index settings.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array of String")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("filter")]),e._v(" will return an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_filter"}},[e._v("invalid_filter")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending an invalid syntax for "),r("code",[e._v("filter")]),e._v(" will return an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_filter"}},[e._v("invalid_filter")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending a field not defined as a "),r("code",[e._v("filterableAttributes")]),e._v(" for "),r("code",[e._v("filter")]),e._v(" will return an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_filter"}},[e._v("invalid_filter")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0027-filter-and-facet-behavior.html"}},[e._v("Filter And Facet Behavior")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-3-sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-3-sort"}},[e._v("#")]),e._v(" 1.2.1.3 "),r("code",[e._v("sort")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array of String (POST) | String (GET)")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[r("code",[e._v("sort")]),e._v(" contains a sort expression written as a string or an array of strings. It permits to sorts search results at query time according to the specified attributes and indicated order.")]),e._v(" "),r("p",[e._v("Attributes used a sort criteria must be added to the `sortableAttributes list of an index settings.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array of String")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("sort")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending an invalid syntax for "),r("code",[e._v("sort")]),e._v(" will return an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_sort"}},[e._v("invalid_sort")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending a field not defined as a "),r("code",[e._v("sortableAttributes")]),e._v(" for "),r("code",[e._v("sort")]),e._v(" will return an "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_sort"}},[e._v("invalid_sort")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0055-sort.html"}},[e._v("Sort")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-4-facetsdistribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-4-facetsdistribution"}},[e._v("#")]),e._v(" 1.2.1.4 "),r("code",[e._v("facetsDistribution")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array of String (POST) | String (GET)")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[r("code",[e._v("facetsDistribution")]),e._v(" permits to specify facets to be computed for the current search query.")]),e._v(" "),r("p",[e._v("It returns the number of documents matching the current search query for each given specified facet.")]),e._v(" "),r("p",[e._v("This parameter can take two values:")]),e._v(" "),r("ul",[r("li",[e._v("An array of attributes: "),r("code",[e._v('facetsDistribution=["attributeA", "attributeB", …]')])]),e._v(" "),r("li",[e._v("An asterisk "),r("code",[e._v('"*"')]),e._v(" — this will return a count for all facets present in "),r("code",[e._v("filterableAttributes")])])]),e._v(" "),r("p",[e._v("Attributes used in "),r("code",[e._v("facetsDistribution")]),e._v(" must be added to the "),r("code",[e._v("filterableAttributes")]),e._v(" list of an index settings.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array of String")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("facetsDistribution")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1),e._v(" "),r("li",[e._v("🔴 Sending a field not defined as a "),r("code",[e._v("filterableAttributes")]),e._v(" for "),r("code",[e._v("facetsDistribution")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0027-filter-and-facet-behavior.html"}},[e._v("Filter And Facet Behavior")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-5-limit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-5-limit"}},[e._v("#")]),e._v(" 1.2.1.5 "),r("code",[e._v("limit")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("20")])])]),e._v(" "),r("p",[e._v("Sets the maximum number of documents to be returned by the current search query.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Integer")]),e._v(" or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("limit")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-6-offset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-6-offset"}},[e._v("#")]),e._v(" 1.2.1.6 "),r("code",[e._v("offset")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("0")])])]),e._v(" "),r("p",[e._v("Sets the starting point in the search results, effectively skipping over a given number of documents.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Integer")]),e._v(" or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("offset")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-7-attributestoretrieve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-7-attributestoretrieve"}},[e._v("#")]),e._v(" 1.2.1.7 "),r("code",[e._v("attributesToRetrieve")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array of String (POST) | String (GET)")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[e._v("Configures which attributes will be retrieved in the returned documents.")]),e._v(" "),r("p",[e._v("If no value is specified, "),r("code",[e._v("attributesToRetrieve")]),e._v(" uses the "),r("code",[e._v("displayedAttributes")]),e._v(" list, which by default contains all attributes found in the documents.")]),e._v(" "),r("blockquote",[r("p",[e._v("If an attribute has been removed from "),r("code",[e._v("displayedAttributes")]),e._v(" index settings, "),r("code",[e._v("attributesToRetrieve")]),e._v(" will silently ignore it and the field will not appear in the returned documents.")])]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array of String")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("attributesToRetrieve")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-8-attributestohighlight"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-8-attributestohighlight"}},[e._v("#")]),e._v(" 1.2.1.8 "),r("code",[e._v("attributesToHighlight")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array"),r("a",{attrs:{href:"POST"}},[e._v("String")]),e._v("|String(GET)")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[e._v("Highlights matching query terms in the specified attributes by enclosing them in "),r("code",[e._v("<em>")]),e._v(" tags.")]),e._v(" "),r("p",[e._v("When this parameter is set, returned documents include a "),r("code",[e._v("_formatted")]),e._v(" object containing the highlighted terms.")]),e._v(" "),r("p",[e._v("If "),r("code",[e._v('"*"')]),e._v(" is provided as a value: "),r("code",[e._v('attributesToHighlight=["*"]')]),e._v(" all the attributes present in "),r("code",[e._v("attributesToRetrieve")]),e._v(" will be assigned to "),r("code",[e._v("attributesToHighlight")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array[String]")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("attributesToHighlight")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0039-_formatted-field-behavior_.html"}},[e._v("_Formatted Field Behavior")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-9-attributestocrop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-9-attributestocrop"}},[e._v("#")]),e._v(" 1.2.1.9 "),r("code",[e._v("attributesToCrop")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array[String]|String")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("[]|null")])])]),e._v(" "),r("p",[e._v("Crops the selected attributes' values in the returned results to the length indicated by the "),r("code",[e._v("cropLength")]),e._v(" parameter.")]),e._v(" "),r("p",[e._v("When this parameter is set, returned documents include a "),r("code",[e._v("_formatted")]),e._v(" object containing the cropped terms.")]),e._v(" "),r("p",[e._v("Optionally, indicating a custom crop length for any of the listed attributes is possible: "),r("code",[e._v('attributesToCrop=["attributeNameA:25", "attributeNameB:150"]')]),e._v(". The custom crop length set in this way has priority over the "),r("code",[e._v("cropLength")]),e._v(" parameter.")]),e._v(" "),r("p",[e._v("Instead of supplying individual attributes, it is possible to provide "),r("code",[e._v('["*"]')]),e._v(" as a value: "),r("code",[e._v('attributesToCrop=["*"]')]),e._v(". This will crop the values of all attributes present in "),r("code",[e._v("attributesToRetrieve")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Array[String]")]),e._v("(POST), "),r("code",[e._v("String")]),e._v("(GET) or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("attributesToCrop")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0039-_formatted-field-behavior_.html"}},[e._v("_Formatted Field Behavior")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-10-croplength"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-10-croplength"}},[e._v("#")]),e._v(" 1.2.1.10 "),r("code",[e._v("cropLength")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("200")])])]),e._v(" "),r("p",[e._v("Configures the number of characters to keep on each side of the matching query term when using the "),r("code",[e._v("attributesToCrop")]),e._v(" parameter.")]),e._v(" "),r("p",[e._v("If "),r("code",[e._v("attributesToCrop")]),e._v(" is not configured, "),r("code",[e._v("cropLength")]),e._v(" has no effect on the returned results.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Integer")]),e._v(" or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("cropLength")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-1-11-matches"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-11-matches"}},[e._v("#")]),e._v(" 1.2.1.11 "),r("code",[e._v("matches")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Boolean")]),e._v(" "),r("li",[e._v("Required: False")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("Adds a "),r("code",[e._v("_matchesInfo")]),e._v(" object to the search response that contains the location of each occurrence of queried terms across all fields. This is useful when more control is needed than offered by the built-in highlighting/cropping features.")]),e._v(" "),r("ul",[r("li",[e._v("🔴 Sending a value with a different type than "),r("code",[e._v("Boolean")]),e._v(" or "),r("code",[e._v("null")]),e._v(" for "),r("code",[e._v("matches")]),e._v(" will return a "),r("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),r("h4",{attrs:{id:"_1-2-2-search-response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-search-response"}},[e._v("#")]),e._v(" 1.2.2. Search response")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Field")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Required")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("hits")]),e._v(" "),r("td",[e._v("Array[Hit]")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("limit")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("offset")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("nbHits")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("exhaustiveNbHits")]),e._v(" "),r("td",[e._v("Boolean")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("facetsDistribution")]),e._v(" "),r("td",[e._v("Object")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("exhaustiveFacetsCount")]),e._v(" "),r("td",[e._v("Boolean")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("processingTimeMs")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("True")])]),e._v(" "),r("tr",[r("td",[e._v("query")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("True")])])])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-1-hits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-1-hits"}},[e._v("#")]),e._v(" 1.2.2.1 "),r("code",[e._v("hits")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Array[Hit]")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Results of the query as an array of documents.")]),e._v(" "),r("blockquote",[r("p",[e._v("The search parameters "),r("code",[e._v("attributesToRetrieve")]),e._v(" influence the returned payload for a document as a search result. See 1.2.1.7 "),r("code",[e._v("attributesToRetrieve")]),e._v(" section.")])]),e._v(" "),r("blockquote",[r("p",[e._v("A Hit object that represents a document within the search results can host special attributes. See 1.2.2.9 "),r("code",[e._v("hits")]),e._v(" special fields section.")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-2-limit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-2-limit"}},[e._v("#")]),e._v(" 1.2.2.2 "),r("code",[e._v("limit")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Gives the "),r("code",[e._v("limit")]),e._v(" search parameter used for the query.")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.5 "),r("code",[e._v("limit")]),e._v(" section.")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-3-offset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-3-offset"}},[e._v("#")]),e._v(" 1.2.2.3 "),r("code",[e._v("offset")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Gives the "),r("code",[e._v("offset")]),e._v(" search parameter used for the query.")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.6 "),r("code",[e._v("offset")]),e._v(" section.")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-4-nbhits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-4-nbhits"}},[e._v("#")]),e._v(" 1.2.2.4 "),r("code",[e._v("nbHits")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Returns the total number of candidates for the search query.")]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-5-exhaustivenbhits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-5-exhaustivenbhits"}},[e._v("#")]),e._v(" 1.2.2.5 "),r("code",[e._v("exhaustiveNbHits")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Boolean")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Whether "),r("code",[e._v("nbHits")]),e._v(" is exhaustive.")]),e._v(" "),r("blockquote",[r("p",[e._v("Always return "),r("code",[e._v("false")]),e._v(".")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-6-facetsdistribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-6-facetsdistribution"}},[e._v("#")]),e._v(" 1.2.2.6 "),r("code",[e._v("facetsDistribution")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Object")]),e._v(" "),r("li",[e._v("Required: False")])]),e._v(" "),r("p",[e._v("Added to the search response when "),r("code",[e._v("facetsDistribution")]),e._v(" is set for a search query. It contains the number of remaining candidates for each specified facet in the "),r("code",[e._v("facetsDistribution")]),e._v(" search parameter.")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.4 "),r("code",[e._v("facetsDistribution")]),e._v(" section.\nSee "),r("RouterLink",{attrs:{to:"/specifications/text/0027-filter-and-facet-behavior.html"}},[e._v("Filter And Facet Behavior")])],1)]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-7-exhaustivefacetscount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-7-exhaustivefacetscount"}},[e._v("#")]),e._v(" 1.2.2.7 "),r("code",[e._v("exhaustiveFacetsCount")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Boolean")]),e._v(" "),r("li",[e._v("Required: False")])]),e._v(" "),r("p",[e._v("Whether "),r("code",[e._v("facetsDistribution")]),e._v(" count is exhaustive. The field "),r("code",[e._v("exhaustiveFacetsCount")]),e._v(" is added when "),r("code",[e._v("facetsDistribution")]),e._v(" is set as a search parameter.")]),e._v(" "),r("blockquote",[r("p",[e._v("Always returns "),r("code",[e._v("false")]),e._v(".")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-7-processingtimems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-7-processingtimems"}},[e._v("#")]),e._v(" 1.2.2.7 "),r("code",[e._v("processingTimeMs")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: True")])]),e._v(" "),r("p",[e._v("Processing time of the search query in milliseconds.")]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-8-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-8-query"}},[e._v("#")]),e._v(" 1.2.2.8 "),r("code",[e._v("query")])]),e._v(" "),r("ul",[r("li",[e._v("Type: String")]),e._v(" "),r("li",[e._v("Required: True")]),e._v(" "),r("li",[e._v("Default: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("Query originating the response. Equals to the "),r("code",[e._v("q")]),e._v(" search parameter.")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.1 "),r("code",[e._v("q")]),e._v(" section.")])]),e._v(" "),r("h5",{attrs:{id:"_1-2-2-9-hits-special-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-9-hits-special-fields"}},[e._v("#")]),e._v(" 1.2.2.9 "),r("code",[e._v("hits")]),e._v(" special fields")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Field")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Required")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("_geoDistance")]),e._v(" "),r("td",[e._v("Integer")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("_formatted")]),e._v(" "),r("td",[e._v("Object")]),e._v(" "),r("td",[e._v("False")])]),e._v(" "),r("tr",[r("td",[e._v("_matchesInfo")]),e._v(" "),r("td",[e._v("Object")]),e._v(" "),r("td",[e._v("False")])])])]),e._v(" "),r("h6",{attrs:{id:"_1-2-2-9-1-geodistance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-9-1-geodistance"}},[e._v("#")]),e._v(" 1.2.2.9.1 "),r("code",[e._v("_geoDistance")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Integer")]),e._v(" "),r("li",[e._v("Required: False")])]),e._v(" "),r("p",[e._v("Search queries using "),r("code",[e._v("_geoPoint")]),e._v(" will always include a "),r("code",[e._v("_geoDistance")]),e._v(" field containing the distance in meters between the document location and the "),r("code",[e._v("_geoPoint")]),e._v(".")]),e._v(" "),r("blockquote",[r("p",[e._v("See "),r("RouterLink",{attrs:{to:"/specifications/text/0059-geo-search.html"}},[e._v("GeoSearch")])],1)]),e._v(" "),r("h6",{attrs:{id:"_1-2-2-9-2-formatted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-9-2-formatted"}},[e._v("#")]),e._v(" 1.2.2.9.2 "),r("code",[e._v("_formatted")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Object")]),e._v(" "),r("li",[e._v("Required: False")])]),e._v(" "),r("p",[e._v("Object containing the cropped/highlighted values of the fields specified in "),r("code",[e._v("attributesToHighlight")]),e._v(" or/and "),r("code",[e._v("attributesToCrop")]),e._v(".")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.8 "),r("code",[e._v("attributesToHighlight")]),e._v(" section and 1.2.1.9 "),r("code",[e._v("attributesToCrop")]),e._v(" section.")])]),e._v(" "),r("h6",{attrs:{id:"_1-2-2-9-3-matchesinfo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-9-3-matchesinfo"}},[e._v("#")]),e._v(" 1.2.2.9.3 "),r("code",[e._v("_matchesInfo")])]),e._v(" "),r("ul",[r("li",[e._v("Type: Object")]),e._v(" "),r("li",[e._v("Required: False")])]),e._v(" "),r("p",[e._v("Contains the location of each occurrence of queried terms across all fields. The "),r("code",[e._v("_matchesInfo")]),e._v(" object is added to a document when "),r("code",[e._v("matches")]),e._v(" search parameter is specified to true.")]),e._v(" "),r("p",[e._v("The beginning of a matching term within a field is indicated by start, and its length by length.")]),e._v(" "),r("blockquote",[r("p",[e._v("See 1.2.1.11 "),r("code",[e._v("matches")]),e._v(" section.")])]),e._v(" "),r("h2",{attrs:{id:"_2-technical-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-details"}},[e._v("#")]),e._v(" 2. Technical Details")]),e._v(" "),r("p",[e._v("n/a")]),e._v(" "),r("h2",{attrs:{id:"_3-future-possibilities"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[e._v("#")]),e._v(" 3. Future Possibilities")]),e._v(" "),r("ul",[r("li",[e._v("Add dedicated errors to replace "),r("code",[e._v("bad_request")]),e._v(" error.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);