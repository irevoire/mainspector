(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{436:function(e,t,i){"use strict";i.r(t);var a=i(62),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"specifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[e._v("#")]),e._v(" Specifications")]),e._v(" "),i("p",[e._v("This repository provides a template for creating "),i("strong",[e._v("feature specifications")]),e._v(" for Meilisearch. A feature specification is a written description of a feature that serves as a basis for development, design, and inter-team synchronization.")]),e._v(" "),i("p",[e._v("A "),i("strong",[e._v("Merged specification")]),e._v(" represents a Meilisearch feature that is implemented or ready to be.")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"specification-workflow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification-workflow"}},[e._v("#")]),e._v(" Specification Workflow")]),e._v(" "),i("p",[e._v("When a new feature or product is to be developed, a new pull request is created, and contributors are invited to discuss its content and propose suggestions. The goal of a feature specification is to define the expected behavior on a high level and point out corner cases that need to be addressed.")]),e._v(" "),i("p",[e._v("The person in charge of the PR (the owner) is the person assigned to the PR. This allows for changing ownership. When the PR assignee changes, both new and old assignees should be notified.")]),e._v(" "),i("p",[e._v("Meilisearch's feature specifications flow is made up of 5 states, described below.")]),e._v(" "),i("h3",{attrs:{id:"introduction-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction-state"}},[e._v("#")]),e._v(" Introduction State")]),e._v(" "),i("p",[e._v("To start a new specification, it is recommended to write the first draft by filling in only the "),i("code",[e._v("Summary")]),e._v(" and "),i("code",[e._v("Motivation")]),e._v(" parts.")]),e._v(" "),i("p",[e._v("The name of the spec file must follow the pattern: "),i("code",[e._v("PR_number-feature-name.md")]),e._v(". After the pull request creation, the owner should update the specification filename. For example, if PR number 12 is about facetting, its spec will be named "),i("code",[e._v("0012-facetting.md")]),e._v(".")]),e._v(" "),i("blockquote",[i("p",[e._v("Note that a pull request not strictly dealing about a specification conception will be tagged as "),i("code",[e._v("Not A Spec")]),e._v(".")])]),e._v(" "),i("h3",{attrs:{id:"draft-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#draft-state"}},[e._v("#")]),e._v(" Draft State")]),e._v(" "),i("p",[e._v("Once the file is created with the two parts, "),i("code",[e._v("Summary")]),e._v(" and "),i("code",[e._v("Motivation")]),e._v(" filled in. It is time to create a draft PR. The PR should remain in draft state until the content is, according to the author, ready for comments. However, outsiders can make some recommendations, but these are more in the spirit of helping rather than suggesting changes.")]),e._v(" "),i("h3",{attrs:{id:"open-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#open-state"}},[e._v("#")]),e._v(" Open State")]),e._v(" "),i("p",[e._v("Once the specification is ready for comments in the owner's eyes, the owner can then switch the PR to open. At that time, it can be commented on, modified, challenged by these peers. If there is the slightest friction during this process, a discussion will be recommended offline within Meilisearch. The PR owner will organize this discussion, and at the end of this interview, the owner will make any necessary changes.")]),e._v(" "),i("p",[e._v("At this step, the PR should be primarily tagged as "),i("code",[e._v("In Progress")]),e._v(".")]),e._v(" "),i("p",[e._v("Note that if the pull request does not satisfy Open State conditions it will go back to the previous step above ("),i("em",[i("strong",[e._v("Draft State")])]),e._v(").")]),e._v(" "),i("h3",{attrs:{id:"review-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#review-state"}},[e._v("#")]),e._v(" Review State")]),e._v(" "),i("p",[e._v("The PR should now be tagged as "),i("code",[e._v("RFR (Ready For Review)")]),e._v(" to enter this stage.")]),e._v(" "),i("p",[e._v("To validate and merge the PR, it must be validated by at least three people.")]),e._v(" "),i("ul",[i("li",[e._v("One person from the Integration team (preferably @curquiza).")]),e._v(" "),i("li",[e._v("One person from the Core team (preferably @Kerollmops).")]),e._v(" "),i("li",[e._v("One person from the DevRel team (preferably the person in charge of the documentation).")])]),e._v(" "),i("p",[e._v("Note that if the specification does not satisfy the merging conditions, it will go back to the previous step above ("),i("em",[i("strong",[e._v("Open State")])]),e._v(") since it's lacking some pieces of information in the reviewer's eyes.")]),e._v(" "),i("h3",{attrs:{id:"merge-state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#merge-state"}},[e._v("#")]),e._v(" Merge State")]),e._v(" "),i("p",[e._v("The differents tracking-issues could be created on concerned repositories.")]),e._v(" "),i("p",[e._v("Created issues should:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Spec Related")]),e._v(" label has to be added to the issues.")]),e._v(" "),i("li",[e._v("Issues have to mention the spec in their description.")]),e._v(" "),i("li",[e._v("Issues must absolutely link to the PRs that resolve the spec, so that we can easily track them.")])]),e._v(" "),i("p",[e._v("In order to keep track of technical changes concerning the specification, delivery team should update the "),i("code",[e._v("Meilisearch Tracking-issues")]),e._v(" part of the specification.")]),e._v(" "),i("p",[e._v("Once it's done, the specification is accepted and merged to the main branch.")]),e._v(" "),i("h2",{attrs:{id:"specification-revision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification-revision"}},[e._v("#")]),e._v(" Specification Revision")]),e._v(" "),i("p",[e._v("Any Meilisearch's specification can change over time due to diverse factors. Sometimes related to change made on another specification concerning core engine code that could impact it, or simply product enhancement.")]),e._v(" "),i("p",[e._v("In this precise case, a new PR is created and should follow the specification workflow described above.")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"specification-description-and-interaction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification-description-and-interaction"}},[e._v("#")]),e._v(" Specification Description and Interaction")]),e._v(" "),i("p",[e._v("Meilisearch's feature specifications are made up of three sections, described below.")]),e._v(" "),i("h3",{attrs:{id:"_1-functional-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-functional-specification"}},[e._v("#")]),e._v(" 1. Functional Specification")]),e._v(" "),i("p",[e._v("This first section gives a high level overview of the feature. It should avoid technical language so that it can be understood by a general audience (think user-level). It is broken into five sub-sections, which are as follows:")]),e._v(" "),i("h4",{attrs:{id:"i-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#i-summary"}},[e._v("#")]),e._v(" I. Summary")]),e._v(" "),i("p",[e._v('One paragraph explaining the feature from the perspective of a user, e.g. "When I do X I want Y to happen because Z". This paragraph describes the problem and solution simply, without going into detail.')]),e._v(" "),i("h4",{attrs:{id:"ii-motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ii-motivation"}},[e._v("#")]),e._v(" II. Motivation")]),e._v(" "),i("p",[e._v("Why develop this feature? What use cases does it support? What is the expected outcome? Add links to related issues and discussions.")]),e._v(" "),i("h4",{attrs:{id:"iii-additional-materials"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iii-additional-materials"}},[e._v("#")]),e._v(" III. Additional Materials")]),e._v(" "),i("p",[e._v("Discuss and include links to similar features in other tools or products. Share any concept art or visualizations that demonstrate what this proposal might look like in our search API (can be a screenshot of another tool, or a mockup made w/ dev tools). Consider any lessons that can be learned from outside implementations of the feature.")]),e._v(" "),i("p",[e._v("This section is intended to provide readers of your pull request with a fuller picture of the proposed feature by comparing it with similar features in other tools and offering visual aids. If you don't have any examples of similar features being implemented elsewhere, that is fine—your ideas are interesting to us, whether they are brand new or adaptations from other tools.")]),e._v(" "),i("h4",{attrs:{id:"iv-explanation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iv-explanation"}},[e._v("#")]),e._v(" IV. Explanation")]),e._v(" "),i("p",[e._v("Thoroughly explain your feature as if it was already implemented in Meilisearch and you were teaching another user how to use it. That generally means:")]),e._v(" "),i("ul",[i("li",[e._v("Introducing (and naming) any new concepts.")]),e._v(" "),i("li",[e._v("Explaining the feature largely through examples.")]),e._v(" "),i("li",[e._v("Noting the API for this feature, HTTP, CLI or config.")]),e._v(" "),i("li",[e._v("Explaining how the user should "),i("em",[e._v("think")]),e._v(" about the feature and how it will impact the way they use Meilisearch (provide concrete examples).")]),e._v(" "),i("li",[e._v("If applicable, provide sample error messages, deprecation warnings, or migration guidance.")])]),e._v(" "),i("p",[e._v("If the changes modify the HTTP API, provide a description of the method, URL, parameters, body, status code, errors, etc...")]),e._v(" "),i("p",[e._v("If it modifies the CLI, provide the env variable name, the argument name, and the description.")]),e._v(" "),i("p",[e._v("This section serves as a user-level guide and should resemble official documentation. Anything that the user may encounter while interacting with the feature should be presented here.")]),e._v(" "),i("h4",{attrs:{id:"v-impact-on-documentation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#v-impact-on-documentation"}},[e._v("#")]),e._v(" V. Impact on Documentation")]),e._v(" "),i("p",[e._v("If the feature requires additions or updates to the documentation, they should be noted here. It's the role of the documentation team to ensure this section of the feature specification is accurate.")]),e._v(" "),i("h4",{attrs:{id:"vi-impact-on-sdks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vi-impact-on-sdks"}},[e._v("#")]),e._v(" VI. Impact on SDKs")]),e._v(" "),i("p",[e._v("If the feature requires additions or updates to the SDks, they should be noted here. It's the role of the integration team to ensure this section of the feature specification is accurate.")]),e._v(" "),i("h3",{attrs:{id:"_2-technical-aspects"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-aspects"}},[e._v("#")]),e._v(" 2. Technical Aspects")]),e._v(" "),i("p",[e._v("This section of the feature specification document has a much narrower audience: the developer(s) that will implement the feature. Its goal is to discuss and clarify how the feature will be developed and implemented when its not a trivial concern.")]),e._v(" "),i("blockquote",[i("p",[e._v("Internal technical teams may use this part to keep track of technical brainstorms, related proto code or basecode examples to clear the technical details of the specification.")])]),e._v(" "),i("p",[e._v("At this time, the specification process is not enforcing a way to describe technical aspects. It can change in the future if we think that it is needed to ease the workflow of a specification creation.")]),e._v(" "),i("p",[e._v("When writing technical details, we recommend describing practical aspects of implementation, e.g. interfaces, potential code problems, or specific algorithmic choices.")]),e._v(" "),i("h3",{attrs:{id:"_3-future-possibilities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[e._v("#")]),e._v(" 3. Future Possibilities")]),e._v(" "),i("p",[e._v("This last section includes any related topics or features which are not currently in Meilisearch and will not be added at this time, but which may affect the proposed feature in the future.")])])}),[],!1,null,null,null);t.default=s.exports}}]);