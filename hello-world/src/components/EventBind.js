import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello"
        }

        //The constructor approach is the best.
        //this.ClickMessage = this.ClickMessage.bind(this); 
    }

    /*
    ClickMessage()
    {
        this.setState({
            message : "Good Bye"
        })
    }*/

    //Another good approach is to defining class property as an arrow function

    ClickMessage = ()=>
    {
        this.setState({
            message: "Goodbye"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.ClickMessage.bind(this)}>Click</button>*/}
                {/*<button onClick={() => this.ClickMessage()}>Click</button> //this is the best method when we need to pass arguments// */}
                <button onClick={this.ClickMessage}>Click</button>
            </div>
        )
    }
}

export default EventBind
