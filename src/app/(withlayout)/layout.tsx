"use client"

import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { Layout, theme } from 'antd';

const { Header, Footer } = Layout;

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

       <Contents>{children}</Contents>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;