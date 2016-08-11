import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import Search1 from './Search1';

class School extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    this.state={
      isDetail: false,
    };
  }

  // 默认props
  static defaultProps = {
    mode: 'school'
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  // dom状态的改变
  changePageState = (newState) => {
    this.setState({isDetail: newState});
  }

  render() {
    let ret = null;
    const mainSearch = (
      <Search1 {...this.props} onChangePage={this.changePageState} />
    );
    const detailSearch = (
      <Search {...this.props} onChangePage={this.changePageState} />
    );

    ret = mainSearch;
    if (this.state.isDetail) {
      ret = detailSearch;
    } else {
      ret = mainSearch;
    }
    return ret;
  }
}

export default School;
