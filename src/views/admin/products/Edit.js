import React,{useState,useEffect} from 'react';
import {Form,Card,Input,Button,message,Radio } from 'antd';
import productApi from '@/service/product'

const Edit = (props) => {
  const {getFieldDecorator} = props.form
  const priceValidate = (rule,value,callback)=>{
    if(value*1>200){
      callback('价格不能大于200')
    }else{
      callback()
    }
  }
  // props.match.params.id是否存在
  const [currentData,setCurrentData] = useState({})
  useEffect(()=>{
    if(props.match.params.id){
      console.log(props.match.params.id);

      productApi.getRoleDetail({
        id: props.match.params.id
      })
      .then((res)=>{
        console.log(res);
        setCurrentData(res.data)
      })
    }
  },[])
  
  const handleSubmit = e=>{
    console.log(e);
    e.preventDefault();
    props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        console.log(values);
        console.log('提交');
        // 判断是新增还是修改
        if(props.match.params.id){
          productApi.updateRole({
            id:props.match.params.id,
            ...values
          })
          .then(res=>{
            console.log(res);
            props.history.push("/admin/products")
          })
          .catch(err=>{
            console.log(err);
          })
        }else{
          // api
          productApi.addProduct(values)
          .then(res=>{
            console.log(res);
            props.history.push("/admin/products")
          })
          .catch(err=>{
            console.log(err);
          })
        }
        
      }else{
        message.error('请正确输入内容！')
      }
    })
  }
  return (  
    <Card title="商品编辑">
      <Form onSubmit={e=>handleSubmit(e)}>
        <Form.Item label="名字">
        {
          getFieldDecorator("name",{
            rules:[
              {
                required:true,
                message:"请输入商品名字"
              }
              
            ],
            initialValue:currentData.name
          })(<Input placeholder="请输入商品名称"></Input>)
        }
          
        </Form.Item>
        <Form.Item label="价格">
        {
          getFieldDecorator("price",{
            rules:[
              {
                required:true,
                message:"请输入商品价格"
              },
              {
                validator:priceValidate
              }
            ]
          })(<Input placeholder="请输入商品价格"></Input>)
        }
          
        </Form.Item>
        {/* <Form.Item label="管理员">
        {
          getFieldDecorator("root",{
            rules:[
              {
                required:true,
                message:"请选择是否是管理员"
              }
              
            ],
            initialValue:currentData.root
          })(<Radio.Group >
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </Radio.Group>)
        }
          
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
 
export default Form.create({name:'ProductEdit'})(Edit);