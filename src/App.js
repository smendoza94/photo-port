import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

// React components follow the PascalCase naming convention.
// Knowing this will help you quickly identify whether a
// function is a component or just a regular function.

function App() {
  // We set the initial value of contactSelected to false to prevent the contact
  // form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);

  // Lift state to App.js, pass the currentCategory and Setter through to Nav,
  // and move categories up to the App level.
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* The shorthand condition is called a ternary operator, identified with the ? and : symbols. */}
        {/* IF contact is not selected THEN show Gallery & About ELSE show Contact form*/}
        {!contactSelected ? (
          // React fragments—a <> shorthand abbreviation for <React.Fragment></React.Fragment>
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
