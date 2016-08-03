import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Splash from './Splash';
import App from './App';
import Page404 from './Page404';
import School from './School';
import District from './District';
import Degree from './Degree';
// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/school" />
      <Route path="/school" component={School} />
      <Route path="/district" component={District} />
      <Route path="/degree" component={Degree} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  // 渲染logo页面
  render(<Splash />, document.getElementById('root'));

  // 2秒后跳转
  setTimeout(() => {
    render(routes, document.getElementById('root'));
  }, 2000);
});
