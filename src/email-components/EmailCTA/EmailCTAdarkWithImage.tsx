import React from "react";
import BasicTable from "@/email-components/BasicTable";

interface Props {
  content: Type.CallToAction;
}

const EmailCTADarkWithImage: React.FC<Props> = ({ content }) => {
  const { title, subtitle, image, ctaTitle, ctaLink } = content;
  return (
    <BasicTable background="#202A33" tdStyle={{ padding: "30px 50px" }}>
      <tr>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <td align="center">
          <div
            style={{
              display: "inline-block",
              width: "100%",
              maxWidth: "243px",
              verticalAlign: "middle",
              textAlign: "left",
            }}
          >
            <a href={ctaLink}>
              <img src={image?.src} alt={image?.alt} width="150px" />
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "100%",
              maxWidth: "257px",
              verticalAlign: "middle",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "24px",
                lineHeight: "30px",
                fontFamily: "DM Sans, Arial",
                paddingBottom: "10px",
                margin: "0",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                color: "#ffffff",
                fontSize: "14px",
                lineHeight: "20px",
                fontFamily: "DM Sans, Arial",
                paddingBottom: "30px",
                margin: "0",
              }}
            >
              {subtitle}
            </p>
            <a
              href={ctaLink}
              style={{
                display: "inline-block",
                backgroundColor: "#E03C26",
                color: "#fff",
                borderRadius: "0px",
                fontSize: "14px",
                padding: "15px 30px",
                fontFamily: "DM Sans, Arial",
                textDecoration: "none",
              }}
            >
              {ctaTitle}
            </a>
          </div>
        </td>
      </tr>
    </BasicTable>
  );
};

export default EmailCTADarkWithImage;
