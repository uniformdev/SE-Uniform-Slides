import { ComponentType } from "react";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
import EmailHeader from "@/email-components/EmailHeader";
import EmailFooter from "@/email-components/EmailFooter";
import EmailHero from "@/email-components/EmailHero";
import EmailCTA from "@/email-components/EmailCTA";
import EmailText from "@/email-components/EmailText";
type ComponentInstance = import("@uniformdev/canvas").ComponentInstance;
type ComponentProps<T> = import("@uniformdev/canvas-react").ComponentProps<T>;

const ComponentsMap: { [key: string]: ComponentType<any> } = {
  emailHeader: EmailHeader,
  emailFooter: EmailFooter,
  emailHero: EmailHero,
  emailCta: EmailCTA,
  emailCtablueWithImage: EmailCTA,
  emailCtaredWithImage: EmailCTA,
  emailCtadark: EmailCTA,
  emailCtadarkWithImage: EmailCTA,
  emailText: EmailText,
};

const emailResolver = (
  component: ComponentInstance
): ComponentType<ComponentProps<any>> | null => {
  const { variant } = component;
  const componentName = variant
    ? `${component.type}${variant}`
    : component.type;
  return ComponentsMap[componentName] || DefaultNotImplementedComponent;
};
export default emailResolver;
