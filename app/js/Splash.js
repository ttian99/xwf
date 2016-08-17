import React from 'react';
import { Container, Grid, Col } from 'amazeui-touch';

class Splash extends React.Component {
  render() {
    const gridStyle = {
      marginTop: '50%',
      display: 'block',
      textAlign: 'center',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    return (
      <Container className="splash-cnt">
        <Grid className="splash-grid" style={gridStyle}>
          <Col cols={6}><img className="splash-logo" src="i/logo.png" /></Col>
          <Col cols={6}><img className="splash-label" src="i/label.png" /></Col>
        </Grid>
      </Container>
    );
  }
}

export default Splash;
