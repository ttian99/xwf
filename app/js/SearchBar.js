import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col, Button, Icon } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import Search1 from './Search1';
import SearchTips from './SearchTips';
import loc from './utils/loc.js'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    console.log(this.props);
    this.state={
      value: "",        // 输入框的值
      searchValue: "",  // 搜索的关键字
      showTips: true,
      tipsArr: []
    };
    console.log(this.state.schoolList);
  }

  // 将要挂载
  componentWillMount() {
    const tipsArr = loc.get('tipsArr') || [];
    this.setState({ tipsArr: tipsArr });
  }

  // 默认props
  static defaultProps = {
    mode: "school",
  };

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  // 取消按钮回调
  handleCancleBtn = () => {
    this.props.onChangePage(false);
  }

  // 清除按钮回调
  handleClearBtn = () => {
    // this.setState({ value: "" });
    this.setInputValue("", true);
  }
  
  // 
  handleChange = (event) => {
    // this.setState({value: event.target.value});
  }

  // 文字输入监听
  handleInput = (event) => {
    const input = this.refs.input;
    const value = input.getValue();
    this.setInputValue(value, false);
    this.changgeTipsPage(false);
  }
  // 提交回调
  handleSubmit = () => {
    console.log('----------- handleSubmit ----------');
    this.needGetFocus(false);
    const searchValue = this.refs.input.getValue();
    this.mockData(searchValue);
    this.setTipsArr(searchValue);
    this.changgeTipsPage(false);
    
    // const url = 'http://localhost:8010/?cmd=search-info&words=%E5%93%88%E5%93%88';
    // this.renderLoader();
    // Fetch.get(url);
  }

  // 是否需要获取焦点
  needGetFocus = (isFocus) => {
    console.log('---- getfocus ---' + isFocus);
    if (isFocus) {
      document.getElementById('detail-search').focus();
    } else {
      document.getElementById('detail-search').blur();
    }
  }

  // 处理获得焦点
  handleFocus = () => {
    console.log('-------- handleFocus ------');
    this.changgeTipsPage(true);
  }
  // 处理失去焦点
  handleBlur = () => {}
  // 键盘按键抬起回调
  handleKeyUp = (evt) => {
    evt.keyCode === 13 && this.handleSubmit()
  }

  // 设置输入框的值
  setInputValue(value, isResetFocus) {
    this.setState({value: value});
    isResetFocus && this.needGetFocus(true);
  }

  // 保存搜索记录
  setTipsArr(str) {     
    const tipsArr = this.state.tipsArr;
    tipsArr.length >= 4 && tipsArr.pop();
    tipsArr.unshift(str);
    console.log('----- tipsArr ----');
    console.log(tipsArr);
    loc.set("tipsArr", tipsArr);
  }

  // 是否展示搜索历史 
  changgeTipsPage = (showTips) => {
    this.setState({showTips: showTips});
  }

  // 模拟数据 
  mockData = (searchValue) => {
    const list = [
      { name: "招商海月一期", price: 67500, year: "2005" },
      { name: "花果山小区", price: 45000, year: "2005" },
      { name: "桃园新居", price: 5100, year: "2005" },
      { name: "湾厦新村", price: 122, year: "2005" },
      { name: "招商海月一期", price: 67500900, year: "2005" },
      { name: "招商海月一期", price: 67500, year: "2005" },
      { name: "招商海月一期", price: 674500, year: "未知" },
      { name: "招商海月一期", price: 67500, year: "2005" },
      { name: "招商海月一期", price: 67500, year: "2005" },
      { name: "招商海月一期", price: 67500, year: "2005" },
      { name: "招商海月一期1sdfdsfsdsdfsdf0", price: 67500, year: "2005" },
      { name: "招商海月一期9", price: 67500, year: "2005" },
      { name: "招商海月一期8水电费第三方", price: 67500, year: "2005" },
      { name: "招商海月一期7", price: 67500, year: "2005" },
      { name: "招商海月一期6", price: 67500, year: "2005" },
      { name: "招商海月一期5", price: 67500, year: "2005" },
      { name: "招商海月一期4", price: 67500, year: "2005" },
      { name: "招商海月一期3", price: 67500, year: "2005" },
      { name: "招商海月一期2", price: 67500, year: "2005" },
      { name: "招商海月一期last", price: 67500, year: "2005" },      
    ];

    // this.setState({ searchValue: searchValue });
    
    const data = {
      haveData: true,
      list: list,
      searchValue: searchValue
    }

    this.props.onChangeResult(data);
  }

  render() {
    let defaultPlaceholder = "";
    if (this.props.mode === "school") {
      defaultPlaceholder = "请输入学校关键字"
    } else if (this.props.mode === "district") {
      defaultPlaceholder = "请输入楼盘全名"
    }
    // 取消按钮
    const cancleBtn = (
      <Button className="cancle-btn" amStyle="">
        <p className="cancle-btn-label" onClick={this.handleCancleBtn}>取消</p>
      </Button>
    );
    // 清除内容按钮
    const clearBtn = (
      <Icon name="close" className="clear-btn" onClick={this.handleClearBtn} />
    );

    const tips = (this.state.showTips && this.state.tipsArr.length !== 0)
                ? <SearchTips {...this.props} setInputValue={this.setInputValue.bind(this)} tipsArr={this.state.tipsArr} />
                : null;

    // 搜索框
    const input = (
      <Container>
      <Field
          ref="input"
          id="detail-search"
          className="detail-search"
          containerClassName="search-bar"
          placeholder={defaultPlaceholder}
          value={this.state.value}
          // defaultValue={this.state.searchValue}
          labelAfter={clearBtn}
          btnAfter={cancleBtn}
          autoFocus={true}             // 自动设置为焦点
          onFocus={this.handleFocus}    // 获得焦点
          onBlur={this.handleBlur}        // 失去焦点
          onInput={this.handleInput}   // 输入文字
          onChange={this.handleChange} // value变化监听
          onSubmit={this.handleSubmit} // 提交表单
          onKeyUp={this.handleKeyUp}   // 监听键盘的键抬起
          />

          {tips}

      </Container>
    );

    return input;
  }
}

export default SearchBar;
