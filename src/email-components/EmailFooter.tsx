import React from "react";
import BasicTable from "@/email-components/BasicTable";

interface Props {
  copyright?: string;
  legalText?: string;
}

const EmailFooter: React.FC<Props> = ({ copyright, legalText }) => (
  <BasicTable tdStyle={{ padding: "50px" }} background="#212B33">
    <tr>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <td align="center">
        <a href="https://uniform.dev">
          <img
            src="https://uniform.dev/img/emails/uniform-logo-white.png"
            alt="Uniform logo"
            width="117px"
            style={{ display: "block" }}
          />
        </a>
      </td>
    </tr>
    <tr>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <td align="center" style={{ padding: "20px 0" }}>
        <a
          href="https://twitter.com/uniformdev"
          style={{ display: "inline-block", padding: "10px" }}
        >
          <img
            src="https://uniform.dev/img/emails/twitter.png"
            alt="Twitter logo"
            width="25px"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/uniformdev/"
          style={{ display: "inline-block", padding: "10px" }}
        >
          <img
            src="https://uniform.dev/img/emails/linkedin.png"
            alt="Linkedin logo"
            width="25px"
          />
        </a>
        <a
          href="https://github.com/uniformdev"
          style={{ display: "inline-block", padding: "10px" }}
        >
          <img
            src="https://uniform.dev/img/emails/github.png"
            alt="Github logo"
            width="25px"
          />
        </a>
      </td>
    </tr>
    <tr
      style={{
        fontFamily: "DM Sans, Arial",
        color: "#ffffff",
        fontSize: "9px",
        lineHeight: "10px",
      }}
    >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <td align="center">
        {copyright && (
          <p
            style={{
              fontSize: "10px",
              lineHeight: "12px",
              padding: 0,
              margin: "0 0 25px",
            }}
          >
            {copyright}
          </p>
        )}
        {legalText && (
          <p style={{ padding: 0, margin: "0 0 25px" }}>{legalText}</p>
        )}

        <p style={{ padding: 0, margin: "0 0 25px" }}>
          <a href="{{ unsubscribe_link }}" style={{ color: "#ffffff" }}>
            Unsubscribe
          </a>
        </p>

        <p style={{ padding: "0", margin: "0" }}>
          {`
                    {{ site_settings.company_name }}
                    {{ site_settings.company_street_address_1 }}
                    {{ site_settings.company_city }}
                    {{ site_settings.company_state }}
                  `}
        </p>
      </td>
    </tr>
  </BasicTable>
);

export default EmailFooter;
