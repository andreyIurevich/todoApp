import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { block } from 'bem-cn'

import '../../../src/default.css'
import './App.sass'

class App extends React.Component {

  render() {
    const b = block('app');
    
    return (
      <div className={b()}>
      </div>
    );
  }
}

export default App