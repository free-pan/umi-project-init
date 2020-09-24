import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import MenuBreadcrumb from '@/components/MenuBreadcrumb';
import { history } from 'umi';
import { MenuData } from '@/services/GlobalService';

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

interface BizMenuBreadcrumbProps {
  /**
   * 是否启用国际化. 默认:false
   */
  i18n?: boolean;
  /**
   * 是否显示面包屑. 默认:true
   */
  show?: boolean;
  /**
   * 额外加在面包屑头部的菜单
   */
  homeMenu?: MenuData;
}

const BizMenuBreadcrumb: React.FC<BizMenuBreadcrumbProps> = (props) => {
  const { show = true, i18n = false, homeMenu } = props;

  const dispatch = useDispatch();

  // @ts-ignore
  const menuList = useSelector((state) => state.GlobalModel.menuList);

  return (
    <>
      <MenuBreadcrumb
        menuList={menuList}
        pathname={history.location.pathname}
        i18n={i18n}
        show={show}
        homeMenu={homeMenu}
      />
    </>
  );
};
export default memo(BizMenuBreadcrumb);
