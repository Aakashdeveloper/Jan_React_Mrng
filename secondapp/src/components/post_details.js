import React, {Component} from 'react';

class PostDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div class="panel panel-success">
                <div class="panel-heading">Details Heading</div>
                <div class="panel-body">Details Content for  {this.props.match.params.id}</div>
            </div>
        )
    }
}

export default PostDetails;