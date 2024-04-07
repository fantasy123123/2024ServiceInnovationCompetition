// 登陆界面：通过手机号与短信验证码登录

import { Button, Form, Input, Message } from '@arco-design/web-react';
import { IconSafe, IconUnlock, IconUser } from '@arco-design/web-react/icon';
import { useEffect, useRef, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const FormItem = Form.Item;
const VerificationCodeSignIn = () => {
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [verificationMessage, setVerificationMessage] = useState('获取验证码');

  // @ts-expect-error
  function getMessageVerificationCode(e) {
    if(!/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])d{8}$/.test(phone)){
      Message.info('手机号格式错误！')
    } else {
      e.stopPropagation();
      const verification = document.getElementById('verification');
      if (verificationMessage === '获取验证码') {
        // @ts-expect-error
        verification.style.color = 'grey';
        let i = 60;

        const countDown = function () {
          setVerificationMessage(`${i}秒后重新获取`);
        };
        countDown();

        const timer = setInterval(() => {
          i--;
          setVerificationMessage(`${i}秒后重新获取`);
          if (i === 0) {
            clearInterval(timer);
            setVerificationMessage(`获取验证码`);
            // @ts-expect-error
            verification.style.color = '#0083ff';
          }
        }, 1000);

        axios({
          method: 'post',
          url: 'http://192.210.174.146:5000/sms/send',
          data: {
            "phone": phone,
          }
        }).then(
            res => {
              if (res.response.status === 200) {
                Message.info('验证码发送成功！')
              }
            },
            error => {
              Message.error('验证码发送失败，请稍后重试。');
            }
        )
      }
    }
  }

  const [phone,setPhone]=useState('')
  const [code,setCode]=useState('')
  const [verify,setVerify]=useState('')

  return (
    <>
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="手机号" rules={[{ required: true }]}>
          <Input
              onChange={value => {setPhone(value)}}
            placeholder="请输入手机号"
            prefix={<IconUser />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="短信验证码" rules={[{ required: true }]}>
          <Input
              onChange={value => {setCode(value)}}
            placeholder="请输入短信验证码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
            suffix={
              <div
                id={'verification'}
                style={{ color: '#0083ff', fontSize: '16px' }}
                onClick={getMessageVerificationCode}
              >
                {verificationMessage}
              </div>
            }
            id={'messageVerificationCode'}
          />
        </FormItem>

        <FormItem field="验证码" rules={[{ required: true }]}>
          <Input
              onChange={value => {setVerify(value)}}
              placeholder="请输入验证码"
              prefix={<IconSafe />}
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
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  if(!/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])d{8}$/.test(phone)){
                    Message.info('您输入的电话有误！')
                  } else {
                    axios({
                      method:'post',
                      url:'http://192.210.174.146:5000/users/login-with-sms',
                      data:{
                        "phone": phone,
                        "verificationCode": code,
                        //图片验证码
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
                            //图片验证码错误
                            if(error.response.status===400){
                              Message.error('短信验证码错误！');
                            }
                            else if(error.response.status===404){
                              Message.error('该手机号未注册！');
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
                  }
                } catch (_) {
                  Message.error('仍有未填写字段！');
                }
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

export default VerificationCodeSignIn;
