// 注册界面：通过账号密码注册

import { Button, Checkbox, Form, Input, Message } from '@arco-design/web-react';
import {IconEmail, IconUnlock, IconUser} from '@arco-design/web-react/icon';
import {useEffect, useRef, useState} from 'react';
import '../style/RegisterPage.css';
import {useNavigate} from "react-router-dom";
import {registerWithAccount} from "../interactoin";

const FormItem = Form.Item;

const AccountRegister = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();

    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="用户名" rules={[{ required: true }]}>
          <Input
              onChange={value=>{setName(value)}}
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
                  onChange={value => {setEmail(value)}}
                  placeholder="请输入邮箱"
                  prefix={<IconEmail />}
                  style={{
                      height: '50px',
                      width: '125%',
                  }}
              />
          </FormItem>

        <FormItem field="密码" rules={[{ required: true }]}>
          <Input
              onChange={value => {setPassword(value)}}
            placeholder="请输入密码（由6-20个字符组成）"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="确认密码" rules={[{ required: true }]}>
          <Input
            placeholder="请再次输入密码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
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
                  registerWithAccount(name,password,email);
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

export default AccountRegister;
