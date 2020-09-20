import React, { memo, useEffect } from 'react';
import styles from './Login.less';
import { Button, Form, Input, Checkbox, Tabs, Row, Col } from 'antd';
import {
  UserOutlined,
  MailTwoTone,
  LockTwoTone,
  MobileTwoTone,
} from '@ant-design/icons';
import { Helmet } from 'umi';
import { useDispatch, useSelector } from 'dva';
import { formatMessage } from '@/utils/I18nUtil';

const { TabPane } = Tabs;

interface RouteProps {
  /**
   * 当前路由的路径
   */
  path: string;
  /**
   * 路由路径是否需要完全匹配
   */
  exact: boolean;
}

interface LoginProps {
  route: RouteProps;
}

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const Login: React.FC<LoginProps> = (props) => {
  // @ts-ignore
  const i18nResource = useSelector((state) => state.LanguageModel.i18nResource);

  const [form] = Form.useForm();
  const tabTitleA: string = formatMessage(i18nResource, {
    id: 'tabTitleA',
    defaultMessage: '账号密码登录',
  });
  const tabTitleB: string = formatMessage(i18nResource, {
    id: 'tabTitleB',
    defaultMessage: '手机号登录',
  });
  const accountPlaceholder = formatMessage(i18nResource, {
    id: 'accountPlaceholder',
    defaultMessage: '账号...',
  });
  const passwordPlaceholder = formatMessage(i18nResource, {
    id: 'passwordPlaceholder',
    defaultMessage: '密码...',
  });
  const loginBtnText = formatMessage(i18nResource, {
    id: 'loginBtnText',
    defaultMessage: '登录',
  });
  const accountErrorMsg = formatMessage(i18nResource, {
    id: 'accountErrorMsg',
    defaultMessage: '请输入账号!',
  });
  const passwordErrorMsg = formatMessage(i18nResource, {
    id: 'passwordErrorMsg',
    defaultMessage: '请输入密码!',
  });
  const registerBtnText = formatMessage(i18nResource, {
    id: 'registerBtnText',
    defaultMessage: '注册账号',
  });
  const rememberMeText = formatMessage(i18nResource, {
    id: 'rememberMeText',
    defaultMessage: '记住我',
  });
  const forgetPwdText = formatMessage(i18nResource, {
    id: 'forgetPwdText',
    defaultMessage: '忘记密码',
  });
  const phonePlaceholder = formatMessage(i18nResource, {
    id: 'phonePlaceholder',
    defaultMessage: '手机号...',
  });
  const validateCodePlaceholder = formatMessage(i18nResource, {
    id: 'validateCodePlaceholder',
    defaultMessage: '验证码...',
  });
  const loadValidateCodeBtn = formatMessage(i18nResource, {
    id: 'loadValidateCodeBtn',
    defaultMessage: '获取验证码',
  });
  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  // @ts-ignore
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles.mainBox}>
      <Helmet>
        <title>登录页</title>
      </Helmet>
      <Tabs defaultActiveKey="1">
        <TabPane tab={tabTitleA} key="1">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            size={'large'}
          >
            <Form.Item
              name="account"
              rules={[{ required: true, message: accountErrorMsg }]}
            >
              <Input
                placeholder={accountPlaceholder}
                prefix={<UserOutlined style={{ color: '#1890ff' }} />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: passwordErrorMsg }]}
            >
              <Input.Password
                placeholder={passwordPlaceholder}
                prefix={<LockTwoTone twoToneColor="#1890ff" />}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>{rememberMeText}</Checkbox>
              <a href={''} className={styles.forgetPwdBtn}>
                {forgetPwdText}
              </a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button block type="primary" htmlType="submit">
                {loginBtnText}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab={tabTitleB} key="2">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            size={'large'}
          >
            <Form.Item
              name="account"
              rules={[{ required: true, message: accountErrorMsg }]}
            >
              <Input
                placeholder={phonePlaceholder}
                prefix={<MobileTwoTone twoToneColor="#1890ff" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: passwordErrorMsg }]}
            >
              <Row style={{ margin: 0 }}>
                <Col span={16} style={{ margin: 0 }}>
                  <Input
                    placeholder={validateCodePlaceholder}
                    prefix={<MailTwoTone twoToneColor="#1890ff" />}
                  />
                </Col>
                <Col span={7} style={{ margin: 0, marginLeft: '5px' }}>
                  <Button>{loadValidateCodeBtn}</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>{rememberMeText}</Checkbox>
              <a href={''} className={styles.forgetPwdBtn}>
                {forgetPwdText}
              </a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button block type="primary" htmlType="submit">
                {loginBtnText}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
      <a href={'/page/register'} className={styles.registerBtn}>
        {registerBtnText}
      </a>
    </div>
  );
};
export default memo(Login);
