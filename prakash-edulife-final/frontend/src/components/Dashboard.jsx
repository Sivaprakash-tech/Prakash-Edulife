import React,{useEffect,useState} from 'react'; import axios from 'axios';
export default function Dashboard(){ const [user,setUser]=useState(null);
  useEffect(()=>{ (async ()=>{ try{ const t=localStorage.getItem('token'); const res=await axios.get(import.meta.env.VITE_API_URL+'/students/me',{headers:{Authorization:'Bearer '+t}}); setUser(res.data); }catch(e){ console.error(e); } })(); },[]);
  return (<div style={{maxWidth:900,margin:'40px auto',padding:20}}><h1 style={{fontSize:24}}>Hello, {user?.name||'Student'}</h1><p>Welcome to your dashboard. This project demonstrates full devops pipeline — React, Node, Postgres, Docker, Kubernetes.</p></div>);
}
