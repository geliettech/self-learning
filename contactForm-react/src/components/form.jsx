// Importing necessary dependencies and components
import React, { useState } from "react";
import "./form.css"; // Importing form.css for styling the form
import { nanoid } from "nanoid"; // Importing nanoid for generating unique IDs
import { FaSpinner } from "react-icons/fa"; // Importing FaSpinner icon from react-icons

// Initial state object for the form, with a unique ID and empty fields
const INITIAL_STATE = {
  id: nanoid(), // Generate a unique ID
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

// ContactUsForm component definition, accepting a submitForm function as a prop
const ContactUsForm = ({ submitForm }) => {
  // State hooks for managing form data, errors, submission status, and loading state
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handler for input changes, updating the form state
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    // Logging form data for debugging purposes
    console.log(
      form.firstName +
        " " +
        form.lastName +
        " " +
        form.email +
        " " +
        form.subject +
        " " +
        form.message
    );
  };

  // Function to validate the form fields
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form and handle errors if any
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus("");
      setLoading(false);
    } else {
      setErrors({});
      setLoading(true);

      // Handle form submission using the submitForm function passed as a prop
      submitForm(form)
        .then((response) => {
          // Log the response data for debugging purposes
          console.log("Response Data:", response.data);

          // Log specific status from the response
          console.log("Response Status:", response.status);
          setSubmitStatus("Form submitted successfully");
          setForm(INITIAL_STATE); // Reset the form
        })
        .catch((error) => {
          // Log the entire error for debugging
          console.error("Error occurred:", error);
          setSubmitStatus(
            `There was an error submitting the form: ${error.message}`
          );
        })
        .finally(() => {
          setLoading(false); // Reset the loading state
        });
    }
  };

  // JSX for rendering the form
  return (
    <div className="form-wrapper">
      <h2>Contact Us</h2>
      {submitStatus && (
        <p
          className={`submit-status ${
            submitStatus.includes("error") ? "error-status" : "success"
          }`}
        >
          {submitStatus}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group Name-group">
          <div className="name-input-wrapper">
            <label htmlFor="firstName">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className={
                errors.firstName ? "error-input-border" : "input-border"
              }
            />
            {errors.firstName && (
              <p id="firstNameError" className="error">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="name-input-wrapper">
            <label htmlFor="lastName">
              Last Name<sup>*</sup>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className={
                errors.lastName ? "error-input-border" : "input-border"
              }
            />
            {errors.lastName && (
              <p id="lastNameError" className="error">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="form-group email-input-wrapper">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-describedby="emailError"
            className={errors.email ? "error-input-border" : "input-border"}
          />
          {errors.email && (
            <p id="emailError" className="error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="form-group subject-input-wrapper">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group message-input-wrapper">
          <label htmlFor="message">
            Message<sup>*</sup>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            aria-describedby="messageError"
            className={errors.message ? "error-input-border" : "input-border"}
          />
          {errors.message && (
            <p id="messageError" className="error">
              {errors.message}
            </p>
          )}
        </div>

        <div className="btn-wrapper">
          <button className="btn" type="submit">
            {loading ? <FaSpinner className="loading-icon" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Exporting the ContactUsForm component as the default export
export default ContactUsForm;
