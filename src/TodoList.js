import React, { Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.onInputChange = this.onInputChange.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    store.subscribe(this.onStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '150px', marginLeft: '400px' }}>
         <Input 
          value={this.state.inputValue}
          placeholder='todo info'
          style={{ width: '500px', marginRight: '10px' }}
          onChange={this.onInputChange}/>
         <Button type="primary" onClick={this.onConfirm}> 确认 </Button>
         <List
          style={{ marginTop: '10px', width: '570px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}/>
        </div>
      </Fragment>
    );
  }

  onInputChange(e) {
    const action = {
      type: "on_input_change",
      value: e.target.value
    }
    store.dispatch(action);
  }

  onStoreChange() {
    console.error('change', store.getState());
    this.setState(store.getState());
  }

  onConfirm() {
    const action = {
      type: "save_todo_list",
    }
    if(!this.state.inputValue) {
      return ;
    }
    store.dispatch(action);
  }
}

export default TodoList;
