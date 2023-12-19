"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[920],{8051:(e,t,i)=>{i.r(t),i.d(t,{About:()=>x});var a=i(9737),n=i(7252),o=i(6811),s=i(7621),r=i(5598),d=i(9020),l=i(2255);const c=e=>{let{title:t,...i}=e;return(0,l.jsx)(a.X6,{fontSize:"2xl",fontWeight:"bold",...i,"data-aos":"fade-down",children:t})},p=e=>{let{title:t,...i}=e;return(0,l.jsx)(a.xv,{fontWeight:"semibold",fontSize:"lg",...i,"data-aos":"fade-down",children:t})},u=e=>{let{expanded:t,id:i,idx:n,title:o,subTitle:c,date:u,content:g,onChange:m}=e;const h=(0,s.useMemo)((()=>t.includes(n)),[t,n]),[f,x]=(0,s.useState)(!1),b=(0,s.useMemo)((()=>g.length>1&&!h||!h&&f),[f,h,g]);return(0,s.useEffect)((()=>{const e="first-point-".concat(i),t=document.getElementById(e);var a;t&&(t.scrollWidth>=(null===(a=t.parentElement)||void 0===a?void 0:a.scrollWidth)?x(!0):x(!1))}),[i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.KF,{as:a.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,l.jsx)(p,{title:o,fontWeight:"semibold"}),(0,l.jsx)(a.xv,{"data-aos":"fade",children:c}),(0,l.jsx)(a.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:u}),(0,l.jsxs)(a.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[h?(0,l.jsx)(a.QI,{listStylePosition:"outside",pl:"1",children:(0,l.jsx)(a.xv,{as:"li",isTruncated:!t.includes(n),children:g[0]})}):(0,l.jsx)(a.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(n),children:g[0]}),b&&(0,l.jsx)(d.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:()=>{if(t.includes(n)){const e=t.filter((e=>e!==n));m(e)}else m([...t,n])},children:"See more"})]})]}),(0,l.jsxs)(r.Hk,{p:"0",pl:"1",children:[(0,l.jsx)(a.QI,{listStylePosition:"outside",children:g.slice(1).map(((e,t)=>(0,l.jsx)(a.xv,{as:"li",children:e},"".concat(o,"-cont-").concat(t))))}),t.includes(n)&&(0,l.jsx)(a.kC,{justifyContent:"flex-end",children:(0,l.jsx)(d.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:()=>{const e=t.filter((e=>e!==n));m(e)},children:"See less"})})]})]})},g=()=>{const[e,t]=(0,s.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Education"}),(0,l.jsx)("br",{}),(0,l.jsx)(r.UQ,{pt:"2",allowMultiple:!0,index:e,id:"education",children:o.rH.about.educations.map(((i,a)=>(0,l.jsx)(r.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(u,{title:i.school,subTitle:i.degree,date:i.duration,content:i.content,id:i.id,idx:a,onChange:t,expanded:e})},"panel-".concat(a))))})]})},m=()=>{const[e,t]=(0,s.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Experiences"}),(0,l.jsx)("br",{}),(0,l.jsx)(r.UQ,{pt:"2",allowMultiple:!0,index:e,children:o.rH.about.experiences.map(((i,a)=>(0,l.jsx)(r.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(u,{id:i.id,title:i.company,subTitle:i.position,date:i.duration,content:i.description,idx:a,onChange:t,expanded:e})},"panel-".concat(a))))})]})};var h=i(1729);const f=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:"Skills",pb:"2"}),(0,l.jsx)("br",{}),o.rH.about.skills.map((e=>(0,l.jsxs)(a.xu,{p:"0",mb:"4",children:[(0,l.jsx)(p,{title:e.title}),(0,l.jsx)(h.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))))]}),x=()=>{const e=(0,o.r0)(o.nl.About);return(0,l.jsxs)(a.xu,{children:[(0,l.jsxs)(a.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,l.jsx)(a.xu,{flex:"0.35","data-aos":"fade-up",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{type:"image/webp",srcSet:o.rH.common.mainPicture}),(0,l.jsx)("source",{type:"image/jpeg",srcSet:o.rH.common.mainPictureJPG}),(0,l.jsx)(n.Ee,{borderRadius:"xl",src:o.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,l.jsxs)(a.xu,{flex:"0.85",children:[(0,l.jsx)(a.X6,{"data-aos":"fade-down",children:o.rH.common.name}),(0,l.jsx)(a.kC,{alignItems:"center",children:(0,l.jsx)(a.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:o.rH.common.pronunciation})}),(0,l.jsx)(a.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,l.jsx)(o.VY,{fontSize:"lg",children:e.about})})]})]}),(0,l.jsxs)(a.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,l.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,l.jsx)(g,{})}),(0,l.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,l.jsx)(m,{})})]}),(0,l.jsx)(a.xu,{pt:"16",children:(0,l.jsx)(f,{})})]})}},6811:(e,t,i)=>{i.d(t,{VY:()=>b,nl:()=>h,rH:()=>m,r0:()=>x});var a=i(7621),n=i(9737),o=i(9204);const s=JSON.parse('{"name":"Prachaya tatiyasamrit","logoType":{"mobile":"HP2","desktop":"Prachaya tatiyasamrit"},"mainPicture":"/portfolio/assets/HP2.webp","mainPictureJPG":"/portfolio/assets/HP2.jpg","pronunciation":"Sprite","audioFile":"/portfolio/assets/name-pro.mp3","cssVarPrefix":"hp2","email":"prachaya5641.pt@gmail.com","linkedin":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/","github":"https://github.com/sprite5641","resume":"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/prachaya-tatiyasamrit-6689941b0/"},{"type":"github","link":"https://github.com/sprite5641"},{"type":"mail","link":"mailto:prachaya5641.pt@gmail.com"}]}'),r=JSON.parse('{"headline":"Hello, I\'m Prachaya tatiyasamrit.","picture":"/portfolio/assets/landing/face2.webp","jpg":"/portfolio/assets/landing/face2.jpg"}'),d=JSON.parse('[{"id":"featured-project-pos","title":"Point of Sale","year":"Feb 2023 - Present","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A point of sale system for a restaurant. The system is built with NuxtJs and Golang. The system is deployed on GCP. The system is integrated with a thermal printer and a cash drawer. The system is integrated with a payment gateway.","image":"/portfolio/assets/featured-projects/pos.webp","jpg":"/portfolio/assets/featured-projects/pos.png"},{"id":"featured-project-daywork","title":"Daywork","year":"Apr 2022 - Aug 2022","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Golang","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding part-time and full-time jobs. The system is built with NuxtJs and Golang. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/daywork.webp","jpg":"/portfolio/assets/featured-projects/daywork.png"},{"id":"featured-project-esport","title":"Esport Underground","year":"Dec 2020 - Jun 2021","location":"Chiang Mai","demo":"-","github":"https://github.com/sprite5641","tags":["NuxtJs","Nodejs","Web Sockets","GCP","CI/CD","PostgreSQL"],"description":"A platform for finding and creating esport tournaments. The system is built with NuxtJs and Nodejs. The system is deployed on GCP.","image":"/portfolio/assets/featured-projects/esport.webp","jpg":"/portfolio/assets/featured-projects/esport.png"}]'),l=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/sprite5641","demo":"https://sprite5641.github.io/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/portfolio/assets/other-projects/post.webp","jpg":"/portfolio/assets/other-projects/post.jpeg"}]'),c=JSON.parse('{"educations":[{"id":"edu-1","school":"Lampang Rajabhat University","degree":"Information Technology","duration":"Aug 2016 - Mar 2020","content":["GPA: 3.36","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence"]},{"id":"edu-2","school":"Lampangpoly","degree":"Electronics","duration":"May 2013 - Apr 2016","content":["GPA: 3.63","Courses: Digital Electronics, Microprocessor"]}],"experiences":[{"id":"exp-1","company":"Infinity Code Co., Ltd","position":"Full Stack Developer","duration":"Sep 2022 - Present","description":["Spearheading the development of a highly scalable web application using Node.js and Nuxt.js, delivering robust front-end and back-end solutions that enhance overall system performance and user engagement.","Implementing server-side logic in Golang to handle high-throughput data processing, significantly improving application efficiency and reducing response times.","Leading the integration of a RESTful API architecture, ensuring seamless communication between front-end and back-end systems, and facilitating efficient data exchange.","Collaborating in the design and implementation of a microservices architecture, leveraging Golang\'s concurrency model to handle multiple service requests simultaneously.","Championing the development of responsive and intuitive user interfaces with Nuxt.js, enhancing user interaction and providing a seamless experience across various devices and platforms.","Actively involved in database design and management, employing best practices in data modeling and storage to optimize application performance and scalability.","Ensuring code quality and maintainability by adopting agile methodologies, conducting thorough code reviews, and implementing automated testing frameworks.","Playing a crucial role in continuous integration and deployment processes, utilizing modern DevOps tools to streamline and automate application updates and deployments."]},{"id":"exp-2","company":"Paiduaykanmai Co., Ltd","position":"Mid-level Backend Developer","duration":"Apr 2022- Aug 2022","description":["Engineered a real-time data processing pipeline that efficiently handled streaming data, ensuring timely and accurate updates for end-users in research and medical fields.","Collaborated closely with front-end developers to integrate the backend systems with dynamic web interfaces, ensuring seamless data flow and interaction.","Conducted thorough usability testing and user feedback sessions, leading to the development of more intuitive and responsive user interfaces, which enhanced the overall user experience.","Played a key role in optimizing database queries and server responses, resulting in a 40% improvement in application response times and data retrieval efficiency."]},{"id":"exp-3","company":"Infinity Code Co., Ltd","position":"Junior Backend Developer","duration":"Dec 2020 - Mar 2022","description":["Spearheaded the development of a robust API for a dynamic web application, enhancing data handling and server-side functionalities. This effort significantly improved backend efficiency and user experience.","Assisted in optimizing server load balancing and resource management, resulting in smoother application performance and a 30% reduction in server downtime.","Participated in the continuous improvement of backend systems by introducing modern development practices and technologies, contributing to the overall scalability and maintainability of the projects."]}],"skills":[{"title":"Programming","tools":["TypeScript","JavaScript","Golang","NoSQL","SQL"]},{"title":"Web","tools":["React","Vue","NodeJS","Golang","HTML/CSS","OAuth","i18n"]},{"title":"Databases","tools":["MongoDB","Redis","PostgreSQL","Firebase"]},{"title":"OS & Tools","tools":["MacOS","Git","Agile (Scrum)","Heroku","Docker"]}]}'),p=i.p+"static/media/landing.e74c00f9137cc5db4a81.md",u=i.p+"static/media/about.d77e7d3a1c9180698c14.md";var g=i(2255);const m={common:s,landing:r,featuredProjects:d,otherProjects:l,about:c};let h=function(e){return e.Landing="landing",e.About="about",e}({});const f={[h.Landing]:p,[h.About]:u},x=e=>{const[t,i]=(0,a.useState)({landing:"",about:""});return(0,a.useEffect)((()=>{fetch(f[e]).then((e=>e.text())).then((t=>i((i=>({...i,[e]:t})))))}),[e]),t},b=e=>{let{children:t,...i}=e;return(0,g.jsx)(n.Kq,{spacing:"4",children:(0,g.jsx)(o.D,{components:{p:e=>{let{node:t,...a}=e;return(0,g.jsx)(n.xv,{...i,...a})},a:e=>{let{node:t,...i}=e;return(0,g.jsx)(n.rU,{href:i.href,target:"_blank",color:"primary.200",...i})},ul:e=>{let{node:t,...i}=e;const{ordered:a,...o}=i;return(0,g.jsx)(n.QI,{...o,"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"})},li:e=>{let{node:t,...i}=e;const{ordered:a,...n}=i;return(0,g.jsx)("li",{"data-aos":"flip-up","data-aos-delay":100*i.index+400,...n})}},children:t})})}},1729:(e,t,i)=>{i.d(t,{$:()=>o});var a=i(9737),n=i(2255);const o=e=>{let{id:t,tags:i,size:o="sm"}=e;return(0,n.jsx)(a.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map(((e,i)=>(0,n.jsx)(a.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,n.jsx)(a.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:o,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))))})}}}]);
//# sourceMappingURL=920.874d8c3b.chunk.js.map