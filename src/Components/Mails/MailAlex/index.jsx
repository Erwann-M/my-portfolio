import '../styles.scss';
import image from "../../../assets/img/avatar4.png"

const MailAlex = () => (
  <div className="mail">
    <div className="mail__profile-container">
      <img className="mail__profile-container__image" src={image} alt="Alex" />
      <div className="mail__profile-container__info">
        <p className="mail__profile-container__info__name">Alex Ception</p>
        <p className="mail__profile-container__info__date-time">02/05/2022 18H26</p>
      </div>
    </div>
    <h3 className="mail__object">Mission pour toi</h3>
    <p className="mail__content">
      Salut <strong>Erwann</strong>, j'ai une petite mission de dev pour toi !<br/><br/>
      Pourrais-tu me faire un site pour ma boulangerie ?<br/>
      Je souhaite faire la promotion de certains produits sur celui-ci.<br/><br/>
      Et aussi : bon anniversaire !!!<br/><br/>
      À très vite !
    </p>
  </div>
);

export default MailAlex;
