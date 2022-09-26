import React from "react";
import { RootComponentInstance } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { SlideInit } from "./SlideInit";
import ThemeResolver from "./ThemeResolver";
import componentResolver from "@/lib/resolvers/componentResolver";

export default function SlideComposition({
  composition,
}: {
  composition: RootComponentInstance;
}) {
  const ref = SlideInit();
  return (
    <>
      <ThemeResolver theme={composition?.parameters?.slideTheme} />
      <Composition
        behaviorTracking="onLoad"
        resolveRenderer={componentResolver}
        data={composition}
      >
        <div className="slides" ref={ref}>
          <Slot name="slides" />
        </div>
      </Composition>
    </>
  );
}
