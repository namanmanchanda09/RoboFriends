import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField} from '../actions.js'

const mapStateToProps = (state) =>{
    return{
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}




class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{ return response.json();})
        .then(users=>{this.setState({robots:users})
        })
    }


    render(){

        const {robots} = this.state
        const {searchField, onSearchChange} = this.props
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        });

        if(this.state.robots.length===0){
            return(<h1>Loading</h1>)
        }else{

        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                    
                </Scroll>

            </div>

        );

        }


    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);



