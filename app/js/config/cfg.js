const cfg = {
  isDev: true,
  ver: '0.0.1', // 版本号,
  svrUrl:  '' // 
};


cfg.init = function() {
  this._initSvr();
}

cfg._initSvr = function () {
  if (cfg.isDev) {
    cfg.svrUrl = 'http://localhost:8010';
  } else {
    cfg.svrUrl = 'http://localhost:8010';
  }
}

export default cfg;