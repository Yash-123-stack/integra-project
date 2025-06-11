import useGsapOpacity from "./useGsapOpacity.tsx";
import useGsapOpacityTransAppear from "./useGsapOpacityTransAppear.tsx";
import useGsapStagger from "./useGsapStagger.tsx";
import useGsapScale from "./useGsapScale.tsx";
import useGsapHeight from "./useGsapHeight.tsx";
import useGsapSliding from "./useGsapSliding.tsx";

const useGSAP = (pageClassName: string) => {
  useGsapOpacity(pageClassName + " .gsap-opacity");
  useGsapOpacityTransAppear(pageClassName + " .gsap-fade-in");
  useGsapSliding(pageClassName + " .gsap-slide-in");
  useGsapStagger(
    pageClassName + " .gsap-stagger",
    pageClassName + " .gsap-stagger-parent"
  );
  useGsapScale(pageClassName + " .gsap-scale");
  useGsapHeight(pageClassName + " .gsap-height");
};
export default useGSAP;
