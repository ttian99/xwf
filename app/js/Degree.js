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
      isSearch: false,
      // haveData: false,  // 是否有详细的数据
      // schoolList: [],   // 搜索的list
      searchValue: "",   // 搜索的关键字
      ridgepoleList: [], // 栋数
      roomList: [],      // 房间号
      degreeResult: {},
    };
  }

  static defaultProps = {
    mode: 'degree'
  }

  // dom状态的改变
  changePageState = (newState) => {
    this.setState({isSearch: newState});
  }

  changeData(data) {
    console.log('------- setInputValue ----');

    this.setState({searchValue: data.searchValue});
    this.setState({ridgepoleList: data.ridgepoleList});
    this.setState({roomList: data.roomList});
  }

  render() {
    const mainPage = (
      <DegreeSearchPage 
        {...this.props}
        onChangePage={this.changePageState.bind(this) }
        searchValue={this.state.searchValue}
        ridgepoleList={this.state.ridgepoleList}
        roomList={this.state.roomList}
      />
    ); 
    const searchPage = (<Search {...this.props} onChangePage={this.changePageState.bind(this)} onChangeData={this.changeData.bind(this)}/>);
    const ret = this.state.isSearch ? searchPage  : mainPage; 
    return ret;
  }
}

export default Degree;
