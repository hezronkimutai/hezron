import React, { Component } from 'react';
import Todos from './components/pages/Todos';
// import GoogleSignIn from './components/GoogleSignIn';
import AddTodo from './components/pages/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Articles from './components/pages/Articles';
import AddArticles from './components/pages/AddArticles';
import Videos from './components/pages/Videos';
import Photos from './components/pages/Photos';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'


const API = 'AIzaSyBRsK1vCzRHXrFKj2X_tYkhnQuIvR_qOVw'
const channelID = 'UCRAPKD2VxfVTvpd2esbCzfg'
const result = 10
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`



class App extends Component {

  state = {
    todos: [],
    resultyt: [],
    articles:[]
  }
  componentDidMount() {
    // axios.get('https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@aaron.klaser')
    // .then(med => this.setState({ articles: med.data }))
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))


    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ articles: res.data }))


    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson)=>{
      const resultyt = responseJson.items.map(obj => 'https://www.youtube.com/embed/'+obj.id.videoId);
      this.setState({resultyt});
    })

    .catch((error) => {
      console.error(error);
    });

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
    // console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
      <div className='container'>
      <Header />

      <Route exact path='/articles' render={props =>(
        <React.Fragment>
          <Articles articles={this.state.articles}/>
        </React.Fragment>
      )} />
      <Route exact path='/todos' render={props =>(
        <React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />
      <Route exact path='/videos' render={props =>(
        <React.Fragment>
          <Videos resultyt={this.state.resultyt}/>
        </React.Fragment>
      )} />

      <Route exact path='/' component={Home}/>
      <Route exact path='/addarticles' component={AddArticles}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/photos' component={Photos}/>

      </div>
      </div>
      </Router>
    );
  }
}


export default App;
