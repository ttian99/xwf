import React from 'react';
import { Container, Field, Grid, Col, Button, NavBar } from 'amazeui-touch';
import Logo from './Logo';
import DegreeSearchPage from './DegreeSearchPage';
import Search from './Search';
import _ from 'lodash';

class DegreeResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetail: false,
      searchValue: "",   // 搜索的关键字
      title: "",      // 搜索的全部关键字
    };
  }

  static defaultProps = {
    mode: 'degree',
    lockList: [
      // {name: '望海小学', year: '2015年'},
      // {name: '蛇口中学', year: '未锁定'},
    ]
  }

  handleBack = () => {
    console.log("-------- handleBack -----");
    this.props.onChangeShowResult(false);
  }

  render() {

    const list = _.map(this.props.lockList, (item, id) => {
      return (
        <Grid  className="degree-result-grid" key={id} collapse={false} bordered={false}>
          <Col cols={4}><span>{item.name}</span></Col>
          <Col cols={2}><span>{item.year}</span></Col>
        </Grid>
      )
    })

    return(
      <Container className="degree-result-cnt">
        <NavBar className="degree-result-navbar" title={this.props.title} leftNav={[{className: "leftnav-back-btn", onClick: this.handleBack.bind(this), title: '返回', icon: 'left-nav'}]}/>
        
        <Grid className="degree-result-grid-head" collapse={false} bordered={false}>
            <Col cols={4}><span>对口学校</span></Col>
            <Col cols={2}><span>锁定年限</span></Col>
        </Grid>
        {list}
      </Container>
    );
  }
}

export default DegreeResult;
