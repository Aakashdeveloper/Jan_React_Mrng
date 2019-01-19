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
            artist:''
        }
    }
    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList artistData={this.state.artist}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(URL_ARTISTS,{method:'GET'})
            .then((response) => (response.json()))
            .then(data => {
                this.setState({artist:data})
            })
    }
}

export default Home;




