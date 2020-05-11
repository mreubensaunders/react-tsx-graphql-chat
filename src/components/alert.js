// @flow
import React, { useState } from 'react';

//return array of 2 hex colours for alert box depending on 'type'
function getColour(type){ //<- example of flow type checking
  switch (type) {
    case "success" : return ["white", "#2cb673"];
    case "info" : return ["white", "#8fbaff"];
    case "error" : return ["white", "#fd5750"];
    default: return ["white", "#fd5750"]; // incase graphql error has no type. i.e Network errors
  }
}

export default function Alert(message) {

    const [hide, setHide] = useState(false);
    
    const colour = getColour(message.type);

    return(        
        <div hidden={hide} className="pl0 measure center mt3">
            <div className="flex items-center justify-center pa4 error relative bubble" style={{backgroundColor: colour[1]}}>     
                <div className="close" onClick={() => {setHide(true)}}><i className="fas fa-times"/></div>
                <title>error</title>                    
            <p style={{color: colour[0]}} className="lh-title error-msg">{message.message.message}</p>
            </div>
        </div>
    )
}