import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index.jsx' },
    { path: '/gantt', component: '@/pages/timeGantt/index.jsx' },
    { path: '/jsgantt', component: '@/pages/jsGantt/index.jsx' },
    { path: '/antd', component: '@/pages/antdTable/index.jsx' },
    { path: '/swiper', component: '@/pages/swiper/index.jsx' },
  ],
});
