import React from 'react';
import { render } from 'react-dom';
import { Container, Field, Grid, Col, Group, Button, Icon, ModalExample, List} from 'amazeui-touch';
import Fetch from './utils/Fetch';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      haveData: false,  // 是否有详细的数据
      schoolList: [],   // 搜索的list
      searchValue: ""   // 搜索的关键字
    };
  }
  componentWillMount() {
    console.log('--------- willMount --------');
    console.log(this.props);
  }

  // 默认props
  static defaultProps = {
    curWords: ""
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

  // 改变状态
  changeResultState = (data) => {
    console.log('---------- changeState -------');
    console.log(this.state.haveData);
    this.setState({
      haveData: data.haveData,
      schoolList: data.list,
      searchValue: data.searchValue,
    });
    console.log(this.state);
  }

  changeSchoolList = () => {
    console.log('--------- changeSchoolList -------------');
    this.props.schoolList = [
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
    // this.changeSchoolList();
    // let defaultPlaceholder = "";
    // if (this.props.mode === "school") {
    //   defaultPlaceholder = "请输入学校关键字"
    // } else if (this.props.mode === "district") {
    //   defaultPlaceholder = "请输入楼盘全名"
    // }
    // // 取消按钮
    // const cancleBtn = (
    //   <Button className="cancle-btn" amStyle="">
    //     <p className="cancle-btn-label" onClick={this.handleCancleBtn}>取消</p>
    //   </Button>
    // );
    // // 清除内容按钮
    // const clearBtn = (
    //   <Icon name="close" className="clear-btn" onClick={this.handleClearBtn} />
    // );
    // // 搜索框
    // const input = (
    //   <Field
    //       id="detail-search"
    //       className="detail-search"
    //       placeholder="请输入"
    //       labelAfter={clearBtn}
    //       btnAfter={cancleBtn}
    //       autoFocus={true}             // 自动设置为焦点
    //       onBlur={this.handleBlur}        // 失去焦点
    //       onInput={this.handleInput}   // 输入文字
    //       onChange={this.handleChange} // value变化监听
    //       onSubmit={this.handleSubmit} // 提交表单
    //       onKeyUp={this.handleKeyUp}   // 监听键盘的键抬起
    //       />
    // );

    const header = (
      <Container>
        <p className="detail-search-label"><span>{this.state.searchValue}</span>  对口学区楼盘 ({this.state.schoolList.length}) </p>
        <Grid className="detail-list-header" collapse={true} bordered={false}>
          <Col className="detail-name" cols={3}><span>楼盘</span></Col>
          <Col cols={2}><span>均价(平米)</span></Col>
          <Col cols={1}><span>开盘(年)</span></Col>
        </Grid>
      </Container>
    ); 

    // const detail = (
      //   <Container className="detail-list-cnt" scrollable={true}>
      //   <List className="detail-list">
      //     {
      //        /* 遍历数据 */
      //       this.props.schoolList.map((item, i) => {
      //           return (
      //             <Grid className="detail-list-item" collapse={true} bordered={false}>
      //               <Col className="detail-name" cols={3}><span>{item.name + ''}</span></Col>
      //               <Col cols={1.5}><span>{"¥" + item.price}</span></Col>
      //               <Col cols={1.5}><span>{item.year + ''}</span></Col>
      //             </Grid>
      //           );
      //       })
      //     }
      //   </List>
      // </Container>
    // );

    let page;
    if (this.state.haveData) {
      page =  (
        <Container className="detail-search-cnt" scrollable={true}>
              <SearchBar {...this.props} onChangeResult={this.changeResultState}/>
              {header}
              <ResultList {...this.props} schoolList={this.state.schoolList}/>
        </Container>  
      )
    } else {
      page = (
        <Container className="detail-search-cnt" scrollable={true}>
              <SearchBar {...this.props} onChangeResult={this.changeResultState}/>
        </Container>
      ) 
    }
    return page;
  }
}

export default Search;



