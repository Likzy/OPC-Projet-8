

function LodgingCard(props){
    const logement = props.logement
    return(<div className="lodgingcard">
        <img className="lodgingcover" src={logement.cover} alt={logement.title}></img>
        <div className="shadowcover"></div>
        <p className="lodgingtitle">{logement.title}</p>
    </div>)
};


export default LodgingCard;