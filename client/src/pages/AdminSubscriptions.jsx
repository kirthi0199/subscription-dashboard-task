import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminSubscriptions() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/admin/subscriptions").then(res => setSubs(res.data));
  }, []);

  return (
    <div>
      <h1>All Subscriptions (Admin)</h1>
      {subs.map(s => (
        <div key={s._id}>
          <p>User: {s.user_id.email}</p>
          <p>Plan: {s.plan_id.name}</p>
          <p>Status: {s.status}</p>
        </div>
      ))}
    </div>
  );
}
