import React from 'react';
import { emptyObject } from '@/constants';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  background?: string;
  trStyle?: React.CSSProperties;
  tdStyle?: React.CSSProperties;
};

const BasicTable: React.FC<Props> = ({
  background = '#ffffff',
  children,
  trStyle = emptyObject,
  tdStyle = emptyObject,
}) => (
  <div style={{ background: '#E4E5E6' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <table
        width="100%"
        // eslint-disable-next-line react/no-unknown-property
        bgcolor={background}
        // eslint-disable-next-line react/no-unknown-property
        align="center"
        cellSpacing={0}
        cellPadding={0}
        style={{ borderCollapse: 'collapse' }}
      >
        <tr style={trStyle}>
          <td style={tdStyle}>
            <table style={{ borderCollapse: 'collapse' }} cellSpacing={0} cellPadding={0} width="100%">
              {children}
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
);

export default BasicTable;
