import React, { memo, useEffect } from 'react';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import { ConfigProvider, Spin } from 'antd';
import { useDispatch, useSelector } from 'dva';
import { Icon } from '@ant-design/compatible';
import { getLanguageCode, loadLocaleByCode } from '@/utils/I18nUtil';
import { useTranslation } from 'react-i18next';
import BizTopRightContentMenu from '@/components/BizTopRightContentMenu';

interface IndexProps {
  children: any;
}

const Index: React.FC<IndexProps> = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const effectMethods = {
    searchMenuList: 'GlobalModel/searchMenuList',
  };
  // @ts-ignore
  const loadingEffect = useSelector((state) => state.loading);
  const menuLoading = loadingEffect.effects[effectMethods.searchMenuList];
  // @ts-ignore
  const menuList = useSelector((state) => state.GlobalModel.menuList);

  // @ts-ignore
  let languageCode = useSelector(
    (state) => state.GlobalModel.selectedLanguageCode,
  );
  languageCode = languageCode ? languageCode : getLanguageCode();

  // 仅在组件第一次初始化时调用
  useEffect(() => {
    dispatch({
      type: effectMethods.searchMenuList,
      payload: {},
    });
  }, []);

  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ i18n, icon, children, name, ...item }) => ({
      ...item,
      name: t(i18n),
      icon: icon && <Icon type={icon as string} />,
      children: children && loopMenuItem(children),
    }));

  return (
    <ConfigProvider locale={loadLocaleByCode(languageCode)}>
      <ProLayout
        rightContentRender={() => <BizTopRightContentMenu />}
        menuContentRender={(_, dom) =>
          menuLoading ? (
            <div
              style={{
                padding: '24px 0',
              }}
            >
              <Spin tip="菜单加载中">{dom}</Spin>
            </div>
          ) : (
            dom
          )
        }
        title="后台管理模板"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        location={{
          pathname: '/welcome',
        }}
        menuDataRender={() => loopMenuItem(menuList)}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </ConfigProvider>
  );
};
export default memo(Index);
