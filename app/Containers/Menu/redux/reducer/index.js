import actionTypes from '../actions/actionTypes.js'
import menuItems from '../data/menuItems.js'

const initialState = {
  activePage: menuItems.ACTIVE_TASK.value,
  selectTask: -1,
} 

export default function menu (state = initialState, action) {

  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_MENU_PAGE:
      return {
        ...state,
        activePage: action.payload,
      }
    case actionTypes.SELECT_TODO:
      return {
        ...state,
        selectTask: action.payload
      }
    default:
      return state;
  }
  
}