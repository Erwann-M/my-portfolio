import siiLogo from '../../../../assets/icons/SII_Logo.png';
import bouyguesLogo from '../../../../assets/icons/bouygues.png';
import naturlyLogo from '../../../../assets/icons/naturly-logo.png';
import lnsLogo from '../../../../assets/img/longNeck-icon.png';

import { useDispatch, useSelector } from 'react-redux';
import { toggleWork } from '../../../../action';
import './styles.scss';

const Work = () => {

  const { workToggled } = useSelector(state => state);

  const dispatch = useDispatch()
  
  const handleClickWork = () => {
    dispatch(toggleWork());
  }
  
  return (
    <section className={"work " + (workToggled && "active")} onClick={handleClickWork}>
      <div className='work__container'>
        <img src={naturlyLogo} alt="" className="work__container__image" />
        <h4 className="work__container__title">[sept 2024/nov 2024] Mission freelance : Naturly</h4>
      </div>
      <div className='work__container__detail'>
        <p className="work__container__detail__text">
          Mon premier projet en freelance a été réalisé pour un client souhaitant intégrer une page interactive avec un mini-jeu à son site web. L’objectif était d’attirer de nouveaux utilisateurs de manière ludique et engageante. La demande se distinguait par son originalité et nécessitait une approche créative et féerique, en harmonie avec l’identité du site, qui faisait la promotion de leur application mobile. Ce projet m’a permis de mettre toute ma créativité au service du client, et a été une expérience enrichissante tant sur le plan technique qu’humain.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Ajout d'une page interactive :</strong> Conception et intégration d'une page supplémentaire en WordPress avec Elementor Pro, enrichie par des animations personnalisées en JavaScript pour répondre précisément aux attentes du client.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Développement d'un thème personnalisé :</strong> Création d'un thème WordPress sur mesure dédié à la page du mini-jeu, conçu pour s'aligner avec l'identité visuelle et les objectifs du projet.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Création d'un mini-jeu :</strong> Développement d'un mini-jeu interactif intégré au site, conçu pour attirer les utilisateurs vers l'application finale et collecter des adresses e-mail, tout en offrant une expérience ludique et engageante.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Plugin WordPress sur mesure :</strong> Développement d'un plugin dédié au mini-jeu, permettant d’enregistrer les nouveaux utilisateurs en base de données et de leur envoyer un e-mail automatisé immédiatement après leur participation.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Intégration d'un service de messagerie :</strong> Connexion et configuration du système d'envoi d'e-mails pour une communication efficace et un suivi optimisé des utilisateurs inscrits.
        </p>
        <p className="work__container__detail__text">
          L’ensemble de ces développements a permis de proposer une solution interactive et ciblée, répondant parfaitement aux besoins marketing et techniques du client.
        </p>        
      </div>
      
      <div className='work__container'>
        <img src={siiLogo} alt="" className="work__container__image" />
        <h4 className="work__container__title">[2021/2022] - SII Group:</h4>
      </div>
      <div className='work__container__detail'>
        <div className='work__container__detail--subtitle'>
          <img src={bouyguesLogo} alt="" className="work__container__detail--subtitle__image" />
          <h4 className="work__container__detail--subtitle__title">Mission Bouygues Télécom</h4>
        </div>
        <p className="work__container__detail__text">
          J'ai débuté mon poste en mai 2021 en tant que développeur sur le projet de Bouygues Télécom. Je ne connaissais pas le langage Python ni l'automatisation de test en arrivant sur cette mission. Très vite, j'ai su m'adapter aux différents langages, outils et process.
        </p>
        <p className="work__container__detail__text">
          Pendant cette expérience, j'ai pris énormément confiance en moi et mes capacités. Avant cette mission, étant autodidacte et sortant d'une formation accélérée, j'avais bien conscience que mon profil n'était pas ragoutant. Pourtant, cette entreprise m'a fait confiance et n'a pas été déçue. Je garde d'ailleurs <strong className='bold'>un très bon contact avec mon équipe, mon directeur technique, mon chef de projet et mon responsable d'agence</strong>. 
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Ils m'ont proposé de donner leurs contacts à mes futurs recruteurs</strong>. Afin de me recommander, d'attester de mes capacités et de me donner une chance de trouver un poste qui me correspond. Je suis très reconnaissant envers eux et je les remercie pour tout ce qu'ils m'ont apporté.
        </p>
        <p className="work__container__detail__text">
          Pendant cette expérience, j'ai abordé beaucoup de sujets: 
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Automatisation de tests réseau et télécom :</strong> Développement de scripts et de processus pour automatiser les tests, réduisant les erreurs humaines et augmentant la productivité.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Développement d’interfaces graphiques :</strong> Conception et réalisation d’outils visuels pour simplifier et accélérer les tâches répétitives.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Campagnes de tests pour les box internet :</strong> Mise en place de scénarios de tests exhaustifs, incluant des vérifications de non-régression, pour garantir la qualité et la fiabilité des box.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Validation des nouvelles offres 4G/5G :</strong> Conception et réalisation de tests prenant en compte la non-régression, pour valider les nouvelles offres de forfaits mobiles tout en répondant aux exigences réseau et aux attentes des clients.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Tests pour équipements ONT/OLT :</strong> Conception et mise en œuvre de campagnes de tests approfondis pour garantir la conformité et la performance des terminaux et équipements optiques au sein de l’infrastructure réseau.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Outil de provisionning/deprovisionning en masse :</strong> Création d’un outil complet, de la conception à la mise en production, pour gérer automatiquement de grandes quantités de cartes SIM.
        </p>
        <p className="work__container__detail__text">
          Ces expériences m’ont permis de développer des compétences pointues en automatisation, en validation de systèmes complexes, et en gestion d’outils critiques pour la performance des services.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Technologies abordées:</strong>
        </p>
        <p className="work__container__detail__text">
          html, css, javascript, groovy script, python, tcl, gitlab, gitlab CI, django, flask, itest, jenkins, mongodb, mysql, jira, confluence, ...
        </p>
      </div>

      <div className='work__container'>
        <img src={lnsLogo} alt="" className="work__container__image" />
        <h4 className="work__container__title">[juil 2022/aout 2022] Développeur web 3: Long Neck Society</h4>
      </div>
      <div className='work__container__detail'>
        <p className="work__container__detail__text">
          J’ai participé à la création d’un projet de NFT, en intervenant sur plusieurs aspects techniques et créatifs :
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Création des visuels :</strong> Réalisation de dessins modulaires (yeux, bouches, corps, arrière-plans, etc.) qui ont été combinés aléatoirement via un programme pour générer une collection unique de 5 555 images, chaque NFT possédant des attributs avec des niveaux de rareté variés.
        </p> 
        <p className="work__container__detail__text">
          <strong className='bold'>Génération des métadonnées :</strong> Association de chaque image à un fichier JSON contenant ses attributs (ex. : rareté, type) et un numéro unique.
        </p> 
        <p className="work__container__detail__text">
          <strong className='bold'>Inscription sur la blockchain :</strong> Développement d’un script automatisé pour stocker les images sur un serveur, associer chaque fichier JSON à son NFT, et inscrire l’ensemble de la collection sur la blockchain.
        </p> 
        <p className="work__container__detail__text">
          <strong className='bold'>Développement du site :</strong> Création d’un site web de présentation de la collection et d’une page de mint.
        </p>   
        <p className="work__container__detail__text">
          <strong className='bold'>Page de mint :</strong> Plateforme permettant aux utilisateurs d’acquérir un NFT directement depuis la blockchain. Le processus de mint consiste à inscrire un NFT à l’utilisateur, générant ainsi une preuve de propriété directement sur la blockchain.
        </p>
        <p className="work__container__detail__text">
          Ce projet m’a permis de combiner compétences techniques (programmation, blockchain) et créatives (design graphique) tout en contribuant à une expérience utilisateur complète, de la création des visuels à leur mise en ligne et acquisition.
        </p>      
      </div>
      
    </section>
  )
};

export default Work;