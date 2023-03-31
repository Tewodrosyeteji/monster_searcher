// import React, { Component } from "react";
import "./search.css";

const Search = ({ type, placeholder, changed }) => {
  return (
    <div className="search">
      <input type={type} placeholder={placeholder} onChange={changed} />
    </div>
  );
};
// class Search extends Component {
//   render() {
//     return (
//       <div className="search">
//         <input
//           type={this.props.type}
//           placeholder={this.props.placeholder}
//           onChange={this.props.changed}
//         />
//       </div>
//     );
//   }
// }

export default Search;
