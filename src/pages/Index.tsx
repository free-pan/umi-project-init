import React, { memo, useEffect, useState } from 'react';
import styles from './Index.less';

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

interface IndexProps {
  route: RouteProps;
}

const Index: React.FC<IndexProps> = (props) => {
  const [val, setVal] = useState<string>('');

  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
export default memo(Index);
