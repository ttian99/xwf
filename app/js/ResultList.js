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
    const schoolResult = (
      this.state.dataList.map((item, i) => {
        return (
          <MinList key={i} minList={item.list} keyValue={item.key} mode={this.props.mode}/>
        );
      })
    );

    const districtResult = (
      this.state.dataList.map((item, i) => {
        return (
          <MinList key={i} minList={item.list} keyValue={item.key} mode={this.props.mode}/>
        );
      })
    );
    // const 
    return (
      <Container>
        {schoolResult}
      </Container>
    );
  }
}

export default ResultList;


  // this.state.dataList.map((item, i) => {
          //   return(
          //     <MinList key={i} minList={item.list} keyValue={item.key} mode={this.props.mode}/>
          //   );
          // })

