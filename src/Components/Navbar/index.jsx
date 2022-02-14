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
// react components ------------------------------------------------
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// local components ------------------------------------------------
import { getTime, getDate } from '../../action';

const Navbar = () => {

  const dispatch = useDispatch();

  const {date, time} = useSelector(state => state);

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

  return(
    <div className="navbar">
      <nav className='navbar__icon'>
        <ul className='navbar__icon__list'>
          <li><img src={homeIcon} alt="Menu principal" title='Menu' /></li>
          <li><img src={chromeIcon} alt="Navigateur internet" title='Navigateur internet' /></li>
          <li><img src={explorerIcon} alt="Explorer mes projets" title='Explorateur de projets' /></li>
          <li><img src={emailIcon} alt="Me contacter" /></li>
        </ul>
      </nav>

      <div className="navbar__trash">
        <img src={trash} alt="icone de corbeille" className='navbar__trash__icon' />
        <p className='navbar__trash__title'>Corbeille</p>
      </div>

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

    </div>
  );
};

export default Navbar;
