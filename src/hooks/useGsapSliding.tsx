import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapSliding = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className) as NodeList;
      if (elems.length === 0) {
        return;
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          opacity: 0,
          x: 100, // Start slightly off-screen to the left
          duration: 1,
          // delay: 0.3,
          ease: "ease",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [className]);
};

export default useGsapSliding;

// useGsapSliding
