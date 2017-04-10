import React, {Component} from 'react';
import './App.css';
require('react-bootstrap');
import AddRecForm from './addRecForm.js'
import ViewRecipes from './viewRecipes'





var recipes = (localStorage.getItem('recipe'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddRecForm/>
                <ViewRecipes recipes={recipes}/>
            </div>

        );
    }
}

export default App;
