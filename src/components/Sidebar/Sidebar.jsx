import React from 'react';
import './Sidebar.css';

import profilePic from '/profile.jpg'; 

function Sidebar({ activeSection, setActiveSection }) {
  // Array de objetos para renderizar os links de navegação
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'SERVIÇOS', id: 'services' },
    { name: 'EXPERIÊNCIAS PROFISSIONAIS', id: 'experience' },
    { name: 'CONTATO', id: 'contact' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={profilePic} alt="Sua Foto" className="profile-pic" />
        <h4 className="your-name">RODRIGO DUARTE</h4>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                // Adiciona a classe 'active' se o item for a seção ativa
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                // O onClick agora chama a função que altera o estado no App.jsx
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
     
    </aside>
  );
}

export default Sidebar;