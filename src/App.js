import { Component } from 'react';
import { CardList }  from './component/card-list/Card-list.component'
import './App.css';
import {SearchField}  from './component/search-box/search-box.component';



class App extends Component{
    constructor(){
        super();

        this.state = {
            monsters: [],
            searchField:''
        };

    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
}

handleChange = (e) => {
    this.setState({ searchField: e.target.value })
}

    render(){
            const { monsters, searchField } = this.state;
            const filteredMosters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )

        return(
            <div className="App">
            <h1>Mosters Rolodex</h1>
            <SearchField 
                placeholder='search mosters'
                handleChange={this.handleChange}
            />
                <CardList monsters={filteredMosters}  />
            </div>
        )
    }
}

export default App;
