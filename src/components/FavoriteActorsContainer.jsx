const FavoriteActorsContainer = ({children}) => {
    return (
       <div>
            <b>My Favorite Actors</b>
            <ul className="list-unstyled">
                {children}
            </ul>
        </div>
    )
}

export default FavoriteActorsContainer
