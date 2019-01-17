import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Posts extends Component{
    render(){
        return(
            <div class="panel panel-danger">
                <div class="panel-heading">Posts Heading</div>
                <div class="panel-body">
                            Posts Content
                    <br/>
                    <Link to="/posts/1">First Post</Link>
                    <br/>
                    <Link to="/posts/2">Second Post</Link>
                </div>
           </div>
        )
    }
}

export default Posts;