import{r as c,j as e}from"./index-CmO4nMse.js";const d="_aside_pvlk9_1",m="_articleBar_pvlk9_9",x="_chapterOl_pvlk9_79",u="_chaptersHr_pvlk9_111",f="_subChapterUl_pvlk9_121",j="_chaptersClose_pvlk9_129",s={aside:d,articleBar:m,chapterOl:x,chaptersHr:u,subChapterUl:f,chaptersClose:j};function C(p){const o=p.chapters,a=c.useRef(null),t=c.useRef(null),[n,h]=c.useState("closed");function i(){n==="opened"?(a.current.style.left="calc(0px - calc(clamp(105px, 10.5vw, 10.5vw) + clamp(39px, 3.9vw, 3.9vw)))",t.current.style.transform="rotate(-90deg)",h("closed")):n==="closed"&&(a.current.style.left="0px",t.current.style.transform="rotate(0deg)",h("opened"))}return e.jsx(e.Fragment,{children:e.jsx("aside",{className:s.aside,children:e.jsxs("div",{className:s.articleBar,ref:a,children:[e.jsx("h6",{children:"Chapters"}),e.jsx("hr",{className:s.chaptersHr}),e.jsx("button",{className:s.chaptersClose,onClick:i,ref:t,children:e.jsx("small",{children:"|||"})}),e.jsx("ol",{className:s.chapterOl,children:o.map(r=>e.jsx(e.Fragment,{children:e.jsxs("li",{children:[e.jsx("a",{href:r.href,children:e.jsx("small",{children:r.name})}),e.jsx("ul",{className:s.subChapterUl,children:r.subchapters.map(l=>e.jsx("li",{children:e.jsx("a",{href:l.href,children:e.jsx("span",{className:"smaller",children:l.name})})},l.name))})]},r.name)}))})]})})})}export{C as default};