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
        <Item>Rédiger un script/scénario reflétant votre parcours, <br></br>et écrivez-le !</Item>
        <Item>Prévoir une accroche, une présentation, vos formations, vos expériences, vos centres d’intérêt en quelques mots</Item>
        <Item> Notre outil timer vous permettra de calquer les sections de votre scénario sur la vidéo</Item>
        <Item>Choisir un plan statique et eviter le gros plan et plan large</Item>
        <Item>Privilégier une ambiance lumineuse et claire en évitant les néons</Item>
        <Item>Adopter une posture statique mais garder un dynamisme en n’oubliant pas la communication visuelle</Item>
        <Item>Soigner votre tenue vestimentaire, faites la correspondre aux codes de votre profession, eviter les rayures</Item>
        <Item>Faites attention à la qualité audio, neutraliser les bruits extérieurs, articuler !</Item>
        <Item>Entraînez-vous jusqu’à trouver le bon équilibre et la bonne fluidité</Item>
        <Item>Vous avez entre 1mn et 1mn30 pour être impactant(e) </Item>
      </Carousel>
    </div>
  );
}

export default Slider