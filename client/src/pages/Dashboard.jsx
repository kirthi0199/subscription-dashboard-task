import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [sub, setSub] = useState(null);

  useEffect(() => {
    api.get("/my-subscription").then(res => setSub(res.data));
  }, []);

  return (
    <div>
      <h1>My Subscription</h1>
      {sub ? (
        <div>
          <h3>{sub.plan_id.name}</h3>
          <p>Status: {sub.status}</p>
        </div>
      ) : (
        <p>No active subscription</p>
      )}
    </div>
  );
}
