import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React from 'react';
import {HomeOutlined} from "@ant-design/icons"
type IBreadCrumb = {
  items: {
    label: string;
    link:string
  }[]
}
const UMBreadCrumb = ({items}: IBreadCrumb) => {

  const breadCrumbItems = [
    {
      title: (
        <Link href='/'><HomeOutlined/></Link>
      )
    },
    ...items.map(item=> {
      return {
        title: item.link? <Link href={item.link}>{item.label}</Link> : <span>{item.label}</span>
      }
    })
  ]

  return (
    <Breadcrumb items={breadCrumbItems}>
    </Breadcrumb>
  );
};

export default UMBreadCrumb;