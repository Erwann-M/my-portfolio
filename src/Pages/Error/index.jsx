import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementErrorCounter } from '../../action';
import './styles.scss';

const Error = () => {

  const dispatch = useDispatch();

  const {errorCounter} = useSelector(state => state);
  
  useEffect(
    () => {
      setInterval(() => {
        dispatch(incrementErrorCounter());
      },2000)
  });

  return (
    <div className="error">
      <div className="error__container">
        <p className="error__container__logo">:&#40;</p>
        <p className="error__container__text">Oups ! Il semblerait qu'il y ait eu un problème dû à un bidouillage de l'URL. Vous allez être redirigés quand les erreurs auront été réglées. Veuillez patienter pendant la restauration du système.</p>
        <p className="error__container__counter">{errorCounter}% Completé</p>
        <p className="error__container__name">URL_HACKING_TEST</p>
        <p className="error__container__name">Code: 0x0000000404</p>

      </div>
    </div>
  )

};

export default Error;
