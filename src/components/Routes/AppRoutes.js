import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import MainNav from "../../Layout/MainNav/MainNav";
import RegisterPage from "../../pages/register"

const AppRoutes = () => {
  return (
    <Router>
      {/* <MainNav /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage/>}/>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
