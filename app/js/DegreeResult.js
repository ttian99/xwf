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
      <Container className="degree-result-cnt">
        <NavBar className="degree-result-navbar" title={this.props.title} leftNav={[{className: "leftnav-back-btn", onClick: this.handleBack.bind(this), title: '返回', icon: 'left-nav'}]}/>
        
        <Grid className="degree-result-grid-head" collapse={false} bordered={false}>
            <Col cols={4}><span>对口学校</span></Col>
            <Col cols={2}><span>锁定年限</span></Col>
        </Grid>

        <Grid className="degree-result-grid" collapse={false} bordered={false}>
          <Col cols={4}><span>望海小学sfsdfsfsfsd</span></Col>
          <Col cols={2}><span>2015年</span></Col>
        </Grid>
        <Grid  className="degree-result-grid" collapse={false} bordered={false}>
          <Col cols={4}><span>蛇口中学sdfs</span></Col>
          <Col cols={2}><span>未锁定</span></Col>
        </Grid>
      </Container>
    );
  }
}

export default DegreeResult;
