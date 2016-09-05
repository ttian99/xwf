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

  selectKey(key) {
    console.log('======== selectKey ======= ' + key);
    // this.setState({ isSearching: true });
    Req.selectKey({ words: key }, (err, json) => {
      // this.setState({ isSearching: false });
      console.log('------- back selectKey ------- ');
      console.log(json);
      var data = {}
      data.searchValue = key;
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
    return (
      <List>
        {
          this.state.keyList.map((item, i) => {
            return (
              <List.Item key={i} onClick={this.selectKey.bind(this, item)}>{item}</List.Item>
            );
          })
        }
      </List>
    );
  }
}

export default DegreeKey;
