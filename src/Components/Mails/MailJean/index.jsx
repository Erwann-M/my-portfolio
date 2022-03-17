import '../styles.scss';
import image from "../../../assets/img/avatar3.png"

const MailJean = () => (
  <div className="mail">
    <div className="mail__profile-container">
      <img className="mail__profile-container__image" src={image} alt="Jean" />
      <div className="mail__profile-container__info">
        <p className="mail__profile-container__info__name">Jean Titouplin</p>
        <p className="mail__profile-container__info__date-time">25/12/2021 23H12</p>
      </div>
    </div>
    <h3 className="mail__object">Coucou</h3>
    <p className="mail__content">
      JOYEUX NOËL !!!
    </p>
  </div>
);

export default MailJean;
