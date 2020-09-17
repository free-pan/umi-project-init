import React, { memo, useEffect, useState } from 'react';
import styles from './Index.less';

interface IndexProps {
  children: any;
}

const Index: React.FC<IndexProps> = (props) => {
  const [val, setVal] = useState<string>('');

  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  return (
    <div>
      layout
      {props.children}
    </div>
  );
};
export default memo(Index);
