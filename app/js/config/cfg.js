import rstCode from '../client-svr-cfg/rst-code-def.js';
import xwfCommCfg from '../client-svr-cfg/xwf-comm-cfg.js';
// import rstCode  from './lib/client-svr-cfg/rst-code-def.js'

const cfg = {
  isDev: false,
  ver: '0.0.1', // 版本号,
  svrUrl: '', // 服务器地址,
  // 初始化
  init: (cfg) => {
    cfg.initRstCode(cfg);
    cfg.initCommCfg(cfg);
    console.log(cfg);
  },
  // 初始化返回码
  initRstCode: (cfg) => {
    rstCode(cfg);
  },
  // 初始化前后端通用配置文件
  initCommCfg: (cfg) => {
    xwfCommCfg(cfg);
  },
};

export default cfg;
