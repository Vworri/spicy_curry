/**
 * Created by DragonQueen on 4/6/17.
 */

import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, Form, Col, ControlLabel, Button} from 'react-bootstrap';

class AddRecForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: undefined,
            recipeDescription: undefined,
            ingredientsList: undefined,
            directions: undefined,
        };
        this.handleRecipeName = this.handleRecipeName.bind(this);
        this.handleRecipeDescription = this.handleRecipeDescription.bind(this);
        this.handleIngredientsList = this.handleIngredientsList.bind(this);
        this.handleDirections = this.handleDirections.bind(this);
        this.submitRecipe = this.submitRecipe.bind(this);
    }
    handleRecipeName(e) {
        this.setState({recipeName: e.target.value})
    };

    handleRecipeDescription(e) {
        this.setState({recipeDescription: e.target.value})
    }

    handleIngredientsList(e) {
        this.setState({ingredientsList: e.target.value})
    }

    handleDirections(e) {
        this.setState({directions: e.target.value})
    }

    render() {
        return (

            <div className="addRecipeForm" ref="addForm">
                <h1>Add Recipe</h1>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Recipe Name
                        </Col>
                        <Col sm={6}>
                            <FormControl onChange={this.handleRecipeName} name="recipe_name" type="text"
                                         placeholder="Spicy Curry"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Description
                        </Col>
                        <Col sm={6}>
                            <FormControl onChange={this.handleRecipeDescription} name="recipe_description" type="text"
                                         placeholder="Savory Dish with a kick"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Ingredients
                        </Col>
                        <Col sm={6}>
                            <FormControl onChange={this.handleIngredientsList} name="recipe_ingredients" type="text"
                                         placeholder="chicken: 1lb"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={10}>
                            Directions
                        </Col>
                        <Col sm={10}>
                            <FormControl onChange={this.handleDirections} name="recipe_ingredients" type="text"
                                         placeholder="1. Gather ingredients and prehear oven to 350"/>
                        </Col>
                    </FormGroup>
                    <Button type="submit" onClick={this.submitRecipe}>Add Recipe</Button>
                </Form>
            </div>)
    }

    submitRecipe() {
        let recipeList = [];
        if (JSON.parse(localStorage.getItem('recipe')) === null){
            console.log('local storage for recipes is empty')
        }
        else {
            recipeList = (JSON.parse(localStorage.getItem('recipe')));
        }
        recipeList.push(this.state);
        console.log(this.state);
        localStorage.setItem('recipe',JSON.stringify(recipeList));


    }

}
export default AddRecForm