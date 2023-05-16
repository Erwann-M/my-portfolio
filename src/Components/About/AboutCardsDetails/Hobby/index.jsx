import { useDispatch, useSelector } from 'react-redux';
import { toggleHobby } from '../../../../action';
import './styles.scss';

const Hobby = () => {

  const { hobbyToggled } = useSelector(state => state);
  
  const dispatch = useDispatch();
  
  const handleClickHobby = () => {
    dispatch(toggleHobby());
  }
  
  return (
    <div className={"hobby " + (hobbyToggled && "active")} onClick={handleClickHobby}>

      <div className="hobby__container guitar">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Guitare
          </p>
        </div>
      </div>

      <div className="hobby__container video-game">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Jeux vidéos
          </p>
        </div>
      </div>

      <div className="hobby__container programming">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Programmation
          </p>
        </div>
      </div>

      <div className="hobby__container crypto">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            blockchain et cryptomonnais
          </p>
        </div>
      </div>

      <div className="hobby__container board-game">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Jeux de plateau
          </p>
        </div>
      </div>

      <div className="hobby__container smart-home">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Domotique
          </p>
        </div>
      </div>

      <div className="hobby__container travel">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Voyages
          </p>
        </div>
      </div>

      <div className="hobby__container martial-art">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Arts martiaux
          </p>
        </div>
      </div>

      <div className="hobby__container electronic">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Électronique
          </p>
        </div>
      </div>

      <div className="hobby__container robotic">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Robotique
          </p>
        </div>
      </div>

      <div className="hobby__container printer">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Impression 3D
          </p>
        </div>
      </div>

      <div className="hobby__container ia">
        <div className="hobby__container__effect">
          <p className="hobby__container__text">
            Intelligence artificielle
          </p>
        </div>
      </div>

    </div>
  )
};

export default Hobby;
