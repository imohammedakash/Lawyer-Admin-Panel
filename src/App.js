"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux"
import Home from './component/Home';
const PrivateRoute = ({ auth, children }) => {
  return auth ? children : <Navigate to="/login" />;
};


const App = () => {
  let accessToken = useSelector(state => state?.user?.user?.accessToken);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute auth={accessToken ? true : false}><Home /></PrivateRoute>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} />
    </Router>
  );
};

export default App;
