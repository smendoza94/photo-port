import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

// using props from Nav to determine category, Nav is in a lifted state
// to be accessible for Gallery components

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList />
    </section>
  );
}

export default Gallery;
