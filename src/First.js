import { Link } from "react-router-dom";
import './App.css';

function First() {

  return (
    <div className="App" >
      <Link to='/Apps'>Scientifique</Link><br></br>
      <Link to='/Mathhs'>Math</Link><br></br>
      <Link to='/Langues'>Langues</Link><br></br>
      <Link to='/Phylo'>Phylo</Link><br></br>
    </div>
  );
}

export default First;
