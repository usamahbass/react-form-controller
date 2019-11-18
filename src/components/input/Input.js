import React from 'react'
import Proptypes from "prop-types"

const Input = ( { name, type, onChange, value, placeholder, id} ) => {
    return (
        <div>
            <input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} id={id}/>
        </div>
    )
}

Input.Proptypes = {
    name : Proptypes.string,
    type : Proptypes.string,
    onChange : Proptypes.func.isRequired,
    value : Proptypes.string,
    placeholder : Proptypes.string,
    id : Proptypes.string
};

export default Input;
