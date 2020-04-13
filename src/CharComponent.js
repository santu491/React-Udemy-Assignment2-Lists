import React, { Component } from "react";


const CharComponent = ({ textData,deleteCharacter }) => {

    return (
        <div>
            {
               textData && textData.length > 0 ?
                    <div>
                       { textData.map((c,index)=><p style={style}
                       onClick={()=>deleteCharacter(index)}
                       key={index}
                       >{c}</p>)}
                    </div> :
                    <div></div>
            }
        </div>
    )

}
const style={
    display: "inline-block",
    margin:"5px",
    textAlign: "center",
    border:"1px solid black",
    padding:"6px"
}

export default CharComponent
