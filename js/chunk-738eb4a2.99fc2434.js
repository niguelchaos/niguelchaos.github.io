(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-738eb4a2"],{"277b":function(e,t,a){"use strict";a("883c")},"4d1a":function(e,t,a){},"5ebc":function(e,t,a){"use strict";a("cb1e")},"60c8":function(e,t,a){"use strict";a("ed00")},"6b91":function(e,t,a){},"85c6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("name-header"),a("b-container",{staticClass:"project-details"},[a("div",{staticClass:"section-heading"},[a("h1",[e._v(e._s(e.projectDetails.title))]),a("h6",[e._v(e._s(e.projectDetails.subtitle))])]),a("div",{staticClass:"portfolio-item"},[a("div",{staticClass:"portfolio-description"},[a(e.projectDetails.descriptionComponent,{tag:"div"})],1)])])],1)},i=[],s=a("311a"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          Thrust into a very inefficient recycling facility, the player takes on the role as a new worker to sort recyclables. \n          A single robot has infiltrated the facility, making a mess. \n          The player must prevent the robot from burning the recyclables, hopefully learning how to be correctly recycle trash and be nicer to the world through their consumption habits.\n        ")]),a("p",[e._v("\n          A student game project which required us to make any game related to "),a("a",{attrs:{href:"https://sdgs.un.org/goals",target:"_blank"}},[e._v("SDGs")]),e._v(', \n          I wanted to make a game about how families could be affected by natural disasters by putting the player in the middle of one. Hence, the title.\n          As my first Unity game, I thought it would be "pretty funny" if I could pull off a Virtual Reality game, as it sounded ridiculous even to myself - \n          especially since it was a 20% workload course and I only had a month of development time.\n        ')]),a("p",[e._v('\n          I quickly learned the limitations of both myself and the Quest. With the Quest unable to simulate fire spreading at an acceptable frame rate, my original idea quickly looked infeasible.\n          With 3 weeks left, I decided to take an "easier" theme - recycling. \n          Yet, I wanted a game that went beyond sorting garbage, and instead tried to look for interesting facts that could be included in the game.\n          I finally settled on "what happens after trash is sorted" - though that clearly did not go so well.\n        ')])]),a("b-col",{attrs:{lg:"7"}})],1)],1),a("h3",[e._v("Concept")]),a("p",[e._v("\n    Recycle the milk carton correctly, preventing the enemy robot from burning the carton, and burn garbage unfit for recycling in a recycling facility! \n  ")]),a("h3",[e._v("Mechanics")]),a("b-container",[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("p",[a("strong",[e._v("Player")])]),a("ul",[a("li",[e._v("Pick, and throw objects in VR")]),a("li",[e._v("Wash Milk Carton")]),a("li",[e._v("Pick apart carton")]),a("li",[e._v("Punch Robot")]),a("li",[e._v("Burn Garbage")]),a("li",[e._v("Teleport/Movement")])])]),a("b-col",{attrs:{md:"8"}},[a("p",[a("strong",[e._v("Game")])]),a("ul",[a("li",[e._v("3 Levels: \n              "),a("ul",[a("li",[e._v("Tutorial")]),a("li",[e._v("Robot Battle")]),a("li",[e._v("Burning Dirty Recyclables")])])]),a("li",[e._v("Robot AI: \n              "),a("ul",[a("li",[e._v("Throw milk carton into fire box")]),a("li",[e._v('Punching player. A point light turned off everytime the player got hit to simulate "punching the daylights out of the player". Many bugs there.')])])]),a("li",[e._v("General Game Flow: Scripted audio for win/lose states, etc.")])])])],1)],1),a("h3",[e._v("Challenges")]),e._m(0),a("h3",[e._v("Roles & Responsibilities")]),a("p",[e._v("\n      As the sole creator of the game, I was responsible for the design, programming, and sound integration for the game. \n    ")]),a("h3",[e._v("Tools used:")]),e._m(1),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item float-left"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/FeelTheDisaster",target:"_blank"}},[a("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/FeelTheDisasterdarkplain.pdf",target:"_blank"}},[a("strong",[e._v("Final Presentation Poster")])])],1)])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    Many challenges were encountered:\n    "),a("ul",[a("li",[e._v("\n        Toolkit: At the time(November 2019), Unity's integration with the Oculus Quest was incomplete. \n        The VRTK solution looked attractive at the time due to its cross-platform nature, but its incomplete documentation then, \n        along with my lack of Unity knowledge created many technical roadblocks.\n      ")]),a("li",[e._v('\n        Scattered Vision: Even after scrapping the natural disaster theme, the recycling theme was still vague. \n        I explored having the player move through a recycling factory, but deemed it too difficult. \n        I also wanted some action, as I thought just sorting would not be "fun enough". \n        Trying to merge these ideas together resulted in a confusing experience for the player, and actually increased the scope of the game.\n        Being unable to include the majority of recycling trivia into the gameplay, I simply wrote it as text and displayed them at the end of each level.\n      ')]),a("li",[e._v("\n        Game Design Knowledge: This was particularly challenging, as I had to try to learn VR best practices and general game design. \n        Lighting was poorly used, signposting was done badly, and the plethora of text boxes did not help. \n        Each level had new mechanics or goals, further confusing the players. \n      ")]),a("li",[e._v("\n        Incorrect Task Prioritization: Although there was a vague idea of an MVP, I would often waste time on non-essential features, even if it was technically prohibitive. \n        One particular feature was the ability for the player to see their own arms. Although it made it into the final game, much time was spent on getting it working, and in the end it did not heavily affect gameplay.\n        The time could have been better used to flesh out the levels, or the enemy AI. Looking into blend trees for animation was also a waste of time with little gain.\n      ")]),a("li",[e._v('\n        "Why Violence?": The concept if the enemy attacking the player was also problematic. My target audience were teachers, UX students, and generally non-gamists. \n        More importantly, the theme of violence did not tie into recycling very well. \n        As my goal with the enemy punching the player was simply to make the game more "exciting" to play, other methods, such as puzzles or a chase sequence, could have been better instead.\n      ')])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity3D")]),a("li",[e._v("Oculus Quest")]),a("li",[e._v("VRTK")])])}],l=(a("277b"),a("2877")),c={},h=Object(l["a"])(c,o,r,!1,null,"2443c968",null),u=h.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p")]),a("b-col",{attrs:{lg:"7"}})],1)],1),a("h3",[e._v("Specification")]),a("p"),a("h3",[e._v("Mechanics")]),a("b-container",[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("p",[a("strong")]),a("ul")]),a("b-col",{attrs:{md:"6"}})],1)],1),a("h3",[e._v("Roles & Responsibilities")]),a("p"),a("h3",[e._v("Tools used:")]),a("ul",[a("li",[e._v("Figma")])]),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"})],1)],1)],1)])},g=[],m={},p=Object(l["a"])(m,d,g,!1,null,null,null),b=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          A collaboration with "),a("a",{attrs:{href:"https://fabianfroding.github.io/",target:"_blank"}},[e._v("Fabian")]),e._v(", \n          this ongoing project is heavily inspired by metroidvanias, featuring a three-day system inspired by The Legend of Zelda: Majora's Mask.\n       ")]),a("p",[e._v("\n          Using Unity, all systems were coded from scratch without third-party frameworks.\n          All art is also drawn by ourselves. \n       ")]),a("p",[e._v("\n          The game is still under early development.\n       ")])]),a("b-col",{attrs:{lg:"7"}})],1)],1),a("h3",[e._v("Features")]),a("b-container",[a("b-row",[a("b-col",[a("ul",[a("li",[e._v("2D Player Controller")]),a("li",[e._v("Various Player Abilities")]),a("li",[e._v("Enemy AI")]),a("li",[e._v("Equipment System")]),a("li",[e._v("Day cycle System")]),a("li",[e._v("Dialogue System")]),a("li",[e._v("Camera System")])])])],1)],1),a("h3",[e._v("Challenges")]),e._m(0),a("h3",[e._v("Roles & Responsibilities")]),a("p",[e._v("\n      Currently, I have mainly worked on the 2D player controller, some enemy AI, and the Camera system. \n    ")]),a("h3",[e._v("Tools used:")]),e._m(1)],1)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("ul",[a("li",[e._v("\n        Architecture: There were many discussions and changes to the code architecture, as we wanted a high degree of extensibility and reusability.\n        As such, the codebase had several large refactors as we learned more.\n        One downside is that the code ended up to be quite complex, containing a multitude of ScriptableObjects and state machines, for example.\n        Haven't figured that part out yet.\n      ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity")]),a("li",[e._v("PlasticSCM")])])}],y={},_=Object(l["a"])(y,f,v,!1,null,null,null),w=_.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v("\n          This game project aimed to design a game to meet the requirements of the Chalmers Student Union - to create increase inclusion between students.\n          To this end, this game was made to bring relative strangers together by increasing empathy between players, \n          assuming that a greater understanding between students can make students more accepting of student culture. \n          To do so, a game experience was created with mechanics that emphasized cooperation, attempting to put players in each others' shoes.\n        ")])]),a("b-col",{attrs:{lg:"7"}})],1)],1),a("h3",[e._v("Concept")]),a("p",[e._v("\n    Two player puzzler game where you embark on a journey alongside your companion, working together in order to solve puzzles and boost each other across obstacles.\n  ")]),a("h3",[e._v("Roles & Responsibilities")]),a("p",[e._v('\n      As a programmer, I generally coded puzzle tools other level designers could use, specifically the gravity reversal mechanic.\n      As a level designer, I collaborated with others to sketch out level ideas and puzzle designs. \n      There was much discussion surrounding how the different puzzles could help evoke empathy, taking the narrative into consideration.\n      Many sketches were made to not only try to encourage the players to communicate, \n      but also fit in an in-game narrative where the cats gradually had a greater understanding of each other\'s "world". \n    ')]),a("h3",[e._v("Tools used:")]),e._m(0),a("h3",[e._v("Challenges")]),a("p",[e._v('\n    During development, there was much discussion and level sketches on symbolizing that the cats gradually knew more of the other\'s "world".\n    As such, many levels were planned to be implemented, illustrating this in-game narrative as well as hoping that players also could better understand each other in reality.  \n    As time progressed, we constantly reduced our scope to fit the timeframe, resulting in 3 levels. \n    This meant that we had to condense much of the in game narrative, and also lowered our chances with giving players a chance to know each other, as the game was being too short to do so.\n    The timeframe also meant that very little user testing was done to nail down the aesthetics of the game before the exhibition - which essentially became our user testing session.\n    This project also taught me to not shy away from using existing assets, and the various ways to use them.\n  ')]),a("p",[e._v("\n    During playtests, many players did not feel like their empathy increased after playing, since puzzles were seen as too easy, resulting in a lack of player communication. \n    We did try to prioritize the game being fun rather than raising empathy, as we thought that it was a more achievable goal. \n  ")]),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-container",[a("b-row",[a("b-col",{staticClass:"link-col"},[a("a",{staticClass:"link-item float-left"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://natashamangan.itch.io/get-meowt-of-here",target:"_blank"}},[a("em",{class:"bi bi-box-arrow-up-right",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("a",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/GetMeowtofHereReport.pdf",target:"_blank"}},[a("strong",[e._v("Read Game Report")])])],1)])],1)],1)],1)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity2D")]),a("li",[e._v("C#")]),a("li",[e._v("Version Control - Git")])])}],T=(a("a107"),{}),D=Object(l["a"])(T,k,C,!1,null,"fc6ba8ea",null),A=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"description-container"},[n("b-row",[n("b-col",{attrs:{lg:"5"}},[n("h3",[e._v("Description")]),n("p",[e._v('\n          The original Tron was created in 1982 and was extremely popular at the time, \n          leading to some people calling Snake games "Light Cycle games". \n          The original mini-game features a single player moving a futuristic motorcycle, called a light cycle within the Tron universe, around the screen in a grid-like behaviour. Light cycles can create walls of light where any light cycle can crash into.\n          The player is also able to slow down the speed of the bike. The objective of the game is to force one or more enemy cycles into crashing into these trails or into the edges of the screen while avoiding them yourself at the same time.\n        ')]),n("p",[e._v("\n          In the original, the player would play through the 4 mini games in increasing difficulty endlessly. For the light cycle mini-game, a higher difficulty meant more enemies.  \n          A 2 player solution was implemented here instead, scrapping the increasing difficulty mechanic.\n        ")])]),n("b-col",{attrs:{lg:"7"}},[n("b-img",{staticClass:"details-image",attrs:{center:"",src:a("ba4a"),alt:"Image"}})],1)],1)],1),n("p",[e._v("\n    Challenges consisted of getting walls to connect properly while changing speed, emulating grid-like movement, collision detections, and prioritizing features. \n    Details of challenges can be found in the mid-term presentation. \n    Although I really wanted to implement AI enemies, too much time was spent on fixing core issues, which was a bit sad.\n    Development time was ~3 weeks. \n  ")]),n("h3",[e._v("Specification")]),e._m(0),n("h3",[e._v("Mechanics")]),n("b-container",[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("p",[n("strong",[e._v("Light Cycles:")])]),n("ul",[n("li",[e._v("Move around in a grid-like fashion")]),n("li",[e._v("3 different speeds - Slow, Default, Fast")]),n("li",[e._v("Wall Trails left behind bike")]),n("li",[e._v("Crash when hit walls or edge")])])]),n("b-col",{attrs:{md:"6"}},[n("p",[n("strong",[e._v("Game")])]),n("ul",[n("li",[e._v("Score for each Player")]),n("li",[e._v("Change Background")])])])],1)],1),n("h3",[e._v("Roles & Responsibilities")]),n("p",[e._v("\n       As the sole creator of the game, I was responsible for the design, programming, and sound for the game. \n       As this was made in a course that emphasized good architecture, special attention was paid to the engine architecture.\n       A detailed report of the code is linked at the bottom of the page. \n    ")]),n("h3",[e._v("Tools used:")]),e._m(1),n("h3",{staticClass:"align-center"},[e._v("Links")]),n("b-container",[n("b-row",[n("b-col",{staticClass:"link-col"},[n("a",{staticClass:"link-item float-left"},[n("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/GEATron",target:"_blank"}},[n("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/GEATronReport.pdf",target:"_blank"}},[n("strong",[e._v("Read Tron Report")])])],1),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/MidtermTron.pdf",target:"_blank"}},[n("strong",[e._v("Mid-Term Presentation")])])],1),n("a",{staticClass:"link-item float-left"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/FinalPresentationTron.pdf",target:"_blank"}},[n("strong",[e._v("Final Presentation")])])],1)])],1)],1)],1)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n     Tron consists of two basic entities: The "),a("strong",[e._v("players' Light Cycles")]),e._v(" and the "),a("strong",[e._v("Wall Trails")]),e._v(" produced. Light Cycles explode upon hitting any wall or edge.\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("C++")]),a("li",[e._v("SDL")]),a("li",[e._v("Version Control - Git")])])}],x=(a("5ebc"),{}),j=Object(l["a"])(x,R,I,!1,null,"3af21f9f",null),P=j.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",{staticClass:"description-container"},[a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h3",[e._v("Description")]),a("p",[e._v('\n          Jenga Fortress is a physics-based, local 2-player Augmented Reality(AR) game for the Experimental Game Design Course.\n          Players need to force the opponent\'s "core block", which is hidden from them, out of their boundary in order to win.\n          They then take turns firing explosive blocks at each other, and can pick apart their fortresses to "fortify" their own core block.\n        ')]),a("p",[e._v('\n          Originally, there was the feature of letting players build their own fortresses. \n          Ammo was supposed to be limited, forcing players to take apart their own fortress to use as ammo - hence the "Jenga" inspiration.\n          The development time of ~1 month required us to reduce our scope.\n          It was a challenge to reduce the scope while maintaining the central concepts of strategy and skill.\n        ')])]),a("b-col",{attrs:{lg:"7"}},[a("div",{staticClass:"yt-vid"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/l_vUDjO9Uzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p",{staticClass:"pt-4"},[e._v("\n          There were many challenges along the way. Our team was new to AR, and much time was spent fixing technical issues resulting from that.\n          Scaling in AR was especially difficult, as the game objects looked enormous in AR. Yet, scaling the objects down reduced physics stability. \n          Rather than making the game objects smaller, the camera is actually made bigger and farther away from the content.\n          Optimizing the physics engine for the game was particularly important for our game. Each block is a rigidbody, and a single fortress has ~450 blocks.  \n          Much discussion revolved around optimizing the code architecture for easier task splitting and development, resulting in the usage of broadcasted events, singletons, and state machines.\n        ")])])],1)],1),a("h3",[e._v("Tools used:")]),e._m(0),a("h3",[e._v("Roles & Responsibilities")]),a("h5",[e._v("Game Design")]),e._m(1),a("h5",[e._v("Programmer")]),e._m(2),a("h3",{staticClass:"align-center"},[e._v("Links")]),a("b-row",{staticClass:"link-row",attrs:{"align-v":"center"}},[a("b-col",{staticClass:"link-item"},[a("a",{staticClass:"btn btn-outline-light btn-lg pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/JengaFortress",target:"_blank"}},[a("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengaFortressReport.pdf",target:"_blank"}},[a("strong",[e._v("Read Game Report")])])],1),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengaFortressMidPresentation.pdf",target:"_blank"}},[a("strong",[e._v("Mid-term Presentation")])])],1),a("b-col",{staticClass:"link-item"},[a("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/JengFort.apk",target:"_blank"}},[a("strong",[e._v("Download JengFort.apk")])])],1)],1)],1)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Unity3D - ARFoundation")]),a("li",[e._v("C#")]),a("li",[e._v("Version Control - Git")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Came up with original game concept, helped finalize mechanics.")]),a("li",[e._v("Communicated concept and vision to the team, establishing a common understanding. While the concept was easier to explain, tt was a bit difficult conveying the feeling of strategy and skill I wanted the game to have.")]),a("li",[e._v("Participated in prioritizing features and reducing scope while maintaining central concept.")]),a("li",[e._v("Optimized fortress to reduce rigidbodies in mobile.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Established and improved code architecture to facilitate collaboration + development for the team.")]),a("li",[e._v("Partially designed in-game block structures.")]),a("li",[e._v(" Implemented:\n        "),a("ul",[a("li",[e._v("General Game Flow")]),a("li",[e._v("AR tracking, placing Gameobjects into AR.")]),a("li",[e._v("Multitude of behaviours, including but not limited to Explosive block behaviour, Moving blocks, and Win Conditions.")])])]),a("li",[e._v("Facilitated testing to prevent constantly building to mobile, resulting in faster iterations.")]),a("li",[e._v("Physics Optimizations. Our game has around ~900+ rigidbodies on mobile. Pain.")]),a("li",[e._v("Early UI, for debugging and visualization purposes. We don't talk about that.")])])}],M=(a("60c8"),{}),F=Object(l["a"])(M,z,E,!1,null,"04f7a762",null),G=F.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"description-container"},[n("b-row",[n("b-col",{attrs:{lg:"5"}},[n("h3",[e._v("Description")]),n("p",[e._v("\n          My first traditional character animation ever, this student project tasked with creating a Idle, Walk, and Run animation cycle of a original character in a 2D game style. \n          As the assignment assessed the quality of character motion, I focused heavily on the the animations itself, trying to follow the 12 principles of animation.\n          The run cycle was prioritized because....I liked it more.\n          I chose a pixel art style because I had no drawing tablet. Pixel art is surprisingly difficult - one pixel off and it looks wrong.\n        ")]),n("p",[e._v("\n          The character, called Raphl, is a stoic messenger, sturdily clothed and lightly armored to combat the weather and monsters. \n          As such, I wanted to convey a sense of effortless swiftness and efficiency in his motions, always aware of his surroundings.\n        ")])]),n("b-col",{attrs:{lg:"7"}},[n("b-img",{staticClass:"details-image",attrs:{center:"",src:a("c9f9"),alt:"Image"}})],1)],1)],1),n("b-container",[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("h4",[e._v("Tools used:")]),n("ul",[n("li",[e._v("Unity2D: Camera, Background, Character Controller")]),n("li",[e._v("Krita: Animation, Art")])])]),n("b-col",{attrs:{md:"6"}},[n("h4",[e._v("States/Cycles:")]),n("ul",[n("li",[e._v("Idle - Animated on 6s")]),n("li",[e._v("Walk - Animated on 2s")]),n("li",[e._v("Run - Animated on 1s")])])])],1)],1),n("h3",{staticClass:"align-center"},[e._v("Links")]),n("b-row",[n("b-col",{staticClass:"link-col"},[n("a",{staticClass:"link-item float-left"},[n("a",{staticClass:"btn btn-outline-light btn-lg float-left pr-3",attrs:{type:"button",href:"https://github.com/niguelchaos/RaphlUnityIntegration",target:"_blank"}},[n("em",{class:"bi bi-github",attrs:{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 32 32"}})])]),n("a",{staticClass:"link-item"},[n("b-button",{staticClass:"link-button",attrs:{href:"./ProjectDocuments/RaphlAnimExe.zip",target:"_blank"}},[n("strong",[e._v("RaphlUnityExe.zip")])])],1)])],1)],1)},S=[],$=(a("9456"),{}),U=Object(l["a"])($,O,S,!1,null,"12bdbb26",null),L=U.exports,V={props:["projectDetails"],components:{NameHeader:s["default"],FeelTheDisasterDesc:u,TouchingHeartsDesc:b,TimeloopMetroidDesc:w,GetMeowtOfHereDesc:A,TronReplicaDesc:P,JengaFortressDesc:G,RaphlAnimDesc:L},methods:{}},W=V,B=(a("e6e1"),Object(l["a"])(W,n,i,!1,null,"31e197eb",null));t["a"]=B.exports},"883c":function(e,t,a){},9456:function(e,t,a){"use strict";a("6b91")},a107:function(e,t,a){"use strict";a("4d1a")},c2ec:function(e,t,a){},cb1e:function(e,t,a){},e6e1:function(e,t,a){"use strict";a("c2ec")},ed00:function(e,t,a){}}]);
//# sourceMappingURL=chunk-738eb4a2.99fc2434.js.map