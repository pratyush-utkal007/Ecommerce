import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Category from "./pages/Category";
import { Privacy } from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./componets/layout/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navbar />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Category" element={<Category />}></Route>
        <Route exact path="/Privacy" element={<Privacy />}></Route>
        <Route exact path="/Registration" element={<Registration />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
