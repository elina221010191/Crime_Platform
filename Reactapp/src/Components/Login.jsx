import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/crime/user/login", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      Notify.success("Login successfully");
      reset();

      const userToken = response.data;
      localStorage.setItem("userToken", JSON.stringify(userToken));

      const userRole = userToken?.user?.userRole;
      if (userRole === "admin") {
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      Notify.failure(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mine">Sign in</p>
      <input
        type="email"
        {...register("userEmail", { required: "Email is required" })}
        className="email1"
        placeholder="Enter your email"
      />
      {errors.userEmail && <p>{errors.userEmail.message}</p>}

      <input
        type="password"
        {...register("userPassword", { required: "Password is required" })}
        className="email1"
        placeholder="Enter your password"
      />
      {errors.userPassword && <p>{errors.userPassword.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
