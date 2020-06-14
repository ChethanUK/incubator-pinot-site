/*! For license information please see d6d9fd36.53d72c54.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(190)),l=n(211),i={title:"Pinot Query Language (PQL)",sidebar_label:"PQL",description:"Pinot Query Language"},c={id:"user-guide/pql",title:"Pinot Query Language (PQL)",description:"Pinot Query Language",source:"@site/docs/user-guide/pql.md",permalink:"/docs/user-guide/pql",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide/pql.md",sidebar_label:"PQL"},b=[{value:"PQL Limitations",id:"pql-limitations",children:[]},{value:"PQL Examples",id:"pql-examples",children:[{value:"Aggregation",id:"aggregation",children:[]},{value:"Grouping on Aggregation",id:"grouping-on-aggregation",children:[]},{value:"Ordering on Aggregation",id:"ordering-on-aggregation",children:[]},{value:"Filtering",id:"filtering",children:[]},{value:"Selection (Projection)",id:"selection-projection",children:[]},{value:"Ordering on Selection",id:"ordering-on-selection",children:[]},{value:"Pagination on Selection",id:"pagination-on-selection",children:[]},{value:"Wild-card match (in WHERE clause only)",id:"wild-card-match-in-where-clause-only",children:[]},{value:"UDF",id:"udf",children:[]},{value:"BYTES column",id:"bytes-column",children:[]}]},{value:"PQL Specification",id:"pql-specification",children:[{value:"SELECT",id:"select",children:[]},{value:"Supported aggregations on single-value columns",id:"supported-aggregations-on-single-value-columns",children:[]},{value:"Supported aggregations on multi-value columns",id:"supported-aggregations-on-multi-value-columns",children:[]},{value:"WHERE",id:"where",children:[]},{value:"GROUP BY",id:"group-by",children:[]},{value:"ORDER BY",id:"order-by",children:[]},{value:"TOP",id:"top",children:[]},{value:"LIMIT",id:"limit",children:[]}]},{value:"Transform Function in Aggregation and Grouping",id:"transform-function-in-aggregation-and-grouping",children:[{value:"Supported transform functions",id:"supported-transform-functions",children:[]}]},{value:"Differences with SQL",id:"differences-with-sql",children:[]}],s={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PQL is a derivative of SQL derivative that supports selection, projection, aggregation, grouping aggregation. There is no support for Joins or Subqueries. Specifically, for Pinot:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Aggregations are computed in parallel"),Object(o.b)("li",{parentName:"ul"},"Results of aggregations with large amounts of group keys (>1M) are approximated")),Object(o.b)("h2",{id:"pql-limitations"},"PQL Limitations"),Object(o.b)("p",null,"PQL is only a derivative of SQL, and it does not support Joins nor Subqueries. In order to support them, we suggest to rely on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prestodb.io/"}),"PrestoDB"),", although Subqueries are not completely supported by PrestoDB at the moment of writing."),Object(o.b)("h2",{id:"pql-examples"},"PQL Examples"),Object(o.b)("p",null,"The Pinot Query Language (PQL) is very similar to standard SQL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT COUNT(*) FROM myTable\n")),Object(o.b)("h3",{id:"aggregation"},"Aggregation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT COUNT(*), MAX(foo), SUM(bar) FROM myTable\n")),Object(o.b)("h3",{id:"grouping-on-aggregation"},"Grouping on Aggregation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM myTable\n  GROUP BY bar, baz LIMIT 50\n")),Object(o.b)("h3",{id:"ordering-on-aggregation"},"Ordering on Aggregation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM myTable\n  GROUP BY bar, baz \n  ORDER BY bar, MAX(foo) DESC LIMIT 50\n")),Object(o.b)("h3",{id:"filtering"},"Filtering"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT COUNT(*) FROM myTable\n  WHERE foo = 'foo'\n  AND bar BETWEEN 1 AND 20\n  OR (baz < 42 AND quux IN ('hello', 'goodbye') AND quuux NOT IN (42, 69))\n")),Object(o.b)("h3",{id:"selection-projection"},"Selection (Projection)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM myTable\n  WHERE quux < 5\n  LIMIT 50\n")),Object(o.b)("h3",{id:"ordering-on-selection"},"Ordering on Selection"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT foo, bar FROM myTable\n  WHERE baz > 20\n  ORDER BY bar DESC\n  LIMIT 100\n")),Object(o.b)("h3",{id:"pagination-on-selection"},"Pagination on Selection"),Object(o.b)("p",null,"Note: results might not be consistent if column ordered by has same value in multiple rows."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT foo, bar FROM myTable\n  WHERE baz > 20\n  ORDER BY bar DESC\n  LIMIT 50, 100\n")),Object(o.b)("h3",{id:"wild-card-match-in-where-clause-only"},"Wild-card match (in WHERE clause only)"),Object(o.b)("p",null,"To count rows where the column ",Object(o.b)("inlineCode",{parentName:"p"},"airlineName")," starts with U"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT count(*) FROM SomeTable\n  WHERE regexp_like(airlineName, '^U.*')\n  GROUP BY airlineName TOP 10\n")),Object(o.b)("h3",{id:"udf"},"UDF"),Object(o.b)("p",null,"As of now, functions have to be implemented within Pinot. Injecting functions is not allowed yet. The example below demonstrate the use of UDFs. More examples in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Transform Function in Aggregation Grouping")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT count(*) FROM myTable\n  GROUP BY timeConvert(timeColumnName, 'SECONDS', 'DAYS')\n")),Object(o.b)("h3",{id:"bytes-column"},"BYTES column"),Object(o.b)("p",null,"Pinot supports queries on BYTES column using HEX string. The query response also uses hex string to represent bytes value.\nE.g. the query below fetches all the rows for a given UID."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT * FROM myTable\n  WHERE UID = "c8b3bce0b378fc5ce8067fc271a34892"\n')),Object(o.b)("h2",{id:"pql-specification"},"PQL Specification"),Object(o.b)("h3",{id:"select"},"SELECT"),Object(o.b)("p",null,"The select statement is as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT <outputColumn> (, outputColumn, outputColumn,...)\n  FROM <tableName>\n  (WHERE ... | GROUP BY ... | ORDER BY ... | TOP ... | LIMIT ...)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"outputColumn")," can be ",Object(o.b)("inlineCode",{parentName:"p"},"*")," to project all columns, columns (",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", ",Object(o.b)("inlineCode",{parentName:"p"},"bar"),", ",Object(o.b)("inlineCode",{parentName:"p"},"baz"),") or aggregation functions like (",Object(o.b)("inlineCode",{parentName:"p"},"MIN(foo), MAX(bar), AVG(baz)"),")."),Object(o.b)("h3",{id:"supported-aggregations-on-single-value-columns"},"Supported aggregations on single-value columns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"COUNT"),Object(o.b)("li",{parentName:"ul"},"MIN"),Object(o.b)("li",{parentName:"ul"},"MAX"),Object(o.b)("li",{parentName:"ul"},"SUM"),Object(o.b)("li",{parentName:"ul"},"AVG"),Object(o.b)("li",{parentName:"ul"},"MINMAXRANGE"),Object(o.b)("li",{parentName:"ul"},"DISTINCT"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNT"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNTHLL"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNTRAWHLL: Returns HLL response serialized as string. The serialized HLL can be converted back into an HLL (see pinot-core/**/HllUtil.java as an example) and then aggregated with other HLLs. A common use case may be to merge HLL responses from different Pinot tables, or to allow aggregation after client-side batching.\nFASTHLL (WARN: will be deprecated soon. FASTHLL stores serialized HyperLogLog in String format, which performs worse than DISTINCTCOUNTHLL, which supports serialized HyperLogLog in BYTES (byte array) format)"),Object(o.b)("li",{parentName:"ul"},"PERCENTILE","[0-100]",": e.g. PERCENTILE5, PERCENTILE50, PERCENTILE99, etc."),Object(o.b)("li",{parentName:"ul"},"PERCENTILEEST","[0-100]",": e.g. PERCENTILEEST5, PERCENTILEEST50, PERCENTILEEST99, etc.")),Object(o.b)("h3",{id:"supported-aggregations-on-multi-value-columns"},"Supported aggregations on multi-value columns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"COUNTMV"),Object(o.b)("li",{parentName:"ul"},"MINMV"),Object(o.b)("li",{parentName:"ul"},"MAXMV"),Object(o.b)("li",{parentName:"ul"},"SUMMV"),Object(o.b)("li",{parentName:"ul"},"AVGMV"),Object(o.b)("li",{parentName:"ul"},"MINMAXRANGEMV"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNTMV"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNTHLLMV"),Object(o.b)("li",{parentName:"ul"},"DISTINCTCOUNTRAWHLLMV: Returns HLL response serialized as string. The serialized HLL can be converted back into an HLL (see pinot-core/**/HllUtil.java as an example) and then aggregated with other HLLs. A common use case may be to merge HLL responses from different Pinot tables, or to allow aggregation after client-side batching."),Object(o.b)("li",{parentName:"ul"},"FASTHLLMV (WARN: will be deprecated soon. It does not make lots of sense to configure serialized HyperLogLog column as a dimension)"),Object(o.b)("li",{parentName:"ul"},"PERCENTILE","[0-100]","MV: e.g. PERCENTILE5MV, PERCENTILE50MV, PERCENTILE99MV, etc."),Object(o.b)("li",{parentName:"ul"},"PERCENTILEEST","[0-100]","MV: e.g. PERCENTILEEST5MV, PERCENTILEEST50MV, PERCENTILEEST99MV, etc.")),Object(o.b)("h3",{id:"where"},"WHERE"),Object(o.b)("p",null,"Supported predicates are comparisons with a constant using the standard SQL operators (",Object(o.b)("inlineCode",{parentName:"p"},"=, <, <=, >, >=, <>, '!='"),") , range comparisons using ",Object(o.b)("inlineCode",{parentName:"p"},"BETWEEN (foo BETWEEN 42 AND 69)"),", set membership (",Object(o.b)("inlineCode",{parentName:"p"},"foo IN (1, 2, 4, 8)"),") and exclusion (foo NOT IN (1, 2, 4, 8)). For ",Object(o.b)("inlineCode",{parentName:"p"},"BETWEEN"),", the range is inclusive."),Object(o.b)("p",null,"Comparison with a regular expression is supported using the regexp_like function, as in ",Object(o.b)("inlineCode",{parentName:"p"},"WHERE regexp_like(columnName, 'regular expression')")),Object(o.b)("h3",{id:"group-by"},"GROUP BY"),Object(o.b)("p",null,"The GROUP BY clause groups aggregation results by a list of columns, or transform functions on columns (see below)"),Object(o.b)("h3",{id:"order-by"},"ORDER BY"),Object(o.b)("p",null,"The ORDER BY clause orders selection results or group by results by a list of columns. PQL supports ordering DESC or ASC."),Object(o.b)("h3",{id:"top"},"TOP"),Object(o.b)("p",null,"The TOP n clause causes the 'n' largest group results to be returned. If not specified, the top 10 groups are returned."),Object(o.b)("h3",{id:"limit"},"LIMIT"),Object(o.b)("p",null,"The LIMIT n clause causes the selection results to contain at most 'n' results. The LIMIT a, b clause paginate the selection results from the 'a' th results and return at most 'b' results."),Object(o.b)("h2",{id:"transform-function-in-aggregation-and-grouping"},"Transform Function in Aggregation and Grouping"),Object(o.b)("p",null,"In aggregation and grouping, each column can be transformed from one or multiple columns. For example, the following query will calculate the maximum value of column foo divided by column bar grouping on the column time converted from time unit MILLISECONDS to SECONDS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MAX(DIV(foo, bar) FROM myTable\n  GROUP BY TIMECONVERT(time, 'MILLISECONDS', 'SECONDS')\n")),Object(o.b)("h3",{id:"supported-transform-functions"},"Supported transform functions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Functions"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Decription"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ADD"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sum of at least two values")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SUB"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Difference between two values")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MULT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Product of at least two values")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DIV"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Quotient of two values")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TIMECONVERT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes 3 arguments, converts the value into another time unit. ",Object(o.b)("br",null)," Examples - ",Object(o.b)("inlineCode",{parentName:"td"},"TIMECONVERT(time, 'MILLISECONDS', 'SECONDS')"),"  - This expression converts the value of column ",Object(o.b)("inlineCode",{parentName:"td"},"time")," (taken to be in milliseconds) to the nearest seconds (i.e. the nearest seconds that is lower than the value of ",Object(o.b)("inlineCode",{parentName:"td"},"date")," column) ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Takes 4 arguments, converts the value into another date time format, and buckets time based on the given time granularity. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"DATETIMECONVERT(columnName, inputFormat, outputFormat, outputGranularity)")," where: ",Object(o.b)("br",null),Object(o.b)("inlineCode",{parentName:"td"},"columnName")," - column name to convert ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"inputFormat")," - format of the column columnName ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"outputFormat")," - format of the result desired after conversion ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"outputGranularity")," - the granularity in which to bucket the result")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATETIMECONVERT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Format is expressed as ",Object(o.b)("inlineCode",{parentName:"td"},"<time size>:<time unit>:<time format>:<pattern>")," ",Object(o.b)("br",null)," where: ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"time size")," - size of the time unit eg: 1, 10 ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"time unit")," - HOURS, DAYS etc ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"time format")," - EPOCH or SIMPLE_DATE_FORMAT ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"pattern")," -  this is defined in case of SIMPLE_DATE_FORMAT. eg: yyyyMMdd. A specific timezone can be passed using tz(timezone) ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"timezone")," - can be expressed as long form tz(Asia/Kolkata), or short form tz(IST) or in terms of GMT tz(GMT+0530). Default is UTC. It is recommended to use long form timezone, as short forms are ambiguous with daylight savings (eg: PDT works during daylight savings, PST otherwise) ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Granularity is expressed as ",Object(o.b)("inlineCode",{parentName:"td"},"<time size>:<time unit>")," ",Object(o.b)("br",null)," ",Object(o.b)("strong",{parentName:"td"},"Examples")," ",Object(o.b)("br",null)," 1. To convert column ",Object(o.b)("inlineCode",{parentName:"td"},"Date")," from ",Object(o.b)("inlineCode",{parentName:"td"},"hoursSinceEpoch")," to ",Object(o.b)("inlineCode",{parentName:"td"},"daysSinceEpoch")," and bucket it to 1 day granularity ",Object(o.b)("br",null),' 2. To simply bucket millis "Date" to 15 minutes ',Object(o.b)("inlineCode",{parentName:"td"},"granularity dateTimeConvert(Date, '1:MILLISECONDS:EPOCH', '1:MILLISECONDS:EPOCH', '15:MINUTES')")," ",Object(o.b)("br",null),' 3. To convert column "Date" from hoursSinceEpoch to format yyyyMdd and bucket it to 1 days granularity ',Object(o.b)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:HOURS:EPOCH', '1:DAYS:SIMPLE_DATE_FORMAT:yyyyMMdd', '1:DAYS')")," ",Object(o.b)("br",null),' 4. To convert column "Date" from format yyyy/MM/dd to weeksSinceEpoch and bucket it to 1 weeks granularity ',Object(o.b)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:DAYS:SIMPLE_DATE_FORMAT:yyyy/MM/dd', '1:WEEKS:EPOCH', '1:WEEKS')")," ",Object(o.b)("br",null),' 5. To convert column "Date" from millis to format yyyyMdd in timezone PST ',Object(o.b)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:MILLISECONDS:EPOCH', '1:DAYS:SIMPLE_DATE_FORMAT:yyyyMMdd tz(America/Los_Angeles)', '1:DAYS')"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATETRUNC"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(Presto) SQL compatible date truncation, equivalent to the Presto function date_trunc. Takes at least 3 and upto 5 arguments, converts the value into a specified output granularity seconds since UTC epoch that is bucketed on a unit in a specified timezone. Examples DATETRUNC('week', time_in_seconds, 'SECONDS') This expression converts the column time_in_seconds, which is a long containing seconds since UTC epoch truncated at WEEK (where a Week starts at Monday UTC midnight). The output is a long seconds since UTC epoch. ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"DATETRUNC('quarter', DIV(time_milliseconds/1000), 'SECONDS', 'America/Los_Angeles', 'HOURS')")," This expression converts the expression ",Object(o.b)("inlineCode",{parentName:"td"},"time_in_milliseconds/1000")," (which is thus in seconds) into hours that are truncated at ",Object(o.b)("inlineCode",{parentName:"td"},"QUARTER")," at the Los Angeles time zone (where a Quarter begins on 1/1, 4/1, 7/1, 10/1 in Los Angeles timezone). The output is expressed as hours since UTC epoch (note that the output is not Los Angeles timezone)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VALUEIN"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes at least 2 arguments, where the first argument is a multi-valued column, and the following arguments are constant values. The transform function will filter the value from the multi-valued column with the given constant values. The ",Object(o.b)("inlineCode",{parentName:"td"},"VALUEIN")," transform function is especially useful when the same multi-valued column is both filtering column and grouping column. ",Object(o.b)("br",null),Object(o.b)("br",null)," Examples ",Object(o.b)("br",null)," ",Object(o.b)("inlineCode",{parentName:"td"},"VALUEIN(mvColumn, 3, 5, 15)"))))),Object(o.b)("h2",{id:"differences-with-sql"},"Differences with SQL"),Object(o.b)(l.a,{type:"info",mdxType:"Alert"}," These differences only apply to the PQL endpoint. They do not hold true for the standard-SQL endpoint, which is the recommended endpoint. ",Object(o.b)("br",null),"More information about the two types of endpoints in Querying Pinot.. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TOP works like LIMIT for truncation in group by queries"),Object(o.b)("li",{parentName:"ul"},"No need to select the columns to group with.\nThe following two queries are both supported in PQL, where the non-aggregation columns are ignored.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM mytable\n  GROUP BY bar, baz\n  TOP 50\n\nSELECT bar, baz, MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM mytable\n  GROUP BY bar, baz\n  TOP 50\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The results will always order by the aggregated value (descending).\nThe results for query")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MIN(foo), MAX(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\n")),Object(o.b)("p",null,"will be the same as the combining results from the following queries"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT MIN(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\nSELECT MAX(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\n")),Object(o.b)("p",null,"where we don't put the results for the same group together."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No support for ",Object(o.b)("strong",{parentName:"li"},"ORDER BY")," in aggregation group by. However, ORDER BY support was added recently and is available in the standard-SQL endpoint. It can be used in the PQL endpoint by passing ",Object(o.b)("inlineCode",{parentName:"li"},"queryOptions")," into the payload as follows")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'{\n  "pql" : "SELECT SUM(foo), SUM(bar) from myTable GROUP BY moo ORDER BY SUM(bar) ASC, moo DESC TOP 10",\n  "queryOptions" : "groupByMode=sql;responseFormat=sql"\n}\n')),Object(o.b)("p",null,"where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"groupByMode=sql")," - standard sql way of execution group by, hence accepting order by"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"responseFormat=sql")," - standard sql way of displaying results, in a tabular manner")))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},191:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},211:function(e,t,n){"use strict";n(212);var a=n(0),r=n.n(a),o=n(191),l=n.n(o);n(128);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:l()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:l()("feather","icon-"+(o||c))}),t)}},212:function(e,t,n){var a=n(17);a(a.P,"Array",{fill:n(213)}),n(77)("fill")},213:function(e,t,n){"use strict";var a=n(51),r=n(78),o=n(38);e.exports=function(e){for(var t=a(this),n=o(t.length),l=arguments.length,i=r(l>1?arguments[1]:void 0,n),c=l>2?arguments[2]:void 0,b=void 0===c?n:r(c,n);b>i;)t[i++]=e;return t}}}]);