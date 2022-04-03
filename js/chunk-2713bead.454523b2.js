(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2713bead"],{"1bfa":function(e,t,a){"use strict";a("cdb2")},"222c":function(e,t,a){},"33a3":function(e,t,a){"use strict";a("5b79")},"3b81":function(e,t,a){},"5b79":function(e,t,a){},"6b91":function(e,t,a){},7893:function(e,t,a){"use strict";a("9fcf")},8270:function(e,t,a){"use strict";a("222c")},"85c6":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("name-header"),a("b-container",{staticClass:"project-details"},[a("div",{staticClass:"section-heading"},[a("h1",[e._v(e._s(e.projectDetails.title))]),a("h6",[e._v(e._s(e.projectDetails.subtitle))])]),a("div",{staticClass:"portfolio-item"},[a("div",{staticClass:"portfolio-description"},[a(e.projectDetails.descriptionComponent,{tag:"div"})],1)])])],1)},n=[],s=a("311a"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          Thrust into a very inefficient recycling facility, the player takes on the role as a new worker to sort recyclables. \n          A single robot has infiltrated the facility, making a mess. \n          The player must prevent the robot from burning the recyclables, hopefully learning how to be correctly recycle trash and be nicer to the world through their consumption habits.\n        ")]),a("p",[e._v("\n          A student game project which required us to make any game related to "),a("a",{attrs:{href:"https://sdgs.un.org/goals",target:"_blank"}},[e._v("SDGs")]),e._v(', \n          I wanted to make a game about how families could be affected by natural disasters by putting the player in the middle of one. Hence, the title.\n          As my first Unity game, I thought it would be "pretty funny" if I could pull off a Virtual Reality game, as it sounded ridiculous even to myself - \n          especially since it was a 20% workload course and I only had a month of development time.\n        ')])]),a("b-col",{attrs:{lg:"7"}},[a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",controls:"",indicators:"",interval:0}},e._l(this.media,(function(e){return a("b-carousel-slide",{key:e.url,attrs:{caption:"","img-src":e.url}})})),1)],1)])],1),a("p",{staticClass:"mt-3"},[e._v('\n      I quickly learned the limitations of both myself and the Quest. With the Quest unable to simulate fire spreading at an acceptable frame rate, my original idea quickly looked infeasible.\n      With 3 weeks left, I decided to take an "easier" theme - recycling. \n      Yet, I wanted a game that went beyond sorting garbage, and instead tried to look for interesting facts that could be included in the game.\n      I finally settled on "what happens after trash is sorted" - though that clearly did not go so well.\n    ')])],1),a("h3",[e._v("Concept")]),a("p",[e._v("\n    Recycle the milk carton correctly, preventing the enemy robot from burning the carton, and burn garbage unfit for recycling in a recycling facility! \n  ")]),a("h3",[e._v("Mechanics")]),a("b-container",[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("p",[a("strong",[e._v("Player")])]),a("ul",[a("li",[e._v("Pick, and throw objects in VR")]),a("li",[e._v("Wash Milk Carton")]),a("li",[e._v("Pick apart carton")]),a("li",[e._v("Punch Robot")]),a("li",[e._v("Burn Garbage")]),a("li",[e._v("Teleport/Movement")])])]),a("b-col",{attrs:{md:"8"}},[a("p",[a("strong",[e._v("Game")])]),a("ul",[a("li",[e._v("3 Levels: \n              "),a("ul",[a("li",[e._v("Tutorial")]),a("li",[e._v("Robot Battle")]),a("li",[e._v("Burning Dirty Recyclables")])])]),a("li",[e._v("Robot AI: \n              "),a("ul",[a("li",[e._v("Throw milk carton into fire box")]),a("li",[e._v('Punching player. A point light turned off everytime the player got hit to simulate "punching the daylights out of the player". Many bugs there.')])])]),a("li",[e._v("General Game Flow: Scripted audio for win/lose states, etc.")])])])],1)],1),a("h3",[e._v("Challenges")]),e._m(0),a("h3",[e._v("Roles & Responsibilities")]),a("p",[e._v("\n      As the sole creator of the game, I was responsible for the design, programming, and sound integration for the game. \n    ")]),a("h3",[e._v("Tools used:")]),e._m(1),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item float-left"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/FeelTheDisaster",target:"_blank"}},[a("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/FeelTheDisasterdarkplain.pdf",target:"_blank"}},[a("strong",[e._v("Final Presentation Poster")])])],1)])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    Many challenges were encountered:\n    "),a("ul",[a("li",[e._v("\n        Toolkit: At the time(November 2019), Unity's integration with the Oculus Quest was incomplete. \n        The VRTK solution looked attractive at the time due to its cross-platform nature, but its incomplete documentation then, \n        along with my lack of Unity knowledge created many technical roadblocks.\n      ")]),a("li",[e._v('\n        Scattered Vision: Even after scrapping the natural disaster theme, the recycling theme was still vague. \n        I explored having the player move through a recycling factory, but deemed it too difficult. \n        I also wanted some action, as I thought just sorting would not be "fun enough". \n        Trying to merge these ideas together resulted in a confusing experience for the player, and actually increased the scope of the game.\n        Being unable to include the majority of recycling trivia into the gameplay, I simply wrote it as text and displayed them at the end of each level.\n      ')]),a("li",[e._v("\n        Game Design Knowledge: This was particularly challenging, as I had to try to learn VR best practices and general game design. \n        Lighting was poorly used, signposting was done badly, and the plethora of text boxes did not help. \n        Each level had new mechanics or goals, further confusing the players. \n      ")]),a("li",[e._v("\n        Incorrect Task Prioritization: Although there was a vague idea of an MVP, I would often waste time on non-essential features, even if it was technically prohibitive. \n        One particular feature was the ability for the player to see their own arms. Although it made it into the final game, much time was spent on getting it working, and in the end it did not heavily affect gameplay.\n        The time could have been better used to flesh out the levels, or the enemy AI. Looking into blend trees for animation was also a waste of time with little gain.\n      ")]),a("li",[e._v('\n        "Why Violence?": The concept if the enemy attacking the player was also problematic. My target audience were teachers, UX students, and generally non-gamists. \n        More importantly, the theme of violence did not tie into recycling very well. \n        As my goal with the enemy punching the player was simply to make the game more "exciting" to play, other methods, such as puzzles or a chase sequence, could have been better instead.\n      ')])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity3D")]),a("li",[e._v("Oculus Quest")]),a("li",[e._v("VRTK")])])}],l={components:{},data(){return{media:[{url:a("78c6")},{url:a("d7c1")},{url:a("a1f0")},{url:a("ca96")},{url:a("eb56")},{url:a("2771")},{url:a("8a68")},{url:a("ca5b")},{url:a("cf0a")},{url:a("c14c")},{url:a("43eb")},{url:a("fc61")},{url:a("0df5")}]}},mounted(){}},c=l,h=(a("cc42"),a("2877")),u=Object(h["a"])(c,o,r,!1,null,"a0863ce0",null),d=u.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          Created turn based card game focusing on resource management and disruption. \n          The course was an exercise of understanding the activities and responsibilities of gameplay design, \n          going through the game development process from ideation to evaluation, with an iteration of playtesting. \n        ")])])],1)],1),a("h3",[e._v("Concept")]),a("p"),a("h3",[e._v("Activities & Responsibilities")]),e._m(0),a("h3",[e._v("Tools used:")]),e._m(1),a("h3",[e._v("Challenges")]),a("p",[e._v("\n    Was the game as humorous and fun to play as we wanted it to I mean the playtests show kind of yay\n  ")]),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/TouchingHeartsPp.pdf",target:"_blank"}},[a("strong",[e._v("Final Presentation Slides")])])],1)])],1)],1)],1)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Analyzing gameplay systems.")]),a("li",[e._v("Establishing a theme and setting through mechanics and gameplay.")]),a("li",[e._v("Designing and implementing a core gameplay loop, explaining the reasons and effects of the interaction of mechanics.")]),a("li",[e._v("Participating in playtesting, identifying issues, and modifying gameplay to address issues.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Figma - Sketching, Prototyping")]),a("li",[e._v("Tabletopia - Implementation, Playesting")])])}],p={components:{},data(){return{gameimages:[{url:a("2de4")},{url:a("bedd")},{url:a("9d88")},{url:a("8d88")},{url:a("3f0d")},{url:a("e0d4")},{url:a("fe9d")},{url:a("fec8")}],processimages:[]}},mounted(){}},f=p,b=(a("1bfa"),Object(h["a"])(f,m,g,!1,null,"4291176f",null)),v=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          A collaboration with "),a("a",{attrs:{href:"https://fabianfroding.github.io/",target:"_blank"}},[e._v("Fabian")]),e._v(", \n          this ongoing project is heavily inspired by metroidvanias, featuring a three-day system inspired by The Legend of Zelda: Majora's Mask.\n       ")]),a("p",[e._v("\n          Using Unity, all systems were coded from scratch without third-party frameworks.\n          All art is also drawn by ourselves. \n       ")]),a("p",[e._v("\n          The game is still under early development.\n       ")])]),a("b-col",{attrs:{lg:"7"}})],1)],1),a("h3",[e._v("Features")]),a("b-container",[a("b-row",[a("b-col",[a("ul",[a("li",[e._v("2D Player Controller")]),a("li",[e._v("Various Player Abilities")]),a("li",[e._v("Enemy AI")]),a("li",[e._v("Equipment System")]),a("li",[e._v("Day cycle System")]),a("li",[e._v("Dialogue System")]),a("li",[e._v("Camera System")])])])],1)],1),a("h3",[e._v("Challenges")]),e._m(0),a("h3",[e._v("Roles & Responsibilities")]),a("p",[e._v("\n      Currently, I have mainly worked on the 2D player controller, some enemy AI, and the Camera system. \n    ")]),a("h3",[e._v("Tools used:")]),e._m(1)],1)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("ul",[a("li",[e._v("\n        Architecture: There were many discussions and changes to the code architecture, as we wanted a high degree of extensibility and reusability.\n        As such, the codebase had several large refactors as we learned more.\n        One downside is that the code ended up to be quite complex, containing a multitude of ScriptableObjects and state machines, for example.\n        Haven't figured that part out yet.\n      ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity")]),a("li",[e._v("PlasticSCM")])])}],w={},k=Object(h["a"])(w,_,y,!1,null,null,null),C=k.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          This game project aimed to design a game to meet the requirements of the Chalmers Student Union - to create increase inclusion between students.\n          To this end, this game was made to bring relative strangers together by increasing empathy between players, \n          assuming that a greater understanding between students can make students more accepting of student culture. \n          To do so, a game experience was created with mechanics that emphasized cooperation, attempting to put players in each others' shoes.\n        ")])]),a("b-col",{attrs:{lg:"7"}},[a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",controls:"",indicators:"",interval:0}},e._l(this.gameimages,(function(e){return a("b-carousel-slide",{key:e.url,attrs:{caption:"","img-src":e.url}})})),1)],1)])],1)],1),a("h3",[e._v("Concept")]),a("p",[e._v("\n    Two player puzzler game where you embark on a journey alongside your companion, working together in order to solve puzzles and boost each other across obstacles.\n  ")]),a("h3",[e._v("Roles & Responsibilities")]),a("h5",[e._v("Designer")]),a("p",[a("a",{attrs:{href:"https://miro.com/about/",target:"_blank"}},[e._v("Miro")]),e._v(" was used extensively to collaborate on the design of the game. \n      Activities included selecting assets to assess the feasibility of features, affinity mapping to establish the themes of the game, discussing playtesting results, and discussing puzzle and narrative ideas. \n      The design of the game was very much a group effort, and much discussion was needed to make compromises, establish a clearer direction, and reducing scope.\n      We wanted players to cooperate and feel empathetic towards one another, and I felt that we needed to tell a story in the game for that to happen.\n      Shown below are some of the sketches used to promote discussions of the general narrative and level design.\n    ")]),a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",controls:"",indicators:"",interval:0}},e._l(this.processimages,(function(e){return a("b-carousel-slide",{key:e.url,attrs:{caption:"","img-src":e.url}})})),1)],1),a("p",{staticClass:"my-3"},[e._v("\n      Many ideas revolved around trying to tell the story through the mechanics and level design/progression.\n      Some of these ideas are shown below. Needless to say, the scope was heavily reduced, and the narrative almost non-existent.\n      However, some core concepts that many of us wanted remained: \n      The idea of reversing gravity so that two players entered each other's world, and the two players meeting each other for only a brief moment.\n    ")]),a("h5",[e._v("Level Designer")]),e._m(0),a("p",[e._v('\n      There was much discussion surrounding how the different puzzles could help evoke empathy, taking the narrative into consideration.\n      Many sketches were made to not only try to encourage the players to communicate, \n      but also fit in an in-game narrative where the cats gradually had a greater understanding of each other\'s "world". \n    ')]),a("h5",[e._v("Programmer")]),e._m(1),a("h3",[e._v("Tools used:")]),e._m(2),a("h3",[e._v("Challenges")]),a("p",[e._v('\n    During development, there was much discussion and level sketches on symbolizing that the cats gradually knew more of the other\'s "world".\n    As such, many levels were planned to be implemented, illustrating this in-game narrative as well as hoping that players also could better understand each other in reality.  \n    As time progressed, we constantly reduced our scope to fit the timeframe, resulting in 3 levels. \n    This meant that we had to condense much of the in game narrative, and also lowered our chances with giving players a chance to know each other, as the game was being too short to do so.\n    The timeframe also meant that very little user testing was done to nail down the aesthetics of the game before the exhibition - which essentially became our user testing session.\n    This project also taught me to not shy away from using existing assets, and the various ways to use them.\n  ')]),a("p",[e._v("\n    During playtests, many players did not feel like their empathy increased after playing, since puzzles were seen as too easy, resulting in a lack of player communication. \n    We did try to prioritize the game being fun rather than raising empathy, as we thought that it was a more achievable goal. The majority of players enjoyed the game, however, which is a good sign.\n  ")]),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item float-left"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://natashamangan.itch.io/get-meowt-of-here",target:"_blank"}},[a("em",{class:"bi bi-box-arrow-up-right",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/GetMeowtofHereReport.pdf",target:"_blank"}},[a("strong",[e._v("Read Game Report")])])],1)])],1)],1)],1)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Collaborated with others to sketch out level ideas and designs.")]),a("li",[e._v("Made the loading screen. Yes I am very proud of it.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Coded puzzle tools, mainly the gravity reversal mechanic.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity2D")]),a("li",[e._v("C#")]),a("li",[e._v("Version Control - Git")])])}],x={components:{},data(){return{gameimages:[{url:a("7eed")},{url:a("a6be")},{url:a("db51")}],processimages:[{url:a("60d8")},{url:a("310e")},{url:a("120b")},{url:a("6626")}]}},mounted(){}},A=x,P=(a("7893"),Object(h["a"])(A,T,D,!1,null,"76c6146c",null)),R=P.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-container",{staticClass:"description-container"},[i("b-row",[i("b-col",{attrs:{lg:"5"}},[i("h3",[e._v("Description")]),i("p",[e._v('\n          The original Tron was created in 1982 and was extremely popular at the time, \n          leading to some people calling Snake games "Light Cycle games". \n          The original mini-game features a single player moving a futuristic motorcycle, called a light cycle within the Tron universe, around the screen in a grid-like behaviour. Light cycles can create walls of light where any light cycle can crash into.\n          The player is also able to slow down the speed of the bike. The objective of the game is to force one or more enemy cycles into crashing into these trails or into the edges of the screen while avoiding them yourself at the same time.\n        ')]),i("p",[e._v("\n          In the original, the player would play through the 4 mini games in increasing difficulty endlessly. For the light cycle mini-game, a higher difficulty meant more enemies.  \n          A 2 player solution was implemented here instead, scrapping the increasing difficulty mechanic.\n        ")])]),i("b-col",{attrs:{lg:"7"}},[i("b-img",{staticClass:"details-image",attrs:{center:"",src:a("ba4a"),alt:"Image"}})],1)],1)],1),i("h3",[e._v("Challenges")]),i("p",[e._v("\n    Challenges consisted of getting walls to connect properly while changing speed, emulating grid-like movement, collision detections, and prioritizing features. \n    Details of challenges can be found in the mid-term presentation. \n    Although I really wanted to implement AI enemies, too much time was spent on fixing core issues, which was a bit sad.\n    Development time was ~3 weeks. \n  ")]),i("h3",[e._v("Specification")]),e._m(0),i("h3",[e._v("Mechanics")]),i("b-container",[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("p",[i("strong",[e._v("Light Cycles:")])]),i("ul",[i("li",[e._v("Move around in a grid-like fashion")]),i("li",[e._v("3 different speeds - Slow, Default, Fast")]),i("li",[e._v("Wall Trails left behind bike")]),i("li",[e._v("Crash when hit walls or edge")])])]),i("b-col",{attrs:{md:"6"}},[i("p",[i("strong",[e._v("Game")])]),i("ul",[i("li",[e._v("Score for each Player")]),i("li",[e._v("Change Background")])])])],1)],1),i("h3",[e._v("Roles & Responsibilities")]),i("p",[e._v("\n       As the sole creator of the game, I was responsible for the design, programming, and sound for the game. \n       As this was made in a course that emphasized good architecture, special attention was paid to the engine architecture.\n       A detailed report of the code is linked at the bottom of the page. \n    ")]),i("h3",[e._v("Tools used:")]),e._m(1),i("h3",{staticClass:"align-center"},[e._v("Links")]),i("b-container",[i("b-row",[i("b-col",{staticClass:"link-col"},[i("a",{staticClass:"link-item float-left"},[i("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/GEATron",target:"_blank"}},[i("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),i("a",{staticClass:"link-item float-left"},[i("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/GEATronReport.pdf",target:"_blank"}},[i("strong",[e._v("Read Tron Report")])])],1),i("a",{staticClass:"link-item float-left"},[i("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/MidtermTron.pdf",target:"_blank"}},[i("strong",[e._v("Mid-Term Presentation")])])],1),i("a",{staticClass:"link-item float-left"},[i("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/FinalPresentationTron.pdf",target:"_blank"}},[i("strong",[e._v("Final Presentation")])])],1)])],1)],1)],1)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n     Tron consists of two basic entities: The "),a("strong",[e._v("players' Light Cycles")]),e._v(" and the "),a("strong",[e._v("Wall Trails")]),e._v(" produced. Light Cycles explode upon hitting any wall or edge.\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("C++")]),a("li",[e._v("SDL")]),a("li",[e._v("Audacity")]),a("li",[e._v("Version Control - Git")])])}],E=(a("8270"),{}),z=Object(h["a"])(E,j,I,!1,null,"e1b6b6da",null),M=z.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v('\n          Jenga Fortress is a physics-based, local 2-player Augmented Reality(AR) game for the Experimental Game Design Course.\n          Players need to force the opponent\'s "core block", which is hidden from them, out of their boundary in order to win.\n          They then take turns firing explosive blocks at each other, and can pick apart their fortresses to "fortify" their own core block.\n        ')]),a("p",[e._v('\n          Originally, there was the feature of letting players build their own fortresses. \n          Ammo was supposed to be limited, forcing players to take apart their own fortress to use as ammo - hence the "Jenga" inspiration.\n          The development time of ~1 month required us to reduce our scope.\n          It was a challenge to reduce the scope while maintaining the central concepts of strategy and skill.\n        ')])]),a("b-col",{attrs:{lg:"7"}},[a("div",{staticClass:"yt-vid"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/l_vUDjO9Uzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],1)],1),a("h3",[e._v("Roles & Responsibilities")]),a("h5",[e._v("Game Design")]),e._m(0),a("p",[e._v("\n      I felt that this project allowed me to take a larger role in terms of designing the game, due to the smaller group size and general structure of the course. \n      Team members had to pitch ideas and concepts, describing our best visions in detail, and within the group the best one was chosen. \n      Jenga Fortress was chosen due to its perceived feasibility, extensibility, and the possible emergent gameplay resulting from it.\n    ")]),a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",controls:"",indicators:"",interval:0},model:{value:e.carouselPics,callback:function(t){e.carouselPics=t},expression:"carouselPics"}},e._l(this.media,(function(e){return a("b-carousel-slide",{key:e.url,attrs:{text:"","img-src":e.url}})})),1)],1),a("p",{staticClass:"mt-3"},[e._v("\n      As the one who had the initial idea, I tried to communicate my vision of the game as clearly as possible while also taking other opinions into account.\n      Since it was a small group, simple sketches and diagrams were used instead of lengthy design documents to keep everybody on the same page.\n      As such, collaborative tools such as Google Slides were used to map game flow and code architecture to encourage discussion.\n    ")]),a("h5",[e._v("Programmer")]),e._m(1),a("h3",[e._v("Challenges")]),a("p",[e._v("\n    There were many challenges along the way. Our team was new to AR, and much time was spent fixing technical issues resulting from that.\n    Scaling in AR was especially difficult, as the game objects looked enormous in AR. Yet, scaling the objects down reduced physics stability. \n    Rather than making the game objects smaller, the camera is actually made bigger and farther away from the content.\n    Optimizing the physics engine for the game was particularly important for our game. Each block is a rigidbody, and a single fortress has ~450 blocks.  \n    Much discussion revolved around optimizing the code architecture for easier task splitting and development, resulting in the usage of broadcasted events, singletons, and state machines.\n  ")]),a("h3",[e._v("Tools used:")]),e._m(2),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-row",{staticClass:"link-row",attrs:{"align-v":"center"}},[a("b-col",{staticClass:"link-item"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/JengaFortress",target:"_blank"}},[a("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengaFortressPitches.pdf",target:"_blank"}},[a("strong",[e._v("Read Initial Pitches")])])],1),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengaFortressReport.pdf",target:"_blank"}},[a("strong",[e._v("Read Game Report")])])],1),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengaFortressMidPresentation.pdf",target:"_blank"}},[a("strong",[e._v("Mid-term Presentation")])])],1),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengFort.apk",target:"_blank"}},[a("strong",[e._v("Download JengFort.apk")])])],1)],1)],1)},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Came up with original game concept, helped finalize mechanics.")]),a("li",[e._v("Communicated concept and vision to the team, establishing a common understanding. While the concept was easier to explain, tt was a bit difficult conveying the feeling of strategy and skill I wanted the game to have.")]),a("li",[e._v("Participated in prioritizing features and reducing scope while maintaining central concept.")]),a("li",[e._v("Optimized fortress to reduce rigidbodies in mobile.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Established and improved code architecture to facilitate collaboration + development for the team.")]),a("li",[e._v("Partially designed in-game block structures.")]),a("li",[e._v(" Implemented:\n        "),a("ul",[a("li",[e._v("General Game Flow")]),a("li",[e._v("AR tracking, placing Gameobjects into AR.")]),a("li",[e._v("Multitude of behaviours, including but not limited to Explosive block behaviour, Moving blocks, and Win Conditions.")])])]),a("li",[e._v("Facilitated testing to prevent constantly building to mobile, resulting in faster iterations.")]),a("li",[e._v("Physics Optimizations. Our game has around ~900+ rigidbodies on mobile. Pain.")]),a("li",[e._v("Early UI, for debugging and visualization purposes. We don't talk about that.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity3D - ARFoundation")]),a("li",[e._v("C#")]),a("li",[e._v("Version Control - Git")])])}],$={components:{},data(){return{media:[{url:a("bfe1"),caption:""},{url:a("4e2d"),caption:"Establishing  the general game flow helped create the states in the code."},{url:a("6df2"),caption:"The code architecture helped split work and went through several iterations."}]}},mounted(){}},G=$,O=(a("e8bb"),Object(h["a"])(G,S,F,!1,null,"463bf464",null)),U=O.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-container",{staticClass:"description-container"},[i("b-row",[i("b-col",{attrs:{lg:"5"}},[i("h3",[e._v("Description")]),i("p",[e._v("\n          My first traditional character animation ever, this student project tasked with creating a Idle, Walk, and Run animation cycle of a original character in a 2D game style. \n          As the assignment assessed the quality of character motion, I focused heavily on the the animations itself, trying to follow the 12 principles of animation.\n          The run cycle was prioritized because....I liked it more.\n          I chose a pixel art style because I had no drawing tablet. Pixel art is surprisingly difficult - one pixel off and it looks wrong.\n        ")]),i("p",[e._v("\n          The character, called Raphl, is a stoic messenger, sturdily clothed and lightly armored to combat the weather and monsters. \n          As such, I wanted to convey a sense of effortless swiftness and efficiency in his motions, always aware of his surroundings.\n        ")])]),i("b-col",{attrs:{lg:"7"}},[i("b-img",{staticClass:"details-image",attrs:{center:"",src:a("c9f9"),alt:"Image"}})],1)],1)],1),i("b-container",[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("h4",[e._v("Tools used:")]),i("ul",[i("li",[e._v("Unity2D: Camera, Background, Character Controller")]),i("li",[e._v("Krita: Animation, Art")])])]),i("b-col",{attrs:{md:"6"}},[i("h4",[e._v("States/Cycles:")]),i("ul",[i("li",[e._v("Idle - Animated on 6s")]),i("li",[e._v("Walk - Animated on 2s")]),i("li",[e._v("Run - Animated on 1s")])])])],1)],1),i("h3",{staticClass:"align-center"},[e._v("Links")]),i("b-row",[i("b-col",{staticClass:"link-col"},[i("a",{staticClass:"link-item float-left"},[i("a",{staticClass:"btn btn-outline-light btn-lg float-left pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/RaphlUnityIntegration",target:"_blank"}},[i("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),i("a",{staticClass:"link-item"},[i("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/RaphlAnimExe.zip",target:"_blank"}},[i("strong",[e._v("RaphlUnityExe.zip")])])],1)])],1)],1)},W=[],q=(a("9456"),{}),V=Object(h["a"])(q,L,W,!1,null,"12bdbb26",null),B=V.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"7"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          This project consisted of a self organizing team of 9 students working to elicit requirements, implement, test and deploy code for a visitor web app of a fictional amusement park. \n          An agile process was followed with an iterative approach to deliver a project throughout its lifecycle. \n          There were 3 sprints in total, each sprint having 2-3 weeks time frame. \n          The team members tried out different roles to have a mindset of working in Agile teams and to learn the responsibilities of multiple roles.\n          There were a total of 4 roles: Product Owner, Scrum Master Deputy, UI / UX Designer, and Developer.\n        ")])]),a("b-col",{attrs:{lg:"5"}},[a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",controls:"",indicators:"",interval:0}},e._l(this.gameimages,(function(e){return a("b-carousel-slide",{key:e.url,attrs:{caption:"","img-src":e.url}})})),1)],1)])],1)],1),a("h3",[e._v("Concept")]),a("p",[e._v("\n    Teachers act/roleplay as customers, you build the app that they want by following an Agile process. \n    We made things a bit harder for ourselves by rotating roles. \n  ")]),a("h3",[e._v("Roles & Responsibilities")]),a("h5",[e._v("Team Member")]),e._m(0),a("h5",[e._v("UI / UX Designer")]),e._m(1),a("h5",[e._v("Developer")]),e._m(2),a("h5",[e._v("Product Owner / Customer Deputy")]),e._m(3),a("h3",[e._v("Tools used:")]),e._m(4),a("h3",[e._v("Challenges")]),a("p",[e._v("\n    Many challenges happened early on, when the team was still not mature. \n    As some team members (I included) were not familiar with the responsibilities of some roles, some time was spent experimenting and learning the ropes.\n    As we became more acquainted and time passed, with us refining the process through retrospectives and sprint plannings, we realised that the roles were not set in stone.\n    We not only had to adapt the process to account for changes in requirements, but also different sprint lengths and human issues(sickness, work, real life stuff).\n    As we also decided on role rotations, different members gradually gained different competencies. As the app became more complex, onboarding took longer as well.   \n  ")]),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item float-left"},[a("a",{staticClass:"btn btn-outline-light btn-lg float-left pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/dit192-team-4-visitor-app-fork",target:"_blank"}},[a("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/Dummypark_Final_Presentation.pdf",target:"_blank"}},[a("strong",[e._v("Final Presentation Slides")])])],1),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/Dummypark_Postmortem.pdf",target:"_blank"}},[a("strong",[e._v("Read Final Report")])])],1)])],1)],1)],1)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Participated in refining the process continuously.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Set up and used Figma to design and communicate mock up designs")]),a("li",[e._v("Laying the groundwork for future sprints.")]),a("li",[e._v("Established a common color scheme")]),a("li",[e._v("Created mock-ups for user stories of the current and next sprint.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Drove the development of crucial features, namely the Activities user story.")]),a("li",[e._v("Participated in guiding and teaching other members important concepts and setups.")]),a("li",[e._v("Ensuring code was ready for customer reviews.")]),a("li",[e._v("Identified dependencies, discussing the stories to establish a development approach.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Sprint planning to analyze feature requirements, used to prioritize stories.")]),a("li",[e._v("Prioritized user stories, providing suggestions for team members.")]),a("li",[e._v("Adapted process to account for short sprint time.")]),a("li",[e._v("Elicited and discussed user stories with customer, updating the customer with current progress to ensure requirements were fulfilled.")]),a("li",[e._v("Tested and reviewed implemented features, as I was aware of the development process at the point.")]),a("li",[e._v("Maintained product backlog, clarifying issues.")]),a("li",[e._v("Established and refined feature acceptance criteria and user stories.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Vue.js")]),a("li",[e._v("Express.js")]),a("li",[e._v("MongoDB")]),a("li",[e._v("Docker - hosting, running database locally")]),a("li",[e._v("Figma")]),a("li",[e._v("Google Sheets, Docs")]),a("li",[e._v("Trello")]),a("li",[e._v("Version Control - Git")])])}],K={components:{},data(){return{gameimages:[{url:a("2de4")},{url:a("bedd")},{url:a("9d88")},{url:a("8d88")},{url:a("3f0d")},{url:a("e0d4")},{url:a("fe9d")},{url:a("fec8")}],processimages:[]}},mounted(){}},Q=K,Y=(a("33a3"),Object(h["a"])(Q,J,H,!1,null,"1ca3a28c",null)),N=Y.exports,X={props:["projectDetails"],components:{NameHeader:s["default"],FeelTheDisasterDesc:d,TouchingHeartsDesc:v,TimeloopMetroidDesc:C,GetMeowtOfHereDesc:R,TronReplicaDesc:M,JengaFortressDesc:U,RaphlAnimDesc:B,DummyParkDesc:N},methods:{}},Z=X,ee=(a("f785"),Object(h["a"])(Z,i,n,!1,null,"2b7fbccc",null));t["a"]=ee.exports},9456:function(e,t,a){"use strict";a("6b91")},"9fcf":function(e,t,a){},af12:function(e,t,a){},afc1:function(e,t,a){},cc42:function(e,t,a){"use strict";a("3b81")},cdb2:function(e,t,a){},e8bb:function(e,t,a){"use strict";a("afc1")},f785:function(e,t,a){"use strict";a("af12")}}]);
//# sourceMappingURL=chunk-2713bead.454523b2.js.map