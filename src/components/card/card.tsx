// import React, { Component } from "react";
import "./card.css";
import { monsterArray } from "../../App";
type CardProps = {
  monster: monsterArray;
};
const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div key={id} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}/?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div key={id} className="card-container">
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}/?set=set2&size=180x180`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
export default Card;
