import { ComponentType } from "react";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
type ComponentInstance = import("@uniformdev/canvas").ComponentInstance;
type ComponentProps<T> = import("@uniformdev/canvas-react").ComponentProps<T>;

import utsDarkTitleSlide from "@/components/SlideComponents/utsDarkTitleSlide";
import utsSimpleSlide from "@/components/SlideComponents/utsSimpleSlide";
import utsSimpleBackground1 from "@/components/SlideComponents/utsSimpleBackground1";
import utsSimpleBackground2 from "@/components/SlideComponents/utsSimpleBackground2";
import utsSimpleBackground3 from "@/components/SlideComponents/utsSimpleBackground3";
import utsColumnsSlide from "@/components/SlideComponents/utsColumnsSlide";
import hubspotContactForm from "@/components/hubspotContactForm";
import utsSimpledWith2ColumnsFullScreen from "@/components/SlideComponents/utsSimpledWith2ColumnsFullScreen";

const ComponentsMap: Record<string, ComponentType<any>> = {
  utsDarkTitleSlide: utsDarkTitleSlide,
  utsDarkTitleSlideqa: utsDarkTitleSlide,
  utsSimpleSlide: utsSimpleSlide,
  utsSimpleBackground1: utsSimpleBackground1,
  utsSimpleBackground2: utsSimpleBackground2,
  utsSimpleBackground2whatUniformDoes: utsSimpleBackground2,
  utsSimpleBackground3: utsSimpleBackground3,
  utsSimpleBackground3simplyPut: utsSimpleBackground3,
  utsSimpledWith2ColumnsFullScreen: utsSimpledWith2ColumnsFullScreen,
  utsSimpledWith2ColumnsFullScreenheadlessisdifficult:
    utsSimpledWith2ColumnsFullScreen,
  utsSimpledWith2ColumnsFullScreengartnerquote:
    utsSimpledWith2ColumnsFullScreen,
  utsColumnsSlide: utsColumnsSlide,
  hubspotcontactform: hubspotContactForm,
};

const componentResolver = (
  component: ComponentInstance
): ComponentType<ComponentProps<any>> | null => {
  const { variant } = component;

  const componentName = variant
    ? `${component.type}${variant}`
    : component.type;
  return ComponentsMap[componentName] || DefaultNotImplementedComponent;
};

export default componentResolver;
