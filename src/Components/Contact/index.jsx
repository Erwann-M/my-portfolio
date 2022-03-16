import './styles.scss';

//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/chrome.png";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import avatar3 from "../../assets/img/avatar3.png";
import avatar4 from "../../assets/img/avatar4.png";

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

        <div className="contact__content__left">
          <h2>Boite de reception</h2>
          <div className="contact__content__left__card">
            <img className="contact__content__left__card__image" src={avatar1} alt="" />
            <p className="contact__content__left__card__name">Jamie Mescontact</p>
            <p className="contact__content__left__card__object">Réponse à ta demande</p>
            <p className="contact__content__left__card__hour">08H35</p>
          </div>
          <div className="contact__content__left__card">
            <img className="contact__content__left__card__image" src={avatar4} alt="" />
            <p className="contact__content__left__card__name">Alex Ception</p>
            <p className="contact__content__left__card__object">Mission pour toi</p>
            <p className="contact__content__left__card__hour">18H26</p>
          </div>
          <div className="contact__content__left__card">
            <img className="contact__content__left__card__image" src={avatar3} alt="" />
            <p className="contact__content__left__card__name">Jean Titouplin</p>
            <p className="contact__content__left__card__object">Lorem ipsum dolor sit</p>
            <p className="contact__content__left__card__hour">14H12</p>
          </div>
          <div className="contact__content__left__card">
            <img className="contact__content__left__card__image" src={avatar2} alt="" />
            <p className="contact__content__left__card__name">Rob Otique</p>
            <p className="contact__content__left__card__object">Lorem ipsum dolor sit</p>
            <p className="contact__content__left__card__hour">01H04</p>
          </div>
        </div>

        <div className="contact__content__right">

        </div>

      </div>
    </div>
  )
};

export default Contact;
