"use client"

import { Breadcrumb, Layout, theme } from 'antd';
import UMBreadCrumb from './UMBreadCrumb';
const { Header, Content, Footer } = Layout;

const Contents = ({children}: {children: React.ReactNode}) => {
  const base = 'admin'
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}

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