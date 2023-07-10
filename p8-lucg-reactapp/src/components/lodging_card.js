

function LodgingCard({image,title}){
    return(<div className="lodgingcard">
        <img className="lodgingcover" src={image} alt="Lodging"></img>
        <p className="lodgingtitle">{title}</p>
    </div>)
};


export default LodgingCard;