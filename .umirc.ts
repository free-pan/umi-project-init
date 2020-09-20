import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/page',
      component: '@/layouts/LoginLayout',
      routes: [
        {
          path: 'login',
          component: '@/pages/Login',
        },
        {
          path: 'register',
          component: '@/pages/Register',
        },
      ],
    },
    {
      component: '@/layouts/Index',
      path: '/',
      routes: [
        {
          path: 'index',
          component: '@/pages/Index',
          wrappers: ['@/wrappers/Auth'],
        },
      ],
    },
  ],
});
