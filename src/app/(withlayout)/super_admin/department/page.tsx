'use client'
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const DepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  query['limit'] = size;
  query['page'] = page;
  query['sortBy'] = sortBy;
  query['sortOrder'] = sortOrder;

  const {role} = getUserInfo() as any;
  const {data: departments, isLoading} = useGetDepartmentsQuery({...query});
  console.log(departments);
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Time',
      dataIndex: 'age',
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

  // const tableData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32
  //   },
  // ];

  const onPaginationChange = (page:number, pageSize:number) => {
    console.log('page', page, 'size', pageSize)
    setPage(page)
    setSize(pageSize)
  }
  const onTableChange = (pagination:any, filter:any, sorter:any) => {
    const {order, field} = sorter;
    console.log(order, field)
    setSortBy(field as string);
    setSortOrder(order === 'ascend'? 'asc' : 'desc')
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
      loading={isLoading}
      columns={columns}
      dataSource={departments}
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