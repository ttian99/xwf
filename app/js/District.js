import React from 'react';
import { Container, Field, Grid, Col } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import Search1 from './Search1';

class District extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    this.state={
      isDetail: false,
    };
  }

  // 默认props
  static defaultProps = {
    mode: 'district'
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  // dom状态的改变
  changeState = (newState) => {
    console.log('=======')
    console.log('this.state.isDetail = ' +this.state.isDetail);
    this.setState({isDetail: newState});
    console.log('this.state.isDetail = ' +this.state.isDetail);
  }

  render() {
    let ret = null;
    const mainSearch = (
      <Search1 {...this.props} onParentCb={this.changeState} />
    );
    const detailSearch = (
      <Search {...this.props} onParentCb={this.changeState} />
    );
    
    if (this.state.isDetail) {
      ret = detailSearch;
    } else {
      ret = mainSearch;
    }
    return ret;
  }
}

export default District;
