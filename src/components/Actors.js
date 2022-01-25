import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItem= actors.map((actor)=>(
    <div key={actor.name}> 
      <h2>Name: {actor.name}</h2>
      <ul>
        {actor.movies.map((movie)=>(
          <li key={movie}>Movies:{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Actors Page</h1>
    {actorsItem}
    
    </div>;
}

export default Actors;
