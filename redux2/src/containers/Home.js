import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

//actions
import {latestNews} from '../actions';

//component
import LatestNews from '../components/home/Latest'

class Home extends Component{

    render(){
        return(
            <div>
                <LatestNews articleData={this.props.articleList}/>
            </div>
        )
    }

    componentDidMount(){
        this.props.latestNews();
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        articleList: state.articles
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}


export default connect(mapStateToProps,mapDisptachToProps)(Home);  

