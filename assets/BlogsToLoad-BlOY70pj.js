const __vite__fileDeps=["assets/HTML_Blogs-BpN4ICkW.js","assets/index-DALZj6li.js","assets/index-CuzwPZim.css","assets/CSS_Blogs-BpN4ICkW.js","assets/JavaScript_Blogs-CaUn6RAT.js","assets/React_Blogs-C8DKzHbY.js","assets/Other_Blogs-CM6ANHOH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as s,r as e,_ as l}from"./index-DALZj6li.js";const n=e.lazy(()=>l(()=>import("./HTML_Blogs-BpN4ICkW.js"),__vite__mapDeps([0,1,2]))),a=e.lazy(()=>l(()=>import("./CSS_Blogs-BpN4ICkW.js"),__vite__mapDeps([3,1,2]))),i=e.lazy(()=>l(()=>import("./JavaScript_Blogs-CaUn6RAT.js"),__vite__mapDeps([4,1,2]))),t=e.lazy(()=>l(()=>import("./React_Blogs-C8DKzHbY.js"),__vite__mapDeps([5,1,2]))),o=e.lazy(()=>l(()=>import("./Other_Blogs-CM6ANHOH.js"),__vite__mapDeps([6,1,2])));function _(c){const r=c.toLoad;if(r==="all")return s.jsx(s.Fragment,{children:s.jsxs(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:[s.jsx(n,{}),s.jsx(a,{}),s.jsx(i,{}),s.jsx(t,{}),s.jsx(o,{})]})});if(r==="html")return s.jsx(s.Fragment,{children:s.jsx(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:s.jsx(n,{})})});if(r==="css")return s.jsx(s.Fragment,{children:s.jsx(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:s.jsx(a,{})})});if(r==="javascript")return s.jsx(s.Fragment,{children:s.jsx(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:s.jsx(i,{})})});if(r==="react")return s.jsx(s.Fragment,{children:s.jsx(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:s.jsx(t,{})})});if(r==="other")return s.jsx(s.Fragment,{children:s.jsx(e.Suspense,{fallback:s.jsx("h6",{children:"Loading..."}),children:s.jsx(o,{})})})}export{_ as default};