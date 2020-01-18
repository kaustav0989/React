import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {

        //Short-circuit operator approach if true then returns else nothing
        return this.state.isLoggedIn && <div>Hello Kaustav</div>

        //ternary operator approach, this is the best approach
        /* return this.state.isLoggedIn ? (
            <div>Hello Kaustav</div>
        ) : ( <div>Hello Guest</div> ) */

        //Variable element approach
        /* let message;
        if(this.state.isLoggedIn){
            message = <div>Hello Kaustav</div>
        }
        else{
            message = <div>Hello Guest</div>
        } 
        return <div>{message}</div>*/

        /* if(this.state.isLoggedIn){
            return (
                <div>
                    Hello Kaustav
                </div>
            )    
        }
        else{
            return (
                <div>
                    Hello Guest
                </div>
            )    
        } */
    }
}

export default UserGreeting
