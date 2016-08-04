import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';

class School extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    console.log(this.context);
    this.state={
      isDetail: false,
    };
  }

  // 默认props
  static defaultProps = {
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  handleClick = () => {
    console.log('----------- click the iniput ---------');
    console.log('this.props.isDetail = ' +this.props.isDetail);
    console.log('this.state.isDetail = ' +this.state.isDetail);
    this.setState({isDetail: true});
    // this.props.isDetail = true;
    // this.props.history.push('/search');

    // browserHistory.push('/degree');
    // this.props.history.pushState(null, '/degree');
    // this.context.router.push('/degree');
    // this.context.router.push('/degree');
    // console.log(JSON.stringify(this.props));
    // import { browserHistory } from 'react-router';
    
    // this.props.router.push('/degree');
    // this.context.router.push('/degree');
    // this.router.push('/degree');
    console.log('this.props.isDetail = ' +this.props.isDetail);
    console.log('this.state.isDetail = ' +this.state.isDetail);
  }

  render() {
    let ret = null;
    const mainSearch = (
      <Container className="main-search-cnt">
        <Grid className="main-grid" wrap="wrap">
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            <Field
              // label="Your Name"
              // containerClassName="school-search"
              className="main-search"
              placeholder="请输入学校关键字"
              onClick={this.handleClick}
            />
          </Col>
          <Col cols={6}>
            <p className="search-label">例：输入“<span>深圳中学</span>”找到对口学区楼盘</p>
          </Col>
        </Grid>
      </Container>
    );

    const detailSearch = (
      <Search />
      // <Container className="main-search-cnt">
      //   <Field
      //     // label="Your Name"
      //     // containerClassName="school-search"
      //     className="detail-search"
      //     placeholder="请输入多舒服舒服服全名"
      //   />
      // </Container>
    );

    ret = mainSearch;
    if (this.state.isDetail) {
      ret = detailSearch;
    }
    return ret;
  }
}

export default School;
