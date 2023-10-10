'use client'
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/Forminput";
import FormDatePicker from "@/components/Forms/FromDatePicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, departmentOptions, genderOptions } from "@/constants/global";
import { adminSchema } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string
}

const CreateAdminPage = () => {
  const {role} = getUserInfo() as any;
  const onSubmit = async (data: any) => {
    try {
      
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <UMBreadCrumb 
           items={[
            {
              label: `${role}`,
              link: `/${role}`
            },
            {
              label: `manage-admin`,
              link: `/${role}/admin`
            }
           ]}/>
      <h1>Create an admin</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
        <div style={{
          border: '1px solid #d9d9d9',
          borderRadius: '5px',
          padding: '15px',
          marginBottom: '10px'
        }}>
          <p style={{
            fontSize: '20px',
            marginBottom: '10px'
          }}>Admin Information</p>
        <Row gutter={{xs: 8, sm: 16, md:24, lg: 32}}>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='text' name='admin.name.firstName' size='large' label='First Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='admin.name.middleName' size='large' label='Middle Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='admin.name.lastName' size='large' label='Last Name'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='password' name='password' size='large' label='Password'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='admin.gender' size='large' label='Gender' 
           placeholder="Select Gender" options={genderOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='admin.management' size='large' label='Department' 
           placeholder="Select Department" options={departmentOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <UploadImage></UploadImage>
           </Col>
        </Row>
        </div>
        <div style={{
          border: '1px solid #d9d9d9',
          borderRadius: '5px',
          padding: '15px',
          marginBottom: '10px'
        }}>
          <p style={{
            fontSize: '20px',
            marginBottom: '10px'
          }}>Basic Information</p>
        <Row gutter={{xs: 8, sm: 16, md:24, lg: 32}}>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='email' name='admin.email' size='large' label='Email'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='admin.contactNo' size='large' label='Contact Number'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormInput type='text' name='admin.emergencyContactNo' size='large' label='Emergency Contact No'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormDatePicker name="admin.dateOfBirth" label="Date Of Birth" size="large"/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
           <FormSelectField name='admin.bloodGroup' size='large' label='Blood Group' 
           placeholder="Select Group" options={bloodGroupOptions}/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='text' name='admin.designation' size='large' label='Designation'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={12}>
            <FormInput type='text' name='admin.presentAddress' size='large' label='Present Address'/>
           </Col>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={12}>
            <FormInput type='text' name='admin.permanentAddress' size='large' label='Permanent Address'/>
           </Col>
        </Row>
        </div>
        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdminPage;