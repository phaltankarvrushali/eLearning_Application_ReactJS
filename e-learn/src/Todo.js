import React from 'react';
import './Todo.scss';
import {AddItem,enableTodoUI} from './AddItem/AddItem';
import TodoContainer from './TodoContainer/TodoContainer';
import UpdateItem from './UpdateItem/UpdateItem';
import TodoItem from './TodoContainer/TodoItem/TodoItem';

//Application flow starts from here
//From here, we are querying the database and rendering the table

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items : []
    }
  }

  fetchData() {

    fetch('http://127.0.0.1:9000/todo').then(
      response => {
        response.json().then(
          todo =>{
            console.log("Todo returned!");
            // console.log(todo);
            const itemsFetched = todo.map((i,k) => <TodoItem itemDetails = {i} key={k}></TodoItem>);
            this.setState({
                items : [...itemsFetched]
            });
          }          
        )
      }
    )
}

  render() {
    return (
    <div>
      <h1 className ="title">Lecture Notes</h1>
      <div className ="container">
        <TodoContainer contents = {this.state.items}></TodoContainer>
        <AddItem></AddItem>
        <UpdateItem></UpdateItem>
      </div>
      <div className = "button-container">
            <button id="showButton" onClick={this.fetchData.bind(this)}>Show Lecture Notes</button>
            <button id="showAddButton" onClick={enableTodoUI}>Add Lecture Notes</button>
        </div>  
    </div>
    );
  }
}

export default Todo;
