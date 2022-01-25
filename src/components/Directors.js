import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director)=>(
    <div key={director.name}>
      <h2>Name:{director.name}</h2>
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>Movies:{movie}</li>
        ))}
      </ul>
    </div>
  ))
  
  return <div>
    <h1>Directors Page</h1>
    {directorItems}
  </div>;
}

export default Directors;
