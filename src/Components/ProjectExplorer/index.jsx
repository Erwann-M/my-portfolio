import './styles.scss';

//--------------------image------------------------------
import minimize from "../../assets/icons/minimize.png";
import maximize from "../../assets/icons/maximize.png";
import close from "../../assets/icons/close.png";
import icon from "../../assets/icons/explorer.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowCurved from "../../assets/icons/arrow-curved.png";

//---------------------components -------------------------
import { useDispatch, useSelector } from 'react-redux';
import { toggleMaximize, toggleProjectExplorer } from '../../action';
import { NavLink, useParams } from 'react-router-dom';

//------------------------ data ---------------------------
import datas from '../../data/datas';

const ProjectExplorer = () => {

  const projectId = useParams().slug;

  const { maximizeToggled } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(toggleProjectExplorer());
  }
  
  const handleClickMaximize = () => {
    dispatch(toggleMaximize());
  }

  return (
    <div className={"project-explorer " + (maximizeToggled && "active")}>
      {/* title bar with title and 3 buttons (minimize, maximize & close) */}
      <div className="project-explorer__title-bar">
        <div className="project-explorer__title-bar__left">
          <img className="project-explorer__title-bar__left__icon" src={icon} alt="icone explorateur de projet" />
          <h2 className="project-explorer__title-bar__left__title">Explorateur de projets</h2>
        </div>
        <div className="project-explorer__title-bar__right">
          <img className="project-explorer__title-bar__right__icons" src={minimize} alt="" />
          <img className="project-explorer__title-bar__right__icons" src={maximize} alt="" onClick={handleClickMaximize} />
          <NavLink to={"/"}>
            <img onClick={handleClickClose} className="project-explorer__title-bar__right__icons project-explorer__title-bar__right__icons--close" src={close} alt="" />
          </NavLink>
        </div>
      </div>

      <div className="project-explorer__control-bar">
        <div className="project-explorer__control-bar__button">
          <NavLink to={"/"}>
            <img className="project-explorer__control-bar__button--arrow" src={arrowLeft} alt="Précédant" /> 
          </NavLink>
          <img className="project-explorer__control-bar__button--arrow" src={arrowRight} alt="Suivant" />
        </div>
        <div className="project-explorer__control-bar__path">
          <img className="project-explorer__control-bar__path__icon" src={icon} alt="Icone du dossier" />

          <p className="project-explorer__control-bar__path__name">
            <NavLink to={"/"}className="project-explorer__control-bar__path__name__link">
              Mes Projets
            </NavLink> 
            {projectId && <span> &gt; </span>} 
            <span className="project-explorer__control-bar__path__name__link">{projectId && datas[projectId].title}</span>
          </p>

          <img className="project-explorer__control-bar__path__arrow" src={arrowCurved} alt="Recharger" />
        </div>
        <div className="project-explorer__control-bar__search">
          <form action="">
            <input className="project-explorer__control-bar__search--input" type="text" placeholder='Recherche' />
          </form>
        </div>
      </div>

      <div className="project-explorer__content">

        {/* if project icon is clicked, display the details of project. else display all projects icons */}

        {projectId ?

          <div className="project-explorer__content__details">

            <div className="project-explorer__content__details__header">
              <img className="project-explorer__content__details__header__icon" src={datas[projectId].icon} alt={datas[projectId].title} />
              <h3 className="project-explorer__content__details__header__title">{datas[projectId].title}</h3>
            </div>

            <img className="project-explorer__content__details__image" src={datas[projectId].image} alt="" />
            <p className="project-explorer__content__details__description">{datas[projectId].description}</p>
            <p className="project-explorer__content__details__link">Lien: <a href={datas[projectId].link}>{datas[projectId].link}</a></p>
            <p className="project-explorer__content__details__github">Lien GitHub: <a href={datas[projectId].githubLink}>{datas[projectId].githubLink}</a></p>
          </div>

        : 
        
          datas.map((data) => (
            <NavLink to={`/project/${data.id}`}key={data.id} className="project-explorer__content__card">
              <img className="project-explorer__content__card__icon" src={data.icon} alt={data.title} />
              <p className="project-explorer__content__card__title">{data.title}</p>
            </NavLink>
            )
          )
        }
        
      </div>
    </div>
  );
};

export default ProjectExplorer;
