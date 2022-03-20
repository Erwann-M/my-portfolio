import './styles.scss';
import error from "../../assets/icons/Error.png";
import { useDispatch } from 'react-redux';
import { toggleError } from '../../action';

const ErrorWin = () => {

  const dispatch = useDispatch();

  const handleClickErrorWin = () => {
    dispatch(toggleError());
  }

  return (
    <div className="error-win">

      <div className="error-win__title-bar">
        <h1 className="error-win__title-bar__title">Unhandled Exception</h1>
        <p className="error-win__title-bar__quit">X</p>
      </div>

      <div className="error-win__content">

        <div className="error-win__content__container">
          <img className='error-win__content__container__image' src={error} alt="icone d'erreur" />

          <div className="error-win__content__container__description">
            <p className="error-win__content__container__text">Error Number: 0x80070725<br/>Description: Easter egg, GG!</p>
            <p className="error-win__content__container__text">Setup will now terminate.</p>
          </div>

        </div>
        <div className="error-win__content__button" onClick={handleClickErrorWin}>
          <p className='error-win__content__button__text'>OK</p>
        </div>

      </div>
    </div>
  )
};

export default ErrorWin;
