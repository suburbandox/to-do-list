import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

class ToDoList extends React.Component{
  constructor(props){
    super(props)
    this.state={name:"My To Do List",tasks:["eat pizza","chug soda"]}
    this.handleChange=this.handleChange.bind(this)
    this.handelClick=this.handelClick.bind(this)
    this.handelSubmit=this.handelSubmit.bind(this)
    this.handelClickIndex=this.handelClickIndex.bind(this)

  }
  handelClickIndex(index,event){
    (this[event.target.name]).bind(this)(index,event)
  }
  handleChange(event){
    (this[event.target.name]).bind(this)(event)
  }
  handelClick(event){
    (this[event.target.name]).bind(this)(event)
  }
  handelSubmit(event){
    event.preventDefault()
    (this[event.target.name]).bind(this)(event)
  }
  task(event){
    this.setState({task:event.target.value})
  }
  addItem(event){
    const item = this.state.tasks
    item.push(this.state.task)
    this.setState({tasks:item,task:''})
  }
  deleteTask(index,event){
    const items = this.state.tasks
    items.splice(index,1)
    this.setState({tasks:items})
  }
  render(){
    const tasks=(this.state.tasks).map((task,index)=>(
      <li>
        {task}<button name='deleteTask' onClick={event=>this.handelClickIndex(index,event)}>Delete</button>
      </li>
    ))
    return(
      <div className='root'>
          <h1>{this.state.name}</h1>
          <ol>
            {tasks}
            {this.state.task&&<li>{this.state.task}</li>}
          </ol>
          <form name='addTask' onSubmit={this.handelSubmit}>
            <input name='task' value={this.state.task} onChange={this.handleChange}/>
            <button name='addItem' onClick={this.handelClick}>Add</button>
          </form>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList name ="World"/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
