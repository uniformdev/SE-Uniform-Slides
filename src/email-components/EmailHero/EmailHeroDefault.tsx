import React from "react";
import { EmailHeroVariants } from "./EmailHero";
import BasicTable from "@/email-components/BasicTable";

type Variants =
  | EmailHeroVariants.Light
  | EmailHeroVariants.Dark
  | EmailHeroVariants.Fractals;

type Props = Type.CallToActionProps & { variant: EmailHeroVariants };

const EmailHeroDefault: React.FC<Props> = ({
  content,
  variant = EmailHeroVariants.Light,
}) => {
  const background = {
    [EmailHeroVariants.Light]: "#ffffff",
    [EmailHeroVariants.Dark]: "#182B36",
    [EmailHeroVariants.Fractals]: "#558ECE",
  };

  const backgroundImage = {
    [EmailHeroVariants.Fractals]: {
      backgroundImage: "url(https://uniform.dev/img/emails/fractal-hero.png)",
      backgroundSize: "contain",
      backgroundColor: "#558ECE",
      backgroundRepeat: "no-repeat",
    },
  };

  const titleColor = {
    [EmailHeroVariants.Light]: "#558ECE",
    [EmailHeroVariants.Dark]: "#90C4DD",
    [EmailHeroVariants.Fractals]: "#ffffff",
  };

  const {
    slideTitle: title,
    slideHeadline: subtitle,
    ctaTitle,
    ctaLink,
    slideText: description,
  } = content;

  const hasCta = Boolean(ctaTitle && ctaLink);

  return (
    <>
      <BasicTable
        background={background[variant]}
        trStyle={backgroundImage[variant]}
        tdStyle={{ padding: "70px 50px 30px" }}
      >
        {subtitle && (
          <tr>
            <td>
              <p
                style={{
                  color:
                    variant === EmailHeroVariants.Light ? "#212B33" : "#ffffff",
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                  fontFamily: "Quantico, Arial, sans-serif",
                  margin: "0px",
                  paddingBottom: "20px",
                }}
              >
                {subtitle}
              </p>
            </td>
          </tr>
        )}
        {title && (
          <tr>
            <td>
              <h1
                style={{
                  color: titleColor[variant],
                  fontSize: "35px",
                  lineHeight: "40px",
                  fontWeight: 500,
                  fontFamily: "DM Sans, Arial, sans-serif",
                  margin: "0px",
                  paddingBottom: hasCta || subtitle ? "20px" : "0px",
                }}
              >
                {title}
              </h1>
            </td>
          </tr>
        )}
        {description && (
          <tr>
            <td>
              <h2
                style={{
                  color:
                    variant === EmailHeroVariants.Light ? "#212B33" : "#ffffff",
                  fontSize: "24px",
                  lineHeight: "30px",
                  fontWeight: 400,
                  fontFamily: "DM Sans, Arial, sans-serif",
                  margin: "0px",
                  paddingBottom: hasCta ? "20px" : "0px",
                }}
                dangerouslySetInnerHTML={{ __html: description }}
              ></h2>
            </td>
          </tr>
        )}
        {hasCta && (
          <tr>
            <td>
              <a
                href={ctaLink}
                style={{
                  backgroundColor: "#E03C26",
                  fontSize: "14px",
                  padding: "15px 30px",
                  fontFamily: "DM Sans, Arial",
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                {ctaTitle}
              </a>
            </td>
          </tr>
        )}
      </BasicTable>
      {variant === EmailHeroVariants.Dark && (
        <BasicTable>
          <img
            alt="logo"
            width="100%"
            src="https://uniform.dev/img/emails/hero-uniform-logo.png"
            style={{ paddingBottom: "25px" }}
          />
        </BasicTable>
      )}
    </>
  );
};

export default EmailHeroDefault;
