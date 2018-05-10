import PageHomeManage from "../modules/page.home.manage";
import PageMapManage from "../modules/page.map.manage";
import PageEchartsManage from "../modules/page.echarts.manage";

export const menus = [
  {
    name: "首页",
    url: "home",
    icon: "home",
    page: PageHomeManage
  },
  {
    name: "地图",
    url: "map",
    icon: "map",
    page: PageMapManage
  },
  {
    name: "Echarts",
    url: "echarts",
    icon: "pie-chart",
    page: PageEchartsManage
  }
];
