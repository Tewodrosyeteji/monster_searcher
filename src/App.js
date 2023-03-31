import { useEffect, useState } from "react";
import "./App.css";
// import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import Search from "./components/search/search";

const App = () => {
  const [searchFiled, setSearchFiled] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonster = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFiled)
    );
    setFilteredMonster(newfilteredMonster);
  }, [monsters, searchFiled]);

  const searchChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monster Search</h1>
      <Search
        type="search"
        placeholder="search monster"
        changed={searchChangeHandler}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFiled: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         })
//       );
//   }

//   searchChangeHandler = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState({
//       searchFiled: searchString,
//     });
//   };
//   render() {
//     const filteredMonster = this.state.monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(this.state.searchFiled)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title"> Monster Search</h1>
//         <Search
//           type="search"
//           placeholder="search monster"
//           changed={this.searchChangeHandler}
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
