// Importing the App.css stylesheet for styling
import "./App.css";

// Importing the ContactUsForm component from the components directory
import ContactUsForm from "./components/form";

// Importing the Axios library for making HTTP requests
import axios from "axios";

// Importing React library
import React from "react";

// Defining the main App component
function App() {
  // Defining the ContactUsApp function to handle form submission
  const ContactUsApp = (form) => {
    // Make a POST request using Axios to a mock API server with the form data
    return axios.post(
      "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
      form
    );
  };

  // Returning the main JSX structure of the App component
  return (
    <div className="App">
      {/* Rendering the ContactUsForm component and passing the ContactUsApp function as a prop */}
      <ContactUsForm submitForm={ContactUsApp} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
