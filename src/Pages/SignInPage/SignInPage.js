// 登录界面

import './style/SignInPage.css';
import { Select, Divider, Tabs, Typography } from '@arco-design/web-react';
import AccountSignIn from './component/AccountSignIn';
import VerificationCodeSignIn from './component/VerificationCodeSignIn';

const { TabPane } = Tabs;

const { Option } = Select;
const options = ['简体中文', 'English'];
const SignInPage = () => {
  return (
    <div className={'background'}>
      <Select
        placeholder="选择语言"
        defaultValue="简体中文"
        className={'language'}
      >
        {options.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <div className={'signInCard'}>
        <div className={'signInCardImage'}>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '73%',
            top: '8%',
            right: '3%',
            bottom: '5%',
            textAlign: 'center',
          }}
        >
          <Tabs defaultActiveTab="accountSignIn" size={'large'} type={'text'}>
            <TabPane key="accountSignIn" title="账号登录">
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <Divider />
              <AccountSignIn />
            </TabPane>

            <TabPane key="verificationCodeSignIn" title="验证码登录">
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                  marginTop: 20,
                }}
              />
              <Divider />
              <VerificationCodeSignIn />
            </TabPane>
          </Tabs>
        </div>
        <div id="otherSignIn">
          <span id="otherSignInText">其他登录方式</span>
          <a href="about:blank">
            <div id="qq" />
          </a>
          <a href="about:blank">
            <div id="wechat" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
