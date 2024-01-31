import React from "react";
import MovieDetails from "./components/MovieDetails.jsx";
import "./style/movie.css";

function App() {
  const favoriteMovies = [
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      year: 2001,
      studio: "New Line Cinema",
      poster:
        "https://www.fulcrumgallery.com/product-images/P172968-10/lord-of-the-rings-fellowship-of-the-ring-vertical.jpg",
    },

    {
      title: "The Lord of the Rings: The Two Towers",
      director: "Peter Jackson",
      year: 2002,
      studio: "New Line Cinema",
      poster:
        "https://artofthemovies.co.uk/cdn/shop/products/lord_of_the_rings_the_two_towers_NG06275_B-159226.jpg?v=1611688137",
    },
    ,
    {
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      year: 2003,
      studio: "New Line Cinema",
      poster:
        "https://filmartgallery.com/cdn/shop/products/The-Lord-of-the-Rings-The-Return-of-the-King-Vintage-Movie-Poster-Original-1-Sheet-27x41_dc5e03aa-c6d1-4c48-b9a9-ce716488f259.jpg?v=1663222722",
    },
  ];

  return (
    <div className="movie">
      {favoriteMovies.map((movie, index) => (
        <MovieDetails key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;
