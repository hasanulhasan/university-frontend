'use client'
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const {role} = getUserInfo() as any;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: any, b: any) => a.age - b.age
    },
    {
      title: 'Action',
      render: function(data: any){
        return <Button
        onClick={()=> console.log(data)}
        type="primary" 
        danger>Delete</Button>
      }
    }
  ]

  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32
    },
  ];

  const onPaginationChange = (page:number, pageSize:number) => {
    console.log('page', page, 'size', pageSize)
  }
  const onTableChange = (pagination:any, filter:any, sorter:any) => {
    const {order, field} = sorter;
    console.log(order, field)
  }

  return (
    <div>
       <UMBreadCrumb 
           items={[
            {
              label: `${role}`,
              link: `/${role}`
            }
           ]}/>
      <ActionBar title='Department List'>
      <Link href='/super_admin/department/create'>
        <Button type="primary">Create</Button>
      </Link >
      </ActionBar>
      <UMTable 
      loading={false}
      columns={columns}
      dataSource={tableData}
      pageSize={5}
      totalPages={10}
      showSizeChanger={true}
      onPaginationChange={onPaginationChange}
      onTableChange={onTableChange}
      showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;