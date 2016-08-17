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
    const txtObj = {
      bigin: "",
      key: "",
      end: "",
    }
    txtObj.key = this.state.searchValue;
    txtObj.bigin = this.props.mode === "degree" ? "查询" : ""; 
    txtObj.end = this.props.mode === "school" ? "对口学区楼盘" : "对口学校";

    const titleObj = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
    }
    titleObj.t1 = this.props.mode === "school" ? "楼盘" : "对口学校" ;
    titleObj.t2 = this.props.mode === "school" ? "均价(平米)" : "2015年最低分" ;
    titleObj.t3 = this.props.mode === "school" ? "开盘(年)" : "建校年份" ;
    const header = (
      <Container>
        <p className="detail-search-label">{txtObj.bigin}<span>{txtObj.key}</span>  {txtObj.end} ({this.state.schoolList.length}) </p>
        <Grid className="detail-list-header" collapse={true} bordered={false}>
          <Col className="detail-name" cols={3}><span>{titleObj.t1}</span></Col>
          <Col cols={2}><span>{titleObj.t2}</span></Col>
          <Col cols={1}><span>{titleObj.t3}</span></Col>
        </Grid>
      </Container>
    ); 

    let page;
    if (this.state.haveData) {
      page =  (
        <Container className="detail-search-cnt" scrollable={false}>
              <SearchBar {...this.props} onChangeResult={this.changeResultState.bind(this)}/>
              {header}
              <ResultList {...this.props} schoolList={this.state.schoolList}/>
        </Container>  
      )
    } else {
      page = (
        <Container className="detail-search-cnt" scrollable={false}>
              <SearchBar {...this.props} onChangeResult={this.changeResultState.bind(this)}/>
        </Container>
      ) 
    }
    return page;
  }
}

export default Search;
