import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h2 className="form-title">Login to AuthHub</h2>

        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-wrapper">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        

        <button type="submit" className="submit-btn">Login</button>

        <p className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="link">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
