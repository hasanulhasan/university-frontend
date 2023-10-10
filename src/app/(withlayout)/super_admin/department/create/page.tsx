import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
type FormValues = {
  title: string
}

const CreateDepartment = () => {
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
              label: `department`,
              link: `/${role}/department`
            }
           ]}/>
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
      <Row gutter={{xs: 8, sm: 16, md:24, lg: 32}}>
           <Col style={{marginBottom: '10px'}} className='gutter-row' span={8}>
            <FormInput type='text' name='title' size='large' label='Title'/>
           </Col>
       </Row>
       <Button htmlType="submit" type="primary">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;