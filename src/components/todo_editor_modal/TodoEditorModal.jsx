import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions/todos';
import TodoEditor from '../todo_editor/todo_editor';

Modal.setAppElement('#root');

const TodoEditorModal = ({ isOpen, onClose, onSave }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    <TodoEditor onSave={onSave} onCancel={onClose} />
  </Modal>
)

TodoEditorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mDTP = dispatch => ({
  onSave: text => dispatch(addTodo(text))
})

export default connect(null, mDTP)(TodoEditorModal);
