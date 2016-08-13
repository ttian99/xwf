import React from 'react';
import { Container, Field, Grid, Col, Group, Button, Icon } from 'amazeui-touch';
import Logo from './Logo';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }

  // 默认props
  static defaultProps = {}

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  handleClick = () => {
    console.log('----------- click the iniput ---------');
    this.props.onChangePage(true);
  }

  render() {
    let defaultTxt = {
      placeholder: "",
      labelBefore: "例：输入“",
      labelMid: "",
      labelAfter: "",
    };

    if (this.props.mode === "school") {
      defaultTxt.placeholder = "请输入学校关键字"
      defaultTxt.labelMid = "深圳中学"
      defaultTxt.labelAfter =  "”找到对口学区楼盘"
    } else if (this.props.mode === "district") {
      defaultTxt.placeholder = "请输入楼盘全名"
      defaultTxt.labelMid = "东海花园"
      defaultTxt.labelAfter =  "找到对口小学、初中"
    }
    const ret = (
       <Container className="search-page-cnt">
        <Grid className="search-page-grid" wrap="wrap">
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            <Field
              // label="Your Name"
              // containerClassName="school-search"
              className="search-page"
              placeholder={defaultTxt.placeholder}
              onClick={this.handleClick}
            />
          </Col>
          <Col cols={6}>
            <p className="search-page-label">{defaultTxt.labelBefore}<span>{defaultTxt.labelMid}</span>{defaultTxt.labelAfter}</p>
          </Col>
        </Grid>
      </Container>
    );

    return ret;
  }
}

export default SearchPage;
