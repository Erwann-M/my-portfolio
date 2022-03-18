//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/user.png";
import profilePicture from "../../assets/img/pp.jpg";
import aboutMe from "../../assets/icons/aboutme.png";
import hobby from "../../assets/icons/hobby.png";
import student from "../../assets/icons/student.png";
import tech from "../../assets/icons/tech.png";
import work from "../../assets/icons/work.png";
import arrow from "../../assets/icons/arrow-up.png";

//---------------------components -------------------------
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleAbout } from '../../action';
import './styles.scss';

const About = () => {

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleAbout());
  }

  return (
    <div className="about">
      {/* title bar with title and 3 buttons (minimize, maximize & close) */}
      <div className="about__title-bar">
        <div className="about__title-bar__left">
          <img className="about__title-bar__left__icon" src={icon} alt="icone explorateur de projet" />
          <h2 className="about__title-bar__left__title">Mon profil</h2>
        </div>
        <div className="about__title-bar__right">
          <img className="about__title-bar__right__icons" src={minimize} alt="" />
          <img className="about__title-bar__right__icons" src={maximize} alt="" />
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="about__title-bar__right__icons about__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>

      <p className="about__path">Comptes &gt; <span>Mes informations</span></p>

      <div className="about__content">

        <div className="about__content__header">
          <div className="about__content__header__profile">
            <img className="about__content__header__profile__image" src={profilePicture} alt="Moi" />
            <div className="about__content__header__profile__details">
              <p className="about__content__header__profile__details--lastname">Martin</p>
              <p className="about__content__header__profile__details--name">Erwann</p>
              <p className="about__content__header__profile__details--birthday">Né le 02/05/1992</p>
              <p className="about__content__header__profile__details--status">Administrateur</p>
            </div>
          </div>
          <h2 className="about__content__header__title">Développeur fullstack</h2>
        </div>

        {/*-------------------------Start cards-------------------------*/}


        <div className="about__content__card">
          <div className="about__content__card__label">
            <img src={aboutMe} alt="" className="about__content__card__label__image" />
            <p className="about__content__card__label__title">À propos de moi</p>
          </div>
          <img className="about__content__card__arrow" src={arrow} alt="" />
        </div>

        <div className="about__content__card">
          <div className="about__content__card__label">
            <img src={tech} alt="" className="about__content__card__label__image" />
            <p className="about__content__card__label__title">Ma stack</p>
          </div>
          <img className="about__content__card__arrow" src={arrow} alt="" />
        </div>

        <div className="about__content__card">
          <div className="about__content__card__label">
            <img src={student} alt="" className="about__content__card__label__image" />
            <p className="about__content__card__label__title">Formations et études</p>
          </div>
          <img className="about__content__card__arrow" src={arrow} alt="" />
        </div>

        <div className="about__content__card">
          <div className="about__content__card__label">
            <img src={work} alt="" className="about__content__card__label__image" />
            <p className="about__content__card__label__title">Expériences professionnelles</p>
          </div>
          <img className="about__content__card__arrow" src={arrow} alt="" />
        </div>

        <div className="about__content__card">
          <div className="about__content__card__label">
            <img src={hobby} alt="" className="about__content__card__label__image" />
            <p className="about__content__card__label__title">Mes hobby</p>
          </div>
          <img className="about__content__card__arrow" src={arrow} alt="" />
        </div>

        {/*-------------------------End card-------------------------*/}

      </div>
    </div>
  );
};

export default About;
