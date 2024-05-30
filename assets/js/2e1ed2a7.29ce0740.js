"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2052],{9618:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(6070),s=n(5710);n(8639);const r={},c="Documentaci\xf3n del Caso de Uso para la Redirecci\xf3n",o={id:"redirect/redirect",title:"Documentaci\xf3n del Caso de Uso para la Redirecci\xf3n",description:"Estructura",source:"@site/docs/redirect/redirect.mdx",sourceDirName:"redirect",slug:"/redirect/",permalink:"/Docusaurus/docs/redirect/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/redirect/redirect.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/Docusaurus/docs/tutorial-extras/translate-your-site"},next:{title:"Hello",permalink:"/Docusaurus/docs/hello"}},l={},d=[{value:"Estructura",id:"estructura",level:2},{value:"contexto",id:"contexto",level:2},{value:"Problematica",id:"problematica",level:2},{value:"An\xe1lisis",id:"an\xe1lisis",level:2},{value:"Alternativas y Estrategias para Mitigar el Problema",id:"alternativas-y-estrategias-para-mitigar-el-problema",level:3},{value:"Desaparici\xf3n de los Dominios Relacionados con el ABC de Seguros",id:"desaparici\xf3n-de-los-dominios-relacionados-con-el-abc-de-seguros",level:3},{value:"Consultas para el Especialista de SEO",id:"consultas-para-el-especialista-de-seo",level:3},{value:"Consultas T\xe9cnicas sobre Proxy Pass vs. C\xf3digo de Redirecci\xf3n",id:"consultas-t\xe9cnicas-sobre-proxy-pass-vs-c\xf3digo-de-redirecci\xf3n",level:3},{value:"Recomendaci\xf3n",id:"recomendaci\xf3n",level:3},{value:"Documento Oficial sobre P\xe9rdida de SEO",id:"documento-oficial-sobre-p\xe9rdida-de-seo",level:3},{value:"Consulta con Arquitectos DevOps y de Soluciones",id:"consulta-con-arquitectos-devops-y-de-soluciones",level:3},{value:"Plan de Acci\xf3n",id:"plan-de-acci\xf3n",level:3}];function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"documentaci\xf3n-del-caso-de-uso-para-la-redirecci\xf3n",children:"Documentaci\xf3n del Caso de Uso para la Redirecci\xf3n"}),"\n",(0,a.jsx)(i.h2,{id:"estructura",children:"Estructura"}),"\n",(0,a.jsx)(i.mermaid,{value:"sequenceDiagram\n    participant WebBrowser as Navegador Web\n    participant NGINX \n    participant Liferay as Servidor Liferay\n\n    Note over WebBrowser: Usuario solicita el contenido\n    WebBrowser->>+NGINX: Solicitud HTTP GET https://www.abcdelseguro.com.pe\n    NGINX->>+Liferay: Solicitud HTTP GET\n    Liferay--\x3e>NGINX: Devuelve conteido de https://www.pacifico.com.pe/web/abcdelseguro\n    NGINX--\x3e>WebBrowser: Muestra contenido en https://www.abcdelseguro.com.pe/\n\n    Note over Liferay:Liferay utiliza virtual hosting para servir el contenido"}),"\n",(0,a.jsx)(i.h2,{id:"contexto",children:"contexto"}),"\n",(0,a.jsxs)(i.p,{children:["La web corporativa se encuentra en Liferay, al igual que la web del ABC del Seguro. A trav\xe9s de Liferay, se hace un virtual host para que el contenido creado en Liferay con la ruta ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdelseguro"})," apunte hacia el dominio ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"}),". Esto significa que cuando los usuarios visiten ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"}),", ver\xe1n el contenido alojado en Liferay en la ruta ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdelseguro"}),", pero en el navegador aparecer\xe1 el dominio ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"})," debido a la configuraci\xf3n de virtual host en Liferay."]}),"\n",(0,a.jsx)(i.h2,{id:"problematica",children:"Problematica"}),"\n",(0,a.jsxs)(i.p,{children:["Se desea migrar los contenidos de ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"})," hacia una nueva ruta dentro de la web corporativa: ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdepacifico"}),"y el equipo de contenidos requiere realizar una redirecci\xf3n para que cuando los usuarios visiten ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"}),", sean redirigidos a ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdepacifico"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"an\xe1lisis",children:"An\xe1lisis"}),"\n",(0,a.jsx)(i.p,{children:"Al analizar la situaci\xf3n, se identificaron los siguientes puntos:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Existe un problema de redirecci\xf3n infinita que debe ser solucionado."}),"\n",(0,a.jsx)(i.li,{children:"Se necesita una evaluaci\xf3n de los especialistas de SEO para comprender el impacto de redirigir una URL can\xf3nica a un subdirectorio de la web corporativa."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"alternativas-y-estrategias-para-mitigar-el-problema",children:"Alternativas y Estrategias para Mitigar el Problema"}),"\n",(0,a.jsx)(i.h3,{id:"desaparici\xf3n-de-los-dominios-relacionados-con-el-abc-de-seguros",children:"Desaparici\xf3n de los Dominios Relacionados con el ABC de Seguros"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Se debe determinar si se eliminar\xe1n definitivamente los dominios relacionados con el ABC de Seguros."}),"\n",(0,a.jsx)(i.li,{children:"En caso afirmativo, se debe establecer un plazo para la eliminaci\xf3n de estos dominios y considerar los recursos asociados, como la vinculaci\xf3n con la IP del servidor Liferay."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"consultas-para-el-especialista-de-seo",children:"Consultas para el Especialista de SEO"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Se necesita comprender el impacto de redirigir una p\xe1gina con dominio propio a un subdirectorio en t\xe9rminos de SEO y URL can\xf3nica."}),"\n",(0,a.jsx)(i.li,{children:"Se debe definir si todas las p\xe1ginas del ABC coexistir\xe1n con las p\xe1ginas existentes en la web corporativa o si solo algunas ser\xe1n redirigidas."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"consultas-t\xe9cnicas-sobre-proxy-pass-vs-c\xf3digo-de-redirecci\xf3n",children:"Consultas T\xe9cnicas sobre Proxy Pass vs. C\xf3digo de Redirecci\xf3n"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Proxy Pass:"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Ventajas:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Permite mostrar el contenido de ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdepacifico"})," en ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"})," sin redireccionar al usuario."]}),"\n",(0,a.jsx)(i.li,{children:"Mantiene la apariencia del dominio original."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Desventajas:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Requiere m\xe1s recursos del servidor."}),"\n",(0,a.jsx)(i.li,{children:"Puede generar problemas de cach\xe9 y cookies."}),"\n",(0,a.jsx)(i.li,{children:"Mayor complejidad en gesti\xf3n y mantenimiento."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"C\xf3digo de Redirecci\xf3n (301 Redirect):"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Ventajas:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"SEO-friendly, indicando a los motores de b\xfasqueda que el contenido se movi\xf3 permanentemente."}),"\n",(0,a.jsx)(i.li,{children:"Simplifica la gesti\xf3n del servidor."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Desventajas:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Puede causar una ca\xedda temporal en el ranking de SEO."}),"\n",(0,a.jsx)(i.li,{children:"Los usuarios ven la redirecci\xf3n."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"recomendaci\xf3n",children:"Recomendaci\xf3n"}),"\n",(0,a.jsx)(i.p,{children:"Para minimizar el impacto en SEO, se recomienda utilizar una redirecci\xf3n 301 (c\xf3digo de redirecci\xf3n permanente). Esto informar\xe1 a los motores de b\xfasqueda sobre el cambio y transferir\xe1 la autoridad de la URL antigua a la nueva."}),"\n",(0,a.jsx)(i.h3,{id:"documento-oficial-sobre-p\xe9rdida-de-seo",children:"Documento Oficial sobre P\xe9rdida de SEO"}),"\n",(0,a.jsx)(i.p,{children:"Se debe crear un documento oficial que detalle los riesgos, estrategias de mitigaci\xf3n y el consentimiento de los interesados. Debe incluir un an\xe1lisis de la situaci\xf3n actual, estrategias de mitigaci\xf3n y aprobaci\xf3n formal de los interesados."}),"\n",(0,a.jsx)(i.h3,{id:"consulta-con-arquitectos-devops-y-de-soluciones",children:"Consulta con Arquitectos DevOps y de Soluciones"}),"\n",(0,a.jsx)(i.p,{children:"Se organizar\xe1 una reuni\xf3n con los arquitectos DevOps y de soluciones para revisar la configuraci\xf3n del servidor web (nginx) y discutir las mejores pr\xe1cticas para implementar la redirecci\xf3n. Se revisar\xe1 y ajustar\xe1 cualquier configuraci\xf3n existente para evitar problemas de redirecci\xf3n infinita y uso excesivo de recursos."}),"\n",(0,a.jsx)(i.h3,{id:"plan-de-acci\xf3n",children:"Plan de Acci\xf3n"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Reuni\xf3n con el Equipo de SEO:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Discutir el impacto de la redirecci\xf3n en SEO y URL can\xf3nica."}),"\n",(0,a.jsx)(i.li,{children:"Planificar estrategias de mitigaci\xf3n basadas en recomendaciones."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Documentaci\xf3n Oficial:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Preparar un documento detallado sobre los riesgos, estrategias de mitigaci\xf3n y consentimiento de los interesados."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Implementaci\xf3n T\xe9cnica:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Configurar una redirecci\xf3n 301 en el servidor web (nginx) de ",(0,a.jsx)(i.code,{children:"https://www.abcdelseguro.com.pe"})," a ",(0,a.jsx)(i.code,{children:"https://www.pacifico.com.pe/web/abcdepacifico"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"Realizar pruebas exhaustivas para garantizar su correcto funcionamiento."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Monitoreo y Ajustes:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Monitorear el rendimiento del servidor y el impacto en SEO post-implementaci\xf3n."}),"\n",(0,a.jsx)(i.li,{children:"Realizar ajustes seg\xfan sea necesario para optimizar el rendimiento y minimizar p\xe9rdidas en SEO."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Este plan asegura una transici\xf3n suave, considerando aspectos t\xe9cnicos y de SEO, minimizando impactos negativos en el servidor y en el posicionamiento en motores de b\xfasqueda."})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8639:(e,i,n)=>{n(6070)},5710:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>o});var a=n(758);const s={},r=a.createContext(s);function c(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);