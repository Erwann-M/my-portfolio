import { useDispatch, useSelector } from 'react-redux';
import { toggleMaximize, toggleReactionGame } from '../../action';

//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import icon from "../../assets/icons/chrono.png";
import close from "../../assets/icons/close.png";
import './styles.scss';
import { NavLink } from 'react-router-dom';

const ReactionGame = () => {

  const { maximizeToggled } = useSelector(state => state)

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleReactionGame());
  }

  const handleClickMaximize = () => {
    dispatch(toggleMaximize());
  }

  return (
    <div className={"browser " + (maximizeToggled && "active")}>

      <div className="browser__title-bar">
        <div className="browser__title-bar__left">
          <img className="browser__title-bar__left__icon" src={icon} alt="icone navigateur" />
          <h2 className="browser__title-bar__left__title">Reaction Game</h2>
        </div>
        <div className="browser__title-bar__right">
          <img className="browser__title-bar__right__icons" src={minimize} alt="" />
          <img className="browser__title-bar__right__icons" src={maximize} alt="" onClick={handleClickMaximize} />
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="browser__title-bar__right__icons browser__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>

      <div className="browser__content">
        <iframe className="browser__content__web-page" title='Reaction Game' src="https://reaction-test.erwann-martin.fr/" >
        </iframe>
      </div>
    </div>
  )
};

export default ReactionGame;
