import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component{

    componentWillMount(){
        this.props.moviesList()
    }
    render(){
        return(
            <div>Redux App </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        moviesData:state.movies
    }
}
export default connect(mapStateToProps,actions)(App);