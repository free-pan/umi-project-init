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
    },
    msgList: null,
  },
};
