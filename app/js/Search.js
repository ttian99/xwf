import React from 'react';
import { render } from 'react-dom';
import { Container, Field, Grid, Col, Group, Button, Icon, ModalExample, List} from 'amazeui-touch';
import Fetch from './utils/Fetch';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      haveData: true,  // 是否有详细的数据
      value: ""
    };
  }

  // 默认props
  static defaultProps = {
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  // 挂载完成后立刻调用
  componentDidMount = () => {
    // 设置输入框焦点
    // document.getElementById('detail-search').focus();
  } 

  changeState = (newState) => {
    console.log('---------- changeState -------');
    console.log(this.state.haveData);
    this.setState({ haveData: true });
    console.log(this.state.haveData);
  }

  handleCancleBtn = () => {
    console.log('-------- cancle ----------');
    this.props.onParentCb(false);
  }

  handleClearBtn = () => {
    console.log('------------- clear -----------');
  }
  
  handleChange = () => {
    console.log('--------- handleChange --------------');
    const aaaa = document.getElementsByClassName('clear-btn');
    console.log(aaaa);
    // document.getElementByClassName("clear-btn").style.display = "";
    // const dddd = document.getElementById('detail-search').getValue();
    // console.log('dddd = ' + dddd);
  }

  handleInput = () => {
    console.log('----------- handleInput ----------');
  }

  handleSubmit = () => {
    console.log('----------- handleSubmit ----------');
    alert('------ submit --------');
    const url = 'http://localhost:8010/?cmd=search-info&words=%E5%93%88%E5%93%88';
    // this.renderLoader();
    Fetch.get(url);
  }

  handleBlur = () => {
    console.log('--------- handleBlur ---------');
    // this.handleSubmit();
  }

  handleKeyUp = (evt) => {
    console.log('------ Keyup --------');
    evt.keyCode === 13 && this.handleSubmit()
  }

  renderLoader = () => {
    render(
      <ModalExample
            title="Loading Modal"
            modalProps={{
              title: '使劲加载中...',
              role: 'loading'
            }}
          />
    );
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

    const detail = (
      <List>
        <p className="detail-search-label"><span>实验小学</span> 对口学区楼盘</p>
        <Grid collapse={true} bordered={true}>
          <Col cols={3}><span>楼盘</span></Col>
          <Col cols={1.5}><span>均价(平米) </span></Col>
          <Col cols={1.5}><span>开盘(年) </span></Col>
        </Grid>
        <Grid collapse={true} bordered={true}>
          <Col cols={3}><span>楼盘</span></Col>
          <Col cols={1.5}><span>均价(平米) </span></Col>
          <Col cols={1.5}><span>开盘(年) </span></Col>
        </Grid>
      </List>
       // <List.Item role="header">
        // <Grid collapse={true} bordered={true}>
        //     <Col cols={3}><span>楼盘</span></Col>
        //     <Col cols={2}><span>均价(平米)</span></Col>
        //     <Col cols={1}><span>开盘(年)</span></Col>
        //   </Grid>
        // </List.Item>
        // <List.Item>
        //   <Grid collapse={true} bordered={true}>
        //     <Col cols={3}><span>楼盘</span></Col>
        //     <Col cols={2}><span>均价(平米)</span></Col>
        //     <Col cols={1}><span>开盘(年)</span></Col>
        //   </Grid>
        //  </List.Item>
        // <List.Item title="List Item 2" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 3" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        //  <List.Item title="List Item 4" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 5" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 6" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        //  <List.Item title="List Item 7" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 8" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 9" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        //  <List.Item title="List Item 10" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 11" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 12" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        //  <List.Item title="List Item 13" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 14" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
        // <List.Item title="List Item 15" >
        //  <span>楼盘</span><span>均价(平米)</span><span>开盘(年)</span>
        //  </List.Item>
    );

    let page;
    if (this.state.haveData) {
      page =  (
        <Container className="detail-search-cnt" scrollable={true}>
              {input}
              {detail}
        </Container>  
      )
    } else {
      page = (
        <Container className="detail-search-cnt">
              {input}
        </Container>
      ) 
    }

    const selfInput = (
      <input className="self-input" placeholder="请输入"/>
    );

    const grid = (
       <Grid
          className="search-form"
          collapse={true}
          bordered={true}
        >
          <Col cols={4} className="s1">cols: 4</Col>
          <Col cols={1} className="s2">cols: 1</Col>
          <Col cols={1} className="s3">cols: 1</Col>
        </Grid>
    );

    return page;
  }
}

export default Search;
