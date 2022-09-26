import React from "react";
import { RootComponentInstance } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import componentResolver from "@/lib/resolvers/componentResolver";

export default function BaseComposition({
  composition,
}: {
  composition: RootComponentInstance;
}) {
  return (
    <>
      <Composition
        behaviorTracking="onLoad"
        resolveRenderer={componentResolver}
        data={composition}
      >
        <div>
          <Slot name="content" />
        </div>
      </Composition>
    </>
  );
}
