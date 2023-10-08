"use client"
import { Button, Col, Row } from "antd";
import loginBanner  from './../../assets/loginImg.svg'
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Loading from "../loading";

type FormValues = {
  id: string;
  password: string
}

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({...data}).unwrap();
      if(res?.accessToken){
        router.push('/profile')
      }

      storeUserInfo({accessToken: res?.accessToken})
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row
    justify="center"
    align="middle"
    style={{
      minHeight: '100vh'
    }}>
    <Col sm={12} md={16} lg={10}>
      <Image src={loginBanner} alt="login image" width={500}/>
    </Col>
    <Col sm={12} md={8} lg={8}>
      <h1 style={{
        margin: '15px 0px'
      }}>Login in your account</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput name="id" type="text" size="large" label="User id"/>
          </div>
          <div style={{
        margin: '15px 0px'
      }}>
            <FormInput name="password" type="password" size="large" label="User password"/>
          </div>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </Col>
  </Row>
  );
};

export default LoginPage;