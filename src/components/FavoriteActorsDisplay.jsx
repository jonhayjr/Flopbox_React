const FavoriteActorsDisplay = ({index, favActor, favoriteActors}) => {
    const getActorClasses = () => {
        if (favoriteActors && index === favoriteActors.length - 1 ) {
            return 'text-danger';
        } else if (favoriteActors && index % 2 === 0) {
            return 'text-success';
        } else if (favoriteActors && index % 2 !== 0) {
            return 'text-info'
        } else {
            return ''
        }
    }
    return (
        <li className={getActorClasses()}>{index + 1}. {favActor.name}</li>
    )
}

export default FavoriteActorsDisplay
