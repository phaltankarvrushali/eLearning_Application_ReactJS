
import React from 'react';
import  NavBar from './Nav-Bar/Nav-Bar.js';
import Todo from './Todoitems/Todoitems.js';
import TodoPost from './TodoPost/TodoPost.js';

// Added all components navigation bar, to-do fetch and to do add components
class AddModifyCourse extends React.Component {

  render(){
   
    return (
      <div className="lecture-app">
        <NavBar></NavBar>
        <Todo></Todo>
        <TodoPost></TodoPost>
      </div>
    );

  }

}

export default AddModifyCourse;