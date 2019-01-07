import React from 'react';
import ReactDOM from 'react-dom';

//Component
import Header from './components/header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1> Welcome To React</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))