import React, { useState } from "react";

const FormExercise = () => {
  /*
    Requirements:

    1. Create a form with the following fields:
      - First Name (text)
      - Last Name (text)
      - Email (email)
      - Password (password)
      - Confirm Password (password)
      - Submit (button)

    2. The submit button should only be enabled if all the fields are filled out and the password and confirm password fields match.

    3. The first name and last name fields should be uppercase.

    4. The email field should be lowercase, and has to be a valid email address (use ).

    5. The password field should be at least 8 characters long.

    6. All the fields should have placeholder text.

    7. When submit is clicked, the form should log the values of the fields to the console, and the fields should be cleared, if the form is valid.
  */
    //const [inputValue,setInputValue] = useState('');

    const [formData, setFormData] = useState({name: "",lastName: '',email: "",password:'',message: ""});

    const handleChange = (event)=>{
        
        setInputValue(...formData,event.target.value);
    }
    const handleSubmit= (event)=>{
        event.preventDefault();
    }

  return (
    <div className="user-form">
      <h2>User Form</h2>
      <form>
        <label>First Name:</label>
        <input type="text" value={inputValue.name} onChange={handleChange} />
        <label>Last Name:</label>
        <input type="text" value={inputValue.lastName} onChange={handleChange}/>
        <label>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" value={formData.password} onChange={handleChange} />
        <label>Confirm Password:</label>
        <input type="password" />
        <button type="submit" value={imputSubmit} onSubmit={handleSubmit} >Submit</button>
      </form>
    </div>
  );
}

export default FormExercise;