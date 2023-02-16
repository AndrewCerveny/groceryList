

import './App.css';
import React, {Component} from 'react';
import Header from '../Header/Header';
import Display from '../Display/Display';
import list from '../../data/mockData';
import Form from '../Form/Form';
import getGroceryData from '../../api/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list:[],
      error:''
    }
  }
  componentDidMount() {
    getGroceryData()
      .then((data) => this.setState({ list : data})) 
      .catch((err) => {this.setState({error:err.message})})
  }
  addToList = (newItem) => {
    const bodyObject = {
      method:'POST',
      body: JSON.stringify(newItem),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    return fetch('http://localhost:3001/items', bodyObject)
    .then((res) => {
      if(!res.ok){
        throw new Error ('could not post info, try again')
      }else{
       return res.json()
      }
    })
    .then((data) => this.setState({list: [...this.state.list , data] }))
    .catch((err)=> {this.setState({error: err.message})})
  }
  deleteItem =( id )=> {
    const allButMatch = this.state.list.filter((item) => item.id !== id)
    this.setState({list:allButMatch})

  }
  render() {
    return(
      <main className='App'>
        {this.state.error && <h2> {this.state.err} </h2>}
        <Header/>
        <Form addItem ={this.addToList}/>
        <Display groceries={this.state.list} deleteItem={this.deleteItem}/>
      </main>
    )
  }
}
export default App
