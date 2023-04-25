// import React, { Component } from "react";
import Card from "../card/card";
import "./card-list.css";
import { monsterArray } from "../../App";

type CardListProps = {
  monsters: monsterArray[];
};
const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster, i) => {
        return <Card key={i} monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster, i) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
