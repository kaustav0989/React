import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked on the button")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
