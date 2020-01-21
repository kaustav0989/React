import React from 'react'
import './Mystyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div className={`${className} font-xl`}>
            Stylesheets
        </div>
    )
}

export default Stylesheet;

