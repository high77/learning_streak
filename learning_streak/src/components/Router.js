import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Signup from "routes/Signup";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route exact path="/" element={<Home />} />
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
            <Route exact path="/signup" element={<Signup />}/>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
