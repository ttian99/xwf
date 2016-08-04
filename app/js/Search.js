import React from 'react';
import { Container, Field, Grid, Col, Group, Button, Icon } from 'amazeui-touch';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    this.state = {
      isDetail: true,
    };
  }

  // 默认props
  static defaultProps = {
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  handleCancleBtn = () => {
    console.log('-------- cancle ----------');
  }

  render() {
    // 取消按钮
    const cancleBtn = (
      <Button className="cancle-btn" amStyle="">
        <p className="cancle-btn-label" onClick={this.handleCancleBtn}>取消</p>
      </Button>
    );
    // 清除内容按钮
    const clearBtn = (
      <Icon name="close" className="clear-btn" />
    );

    const input = (
      <Field
          className="detail-search"
          placeholder="请输入学校关键字"
          labelAfter={clearBtn}
          btnAfter={cancleBtn}
          />
    );

    return (
      <Container className="detail-search-cnt">
        <Grid
          className="search-form"
          collapse={true}
          bordered={true}
        >
          <Col cols={4}>cols: 4</Col>
          <Col cols={1}>cols: 1</Col>
          <Col cols={1}>cols: 1</Col>
        </Grid>        
      </Container>
    );
  }
}

export default Search;
