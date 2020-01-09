import React from 'react'

//Using JSX
/*
const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Kaustav</h1>
        </div>
    )
}
*/
//Without using JSX

const Hello = () => {
    return (
        React.createElement('div',{id:'hello' , className:'dummyClass'},
        React.createElement('h1',null,'Hello Kaustav'))
    )
}    
    
export default Hello;

//Always try to use JSX