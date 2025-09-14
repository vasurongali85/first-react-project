import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import Swal from "sweetalert2"; 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  registerUser } from "./store";
function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate(); // initialize navigate
 const dispatch = useDispatch();

    const handleSignup = (data) => {
       dispatch(registerUser({ username: data.username, password: data.password }));

    // SweetAlert success message
    Swal.fire({
      title: 'Signup Successful!',
      text: `Welcome, ${data.username}!`,
      icon: 'success',
      timer: 1000,          // optional auto-close after 2s
      timerProgressBar: true
    }).then(() => {
      // Redirect to home page
      navigate("/");
    });
  };

  return (
    <div className="signup-container ">
      <div className="signup-card shadow-lg">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit(handleSignup)} className="signup-form">

          {/* Username */}
          <div className="form-floating mb-3 position-relative">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className={`form-control ${errors.username? "is-invalid" : ""}`}
              id="username"
              placeholder=" "
            />
            <label htmlFor="username">Username</label>
            {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
          </div>

          {/* Email */}
          <div className="form-floating mb-3 position-relative">
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder=" "
            />
            <label htmlFor="email">Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Phone */}
          <div className="form-floating mb-3 position-relative">
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              id="phone"
              placeholder=" "
            />
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
          </div>

          {/* Date of Birth
          <div className="form-floating mb-3 position-relative">
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              id="dob"
              placeholder=" "
            />
            <label htmlFor="dob">Date of Birth</label>
            {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
          </div> */}

          {/* Gender */}
          <div className="form-floating mb-3 position-relative">
            <select
              {...register("gender", { required: "Gender is required" })}
              className={`form-select ${errors.gender ? "is-invalid" : ""}`}
              id="gender"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="gender">Gender</label>
            {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
          </div>

          {/* Password */}
          <div className="form-floating mb-3 position-relative">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          {/* Confirm Password */}
          <div className="form-floating mb-4 position-relative">
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              id="confirmPassword"
              placeholder=" "
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
          </div>

          {/* Terms & Conditions */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
              id="terms"
              {...register("terms", { required: "You must accept the terms and conditions" })}
            />
            <label className="form-check-label" htmlFor="terms">
              By creating an account, I accept the <a href="/terms" className="text-primary">Terms & Conditions</a> & <a href="/privacy" className="text-primary">Privacy Policy</a>
            </label>
            {errors.terms && <div className="invalid-feedback">{errors.terms.message}</div>}
          </div>

          <button type="submit" className="btn btn-gradient w-100 mb-3">Sign Up</button>

          <p className="text-center text-muted">
            Already have an account? <Link to="/login" className="text-primary fw-bold">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;


// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { registerUser } from "./store";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Signup.css";

// function SignUp() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSignup = (data) => {
//     dispatch(registerUser({ username: data.username, password: data.password }));

//     Swal.fire({
//       title: 'Signup Successful!',
//       text: `Welcome, ${data.username}!`,
//       icon: 'success',
//       timer: 1000,
//       timerProgressBar: true
//     }).then(() => {
//       navigate("/login");
//     });
//   };

//   return (
//     <div className="signup-container d-flex align-items-center justify-content-center vh-100">
//       <div className="signup-card p-5 shadow-lg rounded-4">
//         <h2 className="text-center mb-4">Create Account</h2>
//         <form onSubmit={handleSubmit(handleSignup)}>

//           {/* Username */}
//           <div className="form-floating mb-3">
//             <input
//               type="text"
//               {...register("username", { required: "Username is required" })}
//               className={`form-control ${errors.username ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Username</label>
//             {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
//           </div>

//           {/* Email */}
//           <div className="form-floating mb-3">
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
//               })}
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Email</label>
//             {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//           </div>

//           {/* Phone */}
//           <div className="form-floating mb-3">
//             <input
//               type="tel"
//               {...register("phone", {
//                 required: "Phone number is required",
//                 pattern: { value: /^[0-9]{10}$/, message: "Phone number must be 10 digits" }
//               })}
//               className={`form-control ${errors.phone ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Phone Number</label>
//             {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
//           </div>

//           {/* Date of Birth */}
//           <div className="form-floating mb-3">
//             <input
//               type="date"
//               {...register("dob", { required: "Date of Birth is required" })}
//               className={`form-control ${errors.dob ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Date of Birth</label>
//             {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
//           </div>

//           {/* Gender */}
//           <div className="form-floating mb-3">
//             <select
//               {...register("gender", { required: "Gender is required" })}
//               className={`form-select ${errors.gender ? "is-invalid" : ""}`}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             <label>Gender</label>
//             {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
//           </div>

//           {/* Password */}
//           <div className="form-floating mb-3">
//             <input
//               type="password"
//               {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Password</label>
//             {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
//           </div>

//           {/* Confirm Password */}
//           <div className="form-floating mb-4">
//             <input
//               type="password"
//               {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: value => value === watch("password") || "Passwords do not match"
//               })}
//               className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
//               placeholder=" "
//             />
//             <label>Confirm Password</label>
//             {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
//           </div>

//           {/* Terms & Conditions */}
//           <div className="form-check mb-3">
//             <input
//               type="checkbox"
//               {...register("terms", { required: "You must accept the terms" })}
//               className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
//               id="terms"
//             />
//             <label className="form-check-label" htmlFor="terms">
//               I accept the <Link to="/terms">Terms & Conditions</Link>
//             </label>
//             {errors.terms && <div className="invalid-feedback">{errors.terms.message}</div>}
//           </div>

//           <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>

//           <p className="text-center text-muted">
//             Already have an account? <Link to="/login" className="text-primary fw-bold">Sign In</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
