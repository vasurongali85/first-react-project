import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store";  
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    setUserNameError("");
    setPasswordError("");

    if (!username) {
      setUserNameError("Username is required");
      userNameRef.current.focus();
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      passwordRef.current.focus();
      return;
    }

    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      // Dispatch login
      dispatch(loginUser({ username, password }));

      // ✅ Show toast
      toast.success(`🎉 Login Successful! Welcome ${username.toUpperCase()}`, {
        style: { width: "400px" },
        autoClose: 2500,
      });

      // Delay navigation so toast shows
      setTimeout(() => {
        navigate("/");
      }, 200);

    } else {
      Swal.fire({
        title: "Account Not Found",
        text: "It seems you don't have an account. Would you like to create one?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Create Account",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#de750cff",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup");
        }
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card  shadow-lg ">
        <h2 className="text-center ">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            ref={userNameRef}
            className={`form-control mb-2 ${userNameError ? "is-invalid" : ""}`}
          />
          {userNameError && <small className="text-danger">{userNameError}</small>}

          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className={`form-control mb-2 ${passwordError ? "is-invalid" : ""}`}
          />
          {passwordError && <small className="text-danger">{passwordError}</small>}

          <div className="text-end mb-3">
            <Link to="/forgot-password" className="text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

          <p className="text-center text-muted">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary fw-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
