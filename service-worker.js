if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let r={};const d=e=>a(e,b),f={module:{uri:b},exports:r,require:d};s[b]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/00_links_uteis.html-29acfabc.js",revision:"449d4eabc55c5a2a4862a2eaa8552eeb"},{url:"assets/00_links_uteis.html-74c2316f.js",revision:"402111562912d62ee1f49a766e2775b3"},{url:"assets/01_apresentacao_disciplina.html-a78b574b.js",revision:"f947f204597646005191792b7c2efa88"},{url:"assets/01_apresentacao_disciplina.html-c5eee9f1.js",revision:"924e1b90fc402890b3cbc42811976f22"},{url:"assets/01_estrutura_c.html-85496043.js",revision:"be48f80c6abf0820a9e37b8402f0b01b"},{url:"assets/01_estrutura_c.html-f991c22b.js",revision:"7f415bef17cc42345e4fecca4bec5914"},{url:"assets/02_condicional.html-1b978c50.js",revision:"eab7f2fa590e8e191d02d8e19f889e53"},{url:"assets/02_condicional.html-e95782cb.js",revision:"1b2c879fef8bcf1a0a008bb693a37d0d"},{url:"assets/02_github.html-051b88b3.js",revision:"dc283ea72b48154aaf5ed265f7774a6e"},{url:"assets/02_github.html-d0b5b8e2.js",revision:"170a4d079ad0f93d5ab44891b15c41cf"},{url:"assets/03_linguagem_programacao.html-0f0cfd15.js",revision:"b723889f6877a71ec7d8d65c215c7c87"},{url:"assets/03_linguagem_programacao.html-f988081b.js",revision:"91fbeb16f807d7920e457d04377ad1f9"},{url:"assets/03_ListaExercicios.html-2226d157.js",revision:"5e08e95e3831aa001a4036aa9e578726"},{url:"assets/03_ListaExercicios.html-5c089428.js",revision:"41dd46b89876fc4b8c9fc8e9926e9b5f"},{url:"assets/04_linguagem_c.html-c122ebee.js",revision:"fd7191e50f99ee1c7eb16e2d5a723499"},{url:"assets/04_linguagem_c.html-c5a626a0.js",revision:"ce2f625a5366885ad71a8306d9c64a80"},{url:"assets/04_repeticao-01.html-6dfb13ee.js",revision:"6a36bee5da59d2f46b46812ecf85c394"},{url:"assets/04_repeticao-01.html-90e1a4ad.js",revision:"6e5d218ce8a62be57429843a84c0c101"},{url:"assets/05_condicional.html-f3bc9b37.js",revision:"571e34e7f461923b42a2e8324ac1cf0b"},{url:"assets/05_condicional.html-f8df4023.js",revision:"19d1e3b83808e33bb68ab21a52f5e06f"},{url:"assets/05_repeticao-02.html-630103dd.js",revision:"99b8dcb5c8abc738d78acb22623d06d9"},{url:"assets/05_repeticao-02.html-e3cee529.js",revision:"38e686937d212fc774138d5cf46675a0"},{url:"assets/06_funcao-01.html-db8d7d4f.js",revision:"a1b6aaa0685f28000932f4ca2f0d70a2"},{url:"assets/06_funcao-01.html-ed7c2aee.js",revision:"ca0632fa2546481668a8a8f84a422127"},{url:"assets/404.html-986d71ea.js",revision:"6a274029b5252e4deac8b860d264e594"},{url:"assets/404.html-d6283ca7.js",revision:"8875676c3ff94c56a1f53f561596b1db"},{url:"assets/app-f4f08944.js",revision:"f2b738ac6a5cc6f9abea0882a091bc88"},{url:"assets/bib.html-e24557d3.js",revision:"36f4cf77e3fe5923a7a22415eec8634c"},{url:"assets/bib.html-f8e7342c.js",revision:"c8d38ad141aea0213fc78abeeb65ba03"},{url:"assets/ementa.html-2c8bb218.js",revision:"c0fa1906bda333cdbbf3767ffb0bb063"},{url:"assets/ementa.html-34e8b1a2.js",revision:"1634dcb37494d84ff645918a359db850"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0854c1eb.js",revision:"d37c03e8aa940d1417d85e5c6afb00b1"},{url:"assets/index.html-11fc69bb.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-132251ef.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-1a36e18b.js",revision:"fcc145bfb8c4739c1e98de3a175ee256"},{url:"assets/index.html-238097d6.js",revision:"ab79d8610b2ac578d1a6020a656abe68"},{url:"assets/index.html-2c9bd3ad.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-3577b752.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-3a59ee57.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-3aa1ad32.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-3f17530b.js",revision:"0de4492f1943c67ddc80cdf76ffbd012"},{url:"assets/index.html-401b2356.js",revision:"043bf3896d349d0ea4057c9ec3c83c45"},{url:"assets/index.html-410eff00.js",revision:"e81f296fc84044547c77e9a77cb3ebeb"},{url:"assets/index.html-436fa7e2.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-4f0a6fda.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-60213b9e.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-6778faeb.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-67c2c946.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-6ef5291a.js",revision:"8151fa2f986fabf02f671e6edfd4c339"},{url:"assets/index.html-710ad934.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-75923c5c.js",revision:"a8c1c28d96899ee66aadbd60fe997147"},{url:"assets/index.html-78303c80.js",revision:"6e436a6af200b56be13bf838b3fea967"},{url:"assets/index.html-79e200ee.js",revision:"3d9455251c35002c45fb8666230d0ea4"},{url:"assets/index.html-89b95c08.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-90774973.js",revision:"6d3842834d1869069deacefff6df1d77"},{url:"assets/index.html-96899257.js",revision:"e81f296fc84044547c77e9a77cb3ebeb"},{url:"assets/index.html-97abef91.js",revision:"9d6feadae4c3d579617f74042725f0bf"},{url:"assets/index.html-9e2ce054.js",revision:"577ac185eb6aa67a927cf0bbee1b6b84"},{url:"assets/index.html-9f00b2a9.js",revision:"f58de03d3bcddf59ab95f17119be3866"},{url:"assets/index.html-a0745a8b.js",revision:"5d31ff5251ad935fdab361cd9758db44"},{url:"assets/index.html-a1a8ee69.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-a2f8b3a9.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-a44e370b.js",revision:"c9fb2afff0e652d7494d8b9254250eaf"},{url:"assets/index.html-a8551ee1.js",revision:"e81f296fc84044547c77e9a77cb3ebeb"},{url:"assets/index.html-a8965e91.js",revision:"455389f7d36f38800bf9322022b775b2"},{url:"assets/index.html-aa959cda.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-bbc972dc.js",revision:"8e8e0003876f861fbbcd53ceef9fc7b8"},{url:"assets/index.html-bf63adfa.js",revision:"c13df7fdc0fcddea7b4f675c821f1653"},{url:"assets/index.html-cbc01302.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-cd82dbdd.js",revision:"7e47d9133a99301ed919c43bd96a6bf6"},{url:"assets/index.html-d2d6da2f.js",revision:"9a4037f45147ba9786933e8bb4f8e73a"},{url:"assets/index.html-d68be9a8.js",revision:"57f74423033e9774b6cc123e21d77ab0"},{url:"assets/index.html-d8f34181.js",revision:"791bb59a4e7a0d6ec88ea9192bcbb7f0"},{url:"assets/index.html-d99f473b.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-e61b6a10.js",revision:"1a46ee77070aefcd6e5811783e3429ee"},{url:"assets/index.html-f3483386.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-f393c200.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-f50029e2.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-f759863d.js",revision:"2ca7968005ee4fb45b95a0d6eeda09df"},{url:"assets/index.html-f86d2458.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-fab491fb.js",revision:"ce2911b8ea4b20700c8c53632af1cea5"},{url:"assets/index.html-ff76e4ed.js",revision:"1a3ca573ea9bd3c5ad08db50b7ccbd3c"},{url:"assets/index.html-ffcdb406.js",revision:"991a72c86a244ec97d2e9f6e391995c1"},{url:"assets/intro.html-256e23c2.js",revision:"b66856ad06eb208c9327298012031bc8"},{url:"assets/intro.html-7459ff26.js",revision:"a2d986020227a4b6aa3e9d431b7eb73b"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-86e18f47.css",revision:"0f2a655b09718f032e771bf3e839b2be"},{url:"assets/TemplateSteps.html-2d56b728.js",revision:"fbb7ac8cfa3e2c7c37dadf6bdc2e9067"},{url:"assets/TemplateSteps.html-f982886c.js",revision:"36f18de8161e88da55aa035d4e023760"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"index.html",revision:"0cdcd9dbac76f84daf2ce1d111da77de"},{url:"404.html",revision:"9487eec2997022f25961e93eb962e858"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
