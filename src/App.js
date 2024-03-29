import React, { Component } from 'react';
import Body from './components/Layout';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'




class App extends Component {

  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))

  }
  markComplete = (id) => {
    this.setState({
      todos:this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

  }
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));

  }



  render() {

    return (
      <Router>
      <div className="App">
      <div className='container'>
      <Body />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
