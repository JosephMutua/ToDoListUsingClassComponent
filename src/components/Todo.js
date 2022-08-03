import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    
      this.state = {
        todos : [],
        count : 0,
        value : '',
        editing : false,
        currentId : '',
        currentValue : ''
         
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
            todos : this.state.todos.concat(obj)
        });

        
    }
    this.setState({
        value: ''
    })
    }
    onChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    onDelete(itemid){
      console.log (itemid)
      this.setState({
        count : this.state.count - 1,
        todos : this.state.todos.filter((item,index) => {
          return index !== itemid
        })

      })
      
    }
    componentDidMount (){
      this.inputRef.current.focus()
    }
    
  render() {
    const todolist = this.state.todos.map(
        (todo,index) => (
            <li key = {index}>{todo.name}
            <button>Edit</button>
            <button onClick={()=> this.onDelete(index)}>Delete</button>
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
        ref ={this.inputRef}/>
        <button onClick={()=>{this.addTodolist()}}>Add</button>
        <ul>{todolist}</ul>
        <p>Remaing Todos: {this.state.count}</p>
      </div>
    )
  }
}
