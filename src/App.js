import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout/Layout";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<Loading/>} />
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
