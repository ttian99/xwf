import React from 'react';
import { Container, Field, Grid, Col, Button } from 'amazeui-touch';
import Logo from './Logo';

class Degree extends React.Component {
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
              placeholder="查学位锁定情况"
            />
          </Col>
          <Col cols={2}>
            <Field
              type="select"
              // label="Select"
              ref="select"
              defaultValue="m"
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </Field>
          </Col>
          <Col cols={2}>
            <Field
              type="select"
              // label="Select"
              ref="select"
              defaultValue="m"
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </Field>
          </Col>
          <Col cols={2}>
            <Button amStyle="primary">查询</Button>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default Degree;
