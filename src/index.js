// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CoursDetails from "./components/CoursDetails";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import PaymentForm from "./components/PaymentForm";
import './style/App.scss';
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="CoursDetails" element={<CoursDetails />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="login" element={<Login />} />
          <Route path="UserProfile" element={<UserProfile />} />
          <Route path="register" element={<Register />} />
          <Route path="payment" element={<Payment />} />
          <Route path="paymentform" element={<PaymentForm />} />
           <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
