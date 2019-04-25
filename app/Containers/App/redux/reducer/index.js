const initialState = {
  nextID: 0,
  activePage: 'welcome',
  todoList: [
    {
      id: 0,
      toDo: 'Погулять с собакой',
      type: 'active'
    },
    {
      id: 1,
      toDo: 'Купить телефон',
      type: 'active'
    },
    {
      id: 2,
      toDo: 'Заказать торт',
      type: 'new'
    },
    {
      id: 3,
      toDo: 'Купиь цветы',
      type: 'new'
    },
    {
      id: 4,
      toDo: 'Забрать машину',
      type: 'done'
    },
    {
      id: 5,
      toDo: 'Постирать вещи',
      type: 'done'
    },
  ],
};

export default function app(state = initialState, action) {
  return state;
}