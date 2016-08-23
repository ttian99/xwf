import React from 'react';
import { Container, Field, Grid, Col, List } from 'amazeui-touch';
import MinList from './MinList';

class ResultList extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state={
      schoolList: this.props.schoolList,
    };
  }

  // 默认props
  static defaultProps = {
    // mode: 'school',
  }

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    if (nextProps.schoolList !== undefined) {
      this.setState({
        schoolList: nextProps.schoolList
      });
    }
  }

  render() {
    return (
      <Container>
        {
          this.state.schoolList.map((item, i) => {
            return(
              <MinList key={i} dataList={item.list} keyValue={item.key} mode={this.props.mode}/>
            );
          })
        }
      </Container>
    );
  }
}

export default ResultList;
