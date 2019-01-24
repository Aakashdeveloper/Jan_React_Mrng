import React, {Component} from 'react';
import { connect } from 'react-redux';

import LatestNews from '../components/home/Latest'

class Home extends Component{
    render(){
        return(
            <div>
                <LatestNews/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return(

    )
}

function mapDisptachToProps(){

}


export default connect(mapStateToProps,mapDisptachToProps)(Home);  

