const ActorsContainer = ({children}) => {
    return (
    <div>
         <b>All Actors</b>
        <ul className="list-unstyled">
            {children}
        </ul>
      </div>
    )
}

export default ActorsContainer
