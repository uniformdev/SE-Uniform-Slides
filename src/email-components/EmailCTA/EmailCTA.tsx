import React from "react";
import EmailCTABlueWithImage from "@/email-components/EmailCTA/EmailCTABlueWithImage";
import EmailCTADark from "@/email-components/EmailCTA/EmailCTADark";
import EmailCTARedWithImage from "@/email-components/EmailCTA/EmailCTARedWithImage";
import EmailCTADarkWithImage from "@/email-components/EmailCTA/EmailCTAdarkWithImage";

enum EmailCtaVariants {
  Dark = "dark",
  BlueWithImage = "blueWithImage",
  RedWithImage = "redWithImage",
  Video = "video",
  DarkWithImage = "darkWithImage",
}

type Props = Type.UniformComponentProps<Type.CallToActionProps> &
  Type.CallToActionProps;

const EmailCTA: React.FC<Props> = ({ component, content }) => {
  const variant = component.variant || EmailCtaVariants.Dark;

  switch (variant) {
    case EmailCtaVariants.BlueWithImage:
      return <EmailCTABlueWithImage content={content} />;
    case EmailCtaVariants.Dark:
      return <EmailCTADark content={content} />;
    case EmailCtaVariants.RedWithImage:
      return <EmailCTARedWithImage content={content} />;
    case EmailCtaVariants.DarkWithImage:
      return <EmailCTADarkWithImage content={content} />;
    default:
      return <EmailCTABlueWithImage content={content} />;
  }
};

export default EmailCTA;
