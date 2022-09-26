import React from "react";
import EmailHeroDefault from "@/email-components/EmailHero/EmailHeroDefault";

export enum EmailHeroVariants {
  Light = "light",
  Dark = "dark",
  Fractals = "fractals",
  Image = "image",
  Title = "title",
}

type Props = Type.UniformComponentProps<Type.CallToActionProps> &
  Type.CallToActionProps;

const EmailHero = ({ content, component }: Props) => {
  const variant =
    (component.variant as EmailHeroVariants) || EmailHeroVariants.Dark;
  switch (variant) {
    default:
      return <EmailHeroDefault content={content} variant={variant} />;
  }
};

export default EmailHero;
