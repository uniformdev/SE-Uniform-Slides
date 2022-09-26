export const umbracoModelConverter = ({ component, parameter }) => {
  const entry = parameter;
  var returnvalue;

  switch (component.type) {
    case "emailText":
      returnvalue = {
        text: entry.value[0].text,
      };
      break;

    case "emailHero":
    case "emailCta":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle || null,
        slideText: entry.value[0]?.slideText || null,
        slideHeadline: entry.value[0]?.slideHeadline || null,
        title: entry.value[0]?.title || null,
        subtitle: entry.value[0]?.subtitle || null,
        description: entry.value[0]?.description || null,
        ctaTitle: entry.value[0]?.ctaTitle || null,
        ctaLink: entry.value[0]?.ctaLink || null,
        image: {
          src:
            component.parameters?.image !== undefined
              ? component.parameters?.image?.value[0].url
              : null,
          alt: "Alt text",
        },
      } as Type.CallToAction;

      break;

    case "utsDarkTitleSlide":
    case "utsDarkTitleSlideqa":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle,
        slideText: entry.value[0]?.slideText,
        slideHeadline: entry.value[0]?.slideHeadline,
        imageurl:
          component.parameters?.image !== undefined
            ? component.parameters?.image?.value[0].url
            : null,
        variant: component.variant || null,
      } as Type.BasicSlideProps;
      break;

    case "utsColumnsSlide":
      returnvalue = {
        column1Headline: entry.value[0]?.column1Headline,
        column1Text: entry.value[0]?.column1Text,
        column2Headline: entry.value[0]?.column2Headline,
        column2Text: entry.value[0]?.column2Text,
        column3Headline: entry.value[0]?.column3Headline,
        column3Text: entry.value[0]?.column3Text,
      } as Type.ColumnSlideProps;
      break;

    case "utsSimpleBackground1":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle,
        slideText: entry.value[0]?.slideText,
        variant: component.variant || null,
      } as Type.BasicSlideProps;
      break;

    case "utsSimpleBackground2":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle,
        slideText: entry.value[0]?.slideText,
        variant: component.variant || null,
      } as Type.BasicSlideProps;
      break;

    case "utsSimpleBackground3":
    case "utsSimpleBackground3Columns":
    case "utsSimpledWith2ColumnsFullScreen":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle,
        slideText: entry.value[0]?.slideText,
        imageurl:
          component.parameters?.image !== undefined
            ? component.parameters?.image?.value[0].url
            : null,
        variant: component.variant || null,
      } as Type.BasicSlideProps;
      break;

    case "utsSimpleSlide":
      returnvalue = {
        slideTitle: entry.value[0]?.slideTitle,
        slideHeadline: entry.value[0]?.slideHeadline,
        slideText: entry.value[0]?.slideText,
        variant: component.variant || null,
      } as Type.BasicSlideProps;
      break;

    default:
      returnvalue = parameter;
      break;
  }
  return returnvalue;
};
