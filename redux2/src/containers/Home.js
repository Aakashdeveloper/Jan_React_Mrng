import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

//actions
import {latestNews, OtherNewsAction,GalleryAction} from '../actions';

//component
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';
import Gallery from '../components/home/Gallery';

class Home extends Component{

    render(){
        return(
            <div>
                <LatestNews articleData={this.props.articleList.latest}/>
                <OtherNews  otherData={this.props.articleList.other}/>
                <Gallery galleryData={this.props.galleryList.gallery}/>
            </div>
        )
    }

    componentDidMount(){
        this.props.latestNews();
        this.props.OtherNewsAction();
        this.props.GalleryAction()
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        articleList: state.articles,
        galleryList: state.gallery
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({latestNews,OtherNewsAction,GalleryAction},dispatch)
}


export default connect(mapStateToProps,mapDisptachToProps)(Home);  

