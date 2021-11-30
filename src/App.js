import React from 'react'
import Nav from "./Nav"
import About from "./components/About"
import Home from "./components/Home"
import Services from "./components/Services"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <>
    <Router>
      <Nav title="Router"/>
      <Routes>
        <Route path="/about" element={<About altText="React photo"/>} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    </>
  )
}
