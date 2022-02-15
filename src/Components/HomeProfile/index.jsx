/*==================================================================*|
|*---------------- Entry point user --------------------------------*|
|*==================================================================*/

// style -----------------------------------------------------------
import './styles.scss';
// images ----------------------------------------------------------
import profilePicture from '../../assets/img/pp.jpg';
import onoff from '../../assets/icons/onoff.svg';
import wifi from '../../assets/icons/wifi.svg';
import person from '../../assets/icons/person.svg';
// react components ------------------------------------------------
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// action ----------------------------------------------------------
import { getTime, setLogin } from '../../action';

const HomeProfile = () => {
  
  // get time value in state
  const {time} = useSelector(state => state);

  const dispatch = useDispatch();

  // for count number of input entry 
  const handleChange = (evt) => {
    const value = evt.target.value;
    const valueInArray = value.length;
    if (valueInArray === 4) {
      dispatch(setLogin());
    }
  }

  // prevent default action of form
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }
  

  // for update time in real time
  useEffect(
    () => {
      setInterval(() => {
        dispatch(getTime())
      }, 1000);
    }, [dispatch]
  );

  // display profile and info of bottom screen part
  return(
    <div className="home-profile">

      <p className='home-profile__mobile-alert'>Pour une expérience plus amusante, visitez ce portfolio sur ordinateur.</p>

      <div className="home-profile__container">

        <img src={profilePicture} alt="profil" className='home-profile__picture' title="Ça ? c'est moi !" />
        <h1 className='home-profile__name'>Erwann Martin</h1>

        <form action="" className='home-profile__form' onSubmit={handleSubmit}>
          <input id='pass' type="password" className='home-profile__form__input' placeholder="Écrivez 4 caractères" title='Mettez ce que vous voulez' onChange={handleChange} />
        </form>

      </div>

      <div className='home-profile__info'>

        <div className='home-profile__info__device'>
          <img src={wifi} alt="icone wifi" className='home-profile__info__device__icon' title="Vous avez du reseau." />
          <img src={person} alt="icone de personnage" className='home-profile__info__device__icon' />
          <img src={onoff} alt="icone on off" className='home-profile__info__device__icon' title='Oh non! Ne partez pas...' />
          <p className='home-profile__info__device__time'>{time}</p>
        </div>

      </div>

    </div>
  );
};

export default HomeProfile;
