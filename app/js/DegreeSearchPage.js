import React from 'react';
import { render } from 'react-dom';
import { Container, Field, Grid, Col, Group, Button, Icon, ModalExample, List} from 'amazeui-touch';
import Logo from './Logo';
import Fetch from './utils/Fetch';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import DegreeResult from './DegreeResult';

class DegreeSearchPage extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      title: "", // 结果页面的标题
      curRidgepole: "", // 当前选择的栋数
      curRoom: "",  // 当前选择的房间号
    };
  }
  
  static defaultProps = {
    mode: 'degree',
    searchValue: "",
    ridgepoleList: [], // 栋数
    roomList: [],      // 房间号
    showResult: false,
  }

  handleClick() {
    console.log('----------- click ----------');
    this.props.onChangePage(true);
  }

  handleSearch() {
    console.log('---- search -------');
    this.getTitle();
  }

  changeShowResult(newState) {
    this.setState({ showResult: newState });
  }

  getTitle() {
    const searchValue = this.props.searchValue;
    const curRidgepole = this.refs.rpSel.getValue();
    const curRoom = this.refs.roomSel.getValue();
    const title = searchValue + curRidgepole + curRoom;
    if (!searchValue) {
      return;
    }
    if (curRoom === "default" || curRidgepole === "default") {
      return;
    }
    console.log(!searchValue, !curRidgepole, !curRoom);
    this.setState({ 
      title: title,
      curRidgepole: curRidgepole,
      curRoom: curRoom, 
    });
    this.changeShowResult(true);
  }

  render() {
    const label = this.props.searchValue || "查学位锁定情况";
    const mainPage = (
      <Container className="degree-search-page-cnt">
       <Grid className="degree-search-page-grid" wrap="wrap">
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            <Field
              // label="Your Name"
              // containerClassName="school-search"
              ref="input"
              className="degree-search-page"
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
              <option value="default" style={{display: "none"}}>{this.state.curRidgepole || '栋数'}</option>
             {
                this.props.roomList.map((item, i) => {
                  return (<option key={i} value={item}>{item}</option>)
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
              <option value="default" style={{display: "none"}}>{this.state.curRoom || '房号'}</option>
              {
                this.props.ridgepoleList.map((item, i) => {
                  return (<option key={i} value={item}>{item}</option>)
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
    const resultPage = (
      <Container>
        <DegreeResult {...this.props} title={this.state.title} onChangeShowResult={this.changeShowResult.bind(this)}/>
      </Container>
    );

    if (this.state.showResult) {
      return (resultPage);
    } else {
      return (mainPage)
    }
  }
}

export default DegreeSearchPage;
