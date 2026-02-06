import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const register = async () => {
    await api.post("/auth/register", form);
    alert("Registered! Now login.");
  };

  return (
    <div className="p-10">
      <h1>Register</h1>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={register}>Register</button>
    </div>
  );
}
