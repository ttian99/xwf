import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';
import MinList from './MinList';

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
