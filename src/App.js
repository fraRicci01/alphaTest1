import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Login from "./pages/login";
import SignIn from './pages/signin';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

