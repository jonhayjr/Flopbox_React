const ActorDisplay = ({actor, index, addToFavoriteActors}) => {

    const handleActorClick = () => {
        addToFavoriteActors(actor);
    }

    return (
       <li className="bg-dark text-light p-3 rounded mb-2" onClick={handleActorClick}>{index + 1}. {actor.name}</li>
    )
}

export default ActorDisplay
