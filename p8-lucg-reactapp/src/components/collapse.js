import React from 'react';
import arrow from '../assets/images/arrow-back-ios-24-px-2.png';

function Collapse({title,content}){
    
    const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);
    
    const handleClick = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
        console.log('lol')
    };
    
    return(<div className='collapseparent'>
        <div className='collapse'>
        <p className='collapsetitle'>{title}</p>
        <img className={`arrow ${isDescriptionOpen ? 'open' : ''} arrowimage`} src={arrow} alt='Arrow to open and close' onClick={handleClick}></img>
        </div>
        <div className={`description ${isDescriptionOpen ? 'open' : ''} collapsecontent`}>
        <p>{content}</p> 
        </div>
        

    </div>
    )

}

export default Collapse;