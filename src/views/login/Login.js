import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,message,Card,notification,Layout,Divider,Icon } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '@/style/view-style/login.scss'
import {setToken} from '@/utils/auth'
import loginApi from '@/service/login'
// import md5 from 'md5'
const Login = (props) => {
  const {getFieldDecorator} = props.form
  const handleSubmit = e=>{
    console.log(e);
    e.preventDefault();
    props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        console.log(values);
        console.log('提交');
        // api
        loginApi.loginPhone({userName:values.username,password:values.password})
        .then((res) => {
          console.log('登陆成功');
          console.log(res);
          message.success('登陆成功');
          setToken(res.token)
          props.history.push("/admin")

        })
        .catch((err)=>{
          console.error('数据异常：', err);
          // message.error(err.data)
        });
      }else{
        message.error('请正确输入内容！')
      }
    })
  }

  return (  
    <Layout className='login'>
      <div className="model">
        <Card title="后台管理系统"   className="login-form">
          <Form
          
            onSubmit={e=>handleSubmit(e)}>
            <Form.Item
              name="username"
            >
            {
              getFieldDecorator("username",{
                rules:[
                  {
                    required:true,
                    message:"请输入用户名"
                  }
                  
                ]
              })(<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"></Input>)
            }
              
            </Form.Item>
            <Form.Item
              name="password"
              
            >
            {
              getFieldDecorator("password",{
                rules:[
                  {
                    required:true,
                    message:"请输入密码"
                  }
                  
                ]
              })(<Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"></Input>)
            }
            
            </Form.Item>
            <Form.Item>
              

              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              
            </Form.Item>
          </Form>
        </Card>
      </div>
      
    </Layout>
  );
}
 
export default Form.create({name:"loginForm"})(Login);