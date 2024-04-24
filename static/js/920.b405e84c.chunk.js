"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[920],{8051:(e,t,i)=>{i.r(t),i.d(t,{About:()=>x});var a=i(9737),o=i(7252),s=i(6811),n=i(7621),r=i(5598),d=i(9020),l=i(2255);const c=e=>{let{title:t,...i}=e;return(0,l.jsx)(a.X6,{fontSize:"2xl",fontWeight:"bold",...i,"data-aos":"fade-down",children:t})},p=e=>{let{title:t,...i}=e;return(0,l.jsx)(a.xv,{fontWeight:"semibold",fontSize:"lg",...i,"data-aos":"fade-down",children:t})},u=e=>{let{expanded:t,id:i,idx:o,title:s,subTitle:c,date:u,content:m,onChange:g}=e;const h=(0,n.useMemo)((()=>t.includes(o)),[t,o]),[f,x]=(0,n.useState)(!1),b=(0,n.useMemo)((()=>m.length>1&&!h||!h&&f),[f,h,m]);return(0,n.useEffect)((()=>{const e="first-point-".concat(i),t=document.getElementById(e);var a;t&&(t.scrollWidth>=(null===(a=t.parentElement)||void 0===a?void 0:a.scrollWidth)?x(!0):x(!1))}),[i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.KF,{as:a.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,l.jsx)(p,{title:s,fontWeight:"semibold"}),(0,l.jsx)(a.xv,{"data-aos":"fade",children:c}),(0,l.jsx)(a.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:u}),(0,l.jsxs)(a.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[h?(0,l.jsx)(a.QI,{listStylePosition:"outside",pl:"1",children:(0,l.jsx)(a.xv,{as:"li",isTruncated:!t.includes(o),children:m[0]})}):(0,l.jsx)(a.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(o),children:m[0]}),b&&(0,l.jsx)(d.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:()=>{if(t.includes(o)){const e=t.filter((e=>e!==o));g(e)}else g([...t,o])},children:"See more"})]})]}),(0,l.jsxs)(r.Hk,{p:"0",pl:"1",children:[(0,l.jsx)(a.QI,{listStylePosition:"outside",children:m.slice(1).map(((e,t)=>(0,l.jsx)(a.xv,{as:"li",children:e},"".concat(s,"-cont-").concat(t))))}),t.includes(o)&&(0,l.jsx)(a.kC,{justifyContent:"flex-end",children:(0,l.jsx)(d.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:()=>{const e=t.filter((e=>e!==o));g(e)},children:"See less"})})]})]})},m=()=>{const[e,t]=(0,n.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Education"}),(0,l.jsx)("br",{}),(0,l.jsx)(r.UQ,{pt:"2",allowMultiple:!0,index:e,id:"education",children:s.rH.about.educations.map(((i,a)=>(0,l.jsx)(r.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(u,{title:i.school,subTitle:i.degree,date:i.duration,content:i.content,id:i.id,idx:a,onChange:t,expanded:e})},"panel-".concat(a))))})]})},g=()=>{const[e,t]=(0,n.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Experiences"}),(0,l.jsx)("br",{}),(0,l.jsx)(r.UQ,{pt:"2",allowMultiple:!0,index:e,children:s.rH.about.experiences.map(((i,a)=>(0,l.jsx)(r.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(u,{id:i.id,title:i.company,subTitle:i.position,date:i.duration,content:i.description,idx:a,onChange:t,expanded:e})},"panel-".concat(a))))})]})};var h=i(1729);const f=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Skills",pb:"2"}),(0,l.jsx)("br",{}),s.rH.about.skills.map((e=>(0,l.jsxs)(a.xu,{p:"0",mb:"4",children:[(0,l.jsx)(p,{title:e.title}),(0,l.jsx)(h.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))))]}),x=()=>{const e=(0,s.r0)(s.nl.About);return(0,l.jsxs)(a.xu,{children:[(0,l.jsxs)(a.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,l.jsx)(a.xu,{flex:"0.35","data-aos":"fade-up",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{type:"image/webp",srcSet:s.rH.common.mainPicture}),(0,l.jsx)("source",{type:"image/jpeg",srcSet:s.rH.common.mainPictureJPG}),(0,l.jsx)(o.Ee,{borderRadius:"xl",src:s.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,l.jsxs)(a.xu,{flex:"0.85",children:[(0,l.jsx)(a.X6,{"data-aos":"fade-down",children:s.rH.common.name}),(0,l.jsx)(a.kC,{alignItems:"center",children:(0,l.jsx)(a.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:s.rH.common.pronunciation})}),(0,l.jsx)(a.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,l.jsx)(s.VY,{fontSize:"lg",children:e.about})})]})]}),(0,l.jsxs)(a.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,l.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,l.jsx)(m,{})}),(0,l.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,l.jsx)(g,{})})]}),(0,l.jsx)(a.xu,{pt:"16",children:(0,l.jsx)(f,{})})]})}},6811:(e,t,i)=>{i.d(t,{VY:()=>b,nl:()=>h,rH:()=>g,r0:()=>x});var a=i(7621),o=i(9737),s=i(9204);const n=JSON.parse('{"name":"Prachaya tatiyasamrit","logoType":{"mobile":"Sprite","desktop":"Prachaya tatiyasamrit"},"mainPicture":"/portfolio/assets/HP2.webp","mainPictureJPG":"/portfolio/assets/HP2.jpg","pronunciation":"Sprite","audioFile":"/portfolio/assets/name-pro.mp3","cssVarPrefix":"sprite","email":"prachaya5641.pt@gmail.com","linkedin":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/","github":"https://github.com/sprite5641","resume":"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/"},{"type":"github","link":"https://github.com/sprite5641"},{"type":"mail","link":"mailto:prachaya5641.pt@gmail.com"}]}'),r=JSON.parse('{"headline":"Hello, I\'m Prachaya tatiyasamrit.","picture":"/portfolio/assets/landing/face2.webp","jpg":"/portfolio/assets/landing/face2.jpg"}'),d=JSON.parse('[{"id":"featured-project-pos","title":"Point of Sale","year":"Feb 2023 - Present","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A point of sale system for a restaurant. The system is built with NuxtJs and Golang. The system is deployed on GCP. The system is integrated with a thermal printer and a cash drawer. The system is integrated with a payment gateway.","image":"/portfolio/assets/featured-projects/pos.webp","jpg":"/portfolio/assets/featured-projects/pos.png"},{"id":"featured-project-daywork","title":"Daywork","year":"Apr 2022 - Aug 2022","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding part-time and full-time jobs. The system is built with NuxtJs and Golang. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/daywork.webp","jpg":"/portfolio/assets/featured-projects/daywork.png"},{"id":"featured-project-esport","title":"Esport Underground","year":"Dec 2020 - Jun 2021","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Nodejs","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding and creating esport tournaments. The system is built with NuxtJs and Nodejs. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/esport.webp","jpg":"/portfolio/assets/featured-projects/esport.png"}]'),l=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/sprite5641","demo":"https://sprite5641.github.io/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/portfolio/assets/other-projects/post.webp","jpg":"/portfolio/assets/other-projects/post.jpeg"}]'),c=JSON.parse('{"educations":[{"id":"edu-1","school":"Lampang Rajabhat University","degree":"Information Technology","duration":"Aug 2016 - Mar 2020","content":["GPA: 3.36","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence"]},{"id":"edu-2","school":"Lampangpoly","degree":"Electronics","duration":"May 2013 - Apr 2016","content":["GPA: 3.63","Courses: Digital Electronics, Microprocessor"]}],"experiences":[{"id":"exp-1","company":"Infinity Code Co., Ltd","position":"Full Stack Developer","duration":"Sep 2022 - Present","description":["Leading scalable web app development with Node.js and Nuxt.js to improve performance and engagement.","Developing Golang server logic for efficient data processing and quick responses.","Spearheading seamless integration of RESTful APIs for effective front-end to back-end communication.","Driving development of intuitive, responsive interfaces with Nuxt.js for uniform multi-device experiences.","Involved in database design and management using best practices for performance and scalability.","Ensuring code quality and maintainability with agile methods, thorough reviews, and automated testing.","Key role in CI/CD processes, using DevOps tools for streamlined app updates and deployments."]},{"id":"exp-2","company":"Paiduaykanmai Co., Ltd","position":"Mid-level Backend Developer","duration":"Apr 2022- Aug 2022","description":["Developed a real-time data pipeline for efficient stream processing, guaranteeing up-to-date and precise information for users in research and healthcare.","Worked closely with front-end teams to merge backend systems with interactive web interfaces for fluid data integration and user interaction.","Performed extensive usability tests and user feedback rounds, creating more intuitive and agile interfaces, improving user experience.","Crucial in database and server optimization, achieving a 40% boost in app responsiveness and data access speed."]},{"id":"exp-3","company":"Infinity Code Co., Ltd","position":"Junior Backend Developer","duration":"Dec 2020 - Mar 2022","description":["Led the development of a high-performance API for a dynamic web app, improving data management and backend functionality, which enhanced efficiency and user experience.","Contributed to server load optimization and resource allocation, achieving smoother performance and reducing server downtime by 30%.","Engaged in backend enhancements by adopting cutting-edge development methods and tech, enhancing project scalability and maintainability."]}],"skills":[{"title":"Programming","tools":["TypeScript","JavaScript","Golang","NoSQL","SQL"]},{"title":"Web","tools":["React","Vue","NodeJS","Golang","HTML/CSS","OAuth","i18n"]},{"title":"Databases","tools":["MongoDB","Redis","PostgreSQL","Firebase"]},{"title":"OS & Tools","tools":["MacOS","Git","Agile (Scrum)","Heroku","Docker"]}]}'),p=i.p+"static/media/landing.e74c00f9137cc5db4a81.md",u=i.p+"static/media/about.d77e7d3a1c9180698c14.md";var m=i(2255);const g={common:n,landing:r,featuredProjects:d,otherProjects:l,about:c};let h=function(e){return e.Landing="landing",e.About="about",e}({});const f={[h.Landing]:p,[h.About]:u},x=e=>{const[t,i]=(0,a.useState)({landing:"",about:""});return(0,a.useEffect)((()=>{fetch(f[e]).then((e=>e.text())).then((t=>i((i=>({...i,[e]:t})))))}),[e]),t},b=e=>{let{children:t,...i}=e;return(0,m.jsx)(o.Kq,{spacing:"4",children:(0,m.jsx)(s.D,{components:{p:e=>{let{node:t,...a}=e;return(0,m.jsx)(o.xv,{...i,...a})},a:e=>{let{node:t,...i}=e;return(0,m.jsx)(o.rU,{href:i.href,target:"_blank",color:"primary.200",...i})},ul:e=>{let{node:t,...i}=e;const{ordered:a,...s}=i;return(0,m.jsx)(o.QI,{...s,"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"})},li:e=>{let{node:t,...i}=e;const{ordered:a,...o}=i;return(0,m.jsx)("li",{"data-aos":"flip-up","data-aos-delay":100*i.index+400,...o})}},children:t})})}},1729:(e,t,i)=>{i.d(t,{$:()=>s});var a=i(9737),o=i(2255);const s=e=>{let{id:t,tags:i,size:s="sm"}=e;return(0,o.jsx)(a.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map(((e,i)=>(0,o.jsx)(a.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,o.jsx)(a.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:s,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))))})}}}]);
//# sourceMappingURL=920.b405e84c.chunk.js.map