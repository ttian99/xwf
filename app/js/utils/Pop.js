import React from 'react';
import {Notification} from 'amazeui-touch';

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  // 默认props
  static defaultProps = {
    isShow: false,
    txt: ''
  }

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    console.log('-------- componentWillReceiveProps -------');
    // console.log(nextProps);
    if (nextProps.txt) {
      console.log('-- setTimeout --')
      this.timer = setTimeout(() => {
        this.closeNotification();
        clearTimeout(this.timer);
      }, 2000);
    }
  }

  // 挂载完成后立刻调用
  componentDidMount = () => {
    console.log('--------- componentDidMount ---');
    // this.timer = setTimeout(() => {
    //   this.closeNotification();
    // }, 2000);
  }
  // 将要卸载时调用函数
  componentWillUnmount = () => {
    console.log('--------- componentWillUnMount ---')
    clearTimeout(this.timer);
  }

  // 关闭
  closeNotification = () => {
    console.log('----------- closeNotification ------------');
    this.props.onPopMsg('', false);
  }

  render() {
    return (
      <Notification
        className="xwf-nt"
        title=""
        amStyle=""
        visible={this.props.isShow}
        animated
        closeBtn={false}
        // onDismiss={this.closeNotification}
        >
        {
          this.props.txt
        }
      </Notification>
    );
  }
}

export default Pos;
