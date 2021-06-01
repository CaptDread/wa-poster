"use strict";

console.log('Hello World from main.js!');
var tl = new TimelineMax();
tl.to(".poster", {
  duration: 7,
  filter: "contrast(100%) saturate(100%)"
}).to("img", {
  delay: -10,
  duration: 7,
  filter: "contrast(100%) saturate(100%)"
}).from(".sand-back", {
  delay: -10,
  duration: 3,
  y: 10
}).from(".sand-mid", {
  delay: -10,
  duration: 3,
  y: 10
});
var yoda = new TimelineMax();
yoda.to(".yoda", {
  duration: 1.3,
  y: -10,
  ease: "linear"
}).to(".yoda", {
  duration: 1.3,
  y: 0,
  ease: "linear"
}).to(".yoda", {
  duration: 1.3,
  y: 10,
  ease: "linear"
}).to(".yoda", {
  duration: 1.3,
  y: 0,
  ease: "linear"
});
var cloak = new TimelineMax();
cloak.to(".cloak", {
  delay: 1.3,
  duration: 1.3,
  ease: "linear",
  skewX: 4
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: 0
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: -1
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: 0
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: 4
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: 0
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: -1
}).to(".cloak", {
  duration: 1.3,
  ease: "linear",
  skewX: 0
});
yoda.repeat(-1);
cloak.repeat(-1); // gsap.from('.background', { duration: 2, y: '-=5%' });
// gsap.from('.sand-back', { duration: 3, y: '+=2%' });
// gsap.from('.sand-front', { duration: 3, y: '+=5%' });
// gsap.from('.character', { duration: 3, y: '+=8%' });
// gsap.from('.text', { delay: 1, duration: 2, opacity: 0, y: '-=5%' });

/*
ideas for pushing it further
	make the stars separate
	make the letters in JOURNEY separate, and the should start 
	close together at first, and spread out further
	as they come in... i think ALIEN did this...
	the glow behind the mountain could pulse/flicker/grow and shrink
	the mountain itself could be another layer.
	there is no limit on how cool this could be!!!!!!!!
*/
//# sourceMappingURL=main.js.map
