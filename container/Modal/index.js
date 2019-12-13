import { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';

class ModalForm extends Component {
  render() {
    const {
      children, visible,
      handleCloseModal,
      handleSubmit, title
    } = this.props;
    return (
      <div>
        <Modal
          destroyOnClose={true}
          title={title}
          visible={visible}
          onOk={handleSubmit}
          onCancel={handleCloseModal}
        >
          { children }
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ModalForm);
