"use client"

import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;
import { sidebarItems } from '@/constants/sidebaritems';
import { getUserInfo } from '@/services/auth.service';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {role} = getUserInfo() as any;
  
  return (
    <Sider
     style={{
      overflow: 'auto',
      height: '100vh',
      position: 'sticky',
      left: 0,
      top: 0,
      bottom: 0
     }}
     width={280}
     collapsible
     collapsed={collapsed} 
     onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          PH-University
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
    </Sider>
  );
};

export default Sidebar;