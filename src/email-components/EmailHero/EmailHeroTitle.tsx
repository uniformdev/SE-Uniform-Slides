import React from 'react';
import BasicTable from '@/email-components/BasicTable';

const EmailHeroTitle: React.FC<Type.CallToActionProps> = ({ content }) => {
  const { title } = content;

  return (
    <BasicTable tdStyle={{ padding: '30px 50px' }}>
      <tr>
        <td>
          <h1
            style={{
              color: '#558ECE',
              fontSize: '35px',
              lineHeight: '40px',
              fontWeight: 500,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </td>
      </tr>
    </BasicTable>
  );
};

export default EmailHeroTitle;
