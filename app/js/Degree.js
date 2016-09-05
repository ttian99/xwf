import React from 'react';
import { Container, Field, Grid, Col, Button } from 'amazeui-touch';
import Logo from './Logo';
import DegreeSearchPage from './DegreeSearchPage';
import Search from './Search';
import DegreeKey from './DegreeKey';

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
      keyList: [], // 匹配的关键词数组
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

    this.setState({
      searchValue: data.searchValue,
      ridgepoleList: data.list,
    });
    // this.setState({ridgepoleList: data.ridgepoleList});
    // this.setState({roomList: data.roomList});
  }

  // 更新rplist数据
  changeRpList(data) {
    this.setState({
      searchValue: data.searchValue,
      ridgepoleList: data.list,
      roomList: [],
    });
  }
  // 更新roomlist数据 
  changeRoomList(data) {
    this.setState({
      roomList: data.list,
    });
  }
  
  // 重置page
  resetPage() {
    this.setState({
      searchValue: '',
      ridgepoleList: [],
      roomList: [],
    });
  }

  changeKeyList(list) {
    this.setState({
      keyList:  list
    });
  }

  // changeState(name, value) {
  //   var obj = {}
  //   obj[name] = value;
  //   this.setState(obj);
  //   console.log('== this.state ==');
  //   console.log(this.state);
  // }

  render() {
    const keyList = (this.state.keyList.length>0) 
                    ? <DegreeKey {...this.props} 
                        onChangeRpList={this.changeRpList.bind(this)} 
                        keyList={this.state.keyList}
                        onChangeKeyList={this.changeKeyList.bind(this)}
                        onChangePage={this.changePageState.bind(this) }
                        />
                    : null ;
    const mainPage = (
      <DegreeSearchPage 
        {...this.props}
        onChangePage={this.changePageState.bind(this) }
        searchValue={this.state.searchValue}
        ridgepoleList={this.state.ridgepoleList}
        roomList={this.state.roomList}
        onChangeRpList={this.changeRpList.bind(this)}
        onChangeRoomList={this.changeRoomList.bind(this)}
        onChangeKeyList={this.changeKeyList.bind(this)}
        onResetPage={this.resetPage.bind(this)}
      />
    ); 
    const searchPage = (
      <Container>
        <Search 
          {...this.props} 
          onChangePage={this.changePageState.bind(this)} 
          onChangeData={this.changeData.bind(this)}
          onChangeRpList={this.changeRpList.bind(this)}
          onChangeRoomList={this.changeRoomList.bind(this)}
          onChangeKeyList={this.changeKeyList.bind(this)}
          onResetPage={this.resetPage.bind(this)}
        />
        {keyList}
      </Container>
    );
    const ret = this.state.isSearch ? searchPage  : mainPage; 
    return ret;
  }
}

export default Degree;
