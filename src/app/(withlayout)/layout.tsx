"use client"

import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout, theme } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// const { Header, Footer } = Layout;

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(()=> {
    if(!userLoggedIn){
      router.push('/login')
    }
    setIsLoading(true)
  }, [router, isLoading])

  if(!isLoading){
    return <p>Loading...</p>
  }

  return (
    <Layout hasSider>
      <Sidebar/>
       <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;