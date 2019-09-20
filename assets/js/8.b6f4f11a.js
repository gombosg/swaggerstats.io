(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("swagger-stats exposes all statistics via "),s("code",[t._v("/swagger-stats/stats")]),t._v(" API operation:")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("GET /swagger-stats/stats")])])]),t._v(" "),s("p",[t._v("If no parameters are specified, "),s("a",{attrs:{href:"#jsd-stats"}},[t._v("default statistics")]),t._v(" are returned")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"fields-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fields-parameter","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fields")]),t._v(" parameter")]),t._v(" "),s("p",[t._v("You may pass parameter "),s("code",[t._v("fields")]),t._v(" to /swagger-stats/stats call to specify which additional statistic fields should be returned.")]),t._v(" "),s("p",[s("code",[t._v("fields")]),t._v(" parameter passed in query string. Multiple values can be specified for "),s("code",[t._v("fields")]),t._v(" paramer as an array.")]),t._v(" "),s("p",[t._v("Supported values for "),s("code",[t._v("fields")]),t._v(" parameter are:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("method")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Baseline Metrics per Requests Method")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("timeline")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Baseline Metrics collected for each 1 minute interval during last 60 minutes")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("lasterrors")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("request and response details for the last 100 errors (last 100 error responses)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("longestreq")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("request and response details for top 100 requests that took longest time to process (time to send response)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("apidefs")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("API definitions froim swagger specification")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("apistats")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Baseline Metrics per each API Operation. API operation is path and method combination from the swagger spec. Swagger specification is optional. swagger-stats will detect and monitor API operations based on express routes.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("apiop")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("API Operation parameters metrics: parameter passed count, mandatory parameter missing count (for API Operation parameters defined in swagger spec)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("errors")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('Count of responses per each error code, top "not found" resources, top "server error" resources')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("all")]),t._v(" or "),s("code",[t._v("*")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("all fields")])])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"path-and-method-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-and-method-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("method")]),t._v(" parameters")]),t._v(" "),s("p",[t._v("If you specified "),s("code",[t._v("apiop")]),t._v(" as one of the values of "),s("code",[t._v("fields")]),t._v(" parameter, you also need to pass parameters "),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("method")]),t._v(".\n"),s("code",[t._v("path")]),t._v(" and "),s("code",[t._v("method")]),t._v(" values define for which specific api operations statistics should be returned.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("method")]),t._v(" - API operation method, i.e. "),s("code",[t._v("GET")]),t._v(", "),s("code",[t._v("POST")]),t._v(" ...")]),t._v(" "),s("li",[s("code",[t._v("path")]),t._v(" - API operation path, such as "),s("code",[t._v("/v2/pet/{petId}")])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"get-statistics-via-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-statistics-via-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Get statistics via API")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl http://<your app host:port>/swagger-stats/stats\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"startts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1501647865959")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"all"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requests"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"responses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"info"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redirect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client_error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"server_error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("510")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avg_time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("72.85714285714286")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_req_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_req_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avg_req_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_res_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("692")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_res_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("510")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avg_res_clength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"req_rate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0734549915657108")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"err_rate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4600521392424475")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sys"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59768832")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"heapTotal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36700160")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"heapUsed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20081776")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"external"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5291923")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cpu"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swagger-stats-testapp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.90.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hostname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hostname"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br")])]),s("h3",{attrs:{id:"get-timeline-statistics-and-statistics-per-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-timeline-statistics-and-statistics-per-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Get timeline statistics and statistics per method:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl http://<host:port>/swagger-stats/stats?fields=method,timeline\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"get-statistics-statistics-for-api-operation-get-v2-pet-petid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-statistics-statistics-for-api-operation-get-v2-pet-petid","aria-hidden":"true"}},[t._v("#")]),t._v(" Get statistics statistics for API operation "),s("code",[t._v("GET /v2/pet/{petId}")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ curl http://<host:port>/swagger-stats/stats?fields=apiop&method=GET&path=/v2/pet/{petId}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"statistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statistics","aria-hidden":"true"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),s("a",{attrs:{name:"jsd-stats"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"stats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stats","aria-hidden":"true"}},[t._v("#")]),t._v(" stats")]),t._v(" "),s("blockquote",[s("p",[t._v("Stats object is returned by /stats API. It always inlcudes main properties ("),s("code",[t._v("startts")]),t._v(", "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("version")]),t._v(", "),s("code",[t._v("hostname")]),t._v(", "),s("code",[t._v("ip")]),t._v("), "),s("code",[t._v("all")]),t._v(" statistics, and `sys' statistics. Depending on parameters passed to /stats API call, additional statistics properties will be included as well.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("startts")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp when collection of statistic started - application start time")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("name")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Name")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("version")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Version")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("hostname")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("ip")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IP address")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("all")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#jsd-baselinestats"}},[t._v("baselinestats")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("baselinestats object")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("sys")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#jsd-sysstats"}},[t._v("sysstats")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("sysstats object")])])])]),t._v(" "),s("a",{attrs:{name:"jsd-baselinestats"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"baselinestats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baselinestats","aria-hidden":"true"}},[t._v("#")]),t._v(" baselinestats")]),t._v(" "),s("blockquote",[s("p",[t._v("Baseline statistics object. Provides core metrics on request-reponse processing. Baseline statistics are calculated in in several different contexts.")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("all")]),t._v(" stats contains total values for all requests and responses")]),t._v(" "),s("li",[t._v("In "),s("code",[t._v("timeline")]),t._v(", each bucket contains baseline stats calculated for a time interval")]),t._v(" "),s("li",[t._v("In "),s("code",[t._v("method")]),t._v(" baseline stats are calculated per each request method")]),t._v(" "),s("li",[s("code",[t._v("apistats")]),t._v(" provides baseline stats per each API Operation")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("requests")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of requests received")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("responses")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of responses sent")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("errors")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of error responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("info")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of informational responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("success")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of success responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("redirect")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of redirection responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("client_error")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of client error responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("server_error")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of server error responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("total_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sum of total processing time (from request received to response finished)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("max_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum observed processed time")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("avg_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Average processing time")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("total_req_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total (Sum) of Content Lengths of received requests")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("max_req_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum observed Content length in received requests")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("avg_req_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Average Content Length in received requests")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("total_res_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Total (Sum) of Content Lengths of sent responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("max_res_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum observed Content Length in sent responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("avg_res_clength")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Average Content Length in sent responses")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("req_rate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Request Rate")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("err_rate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Error Rate")])])])]),t._v(" "),s("a",{attrs:{name:"jsd-sysstats"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"sysstats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sysstats","aria-hidden":"true"}},[t._v("#")]),t._v(" sysstats")]),t._v(" "),s("blockquote",[s("p",[t._v("System statistics - memory usage and CPU usage of node process. As returned by process.memoryUsage() and process.cpuUsage().")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("rss")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Usage - Resident Set Size, as returned by process.memoryUsage()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("heapTotal")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Usage - Total Size of the Heap, as returned by process.memoryUsage()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("heapUsed")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Usage - Heap actually Used, as returned by process.memoryUsage()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("external")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Usage - External memory, as returned by process.memoryUsage()")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("cpu")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("CPU Usage % - as returned by process.cpuUsage(), calculated per "),s("a",{attrs:{href:"https://github.com/nodejs/node/pull/6157",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nodejs/node/pull/6157"),s("OutboundLink")],1)])])])])])},[],!1,null,null,null);e.default=r.exports}}]);