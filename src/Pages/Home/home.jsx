import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/NavBar.jsx';
import './home.css';

// Page d'accueil
function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Bienvenue sur le Dashboard</h1>
        <p>Gérez vos données efficacement et en toute simplicité.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Analyse des données</h3>
            <p>Visualisez vos statistiques et performances.</p>
          </div>
          <div className="feature-card">
            <h3>Gestion des utilisateurs</h3>
            <p>Ajoutez, modifiez et supprimez des utilisateurs.</p>
          </div>
          <div className="feature-card">
            <h3>Paramétrages avancés</h3>
            <p>Personnalisez votre espace selon vos besoins.</p>
          </div>
        </div>
        <div className="actions-container">
          <Link to="/connexion" className="btn btn-primary">Connexion</Link>
          <Link to="/register" className="btn btn-secondary">Créer un compte</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
