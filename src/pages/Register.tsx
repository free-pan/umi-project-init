import React, { memo, useEffect, useState } from 'react';
import styles from './Register.less';
import { Helmet } from 'umi';

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

interface RegisterProps {
  route: RouteProps;
}

const Register: React.FC<RegisterProps> = (props) => {
  const [val, setVal] = useState<string>('');

  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  return (
    <div>
      <Helmet>
        <title>注册页</title>
      </Helmet>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
export default memo(Register);
