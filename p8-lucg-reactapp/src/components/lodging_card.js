import { Link } from "react-router-dom";

function LodgingCard(props){
    const logement = props.logement
    return (
        <div className="lodgingcard">
          <Link to={`/logement/${logement.id}`} >
            <img className="lodgingcover" src={logement.cover} alt={logement.title} />
            <div className="shadowcover"></div>
            <p className="lodgingtitle">{logement.title}</p>
          </Link>
        </div>
      );
};


export default LodgingCard;