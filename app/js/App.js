import React from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute,hashHistory,withRouter} from 'react-router';
import {Container,TabBar} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {location, params, children, ...props} = this.props;
    const {router} = this.context;
    // const transition = children.props.transition || 'sfr';

    // {alert("screen.height = " + screen.height )}
    return (
      
      <Container direction="column" id="main-cnt">
        
        <Container
          transition='sfr'
          // fade transition example
          // transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        > 
        {this.props.children}
        </Container>
        
        <TabBar
          amStyle=""
          className="main-tabbar"
        >
          <TabBar.Item
            component={Link}
            icon="home"
            title="学校查小区"
            selected={router.isActive('/school', true)}
            to="/school"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="list"
            title="小区查学校"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/district', true)}
            to="/district"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="查学位锁定"
            // badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/degree', true)}
            to="/degree"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

export default App;
