import { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
// import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import Search from "./components/search/search";
import { getData } from "./utils/data.utils";

export type monsterArray = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchFiled, setSearchFiled] = useState("");
  const [monsters, setMonsters] = useState<monsterArray[]>([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    // const fetchUser= async getData<monserArray[]>("https://jsonplaceholder.typicode.com/users")
    const fetchuser = async () => {
      const users = await getData<monsterArray[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchuser();
  }, []);

  useEffect(() => {
    const newfilteredMonster = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFiled)
    );
    setFilteredMonster(newfilteredMonster);
  }, [monsters, searchFiled]);

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monster Search</h1>
      <Search
        className="monsters-search-box"
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
