import React from 'react'

const Validation=(props)=>{
    return(
        
            props.inputlength>5?
            <p>Text long enough</p>:<p>text too short</p>
        
    )
}

export default Validation