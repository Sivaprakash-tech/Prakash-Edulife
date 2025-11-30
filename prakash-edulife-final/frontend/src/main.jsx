import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
function App(){ return (<BrowserRouter><Routes><Route path='/' element={<Login/>} /><Route path='/register' element={<Register/>} /><Route path='/dashboard' element={<Dashboard/>} /></Routes></BrowserRouter>); }
createRoot(document.getElementById('root')).render(<App />)
