(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("Pass options when initializing swagger-stats. The following options are supported:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Example Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Your Service Name. Defaults to hostname if not specified. Will be returned in stats as specified.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'myservice'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("version")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Your Service Version. Will be returned in stats as specified.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'1.0.0'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hostname")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname. Will attempt to detect if not provided")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'myhost.mydomain.com'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ip")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP Address. Will attempt to detect if not provided")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'127.0.0.1'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("swaggerSpec")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Swagger specification object. Should be pre-validated and with resolved references. Optional.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("swagger spec object")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("uriPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Base path for swagger-stats APIs."),a("br"),t._v("If specified, will be used to serve UI, stats and metrics like this:"),a("br"),a("code",[t._v("/{uriPath}/ui")]),t._v(", "),a("code",[t._v("/{uriPath}/stats")]),t._v(", "),a("code",[t._v("/{uriPath}/metrics")]),a("br"),t._v("If not specified, defaults to "),a("code",[t._v("/swagger-stats")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'/myservice'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("timelineBucketDuration")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of timeline bucket in milliseconds. Default: "),a("code",[t._v("60000")]),t._v(" (1min) making timeline 1 hour. Timeline always stores 60 last time buckets, with this option you may adjust timeline granularity and length.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("10000")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("durationBuckets")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Buckets for duration histogram metrics, in Milliseconds. Default:"),a("br"),a("code",[t._v("[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]")]),a("br"),t._v("The default buckets are tailored to broadly measure API response time.Most likely needs to be defined per app to account for application specifics.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("[25, 100, 500, 5000, 10000]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("requestSizeBuckets")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Buckets for request size histogram metric, in Bytes. Default:"),a("br"),a("code",[t._v("[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]")]),a("br"),t._v("The default buckets are tailored to broadly measure API request size.Most likely needs to be defined per app to account for application specifics.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("[500, 10000, 10000]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("responseSizeBuckets")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Buckets for response size histogram metric, in Bytes. Default:"),a("br"),a("code",[t._v("[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]")]),a("br"),t._v("The default buckets are tailored to broadly measure API response size.Most likely needs to be defined per app to account for application specifics.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("[100, 200, 3000, 400,1000,10000]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("apdexThreshold")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Apdex Threshold, in milliseconds. Default: "),a("code",[t._v("25")]),t._v(". "),a("br"),t._v("In Apdex calculation, request considered Satisfied if it is answered in less then this Threshold (< 25ms), and request is Tolerating  if it's answered in less then Threshold * 4 (<100 ms)"),a("br"),a("br"),t._v("Make sure both Threshold(i.e.25) and Threshold*4(i.e. 100) are buckets in "),a("code",[t._v("durationBuckets")]),t._v(", so Apex calculation can be done using Prometheus metrics"),a("br"),a("br"),t._v("See "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Apdex",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apdex calculation"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("25")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("onResponseFinish")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Callback to invoke when response is finished"),a("br"),t._v("Application may implement it to trace Request Response Record (RRR), which is passed as parameter"),a("br"),t._v("The following parameters are passed to this callback:"),a("br"),a("code",[t._v("onResponseFinish(req,res,rrr)")]),a("br"),t._v("- req - request"),a("br"),t._v("- res - response"),a("br"),t._v("- rrr - Request Response Record (RRR)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("see sample")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("authentication")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Enable Basic authentication: "),a("code",[t._v("true")]),t._v(" or "),a("code",[t._v("false")]),t._v(". Default "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sessionMaxAge")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If authentication is enabled("),a("code",[t._v("authentication=true")]),t._v("): Max Age of the session, in seconds. Default "),a("code",[t._v("900")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("100")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("onAuthenticate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If authentication is enabled("),a("code",[t._v("authentication=true")]),t._v("): Callback to authenticate request to "),a("code",[t._v("/swagger-stats/stats")]),t._v(" and "),a("code",[t._v("/swagger-stats/metrics")]),a("br"),t._v("Application must implement onAuthenticate to validate user credentials"),a("br"),t._v("The following parameters are passed to this callback:"),a("br"),a("code",[t._v("onAuthenticate(req,username,password)")]),a("br"),t._v("- req - request"),a("br"),t._v("- username - username"),a("br"),t._v("- password - password"),a("br"),t._v("Must return "),a("code",[t._v("true")]),t._v(" if user authenticated, "),a("code",[t._v("false")]),t._v(" if not")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("see sample")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("elasticsearch")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Elasticsearch URL. If specified, enables storing of request response records in Elasticsearch. Default is empty (storing to Elasticsearch is disabled).")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'http://127.0.0.1:9200'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("elasticsearchUsername")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Username to authenticate with Elasticsearch. Default is none - Elasticsearch auth disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'user'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("elasticsearchPassword")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Password to authenticate with Elasticsearch. Default is none - Elasticsearch auth disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'pass'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("metricsPrefix")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Prometheus metrics prefix. Will be prepended to metric name if specified.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'myservice_'")])])])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"simplest-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simplest-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Simplest Configuration")]),t._v(" "),a("p",[t._v("The simplest configuration for swagger-stats is no options at all. If you pass no options, swagger-stats will work based on defaults.\nIn this case, without swagger specification, swagger-stats will detect API operations on the fly based on express routes (i.e. "),a("code",[t._v("/myapi/:param")]),t._v("),\nand it will calculate statistics for detected API operations.")]),t._v(" "),a("blockquote",[a("p",[t._v("If your existing app does not have swagger specification, swagger-stats will detect and monitor API defined by Express routes")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" swStats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-stats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swStats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("br"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"just-the-spec-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#just-the-spec-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Just the Spec Configuration")]),t._v(" "),a("blockquote",[a("p",[t._v("Typically you would provide just the Swagger specification to swagger-stats and rely on defaults for other options")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" swStats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-stats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" apiSpec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable swagger-stats middleware in express app, passing swagger specification as option ")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swStats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("swaggerSpec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("apiSpec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"full-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Full configuration")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Express ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using swagger-parser to validate swagger spec")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" swaggerParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" specLocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'petstore.yaml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" swaggerSpec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("swaggerParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\nparser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("specLocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Success validating swagger file!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    swaggerSpec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable swagger-stats middleware with all options")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swStats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-stats-authtest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.94.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hostname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      timelineBucketDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      swaggerSpec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("swaggerSpec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      uriPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/swagger-stats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      durationBuckets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      requestSizeBuckets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      responseSizeBuckets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make sure both 50 and 50*4 are buckets in durationBuckets, ")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so Apdex could be calculated in Prometheus ")]),t._v("\n      apdexThreshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onResponseFinish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("rrr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onResponseFinish: %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rrr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sessionMaxAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" maxAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:9200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onAuthenticate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// simple check for username and password")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-stats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swagger-stats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// . . . . . . . . ")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br")])])])},[],!1,null,null,null);s.default=n.exports}}]);