import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});

const useGsapHeight = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className) as NodeList;
      // console.log(elems,"height");

      if (elems.length === 0) {
        return;
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          height: 0,
          ease: "ease",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  });
};

export default useGsapHeight;
