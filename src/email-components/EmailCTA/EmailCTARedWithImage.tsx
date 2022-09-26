import React from 'react';
import BasicTable from '@/email-components/BasicTable';

interface Props {
  content: Type.CallToAction;
}

const EmailCTARedWithImage: React.FC<Props> = ({ content }) => {
  const { title, image, ctaTitle, ctaLink } = content;
  return (
    <BasicTable background="#E03C26" tdStyle={{ padding: '30px 50px' }}>
      <tr>
        <td valign="bottom">
          <div
            style={{
              width: '100%',
              maxWidth: '200px',
              display: 'inline-block',
            }}
          >
            <h3
              style={{
                textAlign: 'left',
                fontSize: '24px',
                fontFamily: 'DM Sans, Arial',
                lineHeight: '30px',
                color: '#ffffff',
                fontWeight: 400,
              }}
            >
              {title}
            </h3>
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
                border: '1px solid #ffffff',
              }}
            >
              {ctaTitle}
            </a>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
              display: 'inline-block',
              verticalAlign: 'bottom',
            }}
          >
            <a href={ctaLink}>
              <img src={image.src} alt="" width="300px" style={{ display: 'block' }} />
            </a>
          </div>
        </td>
      </tr>
    </BasicTable>
  );
};

export default EmailCTARedWithImage;
