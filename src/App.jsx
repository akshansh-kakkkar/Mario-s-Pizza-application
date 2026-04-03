import { Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import PizzaOrderForm from "./components/PizzaOrderForm"
import Order from "./components/Order"
import Registered from "./components/Registered"
import RegistrationForm from "./components/RegistrationForm"
import React, { useEffect, useState } from "react"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation()
  React.useEffect(()=>{
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500);
    return ()=>{
      clearTimeout(timer)
    }
  },[location])
  return (
    <>
    {loading && <Loader />}
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/orderform" element={<PizzaOrderForm />}/>
      <Route path="/orderconfirm" element={<Order />}/>
      <Route path="/registerform" element={<RegistrationForm />}/>
      <Route path="/registered" element={<Registered/>}/>
    </Routes>
    </>
  )
}

export default App
