import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

// Hooks are JavaScript functions that follow two rules:

// The first rule: "Only call Hooks from React functions." Use Hooks to affect the state of
// a component in some way and trigger the component to render.

// The second rule: "Only call Hooks at the top level". You cannot use hooks inside for loops,
// nested functions within your React component, or conditionals. For organizational purposes
// and rules, use Hooks towards the top of your React component.

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div>
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Gallery;
