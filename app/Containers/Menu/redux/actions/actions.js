import actionTypes from './actionTypes.js'

export function changeActiveMenuPage(menuType) {
  return {
    type: actionTypes.CHANGE_ACTIVE_MENU_PAGE,
    payload: menuType,
  }
}

export function selectToDo(todo) {
  return {
    type: actionTypes.SELECT_TODO,
    payload: todo,
  }
}