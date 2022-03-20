import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//--------------------image------------------------------
import icon from "../../assets/icons/Recycle-bin.png";
import close from "../../assets/icons/close.png";
import './styles.scss';
import { toggleError, toggleTrash } from '../../action';

const Trash = () => {

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleTrash());
  }

  const handleClickEaster = () => {
    dispatch(toggleError());
  }


  return (
    <div className="trash">

      <div className="trash__title-bar">
        <div className="trash__title-bar__left">
          <img className="trash__title-bar__left__icon" src={icon} alt="icone navigateur" />
          <h2 className="trash__title-bar__left__title">Corbeille</h2>
        </div>
        <div className="trash__title-bar__right">
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="trash__title-bar__right__icons trash__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>

      <div className="trash__content">
        <p className="trash__content__text" onClick={handleClickEaster}>Vide</p>
      </div>
    </div>
  )
};

export default Trash;