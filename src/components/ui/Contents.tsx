"use client"

import { Breadcrumb, Layout, theme } from 'antd';
import UMBreadCrumb from './UMBreadCrumb';
import Header from './Header';
const { Content} = Layout;

const Contents = ({children}: {children: React.ReactNode}) => {
  const base = 'admin'
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Content style={{ margin: '0 16px' }}>
          <Header/>
          <UMBreadCrumb 
           items={[
            {
              label: `${base}`,
              link: `/${base}`

            },
            {
              label: 'student',
              link: `/${base}/student`

            }
           ]}/>

          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, color: 'black'}}>
            {children}
          </div>
    </Content>
  );
};

export default Contents;