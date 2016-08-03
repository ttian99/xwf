import React from 'react';
import { Container, Field, Grid, Col } from 'amazeui-touch';
import Logo from './Logo';

class District extends React.Component {
  render() {
    return (
      <Container className="main-search-cnt">
        <Grid className="main-grid" wrap="wrap">
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            <Field
              // label="Your Name"
              // containerClassName="school-search"
              className="main-search"
              placeholder="请输入楼盘全名"
            />
          </Col>
          <Col cols={6}>
            <p className="search-label">例：输入“<span>东海花园</span>”找到对口小学、初中</p>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default District;
