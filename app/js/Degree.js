import React from 'react';
import { Container, Field, Grid, Col, Button } from 'amazeui-touch';
import Logo from './Logo';
import DegreeSearchPage from './DegreeSearchPage';
import Search from './Search';

class Degree extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      isDetail: false,
      // haveData: false,  // 是否有详细的数据
      // schoolList: [],   // 搜索的list
      searchValue: "",   // 搜索的关键字
      ridgepoleList: [], // 栋数
      roomList: [],      // 房间号
      // searchDate: {},
    };
  }

  static defaultProps = {
    mode: 'degree'
  }

  // dom状态的改变
  changePageState = (newState) => {
    this.setState({isDetail: newState});
  }

  changeData(data) {
    console.log('------- setInputValue ----');

    this.setState({searchValue: data.searchValue});
    this.setState({});
  }

  render() {
    const mainPage = (<DegreeSearchPage {...this.props} onChangePage={this.changePageState.bind(this)} searchValue={this.state.searchValue}/>); 
    const detailPage = (<Search {...this.props} onChangePage={this.changePageState.bind(this)} onChangeData={this.changeData.bind(this)}/>);
    const ret = this.state.isDetail ? detailPage  : mainPage; 
    return ret;
  }
}

export default Degree;
