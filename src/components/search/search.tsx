// import React, { Component } from "react";
import "./search.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  changed: ChangeEventHandler<HTMLInputElement>;
};

const Search = ({ className, placeholder, changed }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={changed}
  />
);

export default Search;
