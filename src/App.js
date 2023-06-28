import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import Details from "pages/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/categories/:idc" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
