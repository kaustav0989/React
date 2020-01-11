//Example of eventhandler using function component

import React from 'react'

function FunctionClick() {
    
    function clickHandler()
    {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClick

//Eventhandler is a function not a function call that's why no need to give parenthesis.