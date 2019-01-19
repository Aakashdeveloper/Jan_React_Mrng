import React, {Component} from 'react';
import Header from './Header';

const URL_ARTISTS = 'http://localhost:8900/artists';

class Artist extends Component{
    constructor(props){
        super(props)

        this.state={
            detail: ''
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.detail.cover}.jpg')no-repeat`}}>
                        </span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.detail.name}</h3>
                        <div className="bio_text">
                            {this.state.detail.bio}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //localStorage.setItem('param',this.props.match.params.artistId)
        //localStorage.getItem('param')
        console.log(this.props)
        fetch(`${URL_ARTISTS}/${this.props.match.params.artistId}`,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                detail:data
            })
        })
    }
}

export default Artist;