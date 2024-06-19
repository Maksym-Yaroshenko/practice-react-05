import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <h1>Routing in React</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path="*" element={<div>Not Found Page</div>} />
      </Routes>
    </>
  );
}

export default App;
