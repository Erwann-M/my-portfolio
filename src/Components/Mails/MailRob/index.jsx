import '../styles.scss';
import image from "../../../assets/img/avatar2.png";

const MailRob = () => (
  <div className="mail">
    <div className="mail__profile-container">
      <img className="mail__profile-container__image" src={image} alt="Rob" />
      <div className="mail__profile-container__info">
        <p className="mail__profile-container__info__name">Rob Otique</p>
        <p className="mail__profile-container__info__date-time">07/05/2124 01H04</p>
      </div>
    </div>
    <h3 className="mail__object">Salut papy</h3>
    <p className="mail__content">
      Salut !<br/><br/>
      Je suis ton arrière-petit-fils. Eh oui, ça peut te paraître bizarre, mais dans le futur (dans pas si longtemps pour toi) on peut communiquer avec des gens du passé juste en connaissant leur adresse IP.<br/><br/>
      Bref, je veux tout savoir ! Que fait tu dans la vie ? Où est-ce que tu habites ? Et comment est le passé ? Je veux dire ton présent ? <br/><br/>
      J'espère que tu me répondras vite.<br/><br/>
      À bientôt !
    </p>
  </div>
);

export default MailRob;
