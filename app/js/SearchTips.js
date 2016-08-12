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
  static defaultProps = {}

  // 定义参数类型
  static propTypes = {
    // router: React.PropTypes.object.isRequired
  }

  clickItem = (str) => {
    this.props.setInputValue(str, true);
  }

  clickClearItem = () => {
    console.log('------- clear -------- ');
    this.props.clearHistory();
  }

  render() {
    return (
      // <Container className="search-tips-cnt">
      <List className="search-tips">
        {
          this.state.tipsArr.map((item, i) => {
            const className = (i === 0) ? "search-tips-first" : "search-tips-item"; 
            return(
              <Grid key={i} className={className} collapse={true} bordered={false}>
                <span onClick={this.clickItem.bind(this, item)} >{item}</span>
              </Grid>
            );
          })
        }
        <Grid className="search-tips-item" collapse={true} bordered={false}>
                <img src="i/delIcon.png" style={{height:16,width:16}}/>&nbsp;&nbsp;<span onClick={this.clickClearItem}>清除历史记录</span>
        </Grid>
      </List>
      // </Container>
    );
  }
}

export default SearchTips;
