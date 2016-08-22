import React from 'react';
import { Container, Field, Grid, Col, Button, Icon, Modal } from 'amazeui-touch';

class Waiting extends React.Component {
  constructor(props) {
    super(props);
    console.log('-------- waiting props ------');
    console.log(this.props);
    this.state = {
    };
  }

  render() {
    return (
      <Modal
        ref="modal"
        role="loading"
        isOpen={this.props.isOpen}
        onDismiss={this.closeModal}
        onOpen={this.onOpen}
        onClosed={this.onClosed}
        onAction={this.handleAction}
        {...this.props.modalProps}
      />
      );
  }
}

export default Waiting;
