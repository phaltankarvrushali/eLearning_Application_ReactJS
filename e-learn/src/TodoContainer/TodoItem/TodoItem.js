import './TodoItem.scss';
import React from 'react';


class TodoItem extends React.Component {


    constructor(props) {
        

        super(props);
        this.myRef = React.createRef();

        this.props.itemDetails.isChecked?
        this.state={
            ischeked:false
        }:
        this.state={
            ischeked:true
        }
    }

    isCompleted = () => {

        this.myRef.current.parentNode.parentNode.classList.toggle("strikethrough");   
        if (this.props.itemDetails.isChecked){
        }

       
        const id=this.props.itemDetails._id
        const editTodo = async (id) => {
            console.log(id)
            const item = {
                title : this.props.itemDetails.title,
                description : this.props.itemDetails.description,
                due_date : this.props.itemDetails.date,
                time : this.props.itemDetails.time,
                isChecked:this.state.ischeked
            }

            console.log(item)

            // this.props.itemDetails.isCompleted=true;
            const data = await fetch(`http://localhost:9000/todo/${id}`, {
        
              method: 'PUT',
        
              headers: {
        
                'Content-Type': 'application/json'
        
              },      
              body: JSON.stringify(item)       
            }).then(res => {return res.json()        
            }).then(data => console.log(data))   
          }

          editTodo(id)

    }

    enableUpdateTodo = () => {
        console.log('Clicked Update for a Todo Item');
        const todo = document.getElementById("update-todo");
        todo.classList.toggle("not-visible");
        
        const todoId =  this.myRef.current.parentNode.querySelector('div').textContent.split(": ")[1];
        // const todoId = event.target.parentNode.querySelector('div').textContent.split(": ")[1];
        todo.querySelector('h4').textContent = `ID : ${todoId}`;
    
    }

    deleteTodo = () => {
        console.log(`Clicked Delete`);
        const todoId =  this.myRef.current.parentNode.querySelector('div').textContent.split(": ")[1];
        console.log(todoId);
        

        fetch(
            'http://127.0.0.1:9000/todo/'+todoId, {
                method : 'DELETE'
            }
        ).then( (data) => {  
            console.log('Deleted Todo: ' + todoId + ' Response: ' + data);
            
        });
    }

    // async function deleteRow() {
    //     await fetch("http://localhost:8080/temp/".concat(thisRow.ids), {
    //       method: "DELETE",
    //     });
    //     for (var key in rows) {
    //       const a = rows[key];
    //       setRows((rows) => rows.filter((a) => a.ids != thisRow.ids));
    //     }
    //   }

    render() {
        return (
           <>
           {this.props.itemDetails.isChecked?
           <>
            <div className="todo-item strikethrough">
                <span className ="todo-item-title"> {this.props.itemDetails.title}</span>
                <div className="todo-details not-visible">
                    <div>ID : {this.props.itemDetails._id}</div>
                    <div>Description : {this.props.itemDetails.description}</div>
                    <div>Due Date : {this.props.itemDetails.due_date}</div>
                    <div>Due Time : {this.props.itemDetails.time}</div>
                    <button type="button" ref={this.myRef} onClick= {this.isCompleted.bind(this)}>Mark Undone</button>
                    <button ref={this.myRef} onClick={this.enableUpdateTodo.bind(this)}>Update</button>
                    <button ref={this.myRef} onClick={ this.deleteTodo.bind(this)} > Delete</button>
                </div>
            </div>
            </>
            :

            <>
            <div className="todo-item ">
                <span className ="todo-item-title"> {this.props.itemDetails.title}</span>
                <div className="todo-details not-visible">
                    <div>ID : {this.props.itemDetails._id}</div>
                    <div>Description : {this.props.itemDetails.description}</div>
                    <div>Due Date : {this.props.itemDetails.due_date}</div>
                    <div>Due Time : {this.props.itemDetails.time}</div>
                    <button type="button" ref={this.myRef} onClick= {this.isCompleted.bind(this)}>Mark Done</button>
                    <button ref={this.myRef} onClick={this.enableUpdateTodo.bind(this)}>Update</button>
                    <button ref={this.myRef} onClick={ this.deleteTodo.bind(this)} > Delete</button>
                    
                </div>
            </div>


            </>}
            </>
        
           
        );
    }
}

export default TodoItem;