import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    gender: '',
    race: '',
    gpa: '',
    satScore: '',
    actScore: '',
    college: '',
    major: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data.chance);
    // Handle response
};


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="gender" type="text" placeholder="Gender" onChange={handleChange} />
        <input name="race" type="text" placeholder="Race/Ethnicity" onChange={handleChange} />
        <input name="gpa" type="number" placeholder="GPA (Unweighted)" onChange={handleChange} />
        <input name="satScore" type="number" placeholder="SAT Score" onChange={handleChange} />
        <input name="actScore" type="number" placeholder="ACT Score" onChange={handleChange} />
        <input name="college" type="text" placeholder="Intended College" onChange={handleChange} />
        <input name="major" type="text" placeholder="Intended Major" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
