import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';
import MinList from './MinList';
import Req from './utils/Req';

class DegreeKey extends React.Component {
  constructor(props, state) {
    super(props, state);
    console.log(props);
    this.state={
      keyList: this.props.keyList,
    };
  }

  // 默认props
  static defaultProps = {}

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    if (nextProps.keyList !== undefined) {
      this.setState({
        keyList: nextProps.keyList
      });
    }
  }

  selectKey(keyObj) {
    console.log('======== selectKey ======= ' + JSON.stringify(keyObj));
    var keyWords = keyObj.keyWords;
    var idx = keyObj.idx;
    this.setState({ isSearching: true });
    Req.selectKey({ 
      "keyWords": keyWords, 
      "idx": idx 
    }, (err, json) => {
      this.setState({ isSearching: false });
      console.log('------- back selectKey ------- ');
      console.log(json);
      var data = {}
      data.idx = idx;
      data.searchValue = keyObj.keyWords;
      data.list = json.matchArr;
      console.log(this.props);
      
      this.props.onChangeKeyList([]);
      this.props.onChangeRpList(data);
      this.props.onChangePage(false);
      // this.props.onChangeRoomList();
    });
    // this.props.onChangeKeyList(data.list);
  }

  render() {
    const listResult = (
        this.state.keyList.map((item, i) => {
          return (
            <List.Item key={i} onClick={this.selectKey.bind(this, item) }>{item.keyWords}</List.Item>
          );
        })
    )
    const noResult = (
      <List.Item>
        <span>无匹配结果，请输入完整小区名称；</span>
      </List.Item>
    );

    const ret = this.state.keyList.length < 1 ? noResult : listResult ;
    return (
      <List>{ret}</List>
    );
  }
}

export default DegreeKey;
