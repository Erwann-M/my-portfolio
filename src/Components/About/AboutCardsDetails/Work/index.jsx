import { useDispatch, useSelector } from 'react-redux';
import { toggleProjectExplorer, toggleWork } from '../../../../action';
import './styles.scss';

const Work = () => {

  const { workToggled } = useSelector(state => state);

  const dispatch = useDispatch()

  const handleClickProject = () => {
    dispatch(toggleProjectExplorer());
  };
  
  const handleClickWork = () => {
    dispatch(toggleWork());
  }
  
  return (
    <div className={"work " + (workToggled && "active")} onClick={handleClickWork}>
      <p className="work__text">
        Je sors de ma formation développeur web et web mobile chez O'clock, je n'ai donc pas d'expérience professionnelle dans le domaine pour le moment.<br/><br/>Cependant, j'ai réalisé quelques projets personnels pendant celle-ci et je vous invite a allé les découvrir dans <span className="work__text__link" onClick={handleClickProject}>L'explorateur de projets</span>
      </p>

      <p className="work__text">Sait-on jamais, peut-être que ce sera votre entreprise qui sera ma première expérience...</p>
      
    </div>
  )
};

export default Work;