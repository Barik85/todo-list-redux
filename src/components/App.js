/* eslint-disable */

import React, {Component, Fragment} from 'react';
import ininialTodos from '../todos';
import TodoList from './todo_list/TodoList';
import TodoFilter from './to_do_filter/TodoFilter';
import AppBar from './App_bar/AppBar';
import Button from './Button/Button';
import TodoEditorModal from './todo_editor_modal/TodoEditorModal';


const getVisibleTodos = (elements, parametr) => (
  elements.filter(element => element.title.includes(parametr))
);

class App extends Component {
  state = {
    isModalOpen: false,
  }

handleModalOpen = () => this.setState({isModalOpen: true});

handleModalClose = () => this.setState({isModalOpen: false});

  render() {
    const {isModalOpen} = this.state;
    // const visibleTodos = getVisibleTodos(todos, filter);
    const customStyles = {
      content : {
        width: 600,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    };
    return(
      <Fragment>
        <AppBar>
          <TodoFilter/>
          <Button onClick={this.handleModalOpen} layout="dark">Add todo</Button>
        </AppBar>
        <TodoList />

        <TodoEditorModal
          isOpen={isModalOpen}
          onClose={this.handleModalClose}
        />
      </Fragment>
    )
  }
}

export default App;
