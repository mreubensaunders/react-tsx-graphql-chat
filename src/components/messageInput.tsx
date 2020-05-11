import React, { useState, useCallback, useEffect } from 'react';
import Alert from '../components/alert'

import { useMutation } from 'urql';


interface IProps {
    username: string;
}

const MsgMutation = `
mutation($from: String!, $message: String!) {
    sendMessage(from: $from, message: $message) {
    id
  }
}`;

function changeImage (val: number) {
    return String('')
}

function isEmpty (str : string) : Boolean {
    return (!str || /^\s*$/.test(str));
}

export default function MessageInput(props : IProps){
    
    const [message, setMessage] = useState("")
    const [res, executeMutation] = useMutation(MsgMutation);    

    const handleClick = () : void => { 
        if(!isEmpty(message)) { 
        executeMutation({ from: props.username, message: message });
        setMessage("");
        }
    }  

    const keyPress = (e : any) : void => {
        if(e.keyCode == 13) {
            handleClick();
        }
    }

    if(res.error)    
        return <Alert message={res.error}/>;

    return(
        <>            
        <div className="rs-container">
        <input className="wish-input rs-text" value={message} 
        onChange={(e) => {setMessage(e.target.value)}} placeholder="type your stuff here..."
        onKeyDown={e => keyPress(e)}
        />
                {/* <input onChange={(e) => {setMessage(e.target.value)}}/> */}
            <div className="input-btn" onClick={() => {handleClick()}}></div>
        </div>
        </>

        // <div hidden={hide} onMouseOver={() => {setHide(true)}} onMouseLeave={() => {setHide(false)}}>
        //     {props.val}
        // </div>
    )
}