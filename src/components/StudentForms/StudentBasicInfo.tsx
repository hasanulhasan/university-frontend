import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/Forminput';
import FormDatePicker from '../Forms/FromDatePicker';
import FormSelectField from '../Forms/FormSelectField';
import { bloodGroupOptions } from '@/constants/global';

const StudentBasicInfo = () => {
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
          }}>Basic Student Information</p>
        <Row gutter={{xs: 8, sm: 16, md:24, lg: 32}}>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='email' name='student.email' size='large' label='Email'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='student.contactNo' size='large' label='Contact Number'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='student.emergencyContactNo' size='large' label='Emergency Contact No'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormDatePicker name="student.dateOfBirth" label="Date Of Birth" size="large"/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='student.bloodGroup' size='large' label='Blood Group' 
           placeholder="Select Group" options={bloodGroupOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={12}>
            <FormInput type='text' name='student.presentAddress' size='large' label='Present Address'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={12}>
            <FormInput type='text' name='student.permanentAddress' size='large' label='Permanent Address'/>
           </Col>
        </Row>
        </div>
    </div>
  );
};

export default StudentBasicInfo;