import {useState} from 'react';
import './App.css';

/* Import Components */
import ActorDisplay from './components/ActorDisplay';
import ActorsContainer from './components/ActorsContainer';
import FavoriteActorsDisplay from './components/FavoriteActorsDisplay';
import FavoriteActorsContainer from './components/FavoriteActorsContainer';

import {ACTORS} from './FLOP_DATA';

const App = () => {
  const [favoriteActors, setFavoriteActors] = useState([]);

  const addToFavoriteActors = (actor) => {
    /*Checks to make sure that actor wasn't already added*/
    if (favoriteActors.indexOf(actor) === -1) {
      setFavoriteActors(prev => 
        [...prev,actor]
      );
    } else {
      alert(`${actor.name} was already added to favorites.`)
    }

  }

  return (
    <div className="flopbox-container">
      <h4>Flopbox</h4>

      <FavoriteActorsContainer>
        {
          favoriteActors.map((favActor, index) => (
            <FavoriteActorsDisplay key={index} index={index} favActor={favActor} favoriteActors={favoriteActors}/>
          ))
        }
      </FavoriteActorsContainer>

      <ActorsContainer>
        {
          ACTORS.map((actor, index) => (
            <ActorDisplay key={index} index={index} actor={actor} addToFavoriteActors={addToFavoriteActors}/>
          ))
        }
      </ActorsContainer>



    </div>
  );
}

export default App;
