//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/user.png";
import profilePicture from "../../assets/img/pp.jpg";
import aboutMe from "../../assets/icons/aboutme.png";
import hobby from "../../assets/icons/hobby.png";
import study from "../../assets/icons/student.png";
import tech from "../../assets/icons/tech.png";
import work from "../../assets/icons/work.png";
import arrow from "../../assets/icons/arrow-down.png";
import cv from "../../assets/pdf/CV-Erwann-Martin-2024.pdf";

//---------------------components -------------------------
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AboutMe from "./AboutCardsDetails/AboutMe";
import Hobby from "./AboutCardsDetails/Hobby";
import { toggleAbout, toggleAboutMe, toggleTech, toggleStudy, toggleWork, toggleHobby, toggleMaximize } from '../../action';
import './styles.scss';
import Study from "./AboutCardsDetails/Study";
import Tech from "./AboutCardsDetails/Tech";
import Work from "./AboutCardsDetails/Work";

const About = () => {

  const { aboutMeToggled, techToggled, studyToggled, workToggled, hobbyToggled, maximizeToggled } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleAbout());
  }

  const handleClickMaximize = () => {
    dispatch(toggleMaximize());
  }

  //============handle click of cards======================

  const handleClickAboutMe = () => {
    dispatch(toggleAboutMe());
  }

  const handleClickTech = () => {
    dispatch(toggleTech());
  }

  const handleClickStudy = () => {
    dispatch(toggleStudy());
  }

  const handleClickWork = () => {
    dispatch(toggleWork());
  }

  const handleClickHobby = () => {
    dispatch(toggleHobby());
  }

  //=======================================================

  return (
    <div className={"about " + (maximizeToggled && "active")}>
      {/* title bar with title and 3 buttons (minimize, maximize & close) */}
      <div className="about__title-bar">
        <div className="about__title-bar__left">
          <img className="about__title-bar__left__icon" src={icon} alt="icone explorateur de projet" />
          <h2 className="about__title-bar__left__title">Mon profil</h2>
        </div>
        <div className="about__title-bar__right">
          <img className="about__title-bar__right__icons" src={minimize} alt="" />
          <img className="about__title-bar__right__icons" src={maximize} alt="" onClick={handleClickMaximize} />
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
              <p className="about__content__header__profile__details--lastname"><strong>Martin</strong></p>
              <p className="about__content__header__profile__details--name"><strong>Erwann</strong></p>
              <p className="about__content__header__profile__details--birthday">Né le 02/05/1992</p>
              <p className="about__content__header__profile__details--status">Administrateur</p>
            </div>
          </div>
          <div className="about__content__header__status">
            <h2 className="about__content__header__status__title">Développeur fullstack</h2>
            <a href={cv} download="CV-Erwann-Martin.pdf" className="about__content__header__status__download">Télécharger mon CV</a>
          </div>
        </div>

        {/*-------------------------Start cards-------------------------*/}

        <h3 className="about__content__section-title">Informations générales</h3>

        {/* "hidden-container" is for hidden details div when appearing animation  */}
        <div className="hidden-container">
          <div className={"about__content__card " + (aboutMeToggled && "active")} onClick={handleClickAboutMe}>
            <div className="about__content__card__label">
              <img src={aboutMe} alt="" className="about__content__card__label__image" />
              <p className="about__content__card__label__title">À propos de moi</p>
            </div>
            <img className={"about__content__card__arrow " + (aboutMeToggled && "active")} src={arrow} alt="" />
          </div>
          <div className="about__content__detail">
            <AboutMe />
          </div>
        </div>

        <div className="hidden-container">
          <div className={"about__content__card " + (techToggled && "active")} onClick={handleClickTech}>
            <div className="about__content__card__label">
              <img src={tech} alt="" className="about__content__card__label__image" />
              <p className="about__content__card__label__title">Ma stack</p>
            </div>
            <img className={"about__content__card__arrow " + (techToggled && "active")} src={arrow} alt="" />
          </div>
          <div className="about__content__detail">
            <Tech />
          </div>
        </div>

        <h3 className="about__content__section-title">Travail et Études</h3>

        <div className="hidden-container">
          <div className={"about__content__card " + (studyToggled && "active")} onClick={handleClickStudy}>
            <div className="about__content__card__label">
              <img src={study} alt="" className="about__content__card__label__image" />
              <p className="about__content__card__label__title">Formations et études</p>
            </div>
            <img className={"about__content__card__arrow " + (studyToggled && "active")} src={arrow} alt="" />
          </div>
          <div className="about__content__detail">
            <Study />
          </div>
        </div>

        <div className="hidden-container">
          <div className={"about__content__card " + (workToggled && "active")} onClick={handleClickWork}>
            <div className="about__content__card__label">
              <img src={work} alt="" className="about__content__card__label__image" />
              <p className="about__content__card__label__title">Expériences professionnelles</p>
            </div>
            <img className={"about__content__card__arrow " + (workToggled && "active")} src={arrow} alt="" />
          </div>
          <div className="about__content__detail">
            <Work />
          </div>
        </div>

        <h3 className="about__content__section-title">Divers</h3>

        <div className="hidden-container">
          <div className={"about__content__card " + (hobbyToggled && "active")} onClick={handleClickHobby}>
            <div className="about__content__card__label">
              <img src={hobby} alt="" className="about__content__card__label__image" />
              <p className="about__content__card__label__title">Mes hobby</p>
            </div>
            <img className={"about__content__card__arrow " + (hobbyToggled && "active")} src={arrow} alt="" />
          </div>
          <div className="about__content__detail">
            <Hobby />
          </div>
        </div>

        {/*-------------------------End card-------------------------*/}

      </div>
    </div>
  );
};

export default About;
