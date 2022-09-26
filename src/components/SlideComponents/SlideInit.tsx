import { useScores } from "@uniformdev/context-react";
import { useEffect, useRef, useState } from "react";

export const SlideInit = () => {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);

  const useScoresVar = useScores();
  const slideRef = useRef();

  useEffect(() => {
    if (!ref.current || loaded) {
      return;
    }

    const loadReveal = async () => {
      const { default: Reveal } = await import(
        "../../../node_modules/reveal.js/dist/reveal.esm.js"
      );

      const slider = new Reveal(ref.current);

      slideRef.current = slider;

      slider.initialize({
        hash: true,
      });
    };

    setLoaded(true);
    loadReveal();
  }, [ref.current, loaded]);

  useEffect(() => {
    if (slideRef.current == undefined) return;

    //@ts-ignore
    slideRef.current.initialize();
    //@ts-ignore
    slideRef.current.slide(slideRef.current.getIndices().h);
    //   setTimeout(() => {
    //     slideRef.current.initialize();
    //     slideRef.current.slide(0);
    //   }, 500);
  }, [useScoresVar]);

  return ref;
};
