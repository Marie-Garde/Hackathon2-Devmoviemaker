import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Slider () {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>Rédiger un script/scénario reflétant votre parcours, écrivez-le !</Item>
        <Item>Les sections doivent contenir une accroche, une présentation, vos formations, vos expériences, vos centres d’intérêt en quelques mots,</Item>
        <Item>L’étape d’après vous aidera à timer votre scénario en fonction de votre profil</Item>
        <Item>Choisir un plan statique (pas de gros plan, pas de plan large)</Item>
        <Item>Privilégier une ambiance lumineuse claire en évitant les néons</Item>
        <Item>Adopter une posture statique mais garder un dynamisme en n’oubliant pas que 60 % de la communication est visuelle</Item>
        <Item>Soigner votre tenue vestimentaire (pas de rayures, faites la correspondre aux code de votre profession)</Item>
        <Item>Faites attention à la qualité audio : pas de bruits extérieurs, articuler !</Item>
        <Item>Entraînez-vous jusqu’à trouver le bon équilibre et la bonne fluidité</Item>
        <Item>Vous avez entre 1mn et 1mn30 pour être impactant(e) </Item>
      </Carousel>
    </div>
  );
}

export default Slider