import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Component
import Header from './components/header';
import NewsList from './components/news_list'

//Data
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList newsData={this.state.news}/>
            </div>
        )
    }   
}
    
ReactDOM.render(<App/>, document.getElementById('root'))



/*
const App = () => {
    return(
        <div>
            <Header/>
            <h1> Welcome To React</h1>
        </div>
    )
}
*/