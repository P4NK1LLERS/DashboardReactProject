import Navbar from "../../components/NavBar.jsx";
import { useUserContext } from "../../UserContext.jsx";
import React, { useState } from 'react';
import "./dashboard.css";
import { useEffect } from 'react';


function Dashboard() {
  const userContext = useUserContext();
  const { user } = userContext;
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  fetch("http://localhost:3000/dashboard", { // Ajouter les headers pour l'authentification
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then(async res => { // Récupérer la réponse et afficher le message en fonction du status
    const json = await res.json();
    switch(res.status){
      case 200:
        console.log(JSON.stringify(json))
        break;
      default:
        console.log("Erreur: " + JSON.stringify(json));
        break;
    }
    
  });

  return (
    <div>
      <Navbar />
      <div className="alert-danger">
        Informations non CONTRACTUEL faites avec CHATGPT
      </div>
      <div className="home-container">
        <div className="home-content">
          <h1>🚀 Tableau de Bord</h1>
          <p>Bienvenue {user.email}, sur votre espace de gestion.</p> // Afficher l'email de l'utilisateur connecté
          <div className="stats-grid">
            <div className="stat-card">
              <h2>Utilisateurs</h2>
              <p>1,245</p>
            </div>
            <div className="stat-card">
              <h2>Ventes</h2>
              <p>830</p>
            </div>
            <div className="stat-card">
              <h2>Messages</h2>
              <p>57</p>
            </div>
            <div className="stat-card">
              <h2>Notifications</h2>
              <p>12</p>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Actions Rapides</h2>
            <div className="actions-grid">
              <button>📊 Voir les Statistiques</button>
              <button>📩 Gérer les Messages</button>
              <button>🛒 Suivi des Commandes</button>
              <button>🔧 Paramètres</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
