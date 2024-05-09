import React, { useState } from 'react';
import './App.css';
function Form() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: null
  });

  // Handler function to update form data as user types
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  // Handler function to submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, like sending data to server or performing validation
    console.log(formData);
    // Clear form after submission
    setFormData({
      title: '',
      category: '',
      description: '',
      image: null
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title of Idea:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Product Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description of Product:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Attachment:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

