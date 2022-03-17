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
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBurgerMenu, toggleContact } from '../../action';
import MailAlex from '../Mails/MailAlex';
import MailJamie from '../Mails/MailJamie';
import MailJean from '../Mails/MailJean';
import MailRob from '../Mails/MailRob';

const Contact = () => {

  const currentMail = useParams().slug;

  const {burgerMenuToggled} = useSelector(state => state);
  
  const dispatch = useDispatch();

  const handleClickburger = () => {
    dispatch(toggleBurgerMenu());
  }

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

        <div className={"contact__content__left " + (burgerMenuToggled && "active")}>
          <h2 className="contact__content__left__title">Boite de reception</h2>
          <div className={"contact__content__left__burger " + (burgerMenuToggled && "active")} onClick={handleClickburger}>
            <span></span>
          </div>
          <NavLink to={"/"}>
            <div className={"contact__content__left__card " + (!currentMail && " active-card")}>

              <div className="contact__content__left__card__container">
                <img className="contact__content__left__card__image" src={avatar1} alt="" />
                <p className="contact__content__left__card__name">Jamie Mescontact</p>
              </div>

              <p className="contact__content__left__card__object">Réponse à ta demande</p>
              <p className="contact__content__left__card__hour">08H35</p>
            </div>
          </NavLink>

          <NavLink to={"/mail/2"}>
            <div className={"contact__content__left__card " + (currentMail === "2" && " active-card")}>

              <div className="contact__content__left__card__container">
                <img className="contact__content__left__card__image" src={avatar4} alt="" />
                <p className="contact__content__left__card__name">Alex Ception</p>
              </div>

              <p className="contact__content__left__card__object">Mission pour toi</p>
              <p className="contact__content__left__card__hour">18H26</p>
            </div>
          </NavLink>

          <NavLink to={"/mail/3"}>
            <div className={"contact__content__left__card " + (currentMail === "3" && " active-card")}>

              <div className="contact__content__left__card__container">
                <img className="contact__content__left__card__image" src={avatar3} alt="" />
                <p className="contact__content__left__card__name">Jean Titouplin</p>
              </div>

              <p className="contact__content__left__card__object">Lorem ipsum dolor sit</p>
              <p className="contact__content__left__card__hour">14H12</p>
            </div>
          </NavLink>

          <NavLink to={"/mail/4"}>
            <div className={"contact__content__left__card " + (currentMail === "4" && " active-card")}>

              <div className="contact__content__left__card__container">
                <img className="contact__content__left__card__image" src={avatar2} alt="" />
                <p className="contact__content__left__card__name">Rob Otique</p>
              </div>

              <p className="contact__content__left__card__object">Lorem ipsum dolor sit</p>
              <p className="contact__content__left__card__hour">01H04</p>
            </div>
          </NavLink>
        </div>

        <div className="contact__content__right">
          {!currentMail && <MailJamie />}
          {currentMail === "2" && <MailAlex />}
          {currentMail === "3" && <MailJean />}
          {currentMail === "4" && <MailRob />}
        </div>

      </div>
    </div>
  )
};

export default Contact;
