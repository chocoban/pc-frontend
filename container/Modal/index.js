import { Component } from 'react';
import { Modal } from 'antd';
import { connect } from "react-redux";
import { closeModal } from '../../redux/actions';

class ModalForm extends Component {

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  render() {
    const { visible, closeModal } = this.props;
    return (
      <div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          onCancel={closeModal}
        >
          <p> ModalText </p>  
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const actions = {
  closeModal
};

export default connect(mapStateToProps, actions)(ModalForm);
