import React from 'react';
import arrow from '../assets/images/arrow-back-ios-24-px-2.png';

function Collapse({title,content}){
    return(<div className='collapseparent'>
        <div className='collapse'>
        <p className='collapsetitle'>{title}</p>
        <img className="arrowimage" src={arrow} alt='Arrow to open and close'></img>
        </div>
        <div className='collapsecontent'>
            <p>{content}</p>
        </div>

    </div>
    )

}

export default Collapse;