// GET DEFAULT STATE
// SET INITAL STATE
// BEFORE GET CREATED
// RENDER JSX
// AFTER COMPONENT IS MOUNTED
import React, {Component} from 'react';

class LifeCycle extends Component{
    // GET DEFAULT STATE
    constructor(props){
        super(props)

        // SET INITAL STATE
        this.state = {
            title: 'Lifecycle Hooks'
        }
    }

    // BEFORE GET CREATED
    componentWillMount(){
        console.log("before get created")
    }

    componentWillUpdate(){
        console.log('Before Update', this.state.title);
    }

    componentDidUpdate(){
        console.log("After Update", this.state.title);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('next value',nextState.title)
        if(nextState.title === this.state.title){
            return false;
        }

        return true;
    }

    // Render Jsx
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={()=>this.setState({'title':'Lifecycle Hook'})}>Click to Change</div>
            </div>
        )
    }

    // After get created
    componentDidMount(){
        console.log("after get created")
        document.querySelector('h1').style.color= 'tomato'
    }

    componentWillUnmount(){
        this.setState({
            title:''
        })
    }
}

export default LifeCycle;