import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      component: '@/layouts/Index',
      routes: [
        {
          path: '/',
          component: '@/pages/Index',
        },
      ],
    },
  ],
});
