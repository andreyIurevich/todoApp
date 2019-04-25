import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import menuItems from '../Menu/redux/data/menuItems.js'
import { block } from 'bem-cn'

export default class ToDo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      taskType: 'active',
      todo: '',
    }
  }


  static propTypes = {
    selectTask: PropTypes.number.isRequired
  }

  render() {
    const b = block('todo-container');
    const { selectTask } = this.props;

    const taskTypeLayout = menuItems.map((item, index) => {

    });

    return ( 
      <div className={b()}>
        <input 
          type="text"
          name="todo"
          value={this.state.todo || ''}
          onChange={this.onHandleChange}
        />
        <input 
          type="radio"
          name="taskType"
          value="active"
          checked={this.state.taskType === 'active'}
          onChange={this.onHandleChange}
        />
      </div>
    );
  }
}