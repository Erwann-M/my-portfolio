import bbqImg from "../assets/img/blablaquest-img.png";
import bbqIcon from "../assets/img/blablaquest-icon.png";
import portfolioImg from "../assets/img/portfolio-img.png";
import portfolioIcon from "../assets/img/portfolio-icon.png";
import lns1Img from "../assets/img/longNeck-image.png";
import lns1Icon from "../assets/img/longNeck-icon.png";
import lns2Img from "../assets/img/lns-image.png";
import lns2Icon from "../assets/img/lns-icon.png";
import localhostImg from "../assets/img/localhost-image.png";
import localhostIcon from "../assets/img/localhost-icon.png";
import labIcon from "../assets/img/labyrinthe-icon.png";
import labImage from "../assets/img/labyrinthe-image.png";
import wineImage from "../assets/img/vin-image.png";
import wineIcon from "../assets/img/vin-icon.png";
import bananaImage from "../assets/img/banana-image.png";
import bananaIcon from "../assets/img/banana-icon.png";
import gardenerImage from "../assets/img/gardener-image.png";
import gardenerIcon from "../assets/img/gardener-icon.png";

const datas = [
  {
    id: 0,
    title: "Blabla Quest",
    titleSlug: "blabla_quest",
    image: bbqImg,
    icon: bbqIcon,
    link: "pas de lien",
    githubLink: "https://github.com/Erwann-M/BlaBla-Quest",
    description: "BlaBlaquest est le projet de fin de formation que j'ai éffectué en groupe. J'était dans l'équipe front-end. Nous étions en total autonomie, de la conception a la mise en production. Nous avons travaillé en 4 sprints d'une semaine, le projet a donc duré un mois. Il est fait en React pour le front et Symfony pour le back."
  },
  {
    id: 1,
    title: "My portfolio",
    titleSlug: "my_portfolio",
    image: portfolioImg,
    icon: portfolioIcon,
    link: "Vous êtes déja dessus :)",
    githubLink: "https://github.com/Erwann-M/my-portfolio",
    description: "Le portfolio sur lequel vous êtes. Je l'ai réalisé en jsx, React, sass. J'ai mis environ 1 mois à le réaliser. Il mérite encore quelques améliorations et elles viendront. Si vous cherchez bien (et si vous en avez le temps) des petits easters eggs s'y cachent. ;)",
  },
  {
    id: 2,
    title: "Long Necks Society v1",
    titleSlug: "Long_Neck_Society_v1",
    image: lns1Img,
    icon: lns1Icon,
    link: "privé",
    githubLink: "privé",
    description: "Un projet de site de mint nft fait pendant la formation avec des amis. Celle-ci est la version 1. Nous avons refait entièrement le site par la suite. Il est fait en html, css, js et la partie \"mint\" communique avec la blockchain solana, le back est en partie en rust.",
  },
  {
    id: 3,
    title: "Long Necks Society v2",
    titleSlug: "Long_Neck_Society_v2",
    image: lns2Img,
    icon: lns2Icon,
    link: "privé",
    githubLink: "privé",
    description: "Voici la version final de notre projet de site de mint nft.",
  },
  {
    id: 4,
    title: "Localhost stylesed",
    titleSlug: "localHost_stylesed",
    image: localhostImg,
    icon: localhostIcon,
    link: "pas de lien",
    githubLink: "https://github.com/Erwann-M/localhost-stylesed",
    description: "Un projet pour personnaliser son localhost. J'en avais marre de voir un localhost tout moche, j'ai donc entrepris de le personnaliser moi-même. Celui-ci est en PHP.",
  },
  {
    id: 5,
    title: "Le labyrinthe",
    titleSlug: "le_labyrinthe",
    image: labImage,
    icon: labIcon,
    link: "pas de lien",
    githubLink: "https://github.com/Erwann-M/My-first-python-project",
    description: "Mes toutes premières lignes de code. Écrites en 2019. Je sais ce n'est pas fameux, mais ce script a une valeur sentimentale pour moi. C'est le début d'une grande aventure qui n'est pas prête de s'arrêter...",
  },
  {
    id: 6,
    title: "Le bon vin",
    titleSlug: "le_bon_vin",
    image: wineImage,
    icon: wineIcon,
    link: "pas de lien",
    githubLink: "pas de lien",
    description: "Un site vitrine fictif d'une boutique de vin.",
  },
  {
    id: 7,
    title: "Banana Design",
    titleSlug: "banana_design",
    image: bananaImage,
    icon: bananaIcon,
    link: "pas de lien",
    githubLink: "pas de lien",
    description: "Un site vitrine fictif d'une agence de création de site wordpress.",
  },
  {
    id: 8,
    title: "Top gardener",
    titleSlug: "top_gardener",
    image: gardenerImage,
    icon: gardenerIcon,
    link: "pas de lien",
    githubLink: "pas de lien",
    description: "Un site vitrine fictif d'une entreprise de paysagiste.",
  },
]

export default datas;