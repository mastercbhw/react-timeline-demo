import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/holographic' },
    { path: '/holographic', component: '@/pages/holographic/index.jsx' },
  ],
});
