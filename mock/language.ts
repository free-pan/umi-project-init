export default {
  'get /api/language': {
    code: '200',
    success: true,
    resp: [
      {
        code: 'zh-CN',
        name: 'CN 中文',
      },
      {
        code: 'en-US',
        name: 'EN 英文',
      },
    ],
    msgList: null,
  },

  'get /api/language/resource/zh-CN': {
    code: '200',
    success: true,
    resp: {
      loginTitle: '登录页',
      tabTitleA: '账号密码登录',
      tabTitleB: '手机号登录',
      accountPlaceholder: '账号...',
      passwordPlaceholder: '密码...',
      loginBtnText: '登录',
      accountErrorMsg: '请输入账号!',
      passwordErrorMsg: '请输入密码!',
      registerBtnText: '注册账号',
      rememberMeText: '记住我',
      forgetPwdText: '忘记密码',
      phonePlaceholder: '手机号...',
      validateCodePlaceholder: '验证码...',
      loadValidateCodeBtn: '获取验证码',
      menuWelcome: '欢迎',
      menuOne: '一级菜单',
      menuTwo: '二级菜单',
      menuDemo: '示例',
    },
    msgList: null,
  },

  'get /api/language/resource/en-US': {
    code: '200',
    success: true,
    resp: {
      loginTitle: 'Login Page',
      tabTitleA: 'Account password login',
      tabTitleB: 'Phone number login',
      accountPlaceholder: 'Account...',
      passwordPlaceholder: 'Password...',
      loginBtnText: 'Login',
      accountErrorMsg: 'Please input account!',
      passwordErrorMsg: 'Please input password!',
      registerBtnText: 'Register',
      rememberMeText: 'Remember me',
      forgetPwdText: 'Forget password',
      phonePlaceholder: 'Phone number...',
      validateCodePlaceholder: 'Validate code...',
      loadValidateCodeBtn: 'Get validate code',
      menuWelcome: 'welcome',
      menuOne: 'first',
      menuTwo: 'second',
      menuDemo: 'demo',
    },
    msgList: null,
  },

  'get /api/menu': {
    code: '200',
    success: true,
    resp: [
      {
        path: '/',
        name: '欢迎',
        i18n: 'menuWelcome',
        icon: 'smile',
        children: [
          {
            path: '/welcome',
            name: '一级菜单',
            i18n: 'menuOne',
            icon: 'smile',
            children: [
              {
                path: '/welcome/welcome',
                name: '二级菜单',
                i18n: 'menuTwo',
                icon: 'smile',
                exact: true,
              },
            ],
          },
        ],
      },
      {
        path: '/demo',
        name: '这是示例',
        i18n: 'menuDemo',
        icon: 'heart',
      },
    ],
    msgList: null,
  },
};
