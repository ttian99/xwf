import React from 'react';
import { render } from 'react-dom';
import { Container, Field, Grid, Col, Group, Button, Icon, ModalExample, List} from 'amazeui-touch';
import Logo from './Logo';
import Fetch from './utils/Fetch';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

class DegreeSearchPage extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      haveData: false,  // 是否有详细的数据
      dataList: [],   // 搜索的list
      // searchValue: "",   // 搜索的关键字
      ridgepoleList: [], // 栋数
      roomList: [],      // 房间号
    };
    // this.searchValue = this.props.searchValue;
  }
  
  static defaultProps = {
    mode: 'degree',
    searchValue: "",
  }

  handleClick() {
    console.log('----------- click ----------');
    this.props.onChangePage(true);
  }

  render() {
    const label = this.props.searchValue || "查学位锁定情况";
    return (
      <Container className="main-search-cnt">
        <Grid className="main-grid" wrap="wrap">
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            <Field
              // label="Your Name"
              // containerClassName="school-search"
              ref="input"
              className="main-search"
              placeholder={label}
              onClick={this.handleClick.bind(this)}
            />
          </Col>
          <Col cols={2}>
            <Field
              type="select"
              // label="Select"
              ref="rpSel"
              defaultValue={[]}
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </Field>
          </Col>
          <Col cols={2}>
            <Field
              type="select"
              // label="Select"
              ref="roomSel"
              defaultValue={[]}
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </Field>
          </Col>
          <Col cols={2}>
            <img src="i/searchBtn.png" style={{height: 44, width: 107.98}}/>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default DegreeSearchPage;
