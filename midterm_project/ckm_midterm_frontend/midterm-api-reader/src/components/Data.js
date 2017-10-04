import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

var headers = {
            'Content-Type': 'application/vnd.api+json',
            'Authorization': 'application/vnd.api+json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'DELETE'
    
        }

class Data extends Component{
    
    constructor() {
        super();
        this.state = {
            
            title: '',
            image: '',
            system: '',
            players: '',
            description: '',
            
            data: [],
            query: ''
        };
        
        //bind functions that initiate changes to the object
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.changeTitle = this.changeTitle.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeSystem = this.changeSystem.bind(this);
        this.changePlayers = this.changePlayers.bind(this);
        this.changeDescription = this.changeDescription.bind(this);

    }
    
    handleChange(event){
        this.setState({query: event.target.value});
    }
    

    //execute after component mounts successfully
    componentDidMount(){

        var api = "http://localhost:3000/games";
        //var api = "http://192.168.1.117:3001/games";
        
        axios.get(api, {
            headers: { 'Content-Type': 'application/vnd.api+json',
                       'Accept': 'application/vnd.api+json'
                       }
        })
        .then((response) => {
            var results = response.data.data;
    
            console.log(response.data.data);//DEBUGGING
            
            this.setState({
                data: results,
            });
        })
        
        
    }
    
    //render data from API
    renderData(obj){
        
        //console.log(obj);//DEBUG
        
        
        //in case image gets removed
        if (obj.attributes.image == null){
            return(
                
                
                <Col key={obj.id} xs={12} sm={6} md={4}>
                    <Thumbnail src="" alt={obj.attributes.title}>
                        <h4>{obj.attributes.title}</h4>
                        <p>{obj.attributes.system}</p>
                        <p>{obj.attributes.players}</p>
                        <p>{obj.attributes.description}</p>
                        
                        <button onClick={() => this.deleteItem(obj.id)}>DELETE</button>
                    </Thumbnail>
                    
                    
                </Col>
            
            );
            
        } else {
            return(
                <Col key={obj.id} xs={12} sm={6} md={4}>
                    <Thumbnail src={obj.attributes.image} alt={obj.original_title}>
                        <h4>{obj.attributes.title}</h4>
                        <p>{obj.attributes.system}</p>
                        <p>Players: {obj.attributes.players}</p>
                        <p>{obj.attributes.description}</p>
                        
                        <button onClick={() => this.deleteItem(obj.id)}>DELETE</button>
                    </Thumbnail>
                </Col>
            );
        }
        
    }
    
    deleteItem(id){
        console.log("Deleting item with id of "+id);
        var api = "http://localhost:3000/games/"+id;
        
        axios.delete(api, {
            headers: { 'Content-Type': 'application/vnd.api+json',
                       'Accept': 'application/vnd.api+json',
                       'Access-Control-Allow-Origin': '*',
                       'Access-Control-Allow-Headers': 'Content-Type',
                       'Access-Control-Allow-Methods': 'DELETE'
                       },
            data: { type: 'games', ids: id }
//        
//        var data = {
//            'type': 'games',
//            'ids': id
        }
//        
//        axios.delete(api, data, headers);

    
    )};
    
    componentWillUnmount(){
        this.serverRequest.abort();
    }
    
    //display data to screen
    render(){
        return(
        
            <Grid>
                <h1>Colin's Game Database</h1>
                <Thumbnail>
                <h3>Add a new game</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" name="name" value={this.state.title} onChange={this.changeTitle} />
                    </label><br/>
                    <label>Image (URL):
                        <input type="text" name="name" value={this.state.image} onChange={this.changeImage} />
                    </label><br/>
                    <label>System:
                        <input type="text" name="name" value={this.state.system} onChange={this.changeSystem}/>
                    </label><br/>
                    <label>Number of players:
                        <input type="text" name="name" value={this.state.players} onChange={this.changePlayers}/>
                    </label><br/>
                    <label>Description:
                        <input type="text" name="name" value={this.state.description} onChange={this.changeDescription}/>
                    </label><br/>
                    <input type="submit" value="CREATE ENTRY" />
                </form>
                </Thumbnail>
                
                <Row>
                    {this.state.data.map((obj) => this.renderData(obj))}
                </Row>
            </Grid>
            
            
        );
    }
    
    //functions to handle data changes
    changeTitle(data){
        this.setState({title: data.target.value});
    }
    
    changeImage(data){
        this.setState({image: data.target.value});
    }
    
    changeSystem(data){
        this.setState({system: data.target.value});
    }
    
    changePlayers(data){
        this.setState({players: data.target.value});
    } 
    
    changeDescription(data){
        this.setState({description: data.target.value});
    } 
    
    handleSubmit(){
        console.log(this.state.title);
        console.log(this.state.image);
        console.log(this.state.system);
        console.log(this.state.players);
        console.log(this.state.description);
        
        console.log("Creating item...");
        
        var data = {
            'title': this.state.title,
            'image': this.state.image,
            'system': this.state.system,
            'players': this.state.players,
            'description': this.state.description
            
        }
        
        axios.post('http://localhost:3000/games/', data, headers).then((response) => {
                alert("item added!");
            })
            .catch((error) => {
                alert("item not added!");
            })
//        axios.post('http://localhost:3000/games/', {
//            headers: { 'Content-Type': 'application/vnd.api+json',
//                       'Accept': 'application/vnd.api+json'},
//            data: {
//                type: 'games',
//                attributes: {
//                    title: this.state.title,
//                    image: this.state.image,
//                    system: this.state.system,
//                    players: this.state.players,
//                    description: this.state.description
//                }
//            }
//        }).then((response) => {
//            alert("item added!");
//            var results = response.data.data;
//    
//            console.log(response.data.data);//DEBUGGING
            
//            this.setState({
//                data: results,
//            });
//        })
//        
    }
    
};

export default Data;
