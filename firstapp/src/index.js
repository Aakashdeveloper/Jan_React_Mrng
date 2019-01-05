import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './dashboard';

const App = () => {
    return(
        <div>
            <h1> Welcome To React</h1>
            <Dashboard/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))