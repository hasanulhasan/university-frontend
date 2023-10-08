"use client"

import { Layout, theme } from 'antd';
import UMBreadCrumb from './UMBreadCrumb';
import Header from './Header';
const { Content} = Layout;

const Contents = ({children}: {children: React.ReactNode}) => {
  const base = 'admin'

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  
  return (
    <Content style={{ margin: '0 16px' }}>
          <Header/>
         

          <div style={{ padding: 24, minHeight: 360, background: '#ffffff', color: 'black'}}>
            {children}
          </div>
    </Content>
  );
};

export default Contents;