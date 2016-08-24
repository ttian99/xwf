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
      dataList: [],   // 搜索的list
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
    this.setState({
      haveData: data.haveData,
      dataList: data.list,
      searchValue: data.searchValue,
    });
  }

  render() {
    let page;
    if (this.state.haveData) {
      page =  (
        <Container className="detail-search-cnt" scrollable={true}>
              <SearchBar {...this.props} onChangeResult={this.changeResultState.bind(this)}/>
              <ResultList {...this.props} dataList={this.state.dataList}/>
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
