(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{448:function(e,t,a){"use strict";a.r(t);var i=a(62),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ul",[a("li",[e._v("Title: Paginated Search")]),e._v(" "),a("li",[e._v("Start Date: 2021-05-25")]),e._v(" "),a("li",[e._v("Specification PR: "),a("a",{attrs:{href:"https://github.com/meilisearch/specifications/pull/42",target:"_blank",rel:"noopener noreferrer"}},[e._v("#42"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("MeiliSearch Tracking-Issues:")])]),e._v(" "),a("h1",{attrs:{id:"paginated-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paginated-search"}},[e._v("#")]),e._v(" Paginated Search")]),e._v(" "),a("h2",{attrs:{id:"_1-feature-description-and-interaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-feature-description-and-interaction"}},[e._v("#")]),e._v(" 1. Feature Description and Interaction")]),e._v(" "),a("h3",{attrs:{id:"i-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-summary"}},[e._v("#")]),e._v(" I. Summary")]),e._v(" "),a("p",[e._v("Pagination allows the content to be viewed in the form of a sequence in order to facilitate the browsing of its content by not overloading the number of elements to be viewed for the user. Pagination also has the advantage of easily providing the total number of items that remain to be traversed by not overloading the network with all the content that can be loaded.")]),e._v(" "),a("h3",{attrs:{id:"ii-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-motivation"}},[e._v("#")]),e._v(" II. Motivation")]),e._v(" "),a("p",[e._v("It will make it possible to rule on the subject of the use and behavior of the engine with regard to the pagination of search results for which we have a lot of user feedback and questions about its behavior.")]),e._v(" "),a("p",[e._v("Naturally, our users rely on "),a("code",[e._v("nbHits")]),e._v(" to determine the number of possible pages. However, in the context of the search endpoint and the internal functioning of the engine dedicated to a fast and accurate search, this number of results represents a number of possible candidates for the search result. This number is not exhaustive to avoid a loss in performance.")]),e._v(" "),a("p",[e._v("Developers who want to implement a finite paged search are therefore faced with a hazardous situation. For example, it is possible that by clicking directly on the last page the search will not return any results. This can be explained by the behavior of the search engine which finally finds no relevant candidate to return for this page.")]),e._v(" "),a("p",[e._v("The integration team regularly implements a workaround to propose a finite search by calculating on the client side the number of pages by scanning a maximum of documents on a first API call. This is not the most efficient method. In addition, we often have developers who do not use our SDKs for various reasons who do not understand the behavior of the engine when it comes to getting paged results.")]),e._v(" "),a("h3",{attrs:{id:"iii-additional-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-additional-materials"}},[e._v("#")]),e._v(" III. Additional Materials")]),e._v(" "),a("h5",{attrs:{id:"algolia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algolia"}},[e._v("#")]),e._v(" Algolia")]),e._v(" "),a("p",[e._v("Algolia offers two ways to find segmented documents at query time.")]),e._v(" "),a("p",[e._v("The first method is to use a standard pagination. The "),a("code",[e._v("page")]),e._v(" parameter is given to request the results page from the search engine at search time.")]),e._v(" "),a("p",[e._v("The second method use "),a("code",[e._v("offset")]),e._v(" and "),a("code",[e._v("length")]),e._v(" parameters to request specific record subsets outside of a page window.")]),e._v(" "),a("p",[e._v("At indexing time, Algolia allows to set up 2 default parameters:")]),e._v(" "),a("p",[a("code",[e._v("hitsPerPage")]),e._v(" - the number of hits returned per page. Note that it can be set a query time to tweak page size. By default, the engine set it to "),a("code",[e._v("20")]),e._v(". The maximum authorized value is "),a("code",[e._v("1000")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("paginationLimitedTo")]),e._v(" - controls the overall number of hits you can potentially retrieve for a given query. By default, "),a("code",[e._v("paginationLimitedTo")]),e._v(" is set to "),a("code",[e._v("1000")]),e._v(" but can be overrided with a custom value.")]),e._v(" "),a("h6",{attrs:{id:"about-paginationlimitedto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-paginationlimitedto"}},[e._v("#")]),e._v(" About "),a("code",[e._v("paginationLimitedTo")])]),e._v(" "),a("ul",[a("li",[e._v("It control the maximum number of hits accessible via pagination. E.g. if set to 1000, the user can't retrieve more results than 1000 using pagination.")]),e._v(" "),a("li",[e._v("It works with the "),a("code",[e._v("page")]),e._v(" and "),a("code",[e._v("hitsPerPage")]),e._v(" settings to establish the full pagination logic.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("1000")]),e._v(" default value is set to guarantee good performance.")]),e._v(" "),a("li",[e._v("Algolia recommend to keep the default value to guarantee excellent performance. Note that, they also warn users on the fact that increasing the pagination limit will have a direct impact on the performance of search queries. Thus, a too high value will also make it very easy for anyone to scrappe an entire dataset so it so it also poses security problems.")])]),e._v(" "),a("p",[e._v("E.g. Sample results")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  [...],\n  "page": 0,\n  "nbHits": 40,\n  "nbPages": 2,\n  "hitsPerPage": 20,\n  "exhaustiveNbHits": true\n}\n')])])]),a("h6",{attrs:{id:"about-exhaustivenbhits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-exhaustivenbhits"}},[e._v("#")]),e._v(" About "),a("code",[e._v("exhaustiveNbHits")])]),e._v(" "),a("p",[e._v('As the Algolia documentation say : "If possible, Algolia will return an accurate number of total hits. However, there are some cases where performance needs to be favored over exhaustivity. If a query returns a huge number of results, the engine will approximate the hits count to avoid having to scan the full results set. This approximation has been put in place to protect other search and indexing operations. As an alternative, you can leverage the boolean exhaustiveNbHits to either hide or tweak the display of the hits count in this case. You can also use the frequent occurrence of this value to consider fine-tuning your data and index settings to improve performance."')]),e._v(" "),a("h3",{attrs:{id:"iv-explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iv-explanation"}},[e._v("#")]),e._v(" IV. Explanation")]),e._v(" "),a("p",[e._v("We don't necessarily want to push and support finite pagination for the search endpoint. However, we have determined that many developers naturally implement this type of paging and we want to limit support requests for it. We have therefore made some choices that will be implemented in our SDKs to facilitate their use on this use-case and avoid the implementation of the current workaround.")]),e._v(" "),a("p",[e._v("Our solution will not be officially documented at first, it will evolve in the future depending on its viability.")]),e._v(" "),a("p",[e._v("The solution consists in having a hidden parameter that will ask the engine to force the exhaustiveness of the number of results in order to be able to build a finite pagination on a limited set of results. This limit will be implemented within the engine and will be brought to evolve according to the returns, performances. We could imagine one day to open an option to increase or decrease this limit to the users in the way of Algolia.")]),e._v(" "),a("p",[e._v("To make it short, the finished pagination will be an experimental feature that will evolve.")]),e._v(" "),a("h5",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("h6",{attrs:{id:"get-post-search-api-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-post-search-api-endpoint"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://docs.meilisearch.com/reference/api/search.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GET/POST Search API endpoint"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("✅ Accept a "),a("code",[e._v("forceExhaustivity")]),e._v(" boolean parameter to strictly ensure that the engine will return an exhaustive "),a("code",[e._v("nbHits")]),e._v(" value.")]),e._v(" "),a("li",[e._v("✅ Add a constant in the core to have a limited number of documents when "),a("code",[e._v("forceExhaustivity")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(". We will start with a value of "),a("code",[e._v("1000")]),e._v(". This value will evolve according to our analysis. In the future, if we decide to support this feature officially, we could open it via the API so that the user can change the behavior according to his needs with the consequences that it implies on the performances. "),a("code",[e._v("exhaustivityLimit")]),e._v(" is a proposal for this constant.")]),e._v(" "),a("li",[e._v("✅ "),a("code",[e._v("exhaustiveNbHits")]),e._v(" should be set to "),a("code",[e._v("true")]),e._v(" when "),a("code",[e._v("forceExhaustivity")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(". "),a("code",[e._v("exhaustiveNbHits")]),e._v(" being all the time at false currently, this will be the way to make it dynamic and keep it consistent.")])]),e._v(" "),a("h3",{attrs:{id:"v-impact-on-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-impact-on-documentation"}},[e._v("#")]),e._v(" V. Impact on Documentation")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("paginateSearch")]),e._v(" will be documented in SDKS docs (Code Sample, methods behavior etc). The limit of "),a("code",[e._v("1000")]),e._v(" exhaustives number should be mentionned. We should also explain that it is due to performance reasons to keep fast search performance.")]),e._v(" "),a("li",[e._v("Besides that we will write a blog post about our vision for a search experience. It should be understood that we prefer to push a non-finite search like an infinite scroll rather than a finite search.")])]),e._v(" "),a("h3",{attrs:{id:"vi-impact-on-sdks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi-impact-on-sdks"}},[e._v("#")]),e._v(" VI. Impact on SDKs")]),e._v(" "),a("ul",[a("li",[e._v("The official SDKs will implement a new method "),a("code",[e._v("paginateSearch")]),e._v(" that will internally send this "),a("code",[e._v("forceExhaustivity")]),e._v(" parameter to "),a("code",[e._v("true")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"_2-technical-aspects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-aspects"}},[e._v("#")]),e._v(" 2. Technical Aspects")]),e._v(" "),a("h3",{attrs:{id:"i-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-analytics"}},[e._v("#")]),e._v(" I. Analytics")]),e._v(" "),a("ul",[a("li",[e._v("We will track search endpoint to distribute usage between a paged search and a non-paged search. It is sufficient to track the usage of "),a("code",[e._v("forceExhaustivity")]),e._v(" to do this analysis.")])]),e._v(" "),a("h2",{attrs:{id:"_3-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[e._v("#")]),e._v(" 3. Future Possibilities")]),e._v(" "),a("ul",[a("li",[e._v("Open "),a("code",[e._v("forceExhaustivity")]),e._v(" in official API documentation.")]),e._v(" "),a("li",[e._v("Allow users to configure the "),a("code",[e._v("exhaustivityLimit")]),e._v(" in settings to be used when "),a("code",[e._v("forceExhaustivity")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);