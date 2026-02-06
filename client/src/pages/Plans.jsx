import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("/plans").then(res => setPlans(res.data));
  }, []);

  const subscribe = async (id) => {
    await api.post(`/subscribe/${id}`);
    alert("Subscribed!");
  };

  return (
    <div>
      <h1>Plans</h1>
      {plans.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => subscribe(p._id)}>Subscribe</button>
        </div>
      ))}
    </div>
  );
}
