import React from 'react';
import { Container, Field, Grid, Col, List, Icon } from 'amazeui-touch';

class SearchTips extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here

    this.state= {
      tipsArr: []
    };
    this.state.tipsArr = this.props.tipsArr;
  }
  


  // 默认props
  static defaultProps = {
  }

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  clickItem = (str) => {
    console.log('-- clickItem = ' + str );
    this.props.quickSubmit(str);
  }
  // 清除历史记录 
  clickClearItem = () => {
    this.props.clearHistory();
  }

  // 鼠标按下时
  mouseDown() {
    console.log('--------- mouseDown----------');
    console.log(this.props);
    this.props.setIsClickTips(true);
  }
               
  render() {
    return (
      <Container className="search-tips-cnt" 
          >
      <List className="search-tips"
          onMouseDown={this.mouseDown.bind(this)}>
        {
          this.state.tipsArr.map((item, i) => {
            const className = (i === 0) ? "search-tips-first" : "search-tips-item"; 
            return(
              <Grid key={i} className={className} collapse={true} bordered={false} onClick={this.clickItem.bind(this, item)}>
                <span>{item}</span>
              </Grid>
            );
          })
        }
        <Grid className="search-tips-item" collapse={true} bordered={false}
          onClick={this.clickClearItem} >
                <img src="i/delIcon.png" style={{height:16,width:16}}/>&nbsp;&nbsp;<span>清除历史记录</span>
        </Grid>
      </List>
      </Container>
    );
  }
}

export default SearchTips;
