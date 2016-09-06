import React from 'react';
import { render } from 'react-dom';
import { Container, Field, Grid, Col, Group, Button, Icon, ModalExample, List} from 'amazeui-touch';
import Logo from './Logo';
import Fetch from './utils/Fetch';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import DegreeResult from './DegreeResult';
import Waiting from './utils/Waiting';
import Req from './utils/Req';

class DegreeSearchPage extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      isSearching: false, // 是否正在网络搜索
      title: "", // 结果页面的标题
      curRidgepole: "", // 当前选择的栋数
      curRoom: "",  // 当前选择的房间号
      haveValue: false,
      disableRoomSel: true,
      disableRpSel: false,
      lockList: [],   // 查询到的锁定列表
    };
  }
  
  static defaultProps = {
    mode: 'degree',
    searchValue: "",
    ridgepoleList: [], // 栋数
    roomList: [],      // 房间号
    showResult: false,
  }

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    console.log('---------------- componentWillReceiveProps -------');
    console.log(nextProps);
    const disableRoomSel = (nextProps.roomList && nextProps.roomList.length > 0) ? false : true;
    this.setState({ disableRoomSel: disableRoomSel });
  }

  handleClick() {
    console.log('----------- click ----------');
    this.props.onChangePage(true);
  }

  // 搜索按钮 
  handleSearch() {
    console.log('---- search -------');
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
    // this.setState({ title: title });
    // this.changeShowResult(true);
    // this.getTitle();
    this.reqSearchLock(title);
  }

  handleChange() {}

  // 网络请求查询锁定
  reqSearchLock(words) {
    console.log('------- reqSearchLock -----------');
    this.setState({ isSearching: true });
    Req.searchLock({ words: words }, (err, json) => {
      this.setState({ isSearching: false });
      console.log('------- back reqSearchLock ------- ');
      console.log(json);
      // var data = {}
      // data.list = json.matchArr;
      // this.props.onChangeRoomList(data);
      this.setState({ 
        title: words,
        lockList: json.matchArr,
      });
      this.changeShowResult(true);
    });
  }
  
  // 网络请求选择栋数 
  reqSelRp(words) {
    console.log('------ reqSelRp -------');
    this.setState({isSearching: true});
    Req.selRidgepole({words: words}, (err, json) => {
      this.setState({isSearching: false});
      console.log('------- back reqSelRp ------- ');
      console.log(json);
      var data = {}
      data.list = json.matchArr;
      this.props.onChangeRoomList(data);
    });
  }

  // 选择栋数
  handleRidgepoleSel() {
    console.log('------- select ridgepole -------');
    const rpSelValue = this.refs.rpSel.getValue();
    const newSearchValue = this.props.searchValue + rpSelValue;
    console.log('newSearchValue = ' + newSearchValue);
    this.reqSelRp(newSearchValue);     
  }

  // 选择房号 
  handleRoomSel() {
    console.log('------- select room -------');
  }

  // 刷新搜索词
  changeValue(value) {
    this.refs.input.value = this.props.searchValue;
  }
  
  // 
  changeShowResult(newState) {
    this.props.onResetPage();
    this.setState({ 
      showResult: newState
    });
  }

  // 
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
      // curRidgepole: curRidgepole,
      // curRoom: curRoom, 
    });
    this.changeShowResult(true);
  }

  render() {
    console.log('------- this.props =====  ' + this.props.searchValue);
    const label = this.props.searchValue || "查学位锁定情况";

    const search = (
      <Field
        // label="Your Name"
        // containerClassName="school-search"
        ref="input"
        className="degree-search-page"
        placeholder={label}
        value={this.props.searchValue}
        onChange={this.handleChange.bind(this) }
        onClick={this.handleClick.bind(this) }
        />
    );

    const rpSel = (
      <Field
        className="degree-search-page-select"
        type="select"
        ref="rpSel"
        defaultValue="default"
        onSelect={this.handleRidgepoleSel.bind(this)}
        onChange={this.handleRidgepoleSel.bind(this)}
        disabled={this.state.disableRpSel}
        >
        <option value="default" style={{ display: "none" }}>{'栋数'}</option>
        {
          this.props.ridgepoleList.map((item, i) => {
            return (<option key={i} value={item}>{item}</option>)
          })
        }
      </Field>
    );

    const roomSel = (
      <Field
        className="degree-search-page-select"
        type="select"
        placeholder="测试房号"
        ref="roomSel"
        defaultValue="default"
        onSelect={console.log('------------select-room--------') }
        onChange={this.handleRoomSel.bind(this)}
        disabled={this.state.disableRoomSel}
        >
        <option value="default" style={{ display: "none" }}>{'房号'}</option>
        {
          this.props.roomList.map((item, i) => {
            return (<option key={i} value={item}>{item}</option>)
          })
        }
      </Field>
    );

    const btn = (
      <img src="i/searchBtn.png"
        // style={{height: 44, width: 90}}
        className="degree-search-page-searchBtn"
        onClick={this.handleSearch.bind(this) }/>
    );

    const mainPage = (
      <Container className="degree-search-page-cnt">
       <Grid className="degree-search-page-grid" wrap="wrap" collapse={true}>
          <Col cols={6}>
            <Logo />
          </Col>
          <Col cols={6}>
            {search}
          </Col>
          <Col cols={2}>
            {rpSel}
          </Col>
          <Col cols={2}>
            {roomSel}
          </Col>
          <Col cols={2}>
            {btn}
          </Col>
        </Grid>
        <Waiting isOpen={this.state.isSearching}/>
      </Container>
    );
    const resultPage = (
      <Container>
        <DegreeResult {...this.props} lockList={this.state.lockList} title={this.state.title} onChangeShowResult={this.changeShowResult.bind(this)} />
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
