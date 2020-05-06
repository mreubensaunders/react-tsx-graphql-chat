import React, { useState, useCallback, useEffect } from 'react';

import img1 from '../style/kimchi.jpg'
import img2 from '../style/ader.jpeg'
import img3 from '../style/setup.jpg'
import img4 from '../style/hype.jpg'

interface IProps {
    val: string;
}

function changeImage (val: number) {
    return String('')
}

export default function Dynamic(props : IProps){
    
    const [pos, setPos] = useState(0)

    const colour = ['purple', 'blue', 'green', 'white']
    const images = [img1, img2, img3, img4]

    const changeImage = (val: number) => {
        return String('')
    }

    return(
        <>            
            <div className="canvas" onMouseLeave={() => {setPos(3)}}>
            <img src={images[pos]} />
                <div className="canvas-seg" onMouseOver={() => {setPos(0)}}></div>
                <div className="canvas-seg" onMouseOver={() => {setPos(1)}}></div>
                <div className="canvas-seg" onMouseOver={() => {setPos(2)}}></div>
            </div>
        </>

        // <div hidden={hide} onMouseOver={() => {setHide(true)}} onMouseLeave={() => {setHide(false)}}>
        //     {props.val}
        // </div>
    )
}