
import React, { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    direction: "",
    year: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validate() {
    let newErrors = {};

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Emri duhet të ketë së paku 2 karaktere";
    }

    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Mbiemri duhet të ketë së paku 2 karaktere";
    }

    

    if (!formData.gender) {
      newErrors.gender = "Zgjidhni gjininë";
    }

    if (!formData.birthDate || formData.birthDate > new Date().toISOString().split("T")[0]) {
      newErrors.birthDate = "Zgjidhni një datë valide";
    }

    if (!formData.direction) {
      newErrors.direction = "Zgjidhni drejtimin";
    }

    if (!formData.year) {
      newErrors.year = "Zgjidhni vitin e studimeve";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      onAddStudent(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        birthDate: "",
        direction: "",
        year: "",
      });
      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Regjistrimi i studentit</h2>

      <label>Emri:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Shkruani emrin"
      />
      <p>{errors.firstName}</p>

      <label>Mbiemri:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Shkruani mbiemrin"
      />
      <p>{errors.lastName}</p>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@gmail.com"
      />
      <p>{errors.email}</p>

      <label>Telefoni:</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+383..."
      />
      <p>{errors.phone}</p>

      <label>Gjinia:</label>
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Zgjidhni gjininë</option>
        <option value="Mashkull">Mashkull</option>
        <option value="Femër">Femër</option>
      </select>
      <p>{errors.gender}</p>

      <label>Data e lindjes:</label>
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
      />
      <p>{errors.birthDate}</p>

      <label>Drejtimi:</label>
      <select name="direction" value={formData.direction} onChange={handleChange}>
        <option value="">Zgjidhni drejtimin</option>
        <option value="Gjimnaz Natyor">Gjimnaz Natyor</option>
        <option value="Gjimnaz Shoqeror">Gjimnaz Shoqeror</option>
        <option value="Teknikë">Teknikë</option>
        <option value="Ekonomi">Ekonomi</option>
      </select>
      <p>{errors.direction}</p>

      <label>Viti i studimeve:</label>
      <select name="year" value={formData.year} onChange={handleChange}>
        <option value="">Zgjidhni vitin</option>
        <option value="Klasa 10">Klasa 10</option>
        <option value="Klasa 11">Klasa 11</option>
        <option value="Klasa 12">Klasa 12</option>
      </select>
      <p>{errors.year}</p>

      <button type="submit">Regjistro studentin</button>
    </form>
  );
}

export default StudentForm;
