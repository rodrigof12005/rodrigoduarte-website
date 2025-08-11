import React from 'react';
import './Sidebar.css';
import profilePic from '/profile.jpg'; 

function Sidebar({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'SERVIÇOS', id: 'services' },
    { name: 'EXPERIÊNCIAS PROFISSIONAIS', id: 'experience' },
    { name: 'CONTATO', id: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src={profilePic} alt="Sua Foto" className="profile-pic" />
        <h4 className="your-name">RODRIGO DUARTE</h4>
        {/* NOVO: Botão de menu visível apenas em mobile */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="hamburger-icon"></span>
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Footer aqui se você ainda quiser mantê-lo */}
    </aside>
  );
}

export default Sidebar;