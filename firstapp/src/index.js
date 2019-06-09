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
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        
        console.log(">>>>",keywords)
        let filtered = this.state.news.filter((item)=>{
            return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1
        })

        this.setState({filtered:filtered })
    }

    render(){
        return(
            <div>
                <Header newsSearch={(data)=>{this.filterNews(data)}}/>
                <NewsList newsData={this.state.filtered}/>
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