
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './index.css'
import HomePage from "./Landing_Page/Home/HomePage"
import SignUp from "./Landing_Page/Signup/SignUp"
import AboutPage from "./Landing_Page/About/AboutPage"
import ProductPage from "./Landing_Page/Products/ProductPage"
import PricingPage from "./Landing_Page/Pricing/PricingPage"
import SupportPage from "./Landing_Page/Support/SupportPage"
import NotFound from './Landing_Page/NotFound'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Landing_Page/Signup/Login'
import { CookiesProvider } from 'react-cookie';
import AuthLayout from './Landing_Page/Layout/AuthLayout'
import MainLayout from './Landing_Page/Layout/MainLayout'



createRoot(document.getElementById('root')).render(
  <CookiesProvider>
  <BrowserRouter>
      <Routes>
        {/* AUTH-ONLY LAYOUT: no Navbar/Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* MAIN LAYOUT: with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Fallback: send any unknown URL to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
)
