import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        todos : [],
        count : 0,
        value : ''
         
      }
    }
   

    addTodolist()

    {
        const obj = {
            name : this.state.value
        }
        if (this.state.value !== ''){
        this.setState({
            count : this.state.count + 1,
        });

        this.setState({
            todos : this.state.todos.concat(obj)
        })
    }
    }
    onChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    
  render() {
    const todolist = this.state.todos.map(
        (todo,index) => (
            <li key = {index}>{todo.name}
            <button>Edit</button>
            <button>Delete</button>
            </li>
        )
    )
    return (
      <div>
        <h1>Welcome to Pie Todolist</h1>
        <label>New ToDO:</label>
        <input type='text'
        placeholder = 'Enter the todo ....'
        value={this.state.value}
        onChange = {this.onChange}
        />
        <button onClick={()=>{this.addTodolist()}}>Add</button>
        <ul>{todolist}</ul>
        <p>Remaing Todos: {this.state.count}</p>
      </div>
    )
  }
}
