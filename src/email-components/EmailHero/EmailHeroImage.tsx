import React from 'react';
import BasicTable from '@/email-components/BasicTable';

const EmailHeroImage: React.FC<Type.CallToActionProps> = ({ content }) => {
  const { image } = content;

  return (
    <BasicTable tdStyle={{ padding: 0 }}>
      <tr>
        <td>{image?.src && <img src={image.src} alt="hero" width="100%" />}</td>
      </tr>
    </BasicTable>
  );
};

export default EmailHeroImage;
