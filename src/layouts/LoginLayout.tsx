import React, { memo, useEffect } from 'react';
import styles from './LoginLayout.less';

import { Card, Layout, ConfigProvider } from 'antd';
import LanguageSelect from '@/components/LanguageSelect';
import { useDispatch, useSelector } from 'dva';
import BizLanguageSelect from '@/components/BizLanguageSelect';
import { getLanguageCode, loadLocaleByCode } from '@/utils/I18nUtil';

const { Header, Footer, Content } = Layout;

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

interface LoginLayoutProps {
  route: RouteProps;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  const name: string = '后台管理模板';
  const githubUrl: string = '';
  const giteeUrl: string = '';

  // @ts-ignore
  let languageCode = useSelector(
    (state) => state.GlobalModel.selectedLanguageCode,
  );
  languageCode = languageCode ? languageCode : getLanguageCode();

  return (
    <ConfigProvider locale={loadLocaleByCode(languageCode)}>
      <Layout className={'full bg-main'}>
        <Header className={`${styles.header} bg-main`}>
          <div className={styles.langPanel}>
            <BizLanguageSelect style={{ float: 'right' }} />
          </div>
          <div className={styles.headerPanel}>
            <a href="/index">
              <img src={require('@/public/logo.png')} alt={name} />
              <strong>{name}</strong>
            </a>
            <span>让开发更高效, 让工作更轻松, 让生活更精彩!</span>
          </div>
        </Header>
        <Content className={`${styles.mainPanel}`}>
          <Card className={`${styles.mainBox}`}>{props.children}</Card>
        </Content>
        <Footer className={`${styles.footer}`}>
          <div className={styles.sourcePanel}>
            <a href={githubUrl}>Github</a>
            <a href={giteeUrl}>Gitee</a>
          </div>
          <div>Copyright © 2020 潘志勇</div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default memo(LoginLayout);
