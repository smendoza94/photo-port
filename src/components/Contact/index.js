import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// Forms have an internal state, we can leverage the useState Hook to maintain the form data with state
// When form data is maintained by the state of the component, its called a controlled component.
// When the data is retrieved, then submitted directly from the DOM,its called an uncontrolled component.
function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  // this Hook has ability to initialize the values of the state.
  // In this case, we want to clear the input fields on the component loading.
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    // The setFormState function to update the formState value for the name property. We assign the
    // value taken from the input field in the UI with e.target.value and assign this value to the
    // property formState.name. We use the spread operator, ...formState, so we can retain the other
    // key-value pairs in this object. Without the spread operator, the formState object would be
    // overwritten to only contain the name: value key pair.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // The name property of target in the preceding expression actually refers to the name attribute
    // of the form element. This attribute value matches the property names of formState (name, email,
    // and message) and allows us to use [ ] to create dynamic property names.
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  const { name, email, message } = formState;

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* if errorMessage render this message JSX message*/}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" data-testid="buttontag">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
