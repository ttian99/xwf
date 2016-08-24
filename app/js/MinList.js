import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';

class MinList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state={
      minList: this.props.minList,
    };
  }

  // 默认props
  static defaultProps = {
    mode: 'school',
    minList: [],
    keyValue: '',
  }

  render() {
    const txtObj = {
      bigin: "",
      key: "",
      end: "",
    }
    txtObj.key = this.props.keyValue;
    txtObj.bigin = this.props.mode === "degree" ? "查询" : "";
    txtObj.end = this.props.mode === "school" ? "对口学区楼盘" : "对口学校";

    const titleObj = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
    }
    titleObj.t1 = this.props.mode === "school" ? "楼盘" : "对口学校";
    titleObj.t2 = this.props.mode === "school" ? "均价(平米)" : "2015年最低分";
    titleObj.t3 = this.props.mode === "school" ? "开盘(年)" : "建校年份";
    const header = (
      <Container>
        <p className="detail-search-label">{txtObj.bigin}<span>{txtObj.key}</span>  {txtObj.end} ({this.props.minList.length}) </p>
        <Grid className="detail-list-header" collapse={true} bordered={false}>
          <Col className="detail-name" cols={3}><span>{titleObj.t1}</span></Col>
          <Col cols={2}><span>{titleObj.t2}</span></Col>
          <Col cols={1}><span>{titleObj.t3}</span></Col>
        </Grid>
      </Container>
    ); 

    const body = (
      <List className="detail-list">
        {
          /* 遍历数据 */
          this.props.minList.map((item, i) => {
            const ret = this.render3Col(item, i);
            return ret;
          })
        }
      </List>
    );

    return(
      <Container>
        {header}
        {body}
      </Container>
    );
  }

  render3Col(item, i) {
    let className = "detail-list-item";
    if (i === 0) {
      className = "detail-list-item" + "-first"
    }
    const obj = {};
    obj.left = item.name || '';
    obj.right = item.year || '';
    if (this.props.mode === 'school') {
      obj.mid = item.price ? "¥ " + item.price : '';
    } else if (this.props.mode === 'district') {
      obj.mid = item.minScore || '';
    }
    return (
      <Grid key={i} className={className} collapse={true} bordered={false}>
        <Col className="detail-list-item-left" cols={3}><span>{obj.left + ""}</span></Col>
        <Col className="detail-list-item-middle"cols={2}><span>{obj.mid + ""}</span></Col>
        <Col className="detail-list-item-right" cols={1}><span>{obj.right + ""}</span></Col>
      </Grid>
    );
  }
}

export default MinList;
