import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Field, Grid, Col, Button, Icon, Modal, Notification } from 'amazeui-touch';
import Logo from './Logo';
import Search from './Search';
import SearchTips from './SearchTips';
import loc from './utils/loc';
import mock from './utils/mock';
import Req from './utils/Req';
import Waiting from './utils/Waiting';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        console.log(this.props);
        this.state = {
            isSearching: false, // 是否正在网络搜索
            value: "", // 输入框的值
            searchValue: "", // 搜索的关键字
            showTips: true,
            tipsArr: [],
            isClickTips: false, //是否点击到了搜索记录框
        };
        console.log("this.state.isClickTips = " + this.state.isClickTips);
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

    // 文字输入监听
    handleInput = (event) => {
        const value = this.refs.input.getValue();
        this.setInputValue(value, false);
        const needShowTips = !value;
        this.changeTipsPage(needShowTips);
    }

    // 提交回调
    handleSubmit = (value) => {
        console.log('----------- handleSubmit ----------');
        console.log(this.props);

        const searchValue = value || this.refs.input.getValue();
        if (!searchValue) {
            return;
        }
        this.needGetFocus(false);
        this.setTipsArr(searchValue);
        this.changeTipsPage(false);
        
        this.setState({isSearching: true});

        this.reqNet(searchValue);

        // 模拟请求
        // setTimeout(()=>{
        //   this.mockData(searchValue);
        //   this.setState({isSearching: false});
        // }, 3000);
    }

    // 请求网络
    reqNet = (searchValue) => {
      if (this.props.mode == 'school') {
          Req.searchSchool({ words: searchValue }, (err, res) => {
            this.setState({ isSearching: false });
            console.log('--------- submit back -------');
            console.log(res);
            if (err) {
              console.log('req.searchschool err --');
              console.log(err);
              return;
            }
            console.log(res);
            var list = res.matchArr;
            this.freshData(searchValue, list);
          });
        } else if (this.props.mode == 'district') {
          Req.searchVillage({ words: searchValue }, (err, res) => {
            this.setState({ isSearching: false });
            console.log('--------- submit back -------');
            console.log(res);
            if (err) {
              console.log('req.searchvillage err --');
              console.log(err);
              return;
            }
            console.log(res);
            var list = res.matchArr;
            this.freshData(searchValue, list);
          });
        }
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

    // 通过搜索提示的选项快速提交
    quickSubmit = (value) => {
      console.log('-------- quickSubmit ------');
      this.setInputValue(value);      
      this.handleSubmit(value);
      this.changeTipsPage(false);
    }

    // 处理获得焦点
    handleFocus = () => {
        // console.log('-------- handleFocus ------');
        this.setInputValue("");
        this.changeTipsPage(true);
    }

    // 处理失去焦点
    handleBlur = (event) => {
      console.log('------ blur -------');
      if (this.state.isClickTips) {
        console.log('------ isClickTips -------');
        // 如果点击的是搜索历史框，这里只重置isClickTips的状态，等点击事件传递到searchTips做处理
        this.setIsClickTips(false);
      } else {
        console.log('---- isNotClickTips ---');
        this.changeTipsPage(false);
      }
    }

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
    changeTipsPage = (showTips) => {
        this.setState({ showTips: showTips });
    }
    // 是否选中了历史搜索
    setIsClickTips = (newState) => {
        this.setState({ isClickTips: newState });
    }

    // 模拟数据 
    mockData = (searchValue) => {
        const type = this.props.mode;
        const list = mock[type];
        this.freshData(searchValue, list);
    }

    // 整理数据并刷新
    freshData = (searchValue, list) => {
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

        // 搜索图标
        const searchStyle = {
          height: 28,
          width: 18.5,
          paddingTop: 5,
          paddingBottom: 5,
        };
        const searchIcon = (
          <Container className="search-icon-cnt">
            <img className="search-icon" src="i/searchIcon.png" style={searchStyle}/>
          </Container>
        );
        // 取消按钮
        const cancleBtn = ( 
          <Button className = "cancle-btn" amStyle = "" >
            <p className = "cancle-btn-label" onClick = { this.handleCancleBtn } > 取消 </p>  
          </Button>
        );      
            
        // 清除内容按钮
        const clearStyle = { height: 16, width: 16};
        const clearBtn = (
          <img src = "i/clearIcon.png"
            onClick = { this.handleClearBtn }
            style = { clearStyle }
            />
        );

        const tips = (this.state.showTips && this.state.tipsArr.length !== 0) 
          ? <SearchTips 
              {...this.props }
              setInputValue = { this.setInputValue.bind(this) }
              tipsArr = { this.state.tipsArr }
              clearHistory = { this.clearHistory.bind(this) }
              submit={ this.handleSubmit.bind(this)} 
              changeTipsPage={this.changeTipsPage.bind(this)}
              quickSubmit={ this.quickSubmit.bind(this) }
              setIsClickTips={ this.setIsClickTips.bind(this)} 
              />
          : null;

        // 搜索框
        const input = ( 
          <Container>
              <Container className="search-bar">
                <Field ref = "input"
                  id = "detail-search"
                  className = "detail-search"
                  containerClassName = "search-bar-cnt"
                  placeholder = { defaultPlaceholder }
                  value = { this.state.value }
                  // defaultValue={this.state.value}
                  labelBefore= { searchIcon }
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
            </Container>

            { tips }
            
            <Waiting isOpen={this.state.isSearching}/>
            
          </Container>
        );

        return input;
    }
}

export default SearchBar;
