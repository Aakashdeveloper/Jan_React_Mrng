import React, {Component} from 'react';
import { connect} from 'react-redux';
import { handleLikes} from '../actions';
import { bindActionCreators} from 'redux';


class LikeCounter extends Component{

    addLikes = (action) => {
        const props = this.props;
        const newLikes = action === 'ADD' ? [props.likes +1,props.dislikes]:[props.likes,props.dislikes+1]
        this.props.handleLikes(newLikes,props.articleId)
    }

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How Do you Feel?</h3>
                <div className="addlikes-container">
                    <div className="btn like"
                    onClick={() => this.addLikes('ADD')}>
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislike"
                    onClick={() => this.addLikes('REMOVE')}>
                    <div className="hits">{this.props.dislikes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(){
    return bindActionCreators({handleLikes},dispatch)
}

export default connect(null,mapDispatchToProps)(LikeCounter);