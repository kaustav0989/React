import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           <button onClick={() => props.GreetHandler('child')}>Click Parent</button> 
        </div>
    )
}

export default ChildComponent
