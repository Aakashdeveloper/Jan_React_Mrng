import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// container
import Home from '../containers/Home';
import Details from '../containers/NewsDetails';
import GalleryItem from '../containers/GalleryItem';
import FormComponent from '../containers/FormComponent';


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
                        <Route exact path="/news/:id" component={Details}/>
                        <Route exact path="/galleries/:id" component={GalleryItem}/>
                        <Route exact path="/form" component={FormComponent}/>
                    </div>
                    <br/><br/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;