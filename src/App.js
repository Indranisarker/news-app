import Navbar from "./components/Navbar";
import News from "./components/News";
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/general" element={<News key='general' pageSize={12} category="general" />} />
      <Route exact path="/health" element={<News key='health' pageSize={12} category="health" />} />
      <Route exact path="/business" element={<News key='business' pageSize={12} category="business" />} />
      <Route exact path="/sports" element={<News key='sports' pageSize={12} category="sports" />} />
      <Route exact path="/science" element={<News key='science' pageSize={12} category="science" />} />
      <Route exact path="/technology" element={<News key='technology' pageSize={12} category="technology" />} />
      <Route exact path="/entertainment" element={<News key='entertainment' pageSize={12} category="entertainment" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
