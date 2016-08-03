import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, withRouter, IndexRedirect, Redirect } from 'react-router';
import { Container, Card } from 'amazeui-touch';

// class Splash extends React.Component {
//   render() {
//     var splashStyle = {
//       display: "block",
//       textAlign: "center",
//       overflow: "hidden",
//       marginTop: screen.height / 2 - 210,
//       marginLeft: "auto",
//       marginRight: "auto"
//     };

//     return (
//       <Container id="jtx-cnt">
//       <img className="splash" src="i/app.jpg" style={splashStyle}/>
//       </Container>
//     );
//   }
// }

import App from './App';
import Page404 from './Page404';
// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/school" />
      <Route path="/school" component={App} />
      <Route path="/district" component={App} />
      <Route path="/degree" component={App} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  // 渲染logo页面
  render(<Splash />, document.getElementById('root'));

  // 3秒后跳转
  setTimeout(() => {
    render(routes, document.getElementById('root'));
  }, 3000);
});


