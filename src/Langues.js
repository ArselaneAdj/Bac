import { useState } from 'react';
import './App.css';


function Langues() {

  const [math, setMath] = useState('')
  const [science, setScience] = useState('')
  const [physique, setPhysique] = useState('')
  const [arabe, setArabe] = useState('')
  const [fr, setFr] = useState('')
  const [eng, setEng] = useState('')
  const [sport, setSport] = useState('')
  const [hg, setHg] = useState('')
  const [islamiya, setIs] = useState('')
  const [phylo, setPhylo] = useState('')
  const [total, setTotal] = useState("")

  const count = () => {
    setTotal((math * 5 + science * 6 + physique * 5 + arabe * 3 + fr * 3 + eng * 3 + sport * 1 + hg * 2 + islamiya * 2 + phylo * 1)/31) ;
  }
  
  return (
    <div  className="App">
      <h2>Langues</h2>
      <div>
        <input placeholder='math' onChange={(e)=>setMath(e.target.value)} ></input>
        <input placeholder='science' onChange={(e)=>setScience(e.target.value)} ></input>
        <input placeholder='physique' onChange={(e)=>setPhysique(e.target.value)} ></input>
        <input placeholder='arabe' onChange={(e)=>setArabe(e.target.value)} ></input>
        <input placeholder='francais' onChange={(e)=>setFr(e.target.value)} ></input>
        <input placeholder='englais' onChange={(e)=>setEng(e.target.value)} ></input>
        <input placeholder='sport' onChange={(e)=>setSport(e.target.value)} ></input>
        <input placeholder='histoire-geo' onChange={(e)=>setHg(e.target.value)} ></input>
        <input placeholder='islamiya' onChange={(e)=>setIs(e.target.value)} ></input>
        <input placeholder='phylo' onChange={(e)=>setPhylo(e.target.value)} ></input>
      </div>
      <button onClick={count}>count</button>
      <h1>Moyenne: {total}</h1>
    </div>
  );
}

export default Langues;