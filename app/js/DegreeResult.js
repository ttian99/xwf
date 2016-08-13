import React from 'react';
import { Container, Field, Grid, Col, Button, NavBar } from 'amazeui-touch';
import Logo from './Logo';
import DegreeSearchPage from './DegreeSearchPage';
import Search from './Search';

class DegreeResult extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      isDetail: false,
      // haveData: false,  // 是否有详细的数据
      // schoolList: [],   // 搜索的list
      searchValue: "",   // 搜索的关键字
      ridgepoleList: [], // 栋数数组
      roomList: [],      // 房间号数组
      title: "",
    };
  }

  static defaultProps = {
    mode: 'degree'
  }

  handleBack = () => {
    console.log("-------- handleBack -----");
    this.props.onChangeShowResult(false);
  }

  render() {
    return(
      <Container>
        <NavBar title={this.props.title} leftNav={[{className: "leftnav-back-btn", onClick: this.handleBack.bind(this), title: '返回', icon: 'left-nav'}]}/>
        <Grid className="degree-result-grid" collapse={true} bordered={false}>
          <Col cols={2}>小学</Col>
          <Col cols={1}>锁定年限</Col>
          <Col cols={2}>初中</Col>
          <Col cols={1}>锁定年限</Col>
        </Grid>
        <Grid className="degree-result-grid" collapse={true} bordered={false}>
          <Col cols={2}>望海小学</Col>
          <Col cols={1}>2015年</Col>
          <Col cols={2}>蛇口中学</Col>
          <Col cols={1}>未锁定</Col>
        </Grid>
      </Container>
    );
  }
}

export default DegreeResult;
