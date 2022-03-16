import './styles.scss';

//---------icons--------------
import browser from '../../assets/icons/chrome.png';
import explorerIcon from '../../assets/icons/explorer.png';
import emailIcon from '../../assets/icons/gmail.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import profile from '../../assets/icons/user.png';
import profilePicture from '../../assets/img/pp.jpg';
import onoff from '../../assets/icons/onoff.svg';

// ----------- image --------------


//---------component--------------------
import { useDispatch } from 'react-redux';
import { toggleProjectExplorer, unsetLogin, toggleContact } from '../../action';
import { NavLink } from 'react-router-dom';



const Menu = () => {

  const dispatch = useDispatch();

  const handleClickProject = () => {
    dispatch(toggleProjectExplorer());
  }

  const handleClickContact = () => {
    dispatch(toggleContact());
  };

  const handleClickOff = () => {
    dispatch(unsetLogin());
  };
  
  return(
    <div className="menu">
      <div className='menu--background'>

        <h2 className='menu__title'>Épinglé</h2>

        <div className="menu__pin">

          <div className="menu__pin__container">
            <img src={browser} alt="navigateur internet" className="menu__pin__container-icon" />
            <p className='menu__pin__container-title'>Navigateur</p>
          </div>

          <NavLink to={"/"} className="menu__pin-nav">
            <div className="menu__pin__container" onClick={handleClickProject}>
              <img src={explorerIcon} alt="Mes projets" className="menu__pin__container-icon" />
              <p className='menu__pin__container-title'>Explorateur de projets</p>
            </div>
          </NavLink>

          <NavLink to={"/"} className="menu__pin-nav">
            <div className="menu__pin__container" onClick={handleClickContact}>
              <img src={emailIcon} alt="Me contacter" className="menu__pin__container-icon" />
              <p className='menu__pin__container-title'>Contact</p>
            </div>
          </NavLink>
          
          <a href='https://www.linkedin.com/in/erwann-martin/' className="menu__pin__container">
            <img src={linkedin} alt="Mon profil linkedIn" className="menu__pin__container-icon" />
            <p className='menu__pin__container-title'>LinkedIn</p>
          </a>
        
          <a href="https://twitter.com/ErwannMartin3" className="menu__pin__container">
            <img src={twitter} alt="Mon profil twitter" className="menu__pin__container-icon" />
            <p className='menu__pin__container-title'>Twitter</p>
          </a>

          <a href='https://github.com/Erwann-M' className="menu__pin__container">
            <img src={github} alt="Mon profil github" className="menu__pin__container-icon" />
            <p className='menu__pin__container-title'>GitHub</p>
          </a>

          <div className="menu__pin__container">
            <img src={profile} alt="À propos de moi" className="menu__pin__container-icon" />
            <p className='menu__pin__container-title'>À propos</p>
          </div>

        </div>

        <div className="menu__application">
          <h2 className="menu__title">Applications</h2>
          <div className="menu__application__card">
            <div className="menu__application__card--random">
              <img className="menu__application__card--random-image" src='https://picsum.photos/200/100' alt="" />
            </div>
          </div>
        </div>

        <div className="menu__bottom">

          <div className="menu__bottom__profile">
            <img className="menu__bottom__profile-image" src={profilePicture} alt="À propos de moi" />
            <p className="menu__bottom__profile-title">Martin Erwann</p>
          </div>

          <img className='menu__bottom__off' onClick={handleClickOff} src={onoff} alt="Retour à la page d'accueil" />

        </div>
      </div>
    </div>
  );
};

export default Menu;