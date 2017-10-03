import React, { Component } from 'react';


class Form extends Component {
    
    constructor(){
        super();
        
        //set state variables to empty fields during initialization
        this.state = {
            title: "",
            image: "",
            ingredients: '\n',
            directions: "",
            
            
            //display variables
            dataEntered: false,
            displayTitle: "",
            displayImage: "",
            displayIngredients: '\n',
            displayDirections: ""
            
        };
        
        //bind custom functions to this object
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeIngredients = this.changeIngredients.bind(this);
        this.changeDirections = this.changeDirections.bind(this);
        
        
    }
    
    render(){
        
        if (!this.state.dataEntered){
            return (
        
                <form>
                <br/><br/>
                Title<br/> 
                <input type="text" name="Title" value={this.state.title} onChange={this.changeTitle}/>
                <br/><br/>
                Image:<br/>
                <input type="text" name="Image" placeholder="URL" value={this.state.url} onChange={this.changeImage}/>
                <br/><br/>
                Ingredients: <br/>
                <textarea name="Ingredients" rows="10" cols="50" value={this.state.ingredients} onChange={this.changeIngredients}/>
                <br/><br/>        
                Directions: <br/>
                <textarea name="Directions" rows="10" cols="50" value={this.state.directions} onChange={this.changeDirections}/>
                <br/><br/>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>     
            )
        }
        else {
            return (
        
                <form>
                <br/><br/>
                Title<br/> 
                <input type="text" name="Title" value={this.state.title} onChange={this.changeTitle}/>
                <br/><br/>
                Image:<br/>
                <input type="text" name="Image" placeholder="URL" value={this.state.url} onChange={this.changeImage}/>
                <br/><br/>
                Ingredients: <br/>
                <textarea name="Ingredients" rows="10" cols="50" value={this.state.ingredients} onChange={this.changeIngredients}/>
                <br/><br/>        
                Directions: <br/>
                <textarea name="Directions" rows="10" cols="50" value={this.state.directions} onChange={this.changeDirections}/>
                <br/><br/>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
                
                    <br/>
                    <br/>
                    <br/>
          <div>
            <h3>{this.state.displayTitle}</h3><br/>
            <img src={this.state.displayImage} alt={this.state.displayTitle}/><br/><br/>
            <p>
                <h5>Ingredients</h5>
                <span>{this.state.displayIngredients}</span>
            </p>
            <p>
                <h5>Directions</h5>
                <span>{this.state.displayDirections}</span><br/>
            </p>
            
          </div>
        </form>     
            )
            
            
        }
        
    }
    
    //on submit, change state display values to show previously input text
    handleSubmit(){
        this.setState({displayTitle: this.state.title});
        this.setState({displayImage: this.state.image});
        this.setState({displayIngredients: this.state.ingredients});
        this.setState({displayDirections: this.state.directions});
        
        //boolean state value will change the manner in which the form is displayed
        this.setState({dataEntered: true});
    }
    
    
    //functions to handle data changes
    changeTitle(data){
        this.setState({title: data.target.value});
    }
    
    changeImage(data){
        this.setState({image: data.target.value});
    }
    
    changeIngredients(data){
        this.setState({ingredients: data.target.value});
    }
    
    changeDirections(data){
        this.setState({directions: data.target.value});
    } 
}

export default Form;