import React, {useState} from 'react'
import Input from './Input'
import Button from './Button';
import Select from './Select';


function RegisterForm() {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, age, email, password});
        
    }
  return (
   <div>

    <form onSubmit={handleSubmit}>
     <Input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
     <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
     <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
     <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
     <Button type="submit" text="Submit" />
     <br />
     <br />

      <Select name="gender" options={[{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]} value={age} onChange={(e) => setAge(e.target.value)} />
        <Select name="country" options={[{value: 'us', label: 'United States'}, {value: 'ca', label: 'Canada'}]} value={age} onChange={(e) => setAge(e.target.value)} />
            <Select name="language" options={[{value: 'en', label: 'English'}, {value: 'fr', label: 'French'}]} value={age} onChange={(e) => setAge(e.target.value)} />
    </form>
   </div>
  )
}

export default RegisterForm