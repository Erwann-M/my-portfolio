import './styles.scss';
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/explorer.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowCurved from "../../assets/icons/arrow-curved.png";
import { useDispatch } from 'react-redux';
import { toggleProjectExplorer } from '../../action';
import datas from '../../data/datas';

const ProjectExplorer = () => {

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleProjectExplorer());
  }

  return (
    <div className="project-explorer">

      <div className="project-explorer__title-bar">
        <div className="project-explorer__title-bar__left">
          <img className="project-explorer__title-bar__left__icon" src={icon} alt="icone explorateur de projet" />
          <h2 className="project-explorer__title-bar__left__title">Explorateur de projets</h2>
        </div>
        <div className="project-explorer__title-bar__right">
          <img className="project-explorer__title-bar__right__icons" src={minimize} alt="" />
          <img className="project-explorer__title-bar__right__icons" src={maximize} alt="" />
          <img onClick={handleClickClose} className="project-explorer__title-bar__right__icons" src={close} alt="" />
        </div>
      </div>

      <div className="project-explorer__control-bar">
        <div className="project-explorer__control-bar__button">
          <img className="project-explorer__control-bar__button--arrow" src={arrowLeft} alt="Précédant" />
          <img className="project-explorer__control-bar__button--arrow" src={arrowRight} alt="Suivant" />
        </div>
        <div className="project-explorer__control-bar__path">
          <img className="project-explorer__control-bar__path__icon" src={icon} alt="Icone du dossier" />
          <p className="project-explorer__control-bar__path__name">Mes Projets <span>&gt;</span> </p>
          <img className="project-explorer__control-bar__path__arrow" src={arrowCurved} alt="Recharger" />
        </div>
        <div className="project-explorer__control-bar__search">
          <form action="">
            <input type="text" />
          </form>
        </div>
      </div>

      <div className="project-explorer__content">
        {datas.map((data) => (
          <div className="project-explorer__content__card">
            <img className="project-explorer__content__card__icon" src={data.icon} alt={data.title} />
            <p className="project-explorer__content__card__title">{data.title}</p>
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default ProjectExplorer;
