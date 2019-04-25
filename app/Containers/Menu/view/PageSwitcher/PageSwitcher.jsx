import React from 'react'
import PropTypes from 'prop-types'
import menuItems from '../../redux/data/menuItems.js'

export default class PageSwitcher extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    b: PropTypes.func.isRequired,
    changeActiveMenuPage: PropTypes.func.isRequired,
  }

  render() {
    const { b, changeActiveMenuPage } = this.props;

    const menuItemsLayout = 
          Object.keys(menuItems).map((item, index) => {
            return (
              <div
                key={index}
                className={b('menu-item')}
                onClick={() => { changeActiveMenuPage(menuItems[item].value); }}>
                {menuItems[item].title}
              </div>
            );
          });

    return (
      <div
        className={b('page-switcher')}>
        {menuItemsLayout}
      </div>
    );
  }
}