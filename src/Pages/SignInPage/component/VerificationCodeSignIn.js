// 登陆界面：通过手机号与短信验证码登录

import { Button, Form, Input, Message } from '@arco-design/web-react';
import { IconSafe, IconUnlock, IconUser } from '@arco-design/web-react/icon';
import { useEffect, useRef, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

const FormItem = Form.Item;
const verificationCodeSignIn = () => {
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
    <>
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="手机号" rules={[{ required: true }]}>
          <Input
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
                  Message.info('校验通过，提交成功！');
                  navigate('/main/home')
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
          >
            登 录
          </Button>
        </FormItem>
      </Form>
      <div className="accountWrapper">
        <div className="box">
          <a href="about:blank" style={{ textDecoration: 'none' }}>
            <div className="item1">忘记密码</div>
          </a>
        </div>
        <div className="box">
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <div className="item2">注册账号</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default verificationCodeSignIn;
