import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';

class ResultList extends React.Component {
  constructor(props, state) {
    super(props, state);
    // Operations usually carried out in componentWillMount go here
    console.log(this.props);
    this.state={
      schoolList: this.props.schoolList,
    };
  }

  // 默认props
  static defaultProps = {
    // mode: 'school',
  }
  
  render() {
    return (
        <List className="detail-list">
          {
            /* 遍历数据 */
            this.state.schoolList.map((item, i) => {
              let className = "detail-list-item";
              if (i === 0) {
                className = "detail-list-item" + "-first"
              }
              return (


                <Grid key={i} className={className} collapse={true} bordered={false}>
                  <Col className="detail-list-item-left" cols={3}><span>{item.name + ''}</span></Col>
                  <Col className="detail-list-item-middle"cols={2}><span>{"¥" + item.price}</span></Col>
                  <Col className="detail-list-item-right" cols={1}><span>{item.year + ''}</span></Col>
                </Grid>
              );
            })
          }
        </List>
    );
  }
}

export default ResultList;
