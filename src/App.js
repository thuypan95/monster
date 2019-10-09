import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[
      ],
      searchField:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }
  handleChange(e){
    this.setState({searchField: e.target.value});
  }
  render(){
    const {monsters, searchField} = this.state;
    const filterMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox 
          handleChange={this.handleChange}
        />
        {
          filterMonster.length>0
          ?
          <CardList monster={filterMonster}/>
             
          :
          <div>No Result</div>
        }
       
      </div>
    );
  }
}

export default App;
