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
    // const id = event.target.value;
    this.props.setInputValue(str, true);
  }

  clickClearItem = () => {
    console.log('------- clear -------- ');
  }

  render() {
    return (
      // <Container className="search-tips-cnt">
      <List className="search-tips">
        {
          this.state.tipsArr.map((item, i) => {
            const className = (i === 0) ? "search-tips-first" : "search-tips-item"; 
            return(
              // <p key={i}><span>{item}</span></p>
              // <Col className="search-tips-name" cols={6}><span>{item}</span></Col>
              <Grid key={i} className={className} collapse={true} bordered={false}>
                
                <span onClick={this.clickItem.bind(this, item)} >{item}</span>
              </Grid>
            );
          })
        }
        <Grid className="search-tips-item" collapse={true} bordered={false}>
                <Icon name="trash"></Icon>&nbsp;&nbsp;<span onClick={this.clickClearItem}>清除历史记录</span>
        </Grid>
      </List>
      // </Container>

      // <span onClick={(evt, i) => {this.clickItem(evt, i)}} value={item}>{item}</span>
    );
  }
}

export default SearchTips;
