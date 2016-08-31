import React from 'react';
import {Notification} from 'amazeui-touch';

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      isShow: false
    };
  }

  // 默认props
  static defaultProps = {
    isShow: false,
    txt: '这是一个动态显示的通知: )'
  }

  // 父辈组件更改props后 
  componentWillReceiveProps(nextProps) {
    console.log('-------- componentWillReceiveProps -------');
    // if (nextProps.txt !== undefined) {
    //   this.setState({
    //     isShow: nextProps.isShow,
    //     // txt: nextProps.txt
    //   });
      this.timer = setTimeout(() => {
        this.closeNotification();
      }, 3000);
    // }
  }

  // 挂载完成后立刻调用
  componentDidMount = () => {
    console.log('--------- componentDidMount ---');
    // this.setState({ isShow: this.props })
    
    // this.timer = setTimeout(() => {
    //   this.closeNotification();
    // }, 2000);
  }
  // 将要卸载时调用函数
  componentWillUnmount = () => {
    console.log('--------- componentWillUnMount ---')
    clearTimeout(this.timer);
  }

  closeNotification = () => {
    console.log('----------- closeNotification ------------');
    // this.setState({ isShow: false });
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
