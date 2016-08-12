import React from 'react';
import { Container, Grid, Col } from 'amazeui-touch';

class Splash extends React.Component {
  render() {
    const logoStyle = {
      display: 'block',
      textAlign: 'center',
      overflow: 'hidden',
      marginTop: screen.height / 2 - 210,
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    const labelStyle = {
      paddingTop: 80,
    };

    return (
      <Container id="splash-cnt">
        <Grid style={logoStyle}>
          <Col><img src="i/logo.png" /></Col>
          <Col><img src="i/label.png" style={labelStyle} /></Col>
        </Grid>
      </Container>
    );
  }
}

export default Splash;
