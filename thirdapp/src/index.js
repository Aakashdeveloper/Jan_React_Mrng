import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artist';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:artistId" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));