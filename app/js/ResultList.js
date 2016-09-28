import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';
import MinList from './MinList';

class ResultList extends React.Component {
  constructor(props, state) {
    super(props, state);
    console.log(props);
    this.state={
      dataList: this.props.dataList,
    };
  }

  // 默认props
  static defaultProps = {
    // mode: 'school',
  }

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataList !== undefined) {
      this.setState({
        dataList: nextProps.dataList
      });
    }
  }

  render() {
    const listResult = (
      this.state.dataList.map((item, i) => {
        return (
          <MinList key={i} minList={item.list} keyValue={item.key} mode={this.props.mode}/>
        );
      })
    )

    const schoolArr = ["无匹配结果，请输入完整学校名称；", "或您需要切换至【小区查学校】试试吗？"];
    const districtArr = ["无匹配结果，请输入完整小区名称；", "或您需要切换至【学校查小区】试试吗？"];
    const tipArr = this.state.mode === 'school' ? schoolArr : districtArr ; 
    const noResult = (
      <List>
        <List.Item>
          <span>{tipArr[0]}<br/>{tipArr[1]}</span>
        </List.Item>
      </List>
    )
    
    const ret = this.state.dataList.length < 1 ? noResult : listResult;
    return (
      <Container scrollable={true}>
        <Container className="result-cnt">
          {ret}
        </Container>
      </Container>
    );
  }
}

export default ResultList;
