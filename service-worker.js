if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let b={};const r=e=>a(e,i),f={module:{uri:i},exports:b,require:r};s[i]=Promise.all(d.map((e=>f[e]||r(e)))).then((e=>(c(...e),b)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/00_links_uteis.html-29acfabc.js",revision:"449d4eabc55c5a2a4862a2eaa8552eeb"},{url:"assets/00_links_uteis.html-f3ff0c2a.js",revision:"87d3fc9d5aabe0f81f7da743c765148f"},{url:"assets/01_apresentacao_disciplina.html-794c6c42.js",revision:"e8f9af5f1030496879d2659d8b404665"},{url:"assets/01_apresentacao_disciplina.html-a78b574b.js",revision:"f947f204597646005191792b7c2efa88"},{url:"assets/01_estrutura_c.html-a69ea2c6.js",revision:"18e0f1fc488473fa48f5282a5083008a"},{url:"assets/01_estrutura_c.html-aeac2df7.js",revision:"bfee5e6a8c0864906d77f928f56b28f2"},{url:"assets/02_condicional.html-02760f43.js",revision:"105e51d372297acd5ed3001bf2d0dcc1"},{url:"assets/02_condicional.html-cc42d1ad.js",revision:"a637da5784b04b93e156dd72fc7eda17"},{url:"assets/02_github.html-051b88b3.js",revision:"dc283ea72b48154aaf5ed265f7774a6e"},{url:"assets/02_github.html-6e6050d9.js",revision:"b58dd79abb93cd6150e9d590c610e012"},{url:"assets/03_linguagem_programacao.html-ec3d0a42.js",revision:"c582a2e2ade1b980b9d96b1d4bbb07d2"},{url:"assets/03_linguagem_programacao.html-f988081b.js",revision:"91fbeb16f807d7920e457d04377ad1f9"},{url:"assets/03_ListaExercicios.html-e1e4a6cf.js",revision:"36c969b225ba36a8063ebb38cc0b05e4"},{url:"assets/03_ListaExercicios.html-f1da2d57.js",revision:"090f57ec25371f48c98f26e189fbfe56"},{url:"assets/04_linguagem_c.html-71f6a45c.js",revision:"4ab47340e0d1ba1baf368991330c5d36"},{url:"assets/04_linguagem_c.html-c122ebee.js",revision:"fd7191e50f99ee1c7eb16e2d5a723499"},{url:"assets/04_repeticao-01.html-90e1a4ad.js",revision:"6e5d218ce8a62be57429843a84c0c101"},{url:"assets/04_repeticao-01.html-c20406ed.js",revision:"b4e530a7fa9b70417d5b3a0a8130c66c"},{url:"assets/05_condicional.html-170b0341.js",revision:"c0d6a23c68cf1faee2668e745f49a10c"},{url:"assets/05_condicional.html-f8df4023.js",revision:"19d1e3b83808e33bb68ab21a52f5e06f"},{url:"assets/05_repeticao-02.html-630103dd.js",revision:"99b8dcb5c8abc738d78acb22623d06d9"},{url:"assets/05_repeticao-02.html-bf977e4e.js",revision:"21ba7ea3be738a97b70701fc201c280a"},{url:"assets/06_funcao-01.html-666e4e23.js",revision:"363134a9712d2ef91ffe97fcf5a4795e"},{url:"assets/06_funcao-01.html-a4f1c233.js",revision:"aa3f7faaf26f3c44dbdd4347334eafcd"},{url:"assets/06_repeticao.html-336e4a21.js",revision:"cd6fc5879c27c19fffe0d6fce9c6d042"},{url:"assets/06_repeticao.html-33ba9c3e.js",revision:"e5480a6e48aa8d8b7331543610e664dc"},{url:"assets/07_estrutura.html-049afc1f.js",revision:"9990282b2d8976cc0076594c80e8ae22"},{url:"assets/07_estrutura.html-630ac70f.js",revision:"d97d6058e0659f37cca1120ab61ba402"},{url:"assets/07_funcao-02.html-94a965bf.js",revision:"f7aa7e5a849452bc81f74533e246f4bb"},{url:"assets/07_funcao-02.html-cf33ace6.js",revision:"42b19d2bc173662a2ffcac57e27d71e7"},{url:"assets/08_funcao-03.html-29b66d9a.js",revision:"b83be041e214d9bda49aa859cf849db8"},{url:"assets/08_funcao-03.html-d57ed08a.js",revision:"10ff846fd8cf60c01bc75d8bd9f8a9e1"},{url:"assets/09_matriz.html-257cb1fc.js",revision:"fe12ef7944014931df93fa25603d5b04"},{url:"assets/09_matriz.html-8d6bf20e.js",revision:"4210eceabc753039311c97ca80077d49"},{url:"assets/10_matriz_uppercase.html-1bac1b61.js",revision:"02b69941b231adc47112c2dbbf0bdc4e"},{url:"assets/10_matriz_uppercase.html-a9ee0c49.js",revision:"0fd7ea9aa5e874262ef223c5fe779e5e"},{url:"assets/11_matriz_somacoluna.html-4fc7c451.js",revision:"77e6779230ad53a98929b05216cf09f5"},{url:"assets/11_matriz_somacoluna.html-d513b289.js",revision:"2daa24a913a70554d2606793ef7a7849"},{url:"assets/404.html-609ac968.js",revision:"db8b76c57bd96ac56dfea645c09ce7aa"},{url:"assets/404.html-d6283ca7.js",revision:"8875676c3ff94c56a1f53f561596b1db"},{url:"assets/app-0f142113.js",revision:"4b2a318c9e242fd6ac1c4b3801b01c90"},{url:"assets/bib.html-e24557d3.js",revision:"36f4cf77e3fe5923a7a22415eec8634c"},{url:"assets/bib.html-f38de2cc.js",revision:"7e39a1ec5b181930f731c397728f8996"},{url:"assets/ementa.html-0ad99191.js",revision:"c446f85e9bb7e0518646e0185d577cab"},{url:"assets/ementa.html-2c8bb218.js",revision:"c0fa1906bda333cdbbf3767ffb0bb063"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0854c1eb.js",revision:"d37c03e8aa940d1417d85e5c6afb00b1"},{url:"assets/index.html-0a892254.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-0c58c524.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-159c48de.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-1a36e18b.js",revision:"fcc145bfb8c4739c1e98de3a175ee256"},{url:"assets/index.html-238097d6.js",revision:"ab79d8610b2ac578d1a6020a656abe68"},{url:"assets/index.html-33506ce3.js",revision:"66a2669480592d6a5174eb8a335767e8"},{url:"assets/index.html-3777a9d7.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-3b204187.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-3f17530b.js",revision:"0de4492f1943c67ddc80cdf76ffbd012"},{url:"assets/index.html-401b2356.js",revision:"043bf3896d349d0ea4057c9ec3c83c45"},{url:"assets/index.html-4241c58a.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-481e7c0d.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-5158f4f5.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-51a0c4e2.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-53d93307.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-55816e38.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-6ef5291a.js",revision:"8151fa2f986fabf02f671e6edfd4c339"},{url:"assets/index.html-75923c5c.js",revision:"a8c1c28d96899ee66aadbd60fe997147"},{url:"assets/index.html-78303c80.js",revision:"6e436a6af200b56be13bf838b3fea967"},{url:"assets/index.html-79e200ee.js",revision:"3d9455251c35002c45fb8666230d0ea4"},{url:"assets/index.html-88487805.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-8ed945fb.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-90774973.js",revision:"6d3842834d1869069deacefff6df1d77"},{url:"assets/index.html-952c1d1e.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-97abef91.js",revision:"9d6feadae4c3d579617f74042725f0bf"},{url:"assets/index.html-9e2ce054.js",revision:"577ac185eb6aa67a927cf0bbee1b6b84"},{url:"assets/index.html-9f00b2a9.js",revision:"f58de03d3bcddf59ab95f17119be3866"},{url:"assets/index.html-a0745a8b.js",revision:"5d31ff5251ad935fdab361cd9758db44"},{url:"assets/index.html-a2fcb660.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-a44e370b.js",revision:"c9fb2afff0e652d7494d8b9254250eaf"},{url:"assets/index.html-a5dd8036.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-a7e67f24.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-a8965e91.js",revision:"455389f7d36f38800bf9322022b775b2"},{url:"assets/index.html-a9bb11a1.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-b476b262.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-bbc972dc.js",revision:"8e8e0003876f861fbbcd53ceef9fc7b8"},{url:"assets/index.html-bee2b4e4.js",revision:"66a2669480592d6a5174eb8a335767e8"},{url:"assets/index.html-bf63adfa.js",revision:"c13df7fdc0fcddea7b4f675c821f1653"},{url:"assets/index.html-c0954647.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-c20ead21.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-c9129933.js",revision:"66a2669480592d6a5174eb8a335767e8"},{url:"assets/index.html-cc07a3df.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-cd82dbdd.js",revision:"7e47d9133a99301ed919c43bd96a6bf6"},{url:"assets/index.html-d2d6da2f.js",revision:"9a4037f45147ba9786933e8bb4f8e73a"},{url:"assets/index.html-d68be9a8.js",revision:"57f74423033e9774b6cc123e21d77ab0"},{url:"assets/index.html-d8f34181.js",revision:"791bb59a4e7a0d6ec88ea9192bcbb7f0"},{url:"assets/index.html-dccbafb4.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-e61b6a10.js",revision:"1a46ee77070aefcd6e5811783e3429ee"},{url:"assets/index.html-f759863d.js",revision:"2ca7968005ee4fb45b95a0d6eeda09df"},{url:"assets/index.html-fd0438d7.js",revision:"ca0fd9879fc2efc74c00d612fd9521b5"},{url:"assets/index.html-fd585b1b.js",revision:"bf7058c2cd552db89db7ee1d14bc0c78"},{url:"assets/index.html-ff76e4ed.js",revision:"1a3ca573ea9bd3c5ad08db50b7ccbd3c"},{url:"assets/index.html-ffcdb406.js",revision:"991a72c86a244ec97d2e9f6e391995c1"},{url:"assets/intro.html-256e23c2.js",revision:"b66856ad06eb208c9327298012031bc8"},{url:"assets/intro.html-d2d9b6df.js",revision:"c548739a1f6c597463594e76c1da62dc"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-86e18f47.css",revision:"0f2a655b09718f032e771bf3e839b2be"},{url:"assets/TemplateSteps.html-2d56b728.js",revision:"fbb7ac8cfa3e2c7c37dadf6bdc2e9067"},{url:"assets/TemplateSteps.html-7c815d5a.js",revision:"7a75d8a7491f67467c5b28c622d69264"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"index.html",revision:"4874b96558abd62bc80daa26af4c36a0"},{url:"404.html",revision:"35909803fce040130bad94b9cc1add49"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
