(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{KMXh:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return s})),r.d(n,"default",(function(){return c}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("FlsD"),r("q1tI");var t=r("E/Ix"),a=r("hhGP");r("qKvR");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/queries.md"}});var i={_frontmatter:s},l=a.a;function c(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(l,o({},i,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"generated-queries"},"Generated queries"),Object(t.b)("p",null,"Every type defined in the configurations and associated with a collection will generate a graphql query for a single document and for many documents in the form of a connection.\nThe best way to explore the queries shape is follow the ",Object(t.b)("a",o({parentName:"p"},{href:"../README.md"}),"quickstart")," guide and open graphiql to explore the possible queries"),Object(t.b)("p",null,"For example having the following type you can do the following queries"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{}),'User:\n    type: "user"\n    _id: ID\n    name: Str\n    surname: Str\n    friends_ids: [ID]\n')),Object(t.b)("p",null,"Some examples pf queries for this type:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-gql"}),'\n{\n    user(where: {name: {eq: "jon"}) {\n        _id\n        name\n        surname\n    }\n}\n')),Object(t.b)("p",null,"Every type generates a where argument where you can query the mongodb database with the ",Object(t.b)("inlineCode",{parentName:"p"},"eq"),", ",Object(t.b)("inlineCode",{parentName:"p"},"in"),", ",Object(t.b)("inlineCode",{parentName:"p"},"nin")," and other mongodb operators."),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-gql"}),'\n{\n    users(first: 20, after: "Micky", cursosorField: name) {\n        nodes {\n            _id\n            name\n            surname\n        }\n        pageInfo {\n            endCursor\n            startCursor\n            hasNextPage\n            hasPreviousPage\n        }\n    }\n}\n')),Object(t.b)("p",null,"The connections have additional arguments to handle pagination, the documents are always sorted ascending on the _id field if present, you can change the sorting field with the ",Object(t.b)("inlineCode",{parentName:"p"},"cursorField")," argument.\nThe pageInfo field returns the information to handle pagination, the endCursor and startCursor fields can be any scalar type based on the cursorField argument, they are not obfuscated to make it easier to see what is happening inside your app."),Object(t.b)("p",null,"The generated graphql is below."),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-graphql"}),"extend type Query {\n    user(\n        where: UserWhere,\n    ): User\n\n    users(\n        where: UserWhere, \n        cursorField: UserFields, \n        first: Int, \n        last: Int, \n        after: AnyScalar, \n        before: AnyScalar\n    ): UserConnection\n\n}\n\ntype UserConnection {\n    nodes: [User]\n    pageInfo: PageInfo\n}\n\ninput UserWhere { \n    and: [UserWhere]\n    or: [UserWhere]\n    type: WhereString\n    _id: WhereID\n    name: WhereString\n    surname: WhereString\n}\n\nenum UserFields {\n    type\n    _id\n    name\n    surname\n}\ntype PageInfo {\n    endCursor: AnyScalar\n    startCursor: AnyScalar\n    hasNextPage: Boolean\n    hasPreviousPage: Boolean\n}\n")),Object(t.b)("p",null,"The relations are similar, for a to_one relation:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-graphql"}),"\nextend type User {\n    father: User\n}\n")),Object(t.b)("p",null,"For to_many relations:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-gql"}),"extend type User {\n   friends(\n       where: UserWhere, \n       cursorField: UserFields, \n       first: Int, \n       last: Int, \n       after: AnyScalar, \n       before: AnyScalar\n    ): UserConnection\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/queries.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-queries-md-5d0d9df92745290d88eb.js.map