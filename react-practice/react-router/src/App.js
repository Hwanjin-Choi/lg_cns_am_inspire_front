import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Component1() {
  return <div>1 번 화면</div>;
}
function Component2() {
  return <div>2 번 화면</div>;
}
function Component3() {
  return <div>3 번 화면</div>;
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <a href="/1">Go to lin1</a>
        <Link to={"/2"}>Go to lin1</Link>
        <Link to={"/3"}>Go to lin1</Link>

        <Routes>
          <Route path="/1" element={<Component1 />} />
          <Route path="/2" element={<Component2 />} />
          <Route path="/3" element={<Component3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
