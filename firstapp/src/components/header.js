import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'React App',
            search:'Enter your text'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({'search':event.target.value})
    }
    render(){
        return(
            <header>
                <div className="logo"
                      onClick={()=>{console.log("hiiii")}}>
                    {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.search}</p>
                </center>
            </header>
        )
    }
}

export default Header;



/*
const Header = () => {
    return(
        <div>
            Header
        </div>
    )
}

const styles = {
            header:{
                backgroundColor:'tomato'
            },
            logo:{
                textAlign:'center',
                color:'#fff',
                fontSize:'30px'
            }
        }
        
        return(
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <center>
                    <input/>
                </center>
            </header>
        )
*/
