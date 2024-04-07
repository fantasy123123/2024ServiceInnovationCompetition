// 登陆界面：通过账号密码登录

import { Button, Form, Input, Message } from '@arco-design/web-react';
import {IconSafe, IconUnlock, IconUser} from '@arco-design/web-react/icon';
import {useEffect, useRef, useState} from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import PicAuthCode from "./PicAuthCode";

const FormItem = Form.Item;

const AccountSignIn = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    let inputCode=''

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

    const setTempCode=()=>{
        const words='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789'
        let tempCode=''
        for(let i=0;i<4;i++){
            tempCode+=words[Math.floor( Math.random()*52)]
        }
        console.log(tempCode)
        return tempCode
    }


    return (
    <>
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="用户名/邮箱" rules={[{ required: true }]}>
          <Input
              onChange={value=>{setName(value)}}
            placeholder="请输入用户名/邮箱"
            prefix={<IconUser />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="密码" rules={[{ required: true }]}>
          <Input
              onChange={value=>{setPassword(value)}}
            placeholder="请输入密码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="验证码" rules={[{ required: true }]}>
          <Input
              onChange={value=>{inputCode=value}}
              placeholder="请输入验证码"
              prefix={<IconSafe />}
              suffix={<PicAuthCode setCode={setTempCode} />}
              style={{
                height: '50px',
                width: '125%',
              }}
          />
        </FormItem>
          <br />
        <FormItem>
          <Button
            type="primary"
            style={{
              fontSize: '20px',
              height: '50px',
              width: '125%',
              borderRadius: '5px',
            }}
            onClick={async () => {
                console.log(inputCode,setTempCode())
              if(inputCode===setTempCode()) {
                  if (formRef.current) {
                      try {
                          await formRef.current.validate();
                          axios({
                              method:'post',
                              url:'http://192.210.174.146:5000/users/login-with-account',
                              data:{
                                  "login": name,
                                  "password": password,
                              }
                          }).then(
                              res=>{
                                  if(res.status===200){
                                      Message.info('登录成功！');
                                      if(res.data.identity===null){
                                          navigate('/guide/identity',{state:res.data})
                                      } else {
                                          navigate('/main/home',{state:res.data});
                                      }
                                  }
                              },
                              error=>{
                                  if(error.response){
                                      if(error.response.status===404){
                                          Message.error('登录失败！请检查用户名/邮箱与密码是否正确。');
                                      }
                                      else {
                                          Message.error('Network Error!');
                                      }
                                  }
                                  else {
                                      Message.error('Network Error!');
                                  }
                              }
                          )
                      } catch (_) {
                          console.log(formRef.current.getFieldsError());
                          Message.error('仍有未填写字段！');
                      }
                  }
              } else {
                  Message.error('图片验证码错误！')
              }
            }}
          >
            登 录
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default AccountSignIn;
