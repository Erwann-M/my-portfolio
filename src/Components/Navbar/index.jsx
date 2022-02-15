import './styles.scss';
// images ----------------------------------------------------------
import homeIcon from '../../assets/icons/windows.png';
import chromeIcon from '../../assets/icons/chrome.png';
import explorerIcon from '../../assets/icons/explorer.png';
import emailIcon from '../../assets/icons/gmail.png';
import arrowUp from '../../assets/icons/arrow-up.png';
import wifi from '../../assets/icons/wifi.png';
import sound from '../../assets/icons/sound.png';
import battery from '../../assets/icons/battery.png';
import trash from '../../assets/icons/Recycle-bin.png';
// library ------------------------------------------------
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
// local components ------------------------------------------------
import { getTime, getDate, toggleMenu } from '../../action';
import Menu from '../../Pages/Menu';

const Navbar = () => {

  const dispatch = useDispatch();

  const {date, time, menuToggled} = useSelector(state => state);

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
    alert('browser clicked');
  };

  const handleClickProject = () => {
    alert('project clicked');
  };

  const handleClickContact = () => {
    alert('contact clicked');
  };

  const handleClickTrash = () => {
    alert('ok c\'est bon');
  };

  return(
    <div className="navbar">
      <nav className='navbar__icon'>
        <ul className='navbar__icon__list'>

          <li onClick={handleClickMenu}>
            <img 
              src={homeIcon} 
              alt="Menu principal" 
              title='Menu' 
              className={'navbar__icon__list__img' + (menuToggled ? ' active' : '')}
            />
          </li>

          <li onClick={handleClickBrowser}>
            <img 
              src={chromeIcon} 
              alt="Navigateur internet" 
              title='Navigateur internet' 
              className='navbar__icon__list__img' 
            />
          </li>

          <li onClick={handleClickProject}>
            <img 
              src={explorerIcon} 
              alt="Explorer mes projets" 
              title='Explorateur de projets' 
              className='navbar__icon__list__img' 
            />
          </li>

          <li onClick={handleClickContact}>
            <img 
              src={emailIcon} 
              alt="Me contacter" 
              className='navbar__icon__list__img' 
              title='Me contacter' 
            />
          </li>

        </ul>
      </nav>

      <Draggable>
        <div className="navbar__trash" onDoubleClick={handleClickTrash} title="Cliquez deplacer ou double clique pour ouvrir" >
          <img src={trash} alt="icone de corbeille" className='navbar__trash__icon' />
          <p className='navbar__trash__title'>Corbeille</p>
        </div>
      </Draggable>

      <div className='navbar__info'>
        <div className="navbar__info__container">

          <img src={arrowUp} alt="Voir plus d'options" className='navbar__info__toggle navbar__info__icon' />

          <div className='navbar__info__system'>
            <img src={wifi} alt="info intensité du réseau (simulation)" className='navbar__info__icon' />
            <img src={sound} alt="info intensité du son (simulation)" className='navbar__info__icon' />
            <img src={battery} alt="info niveau de charge de la batterie (simulation)" className='navbar__info__icon' />
          </div>

          <div className="navbar__info__datetime">
            <p className='navbar__info__datetime--time'>{time}</p>
            <p className='navbar__info__datetime--date'>{date}</p>
          </div>

        </div>
      </div>
      {menuToggled && <Menu />}

    </div>
  );
};

export default Navbar;
