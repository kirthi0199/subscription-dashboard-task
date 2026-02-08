import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "../ThemeContext";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    api.get("/plans").then(res => setPlans(res.data));
  }, []);

  const handleSubscribe = async (planId) => {
    try {
      await api.post(`/subscribe/${planId}`);
      alert("Subscribed successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Subscription failed");
    }
  };

  return (
    <div className="container mt-5 mb-5">

      {/* ====== HEADING ADDED ====== */}
      <h2 className={`mb-3 text-center ${theme === "dark" ? "text-white" : "text-dark"}`}>
        Choose Your Subscription Plan
      </h2>
      <p className={`mb-3 text-center ${theme === "dark" ? "text-white" : "text-dark"}`}>
        Select a plan that best suits your needs
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
        {plans.map((p, i) => (
          <Fade key={p._id} direction="up" duration={300}>
            <div className="plan-wrapper">

              <div
                className={`card p-3 plan-card position-relative ${
                  theme === "dark" ? "bg-dark text-white" : ""
                }`}
              >

                <h4 className="text-center">{p.name}</h4>
                <hr />

                <h3 className="text-center">₹ {p.price}</h3>
                <p className="text-center text-muted">
                  Valid for {p.duration} days
                </p>
 
                <ul>
                 <ul>
  <li>Unlimited access to all features</li>
  <li>24/7 customer support available</li>
  <li>Fast and secure service usage</li>
  <li>Cancel subscription anytime easily</li>
</ul>

                </ul>
              
<button
  className="btn btn-success w-100 mt-3 rounded-pill"
  onClick={() => handleSubscribe(p._id)}
>
  Subscribe
</button>


              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
