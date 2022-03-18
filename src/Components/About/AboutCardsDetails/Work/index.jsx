import { useDispatch, useSelector } from 'react-redux';
import { toggleProjectExplorer, toggleExperiences } from '../../../../action';
import arrow from "../../../../assets/icons/arrow-down.png"
import './styles.scss';

const Work = () => {

  const { workToggled, experiencesToggled } = useSelector(state => state);

  const dispatch = useDispatch()

  const handleClickProject = () => {
    dispatch(toggleProjectExplorer());
  };

  const handleClickExperience = () => {
    dispatch(toggleExperiences())
  }
  
  return (
    <div className={"work " + (workToggled && "active")}>
      <p className="work__text">
        Je sors de ma formation développeur web et web mobile chez O'clock, je n'ai donc pas d'expérience professionnelle dans le domaine pour le moment.<br/><br/>Cependant, j'ai réalisé quelques projets personnels pendant celle-ci et je vous invite a allé les découvrir dans <span className="work__text__link" onClick={handleClickProject}>L'explorateur de projets</span>
      </p>
      <p className="work__text">
        Si vous souhaitez voir mes expériences professionnelles précédentes ne concernant pas le monde du développement, vous pouvez cliquer ci-dessous.
      </p>

      <div className="work__toggle" onClick={handleClickExperience}>
        <img src={arrow} alt="" className={"work__toggle__arrow " + (experiencesToggled && "active") } />
        <p className="work__toggle__text">Voir mes experiences</p>
      </div>

      <div className={"work__alt " + (experiencesToggled && "active")}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nemo, eveniet nesciunt aperiam nam unde dolores, voluptatum cum quam fugiat beatae, maiores facere eum est! Odio nobis quam officiis quos.
      </div>
      
    </div>
  )
};

export default Work;