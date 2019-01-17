import React, {Component} from 'react';

//Component
import Banner from './Banner';

// URL
const URL_ARTISTS = 'http://localhost:8900/artists';

class Home extends Component{
    render(){
        return(
            <div>
                <Banner/>
            </div>
        )
    }
}

export default Home;