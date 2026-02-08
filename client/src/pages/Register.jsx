import { useContext } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user"
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      role: Yup.string().required("Role is required")
    }),
    onSubmit: async (values) => {
      try {
        await api.post("/auth/register", values);
        alert("Registered successfully!");
        navigate("/login");
      } catch (err) {
        alert(err.response?.data?.message || "Registration failed");
      }
    }
  });

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className={`card p-4 shadow ${theme === "dark" ? "bg-dark text-white" : ""}`} style={{ width: "450px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={formik.handleSubmit}>

          <input
            className="form-control mb-2"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger mb-2">{formik.errors.name}</div>
          )}

          <input
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger mb-2">{formik.errors.email}</div>
          )}

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-danger mb-2">{formik.errors.password}</div>
          )}

          <select
            className="form-control mb-3"
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
<div className="d-flex justify-content-center">
  <button 
    type="submit" 
    className="btn btn-success mb-2"
    style={{
      width: "auto",
      padding: "10px 30px",
      borderRadius: "50px"
    }}
  >
    Register
  </button>
</div>


        </form>

        <button className="btn btn-link already-btn mt-2" onClick={() => navigate("/login")}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
