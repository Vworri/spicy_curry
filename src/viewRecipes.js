/**
 * Created by DragonQueen on 4/6/17.
 */
import React, {Component} from 'react';
import './App.css';
require('react-bootstrap');




class ViewRecipes extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipes : this.props.recipes
        }
    }
    render(){
        const recipieItem = this.state.recipes.map((recipe =>
        <li key={recipe.id}>{recipe.recipeName}</li>));
        return recipieItem;
    }

}


export default ViewRecipes