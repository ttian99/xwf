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

    this.state={};
  }

  // 默认props
  static defaultProps = {
    mode: "school"
  };

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  // 取消按钮回调
  handleCancleBtn = () => {
    console.log('-------- cancle ----------');
    this.props.onParentCb(false);
  }

  // 清除按钮回调
  handleClearBtn = () => {
    console.log('------------- clear -----------');
  }
  
  //
  handleChange = () => {
    console.log('--------- handleChange --------------');
  }
  // 文字输入监听
  handleInput = () => {
    console.log('----------- handleInput ----------');
  }
  // 提交回调
  handleSubmit = () => {
    console.log('----------- handleSubmit ----------');
    alert('------ submit --------');
    const url = 'http://localhost:8010/?cmd=search-info&words=%E5%93%88%E5%93%88';
    // this.renderLoader();
    Fetch.get(url);
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
          id="detail-search"
          className="detail-search"
          placeholder="请输入"
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
