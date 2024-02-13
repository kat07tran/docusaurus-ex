"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5196],{8456:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(7624),i=n(2172);const s={title:"Codeblocks",sidebar_position:6},o=void 0,a={id:"getting started/codeblocks",title:"Codeblocks",description:"",source:"@site/docs/getting started/codeblocks.md",sourceDirName:"getting started",slug:"/getting started/codeblocks",permalink:"/docusaurus-ex/docs/getting started/codeblocks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting started/codeblocks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Codeblocks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Alerts or Admonitions",permalink:"/docusaurus-ex/docs/getting started/alerts"},next:{title:"Page 1",permalink:"/docusaurus-ex/docs/getting started/page-1"}},c={},l=[];function d(e){const r={code:"code",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",metastring:'title="Codeblock"',children:"function Greeting(props) {\r\n    return <p>Welcome, {props.userName}!</p>\r\n}\r\n\r\nexport default Greeting;\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",metastring:'title="Highlight Lines"',children:"function HighlightText(highlight) {\r\n    if (highlight) {\r\n        // highlight-next-line\r\n        return 'This text is highlighted!';\r\n    }\r\n    return 'Nothing highlighted';\r\n}\r\n\r\nfunction HighlightMoreText(highlight) {\r\n    // highlight-start\r\n    if (highlight) {\r\n        return 'This range is highlighted!';\r\n    }\r\n    // highlight-end\r\n    return 'Nothing highlighted';\r\n}\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",metastring:'title="Line Numbers" showLineNumbers',children:"import React from 'react';\r\n\r\nfunction UserProfile(props) {\r\n    const {username, email, isAdmin} = props;\r\n\r\n    return (\r\n        <div>\r\n            <h1>User Profile</h1>\r\n            <p>Username: {username}</p>\r\n            <p>Email: {email}</p>\r\n            {isAdmin && <p>Admin User</p>}\r\n        </div>\r\n    )\r\n}\r\n\r\nexport default UserProfile;\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",metastring:'title="Line Numbers with Highlight" {4,9-11} showLineNumbers',children:"import React from 'react';\r\n\r\nfunction UserProfile(props) {\r\n    const {username, email, isAdmin} = props;\r\n\r\n    return (\r\n        <div>\r\n            <h1>User Profile</h1>\r\n            <p>Username: {username}</p>\r\n            <p>Email: {email}</p>\r\n            {isAdmin && <p>Admin User</p>}\r\n        </div>\r\n    )\r\n}\r\n\r\nexport default UserProfile;\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>a,M:()=>o});var t=n(1504);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);