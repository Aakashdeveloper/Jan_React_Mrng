import React, {Component} from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectedNews, clearNews} from '../actions';

class News extends Component {

    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearNews();
    }

    renderNews = ({details}) => {
        if(details){
            return details.map((item)=>{
                return(
                    <div key={item.id}>
                        <div className="tags">
                                <span>
                                    <i className="fa fa-eye" aria-hidden="true"></i> {item.views}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i> {item.likes[0]}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down" aria-hidden="true"></i> {item.likes[1]}
                                </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img alt={item.title} src={`/images/articles/${item.img}`}/>
                        <div className="body_news">
                            {item.body}
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.newsdetail)}
            </div>
        )
    }

    
}

function mapStateToProps(state){
    console.log(state);
    return{
        newsdetail: state.articles
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({selectedNews,clearNews}, dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(News);