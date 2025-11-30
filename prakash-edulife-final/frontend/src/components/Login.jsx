import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login(){ const nav=useNavigate();
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('');
  const submit=async e=>{ e.preventDefault(); try{ const res=await axios.post(import.meta.env.VITE_API_URL+'/auth/login',{email,password}); localStorage.setItem('token',res.data.token); nav('/dashboard'); }catch(err){ setErr(err.response?.data?.message||'Login failed'); } };
  return (<div className='card'><div className='title'>Welcome to Prakash EduLife</div><form onSubmit={submit}><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} /><button>Login</button>{err && <div style={{color:'red',marginTop:8}}>{err}</div>}</form><a className='link' href='/register'>Go to Registration</a></div>); }
