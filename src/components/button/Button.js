import React from 'react'
import Proptypes from 'prop-types'
import './Button.css'

const Button = ( {type, onClick} ) => {
    return (
        <div>
            <button className="btn masuk" type={type} onClick={onClick}>Masuk</button>
        </div>
    )
}

Button.Proptypes = {
    type : Proptypes.string,
    onClick : Proptypes.func.isRequired
}

export default Button
