import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./Pages/register.jsx";
import Connexion from "./Pages/connexion.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import Home from "./Pages/Home/home.jsx";
import "./App.css";
import { UserProvider } from "./UserContext.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <UserProvider> // Utiliser le contexte pour gérer l'authentification
        <BrowserRouter> // Utiliser le router pour gérer les routes
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="connexion" element={<Connexion />} />
            <Route
              path="dashboard"
              element={
                <>
                  <ProtectedRoute />
                  <Dashboard />
                  <ProtectedRoute />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
