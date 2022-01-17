(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67702d57"],{"2a56":function(e,t,i){},"486b":function(e,t,i){"use strict";i("2a56")},"723c":function(e,t,i){},"85c6":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",[i("name-header"),i("b-container",{staticClass:"project-details"},[i("div",{staticClass:"section-heading"},[i("h1",[e._v(e._s(e.projectDetails.title))]),i("h6",[e._v(e._s(e.projectDetails.subtitle))])]),i("div",{staticClass:"portfolio-item"},[i("div",{staticClass:"portfolio-description"},[i(e.projectDetails.descriptionComponent,{tag:"div"})],1)])])],1)},a=[],s=i("311a"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",[e._v("\n    description wow what a sorry mess obviously not done yet\n  ")])])}],l=i("2877"),c={},h=Object(l["a"])(c,o,r,!1,null,null,null),u=h.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",[i("div",[i("p",[e._v("\n      description wow what a sorry mess obviously not done yet\n    ")])])])},m=[],g={},p=Object(l["a"])(g,d,m,!1,null,null,null),f=p.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",[e._v("\n      description wow what a sorry mess obviously not done yet\n   ")])])}],_={},w=Object(l["a"])(_,b,v,!1,null,null,null),y=w.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",[e._v("\n      description wow what a sorry mess obviously not done yet\n   ")])])}],D={},j=Object(l["a"])(D,k,C,!1,null,null,null),T=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"description-container"},[n("b-row",[n("b-col",{attrs:{lg:"5"}},[n("h3",[e._v("Description")]),n("p",[e._v('\n          The original Tron was created in 1982 and was extremely popular at the time, \n          leading to some people calling Snake games "Light Cycle games". \n          The original mini-game features a single player moving a futuristic motorcycle, called a light cycle within the Tron universe, around the screen in a grid-like behaviour. Light cycles can create walls of light where any light cycle can crash into.\n          The player is also able to slow down the speed of the bike. The objective of the game is to force one or more enemy cycles into crashing into these trails or into the edges of the screen while avoiding them yourself at the same time.\n        ')]),n("p",[e._v("\n          In the original, the player would play through the 4 mini games in increasing difficulty endlessly. For the light cycle mini-game, a higher difficulty meant more enemies.  \n          A 2 player solution was implemented here instead, scrapping the increasing difficulty mechanic.\n        ")]),n("p",[e._v("\n          Challenges consisted of getting walls to connect properly while changing speed, emulating grid-like movement, collision detections, and prioritizing features. \n          Details of challenges can be found in the mid-term presentation. \n          Although I really wanted to implement AI enemies, too much time was spent on fixing core issues, which was a bit sad.\n          Development time was ~3 weeks. \n        ")])]),n("b-col",{attrs:{lg:"7"}},[n("b-img",{staticClass:"details-image",attrs:{center:"",src:i("ba4a"),alt:"Image"}})],1)],1)],1),n("h3",[e._v("Specification")]),e._m(0),n("h3",[e._v("Mechanics")]),n("b-container",[n("b-row",[n("b-col",[n("p",[n("strong",[e._v("Light Cycles:")])]),n("ul",[n("li",[e._v("Move around in a grid-like fashion")]),n("li",[e._v("3 different speeds - Slow, Default, Fast")]),n("li",[e._v("Wall Trails left behind bike")]),n("li",[e._v("Crash when hit walls or edge")])])]),n("b-col",[n("p",[n("strong",[e._v("Game")])]),n("ul",[n("li",[e._v("Score for each Player")]),n("li",[e._v("Change Background")])])])],1)],1),n("h3",[e._v("Roles & Responsibilities")]),n("p",[e._v("\n       As the sole creator of the game, I was responsible for the design, programming, and sound for the game. \n       As this was made in a course that emphasized good architecture, special attention was paid to the engine architecture.\n       A detailed report of the code is linked at the bottom of the page. \n    ")]),n("h3",[e._v("Tools used:")]),e._m(1),n("h3",{staticClass:"align-center"},[e._v("Links")]),n("b-container",[n("b-row",[n("b-col",{staticClass:"link-col"},[n("a",{staticClass:"link-item float-left"},[n("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/GEATron",target:"_blank"}},[n("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/GEATronReport.pdf",target:"_blank"}},[n("strong",[e._v("Read Tron Report")])])],1),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/MidtermTron.pdf",target:"_blank"}},[n("strong",[e._v("Mid-Term Presentation")])])],1),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/FinalPresentationTron.pdf",target:"_blank"}},[n("strong",[e._v("Final Presentation")])])],1)])],1)],1)],1)},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n     Tron consists of two basic entities: The "),i("strong",[e._v("players' Light Cycles")]),e._v(" and the "),i("strong",[e._v("Wall Trails")]),e._v(" produced. Light Cycles explode upon hitting any wall or edge.\n  ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("C++")]),i("li",[e._v("SDL")]),i("li",[e._v("Version Control - Git")])])}],R=(i("d50e"),{}),x=Object(l["a"])(R,E,P,!1,null,"5b6cf179",null),A=x.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("Description")]),i("p",[e._v('\n      Jenga Fortress is a physics-based, local 2-player Augmented Reality(AR) game for the Experimental Game Design Course.\n      Players need to force the opponent\'s "core block", which is hidden from them, out of their boundary in order to win.\n      They then take turns firing explosive blocks at each other, and can pick apart their fortresses to "fortify" their own core block.\n    ')]),i("p",[e._v('\n      Originally, there was the feature of letting players build their own fortresses. \n      Ammo was supposed to be limited, forcing players to take apart their own fortress to use as ammo - hence the "Jenga" inspiration.\n      The development time of ~1 month required us to reduce our scope.\n      It was a challenge to reduce the scope while maintaining the central concepts of strategy and skill.\n    ')]),i("p",[e._v("\n      There were many challenges along the way. Our team was new to AR, and much time was spent fixing technical issues resulting from that.\n      Scaling in AR was especially difficult, as the game objects looked enormous in AR. Yet, scaling the objects down reduced physics stability. \n      Rather than making the game objects smaller, the camera is actually made bigger and farther away from the content.\n      Optimizing the physics engine for the game was particularly important for our game. Each block is a rigidbody, and a single fortress has ~450 blocks.  \n      Much discussion revolved around optimizing the code architecture for easier task splitting and development, resulting in the usage of broadcasted events, singletons, and state machines.\n    ")]),i("h3",[e._v("Tools used:")]),e._m(0),i("h3",[e._v("Roles & Responsibilities")]),i("h5",[e._v("Game Design")]),e._m(1),i("h5",[e._v("Programmer")]),e._m(2),i("h3",{staticClass:"align-center"},[e._v("Links")]),i("b-row",[i("b-col",{staticClass:"link-col"},[i("a",{staticClass:"linkbutton btn btn-outline-light btn-lg float-left pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/JengaFortress",target:"_blank"}},[i("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})]),i("a",{staticClass:"link-button"},[i("b-button",{attrs:{href:"./ProjectDocuments/JengaFortressReport.pdf",target:"_blank"}},[i("strong",[e._v("Read Game Report")])])],1),i("a",{staticClass:"link-button"},[i("b-button",{attrs:{href:"./ProjectDocuments/JengaFortressMidPresentation.pdf",target:"_blank"}},[i("strong",[e._v("Mid-term Presentation")])])],1)])],1)],1)},$=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Unity3D - ARFoundation")]),i("li",[e._v("C#")]),i("li",[e._v("Version Control - Git")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Came up with original game concept, helped finalize mechanics.")]),i("li",[e._v("Communicated concept and vision to the team, establishing a common understanding. While the concept was easier to explain, tt was a bit difficult conveying the feeling of strategy and skill I wanted the game to have.")]),i("li",[e._v("Participated in prioritizing features and reducing scope while maintaining central concept.")]),i("li",[e._v("Optimized fortress to reduce rigidbodies in mobile.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Established and improved code architecture to facilitate collaboration + development for the team.")]),i("li",[e._v("Partially designed in-game block structures.")]),i("li",[e._v(" Implemented:\n        "),i("ul",[i("li",[e._v("General Game Flow")]),i("li",[e._v("AR tracking, placing Gameobjects into AR.")]),i("li",[e._v("Multitude of behaviours, including but not limited to Explosive block behaviour, Moving blocks, and Win Conditions.")])])]),i("li",[e._v("Facilitated testing to prevent constantly building to mobile, resulting in faster iterations.")]),i("li",[e._v("Physics Optimizations. Our game has around ~900+ rigidbodies on mobile. Pain.")]),i("li",[e._v("Early UI, for debugging and visualization purposes. We don't talk about that.")])])}],F=(i("eab7"),{}),G=Object(l["a"])(F,O,$,!1,null,"babeaa20",null),M=G.exports,z={props:["projectDetails"],components:{NameHeader:s["default"],FeelTheDisasterDesc:u,TouchingHeartsDesc:f,TimeloopMetroidDesc:y,GetMeowtOfHereDesc:T,TronReplicaDesc:A,JengaFortressDesc:M},methods:{}},I=z,L=(i("486b"),Object(l["a"])(I,n,a,!1,null,"271dfa20",null));t["a"]=L.exports},"94dc":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ProjectDetails",{attrs:{projectDetails:e.projectDetails}})],1)},a=[],s=i("85c6"),o={components:{ProjectDetails:s["a"]},data:()=>({projectDetails:{title:"Get Meowt Of Here",subtitle:"Local Multiplayer Empathetic Puzzler",mainImage:{name:"",index:0},images:[],descriptionComponent:"get-meowt-of-here-desc"}})},r=o,l=i("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);t["default"]=c.exports},d50e:function(e,t,i){"use strict";i("723c")},e143:function(e,t,i){},eab7:function(e,t,i){"use strict";i("e143")}}]);
//# sourceMappingURL=chunk-67702d57.882c4761.js.map