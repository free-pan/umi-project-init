import React, { memo, useEffect } from 'react';
import styles from './LoginLayout.less';

import { Card, Layout } from 'antd';
import LanguageSelect from '@/components/LanguageSelect';
import { useDispatch, useSelector } from 'dva';
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
  const effectMethods = {
    searchLanguageList: 'LanguageModel/searchLanguageList',
    searchI18nResource: 'LanguageModel/searchI18nResource',
  };

  // 获取dva的dispatch, 用于执行dva中自定义的相关方法
  const dispatch = useDispatch();

  // 获取dva的loadingEffect, 用于获取dva自定义方法的执行状态
  // @ts-ignore
  const loadingEffect = useSelector((state) => state.loading);
  // 获取dva 中自定义 effect方法的执行状态
  const searchI18nResourceExecuting =
    loadingEffect.effects[effectMethods.searchI18nResource];
  // 获取dva中指定的state属性值
  // @ts-ignore
  let languageList = useSelector((state) => state.LanguageModel.languageList);
  // @ts-ignore
  let i18nResource = useSelector((state) => state.LanguageModel.i18nResource);
  const name: string = '后台管理模板';
  const githubUrl: string = '';
  const giteeUrl: string = '';

  // 仅在组件第一次初始化时调用
  useEffect(() => {
    // 执行dva 中自定义 effect方法
    dispatch({
      type: effectMethods.searchLanguageList,
      payload: {},
    });
    dispatch({
      type: effectMethods.searchI18nResource,
      payload: { languageCode: 'zh-CN' },
    });
  }, []);

  // @ts-ignore
  const onLanguageChange = (code) => {
    dispatch({
      type: effectMethods.searchI18nResource,
      payload: { languageCode: code },
    });
  };

  return (
    <>
      <Layout className={'full bg-main'}>
        <Header className={`${styles.header} bg-main`}>
          <div className={styles.langPanel}>
            <LanguageSelect
              onChange={onLanguageChange}
              languageList={languageList}
              style={{ float: 'right' }}
            />
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
    </>
  );
};
export default memo(LoginLayout);
