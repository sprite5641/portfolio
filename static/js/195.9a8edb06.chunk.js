"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[195],{6811:(e,t,a)=>{a.d(t,{VY:()=>y,nl:()=>h,rH:()=>u,r0:()=>x});var o=a(7621),i=a(9737),n=a(9204);const s=JSON.parse('{"name":"Prachaya tatiyasamrit","logoType":{"mobile":"Sprite","desktop":"Prachaya tatiyasamrit"},"mainPicture":"/portfolio/assets/HP2.webp","mainPictureJPG":"/portfolio/assets/HP2.jpg","pronunciation":"Sprite","audioFile":"/portfolio/assets/name-pro.mp3","cssVarPrefix":"sprite","email":"prachaya5641.pt@gmail.com","linkedin":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/","github":"https://github.com/sprite5641","resume":"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/"},{"type":"github","link":"https://github.com/sprite5641"},{"type":"mail","link":"mailto:prachaya5641.pt@gmail.com"}]}'),r=JSON.parse('{"headline":"Hello, I\'m Prachaya tatiyasamrit.","picture":"/portfolio/assets/landing/face2.webp","jpg":"/portfolio/assets/landing/face2.jpg"}'),l=JSON.parse('[{"id":"featured-project-pos","title":"Point of Sale","year":"Feb 2023 - Present","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A point of sale system for a restaurant. The system is built with NuxtJs and Golang. The system is deployed on GCP. The system is integrated with a thermal printer and a cash drawer. The system is integrated with a payment gateway.","image":"/portfolio/assets/featured-projects/pos.webp","jpg":"/portfolio/assets/featured-projects/pos.png"},{"id":"featured-project-daywork","title":"Daywork","year":"Apr 2022 - Aug 2022","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding part-time and full-time jobs. The system is built with NuxtJs and Golang. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/daywork.webp","jpg":"/portfolio/assets/featured-projects/daywork.png"},{"id":"featured-project-esport","title":"Esport Underground","year":"Dec 2020 - Jun 2021","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Nodejs","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding and creating esport tournaments. The system is built with NuxtJs and Nodejs. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/esport.webp","jpg":"/portfolio/assets/featured-projects/esport.png"}]'),c=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/sprite5641","demo":"https://sprite5641.github.io/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/portfolio/assets/other-projects/post.webp","jpg":"/portfolio/assets/other-projects/post.jpeg"}]'),d=JSON.parse('{"educations":[{"id":"edu-1","school":"Lampang Rajabhat University","degree":"Information Technology","duration":"Aug 2016 - Mar 2020","content":["GPA: 3.36","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence"]},{"id":"edu-2","school":"Lampangpoly","degree":"Electronics","duration":"May 2013 - Apr 2016","content":["GPA: 3.63","Courses: Digital Electronics, Microprocessor"]}],"experiences":[{"id":"exp-1","company":"Infinity Code Co., Ltd","position":"Full Stack Developer","duration":"Sep 2022 - Present","description":["Leading scalable web app development with Node.js and Nuxt.js to improve performance and engagement.","Developing Golang server logic for efficient data processing and quick responses.","Spearheading seamless integration of RESTful APIs for effective front-end to back-end communication.","Driving development of intuitive, responsive interfaces with Nuxt.js for uniform multi-device experiences.","Involved in database design and management using best practices for performance and scalability.","Ensuring code quality and maintainability with agile methods, thorough reviews, and automated testing.","Key role in CI/CD processes, using DevOps tools for streamlined app updates and deployments."]},{"id":"exp-2","company":"Paiduaykanmai Co., Ltd","position":"Mid-level Backend Developer","duration":"Apr 2022- Aug 2022","description":["Developed a real-time data pipeline for efficient stream processing, guaranteeing up-to-date and precise information for users in research and healthcare.","Worked closely with front-end teams to merge backend systems with interactive web interfaces for fluid data integration and user interaction.","Performed extensive usability tests and user feedback rounds, creating more intuitive and agile interfaces, improving user experience.","Crucial in database and server optimization, achieving a 40% boost in app responsiveness and data access speed."]},{"id":"exp-3","company":"Infinity Code Co., Ltd","position":"Junior Backend Developer","duration":"Dec 2020 - Mar 2022","description":["Led the development of a high-performance API for a dynamic web app, improving data management and backend functionality, which enhanced efficiency and user experience.","Contributed to server load optimization and resource allocation, achieving smoother performance and reducing server downtime by 30%.","Engaged in backend enhancements by adopting cutting-edge development methods and tech, enhancing project scalability and maintainability."]}],"skills":[{"title":"Programming","tools":["TypeScript","JavaScript","Golang","NoSQL","SQL"]},{"title":"Web","tools":["React","Vue","NodeJS","Golang","HTML/CSS","OAuth","i18n"]},{"title":"Databases","tools":["MongoDB","Redis","PostgreSQL","Firebase"]},{"title":"OS & Tools","tools":["MacOS","Git","Agile (Scrum)","Heroku","Docker"]}]}'),p=a.p+"static/media/landing.e74c00f9137cc5db4a81.md",g=a.p+"static/media/about.d77e7d3a1c9180698c14.md";var m=a(2255);const u={common:s,landing:r,featuredProjects:l,otherProjects:c,about:d};let h=function(e){return e.Landing="landing",e.About="about",e}({});const f={[h.Landing]:p,[h.About]:g},x=e=>{const[t,a]=(0,o.useState)({landing:"",about:""});return(0,o.useEffect)((()=>{fetch(f[e]).then((e=>e.text())).then((t=>a((a=>({...a,[e]:t})))))}),[e]),t},y=e=>{let{children:t,...a}=e;return(0,m.jsx)(i.Kq,{spacing:"4",children:(0,m.jsx)(n.D,{components:{p:e=>{let{node:t,...o}=e;return(0,m.jsx)(i.xv,{...a,...o})},a:e=>{let{node:t,...a}=e;return(0,m.jsx)(i.rU,{href:a.href,target:"_blank",color:"primary.200",...a})},ul:e=>{let{node:t,...a}=e;const{ordered:o,...n}=a;return(0,m.jsx)(i.QI,{...n,"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"})},li:e=>{let{node:t,...a}=e;const{ordered:o,...i}=a;return(0,m.jsx)("li",{"data-aos":"flip-up","data-aos-delay":100*a.index+400,...i})}},children:t})})}},8330:(e,t,a)=>{a.r(t),a.d(t,{Navbar:()=>j});var o=a(3616),i=a(9737),n=a(9020),s=a(6811),r=a(2733),l=a(2255);const c=e=>{let{text:t}=e;const a=(0,r.Sx)({base:t.mobile,md:t.desktop});return(0,l.jsx)(i.xu,{transition:"all 0.2s ease-in-out",_hover:{cursor:"pointer",color:"primary.600"},children:(0,l.jsx)(i.xv,{fontSize:{base:"3xl",md:"4xl"},lineHeight:"1",fontFamily:"Signature",mb:{base:0,md:-2},children:a})})};var d=a(8786),p=a(8986),g=a(7621),m=a(1546),u=a(59),h=a(112);const f=e=>{const t=(0,o.ff)("gray.800","white"),{colorMode:a,toggleColorMode:s}=(0,o.If)();return(0,l.jsx)(i.Ug,{...e,children:(0,l.jsx)(n.hU,{"aria-label":"appearance",bg:"transparent",color:t,fontSize:"lg",_hover:{color:"primary.500"},_active:{bg:"transparent"},icon:"light"===a?(0,l.jsx)(h.nmq,{}):(0,l.jsx)(h.vQG,{}),variant:"ghost",size:"xs",onClick:()=>{s(),window.scrollBy(0,1),window.scrollBy(0,-1)},w:"32px",h:"32px"})})};var x=a(291),y=a(1715);const b=e=>{let{onSectionClick:t,currentPage:a,...s}=e;const{isOpen:r,onOpen:c,onClose:d}=(0,m.qY)(),h=(0,g.useRef)(null),b=(0,o.ff)("gray.800","white");return(0,l.jsxs)(i.xu,{...s,children:[(0,l.jsx)(n.zx,{as:n.hU,variant:"icon",ref:h,onClick:c,"aria-label":"open drawer",fontSize:"lg",color:"primary.500",icon:(0,l.jsx)(x.v7m,{}),px:"0"}),(0,l.jsxs)(u.dy,{isOpen:r,placement:"right",onClose:d,autoFocus:!1,children:[(0,l.jsx)(u.P1,{}),(0,l.jsxs)(u.sc,{children:[(0,l.jsx)(u.OX,{px:"4",children:(0,l.jsxs)(i.kC,{justifyContent:"space-between",children:[(0,l.jsx)(f,{}),(0,l.jsx)(u.cC,{position:"relative",top:"0",right:"0"})]})}),(0,l.jsxs)(u.Ng,{children:[(0,l.jsxs)(i.gC,{spacing:"6",my:"16",children:[(0,l.jsx)(n.zx,{variant:"link",color:b,textDecoration:"underline",textDecorationThickness:"2px",textDecorationColor:a===p.ki?"primary.500":"transparent",onClick:()=>{d(),setTimeout((()=>{t(p.ki)}),250)},"data-aos":"fade","data-aos-delay":"200",fontWeight:"600",fontSize:"2xl",children:"Work"}),(0,l.jsx)(n.zx,{variant:"link",color:b,textDecoration:a===p.x$?"underline":"none",textDecorationThickness:"2px",textDecorationColor:"primary.500",onClick:()=>{d(),setTimeout((()=>{t(p.x$)}),250)},"data-aos":"fade","data-aos-delay":"300",fontWeight:"600",fontSize:"2xl",children:"About"})]}),(0,l.jsx)(i.kC,{justifyContent:"center",mt:"16",children:(0,l.jsx)(y.I,{delay:100,resume:!1})})]})]})]})]})},j=()=>{const e=(0,o.ff)(d.Vv,d.vQ),t=(0,o.ff)("gray.800","white"),a=(0,p.vO)(),r=e=>{var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})};return(0,l.jsx)(i.xu,{bg:e,position:"fixed",top:"0",w:"100%",left:"50%",transform:"translate(-50%)",zIndex:"10",children:(0,l.jsx)(i.W2,{py:"4",px:"4","data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"100",children:(0,l.jsxs)(i.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,l.jsx)(c,{text:s.rH.common.logoType}),(0,l.jsxs)(i.kC,{alignItems:"center",display:{base:"none",md:"flex"},children:[(0,l.jsxs)(i.Ug,{spacing:"8",mr:"6",children:[(0,l.jsx)(n.zx,{variant:"link",color:t,textDecoration:"underline",textDecorationThickness:"2px",textDecorationColor:a===p.ki?"primary.500":"transparent",onClick:()=>r(p.ki),"data-aos":"fade","data-aos-delay":"200",children:"Work"}),(0,l.jsx)(n.zx,{variant:"link",color:t,textDecoration:a===p.x$?"underline":"none",textDecorationThickness:"2px",textDecorationColor:"primary.500",onClick:()=>r(p.x$),"data-aos":"fade","data-aos-delay":"300",children:"About"})]}),(0,l.jsx)(f,{})]}),(0,l.jsx)(b,{currentPage:a,onSectionClick:r,display:{base:"block",md:"none"}})]})})})}},1715:(e,t,a)=>{a.d(t,{I:()=>g});var o=a(9737),i=a(9020),n=a(7250),s=a(6811),r=a(2878),l=a(291),c=a(8041),d=a(2255);const p={linkedin:(0,d.jsx)(l.ltd,{}),github:(0,d.jsx)(l.hJX,{}),facebook:(0,d.jsx)(l.R9i,{}),instagram:(0,d.jsx)(l.dR1,{}),youtube:(0,d.jsx)(l.xg4,{}),mail:(0,d.jsx)(c.hBs,{})},g=e=>{let{resume:t=!0,exclude:a,delay:l=800}=e;return(0,d.jsxs)(o.Ug,{spacing:"5",children:[t&&(0,d.jsx)(i.zx,{"data-aos":"fade","data-aos-delay":l,size:"lg",borderRadius:"xl",mr:"2",children:"Resume"}),s.rH.common.socials.map(((e,t)=>!(null!==a&&void 0!==a&&a.includes(e.type))&&(0,d.jsx)(n.u,{label:e.type,textTransform:"capitalize",children:(0,d.jsx)(i.zx,{p:"0","aria-label":"".concat(e.type,"-button"),as:i.hU,variant:"icon","data-aos":"fade","data-aos-delay":100*t+l,fontSize:"mail"===e.type?"24pt":"20pt",icon:p[e.type],onClick:()=>(0,r.bA)(e.link)})},e.type)))]})}},2878:(e,t,a)=>{a.d(t,{Js:()=>n,bA:()=>i});var o=a(6811);const i=e=>window.open(e,"_blank"),n=()=>{i("mailto:"+o.rH.common.email)}}}]);
//# sourceMappingURL=195.9a8edb06.chunk.js.map