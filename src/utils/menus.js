import PageHomeManage from '../modules/page.home.manage';
import PageMapManage from '../modules/page.map.manage';
import PageEchartsManage from '../modules/page.echarts.manage';
import pageReqmanage from '../modules/page.req.manage';


export const menus = [
  {
    name: '首页',
    url: 'home',
    icon: 'home',
    page: PageHomeManage
  },
  {
    name: '地图',
    url: 'map',
    icon: 'global',
    page: PageMapManage
  },
  {
    name: '列表管理',
    url: 'list',
    icon: 'bars',
    page: pageReqmanage
  },
  {
    name: 'Echarts',
    url: 'echarts',
    icon: 'pie-chart',
    page: PageEchartsManage
  }
];
