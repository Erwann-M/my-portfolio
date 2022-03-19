import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleDefender } from '../../action';
//--------------------image------------------------------
import icon from "../../assets/icons/defender.png";
import close from "../../assets/icons/close.png";
import defender from "../../assets/img/defender.png";
import './styles.scss';

const Defender = () => {

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleDefender());
  }


  return (
    <div className="defender">

      <div className="defender__title-bar">
        <div className="defender__title-bar__left">
          <img className="defender__title-bar__left__icon" src={icon} alt="icone navigateur" />
          <h2 className="defender__title-bar__left__title">Anti-virus</h2>
        </div>
        <div className="defender__title-bar__right">
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="defender__title-bar__right__icons defender__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>

      <div className="defender__content">
        <div className="defender__content__container">
          <h2 className="defender__content__container__title">Vous êtes protégés</h2>
          <img className="defender__content__container__image" src={defender} alt="" />
        </div>
      </div>
    </div>
  )
};

export default Defender;
