import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col, Button, Icon } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import SearchTips from './SearchTips';
import loc from './utils/loc';
import mock from './utils/mock';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        console.log(this.props);
        this.state = {
            value: "", // 输入框的值
            searchValue: "", // 搜索的关键字
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
            const needShowTips = !value;
            this.changgeTipsPage(needShowTips);
        }
        // 提交回调
    handleSubmit = () => {
        console.log('----------- handleSubmit ----------');
        console.log(this.props);
        const searchValue = this.refs.input.getValue();
        if (!searchValue) {
            return;
        }
        this.needGetFocus(false);
        this.setTipsArr(searchValue);
        this.changgeTipsPage(false);

        // if (this.props.mode === "degree") {
        //   console.log('------ degree --------');
        //   this.props.onChangePage(false);
        //   this.props.setInputValue();
        // } else {
          this.mockData(searchValue);
        // }
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
        this.setState({ value: value });
        isResetFocus && this.needGetFocus(true);
    }

    // 清除历史记录
    clearHistory() {
        this.setState({ tipsArr: [] });
        loc.set("tipsArr", this.state.tipsArr);
    }

    // 保存搜索记录
    setTipsArr(str) {
        const tipsArr = this.state.tipsArr;
        for (let i = 0; i < tipsArr.length; i++) {
            if (str === tipsArr[i]) {
                console.log('------- item ------ i = ' + i);
                return;
            }
        }
        tipsArr.length >= 4 && tipsArr.pop();
        tipsArr.unshift(str);
        loc.set("tipsArr", tipsArr);
    }

    // 是否展示搜索历史 
    changgeTipsPage = (showTips) => {
        this.setState({ showTips: showTips });
    }

    // 模拟数据 
    mockData = (searchValue) => {
        const type = this.props.mode;
        const list = mock[type];
        const data = {
            haveData: true,
            list: list,
            searchValue: searchValue
        }
        if (this.props.mode === "degree") {
          console.log("----------------- degree ------------");
          
          data.ridgepoleList = mock.ridgepoleList;
          data.roomList = mock.roomList;

          this.props.onChangePage(false);
          this.props.onChangeData(data);
        } else {
          this.props.onChangeResult(data);
        }
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
          <Button className = "cancle-btn" amStyle = "" >
            <p className = "cancle-btn-label" onClick = { this.handleCancleBtn } >取消</p> 
          </Button>
        );

        const clearStyle = {
          height: 16,
          width: 16,
        }
        // 清除内容按钮
        const clearBtn = ( 
          <img src="i/clearIcon.png" onClick = { this.handleClearBtn } style={clearStyle}/>
        );

        const tips = (this.state.showTips && this.state.tipsArr.length !== 0) 
          ? <SearchTips {...this.props } setInputValue={ this.setInputValue.bind(this)} tipsArr={ this.state.tipsArr } clearHistory={this.clearHistory.bind(this)}/>
          : null;

        // 搜索框
        const input = ( 
          <Container>
            <Field ref = "input"
            id = "detail-search"
            className = "detail-search"
            containerClassName = "search-bar"
            placeholder = { defaultPlaceholder }
            value = { this.state.value }
            // defaultValue={this.state.searchValue}
            // btnBefore= { <img src="i/searchIcon.png" /> }
            labelAfter = { clearBtn }
            btnAfter = { cancleBtn }
            autoFocus = { true } // 自动设置为焦点
            onFocus = { this.handleFocus } // 获得焦点
            onBlur = { this.handleBlur } // 失去焦点
            onInput = { this.handleInput } // 输入文字
            onChange = { this.handleChange } // value变化监听
            onSubmit = { this.handleSubmit } // 提交表单
            onKeyUp = { this.handleKeyUp } // 监听键盘的键抬起
            />

            {tips}

            </Container>
        );

        return input;
    }
}

export default SearchBar;
