import React from 'react';
import BasicTable from '@/email-components/BasicTable';

enum EmailHeaderVariants {
  Light = 'light',
  Dark = 'dark',
}

type EmailHeaderProps = {
  ctaText?: string;
  ctaUrl?: string;
};

type Props = Type.UniformComponentProps<EmailHeaderProps> & EmailHeaderProps;

const EmailHeader: React.FC<Props> = ({ ctaText, ctaUrl, component }) => {
  const variant = component.variant || EmailHeaderVariants.Light;
  const hasCta = ctaText && ctaUrl;
  const color = variant === EmailHeaderVariants.Light ? '#558ECE' : '#ffffff';

  return (
    <BasicTable
      background={variant === EmailHeaderVariants.Light ? '#ffffff' : '#212B33'}
      tdStyle={{ padding: '15px 50px' }}
    >
      <tr>
        <td width={hasCta ? '33%' : '100%'} valign="middle">
          <a href="https://uniform.dev">
            <img
              src={
                variant === EmailHeaderVariants.Light
                  ? 'https://uniform.dev/img/emails/uniform-logo-dark.png'
                  : 'https://uniform.dev/img/emails/uniform-logo-white.png'
              }
              alt="Uniform logo"
              width="117px"
              style={{ display: 'block' }}
            />
          </a>
        </td>
        {Boolean(ctaText && ctaUrl) && (
          // eslint-disable-next-line react/no-unknown-property
          <td width="66%" align="right">
            <a href={ctaUrl}>
              <span
                style={{
                  textDecoration: 'underline',
                  color,
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'DM Sans, Arial, sans-serif',
                  verticalAlign: 'middle',
                }}
              >
                {ctaText}
              </span>
              <img
                src="https://uniform.dev/img/emails/hyperlink-arrow.png"
                alt=""
                width={16}
                style={{ paddingLeft: '10px', maxHeight: '16px', verticalAlign: 'middle' }}
              />
            </a>
          </td>
        )}
      </tr>
    </BasicTable>
  );
};

export default EmailHeader;
