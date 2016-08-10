import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col, Button, Icon } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import Search1 from './Search1';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    console.log(this.props);
    this.state={
      value: "",        // 输入框的值
      searchValue: "",  // 搜索的关键字
    };
    console.log(this.state.schoolList);
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
    console.log('-------- cancle ----------');
    this.props.onChangePage(false);
  }

  // 清除按钮回调
  handleClearBtn = () => {
    console.log('------------- clear -----------');
    this.setState({ value: "" });
  }
  
  //
  handleChange = (event) => {
    console.log('--------- handleChange --------------');
    // this.setState({value: event.target.value});
    // console.log(this.state.value)
    this.setState({value: event.target.value});
  }
  // 文字输入监听
  handleInput = (event) => {
    console.log('----------- handleInput ----------');
    const input = this.refs.input;
    const value = input.getValue();
    console.log('-- value = ' + value);
  }
  // 提交回调
  handleSubmit = () => {
    console.log('----------- handleSubmit ----------');
    
    const searchValue = this.refs.input.getValue();
    this.mockData(searchValue);

    // const url = 'http://localhost:8010/?cmd=search-info&words=%E5%93%88%E5%93%88';
    // this.renderLoader();
    // Fetch.get(url);

  }
  // 失去焦点回调
  handleBlur = () => {
    console.log('--------- handleBlur ---------');
    // this.handleSubmit();
  }
  // 键盘按键抬起回调
  handleKeyUp = (evt) => {
    console.log('------ Keyup --------');
    evt.keyCode === 13 && this.handleSubmit()
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
    // 搜索框
    const input = (
      <Field
          ref="input"
          id="detail-search"
          className="detail-search"
          placeholder={defaultPlaceholder}
          value={this.state.value}
          // defaultValue={this.state.searchValue}
          labelAfter={clearBtn}
          btnAfter={cancleBtn}
          autoFocus={true}             // 自动设置为焦点
          onBlur={this.handleBlur}        // 失去焦点
          onInput={this.handleInput}   // 输入文字
          onChange={this.handleChange} // value变化监听
          onSubmit={this.handleSubmit} // 提交表单
          onKeyUp={this.handleKeyUp}   // 监听键盘的键抬起
          />
    );

    return input;
  }
}

export default SearchBar;
