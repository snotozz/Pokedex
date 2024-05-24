function Card({name}){
    return(
    <div className="column is-one-quarter">
    
    <div className="card">
    <div className="card-image">
    <figure className="image is-4by3">
    
    <img
    
    src={`https://pokeapi.co/api/v2/${name}`}
    
    />
    </figure>
    </div>
    <div className="card-content">
    <div className="media">
    <div className="media-content">
    {name}
    <p className="title is-4"> </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
    }
    
    export default Card