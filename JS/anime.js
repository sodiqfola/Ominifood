//jshint esversion:8
// //  gsap.to(".hero-img", { x: 2, duration: 2, ease: "power1.inout" });
gsap.fromTo(
  ".hero-img",
  { x:1000, opacity: 0 },
  { x: 1, duration: 1.5, ease: "power1.inout", opacity: 1,  }
);
gsap.to(
  ".hero-img",
  
  { rotation:360, duration: 30, ease: "power1.inout", repeat: -1 }
);



gsap.from(".text-primary", { opacity: 0, duration: 1.5, delay: 0.3, x: -50 });
gsap.from(".hero-description", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  x: -50,
});

gsap.fromTo(
  "#bt",
  { opacity: 0, x: - 15 },
  { opacity: 1, duration: 2.0, delay: 1.5, x: 1 }
);

gsap.fromTo(
  ".bt2",
  { opacity: 0, x: -25 },
  { opacity: 1, duration: 2.3, delay: 1.5, x: 1 }
);


/*NAV*/
gsap.from(".logo", { opacity: 0, duration: 2.5, delay: 1.0, y: 25 });
gsap.from(".main-nav", { opacity: 0, duration: 2.5, delay: 1.5, y: 25 });
gsap.from(".delivered-faces", {
  opacity: 0,
  duration: 2.5,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.3,
});
gsap.from(".delivered-text", { opacity: 0, duration: 2.5, delay: 1, y: 25 });


const sr = ScrollReveal({
  distance: "50px",
  duration: 2500,
  // reset: true,
});


//section how to
sr.reveal(".container, .testimonial-container", {
  origin: "bottom",
  // delay: 100,
  
});

sr.reveal(".step-text-box", { origin: "left", delay: 200 });
sr.reveal(".step-img-box", { origin: "right", delay: 200 });

sr.reveal(".box-2", { origin: "left", delay: 100 });
sr.reveal(".tx2", { origin: "right", delay: 100 });


// //testimonials

sr.reveal(".testimonials", { origin: "left ", delay: 200 });
sr.reveal(".gallery", { origin: "right", delay: 200 });



sr.reveal(".features", { origin: "bottom", delay: 20});
