import {HashRouter as Router, Route, Routes} from "react-router-dom"
import First from './First'
import Mathhs from './Mathhs'
import Apps from "./Apps";
import Langues from "./Langues";
import Phylo from "./Phylo";


function App() {

  return (
    <div className="App" >
      
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Apps" element={<Apps />} />
          <Route path="/Mathhs" element={<Mathhs />} />
          <Route path="/Langues" element={<Langues />} />
          <Route path="/Phylo" element={<Phylo />} />


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
