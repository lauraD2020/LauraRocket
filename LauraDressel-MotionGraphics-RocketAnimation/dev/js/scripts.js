//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

//register Plugins
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(GSDevTools, MotionPathPlugin);


//**** SELECT ELEMENTS without jQuery ****\\


// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
let mainTL = gsap.timeline({id:"main"});


  function init(){
    //***********  spinTL init ****************
    gsap.to("#meteorf5", {transformOrigin:"center" , rotation:360, duration:5, repeat:-1, ease:"none"});
    gsap.to("#meteorf4", {transformOrigin:"center" , rotation:360, duration:5, repeat:-1, ease:"none"});
    gsap.to("#meteorf3", {transformOrigin:"center" , rotation:360, duration:5, repeat:-1, ease:"none"});
    gsap.to("#meteorf2", {transformOrigin:"center" , rotation:360, duration:5, repeat:-1, ease:"none"});
    gsap.to("#meteorf1", {transformOrigin:"center" , rotation:360, duration:5, repeat:-1, ease:"none"});

    //*********** meteorTL init ****************
    gsap.to("#meteor5", {transformOrigin:"center"});
    gsap.to("#meteor4", {transformOrigin:"center" });
    gsap.to("#meteor3", {transformOrigin:"center" });
    gsap.to("#meteor2", {transformOrigin:"center" });
    gsap.to("#meteor1", {transformOrigin:"center" });
    //*********** spaceshipTL init ****************
    gsap.set("#rocket", {scale:0.65, visibility:"hidden"});
    gsap.to("#bigFlame", {duration:0.25, scaleY:.25,yoyo:true, repeat:-1});
    //*********** flightTL init ****************

    //*********** jupiterTL init ****************
    gsap.to("#meteorb8", {transformOrigin:"center" , rotation:360, duration:7, repeat:-1, ease:"none"});
    gsap.to("#meteorb7", {transformOrigin:"center" , rotation:360, duration:7, repeat:-1, ease:"none"});
    gsap.to("#meteorb6", {transformOrigin:"center" , rotation:360, duration:7, repeat:-1, ease:"none"});
    gsap.to("#meteorb5", {transformOrigin:"center" , rotation:500, duration:7, repeat:-1, ease:"none"});
    gsap.to("#meteorb4", {transformOrigin:"center" , rotation:360, duration:8, repeat:-1, ease:"none"});
    gsap.to("#meteorb3", {transformOrigin:"center" , rotation:360, duration:7, repeat:-1, ease:"none"});
    gsap.to("#meteorb2", {transformOrigin:"center" , rotation:360, duration:6, repeat:-1, ease:"none"});
    gsap.to("#meteorb1", {transformOrigin:"center" , rotation:360, duration:9, repeat:-1, ease:"none"});

  }

  //Nested Timelines
  function flightTL(){
    let tl = gsap.timeline({id:"flight"});
    tl.to("#rocket", {
      duration:17,
      delay:3,
      visibility:"visible",
      // ease:"slow.out",
      scale:0.15,
      motionPath:{
        path:"#flightPath",
        align:"#flightPath",
        alignOrgin:[.5, 1],
        autoRotate:90
      }
 
    })
    ;
    // tl.to("#jupiter", {x:800, y:70, duration:1, scale:1.5}),"-=25";

  

    return tl;
  }
  //***********  spinTL  ****************
  function spinTL(){
    let tl = gsap.timeline();
    tl.to("#meteorf5", {delay:10, x:-3000, y:4000, duration:15},"go");
    tl.to("#meteorf4", {delay:10, x:-3000, y:4000, duration:20},"go");
    tl.to("#meteorf3", {delay:10, x:-5000, y:4000, duration:20},"go");
    tl.to("#meteorf2", {delay:10, x:-6000, y:4000, duration:20},"go");
    tl.to("#meteorf1", {delay:10, x:-1000, y:4000, duration:20},"go");


    return tl;
  }


    //*********** meteorTL init ****************
    function shiftTL(){
      let tl = gsap.timeline();
      tl.to("#meteor5", {delay:6, transformOrigin:"center" , x:-100, duration:20, ease: "expo.out"},"shift");
      tl.to("#meteor4", {delay:6, transformOrigin:"center" , x:4050, duration:20},"shift");
      tl.to("#meteor3", {delay:7, transformOrigin:"center" , x:-1000, duration:20},"shift");
      tl.to("#meteor2", {delay:6, transformOrigin:"center" , x:2000, duration:20},"shift");
      tl.to("#meteor1", {delay:6, transformOrigin:"center" , x:-2000, duration:20},"shift");
      tl.to("#meteorBig", {delay:5, transformOrigin:"center" , x:2000, duration:10},"shift");


  
      return tl;
    }
    //*********** rocketTL init ****************
    // function rocketTL(){
    //   let tl = gsap.timeline();
    //   tl.from("#rocket", {visibility:"hidden"});

    
  
    //   return tl;
    // }
    //*********** flightTL init ****************
  
    //*********** jupiterTL init ****************
    function jupiterTL(){
      let tl = gsap.timeline();
      tl.to("#rocket", {alpha:0, duration:.25});
      tl.to("#jupiter", {x:135, y:20, duration:2, scale:6},"woo");
      tl.to("#meteorsBG", {alpha:0, duration:2},"woo");


      return tl;
    }

  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  mainTL.add(flightTL(), "spin")
  .add(spinTL(), "spin")
  .add(shiftTL(),"-=25")
  .add(jupiterTL(),"-=12")
  // .add(rocketTL(),"-=20")
  



//ADD YOUR TIMELINES FOOL

;//tl END





});
