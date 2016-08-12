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
      // ridgepoleList: [], // 栋数
      // roomList: [],      // 房间号
    };
    // this.searchValue = this.props.searchValue;
  }
  
  static defaultProps = {
    mode: 'degree',
    searchValue: "",
    ridgepoleList: [], // 栋数
    roomList: [],      // 房间号
  }

  handleClick() {
    console.log('----------- click ----------');
    this.props.onChangePage(true);
  }

  handleSearch() {
    console.log('---- search -------');
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
              defaultValue="default"
            >
              <option value="default" style={{display: "none"}}>栋数</option>
             {
                this.props.roomList.map((item, i) => {
                  return (<option value=""></option>)
                })
              } 
            </Field>
          </Col>
          <Col cols={2}>
            <Field
              type="select"
              // label="Select"
              ref="roomSel"
              defaultValue="default"
            >
              <option value="default" style={{display: "none"}}>房号</option>
              {
                this.props.ridgepoleList.map((item, i) => {
                  return (<option value=""></option>)
                })
              } 
            </Field>
          </Col>
          <Col cols={2}>
            <img src="i/searchBtn.png" style={{height: 44, width: 107.98}} onClick={this.handleSearch.bind(this)}/>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default DegreeSearchPage;
