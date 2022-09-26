import React from "react";
import BasicTable from "@/email-components/BasicTable";
interface Props {
  content: {
    text: string;
  };
}

const EmailText: React.FC<Props> = ({ content }) => (
  <>
    <BasicTable tdStyle={{ padding: "30px 50px" }}>
      <tr>
        <td
          style={{
            fontSize: "14px",
            lineHeight: "18px",
            color: "#000",
            fontFamily: "DM Sans, Arial, sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: content.text }}
        ></td>
      </tr>
    </BasicTable>
  </>
);
export default EmailText;
