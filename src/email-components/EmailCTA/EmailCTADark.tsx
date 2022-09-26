import React from 'react';
import BasicTable from '@/email-components/BasicTable';

interface Props {
  content: Type.CallToAction;
}

const EmailCTADark: React.FC<Props> = ({ content }) => {
  const { title, description, ctaTitle, ctaLink } = content;

  return (
    <BasicTable background="#202A33" tdStyle={{ padding: '30px 50px' }}>
      <tr>
        <td>
          <div
            style={{
              width: '100%',
              maxWidth: '200px',
              display: 'inline-block',
              paddingRight: '50px',
              verticalAlign: 'middle',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                lineHeight: '30px',
                color: '#ffffff',
                fontWeight: 400,
                fontFamily: 'DM Sans, Arial, sans-serif',
                paddingBottom: '10px',
              }}
            >
              {title}
            </h2>
            <a
              href={ctaLink}
              style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '15px 30px',
                backgroundColor: '#E03C26',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'DM Sans, Arial',
                textDecoration: 'none',
              }}
            >
              {ctaTitle}
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '230px',
              display: 'inline-block',
              verticalAlign: 'middle',
              paddingLeft: '20px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: '#ffffff',
                verticalAlign: 'middle',
                fontFamily: 'DM Sans, Arial, sans-serif',
              }}
            >
              {description}
            </p>
          </div>
        </td>
      </tr>
    </BasicTable>
  );
};

export default EmailCTADark;
