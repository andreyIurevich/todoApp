import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Menu from '../../Menu/view/Menu.jsx'

import { block } from 'bem-cn'
import '../../../src/default.css'
import './App.sass'

class App extends React.Component {

  render() {
    const b = block('app');
    
    return (
      <div className={b()}>
        <Menu />
      </div>
    );
  }
}

export default App