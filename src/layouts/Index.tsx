import React, { memo, useEffect, useState } from 'react';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import { ConfigProvider, Spin } from 'antd';
import { useDispatch, useSelector } from 'dva';
import { Icon } from '@ant-design/compatible';
import { getLanguageCode, loadLocaleByCode } from '@/utils/I18nUtil';
import { useTranslation } from 'react-i18next';
import BizTopRightContentMenu from '@/components/BizTopRightContentMenu';
import { history } from 'umi';
import BizMenuBreadcrumb from '@/components/BizMenuBreadcrumb';

interface IndexProps {
  children: any;
  route: any;
}

const Index: React.FC<IndexProps> = (props) => {
  console.log('props', props.route.path, history.location.pathname);
  const { t } = useTranslation();

  const [selectedMenuKey, setSelectedMenuKey] = useState<string>(
    history.location.pathname,
  );
  const [openKeys, setOpenKeys] = useState<Array<string>>([]);

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

  const customHeader = (
    <div
      style={{
        background: '#fff',
        width: '100%',
        height: '100%',
        boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
      }}
    >
      <div className={'middleBizMenuBreadcrumb'}>
        <BizMenuBreadcrumb i18n={true} show={true} />
      </div>
      <div style={{ float: 'right' }}>
        <BizTopRightContentMenu />
      </div>
    </div>
  );

  // @ts-ignore
  // @ts-ignore
  return (
    <ConfigProvider locale={loadLocaleByCode(languageCode)}>
      <ProLayout
        fixedHeader={true}
        fixSiderbar={true}
        headerRender={() => customHeader}
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
          pathname: selectedMenuKey,
        }}
        menuDataRender={() => loopMenuItem(menuList)}
        menuProps={{
          onOpenChange: (keyArr) => {
            // @ts-ignore
            setOpenKeys([...keyArr]);
          },
          openKeys: openKeys,
          selectedKeys: [selectedMenuKey],
          onClick: function ({ key, keyPath }) {
            // 菜单项点击
            console.log('key', key, 'keyPath', keyPath);
            // @ts-ignore
            setSelectedMenuKey(key);
            history.push(key);
          },
        }}
      >
        {props.children}
      </ProLayout>
    </ConfigProvider>
  );
};
export default memo(Index);
