import React from 'react'
import PropTypes from 'prop-types'

import menuItems from '../../redux/data/menuItems.js'

export default class TaskList extends React.Component  {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    b: PropTypes.func.isRequired,
    selectToDo: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const { b, activePage, todoList, selectToDo } = this.props;
    let todo;
  
    switch (activePage) {
      case menuItems.ACTIVE_TASK.value:
        todo = todoList.filter( item => item.type === 'active' );
        break;
      case menuItems.NEW_TASK.value:
        todo = todoList.filter( item => item.type === 'new' );
        break;
      case menuItems.DONE_TASK.value:
        todo = todoList.filter( item => item.type === 'done' );
        break;
      default:
        todo = [...todoList];
    }
  
    const todoItems = todo.map((task, index) => {
      return (
        <div
          key={index}
          className={b('todo-item')}
          onClick={() => { selectToDo(task.id); }}>
          {index}. {task.toDo}
        </div>
      );
    });
  
    return (
      <div
        className={b('todo-list')}>
        {todoItems}
      </div>
    );
  }
}