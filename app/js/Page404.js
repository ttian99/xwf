import React from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute,hashHistory,withRouter} from 'react-router';
import {Container,Card} from 'amazeui-touch';

class Page404 extends React.Component {
  render() {
    var splashStyle = {
      display: "block",
      textAlign: "center",
      overflow: "hidden",
      marginTop: screen.height / 2 - 210,
      marginLeft: "auto",
      marginRight: "auto"
    };
    return (
      <Container id="jtx-cnt">
        <p> the path is not find! 
            ====================
        </p>
      </Container>
    );
  }
}

export default Page404;
