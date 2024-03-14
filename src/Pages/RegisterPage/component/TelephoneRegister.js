// 注册界面：通过手机号与短信验证码注册

import { Button, Checkbox, Form, Input, Message } from '@arco-design/web-react';
import {
  IconEmail,
  IconMessage,
  IconPhone,
  IconSafe,
  IconUser,
} from '@arco-design/web-react/icon';
import { useEffect, useRef, useState } from 'react';
import {useNavigate} from "react-router-dom";

const FormItem = Form.Item;

const TelephoneRegister = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate=useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();

  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  const [verificationMessage, setVerificationMessage] = useState('获取验证码');

  // @ts-expect-error
  function getMessageVerificationCode(e) {
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
    }
  }

  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="用户名" rules={[{ required: true }]}>
          <Input
              placeholder="请输入用户名"
              prefix={<IconUser />}
              style={{
                height: '50px',
                width: '125%',
              }}
          />
        </FormItem>

        <FormItem field="邮箱" rules={[{ required: true }]}>
          <Input
              placeholder="请输入邮箱"
              prefix={<IconEmail />}
              style={{
                height: '50px',
                width: '125%',
              }}
          />
        </FormItem>

        <FormItem field="手机号" rules={[{ required: true }]}>
          <Input
            placeholder="请输入手机号"
            prefix={<IconPhone />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="短信验证码" rules={[{ required: true }]}>
          <Input
            placeholder="请输入短信验证码"
            prefix={<IconMessage />}
            style={{
              height: '50px',
              width: '125%',
            }}
            suffix={
              <div
                id={'verification'}
                style={{
                  color: '#0083ff',
                  fontSize: '16px',
                }}
                onClick={getMessageVerificationCode}
              >
                {verificationMessage}
              </div>
            }
            id={'messageVerificationCode'}
          />
        </FormItem>


        <FormItem
          style={{ textAlign: 'left',position:'relative',bottom:10 }}
          field="readme"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true }]}
        >
          <Checkbox>我已阅读并同意相关协议</Checkbox>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            style={{
              fontSize: '20px',
              height: '45px',
              width: '125%',
              borderRadius: '5px',
              position: 'relative',
              bottom: '15px',
            }}
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('校验通过，提交成功！');
                  navigate('/signIn')
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
          >
            注 册
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default TelephoneRegister;
