'use client'
import React from 'react';
import { Col, Row } from 'antd';
import FormInput from '../Forms/Forminput';
import FormSelectField from '../Forms/FormSelectField';
import { acDepartmentOptions, academicSemesterOptions, facultyOptions, genderOptions } from '@/constants/global';
import UploadImage from '../ui/UploadImage';

const StudentInfo = () => {

  return (
    <div>
        <div style={{
          border: '1px solid #d9d9d9',
          borderRadius: '5px',
          padding: '15px',
          marginBottom: '10px',
          marginTop: '10px'
        }}>
          <p style={{
            fontSize: '20px',
            marginBottom: '10px',
            fontWeight: '800'
          }}>Student Information</p>
        <Row gutter={{xs: 8, sm: 16, md:24, lg: 32}}>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='text' name='student.name.firstName' size='large' label='First Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='student.name.middleName' size='large' label='Middle Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='student.name.lastName' size='large' label='Last Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='password' name='password' size='large' label='Password'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='student.academicDepartment' size='large' label='academicDepartment' 
           placeholder="Select" options={acDepartmentOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='student.academicFaculty' size='large' label='academicFaculty' 
           placeholder="Select" options={facultyOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='student.academicSemester' size='large' label='academicSemester' 
           placeholder="Select" options={academicSemesterOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='student.gender' size='large' label='Student Gender' 
           placeholder="Select" options={genderOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <UploadImage/>
           </Col>
        </Row>
        </div>
    </div>
  );
};

export default StudentInfo;