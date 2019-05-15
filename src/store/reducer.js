const defaultState = {
  inputValue: '222',
  list: ['1', '2'],
};

export default (state = defaultState, action) => {
  if (action.type === 'on_input_change') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'save_todo_list') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}