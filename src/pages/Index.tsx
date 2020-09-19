import React, { memo, useEffect, useRef, useState } from 'react';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';
import { Button } from 'antd';

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
// @ts-ignore
let vditor = null;
const Index: React.FC<IndexProps> = (props) => {
  const [val, setVal] = useState<string>('');

  // 仅在组件第一次初始化时调用
  useEffect(() => {
    vditor = new Vditor('vditor', {
      height: 360,
      toolbarConfig: {
        pin: true,
      },
      /*
       * 模式:
       * wysiwyg:所见即所得
       * ir:ir模式
       * editor: sv模式
       * both: 编辑 & 预览模式
       * */
      mode: 'wysiwyg',
      cache: {
        enable: false,
      },
      preview: {
        hljs: {
          // 代码块是否显示行号
          lineNumber: true,
          // 代码块默认主题
          style: 'dracula',
        },
        markdown: {
          // wysiwyg & ir 模式是否渲染代码块
          codeBlockPreview: false,
          // 是否自动空格
          autoSpace: true,
          // 是否启用目录
          toc: true,
          // 是否启用mark标记
          mark: true,
          // 是否自动矫正标点
          chinesePunct: true,
          // 是否自动矫正术语
          fixTermTypo: true,
        },
        // theme: {
        //   current: "dark"
        // }
      },
      // 按下tab新增四个空格
      tab: '    ',
      placeholder: '请输入...',
      // 默认是否展现大纲
      outline: true,
      after() {
        // @ts-ignore
        vditor.setValue('# Hello, Vditor + React!');
        console.log('渲染完成!');
      },
      ctrlEnter(md) {
        console.log('用户按下了 Ctrl+Enter，Markdown 内容为：\n' + md);
      },
      input(md) {
        console.log('用户进行了输入，Markdown 内容为：\n' + md);
      },
      blur(md) {
        console.log('用户离开了编辑器，Markdown 内容为：\n' + md);
      },
      select(md) {
        console.log('用户选中了一段文字，内容为：\n' + md);
      },
      focus(md) {
        console.log('用户选中了编辑器，Markdown 内容为：\n' + md);
      },
      esc(md) {
        console.log('用户按下了 ESC，Markdown 内容为：\n' + md);
      },
    });
  }, []);

  const updateContent = () => {
    // @ts-ignore
    vditor.setValue('这是我设置的更新内容!');
  };
  const updateContentAndClearStack = () => {
    // @ts-ignore
    vditor.setValue('更新内容，并清空历史栈!', true);
  };
  const insertValue = () => {
    // @ts-ignore
    vditor.insertValue(
      '![图片](https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)',
    );
  };
  const deleteValue = () => {
    // @ts-ignore
    vditor.deleteValue();
  };
  const updateValue = () => {
    // @ts-ignore
    vditor.updateValue('更新在这里');
  };
  const renderPreview = () => {
    // @ts-ignore
    vditor.renderPreview('预览区内容设置好了哦');
  };
  // ===================================================
  const getValue = () => {
    // @ts-ignore
    alert(vditor.getValue());
  };
  const getHTML = () => {
    // @ts-ignore
    alert(vditor.getHTML());
  };
  const getSelection = () => {
    // @ts-ignore
    alert(vditor.getSelection());
  };
  const getCurrentMode = () => {
    // @ts-ignore
    alert(vditor.getCurrentMode());
  };
  const getCursorPosition = () => {
    // @ts-ignore
    alert(vditor.getCursorPosition());
  };
  const html2md = () => {
    // @ts-ignore
    alert(vditor.html2md(vditor.getHTML()));
  };
  // ===================================================
  const disabled = () => {
    // @ts-ignore
    vditor.disabled();
  };
  const enable = () => {
    // @ts-ignore
    vditor.enable();
  };
  const focus = () => {
    // @ts-ignore
    vditor.focus();
  };
  const blur = () => {
    // @ts-ignore
    vditor.blur();
  };
  const tip2 = () => {
    // @ts-ignore
    vditor.tip('实现 CommonMark 和 GFM 规范', 2000);
  };
  const tip = () => {
    // @ts-ignore
    vditor.tip('表情自动补全，设置常用表情，支持表情自定义', 0);
  };
  const clearStack = () => {
    // @ts-ignore
    vditor.clearStack();
  };
  const destroy = () => {
    // @ts-ignore
    vditor.destroy();
  };
  return (
    <div>
      <div>
        <Button onClick={updateContent}>更新内容</Button>
        <Button onClick={updateContentAndClearStack}>
          更新内容并清空历史栈
        </Button>
        <Button onClick={insertValue}>在光标位置插入内容</Button>
        <Button onClick={deleteValue}>删除选中内容</Button>
        <Button onClick={updateValue}>更新选中内容</Button>
        <Button onClick={renderPreview}>设置预览区域内容</Button>
      </div>
      <div>
        <Button onClick={getValue}>获取markdown</Button>
        <Button onClick={getHTML}>获取html</Button>
        <Button onClick={getSelection}>获取选中内容</Button>
        <Button onClick={getCurrentMode}>获取编辑器当前模式</Button>
        <Button onClick={getCursorPosition}>获取光标位置</Button>
        <Button onClick={html2md}>HTML -&gt; Markdown</Button>
      </div>
      <div>
        <Button onClick={disabled}>只读</Button>
        <Button onClick={enable}>取消只读</Button>
        <Button onClick={focus}>聚焦</Button>
        <Button onClick={blur}>失焦</Button>
        <Button onClick={tip2}>消息提示两秒消失</Button>
        <Button onClick={tip}>消息提示需手动关闭</Button>
        <Button onClick={clearStack}>清空历史栈</Button>
        <Button onClick={destroy}>销毁</Button>
      </div>
      <div id={'vditor'}></div>
    </div>
  );
};
export default memo(Index);
