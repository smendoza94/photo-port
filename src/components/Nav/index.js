import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Hooks are JavaScript functions that follow two rules:

// The first rule: "Only call Hooks from React functions." Use Hooks to affect the state of
// a component in some way and trigger the component to render.

// The second rule: "Only call Hooks at the top level". You cannot use hooks inside for loops,
// nested functions within your React component, or conditionals. For organizational purposes
// and rules, use Hooks towards the top of your React component.
function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // update the tab on the browser to reflect the user's category selection
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  // nav component
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            // currentCategory.name === category.name will get evaluated when true,
            // then the second bit of the short circuit, navActive, will be returned.
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
