import './styles.scss';
import profilePicture from '../../assets/img/pp.jpg';
import onoff from '../../assets/icons/onoff.svg';
import wifi from '../../assets/icons/wifi.svg';
import person from '../../assets/icons/person.svg';

const HomeProfile = () => (
  <div className='home-profile'>
    <p className='home-profile__mobile-alert'>Pour une expérience plus amusante, visitez ce portfolio sur ordinateur.</p>
    <div className="home-profile__container">
      <img src={profilePicture} alt="Profil" className='home-profile__picture' />
      <h1 className='home-profile__name'>Erwann Martin</h1>
      <form action="" className='home-profile__form'>
        <input id='pass' type="password" className='home-profile__form__input' placeholder="Mot de passe" />
        <label htmlFor="pass" className='home-profile__form__password'>Écrivez 4 caractères.<br/> (Ce que vous voulez)</label>
      </form>
    </div>
    <div className='home-profile__info'>
      <div className='home-profile__info__device'>
        <img src={wifi} alt="wifi icon" className='home-profile__info__device__icon' title="Vous avez du reseau" />
        <img src={person} alt="person icon" className='home-profile__info__device__icon' />
        <img src={onoff} alt="on off icon" className='home-profile__info__device__icon' title='Oh non! Ne partez pas...' />
      </div>
    </div>

  </div>
);

export default HomeProfile;
