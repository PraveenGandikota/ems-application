import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const[error, setError] = useState(null)
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/auth/adminlogin', values)
      .then((result) => {
        if(result.data.loginStatus){
          navigate('/dashboard');
        } else{
          setError(result.data.Error)
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center loginPage pre-page">
      <div className="stars"></div>
      <div className="p-3 rounded border loginForm">
        <div className="logo-container">
          <img src="/Images/logo.png" alt="Logo" className="logopg" />
          <h1 className='welcome-heading'>Welcome to PG</h1>
        </div>
        <p className="heddfiv">Please Login to Continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Email Address"
              className="form-control bar"
              required
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="form-control bar"
              required
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <i
              className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <button className="btn btn-success rounded-10">Login</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;












// import React, { useEffect } from "react";
// import "./Login.css";

// const Login = () => {
//   useEffect(() => {
//     const canvas = document.getElementById("starsCanvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     for (let i = 0; i < 150; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 2,
//         speed: Math.random() * 0.5,
//       });
//     }

//     function drawStars() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "white";

//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     }

//     function updateStars() {
//       stars.forEach((star) => {
//         star.y += star.speed;
//         if (star.y > canvas.height) star.y = 0;
//       });
//     }

//     function animate() {
//       drawStars();
//       updateStars();
//       requestAnimationFrame(animate);
//     }

//     animate();

//     window.addEventListener("resize", () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });
//   }, []);

//   return (
//     <div className="loginPage">
//       <canvas id="starsCanvas"></canvas>
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="p-4 rounded w-25 border loginForm d-flex flex-row justify-content-center">
//           <h1 className="text-center">Login</h1>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="email">
//                 <strong>Email:</strong>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 autoComplete="off"
//                 placeholder="Enter Your Email"
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password">
//                 <strong>Password:</strong>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter The Password"
//                 className="form-control"
//               />
//             </div>
//             <button className="btn btn-success w-100">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
