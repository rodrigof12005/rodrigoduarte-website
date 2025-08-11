import React, { useState } from 'react'; 
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Função para renderizar o componente correto com base no estado
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'experience': 
        return <Experience />;
      case 'contact': 
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* Passa o estado atual e a função para atualizá-lo como props para o Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main-content">
        {/* Renderiza o componente da seção ativa */}
        {renderSection()}
      </main>
    </div>
  );
}

export default App;