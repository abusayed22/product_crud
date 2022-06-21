import { Routes, Route} from "react-router-dom";
import Home from "./commponents/pages/Home/Home";
import Header from "./commponents/partials/Header";
import Add from "./commponents/pages/Home/Add";
import Read from "./commponents/pages/Home/Read";
import axios from 'axios';

function App() {

  axios.defaults.baseURL = "http://127.0.0.1:8000"
  axios.defaults.headers.post['Accept'] = "application/json"

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
