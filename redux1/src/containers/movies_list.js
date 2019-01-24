import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MoviesList extends Component{

    componentWillMount(){
        this.props.moviesList();
    }

    renderList = (moviesData) => {
        if(moviesData){
            return moviesData.map((data)=> {
                return(
                    <div>
                        <h1>{data.name} </h1>
                    </div>
                )
            })
        } 
    }
    render(){
        return(
            <div>
                {this.renderList(this.props.moviesData)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        moviesData:state.movies
    }
}
export default connect(mapStateToProps,actions)(MoviesList);