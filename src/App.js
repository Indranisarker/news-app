import Navbar from "./components/Navbar";
import News from "./components/News";
import SignIn from "./components/SignIn";
import './css/style.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  const pageSize = 12;
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/general" element={<News key='general' pageSize={pageSize} category="general" />} />
      <Route exact path="/health" element={<News key='health' pageSize={pageSize} category="health" />} />
      <Route exact path="/business" element={<News key='business' pageSize={pageSize} category="business" />} />
      <Route exact path="/sports" element={<News key='sports' pageSize={pageSize} category="sports" />} />
      <Route exact path="/science" element={<News key='science' pageSize={pageSize} category="science" />} />
      <Route exact path="/technology" element={<News key='technology' pageSize={pageSize} category="technology" />} />
      <Route exact path="/entertainment" element={<News key='entertainment' pageSize={pageSize} category="entertainment" />} />
      <Route exact path="/sign-in" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
