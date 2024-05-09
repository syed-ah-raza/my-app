import React, { useState } from 'react';

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
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">title of idea</label>
          <input type="text" id="name" name="title" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>product category:</label>
          <input type="text"  name="catogery" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">description of product</label>
          <textarea  name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label >image attachment</label>
          <textarea type="file" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
