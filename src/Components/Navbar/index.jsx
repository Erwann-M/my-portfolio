import './styles.scss';

// images ----------------------------------------------------------
import homeIcon from '../../assets/icons/windows.png';
import chromeIcon from '../../assets/icons/chrome.png';
import explorerIcon from '../../assets/icons/explorer.png';
import emailIcon from '../../assets/icons/gmail.png';
import aboutIcon from '../../assets/icons/user.png';
import arrowUp from '../../assets/icons/arrow-up.png';
import wifi from '../../assets/icons/wifi.png';
import sound3 from '../../assets/icons/sound3.png';
import sound2 from '../../assets/icons/sound2.png';
import sound1 from '../../assets/icons/sound1.png';
import sound0 from '../../assets/icons/sound0.png';
import battery from '../../assets/icons/battery.png';
import trash from '../../assets/icons/Recycle-bin.png';
import notWifi from "../../assets/icons/not-wifi.png";

// library ------------------------------------------------
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import { NavLink } from 'react-router-dom';

// local components ------------------------------------------------
import { getTime, getDate, toggleMenu, toggleProjectExplorer, toggleContact, toggleAbout, toggleBrowser, toggleNavbarArrow, toggleNetworkInfo, toggleTrash } from '../../action';
import Menu from '../Menu';
import ProjectExplorer from '../ProjectExplorer';
import Contact from '../Contact';
import About from '../About';
import Browser from '../Browser';
import MoreApp from '../MoreApp';
import Defender from '../Defender';
import NetworkInfo from '../NetworkInfo';
import Trash from '../Trash';
import ErrorWin from '../ErrorWin';

const Navbar = () => {

  const dispatch = useDispatch();

  const {date, time, menuToggled, projectExplorerToggled, contactToggled, aboutToggled, browserToggled, navbarArrowToggled, defenderToggled, wifiToggled, soundValue, trashToggled, errorToggled} = useSelector(state => state);

  useEffect(
    () => {
      setInterval(() => {
        dispatch(getTime())
      }, 1000);
    }, [dispatch]
  );

  useEffect(
    () => {
        dispatch(getDate())
    }, [dispatch]
  );

  const handleClickMenu = () => {
    dispatch(toggleMenu());
  };

  const handleClickBrowser = () => {
    dispatch(toggleBrowser());
  };

  const handleClickProject = () => {
    dispatch(toggleProjectExplorer());
  };

  const handleClickContact = () => {
    dispatch(toggleContact());
  };

  const handleClickArrow = () => {
    dispatch(toggleNavbarArrow());
  }
  
  const handleClickAbout = () => {
    dispatch(toggleAbout());
  }

  const handleClickNetworkInfo = () => {
    dispatch(toggleNetworkInfo());
  }

  const handleClickTrash = () => {
    dispatch(toggleTrash());
  };

  const soundImage = (value) => {
    switch (value) {
      case "0":
        return sound0
      case "1":
        return sound1
      case "2":
        return sound2
      case "3":
        return sound3
      default:
        return sound3
    }
  }

  return(
    <div className="navbar">
      <nav className='navbar__icon'>
        <ul className='navbar__icon__list'>

          <li onClick={handleClickMenu} className="navbar__icon__list__item" >
            <img 
              src={homeIcon} 
              alt="Menu principal" 
              title='Menu' 
              className={'navbar__icon__list__img ' + (menuToggled && "icon-active")}
            />
          </li>
          <NavLink to={"/"}>
            <li onClick={handleClickBrowser} className="navbar__icon__list__item" >
              <img 
                src={chromeIcon} 
                alt="Navigateur internet" 
                title='Navigateur internet' 
                className={'navbar__icon__list__img ' + (browserToggled && "icon-active")} 
              />
            </li>
          </NavLink>

          <NavLink to={"/"}>
            <li onClick={handleClickProject} className="navbar__icon__list__item" >
                <img 
                  src={explorerIcon} 
                  alt="Explorer mes projets" 
                  title='Explorateur de projets' 
                  className={'navbar__icon__list__img ' + (projectExplorerToggled && "icon-active")}
                />
            </li>
          </NavLink>

          <NavLink to={"/"}>
            <li onClick={handleClickContact} className="navbar__icon__list__item" >
              <img 
                src={emailIcon} 
                alt="Me contacter" 
                className={'navbar__icon__list__img ' + (contactToggled && "icon-active")}
                title='Me contacter' 
              />
            </li>
          </NavLink>

          <NavLink to={"/"}>
            <li onClick={handleClickAbout} className="navbar__icon__list__item" >
              <img 
                src={aboutIcon} 
                alt="Mon profil" 
                className={'navbar__icon__list__img ' + (aboutToggled && "icon-active")}
                title='Mon profil' 
              />
            </li>
          </NavLink>

        </ul>
      </nav>

      <Draggable>
        <div 
          className="navbar__trash" 
          onDoubleClick={handleClickTrash} 
          title="Cliquez deplacer ou double clique pour ouvrir" 
        >
          <img src={trash} alt="icone de corbeille" className='navbar__trash__icon' />
          <p className='navbar__trash__title'>Corbeille</p>
        </div>
      </Draggable>

      <div className='navbar__info'>
        <div className="navbar__info__container">

          <img src={arrowUp} alt="Voir plus d'options" className={'navbar__info__toggle navbar__info__icon ' + (navbarArrowToggled && "active")} onClick={handleClickArrow} />

          <div className='navbar__info__system' onClick={handleClickNetworkInfo}>
            {wifiToggled ? 
              <img src={wifi} alt="info intensité du réseau (simulation)" className='navbar__info__icon' /> 
              : 
              <img src={notWifi} alt="info intensité du réseau (simulation)" className='navbar__info__icon' />}
            
            <img src={soundImage(soundValue)} alt="info intensité du son (simulation)" className='navbar__info__icon' />
            <img src={battery} alt="info niveau de charge de la batterie (simulation)" className='navbar__info__icon' />
          </div>

          <div className="navbar__info__datetime">
            <p className='navbar__info__datetime--time'>{time}</p>
            <p className='navbar__info__datetime--date'>{date}</p>
          </div>

        </div>
      </div>
      <Menu />
      {projectExplorerToggled && <ProjectExplorer />}
      {contactToggled && <Contact />}
      {aboutToggled && <About />}
      {browserToggled && <Browser />}
      <MoreApp />
      {defenderToggled && <Defender />}
      <NetworkInfo />
      {trashToggled && <Trash />}
      {errorToggled && <ErrorWin />}
    </div>
  );
};

export default Navbar;
