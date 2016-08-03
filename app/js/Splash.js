import React from 'react';
import { Container } from 'amazeui-touch';

class Splash extends React.Component {
  render() {
    const splashStyle = {
      display: 'block',
      textAlign: 'center',
      overflow: 'hidden',
      marginTop: screen.height / 2 - 210,
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    return (
      <Container id="jtx-cnt">
        <img className="splash" src="i/app.jpg" style={splashStyle} />
      </Container>
    );
  }
}

export default Splash;
