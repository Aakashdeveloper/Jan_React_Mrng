import React, {Component} from 'react';

//Component
import Banner from './Banner';
import ArtistsList from './ArtistsList';

// URL
const URL_ARTISTS = 'http://localhost:8900/artists';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists:'....loading'
        }
    }
    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList artsistData ={this.state.artists}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(URL_ARTISTS,{method:'GET'})
            .then((response) => (response.json()))
            .then(data => {
                this.setState({artists:data})
            })
    }
}

export default Home;