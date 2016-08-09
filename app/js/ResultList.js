import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    this.state={
      isDetail: false,
    };
  }

  // 默认props
  static defaultProps = {
    mode: 'school'
  }
  
  render() {
    return (
      // <Container className="detail-list-cnt" direction="column" scrollable={false}>
        <List className="detail-list">
          {
            /* 遍历数据 */
            this.props.schoolList.map((item, i) => {
              let className = "detail-list-item";
              if (i === 0) {
                className = "detail-list-item" + "-head"
              } else if (i === this.props.schoolList.length - 1) {
                className = "detail-list-item" + "-end"
              }
              return (
                <Grid key={i} className={className} collapse={true} bordered={false}>
                  <Col className="detail-name" cols={3}><span>{item.name + ''}</span></Col>
                  <Col cols={1.5}><span>{"¥" + item.price}</span></Col>
                  <Col cols={1.5}><span>{item.year + ''}</span></Col>
                </Grid>
                // <hr/>
              );
            })
          }
        </List>
      // </Container>
    );
  }
}

export default ResultList;
