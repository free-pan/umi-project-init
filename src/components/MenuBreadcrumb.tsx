import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Breadcrumb } from 'antd';
import { MenuData } from '@/services/GlobalService';
import { useTranslation } from 'react-i18next';
import { Link } from 'umi';

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

interface MenuBreadcrumbProps {
  /**
   * 菜单数据
   */
  menuList?: Array<MenuData>;
  /**
   * 当前pathname
   */
  pathname: string;
  /**
   * 是否启用i18n. 默认:false
   */
  i18n?: boolean;
  /**
   * 额外加在面包屑头部的菜单
   */
  homeMenu?: MenuData;
  /**
   * 是否显示面包屑. 默认:true
   */
  show?: boolean;
}

/**
 * 根据 pathname,从 menuList 中查找匹配的节点,以及该节点所有的先辈节点
 * @param menuList
 * @param pathname
 */
const findAncestor = (
  menuList: Array<MenuData>,
  pathname: string,
): Array<MenuData> => {
  for (let idx in menuList) {
    if (menuList[idx].path === pathname) {
      return [menuList[idx]];
    } else if (menuList[idx].children) {
      // @ts-ignore
      const tmpArr = findAncestor(menuList[idx].children, pathname);
      if (tmpArr && tmpArr.length > 0) {
        return [menuList[idx], ...tmpArr];
      }
    }
  }
  return [];
};

const MenuBreadcrumb: React.FC<MenuBreadcrumbProps> = (props) => {
  const { show = true, homeMenu, menuList, pathname, i18n = false } = props;
  if (!show) {
    return <></>;
  }
  const { t } = useTranslation();

  const breadcrumbItemArr: Array<any> = [];
  if (homeMenu) {
    let name = homeMenu.name;
    if (i18n) {
      // @ts-ignore
      name = t(homeMenu.i18n);
    }
    if (homeMenu.path) {
      breadcrumbItemArr.push(
        <Breadcrumb.Item>
          <Link to={homeMenu.path}>{name}</Link>
        </Breadcrumb.Item>,
      );
    } else {
      breadcrumbItemArr.push(<Breadcrumb.Item>{name}</Breadcrumb.Item>);
    }
  }
  if (menuList) {
    const arr = findAncestor(menuList, pathname);
    arr.map((item, idx) => {
      let name = item.name;
      if (i18n) {
        // @ts-ignore
        name = t(item.i18n);
      }
      if (item.path && idx < arr.length - 1) {
        breadcrumbItemArr.push(
          <Breadcrumb.Item>
            <Link to={item.path}>{name}</Link>
          </Breadcrumb.Item>,
        );
      } else {
        breadcrumbItemArr.push(<Breadcrumb.Item>{name}</Breadcrumb.Item>);
      }
    });
  }

  return (
    <>
      <Breadcrumb>{breadcrumbItemArr}</Breadcrumb>
    </>
  );
};
export default memo(MenuBreadcrumb);
