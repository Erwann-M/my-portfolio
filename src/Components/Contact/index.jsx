import './styles.scss';

//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/chrome.png";

//---------------------components -------------------------
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleContact } from '../../action';

const Contact = () => {
  
  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleContact());
  }

  return (
    <div className="contact">

      <div className="contact__title-bar">
        <div className="contact__title-bar__left">
          <img className="contact__title-bar__left__icon" src={icon} alt="icone contact" />
          <h2 className="contact__title-bar__left__title">Contact</h2>
        </div>
        <div className="contact__title-bar__right">
          <img className="contact__title-bar__right__icons" src={minimize} alt="" />
          <img className="contact__title-bar__right__icons" src={maximize} alt="" />
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="contact__title-bar__right__icons contact__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>
      <div className="contact__content">
        
      </div>
    </div>
  )
};

export default Contact;
