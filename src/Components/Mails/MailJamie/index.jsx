import '../styles.scss';
import image from "../../../assets/img/avatar1.png";

const MailJamie = () => (
  <div className="mail">
    <div className="mail__profile-container">
      <img className="mail__profile-container__image" src={image} alt="Jamie" />
      <div className="mail__profile-container__info">
        <p className="mail__profile-container__info__name">Jamie Mescontact</p>
        <p className="mail__profile-container__info__date-time">01/09/2024 08H35</p>
      </div>
    </div>
    <h3 className="mail__object">Réponse à ta question</h3>
    <p className="mail__content">
      Salut <strong>Erwann</strong>, tu vas bien ? Voici ce que tu m'avais demandé: <br/><br/><br/>
      📧 <span className='mail__content--strong'>Adresse e-mail:</span> <a href="mailto:erwann.martin.dev@gmail.com" target="_blank">erwann.martin.dev@gmail.com</a><br/><br/>
      🧑‍💼<span className='mail__content--strong'>LinkedIn:</span> <a href="https://www.linkedin.com/in/erwann-martin/" target="_blank">https://www.linkedin.com/in/erwann-martin/</a><br/><br/>
      📍 <span className='mail__content--strong'>Secteurs de recherche:</span> Haute Savoie, toute la France (remote)<br/><br/><br/>
      J'espère que tu trouvera un travail qui te conviendra !💪<br/><br/>
      Bisous 😘
    </p>

  </div>
);

export default MailJamie;
