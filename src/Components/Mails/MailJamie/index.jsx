import '../styles.scss';
import image from "../../../assets/img/avatar1.png";

const MailJamie = () => (
  <div className="mail">
    <div className="mail__profile-container">
      <img className="mail__profile-container__image" src={image} alt="Jamie" />
      <div className="mail__profile-container__info">
        <p className="mail__profile-container__info__name">Jamie Mescontact</p>
        <p className="mail__profile-container__info__date-time">09/02/2022 08H35</p>
      </div>
    </div>
    <h3 className="mail__object">Réponse à ta question</h3>
    <p className="mail__content">
      Salut Erwann, voici ce que tu m'avais demandé: <br/><br/>
      - Adresse e-mail: <a href="mailto:erwann.martin.dev@gmail.com" target="_blank">erwann.martin.dev@gmail.com</a><br/><br/>
      - LinkedIn: <a href="https://www.linkedin.com/in/erwann-martin/" target="_blank">https://www.linkedin.com/in/erwann-martin/</a><br/><br/>
      - Twitter: <a href="https://twitter.com/ErwannMartin3" target="_blank">https://twitter.com/ErwannMartin3</a><br/><br/>
      - Secteurs de recherche: Côtes d'Armor, toute la France (remote)
    </p>

  </div>
);

export default MailJamie;
