declare namespace Type {
  type UniformComponentProps<TProps> =
    import("@uniformdev/canvas-react").ComponentProps<TProps>;
  type ComponentInstance = import("@uniformdev/canvas-react").ComponentInstance;
  type ReactSelectProps = import("react").HTMLProps<HTMLSelectElement>;
  type GetStaticPropsContext = import("next").GetStaticPropsContext;
  type GetStaticPropsResult<T> = import("next").GetStaticPropsResult<T>;
  // type Document = import("@contentful/rich-text-types").Document;
  interface CallToActionProps {
    content: CallToAction;
  }
  interface BasicSlideProps {
    slideTitle: string;
    slideText: string;
    slideHeadline: string;
    imageurl: string;
    variant?: string;
  }

  //create interface for ColumnSlideProps
  interface ColumnSlideProps {
    column1Headline: string;
    column1Text: string;
    column2Headline: string;
    column2Text: string;
    column3Headline: string;
    column3Text: string;
  }

  interface CallToAction {
    id: string;
    title?: string;
    subtitle?: string;
    description?: string;
    ctaTitle?: string;
    ctaLink?: string;
    secondaryCtaTitle?: string;
    secondaryCtaLink?: string;
    image?: { src: string; alt: string };
    videoUrl?: string;
    slideTitle?: string;
    slideHeadline?: string;
    slideText?: string;
  }

  interface Resource {
    title: string;
    text: string;
    link: string;
    linkTitle: string;
    id: string;
    internalLink: string;
    author: Author;
    image?: ContentfulImage;
  }
  type CtaHeaderImageProps = {
    content: {
      title: string;
      subtitle: string;
      description: string;
      ctaTitle: string;
      ctaLink: string;
      image: { src: string };
    };
  };
}
