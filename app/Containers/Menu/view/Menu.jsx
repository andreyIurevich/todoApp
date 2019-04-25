import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions/actions.js'

import PageSwitcher from './PageSwitcher/PageSwitcher.jsx'
import TaskList from './TaskList/TaskList.jsx'

import { block } from 'bem-cn'
import './Menu.sass'

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    activePage: PropTypes.string.isRequired,
    selectTask: PropTypes.number.isRequired,

    todoList: PropTypes.arrayOf(PropTypes.object),

    changeActiveMenuPage: PropTypes.func.isRequired,
    selectToDo: PropTypes.func.isRequired,
  }

  render() {
    const b = block('menu');
    
    return (
      <div className={b()}>
        <div className={b('title-block')}>
          Menu
        </div>
        <div className={b('task-list')}>
          <PageSwitcher 
            b={b} 
            changeActiveMenuPage={this.props.changeActiveMenuPage} />
          <TaskList
            b={b}
            selectToDo={this.props.selectToDo}
            activePage={this.props.activePage}
            todoList={this.props.todoList} />
        </div>
        <div className={b('new-task')}>
          <button
            onClick={ () => { this.props.selectToDo(-1); }}>
            Добавить новую
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    activePage: state.menu.activePage,
    selectTask: state.menu.selectTask,
    todoList:   state.app.todoList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)