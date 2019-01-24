import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// container
import Home from '../containers/Home';

//components
import Header from './Header';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <div>
                        <Route exact path="/" component={Home}/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;